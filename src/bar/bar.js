import { SIGN, getLegendName, itemPoint } from '../echarts-base'
import { getFormated, getStackMap } from '../util'

function getBarLegends ({ metrics, axisSite, meaAxisType, isColumn }) {
  let legends = []

  const formatter = getLegendName
  const secondAxis = isColumn ? axisSite.right : axisSite.top
  metrics.forEach(item => {
    let legendItem = ~secondAxis.indexOf(item)
      ? `${item}${SIGN}${meaAxisType[1]}`
      : `${item}${SIGN}${meaAxisType[0]}`
    legends.push(legendItem)
  })

  return legends.length ? { data: legends, formatter } : false
}

function getBarDimAxis ({ rows, dimAxisName, dimension }) {
  return dimension.map(item => ({
    type: 'category',
    name: dimAxisName,
    nameLocation: 'middle',
    nameGap: 22,
    data: rows.map(row => row[item]),
    axisLabel: {
      formatter (v) {
        return String(v)
      }
    }
  }))
}

function getBarMeaAxis ({ columns, meaAxisName, metrics, meaAxisType }) {
  const meaAxisBase = { type: 'value', axisTick: { show: false } }
  let meaAxis = []

  for (let i = 0; i < 2; i++) {
    if (meaAxisType[i]) {
      meaAxis[i] = Object.assign({}, meaAxisBase, {
        axisLabel: {
          formatter (val) {
            return getFormated(val, meaAxisType[i])
          }
        }
      })
    } else {
      meaAxis[i] = Object.assign({}, meaAxisBase)
    }
    meaAxis[i].name = meaAxisName[i] || ''
  }

  return meaAxis
}

function getBarTooltip () {
  return {
    trigger: 'axis',
    formatter (items) {
      let tpl = []
      const title = String(items[0].name).split(SIGN)[0]
      tpl.push(`${title}<br>`)
      items.forEach(item => {
        const [name, type] = item.seriesName.split(SIGN)
        tpl.push(itemPoint(item.color))
        tpl.push(`${name}: `)
        tpl.push(getFormated(item.value, type))
        tpl.push('<br>')
      })

      return tpl.join('')
    }
  }
}

function getBarSeries ({ rows, metrics, stack, axisSite, meaAxisType, isColumn }) {
  let series = []
  const seriesTemp = {}
  const secondAxis = isColumn ? axisSite.right : axisSite.top
  const secondDimAxisIndex = isColumn ? 'yAxisIndex' : 'xAxisIndex'
  const stackMap = stack && getStackMap(stack)
  metrics.forEach(item => { seriesTemp[item] = [] })
  rows.forEach(row => {
    metrics.forEach(item => {
      seriesTemp[item].push(row[item])
    })
  })
  series = Object.keys(seriesTemp).map(item => {
    let itemName = ~secondAxis.indexOf(item)
      ? `${item}${SIGN}${meaAxisType[1]}`
      : `${item}${SIGN}${meaAxisType[0]}`
    const seriesItem = {
      name: itemName,
      type: 'bar',
      data: seriesTemp[item],
      [secondDimAxisIndex]: ~secondAxis.indexOf(item) ? '1' : '0'
    }

    if (stack && stackMap[item]) seriesItem.stack = stackMap[item]

    return seriesItem
  })

  return series.length ? series : false
}
const bar = (columns, rows, settings) => {
  const {
    axisSite = { top: [] },
    dimension = [columns[0]],
    stack = {}
  } = settings
  let metrics = columns.slice()
  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1)
  }
  const meaAxisType = settings.xAxisType || ['normal', 'normal']
  const meaAxisName = settings.xAxisName || []
  const dimAxisName = settings.yAxisName || ''
  const isColumn = false

  const legend = getBarLegends({ metrics, axisSite, meaAxisType, isColumn })
  const yAxis = getBarDimAxis({ rows, dimAxisName, dimension })
  const xAxis = getBarMeaAxis({ columns, meaAxisName, metrics, meaAxisType })
  const series = getBarSeries({ rows, metrics, stack, axisSite, meaAxisType, isColumn })
  const tooltip = getBarTooltip()
  const options = { legend, yAxis, series, xAxis, tooltip }
  return options
}

const column = (columns, rows, settings) => {
  const {
    axisSite = { right: [] },
    dimension = [columns[0]],
    stack = {}
  } = settings
  let metrics = columns.slice()
  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1)
  }
  const meaAxisType = settings.yAxisType || ['normal', 'normal']
  const meaAxisName = settings.yAxisName || []
  const dimAxisName = settings.xAxisName || ''
  const isColumn = true

  const legend = getBarLegends({ metrics, axisSite, meaAxisType, isColumn })
  const xAxis = getBarDimAxis({ rows, dimAxisName, dimension })
  const yAxis = getBarMeaAxis({ columns, meaAxisName, metrics, meaAxisType })
  const series = getBarSeries({ rows, metrics, stack, axisSite, meaAxisType, isColumn })
  const tooltip = getBarTooltip()
  const options = { legend, yAxis, series, xAxis, tooltip }
  return options
}

export { bar, column }
