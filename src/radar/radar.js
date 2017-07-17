import { itemPoint } from '../echarts-base'
import { getFormated } from '../util'
import 'echarts/lib/chart/radar'

function getRadarLegend (rows, dimension) {
  let legendData = rows.map(row => row[dimension])

  return { data: legendData }
}

function getRadarTooltip (dataType, radar, digit) {
  const typeTemp = []
  const nameTemp = []
  radar.indicator.map((item, index) => {
    typeTemp[index] = dataType[item.name]
    nameTemp[index] = item.name
  })
  return {
    formatter (item) {
      const tpl = []
      tpl.push(itemPoint(item.color))
      tpl.push(`${item.seriesName}<br />`)
      item.data.forEach((val, index) => {
        tpl.push(`${nameTemp[index]}: `)
        tpl.push(`${getFormated(val, typeTemp[index], digit)}<br />`)
      })
      return tpl.join('')
    }
  }
}

function getRadarSetting (rows, metrics) {
  const settingBase = {
    indicator: [],
    shape: 'circle',
    splitNumber: 5
  }
  let indicatorTemp = {}
  rows.forEach(items => {
    metrics.forEach(item => {
      if (!indicatorTemp[item]) {
        indicatorTemp[item] = [items[item]]
      } else {
        indicatorTemp[item].push(items[item])
      }
    })
  })
  settingBase.indicator = Object.keys(indicatorTemp).map(key => {
    return {
      name: key,
      max: Math.max.apply(null, indicatorTemp[key])
    }
  })
  return settingBase
}

function getRadarSeries (args) {
  const { rows, dimension, metrics, radar } = args
  let radarIndexObj = {}
  radar.indicator.forEach((item, index) => {
    radarIndexObj[item.name] = index
  })

  const series = rows.map(row => {
    const seriesBase = {
      name: row[dimension],
      type: 'radar',
      data: []
    }
    let dataArr = []
    Object.keys(row).forEach(key => {
      if (~metrics.indexOf(key)) dataArr[radarIndexObj[key]] = row[key]
    })
    seriesBase.data.push(dataArr)
    return seriesBase
  })
  return series
}

const radar = (columns, rows, settings, extra) => {
  const {
    dataType = {},
    dimension = columns[0],
    digit = 2
  } = settings
  const { tooltipVisible, legendVisible } = extra
  let metrics = columns.slice()
  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension), 1)
  }
  const legend = legendVisible && getRadarLegend(rows, dimension)
  const radar = getRadarSetting(rows, metrics)
  const tooltip = tooltipVisible && getRadarTooltip(dataType, radar, digit)
  const series = getRadarSeries({ rows, dimension, metrics, radar })
  const options = { legend, tooltip, radar, series }
  return options
}

export { radar }
