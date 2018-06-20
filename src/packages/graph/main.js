import { unique, getLinearValue, get, getArrMin, getArrMax } from 'utils-lite'
import { axisSiteHandler } from '../../utils'

function getSeries (args) {
  const {
    rows,
    dimension,
    metrics,
    idMetrics,
    extraMetrics,
    silentMetrics,
    mixinMetrics,
    links,
    layout,
    innerCategorys,
    categoryMetrics,
    categoryIndexMetrics,
    showSize,
    sizeMax,
    sizeMin,
    labelMap,
    showCartesian2d
  } = args
  const valueList = rows.map(row => row[metrics])
  let valueMin = getArrMin(valueList)
  let valueMax = getArrMax(valueList)
  let params = { k: null, b: null }
  if (showSize) params = getLinearValue(valueMin, sizeMin, valueMax, sizeMax)
  const data = rows.map(row => {
    let extraData = {}
    let silentData = {}
    if (extraMetrics) extraMetrics.forEach(item => { extraData[item] = row[item] })
    if (silentMetrics) silentMetrics.forEach(item => { silentData[item] = row[item] })
    const subData = {
      name: row[dimension],
      value: [row[dimension], row[metrics]],
      id: idMetrics ? row[idMetrics] : row[dimension],
      v_extra: extraData,
      v_silent: silentData
    }
    if (showSize) subData.symbolSize = params.k * subData.value[1] + params.b
    if (categoryMetrics) subData.category = innerCategorys.indexOf(row[categoryMetrics])
    if (categoryIndexMetrics) subData.category = row[categoryIndexMetrics]
    if (mixinMetrics) mixinMetrics.forEach(item => { Object.assign(subData, row[item]) })
    return subData
  })
  const result = {
    name: get(labelMap, metrics, metrics),
    type: 'graph',
    layout,
    links,
    data
  }
  if (showCartesian2d) result.coordinateSystem = 'cartesian2d'
  if (categoryMetrics || categoryIndexMetrics) {
    result.categories = innerCategorys.map(i => ({ name: i }))
  }
  return [result]
}

export function graph (columns, rows, settings, extra) {
  const {
    dimension = columns[0],
    metrics = columns[1],
    extraMetrics,
    silentMetrics,
    mixinMetrics,
    idMetrics,
    categoryMetrics,
    categoryIndexMetrics,
    categorys,
    metricsType,
    links,
    showSize,
    sizeMax = 40,
    sizeMin = 10,
    legendName = {},
    labelMap = {},
    digit,
    layout = 'force',
    showCartesian2d,
    axisSite = {
      left: null,
      right: null
    },
    axisGroup = {
      leftSide: ['left'],
      rightSide: ['right']
    },
    dimAxis = 'x',
    // xAxisName,
    yAxisName,
    yAxisType,
    xAxisType
  } = settings
  let innerCategorys = categorys || (categoryMetrics
    ? unique(rows.map(row => row[categoryMetrics]))
    : [metrics])

  let realAxisSite = axisSiteHandler(axisSite, axisGroup, metrics)
  console.log(realAxisSite)

  const series = getSeries({
    rows,
    dimension,
    metrics,
    idMetrics,
    extraMetrics,
    silentMetrics,
    mixinMetrics,
    links,
    layout,
    innerCategorys,
    categoryMetrics,
    categoryIndexMetrics,
    showSize,
    sizeMax,
    sizeMin,
    labelMap,
    showCartesian2d
  })
  const options = {
    series,
    v_category: innerCategorys,
    v_legend: {
      legendName,
      labelMap
    },
    v_tooltip: {
      digit,
      metricsType
    },
    v_axis: {
      show: showCartesian2d,
      metricsType,
      realAxisSite,
      yAxisName,
      yAxisType,
      xAxisType,
      dimAxis,
      dimension,
      metrics,
      rows
    }
  }
  console.log('options', options)
  return options
}
