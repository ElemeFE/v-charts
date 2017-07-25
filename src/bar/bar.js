import { itemPoint } from '../echarts-base'
import { getFormated, getStackMap } from '../util'
import 'echarts/lib/chart/bar'

function getBarDimAxis (args) {
  const { rows, dimAxisName, dimension, axisVisible } = args
  return dimension.map(item => ({
    type: 'category',
    name: dimAxisName,
    nameLocation: 'middle',
    nameGap: 22,
    data: rows.map(row => row[item]),
    axisLabel: {
      formatter (v) {
        return String(v)
      }
    },
    show: axisVisible
  }))
}

function getBarMeaAxis (args) {
  const { meaAxisName, meaAxisType, axisVisible, digit } = args
  const meaAxisBase = {
    type: 'value',
    axisTick: {
      show: false
    },
    show: axisVisible
  }
  let meaAxis = []

  for (let i = 0; i < 2; i++) {
    if (meaAxisType[i]) {
      meaAxis[i] = Object.assign({}, meaAxisBase, {
        axisLabel: {
          formatter (val) {
            return getFormated(val, meaAxisType[i], digit)
          }
        }
      })
    } else {
      meaAxis[i] = Object.assign({}, meaAxisBase)
    }
    meaAxis[i].name = meaAxisName[i] || ''
  }

  return meaAxis
}

function getBarTooltip (args) {
  const { axisSite, isHistogram, meaAxisType, digit } = args
  const secondAxis = isHistogram ? axisSite.right : axisSite.top
  return {
    trigger: 'axis',
    formatter (items) {
      let tpl = []
      tpl.push(`${items[0].name}<br>`)
      items.forEach(item => {
        const seriesName = item.seriesName
        const type = ~secondAxis.indexOf(seriesName)
          ? meaAxisType[1]
          : meaAxisType[0]
        tpl.push(itemPoint(item.color))
        tpl.push(`${seriesName}: `)
        tpl.push(getFormated(item.value, type, digit))
        tpl.push('<br>')
      })

      return tpl.join('')
    }
  }
}

function getBarSeries (args) {
  const { rows, metrics, stack, axisSite, isHistogram } = args
  let series = []
  const seriesTemp = {}
  const secondAxis = isHistogram ? axisSite.right : axisSite.top
  const secondDimAxisIndex = isHistogram ? 'yAxisIndex' : 'xAxisIndex'
  const stackMap = stack && getStackMap(stack)
  metrics.forEach(item => { seriesTemp[item] = [] })
  rows.forEach(row => {
    metrics.forEach(item => {
      seriesTemp[item].push(row[item])
    })
  })
  series = Object.keys(seriesTemp).map(item => {
    const seriesItem = {
      name: item,
      type: 'bar',
      data: seriesTemp[item],
      [secondDimAxisIndex]: ~secondAxis.indexOf(item) ? '1' : '0'
    }

    if (stack && stackMap[item]) seriesItem.stack = stackMap[item]

    return seriesItem
  })

  return series.length ? series : false
}

export const bar = (columns, rows, settings, extra) => {
  const {
    axisSite = { top: [] },
    dimension = [columns[0]],
    stack = {},
    axisVisible = true,
    digit = 2
  } = settings
  const { tooltipVisible, legendVisible } = extra
  let metrics = columns.slice()
  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1)
  }
  const meaAxisType = settings.xAxisType || ['normal', 'normal']
  const meaAxisName = settings.xAxisName || []
  const dimAxisName = settings.yAxisName || ''
  const isHistogram = false

  const legend = legendVisible && { data: metrics }
  const yAxis = getBarDimAxis({ rows, dimAxisName, dimension, axisVisible })
  const xAxis = getBarMeaAxis({ meaAxisName, meaAxisType, axisVisible, digit })
  const series = getBarSeries({ rows, metrics, stack, axisSite, isHistogram })
  const tooltipParams = { axisSite, isHistogram, meaAxisType, digit }
  const tooltip = tooltipVisible && getBarTooltip(tooltipParams)
  const options = { legend, yAxis, series, xAxis, tooltip }
  return options
}

export const histogram = (columns, rows, settings, status) => {
  const {
    axisSite = { right: [] },
    dimension = [columns[0]],
    stack = {},
    axisVisible = true,
    digit = 2
  } = settings
  const { tooltipVisible, legendVisible } = status
  let metrics = columns.slice()
  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1)
  }
  const meaAxisType = settings.yAxisType || ['normal', 'normal']
  const meaAxisName = settings.yAxisName || []
  const dimAxisName = settings.xAxisName || ''
  const isHistogram = true

  const legend = legendVisible && { data: metrics }
  const xAxis = getBarDimAxis({ rows, dimAxisName, dimension, axisVisible })
  const yAxis = getBarMeaAxis({ meaAxisName, meaAxisType, axisVisible, digit })
  const series = getBarSeries({ rows, metrics, stack, axisSite, isHistogram })
  const tooltipParams = { axisSite, isHistogram, meaAxisType, digit }
  const tooltip = tooltipVisible && getBarTooltip(tooltipParams)
  const options = { legend, yAxis, series, xAxis, tooltip }
  return options
}
