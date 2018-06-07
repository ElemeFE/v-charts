import { isObject } from 'utils-lite'

function getTreeLegend (args) {
  const {
    dimension,
    rows
  } = args
  const result = rows.map(row => row[dimension])
  return { data: result }
}

function getTreeTooltip (args) {
  const {
    tooltipFormatter
  } = args

  return {
    trigger: 'item',
    triggerOn: 'mousemove',
    formatter: tooltipFormatter
  }
}

function getTreeSeries (args) {
  const {
    dimension,
    metrics,
    rows,
    seriesMap
  } = args

  const series = []
  rows.forEach(row => {
    const label = row[dimension]
    const seriesItem = seriesMap[label]
    const result = {
      type: 'tree',
      name: row[dimension],
      data: row[metrics]
    }
    if (seriesMap[row[dimension]]) {
      Object.keys(seriesItem).forEach(key => {
        if (isObject(result[key])) {
          Object.assign(result[key], seriesItem[key])
        } else {
          result[key] = seriesItem[key]
        }
      })
    }
    series.push(result)
  })

  return series
}

export const tree = (columns, rows, settings, extra) => {
  const {
    dimension = columns[0],
    metrics = columns[1],
    seriesMap = {}
  } = settings

  const { legendVisible, tooltipFormatter, tooltipVisible } = extra

  const series = getTreeSeries({
    dimension,
    metrics,
    rows,
    seriesMap
  })
  const legend = legendVisible && rows.length > 1 && getTreeLegend({
    dimension,
    rows
  })
  const tooltip = tooltipVisible && getTreeTooltip({
    tooltipFormatter
  })
  return { series, legend, tooltip }
}
