import { getFormated } from '../util'

const dataHandler = {
  getWaterfallTooltip (dataType) {
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
  },

  getWaterfallXAxis (data) {
    return {
      type: 'category',
      splitLine: { show: false },
      data: ['总计'].concat(Object.keys(data))
    }
  },

  getWaterfallYAxis (dataType) {
    return {
      type: 'value',
      axisTick: { show: false },
      axisLabel: {
        formatter (val) {
          return getFormated(val, dataType)
        }
      }
    }
  },

  getWaterfallSeries (data, dataType) {
    const seriesBase = { type: 'bar', stack: '总量' }
    const dataSum = Object.keys(data).reduce((pre, cur) => pre + Number(data[cur]), 0).toFixed(2)
    let dataSumTemp = dataSum
    const series = []
    series.push(Object.assign({
      name: '辅助',
      itemStyle: {
        normal: { opacity: 0 },
        emphasis: { opacity: 0 }
      },
      data: [0].concat(Object.keys(data).map(key => {
        dataSumTemp -= data[key]
        return dataSumTemp
      }))
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
      data: [dataSum].concat(Object.keys(data).map(key => data[key]))
    }, seriesBase))
    return series
  }
}

/**
 * 瀑布图
 * settings = { dataType: 'KMB' } 坐标轴类型 支持KMB, percent, normal
 * data = { d1: 100, d2: 200, d3: 300 }
 * @param {Object} data 原始数据
 * @param {Object} settings 配置项
 * @returns Object
 */
const waterfall = (data, settings) => {
  const { dataType } = settings
  const tooltip = dataHandler.getWaterfallTooltip(dataType)
  const xAxis = dataHandler.getWaterfallXAxis(data)
  const yAxis = dataHandler.getWaterfallYAxis(dataType)
  const series = dataHandler.getWaterfallSeries(data, dataType)
  const options = { tooltip, xAxis, yAxis, series }
  return options
}

export { waterfall }
