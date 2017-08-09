import { default as echarts, itemPoint } from '../echarts-base'
import { getMapJSON, clone } from '../util'

import 'echarts/lib/chart/heatmap'

function getHeatmapXAxis (args) {
  const { insertRows, dimension, axisVisible } = args
  let data = []
  insertRows.map((row) => {
    if (data.indexOf(row[dimension[0]]) === -1) {
      data.push(row[dimension[0]])
    }
  })
  return {
    type: 'category',
    data: data,
    splitGeo: {
      show: true
    },
    show: axisVisible
  }
}

function getHeatmapYAxis (args) {
  const { insertRows, dimension, axisVisible } = args
  let data = []
  insertRows.map((row) => {
    if (data.indexOf(row[dimension[1]]) === -1) {
      data.push(row[dimension[1]])
    }
  })
  return {
    type: 'category',
    data: data,
    splitGeo: {
      show: true
    },
    show: axisVisible
  }
}

function getHeatmapTooltip (args) {
  const { columns } = args
  return {
    formatter (item) {
      const tpl = []
      tpl.push(itemPoint(item.color))
      tpl.push(`${item.seriesName}<br />`)
      tpl.push(`${columns[0]}: ${item.value[0]}<br/>`)
      tpl.push(`${columns[1]}: ${item.value[1]}<br/>`)
      tpl.push(`${columns[2]}: ${item.value[2]}<br/>`)
      return tpl.join('')
    }
  }
}

function getHeatmapSeries (args) {
  const { insertRows, columns } = args

  const seriesData = insertRows.map(row => {
    const serieData = [row[columns[0]], row[columns[1]], row[columns[2]] ? row[columns[2]] : '-']
    return serieData
  })
  return [
    {
      name: columns[2],
      type: 'heatmap',
      data: seriesData,
      label: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

function getHeatmapVisualMap (args) {
  const { insertRows, columns, visualMapSets } = args
  let valueArr = []
  insertRows.map(row => {
    valueArr.push(row[columns[2]])
  })
  const min = visualMapSets.min || Math.min(...valueArr)
  const max = visualMapSets.max || Math.max(...valueArr)
  const inRange = visualMapSets.inRange || { color: ['#f6efa6', '#d88273', '#bf444c'] }
  return {
    min: min,
    max: max,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    top: 10,
    inRange: inRange
  }
}

function getGeoHeatmapSeries (args) {
  const { insertRows, dimension } = args

  return [
    {
      name: dimension[0],
      type: 'heatmap',
      coordinateSystem: 'geo',
      data: insertRows
    }
  ]
}

function getGeoHeatmapVisualMap (args) {
  const { insertRows, visualMapSets } = args
  let valueArr = []
  insertRows.map(row => {
    valueArr.push(row[2])
  })
  const min = visualMapSets.min === undefined ? Math.min(...valueArr) : visualMapSets.min
  const max = visualMapSets.max === undefined ? Math.max(...valueArr) : visualMapSets.max
  const splitNumber = visualMapSets.splitNumber || 0
  const inRange = visualMapSets.inRange || { color: ['#f6efa6', '#d88273', '#bf444c'] }
  return {
    min: min,
    max: max,
    splitNumber: splitNumber,
    inRange: inRange
  }
}

export const heatmap = (columns, rows, settings, extra) => {
  const insertRows = clone(rows)
  const {
    dimension = [columns[0], columns[1]],
    axisVisible = true
  } = settings
  const { tooltipVisible } = extra
  const visualMapSets = settings.visualMap || { min: undefined, max: undefined }
  const xAxis = getHeatmapXAxis({ insertRows, dimension, axisVisible })
  const yAxis = getHeatmapYAxis({ insertRows, dimension, axisVisible })
  const tooltip = tooltipVisible && getHeatmapTooltip({ columns })
  const series = getHeatmapSeries({ insertRows, columns })
  const visualMap = getHeatmapVisualMap({ insertRows, columns, visualMapSets })
  const options = { tooltip, xAxis, yAxis, series, visualMap }
  return options
}

export const Geoheatmap = (columns, rows, settings, extra) => {
  const insertRows = clone(rows)
  const {
    dimension = [columns[0]],
    position
  } = settings

  const visualMapSets = settings.visualMap || { min: undefined, max: undefined }
  const series = getGeoHeatmapSeries({ insertRows, dimension })
  const visualMap = getGeoHeatmapVisualMap({ insertRows, visualMapSets })
  return getMapJSON(position).then(json => {
    echarts.registerMap(position, json)
    const geo = { map: position }
    console.log({ series, visualMap, geo })
    return { series, visualMap, geo }
  })
}
