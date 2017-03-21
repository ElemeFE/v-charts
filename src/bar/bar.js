import { SIGN, getLabelName, tipPointStyle } from '../echarts-base'
import { getFormated } from '../util'

const dataHandler = {
  getStackOptions (stackItems) {
    let stackOptions = {}

    Object.keys(stackItems).forEach(key => {
      stackItems[key].forEach(value => {
        stackOptions[value] = key
      })
    })

    return stackOptions
  },

  getBarLegends (data, axisOption, axisType, stack) {
    let legends = []
    const formatter = getLabelName

    if (!stack || !Object.keys(stack).length) {
      data.some(items => {
        legends = dataHandler.getBarLegendItem(items, axisOption, axisType)
        return true
      })
    } else {
      data.forEach(items => {
        const legendItem = dataHandler.getBarLegendItem(items, axisOption, axisType)

        legendItem.forEach(i => {
          if (legends.indexOf(i) === -1) legends.push(i)
        })
      })
    }

    return legends.length ? { data: legends, formatter } : false
  },

  getBarLegendItem (items, axisOption, axisType) {
    const legendTempArr = []

    Object.keys(items).forEach(item => {
      if (item !== 'name') {
        if ((axisOption.top && axisOption.top.indexOf(item) > -1) ||
          (axisOption.right && axisOption.right.indexOf(item) > -1)) {
          legendTempArr.push(`${item}${SIGN}${axisType[1]}`)
        } else {
          legendTempArr.push(`${item}${SIGN}${axisType[0]}`)
        }
      }
    })

    return legendTempArr
  },

  getBarYAxis (data) {
    return [{
      type: 'category',
      data: data.map(value => value.name),
      axisLabel: {
        formatter (v) {
          return String(v)
        }
      }
    }]
  },

  getBarXAxis (axisName, axisType) {
    const xAxisBase = { type: 'value', axisTick: { show: false } }
    let xAxis = []

    for (let i = 0; i < 2; i++) {
      if (axisType[i]) {
        xAxis[i] = Object.assign({}, xAxisBase, {
          axisLabel: {
            formatter (val) {
              return getFormated(val, axisType[i])
            }
          }
        })
      } else {
        xAxis[i] = Object.assign({}, xAxisBase)
      }
      xAxis[i].name = axisName[i] || ''
    }

    return xAxis
  },

  getBarSeries (data, axisOption, legend, stackOptions) {
    let series = []

    legend.data.forEach((legendItem, index) => {
      const legendItemName = legendItem.split(SIGN)[0]
      let legendData = data.map(item => item[legendItemName])
      let seriesBase = {
        name: legendItem,
        type: 'bar',
        data: legendData,
        itemStyle: { normal: { label: { show: false } } }
      }

      seriesBase.xAxisIndex = axisOption.top.indexOf(legendItemName) > -1 ? 1 : 0
      if (stackOptions[legendItemName]) {
        seriesBase.stack = stackOptions[legendItemName]
      }
      series.push(seriesBase)
    })

    return series.length ? series : false
  },

  getBarTooltip () {
    return {
      trigger: 'axis',
      formatter (items) {
        let tpl = []

        tpl.push(`${String(items[0].name).split(SIGN)[0]}<br>`)
        items.forEach(item => {
          tpl.push(`<span style="background-color:${item.color};${tipPointStyle}"></span>`)
          tpl.push(`${item.seriesName.split(SIGN)[0]}: `)
          tpl.push(getFormated(item.value, item.seriesName.split(SIGN)[1]))
          tpl.push('<br>')
        })

        return tpl.join('')
      }
    }
  },

  getColumnSeries (data, axisOption, legend, stackOptions) {
    let series = []

    legend.data.forEach((legendItem, index) => {
      const legendItemName = legendItem.split(SIGN)[0]
      let legendData = data.map(item => item[legendItemName])
      let seriesBase = {
        name: legendItem,
        type: 'bar',
        data: legendData,
        itemStyle: { normal: { label: { show: false } } }
      }

      seriesBase.yAxisIndex = axisOption.right && axisOption.right.indexOf(legendItemName) > -1 ? 1 : 0
      if (stackOptions[legendItemName]) {
        seriesBase.stack = stackOptions[legendItemName]
      }
      series.push(seriesBase)
    })

    return series.length ? series : false
  }
}
/**
 * 条形图
 * settings = {
 *   axisOption: {
 *     top: ['201604'], 置于上坐标轴的数据
 *     bottom: ['201603']
 *   },
 *   axisType: ['KMB', 'percent'], 坐标轴类型 支持KMB, percent, normal
 *   axisName: ['title1', 'title2'], 坐标轴标题
 *   stack: {
 *     time: ['201603', '201604'] 堆叠配置
 *   }
 * }
 * data = [
 *   { '201603': 2.95, '201604': 2.1, 'name': '上海' },
 *   { '201603': 1.95, '201604': 2.15, 'name': '北京' },
 *   { '201603': 3.15, '201604': 2.4, 'name': '杭州' },
 *   { '201603': 3.15, '201604': 2.4, 'name': '广州' },
 *   { '201603': 3.15, '201604': 2.4, 'name': '深圳' }
 * ]
 */
const bar = (data, settings) => {
  const { axisOption = { top: [] }, axisType = [], axisName = [], stack = {} } = settings
  const stackOptions = dataHandler.getStackOptions(stack)
  const legend = dataHandler.getBarLegends(data, axisOption, axisType, stack)
  const yAxis = dataHandler.getBarYAxis(data)
  const xAxis = dataHandler.getBarXAxis(axisName, axisType)
  const series = dataHandler.getBarSeries(data, axisOption, legend, stackOptions)
  const tooltip = dataHandler.getBarTooltip()
  const options = { legend, yAxis, series, xAxis, tooltip }
  return options
}
/**
 * 柱状图
 * 配置同条形图
 */
const column = (data, settings) => {
  const { axisOption = { top: [] }, axisType = [], axisName = [], stack = {} } = settings
  const legend = dataHandler.getBarLegends(data, axisOption, axisType, stack)
  const stackOptions = dataHandler.getStackOptions(stack)
  const xAxis = dataHandler.getBarYAxis(data, axisOption, axisType)
  const yAxis = dataHandler.getBarXAxis(axisName, axisType)
  const series = dataHandler.getColumnSeries(data, axisOption, legend, stackOptions)
  const tooltip = dataHandler.getBarTooltip()
  const options = { legend, yAxis, series, xAxis, tooltip }
  return options
}

export { bar, column }
