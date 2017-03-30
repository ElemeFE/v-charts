import { SIGN, getLegendName, itemPoint } from '../echarts-base'
import { getFormated, getStackMap } from '../util'

const dataHandler = {
  getLineLegends ({ measures, axisSite, yAxisType }) {
    let legends = []

    const formatter = getLegendName

    measures.forEach(measure => {
      let legendItem = ~axisSite.right.indexOf(measure)
        ? `${measure}${SIGN}${yAxisType[1]}`
        : `${measure}${SIGN}${yAxisType[0]}`
      legends.push(legendItem)
    })

    return legends.length ? { data: legends, formatter } : false
  },

  getLineXAxis ({ dimensions, rows, xAxisName }) {
    return dimensions.map((dimension, index) => ({
      type: 'category',
      nameLocation: 'middle',
      nameGap: 22,
      boundaryGap: false,
      name: xAxisName[index] || dimension,
      axisTick: { show: true, lineStyle: { color: '#eee' } },
      data: rows.map(row => row[dimension]),
      axisLabel: {
        formatter (v) {
          return String(v)
        }
      }
    }))
  },

  getLineSeries ({ rows, axisSite, yAxisType, dimensions, measures, area, stack }) {
    let series = []
    const dataTemp = {}
    const stackMap = stack && getStackMap(stack)
    measures.forEach(measure => { dataTemp[measure] = [] })
    rows.forEach(row => {
      measures.forEach(measure => {
        dataTemp[measure].push(row[measure] || 0)
      })
    })
    measures.forEach(measure => {
      let seriesItem = {
        name: measure,
        type: 'line',
        data: dataTemp[measure]
      }

      if (area) seriesItem.areaStyle = { normal: {} }

      if (~axisSite.right.indexOf(measure)) {
        seriesItem.yAxisIndex = 1
        seriesItem.name = `${measure}${SIGN}${yAxisType[1]}`
      } else {
        seriesItem.yAxisIndex = 0
        seriesItem.name = `${measure}${SIGN}${yAxisType[0]}`
      }

      if (stack && stackMap[measure]) seriesItem.stack = stackMap[measure]

      series.push(seriesItem)
    })
    return series.length ? series : false
  },

  getLineYAxis ({ yAxisName, yAxisType }) {
    const yAxisBase = { type: 'value', axisTick: { show: false } }
    let yAxis = []
    for (let i = 0; i < 2; i++) {
      if (yAxisType[i]) {
        yAxis[i] = Object.assign({}, yAxisBase, {
          axisLabel: {
            formatter (val) {
              return getFormated(val, yAxisType[i])
            }
          }
        })
      } else {
        yAxis[i] = Object.assign({}, yAxisBase)
      }
      yAxis[i].name = yAxisName[i] || ''
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
          const [name, type] = item.seriesName.split(SIGN)
          showData = getFormated(item.data, type)
          tpl.push(itemPoint(item.color))
          tpl.push(`${name}: ${showData}`)
          tpl.push('<br>')
        })
        return tpl.join('')
      }
    }
  }
}

const line = (columns, rows, settings) => {
  const {
    axisSite = { right: [] },
    yAxisType = ['normal', 'normal'],
    yAxisName = [],
    dimensions = [columns[0]],
    xAxisName = dimensions,
    area,
    stack
  } = settings
  let measures = columns.slice()
  if (settings.measures) {
    measures = settings.measures
  } else {
    measures.splice(columns.indexOf(dimensions[0]), 1)
  }
  const legend = dataHandler.getLineLegends({ measures, axisSite, yAxisType })
  const tooltip = dataHandler.getLineTooltip()
  const xAxis = dataHandler.getLineXAxis({ dimensions, rows, xAxisName })
  const yAxis = dataHandler.getLineYAxis({ yAxisName, yAxisType })
  const series = dataHandler.getLineSeries({ rows, stack, axisSite, yAxisType, dimensions, measures, area })
  if (!legend || !xAxis || !series) return false

  let options = { legend, xAxis, series, yAxis, tooltip }
  return options
}

export { line }
