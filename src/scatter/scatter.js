import { itemPoint } from '../echarts-base'
import { getFormated } from '../util'
import 'echarts/lib/chart/scatter'

// 我把rows还是写成了数组，尽量不改动你原有的代码啦啦啦
function getScatterLegend (rows, dimension) {
  const legendArray = Object.keys(rows[0])
  return { data: legendArray }
}

function getScatterTooltip (rows, columns) {
  return {
    formatter (data) {
      const tpl = []
      tpl.push(itemPoint(data.color))
      tpl.push(`${data.seriesName}</br>`)
      columns.forEach((column, index) => {
        tpl.push(`${column}: ${data.data[index]}</br>`)
      })
      return tpl.join('')
    }
  }
}

function getScatterXAxis (params, legend) {

  const {
    rows,
    dimension,
    xAxisName,
    silent,
    axisVisible,
    xAxisType,
    digit
  } = params
  const xAxisData = []

  /**
   * 遍历rows里面的几个对象的第i项作为纬度，蓝后排序
   * 我也不知道如果都是汉字要怎么排序成他要的样子
   */
  legend.data.forEach(key => {
    rows[0][key].forEach(item => {
      if (!~xAxisData.indexOf(item[dimension])) {
        xAxisData.push(item[dimension])
      }
      xAxisData.sort((a, b) => (a - b))
    })
  })

  return {
    type: xAxisType,
    show: axisVisible,
    data: xAxisData,
    name: xAxisName,
    silent,
    axisLabel: {
      formatter (val) {
        return getFormated(val, xAxisType, digit)
      }
    }
  }
}

function getScatterYAxis (params, legend) {
  const {
    min,
    max,
    yAxisName,
    scale,
    yAxisType,
    digit,
    axisVisible
  } = params

  return {
    type: yAxisType,
    show: axisVisible,
    scale,
    min,
    max,
    axisTick: { show: false },
    name: yAxisName,
    axisLabel: {
      formatter (val) {
        return getFormated(val, yAxisType, digit)
      }
    }
  }
}

function getScatterSeries (params, legendArray) {
  const {
    rows,
    columns,
    symbol,
    symbolSizeMax,
    symbolRotate,
    largeThreshold,
    cursor,
    label,
    itemStyle,
    hoverAnimation,
    legendHoverLink,
    symbolSizeDim
  } = params

  const dataTypeArray = []
  for (var i = 0; i < legendArray.data.length; i++) {
    dataTypeArray.push([])
  }

  const sizeArray = []
  let dimensionSizeIndex

  Object.keys(rows[0]).forEach((key, index) => {
    rows[0][key].forEach(row => {
      dataTypeArray[index].push(columns.map((item, index) => {
        if (item === symbolSizeDim) dimensionSizeIndex = index
        return row[item]
      }))
    })
  })

  dataTypeArray.forEach(series => {
    series.forEach(serie => {
      sizeArray.push(serie[dimensionSizeIndex])
    })
  })

  const maxSize = sizeArray.sort((a, b) => { return b - a })[0]

  const style = itemStyle || { normal: {
    shadowBlur: 10,
    shadowColor: 'rgba(25, 100, 150, 0.5)',
    shadowOffsetY: 5
  } }

  const series = dataTypeArray.map((item, index) => {
    return {
      name: legendArray.data[index],
      data: item,
      type: 'scatter',
      label,
      largeThreshold,
      cursor,
      symbolRotate,
      itemStyle: style,
      hoverAnimation,
      legendHoverLink,
      symbolSize: function (data) {
        return (data[dimensionSizeIndex] / (maxSize)) * symbolSizeMax
      },
      symbol: symbol
    }
  })
  return series
}

function getScatterVisualMap (params) {
  return params
}

const scatter = (columns, rows, settings, extra) => {
  const {
    min = null,
    max = null,
    symbol = 'circle', // 散点的形状
    scale = false, // 是否从零开始
    hoverAnimation = true, // 是否支持hover动画
    legendHoverLink = true,
    symbolSizeMax = 60,
    xAxisName = [],
    yAxisName = [],
    yAxisType = 'value',
    xAxisType = 'category',
    digit = 2, // 是否保留两位小数
    symbolRotate,
    axisVisible = true,
    symbolOffset = [0, 0],
    largeThreshold = 2000,
    cursor = 'pointer',
    visualMapIndex, // 自定义visualMap
    label,
    itemStyle,
    silent = false,
    dimension = columns[0], // x轴（这个好像是不可配置的）
    symbolSizeDim = columns[2] // 第几个数据控制散点的大小，可配置
  } = settings

  const { tooltipVisible, legendVisible } = extra

  const xParams = {
    rows,
    dimension,
    xAxisName,
    silent,
    axisVisible,
    xAxisType,
    digit
  }

  const yParams = {
    rows,
    min,
    max,
    scale,
    digit,
    yAxisName,
    yAxisType,
    dimension,
    axisVisible
  }

  const seriesParams = {
    rows,
    columns,
    symbol,
    dimension,
    label,
    symbolOffset,
    largeThreshold,
    cursor,
    itemStyle,
    symbolRotate,
    hoverAnimation,
    legendHoverLink,
    symbolSizeMax,
    symbolSizeDim
  }

  const legend = legendVisible && getScatterLegend(rows, dimension)
  const tooltip = tooltipVisible && getScatterTooltip(rows, columns)
  const xAxis = getScatterXAxis(xParams, legend)
  const yAxis = getScatterYAxis(yParams, legend)
  const visualMap = getScatterVisualMap(visualMapIndex)
  const series = getScatterSeries(seriesParams, legend)
  const options = { legend, tooltip, xAxis, yAxis, visualMap, series }
  return options
}

export { scatter }
