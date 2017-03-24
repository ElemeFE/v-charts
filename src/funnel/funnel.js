import { SIGN, tipPointStyle } from '../echarts-base'
import { getFormated } from '../util'

const dataHandler = {
  getFunnelTooltip () {
    return {
      trigger: 'item',
      formatter (item) {
        let tpl = []
        const name = item.name.split(SIGN)[0]
        const type = item.name.split(SIGN)[1]
        tpl.push(`<span style="background-color:${item.color};${tipPointStyle}"></span>`)
        tpl.push(`${name}: ${getFormated(item.data.realValue, type)}`)
        return tpl.join('')
      }
    }
  },

  getFunnelLegend (data, sequence, dataType) {
    const legendData = (sequence || Object.keys(data)).map(item => {
      return `${item}${SIGN}${dataType}`
    })
    const formatter = (item) => item.split(SIGN)[0]

    return { data: legendData, formatter }
  },

  getFunnelSeries (data, sequence, dataType, ascending) {
    let series = {
      type: 'funnel',
      label: { normal: { formatter (item) { return item.name.split(SIGN)[0] } } },
      data: []
    }

    let realData = dataHandler.getFunnelValue(data, sequence)
    realData.forEach(d => {
      series.data.push({ name: `${d.name}${SIGN}${dataType}`, value: d.value, realValue: d.realValue })
    })
    if (ascending) series.sort = 'ascending'
    return series
  },

  getFunnelValue (data, sequence) {
    let lastName
    let falseFunnel = false
    if (sequence) {
      sequence.some(value => {
        if (data[lastName] - data[value] < 0) {
          falseFunnel = true
          return true
        } else {
          lastName = value
        }
      })
    }
    const step = 100 / Object.keys(data).length
    let resultData = falseFunnel
      ? sequence.slice().reverse().map((key, index) => ({ name: key, value: (index + 1) * step, realValue: data[key] }))
      : Object.keys(data).map(key => ({ name: key, value: data[key], realValue: data[key] }))
    return resultData
  }
}
/**
 * 漏斗图
 * settings = {
 *   dataType: 'KMB', 坐标轴类型 支持KMB, percent, normal
 *   sequence: ['d-1', 'd-2', 'd-3', 'd-4'], 可选，漏斗展示顺序
 *   ascending: true, 是否为金字塔
 * }
 * data = {
 *   'd-1': 100000,
 *   'd-2': 200000,
 *   'd-3': 50000,
 *   'd-4': 3000000
 * }
 * @param {Object} data 原始数据
 * @param {Object} settings 配置项
 * @returns Object
 */
const funnel = (data, settings) => {
  const { dataType, sequence, ascending } = settings
  const tooltip = dataHandler.getFunnelTooltip()
  const legend = dataHandler.getFunnelLegend(data, sequence, dataType)
  const series = dataHandler.getFunnelSeries(data, sequence, dataType, ascending)
  const options = { tooltip, legend, series }
  return options
}

export { funnel }
