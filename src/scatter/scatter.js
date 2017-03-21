import { getLabelName, tipPointStyle } from '../echarts-base'
import { getFormated, getLineKB } from '../util'

const scatterRange = [10, 80]
const dataHandler = {
  getScatterLegend (data, dataType, axisNames) {
    const formatter = getLabelName
    const legendData = []

    data.forEach(items => {
      if (legendData.indexOf(items.name) === -1) legendData.push(items.name)
    })

    return { data: legendData, formatter }
  },

  getScatterTooltip (dataNames, dataType) {
    return {
      formatter (item) {
        let tpl = []
        tpl.push(`<span style="background-color:${item.color};${tipPointStyle}"></span>`)
        tpl.push(`${item.seriesName}<br>`)
        dataNames.forEach((name, index) => {
          tpl.push(`${name} : ${getFormated(item.data[index], dataType[index])}<br>`)
        })
        return tpl.join('')
      }
    }
  },

  getScatterAxis (type = 'normal', axisName) {
    return {
      splitLine: { lineStyle: { type: 'dashed' } },
      scale: true,
      axisTick: { show: false },
      name: axisName,
      axisLabel: {
        formatter (val) {
          return getFormated(val, type)
        }
      }
    }
  },

  getScatterSeries (data, dataType, axisNames) {
    data = JSON.parse(JSON.stringify(data))
    const type = 'scatter'
    const itemStyle = {
      normal: {
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5
      }
    }
    let dataTypeObj = {}

    axisNames.forEach((name, index) => {
      dataTypeObj[name] = dataType[index]
    })

    let valueRange = [data[0][axisNames[2]], data[0][axisNames[2]]]
    let dataTemp = {}

    data.forEach(items => {
      const name = items.name

      delete items.name
      if (!dataTemp[name]) {
        dataTemp[name] = [items]
      } else {
        dataTemp[name].push(items)
      }
      if (items[axisNames[2]] < valueRange[0]) valueRange[0] = items[axisNames[2]]
      if (items[axisNames[2]] > valueRange[1]) valueRange[1] = items[axisNames[2]]
    })

    let lineKB = getLineKB(scatterRange, valueRange)
    const series = Object.keys(dataTemp).map((name, index) => {
      const result = []

      dataTemp[name].forEach((val, index) => {
        result[index] = []
        axisNames.forEach(name => {
          result[index].push(val[name])
        })
      })

      return {
        type,
        itemStyle,
        name,
        data: result,
        symbolSize (data) {
          return data[2] * lineKB[0] + lineKB[1]
        }
      }
    })
    return series
  }
}
/**
 * 气泡图
 * settings = {
 *   dataType: ['normal','normal',KMB'], 坐标轴类型 支持KMB, percent, normal
 *   axisNames: ['d1', 'd2', 'd3'], 显示在X轴，Y轴，气泡上的数据名称
 * }
 * data = [
 *   { d1: 1000, d2: 2000, d3: 3000, name: '1991' },
 *   { d1: 2000, d2: 3000, d3: 4000, name: '1991' },
 *   { d1: 3000, d2: 5000, d3: 8000, name: '1991' },
 *   { d1: 300, d2: 400, d3: 500, name: '1992' },
 *   { d1: 330, d2: 500, d3: 200, name: '1992' },
 *   { d1: 30, d2: 40, d3: 50, name: '1992' },
 *   { d1: 100, d2: 200, d3: 30, name: '1993' },
 *   { d1: 150, d2: 250, d3: 60, name: '1993' },
 *   { d1: 200, d2: 200, d3: 30, name: '1993' }
 * ]
 * @param {Object} data 原始数据
 * @param {Object} settings 配置项
 * @returns Object
 */
const scatter = (data, settings) => {
  const { dataType = [], axisNames = [] } = settings
  const legend = dataHandler.getScatterLegend(data, dataType, axisNames)
  const tooltip = dataHandler.getScatterTooltip(axisNames, dataType)
  const xAxis = dataHandler.getScatterAxis(dataType[0], axisNames[0])
  const yAxis = dataHandler.getScatterAxis(dataType[1], axisNames[1])
  const series = dataHandler.getScatterSeries(data, dataType, axisNames)
  const options = { legend, tooltip, xAxis, yAxis, series }
  return options
}

export { scatter }
