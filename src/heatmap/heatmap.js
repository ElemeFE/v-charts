import { itemPoint } from '../echarts-base'
import { clone } from '../util'
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
    splitArea: {
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
    splitArea: {
      show: true
    },
    show: axisVisible
  }
}

function getHeatmapTooltip (args) {
  const {columns} = args
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

export const heatmap = (columns, rows, settings, extra) => {
  const insertRows = clone(rows)
  const {
    dimension = [columns[0], columns[1]],
    axisVisible = true
  } = settings
  const { tooltipVisible } = extra

  console.log(rows)
  const xAxis = getHeatmapXAxis({ insertRows, dimension, axisVisible })
  const yAxis = getHeatmapYAxis({ insertRows, dimension, axisVisible })
  const tooltip = tooltipVisible && getHeatmapTooltip({columns})
  const series = getHeatmapSeries({ insertRows, columns })
  const visualMap = {
    min: 0,
    max: 24,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    top: 10
  }
  console.log('xAxis', xAxis)
  console.log('yAxis', yAxis)
  console.log('series', series)
  const options = { tooltip, xAxis, yAxis, series, visualMap }
  return options
}
