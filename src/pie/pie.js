import { SIGN } from '../echarts-base'
import { getFormated } from '../util'
const pieRadius = 60
const ringRadius = [50, 60]
const pieOffset = 30

const dataHandler = {
  getPieSeries (data, dataType, style, perType) {
    let radius = pieRadius
    let centerY = '50%'

    if (style) {
      centerY = Math.min(style.width, style.height) / 2 + 2 * pieOffset
      radius = Math.min(style.width, style.height) / 2 - 2 * pieOffset
    }

    let series = {
      type: 'pie',
      radius,
      data: [],
      center: ['50%', centerY]
    }
    if (perType) {
      series.label = {
        normal: {
          show: true,
          formatter (item) {
            let tpl = []
            tpl.push(`${item.name.split(SIGN)[0]}:`)
            tpl.push(getFormated(item.value, dataType))
            tpl.push(`(${item.percent}%)`)
            return tpl.join(' ')
          }
        }
      }
    }
    Object.keys(data).forEach(key => {
      series.data.push({
        name: key,
        value: data[key]
      })
    })
    return series
  },

  getPieLegend (data) {
    let legend = []
    Object.keys(data).forEach(key => {
      legend.push(key)
    })
    return legend.length ? { data: legend } : false
  },

  getPieTooltip (dataType) {
    return {
      formatter (item) {
        let tpl = []
        tpl.push(`<span class="chart-point" style="background-color:${item.color}"></span>`)
        tpl.push(`${item.name.split(SIGN)[0]}:`)
        tpl.push(getFormated(item.value, dataType))
        tpl.push(`(${item.percent}%)`)
        return tpl.join(' ')
      }
    }
  },

  getRingSeries (data, dateType, style) {
    let radius = ringRadius
    let centerY = '50%'
    if (style) {
      let outRadius = Math.min(style.width, style.height) / 2 - 2 * pieOffset
      radius = [ outRadius, outRadius - 20 ]
      centerY = Math.min(style.width, style.height) / 2 + 2 * pieOffset
    }

    let series = [{
      type: 'pie',
      radius,
      center: ['50%', centerY],
      data: []
    }]
    Object.keys(data).forEach(key => {
      series[0].data.push({
        name: key,
        value: data[key]
      })
    })
    return series
  }
}
/**
 * 饼图
 * settings = {
 *   dataType: 'KMB' 数据类型 支持KMB, percent, normal
 * }
 * data = {
 *   a: 1,
 *   b: 2,
 *   c: 3
 * }
 * @param {Object} data 原始数据
 * @param {Object} settings 配置项
 * @returns Object
 */
const pie = (data, settings, style) => {
  const { dataType, perType } = settings
  const series = dataHandler.getPieSeries(data, dataType, style, perType)
  const legend = dataHandler.getPieLegend(data, dataType)
  const tooltip = dataHandler.getPieTooltip(dataType)
  const options = { series, legend, tooltip }
  return options
}
/**
 * 环图
 * settings = {
 *   dataType: 'KMB' 数据类型 支持KMB, percent, normal
 * }
 * data = {
 *   a: 1,
 *   b: 2,
 *   c: 3
 * }
 * @param {Object} data 原始数据
 * @param {Object} settings 配置项
 * @returns Object
 */
const ring = (data, settings, style) => {
  const { dataType } = settings
  const series = dataHandler.getRingSeries(data, dataType, style)
  const legend = dataHandler.getPieLegend(data, dataType)
  const tooltip = dataHandler.getPieTooltip(dataType)
  const options = { series, legend, tooltip }
  return options
}

export { pie, ring }
