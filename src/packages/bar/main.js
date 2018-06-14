import { itemPoint } from '../../constants'
import { getFormated, getStackMap } from '../../utils'
import { set, get, cloneDeep } from 'utils-lite'
// default opacity of bar while dim-axis type is 'value'
const VALUE_AXIS_OPACITY = 0.5

function getBarDimAxis (args) {
  const { innerRows, dimAxisName, dimension, axisVisible, dimAxisType, dims } = args
  return dimension.map(item => ({
    type: 'category',
    name: dimAxisName,
    nameLocation: 'middle',
    nameGap: 22,
    data: dimAxisType === 'value'
      ? getValueAxisData(dims)
      : innerRows.map(row => row[item]),
    axisLabel: {
      formatter (v) {
        return String(v)
      }
    },
    show: axisVisible
  }))
}

function getValueAxisData (dims) {
  const max = Math.max.apply(null, dims)
  const min = Math.min.apply(null, dims)
  const result = []
  for (let i = min; i <= max; i++) {
    result.push(i)
  }
  return result
}

function getBarMeaAxis (args) {
  const {
    meaAxisName,
    meaAxisType,
    axisVisible,
    digit,
    scale,
    min,
    max
  } = args
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
    meaAxis[i].scale = scale[i] || false
    meaAxis[i].min = min[i] || null
    meaAxis[i].max = max[i] || null
  }

  return meaAxis
}

function getBarTooltip (args) {
  const { axisSite, isHistogram, meaAxisType, digit, labelMap } = args
  let secondAxis = isHistogram
    ? axisSite.right || []
    : axisSite.top || []
  if (labelMap) {
    secondAxis = secondAxis.map(item => {
      return labelMap[item] === undefined ? item : labelMap[item]
    })
  }
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

function getValueData (seriesTemp, dims) {
  const max = Math.max.apply(null, dims)
  const min = Math.min.apply(null, dims)
  const result = []
  for (let i = min; i <= max; i++) {
    const index = dims.indexOf(i)
    if (~index) {
      result.push(seriesTemp[index])
    } else {
      result.push(null)
    }
  }
  return result
}

function getBarSeries (args) {
  const {
    innerRows,
    metrics,
    stack,
    axisSite,
    isHistogram,
    labelMap,
    itemStyle,
    label,
    showLine = [],
    dimAxisType,
    barGap,
    opacity,
    dims
  } = args
  let series = []
  const seriesTemp = {}
  const secondAxis = isHistogram
    ? axisSite.right || []
    : axisSite.top || []
  const secondDimAxisIndex = isHistogram ? 'yAxisIndex' : 'xAxisIndex'
  const stackMap = stack && getStackMap(stack)
  metrics.forEach(item => { seriesTemp[item] = [] })
  innerRows.forEach(row => {
    metrics.forEach(item => {
      seriesTemp[item].push(row[item])
    })
  })
  series = Object.keys(seriesTemp).map((item, index) => {
    const data = dimAxisType === 'value'
      ? getValueData(seriesTemp[item], dims)
      : seriesTemp[item]
    const seriesItem = {
      name: labelMap[item] != null ? labelMap[item] : item,
      type: ~showLine.indexOf(item) ? 'line' : 'bar',
      data,
      [secondDimAxisIndex]: ~secondAxis.indexOf(item) ? '1' : '0'
    }

    if (stack && stackMap[item]) seriesItem.stack = stackMap[item]

    if (label) seriesItem.label = label
    if (itemStyle) seriesItem.itemStyle = itemStyle

    let itemOpacity = opacity || get(seriesItem, 'itemStyle.normal.opacity')
    if (dimAxisType === 'value') {
      seriesItem.barGap = barGap
      seriesItem.barCategoryGap = '1%'
      if (itemOpacity == null) itemOpacity = VALUE_AXIS_OPACITY
    }

    if (itemOpacity != null) {
      set(seriesItem, 'itemStyle.normal.opacity', itemOpacity)
    }

    return seriesItem
  })

  return series.length ? series : false
}

function getLegend (args) {
  const { metrics, labelMap, legendName } = args
  if (!legendName && !labelMap) return { data: metrics }
  const data = labelMap
    ? metrics.map(item => (labelMap[item] == null ? item : labelMap[item]))
    : metrics
  return {
    data,
    formatter (name) {
      return legendName[name] != null ? legendName[name] : name
    }
  }
}

function getDims (rows, dimension) {
  return rows.map(row => row[dimension[0]])
}

export const bar = (columns, rows, settings, extra) => {
  const innerRows = cloneDeep(rows)
  const {
    axisSite = {},
    dimension = [columns[0]],
    stack = {},
    axisVisible = true,
    digit = 2,
    dataOrder = false,
    scale = [false, false],
    min = [null, null],
    max = [null, null],
    legendName = {},
    labelMap = {},
    label,
    itemStyle,
    showLine,
    barGap = '-100%',
    opacity
  } = settings
  const { tooltipVisible, legendVisible } = extra
  let metrics = columns.slice()
  if (axisSite.top && axisSite.bottom) {
    metrics = axisSite.top.concat(axisSite.bottom)
  } else if (axisSite.bottom && !axisSite.right) {
    metrics = axisSite.bottom
  } else if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1)
  }
  const meaAxisType = settings.xAxisType || ['normal', 'normal']
  const dimAxisType = settings.yAxisType || 'category'
  const meaAxisName = settings.xAxisName || []
  const dimAxisName = settings.yAxisName || ''
  const isHistogram = false

  if (dataOrder) {
    const { label, order } = dataOrder
    if (!label || !order) {
      console.warn('Need to provide name and order parameters')
    } else {
      innerRows.sort((a, b) => {
        if (order === 'desc') {
          return a[label] - b[label]
        } else {
          return b[label] - a[label]
        }
      })
    }
  }
  const dims = getDims(innerRows, dimension)

  const legend = legendVisible && getLegend({ metrics, labelMap, legendName })
  const yAxis = getBarDimAxis({
    innerRows,
    dimAxisName,
    dimension,
    axisVisible,
    dimAxisType,
    dims
  })
  const xAxis = getBarMeaAxis({
    meaAxisName,
    meaAxisType,
    axisVisible,
    digit,
    scale,
    min,
    max
  })
  const series = getBarSeries({
    innerRows,
    metrics,
    stack,
    axisSite,
    isHistogram,
    labelMap,
    itemStyle,
    label,
    showLine,
    dimAxisType,
    dimension,
    barGap,
    opacity,
    dims
  })
  const tooltipParams = { axisSite, isHistogram, meaAxisType, digit, labelMap }
  const tooltip = tooltipVisible && getBarTooltip(tooltipParams)
  const options = { legend, yAxis, series, xAxis, tooltip }
  return options
}

export const histogram = (columns, rows, settings, status) => {
  const innerRows = cloneDeep(rows)
  const {
    axisSite = {},
    dimension = [columns[0]],
    stack = {},
    axisVisible = true,
    digit = 2,
    dataOrder = false,
    scale = [false, false],
    min = [null, null],
    max = [null, null],
    labelMap = {},
    legendName = {},
    label,
    itemStyle,
    showLine,
    barGap = '-100%',
    opacity
  } = settings

  if (dataOrder) {
    const { label, order } = dataOrder
    if (!label || !order) {
      console.warn('Need to provide name and order parameters')
    } else {
      innerRows.sort((a, b) => {
        if (order === 'desc') {
          return a[label] - b[label]
        } else {
          return b[label] - a[label]
        }
      })
    }
  }

  const { tooltipVisible, legendVisible } = status
  let metrics = columns.slice()
  if (axisSite.left && axisSite.right) {
    metrics = axisSite.left.concat(axisSite.right)
  } else if (axisSite.left && !axisSite.right) {
    metrics = axisSite.left
  } else if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1)
  }
  const meaAxisType = settings.yAxisType || ['normal', 'normal']
  const dimAxisType = settings.xAxisType || 'category'
  const meaAxisName = settings.yAxisName || []
  const dimAxisName = settings.xAxisName || ''
  const isHistogram = true
  const dims = getDims(innerRows, dimension)

  const legend = legendVisible && getLegend({ metrics, labelMap, legendName })
  const xAxis = getBarDimAxis({
    innerRows,
    dimAxisName,
    dimension,
    axisVisible,
    dimAxisType,
    dims
  })
  const yAxis = getBarMeaAxis({
    meaAxisName,
    meaAxisType,
    axisVisible,
    digit,
    scale,
    min,
    max
  })
  const series = getBarSeries({
    innerRows,
    metrics,
    stack,
    axisSite,
    isHistogram,
    labelMap,
    itemStyle,
    label,
    showLine,
    dimAxisType,
    dimension,
    barGap,
    opacity,
    dims
  })
  const tooltipParams = { axisSite, isHistogram, meaAxisType, digit, labelMap }
  const tooltip = tooltipVisible && getBarTooltip(tooltipParams)
  const options = { legend, yAxis, series, xAxis, tooltip }
  return options
}
