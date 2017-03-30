import { itemPoint } from '../echarts-base'
import { getFormated } from '../util'
const pieRadius = 100
const ringRadius = [80, 100]
const pieOffsetY = 200

const dataHandler = {
  getPieSeries (args) {
    const {
      rows, dataType, percentShow, dimension, measure,
      radius, offsetY
    } = args

    let series = {
      type: 'pie',
      radius,
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
    series.data = rows.map(row => ({ name: row[dimension], value: row[measure] }))

    return series
  },

  getPieLegend ({ rows, dimension, legendLimit }) {
    let legend = rows.map(row => row[dimension])
    return legend.length
      ? { data: legend, show: legend.length < legendLimit }
      : false
  },

  getPieTooltip (dataType) {
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
}

const pie = (columns, rows, settings, isRing) => {
  const {
    dataType = 'normal',
    percentShow,
    dimension = columns[0],
    measure = columns[1],
    radius = isRing ? ringRadius : pieRadius,
    offsetY = pieOffsetY,
    legendLimit = 30
  } = settings

  const series = dataHandler.getPieSeries({
    rows, dataType, percentShow, dimension, measure, radius, offsetY
  })
  const legend = dataHandler.getPieLegend({ rows, dimension, legendLimit })
  const tooltip = dataHandler.getPieTooltip(dataType)
  if (!legend) return false
  const options = { series, legend, tooltip }
  return options
}

const ring = (columns, rows, settings) => pie(columns, rows, settings, true)

export { pie, ring }
