import { itemPoint, HEAT_MAP_COLOR, HEAT_BMAP_COLOR } from '../../constants'
import { getBmap, getAmap, getMapJSON, getFormated } from '../../utils'
import echarts from 'echarts/lib/echarts'

function getAxisList (rows, label) {
  const result = []
  rows.forEach(row => {
    if (!~result.indexOf(row[label])) result.push(row[label])
  })
  return result
}

function getData (args) {
  const { rows, innerXAxisList, innerYAxisList, xDim, yDim, metrics, type, extraMetrics } = args
  let result = null
  if (type === 'cartesian') {
    result = rows.map(row => {
      const xIndex = innerXAxisList.indexOf(row[xDim])
      const yIndex = innerYAxisList.indexOf(row[yDim])
      const value = metrics ? row[metrics] : 1
      const extraData = extraMetrics.map(m => row[m] || '-')
      return { value: [xIndex, yIndex, value].concat(extraData) }
    })
  } else {
    result = rows.map(row => {
      const value = metrics ? row[metrics] : 1
      return { value: [row[xDim], row[yDim], value] }
    })
  }
  return result
}

function getAxis (list, name) {
  return {
    type: 'category',
    data: list,
    name,
    nameLocation: 'end',
    splitArea: { show: true }
  }
}

function getVisualMap (args) {
  const { innerMin: min, innerMax: max, type, heatColor, series } = args
  let result = {
    min,
    max,
    calculable: true
  }
  let extra = null
  if (type === 'map') {
    extra = {
      orient: 'vertical',
      left: 0,
      bottom: 0,
      inRange: { color: heatColor || HEAT_MAP_COLOR }
    }
    if (!series[0].data.length) extra.show = false
  } else if (type === 'bmap' || type === 'amap') {
    extra = {
      show: false,
      orient: 'vertical',
      left: 0,
      bottom: 0,
      inRange: { color: heatColor || HEAT_BMAP_COLOR }
    }
  } else {
    extra = {
      orient: 'horizontal',
      left: 'center',
      bottom: 10,
      dimension: 2,
      inRange: heatColor && { color: heatColor }
    }
  }

  return Object.assign(result, extra)
}

function getSeries (args) {
  const { chartData } = args
  return [{
    type: 'heatmap',
    data: chartData
  }]
}

function getTooltip (args) {
  const { dataType, innerXAxisList, innerYAxisList, digit, extraMetrics, metrics } = args

  return {
    trigger: 'item',
    formatter ({ color, data: { value: [xDim, yDim, value, ...extraData] } }) {
      const tpl = []
      tpl.push(`${innerXAxisList[xDim]} ~ ${innerYAxisList[yDim]}<br>`)
      extraMetrics.forEach((m, index) => {
        tpl.push(`${m}: ${extraData[index]}<br>`)
      })
      tpl.push(`${itemPoint(color)} ${metrics}: ${getFormated(value, dataType, digit)}<br>`)
      return tpl.join('')
    }
  }
}

export const heatmap = (columns, rows, settings, status) => {
  const {
    type = 'cartesian', // cartesian, map, bmap,
    xAxisList,
    yAxisList,
    dimension = [columns[0], columns[1]],
    metrics = columns[2],
    dataType = 'normal',
    min,
    max,
    digit,
    bmap,
    amap,
    geo,
    key,
    v = '2.0',
    position,
    positionJsonLink,
    beforeRegisterMap,
    pointSize = 10,
    blurSize = 5,
    heatColor,
    yAxisName,
    xAxisName,
    beforeRegisterMapOnce,
    mapURLProfix = 'https://unpkg.com/echarts@3.6.2/map/json/',
    specialAreas = {}
  } = settings
  const { tooltipVisible } = status
  let innerXAxisList = xAxisList
  let innerYAxisList = yAxisList
  let chartData = []
  // add extraMetrics prop for data which only display in tooltip
  const extraMetrics = []
  const mainColumn = dimension.concat([metrics])
  columns.forEach(column => {
    if (!~mainColumn.indexOf(column)) extraMetrics.push(column)
  })

  if (type === 'cartesian') {
    if (!innerXAxisList || !innerXAxisList.length) {
      innerXAxisList = getAxisList(rows, dimension[0])
    }
    if (!innerYAxisList || !innerYAxisList.length) {
      innerYAxisList = getAxisList(rows, dimension[1])
    }
    chartData = getData({
      rows,
      innerXAxisList,
      innerYAxisList,
      xDim: dimension[0],
      yDim: dimension[1],
      metrics,
      type,
      extraMetrics
    })
  } else {
    chartData = getData({
      rows,
      xDim: dimension[0],
      yDim: dimension[1],
      metrics,
      type,
      extraMetrics
    })
  }
  let metricsList = metrics ? rows.map(row => row[metrics]) : [0, 5]
  if (!metricsList.length) metricsList = [0]
  const innerMin = min || Math.min.apply(null, metricsList)
  const innerMax = max || Math.max.apply(null, metricsList)

  const xAxis = getAxis(innerXAxisList, xAxisName)
  const yAxis = getAxis(innerYAxisList, yAxisName)
  const series = getSeries({ chartData })
  const visualMap = getVisualMap({ innerMin, innerMax, type, heatColor, series })
  const tooltip = tooltipVisible && getTooltip({
    dataType,
    innerXAxisList,
    innerYAxisList,
    digit,
    extraMetrics,
    metrics
  })

  const options = { visualMap, series }
  if (type === 'bmap') {
    Object.assign(options.series[0], { coordinateSystem: 'bmap', pointSize, blurSize })

    return getBmap(key, v).then(_ => {
      return Object.assign({ bmap }, options)
    })
  } else if (type === 'map') {
    options.series[0].coordinateSystem = 'geo'
    return getMapJSON({
      position,
      positionJsonLink,
      beforeRegisterMapOnce,
      mapURLProfix
    }).then(json => {
      const geoAttr = Object.assign({ map: position }, geo)
      if (beforeRegisterMap) json = beforeRegisterMap(json)
      echarts.registerMap(position, json, specialAreas)
      return Object.assign({ geo: geoAttr }, options)
    })
  } else if (type === 'amap') {
    Object.assign(options.series[0], { coordinateSystem: 'amap', pointSize, blurSize })

    return getAmap(key, v).then(_ => {
      return Object.assign({ amap }, options)
    })
  } else {
    return Object.assign({ xAxis, yAxis, tooltip }, options)
  }
}
