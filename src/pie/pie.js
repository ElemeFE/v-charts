import { itemPoint } from '../echarts-base'
import { getFormated } from '../util'
import 'echarts/lib/chart/pie'

const pieRadius = 100
const ringRadius = [80, 100]
const pieOffsetY = 200

function getPieSeries (args) {
  const {
    rows,
    dataType,
    percentShow,
    dimension,
    metrics,
    radius,
    offsetY,
    selectedMode,
    hoverAnimation
  } = args

  let series = {
    type: 'pie',
    radius,
    selectedMode,
    hoverAnimation,
    data: [],
    center: ['50%', offsetY]
  }
  if (percentShow) {
    series.label = {
      normal: {
        show: true,
        formatter (item) {
          let tpl = []
          tpl.push(`${item.name}:`)
          tpl.push(getFormated(item.value, dataType))
          tpl.push(`(${item.percent}%)`)
          return tpl.join(' ')
        }
      }
    }
  }
  series.data = rows.map(row => ({
    name: row[dimension],
    value: row[metrics]
  }))

  return series
}

function getPieLegend (args) {
  const { rows, dimension, legendLimit } = args
  let legend = rows.map(row => row[dimension])
  return legend.length
    ? { data: legend, show: legend.length < legendLimit }
    : false
}

function getPieTooltip (dataType) {
  return {
    formatter (item) {
      let tpl = []
      tpl.push(itemPoint(item.color))
      tpl.push(`${item.name}:`)
      tpl.push(getFormated(item.value, dataType))
      tpl.push(`(${item.percent}%)`)
      return tpl.join(' ')
    }
  }
}

const pie = (columns, rows, settings, extra, isRing) => {
  const {
    dataType = 'normal',
    percentShow,
    dimension = columns[0],
    metrics = columns[1],
    radius = isRing ? ringRadius : pieRadius,
    offsetY = pieOffsetY,
    legendLimit = 30,
    selectedMode = false,
    hoverAnimation = true
  } = settings
  const { tooltipVisible, legendVisible } = extra
  const seriesParams = {
    rows,
    dataType,
    percentShow,
    dimension,
    metrics,
    radius,
    offsetY,
    selectedMode,
    hoverAnimation
  }
  const series = getPieSeries(seriesParams)
  const legend = legendVisible && getPieLegend({ rows, dimension, legendLimit })
  const tooltip = tooltipVisible && getPieTooltip(dataType)
  const options = { series, legend, tooltip }
  return options
}

const ring = (columns, rows, settings, extra) => {
  return pie(columns, rows, settings, extra, true)
}

export { pie, ring }
