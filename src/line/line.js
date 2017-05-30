import { SIGN, getLegendName, itemPoint } from '../echarts-base'
import { getFormated, getStackMap } from '../util'

function getLineLegends ({ metrics, axisSite, yAxisType }) {
  let legends = []

  const formatter = getLegendName

  metrics.forEach(item => {
    let legendItem = ~axisSite.right.indexOf(item)
      ? `${item}${SIGN}${yAxisType[1]}`
      : `${item}${SIGN}${yAxisType[0]}`
    legends.push(legendItem)
  })

  return legends.length ? { data: legends, formatter } : false
}

function getLineXAxis ({ dimension, rows, xAxisName, axisVisible }) {
  return dimension.map((item, index) => ({
    type: 'category',
    nameLocation: 'middle',
    nameGap: 22,
    boundaryGap: false,
    name: xAxisName[index] || '',
    axisTick: { show: true, lineStyle: { color: '#eee' } },
    data: rows.map(row => row[item]),
    axisLabel: {
      formatter (v) {
        return String(v)
      }
    },
    show: axisVisible
  }))
}

function getLineSeries ({ rows, axisSite, yAxisType, dimension, metrics, area, stack }) {
  let series = []
  const dataTemp = {}
  const stackMap = stack && getStackMap(stack)
  metrics.forEach(item => { dataTemp[item] = [] })
  rows.forEach(row => {
    metrics.forEach(item => {
      dataTemp[item].push(row[item] || 0)
    })
  })
  metrics.forEach(item => {
    let seriesItem = {
      name: item,
      type: 'line',
      data: dataTemp[item]
    }

    if (area) seriesItem.areaStyle = { normal: {} }

    if (~axisSite.right.indexOf(item)) {
      seriesItem.yAxisIndex = 1
      seriesItem.name = `${item}${SIGN}${yAxisType[1]}`
    } else {
      seriesItem.yAxisIndex = 0
      seriesItem.name = `${item}${SIGN}${yAxisType[0]}`
    }

    if (stack && stackMap[item]) seriesItem.stack = stackMap[item]

    series.push(seriesItem)
  })
  return series.length ? series : false
}

function getLineYAxis ({ yAxisName, yAxisType, axisVisible }) {
  const yAxisBase = { type: 'value', axisTick: { show: false }, show: axisVisible }
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
}

function getLineTooltip () {
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

const line = (columns, rows, settings, status) => {
  const {
    axisSite = { right: [] },
    yAxisType = ['normal', 'normal'],
    yAxisName = [],
    dimension = [columns[0]],
    xAxisName = [],
    area,
    stack
  } = settings
  const { tooltipVisible, legendVisible, axisVisible } = status
  let metrics = columns.slice()

  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1)
  }

  const legend = legendVisible && getLineLegends({ metrics, axisSite, yAxisType })
  const tooltip = tooltipVisible && getLineTooltip()
  const xAxis = getLineXAxis({ dimension, rows, xAxisName, axisVisible })
  const yAxis = getLineYAxis({ yAxisName, yAxisType, axisVisible })
  const series = getLineSeries({ rows, stack, axisSite, yAxisType, dimension, metrics, area })
  if (!xAxis || !series) return false

  let options = { legend, xAxis, series, yAxis, tooltip }
  return options
}

export { line }
