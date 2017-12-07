import { default as echarts, itemPoint } from '../../echarts-base'
import { getMapJSON, getFormated } from '../../utils'

function getTooltip (dataType, digit, dataStore, metrics, color, labelMap) {
  return {
    formatter (item) {
      let tpl = []
      tpl.push(`${item.name}<br>`)
      metrics.forEach((label, index) => {
        let title = labelMap[label] != null ? labelMap[label] : label
        tpl.push(`${itemPoint(color[index])} ${title} : `)
        if (dataStore[item.name]) {
          tpl.push(getFormated(dataStore[item.name][label], dataType[label], digit))
        } else {
          tpl.push('-')
        }
        tpl.push('<br>')
      })
      return tpl.join(' ')
    }
  }
}

function getSeries (args) {
  const {
    position,
    selectData,
    dimension,
    metrics,
    rows,
    label,
    itemStyle,
    selectedMode,
    roam,
    center,
    aspectScale,
    boundingCoords,
    zoom,
    labelMap,
    scaleLimit,
    mapGrid
  } = args
  const result = []
  const mapBase = {
    type: 'map',
    mapType: position
  }

  metrics.forEach(itemName => {
    const itemResult = Object.assign({
      name: labelMap[itemName] != null ? labelMap[itemName] : itemName,
      data: [],
      selectedMode,
      roam,
      center,
      aspectScale,
      boundingCoords,
      zoom,
      scaleLimit
    }, mapBase)

    if (mapGrid) {
      Object.keys(mapGrid).forEach(key => {
        itemResult[key] = mapGrid[key]
      })
    }

    setGeoLabel(itemStyle, itemResult, 'itemStyle')
    setGeoLabel(label, itemResult, 'label')

    rows.forEach(row => {
      itemResult.data.push({
        name: row[dimension],
        value: row[itemName],
        selected: selectData
      })
    })
    result.push(itemResult)
  })

  return result
}

function setGeoLabel (value, target, label) {
  if (typeof value === 'object') {
    target[label] = value
  } else if (value) {
    target[label] = {
      normal: { show: true },
      emphasis: { show: true }
    }
  }
}

function getLegendMap (args) {
  const { metrics, legendName, labelMap } = args
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

export const map = (columns, rows, settings, extra) => {
  const {
    position = 'china',
    selectData = false,
    selectedMode,
    label = true,
    dataType = {},
    digit = 2,
    dimension = columns[0],
    roam,
    center,
    aspectScale,
    boundingCoords,
    zoom,
    scaleLimit,
    legendName = {},
    labelMap = {},
    mapGrid,
    itemStyle,
    positionJsonLink,
    beforeRegisterMap
  } = settings
  let metrics = columns.slice()
  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension), 1)
  }
  const { tooltipVisible, legendVisible, color } = extra
  const dataStore = {}
  rows.forEach(row => { dataStore[row[dimension]] = row })
  const tooltip = tooltipVisible && getTooltip(dataType, digit, dataStore, metrics, color, labelMap)
  const legend = legendVisible && getLegendMap({ metrics, legendName, labelMap })
  const seriesParams = {
    position,
    selectData,
    label,
    itemStyle,
    dimension,
    metrics,
    rows,
    selectedMode,
    roam,
    center,
    aspectScale,
    boundingCoords,
    zoom,
    labelMap,
    scaleLimit,
    mapGrid
  }
  const series = getSeries(seriesParams)

  return getMapJSON(position, positionJsonLink).then(json => {
    if (beforeRegisterMap) json = beforeRegisterMap(json)
    echarts.registerMap(position, json)
    return { series, tooltip, legend }
  })
}
