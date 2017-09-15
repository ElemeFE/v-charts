import { itemPoint } from '../../echarts-base'
import { getFormated } from '../../util'
import 'echarts/lib/chart/funnel'

function getFunnelTooltip (dataType, digit) {
  return {
    trigger: 'item',
    formatter (item) {
      let tpl = []
      tpl.push(itemPoint(item.color))
      tpl.push(`${item.name}: ${getFormated(item.data.realValue, dataType, digit)}`)
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

export const funnel = (outerColumns, outerRows, settings, extra) => {
  const columns = outerColumns.slice()
  const rows = outerRows.slice()
  const {
    dataType = 'normal',
    dimension = columns[0],
    sequence = rows.map(row => row[dimension]),
    digit = 2,
    ascending
  } = settings
  const { tooltipVisible, legendVisible } = extra
  let metrics
  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    let metricsTemp = columns.slice()
    metricsTemp.splice(columns.indexOf(dimension), 1)
    metrics = metricsTemp[0]
  }

  const tooltip = tooltipVisible && getFunnelTooltip(dataType, digit)
  const legend = legendVisible && { data: sequence }
  const seriesParams = { dimension, metrics, rows, sequence, ascending }
  const series = getFunnelSeries(seriesParams)
  const options = { tooltip, legend, series }
  return options
}
