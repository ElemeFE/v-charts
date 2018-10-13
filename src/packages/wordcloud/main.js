import { isArray } from 'utils-lite'

function getSeries (args) {
  const {
    dimension,
    metrics,
    rows,
    color,
    sizeMax,
    sizeMin,
    shape
  } = args

  const baseType = {
    type: 'wordCloud',
    textStyle: {
      normal: {
        color: !isArray(color) && !!color ? color : () => {
          return 'rgb(' + [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160)
          ].join(',') + ')'
        }
      }
    },
    shape: shape,
    sizeRange: [sizeMin, sizeMax]
  }

  const len = isArray(color) ? color.length : 0
  const data = rows.slice().map(row => {
    const text = {
      name: row[dimension],
      value: row[metrics]
    }

    if (len > 0) {
      text.textStyle = {
        normal: {
          color: color[Math.floor(Math.random() * len)]
        }
      }
    }
    return text
  })

  baseType.data = data

  return [baseType]
}

function getTooltip (args) {
  const { tooltipFormatter } = args

  return {
    show: true,
    formatter (params) {
      const {
        data: {
          name,
          value
        }
      } = params

      if (tooltipFormatter) {
        return tooltipFormatter.apply(null, params)
      }

      return `${name}: ${value}`
    }
  }
}

export const wordcloud = (columns, rows, settings, extra) => {
  const {
    dimension = columns[0],
    metrics = columns[1],
    color = '',
    sizeMax = 60,
    sizeMin = 12,
    shape = 'circle'
  } = settings

  const {
    tooltipVisible,
    tooltipFormatter
  } = extra

  const series = getSeries({ dimension, metrics, rows, color, sizeMax, sizeMin, shape })
  const tooltip = tooltipVisible && getTooltip({ tooltipFormatter })

  return {
    series,
    tooltip
  }
}
