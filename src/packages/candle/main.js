import { itemPoint } from '../../constants'
import { getFormated } from '../../utils'
import { isArray } from 'utils-lite'

const DEFAULT_MA = [5, 10, 20, 30]
const DEFAULT_K_NAME = '日K'
const DEFAULT_DOWN_COLOR = '#ec0000'
const DEFAULT_UP_COLOR = '#00da3c'
const DEFAULT_START = 50
const DEFAULT_END = 100
const SHOW_FALSE = { show: false }

function getCandleLegend (args) {
  const { showMA, MA, legendName, labelMap } = args
  let data = [DEFAULT_K_NAME]
  if (showMA) data = data.concat(MA.map(v => `MA${v}`))
  if (labelMap) data = data.map(v => labelMap[v] == null ? v : labelMap[v])
  return {
    data,
    formatter (name) {
      return legendName[name] != null ? legendName[name] : name
    }
  }
}

function getCandleTooltip (args) {
  const { metrics, dataType, digit, labelMap } = args
  return {
    trigger: 'axis',
    axisPointer: { type: 'cross' },
    position (pos, params, el, elRect, size) {
      const result = { top: 10 }
      const side = pos[0] < size.viewSize[0] / 2 ? 'right' : 'left'
      result[side] = 60
      return result
    },
    formatter (options) {
      const tpl = []
      tpl.push(`${options[0].axisValue}<br>`)
      options.forEach(option => {
        const { data, seriesName, componentSubType, color } = option
        const name = labelMap[seriesName] == null ? seriesName : labelMap[seriesName]
        tpl.push(`${itemPoint(color)} ${name}: `)
        if (componentSubType === 'candlestick') {
          tpl.push('<br>')
          metrics.slice(0, 4).forEach((m, i) => {
            const name = labelMap[m] != null ? labelMap[m] : m
            const val = getFormated(data[i + 1], dataType, digit)
            tpl.push(`- ${name}: ${val}<br>`)
          })
        } else if (componentSubType === 'line') {
          const val = getFormated(data, dataType, digit)
          tpl.push(`${val}<br>`)
        } else if (componentSubType === 'bar') {
          const val = getFormated(data[1], dataType, digit)
          tpl.push(`${val}<br>`)
        }
      })
      return tpl.join('')
    }
  }
}

function getCandleVisualMap (args) {
  const { downColor, upColor, MA, showMA } = args
  return {
    show: false,
    seriesIndex: showMA ? 1 + MA.length : 1,
    dimension: 2,
    pieces: [
      { value: 1, color: downColor },
      { value: -1, color: upColor }
    ]
  }
}

function getCandleGrid (args) {
  const { showVol } = args
  return [
    {
      left: '10%',
      right: '8%',
      top: '10%',
      height: showVol ? '50%' : '65%',
      containLabel: false
    },
    {
      left: '10%',
      right: '8%',
      top: '65%',
      height: '16%',
      containLabel: false
    }
  ]
}

function getCandleXAxis (args) {
  const { dims: data } = args
  const type = 'category'
  const scale = true
  const boundaryGap = false
  const splitLine = SHOW_FALSE
  const axisLine = { onZero: false }
  const axisTick = SHOW_FALSE
  const axisLabel = SHOW_FALSE
  const min = 'dataMin'
  const max = 'dataMax'
  const gridIndex = 1

  return [
    { type, data, scale, boundaryGap, axisLine, splitLine, min, max },
    { type, gridIndex, data, scale, boundaryGap, axisLine, axisTick, splitLine, axisLabel, min, max }
  ]
}

function getCandleYAxis (args) {
  const { dataType, digit } = args
  const scale = true
  const gridIndex = 1
  const splitNumber = 2
  const axisLine = SHOW_FALSE
  const axisTick = SHOW_FALSE
  const axisLabel = SHOW_FALSE
  const splitLine = SHOW_FALSE
  const formatter = (val) => {
    return getFormated(val, dataType, digit)
  }

  return [
    { scale, axisTick, axisLabel: { formatter } },
    { scale, gridIndex, splitNumber, axisLine, axisTick, splitLine, axisLabel }
  ]
}

function getCandleDataZoom (args) {
  const { start, end } = args

  return [
    {
      type: 'inside',
      xAxisIndex: [0, 1],
      start,
      end
    },
    {
      show: true,
      xAxisIndex: [0, 1],
      type: 'slider',
      top: '85%',
      start,
      end
    }
  ]
}

function getCandleSeries (args) {
  const {
    values,
    volumes,
    upColor,
    downColor,
    showMA,
    MA,
    showVol,
    labelMap,
    digit,
    itemStyle
  } = args
  const style = itemStyle || {
    normal: {
      color: upColor,
      color0: downColor,
      borderColor: null,
      borderColor0: null
    }
  }
  const lineStyle = { normal: { opacity: 0.5 } }
  const series = [
    {
      name: labelMap[DEFAULT_K_NAME] == null
        ? DEFAULT_K_NAME
        : labelMap[DEFAULT_K_NAME],
      type: 'candlestick',
      data: values,
      itemStyle: style
    }
  ]

  if (showMA) {
    MA.forEach(d => {
      const name = `MA${d}`
      series.push({
        name: labelMap[name] == null ? name : labelMap[name],
        data: calculateMA(d, values, digit),
        type: 'line',
        lineStyle,
        smooth: true
      })
    })
  }

  if (showVol) {
    series.push({
      name: 'Volume',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: volumes
    })
  }

  return series
}

function calculateMA (dayCount, data, digit) {
  let result = []
  data.forEach((d, i) => {
    if (i < dayCount) {
      result.push('-')
    } else {
      let sum = 0
      for (let j = 0; j < dayCount; j++) sum += data[i - j][1]
      result.push(+(sum / dayCount).toFixed(digit))
    }
  })
  return result
}

export const candle = (columns, rows, settings, status) => {
  const {
    dimension = columns[0],
    metrics = columns.slice(1, 6),
    digit = 2,
    itemStyle,
    labelMap = {},
    legendName = {},
    MA = DEFAULT_MA,
    showMA = false,
    showVol = false,
    showDataZoom = false,
    downColor = DEFAULT_DOWN_COLOR,
    upColor = DEFAULT_UP_COLOR,
    start = DEFAULT_START,
    end = DEFAULT_END,
    dataType
  } = settings
  const { tooltipVisible, legendVisible } = status

  const isLiteData = isArray(rows[0])
  const dims = []
  const values = []
  const volumes = []
  const candleMetrics = metrics.slice(0, 4)
  const volumeMetrics = metrics[4]

  if (isLiteData) {
    rows.forEach(row => {
      const itemResult = []
      dims.push(row[columns.indexOf(dimension)])
      candleMetrics.forEach(item => { itemResult.push(row[columns.indexOf(item)]) })
      values.push(itemResult)
      if (volumeMetrics) volumes.push(row[columns.indexOf(volumeMetrics)])
    })
  } else {
    rows.forEach((row, index) => {
      const itemResult = []
      dims.push(row[dimension])
      candleMetrics.forEach(item => { itemResult.push(row[item]) })
      values.push(itemResult)
      if (volumeMetrics) {
        const status = row[metrics[0]] > row[metrics[1]] ? 1 : -1
        volumes.push([index, row[volumeMetrics], status])
      }
    })
  }

  const legend = legendVisible && getCandleLegend({ showMA, MA, legendName, labelMap })
  const tooltip = tooltipVisible && getCandleTooltip({ metrics, dataType, digit, labelMap })
  const visualMap = showVol && getCandleVisualMap({ downColor, upColor, MA, showMA })
  const dataZoom = showDataZoom && getCandleDataZoom({ start, end })
  const grid = getCandleGrid({ showVol })
  const xAxis = getCandleXAxis({ dims })
  const yAxis = getCandleYAxis({ dataType, digit })
  const series = getCandleSeries({
    values,
    volumes,
    upColor,
    downColor,
    showMA,
    MA,
    showVol,
    labelMap,
    digit,
    itemStyle
  })
  const axisPointer = { link: { xAxisIndex: 'all' } }
  return { legend, tooltip, visualMap, grid, xAxis, yAxis, dataZoom, series, axisPointer }
}
