import { SIGN, itemPoint, getLegendName } from '../echarts-base'
import { getFormated } from '../util'

function getFunnelTooltip () {
  return {
    trigger: 'item',
    formatter (item) {
      let tpl = []
      const name = item.name.split(SIGN)[0]
      const type = item.name.split(SIGN)[1]
      tpl.push(itemPoint(item.color))
      tpl.push(`${name}: ${getFormated(item.data.realValue, type)}`)
      return tpl.join('')
    }
  }
}

function getFunnelLegend ({ dimension, metrics, rows, sequence, dataType }) {
  const legendData = sequence.map(item => {
    return `${item}${SIGN}${dataType}`
  })
  const formatter = getLegendName

  return { data: legendData, formatter }
}

function getFunnelSeries ({ dimension, metrics, rows, sequence, dataType, ascending }) {
  let series = {
    type: 'funnel',
    label: { normal: { formatter (item) { return item.name.split(SIGN)[0] } } }
  }
  rows.sort((a, b) => sequence.indexOf(a[dimension]) - sequence.indexOf(b[dimension]))

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
      name: `${row[dimension]}${SIGN}${dataType}`,
      value: (index + 1) * step,
      realValue: row[metrics]
    }))
  } else {
    series.data = rows.map(row => ({
      name: `${row[dimension]}${SIGN}${dataType}`,
      value: row[metrics],
      realValue: row[metrics]
    }))
  }

  if (ascending) series.sort = 'ascending'
  return series
}

const funnel = (columns, rows, settings, status) => {
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

  const tooltip = tooltipVisible && getFunnelTooltip()
  const legend = legendVisible && getFunnelLegend({ dimension, metrics, rows, sequence, dataType })
  const series = getFunnelSeries({ dimension, metrics, rows, sequence, dataType, ascending })
  const options = { tooltip, legend, series }
  return options
}

export { funnel }
