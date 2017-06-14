import { itemPoint } from '../echarts-base'
import { getFormated } from '../util'
import 'echarts/lib/chart/funnel'

function getFunnelTooltip (dataType) {
  return {
    trigger: 'item',
    formatter (item) {
      let tpl = []
      tpl.push(itemPoint(item.color))
      tpl.push(`${item.name}: ${getFormated(item.data.realValue, dataType)}`)
      return tpl.join('')
    }
  }
}

function getFunnelSeries (args) {
  const { dimension, metrics, rows, sequence, ascending } = args
  let series = { type: 'funnel' }
  rows.sort((a, b) => {
    return sequence.indexOf(a[dimension]) - sequence.indexOf(b[dimension])
  })

  let falseFunnel = false
  rows.some((row, index) => {
    if (index && row[metrics] > rows[index - 1][metrics]) {
      falseFunnel = true
      return true
    }
  })

  const step = 100 / rows.length

  if (falseFunnel) {
    series.data = rows.slice().reverse().map((row, index) => ({
      name: row[dimension],
      value: (index + 1) * step,
      realValue: row[metrics]
    }))
  } else {
    series.data = rows.map(row => ({
      name: row[dimension],
      value: row[metrics],
      realValue: row[metrics]
    }))
  }

  if (ascending) series.sort = 'ascending'
  return series
}

const funnel = (outerColumns, outerRows, settings, status) => {
  const columns = outerColumns.slice()
  const rows = outerRows.slice()
  const {
    dataType = 'normal',
    dimension = columns[0],
    sequence = rows.map(row => row[dimension]),
    ascending
  } = settings
  const { tooltipVisible, legendVisible } = status
  let metrics
  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    let metricsTemp = columns.slice()
    metricsTemp.splice(columns.indexOf(dimension), 1)
    metrics = metricsTemp[0]
  }

  const tooltip = tooltipVisible && getFunnelTooltip(dataType)
  const legend = legendVisible && { data: sequence }
  const seriesParams = { dimension, metrics, rows, sequence, ascending }
  const series = getFunnelSeries(seriesParams)
  const options = { tooltip, legend, series }
  return options
}

export { funnel }
