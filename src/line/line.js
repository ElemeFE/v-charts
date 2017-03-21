import { SIGN, getLabelName, tipPointStyle } from '../echarts-base'
import { getFormated } from '../util'

const dataHandler = {
  getLineLegends (data, axisOption, axisType) {
    let legends = []

    const formatter = getLabelName

    Object.keys(data).forEach(key => {
      if (key !== 'key') {
        let legendItem = axisOption.right.indexOf(key) > -1
          ? `${key}${SIGN}${axisType[1]}`
          : `${key}${SIGN}${axisType[0]}`
        legends.push(legendItem)
      }
    })

    return legends.length ? { data: legends, formatter } : false
  },

  getLineXAxis (data) {
    if (!data.key) return false
    return [{
      type: 'category',
      axisTick: { show: true, lineStyle: { color: '#eee' } },
      data: data.key,
      axisLabel: {
        formatter (v) {
          return String(v)
        }
      }
    }]
  },

  getLineSeries (data, axisOption, axisType) {
    let series = []

    Object.keys(data).forEach(key => {
      if (key !== 'key') {
        let seriesItem = {
          name: key,
          type: 'line',
          data: data[key]
        }

        if (axisOption.right.indexOf(key) > -1) {
          seriesItem.yAxisIndex = 1
          seriesItem.name = `${key}${SIGN}${axisType[1]}`
        } else {
          seriesItem.yAxisIndex = 0
          seriesItem.name = `${key}${SIGN}${axisType[0]}`
        }

        series.push(seriesItem)
      }
    })
    return series.length ? series : false
  },

  getLineYAxis (axisName, axisType) {
    const yAxisBase = { type: 'value', axisTick: { show: false } }
    let yAxis = []
    for (let i = 0; i < 2; i++) {
      if (axisType[i]) {
        yAxis[i] = Object.assign({}, yAxisBase, {
          axisLabel: {
            formatter (val) {
              return getFormated(val, axisType[i])
            }
          }
        })
      } else {
        yAxis[i] = Object.assign({}, yAxisBase)
      }
      yAxis[i].name = axisName[i] || ''
    }
    return yAxis
  },

  getLineTooltip () {
    return {
      trigger: 'axis',
      formatter (items) {
        let tpl = []
        tpl.push(`${items[0].name}<br>`)
        items.forEach(item => {
          let showData
          showData = getFormated(item.data, item.seriesName.split(SIGN)[1])
          tpl.push(`<span style="background-color:${item.color};${tipPointStyle}"></span>`)
          tpl.push(`${item.seriesName.split(SIGN)[0]}: ${showData}`)
          tpl.push('<br>')
        })
        return tpl.join('')
      }
    }
  }
}
/**
 * 折线图
 * settings = {
 *   axisOption: {
 *     right: [a], 右Y轴中数据
 *     left: [b]
 *   }，
 *   axisType: ['KMB', 'percent'], 坐标轴类型 支持KMB, percent, normal
 *   axisName: ['title1', 'title2'], 坐标轴标题
 * }
 * data = {
 *   key: ['1', '2', '3', '4', '5', '6'],
 *   a: [2000, 5000, 3000, 10000, 5000, 6000],
 *   b: [7, 3, 4, 2, 5, 3]
 * }
 * @param {Object} data 原始数据
 * @param {Object} settings 配置项
 * @returns Object
 */
const line = (data, settings) => {
  if (!data) return false

  const { axisOption = { right: [] }, axisType = [], axisName = [] } = settings
  const legend = dataHandler.getLineLegends(data, axisOption, axisType)
  const xAxis = dataHandler.getLineXAxis(data)
  const series = dataHandler.getLineSeries(data, axisOption, axisType)
  const yAxis = dataHandler.getLineYAxis(axisName, axisType)
  const tooltip = dataHandler.getLineTooltip()

  if (!legend || !xAxis || !series) return false

  let options = { legend, xAxis, series, yAxis, tooltip }
  return options
}

export { line }
