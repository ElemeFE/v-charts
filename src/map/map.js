import { getMapJSON, getFormated } from '../util'
import echarts from '../echarts-base'
import 'echarts/lib/chart/map'

function getTooltip (dataType, digit) {
  return {
    formatter (item) {
      let tpl = []
      tpl.push(`${item.name}:<br>`)
      tpl.push(getFormated(item.value, dataType, digit))
      return tpl.join(' ')
    }
  }
}

function getSeries (args) {
  const {
    position,
    selectData,
    label,
    dimension,
    metrics,
    rows
  } = args

  const result = {
    name: 'map',
    type: 'map',
    mapType: position,
    data: []
  }

  if (typeof label === 'object') {
    result.label = label
  } else if (label) {
    result.label = {
      normal: { show: true },
      emphasis: { show: true }
    }
  }

  rows.forEach(row => {
    result.data.push({
      name: row[dimension],
      value: row[metrics],
      selected: selectData
    })
  })

  return [result]
}

export const map = (columns, rows, settings, extra) => {
  const {
    position = 'china',
    selectData = false,
    selectedMode,
    label = true,
    dataType = 'normal',
    digit = 2,
    dimension = columns[0],
    metrics = columns[1],
    room,
    center,
    aspectScale,
    boundingCoords,
    zoom,
    scaleLimit
  } = settings
  const { tooltipVisible } = extra

  const tooltip = tooltipVisible && getTooltip(dataType, digit)
  const seriesParams = {
    position,
    selectData,
    label,
    dimension,
    metrics,
    rows
  }
  const series = getSeries(seriesParams)
  const geo = {
    selectedMode,
    room,
    center,
    aspectScale,
    boundingCoords,
    zoom,
    scaleLimit
  }
  return getMapJSON(position).then(json => {
    echarts.registerMap(position, json)
    return { series, tooltip, geo }
  })
}
