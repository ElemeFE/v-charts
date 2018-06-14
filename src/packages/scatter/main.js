import { isArray } from 'utils-lite'
import { itemPoint } from '../../constants'
import { getFormated } from '../../utils'
import { line } from '../line/main'

function getScatterLegend (dataLabels, legendName) {
  return {
    data: dataLabels,
    formatter (name) {
      return legendName[name] != null ? legendName[name] : name
    }
  }
}

function getScatterTooltip (args) {
  const { tooltipTrigger } = args
  return {
    trigger: tooltipTrigger,
    formatter (item) {
      if (isArray(item)) {
        return item.map(i => getTooltipContent(i, args)).join('')
      } else {
        return getTooltipContent(item, args)
      }
    }
  }
}

function getTooltipContent (item, args) {
  const { labelMap, columns, dataType, digit } = args
  const tpl = []
  const { color, seriesName, data: { value } } = item
  tpl.push(`${itemPoint(color)} ${seriesName}<br>`)
  value.forEach((d, i) => {
    const name = labelMap[columns[i]] || columns[i]
    const num = isNaN(d) ? d : getFormated(d, dataType[columns[i]], digit)
    tpl.push(`${name}: ${num}<br>`)
  })
  return tpl.join('')
}

function getScatterXAxis (args) {
  const { xAxisName, axisVisible, xAxisType, rows, dataLabels, dimension } = args
  const data = []
  dataLabels.forEach(dataLabel => {
    const itemData = rows[dataLabel]
    itemData.forEach(item => {
      const name = item[dimension]
      if (name && !~data.indexOf(name)) data.push(name)
    })
  })

  return [{
    type: xAxisType,
    show: axisVisible,
    name: xAxisName,
    data
  }]
}

function getScatterYAxis (args) {
  const {
    min,
    max,
    scale,
    yAxisName,
    dataType,
    metrics,
    digit,
    axisVisible
  } = args

  return {
    type: 'value',
    show: axisVisible,
    scale,
    min,
    max,
    axisTick: { show: false },
    name: yAxisName,
    axisLabel: {
      formatter (val) { return getFormated(val, dataType[metrics[0]], digit) }
    }
  }
}

function getScatterSeries (args) {
  const {
    rows,
    dataLabels,
    columns,
    metrics,
    dimension,
    label,
    itemStyle,
    symbol,
    symbolSizeMax,
    symbolSize,
    symbolRotate,
    symbolOffset,
    cursor
  } = args
  const extraMetrics = columns.filter(column => {
    return !~metrics.indexOf(column) && column !== dimension
  })
  const numbers = []
  dataLabels.forEach(dataLabel => {
    rows[dataLabel].forEach(row => {
      numbers.push(row[metrics[1]])
    })
  })
  const maxNum = Math.max.apply(null, numbers)

  const series = []
  dataLabels.forEach(dataLabel => {
    const result = []
    const itemData = rows[dataLabel]
    itemData.forEach(item => {
      const itemResult = { value: [] }
      itemResult.value.push(item[dimension], item[metrics[0]], item[metrics[1]])
      extraMetrics.forEach(ext => { itemResult.value.push(item[ext]) })
      itemResult.symbolSize = symbolSize || (item[metrics[1]] / maxNum) * symbolSizeMax
      result.push(itemResult)
    })
    series.push({
      type: 'scatter',
      data: result,
      name: dataLabel,
      label,
      itemStyle,
      symbol,
      symbolRotate,
      symbolOffset,
      cursor
    })
  })
  return series
}

const scatter = (columns, rows, settings, extra) => {
  const {
    dimension = columns[0],
    metrics = [columns[1], columns[2]],
    dataType = {},
    xAxisType = 'category',
    xAxisName,
    yAxisName,
    digit = 2,
    legendName = {},
    labelMap = {},
    tooltipTrigger = 'item',
    axisVisible = true,
    symbolSizeMax = 50,
    symbol,
    symbolSize,
    symbolRotate,
    symbolOffset,
    cursor,
    min,
    max,
    scale,
    label,
    itemStyle
  } = settings

  if (isArray(rows)) {
    const lineSettings = Object.assign({}, settings, {
      xAxisName: xAxisName ? [xAxisName] : undefined,
      yAxisName: yAxisName ? [yAxisName] : undefined,
      scale: scale ? [scale] : undefined,
      min: min ? [min] : undefined,
      max: max ? [max] : undefined,
      dimension: dimension ? [dimension] : undefined
    })
    const options = line(columns, rows, lineSettings, extra)
    if (!options || !options.series) return {}
    options.series.forEach(item => {
      Object.assign(item, {
        type: 'scatter',
        symbol,
        symbolSize: symbolSize || 10,
        symbolRotate,
        symbolOffset,
        cursor,
        label,
        itemStyle
      })
    })
    return options
  }

  const { tooltipVisible, legendVisible } = extra
  const dataLabels = Object.keys(rows)

  const legend = legendVisible && getScatterLegend(dataLabels, legendName)
  const tooltip = tooltipVisible && getScatterTooltip({
    tooltipTrigger,
    labelMap,
    columns,
    dataType,
    digit
  })
  const xAxis = getScatterXAxis({
    xAxisName,
    axisVisible,
    xAxisType,
    dataLabels,
    dimension,
    rows
  })
  const yAxis = getScatterYAxis({
    min,
    max,
    scale,
    yAxisName,
    dataType,
    metrics,
    digit,
    axisVisible
  })
  const series = getScatterSeries({
    rows,
    dataLabels,
    columns,
    metrics,
    dimension,
    label,
    itemStyle,
    symbol,
    symbolSizeMax,
    symbolSize,
    symbolRotate,
    symbolOffset,
    cursor
  })
  return { legend, tooltip, xAxis, yAxis, series }
}

export { scatter }
