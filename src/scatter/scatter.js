// import { itemPoint } from '../echarts-base'
import { getFormated } from '../util'
import 'echarts/lib/chart/scatter'

// const scatterRange = [10, 80]
function getScatterLegend (rows, dimension) {
  const legendArray = Object.keys(rows[0])
  return { data: legendArray }
}

function getScatterTooltip (rows, columns) {
  return {
    formatter (data) {
      const tpl = []
      tpl.push(`${data.seriesName}</br>`)
      columns.forEach((column, index) => {
        tpl.push(`${column}: ${data.data[index]}</br>`)
      })
      return tpl.join('')
    }
  }
}

function getScatterXAxis (params, legend) {
  const { rows, dimension, xAxisName } = params
  const xAxisData = []
  legend.data.forEach(key => {
    rows[0][key].forEach(item => {
      if (!~xAxisData.indexOf(item[dimension])) {
        xAxisData.push(item[dimension])
      }
    })
  })
  return {
    type: 'category',
    data: xAxisData,
    name: xAxisName
  }
}

function getScatterYAxis (params) {
  const { min, max, name } = params
  return {
    type: 'value',
    show: true,
    scale: true,
    min: min,
    max: max,
    axisTick: { show: false },
    name: name,
    axisLabel: {
      formatter (val) {
        return getFormated(val, 'normal')
      }
    }
  }
}

function getScatterSeries (params, legendArray) {
  const { rows, columns, symbol } = params

  const itemStyle = {
    normal: {
      shadowBlur: 10,
      shadowColor: 'rgba(25, 100, 150, 0.5)',
      shadowOffsetY: 5
    }
  }
  const dataTypeArray = []
  for (var i = 0; i < legendArray.data.length; i++) {
    dataTypeArray.push([])
  }
  const sizeArray = []
  Object.keys(rows[0]).forEach((key, index) => {
    rows[0][key].forEach(item => {
      dataTypeArray[index].push(columns.map(key => item[key]))
    })
  })
  dataTypeArray.forEach(series => {
    series.forEach(serie => {
      sizeArray.push(serie[2])
    })
  })
  const maxSize = sizeArray.sort((a, b) => { return b - a })[0]
  const series = dataTypeArray.map((item, index) => {
    return {
      name: legendArray.data[index],
      data: item,
      type: 'scatter',
      itemStyle,
      symbolSize: function (data) {
        return Math.sqrt(data[2]) / (maxSize / 250)
      },
      symbol: symbol
    }
  })
  return series
}

const scatter = (columns, rows, settings, extra) => {
  const {
    min = null,
    max = null,
    symbol = 'circle',
    xAxisName = [],
    yAxisName = [],
    dimension = [columns[0]]
  } = settings

  const { tooltipVisible, legendVisible } = extra

  let metrics = columns.slice()
  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1)
  }

  const xParams = {
    rows,
    dimension,
    xAxisName
  }

  const yParams = {
    min,
    max,
    yAxisName
  }

  const seriesParams = {
    rows,
    columns,
    symbol
  }

  const legend = legendVisible && getScatterLegend(rows, dimension)
  const tooltip = tooltipVisible && getScatterTooltip(rows, columns)
  const xAxis = getScatterXAxis(xParams, legend)
  const yAxis = getScatterYAxis(yParams)
  const series = getScatterSeries(seriesParams, legend)
  const options = { legend, tooltip, xAxis, yAxis, series }
  return options
}

export { scatter }
