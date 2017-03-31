import { SIGN, itemPoint, getLegendName } from '../echarts-base'
import { getFormated } from '../util'

const dataHandler = {
  getFunnelTooltip () {
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
  },

  getFunnelLegend ({ dimension, measure, rows, sequence, dataType }) {
    const legendData = sequence.map(item => {
      return `${item}${SIGN}${dataType}`
    })
    const formatter = getLegendName

    return { data: legendData, formatter }
  },

  getFunnelSeries ({ dimension, measure, rows, sequence, dataType, ascending }) {
    let series = {
      type: 'funnel',
      label: { normal: { formatter (item) { return item.name.split(SIGN)[0] } } }
    }
    rows.sort((a, b) => sequence.indexOf(a[dimension]) - sequence.indexOf(b[dimension]))

    let falseFunnel = false
    rows.some((row, index) => {
      if (index && row[measure] > rows[index - 1][measure]) {
        falseFunnel = true
        return true
      }
    })

    const step = 100 / rows.length

    if (falseFunnel) {
      series.data = rows.slice().reverse().map((row, index) => ({
        name: `${row[dimension]}${SIGN}${dataType}`,
        value: (index + 1) * step,
        realValue: row[measure]
      }))
    } else {
      series.data = rows.map(row => ({
        name: `${row[dimension]}${SIGN}${dataType}`,
        value: row[measure],
        realValue: row[measure]
      }))
    }

    if (ascending) series.sort = 'ascending'
    return series
  }
}

const funnel = (columns, rows, settings) => {
  const {
    dataType = 'normal',
    dimension = columns[0],
    sequence = rows.map(row => row[dimension]),
    ascending
  } = settings
  let measure
  if (settings.measure) {
    measure = settings.measure
  } else {
    let measureTemp = columns.slice()
    measureTemp.splice(columns.indexOf(dimension), 1)
    measure = measureTemp[0]
  }

  const tooltip = dataHandler.getFunnelTooltip()
  const legend = dataHandler.getFunnelLegend({ dimension, measure, rows, sequence, dataType })
  const series = dataHandler.getFunnelSeries({ dimension, measure, rows, sequence, dataType, ascending })
  const options = { tooltip, legend, series }
  return options
}

export { funnel }
