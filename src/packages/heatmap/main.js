import { default as echarts, itemPoint, HEAT_MAP_COLOR, HEAT_BMAP_COLOR } from '../../echarts-base'
import 'echarts/lib/chart/heatmap'
import 'echarts/lib/component/visualMap'
import 'echarts/extension/bmap/bmap'
import 'echarts/lib/chart/map'
import { getBmap, getMapJSON, getFormated } from '../../utils'

function getAxisList (rows, label) {
  const result = []
  rows.forEach(row => {
    if (!~result.indexOf(row[label])) result.push(row[label])
  })
  return result
}

function getData (args) {
  const { rows, innerXAxisList, innerYAxisList, xDim, yDim, metrics, type } = args
  let result = null
  if (type === 'cartesian') {
    result = rows.map(row => {
      const xIndex = innerXAxisList.indexOf(row[xDim])
      const yIndex = innerYAxisList.indexOf(row[yDim])
      const value = metrics ? row[metrics] : 1
      return [xIndex, yIndex, value]
    })
  } else {
    result = rows.map(row => {
      const value = metrics ? row[metrics] : 1
      return [row[xDim], row[yDim], value]
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
  const { innerMin: min, innerMax: max, type, heatColor } = args
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
  } else if (type === 'bmap') {
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
  const { dataType, innerXAxisList, innerYAxisList, digit } = args

  return {
    trigger: 'item',
    formatter ({ color, data: [xDim, yDim, value] }) {
      const tpl = []
      tpl.push(`${innerYAxisList[yDim]}<br>`)
      tpl.push(`${itemPoint(color)} ${innerXAxisList[xDim]}: `)
      tpl.push(getFormated(value, dataType, digit))
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
    geo,
    key,
    position,
    positionJsonLink,
    beforeRegisterMap,
    pointSize = 10,
    blurSize = 5,
    heatColor,
    yAxisName,
    xAxisName
  } = settings
  const { tooltipVisible } = status
  let innerXAxisList = xAxisList
  let innerYAxisList = yAxisList
  let chartData = []
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
      type
    })
  } else {
    chartData = getData({
      rows,
      xDim: dimension[0],
      yDim: dimension[1],
      metrics,
      type
    })
  }
  const metricsList = metrics ? rows.map(row => row[metrics]) : [0, 5]
  const innerMin = min || Math.min.apply(null, metricsList)
  const innerMax = max || Math.max.apply(null, metricsList)

  const xAxis = getAxis(innerXAxisList, xAxisName)
  const yAxis = getAxis(innerYAxisList, yAxisName)
  const visualMap = getVisualMap({ innerMin, innerMax, type, heatColor })
  const series = getSeries({ chartData })
  const tooltip = tooltipVisible && getTooltip({
    dataType,
    innerXAxisList,
    innerYAxisList,
    digit
  })

  const options = { visualMap, series }
  if (type === 'bmap') {
    Object.assign(options.series[0], { coordinateSystem: 'bmap', pointSize, blurSize })

    return getBmap(key).then(_ => {
      return Object.assign({ bmap }, options)
    })
  } else if (type === 'map') {
    options.series[0].coordinateSystem = 'geo'

    return getMapJSON(position, positionJsonLink).then(json => {
      const geoAttr = Object.assign({ map: position }, geo)
      if (beforeRegisterMap) json = beforeRegisterMap(json)
      echarts.registerMap(position, json)
      console.log(Object.assign({ geo: geoAttr }, options))
      return Object.assign({ geo: geoAttr }, options)
    })
  } else {
    return Object.assign({ xAxis, yAxis, tooltip }, options)
  }
}
