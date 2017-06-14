import { getFormated } from '../util'
import 'echarts/lib/chart/bar'

function getWaterfallTooltip (dataType) {
  return {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    formatter (items) {
      const item = items[1]
      return [
        `${item.name}<br/>${item.seriesName} :`,
        `${getFormated(item.value, dataType)}`
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
    xAxisName,
    axisVisible
  } = args
  let xAxisData = [totalName].concat(rows.map(row => row[dimension]))
  if (remainStatus === 'have-remain') {
    xAxisData = xAxisData.concat([remainName])
  }

  return {
    type: 'category',
    name: xAxisName,
    splitLine: { show: false },
    data: xAxisData,
    show: axisVisible
  }
}

function getWaterfallYAxis (args) {
  const { dataType, yAxisName, axisVisible } = args
  return {
    type: 'value',
    name: yAxisName,
    axisTick: { show: false },
    axisLabel: {
      formatter (val) {
        return getFormated(val, dataType)
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
    dataSum
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
          return getFormated(item.value, dataType)
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

const waterfall = (columns, rows, settings, status) => {
  const {
    dataType = 'normal',
    dimension = columns[0],
    totalName = '总计',
    totalNum,
    remainName = '其他',
    xAxisName = dimension,
    axisVisible = true
  } = settings
  const { tooltipVisible } = status
  let metricsTemp = columns.slice()
  metricsTemp.splice(metricsTemp.indexOf(dimension), 1)
  const metrics = metricsTemp[0]
  const yAxisName = metrics
  const tooltip = tooltipVisible && getWaterfallTooltip(dataType)
  const dataSum = rows.reduce((pre, cur) => {
    return pre + Number(cur[metrics])
  }, 0).toFixed(2)
  const remainStatus = getWaterfallRemainStatus(dataSum, totalNum)
  const xAxisParams = {
    dimension,
    rows,
    remainStatus,
    totalName,
    remainName,
    xAxisName,
    axisVisible
  }
  const xAxis = getWaterfallXAxis(xAxisParams)
  const yAxis = getWaterfallYAxis({ dataType, yAxisName, axisVisible })
  const seriesParams = {
    dataType,
    rows,
    dimension,
    metrics,
    totalNum,
    remainStatus,
    dataSum
  }
  const series = getWaterfallSeries(seriesParams)
  const options = { tooltip, xAxis, yAxis, series }
  return options
}

export { waterfall }
