import { SIGN, tipPointStyle } from '../echarts-base'
import { getFormated, clone } from '../util'
const pieRadius = 100
const ringRadius = [80, 100]
const pieOffset = 200

const dataHandler = {
  getPieSeries (data, dataType, style, percentShow) {
    let radius = pieRadius
    let centerY = pieOffset

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
    if (percentShow) {
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
        tpl.push(`<span style="background-color:${item.color};${tipPointStyle}"></span>`)
        tpl.push(`${item.name.split(SIGN)[0]}:`)
        tpl.push(getFormated(item.value, dataType))
        tpl.push(`(${item.percent}%)`)
        return tpl.join(' ')
      }
    }
  },

  getRingSeries (data, dataType, style, percentShow) {
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

    if (percentShow) {
      series[0].label = {
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
      series[0].data.push({
        name: key,
        value: data[key]
      })
    })
    return series
  },

  getPieData (data, dimName, meaName) {
    let result = {}
    if (!Array.isArray(data.rows) || !Array.isArray(data.columns)) return data
    dimName = dimName !== undefined ? dimName : data.columns[0]
    meaName = meaName !== undefined ? meaName : data.columns[1]
    data.rows.forEach(row => {
      result[row[dimName]] = row[meaName]
    })
    return result
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
  const { dataType, percentShow, tableData, dimName, meaName } = settings
  if (tableData) data = dataHandler.getPieData(clone(data), dimName, meaName)
  const series = dataHandler.getPieSeries(data, dataType, style, percentShow)
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
  const { dataType, percentShow, tableData, dimName, meaName } = settings
  if (tableData) data = dataHandler.getPieData(clone(data), dimName, meaName)
  const series = dataHandler.getRingSeries(data, dataType, style, percentShow)
  const legend = dataHandler.getPieLegend(data, dataType)
  const tooltip = dataHandler.getPieTooltip(dataType)
  const options = { series, legend, tooltip }
  return options
}

export { pie, ring }
