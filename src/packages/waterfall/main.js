import { getFormated } from '../../utils'

function getWaterfallTooltip (dataType, digit) {
  return {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    formatter (items) {
      const item = items[1]
      return [
        `${item.name}<br/>${item.seriesName} :`,
        `${getFormated(item.value, dataType, digit)}`
      ].join('')
    }
  }
}

function getWaterfallXAxis (args) {
  const {
    dimension,
    rows,
    remainStatus,
    totalName,
    remainName,
    labelMap,
    xAxisName,
    axisVisible
  } = args
  let xAxisData = [totalName].concat(rows.map(row => row[dimension]))
  if (remainStatus === 'have-remain') {
    xAxisData = xAxisData.concat([remainName])
  }

  return {
    type: 'category',
    name: labelMap && labelMap[xAxisName] || xAxisName,
    splitLine: { show: false },
    data: xAxisData,
    show: axisVisible
  }
}

function getWaterfallYAxis (args) {
  const { dataType, yAxisName, axisVisible, digit, labelMap } = args
  return {
    type: 'value',
    name: labelMap[yAxisName] != null ? labelMap[yAxisName] : yAxisName,
    axisTick: { show: false },
    axisLabel: {
      formatter (val) {
        return getFormated(val, dataType, digit)
      }
    },
    show: axisVisible
  }
}

function getWaterfallSeries (args) {
  const {
    dataType,
    rows,
    metrics,
    totalNum,
    remainStatus,
    dataSum,
    digit
  } = args
  const seriesBase = { type: 'bar', stack: '总量' }
  let dataSumTemp = dataSum
  let totalNumTemp = totalNum
  let assistData
  let mainData
  const rowData = rows.map(row => row[metrics])

  if (remainStatus === 'have-remain') {
    assistData = [0].concat(rows.map(row => {
      totalNumTemp -= row[metrics]
      return totalNumTemp
    })).concat([0])
    mainData = [totalNum].concat(rowData).concat([totalNum - dataSum])
  } else {
    assistData = [0].concat(rows.map(row => {
      dataSumTemp -= row[metrics]
      return dataSumTemp
    }))
    mainData = [dataSum].concat(rowData)
  }
  const series = []

  series.push(Object.assign({
    name: '辅助',
    itemStyle: {
      normal: { opacity: 0 },
      emphasis: { opacity: 0 }
    },
    data: assistData
  }, seriesBase))

  series.push(Object.assign({
    name: '数值',
    label: {
      normal: {
        show: true,
        position: 'top',
        formatter (item) {
          return getFormated(item.value, dataType, digit)
        }
      }
    },
    data: mainData
  }, seriesBase))
  return series
}

function getWaterfallRemainStatus (dataSum, totalNum) {
  if (!totalNum) return 'not-total'
  return totalNum > dataSum ? 'have-remain' : 'none-remain'
}

export const waterfall = (columns, rows, settings, extra) => {
  const {
    dataType = 'normal',
    dimension = columns[0],
    totalName = '总计',
    totalNum,
    remainName = '其他',
    xAxisName = dimension,
    labelMap = {},
    axisVisible = true,
    digit = 2
  } = settings
  const { tooltipVisible } = extra
  let metricsTemp = columns.slice()
  metricsTemp.splice(metricsTemp.indexOf(dimension), 1)
  const metrics = metricsTemp[0]
  const yAxisName = metrics
  const tooltip = tooltipVisible && getWaterfallTooltip(dataType, digit)
  const dataSum = parseFloat(rows.reduce((pre, cur) => {
    return pre + Number(cur[metrics])
  }, 0).toFixed(digit))
  const remainStatus = getWaterfallRemainStatus(dataSum, totalNum)
  const xAxisParams = {
    dimension,
    rows,
    remainStatus,
    totalName,
    remainName,
    xAxisName,
    labelMap,
    axisVisible
  }
  const xAxis = getWaterfallXAxis(xAxisParams)
  const yAxis = getWaterfallYAxis({ dataType, yAxisName, axisVisible, digit, labelMap })
  const seriesParams = {
    dataType,
    rows,
    dimension,
    metrics,
    totalNum,
    remainStatus,
    dataSum,
    digit
  }
  const series = getWaterfallSeries(seriesParams)
  const options = { tooltip, xAxis, yAxis, series }
  return options
}
