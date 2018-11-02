import { itemPoint } from '../../constants'
import { getFormated, setArrayValue } from '../../utils'
import { cloneDeep } from 'utils-lite'

const pieRadius = 100
const ringRadius = [80, 100]
const roseRingRadius = [20, 100]
const pieOffsetY = 200

function getPieSeries (args) {
  const {
    innerRows,
    dataType,
    percentShow,
    dimension,
    metrics,
    radius,
    offsetY,
    selectedMode,
    hoverAnimation,
    digit,
    roseType,
    label,
    level,
    limitShowNum,
    isRing,
    labelLine,
    itemStyle
  } = args

  let series = []
  let levelTemp = {}
  let rowsTemp = []
  if (level) {
    level.forEach((levelItems, index) => {
      levelItems.forEach(item => { setArrayValue(levelTemp, item, index) })
    })
    innerRows.forEach(row => {
      const itemLevel = levelTemp[row[dimension]]
      if (itemLevel && itemLevel.length) {
        itemLevel.forEach(levelItem => {
          setArrayValue(rowsTemp, levelItem, row)
        })
      }
    })
  } else {
    rowsTemp.push(innerRows)
  }
  let seriesBase = {
    type: 'pie',
    selectedMode,
    hoverAnimation,
    roseType,
    center: ['50%', offsetY]
  }
  let rowsTempLength = rowsTemp.length
  rowsTemp.forEach((dataRows, index) => {
    let seriesItem = Object.assign({ data: [] }, seriesBase)
    const centerWidth = radius / rowsTempLength
    if (!index) {
      seriesItem.radius = isRing ? radius : centerWidth
    } else {
      const outerWidth = centerWidth + radius / (2 * rowsTempLength) * (2 * index - 1)
      const innerWidth = outerWidth + radius / (2 * rowsTempLength)
      seriesItem.radius = [outerWidth, innerWidth]
    }
    if (rowsTempLength > 1 && index === 0) {
      seriesItem.label = {
        normal: { position: 'inner' }
      }
    }
    if (label) seriesItem.label = label
    if (labelLine) seriesItem.labelLine = labelLine
    if (itemStyle) seriesItem.itemStyle = itemStyle
    if (percentShow) {
      seriesItem.label = {
        normal: {
          show: true,
          position: rowsTempLength > 1 && index === 0 ? 'inner' : 'outside',
          formatter (item) {
            let tpl = []
            tpl.push(`${item.name}:`)
            tpl.push(getFormated(item.value, dataType, digit))
            tpl.push(`(${item.percent}%)`)
            return tpl.join(' ')
          }
        }
      }
    }
    seriesItem.data = dataRows.map(row => ({
      name: row[dimension],
      value: row[metrics]
    }))
    series.push(seriesItem)
  })
  if (limitShowNum && limitShowNum < series[0].data.length) {
    const firstData = series[0].data
    const remainArr = firstData.slice(limitShowNum, firstData.length)
    let sum = 0
    remainArr.forEach(item => { sum += item.value })
    series[0].data = firstData.slice(0, limitShowNum)
    series[0].data.push({ name: '其他', value: sum })
  }
  return series
}

function getPieLegend (args) {
  const { innerRows, dimension, legendLimit, legendName, level, limitShowNum } = args
  let legend = []
  const levelTemp = []
  if (level) {
    level.forEach(levelItem => {
      levelItem.forEach(item => {
        levelTemp.push(item)
      })
    })
    legend = levelTemp
  } else if (limitShowNum && limitShowNum < innerRows.length) {
    for (let i = 0; i < limitShowNum; i++) {
      legend.push(innerRows[i][dimension])
    }
    legend.push('其他')
  } else {
    legend = innerRows.map(row => row[dimension])
  }
  if (legend.length) {
    return {
      data: legend,
      show: legend.length < legendLimit,
      formatter (name) {
        return legendName[name] != null ? legendName[name] : name
      }
    }
  } else {
    return false
  }
}

function getPieTooltip (args) {
  const {
    dataType,
    innerRows,
    limitShowNum,
    digit,
    metrics,
    dimension
  } = args
  let sum = 0
  const remainArr = innerRows.map(row => {
    sum += row[metrics]
    return {
      name: row[dimension],
      value: row[metrics]
    }
  }).slice(limitShowNum, innerRows.length)
  return {
    formatter (item) {
      let tpl = []
      tpl.push(itemPoint(item.color))
      if (limitShowNum && item.name === '其他') {
        tpl.push('其他:')
        remainArr.forEach(({ name, value }) => {
          const percent = getFormated((value / sum), 'percent')
          tpl.push(`<br>${name}:`)
          tpl.push(getFormated(value, dataType, digit))
          tpl.push(`(${percent})`)
        })
      } else {
        tpl.push(`${item.name}:`)
        tpl.push(getFormated(item.value, dataType, digit))
        tpl.push(`(${item.percent}%)`)
      }
      return tpl.join(' ')
    }
  }
}

export const pie = (columns, rows, settings, extra, isRing) => {
  const innerRows = cloneDeep(rows)
  const {
    dataType = 'normal',
    percentShow,
    dimension = columns[0],
    metrics = columns[1],
    roseType = false,
    radius = isRing
      ? roseType
        ? roseRingRadius
        : ringRadius
      : pieRadius,
    offsetY = pieOffsetY,
    legendLimit = 30,
    selectedMode = false,
    hoverAnimation = true,
    digit = 2,
    legendName = {},
    label = false,
    level = false,
    limitShowNum = 0,
    labelLine,
    itemStyle
  } = settings
  const { tooltipVisible, legendVisible } = extra
  if (limitShowNum) innerRows.sort((a, b) => b[metrics] - a[metrics])
  const seriesParams = {
    innerRows,
    dataType,
    percentShow,
    dimension,
    metrics,
    radius,
    offsetY,
    selectedMode,
    hoverAnimation,
    digit,
    roseType,
    label,
    level,
    legendName,
    limitShowNum,
    isRing,
    labelLine,
    itemStyle
  }
  const series = getPieSeries(seriesParams)
  const legendParams = {
    innerRows,
    dimension,
    legendLimit,
    legendName,
    level,
    limitShowNum
  }
  const legend = legendVisible && getPieLegend(legendParams)
  const tooltip = tooltipVisible && getPieTooltip({
    dataType,
    innerRows,
    limitShowNum,
    digit,
    metrics,
    dimension
  })
  const options = { series, legend, tooltip }
  return options
}

export const ring = (columns, rows, settings, extra) => {
  return pie(columns, rows, settings, extra, true)
}
