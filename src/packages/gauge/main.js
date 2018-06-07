import { getFormated } from '../../utils'
import { isObject } from 'utils-lite'

function getTooltip (args) {
  const { tooltipFormatter, dataType, digit } = args
  return {
    formatter (options) {
      const {
        seriesName,
        data: {
          value,
          name
        }
      } = options
      if (tooltipFormatter) {
        return tooltipFormatter.apply(null, arguments)
      }
      const tpl = []
      tpl.push(`${seriesName}: `)
      tpl.push(`${getFormated(value, dataType[seriesName], digit)} ${name}`)
      return tpl.join('')
    }
  }
}

function getSeries (args) {
  const {
    rows,
    dimension,
    metrics,
    digit,
    dataType,
    labelMap,
    seriesMap,
    dataName
  } = args

  const series = rows.map(row => {
    const label = row[dimension]
    const seriesItem = seriesMap[label]
    const result = {
      type: 'gauge',
      name: labelMap[label] != null ? labelMap[label] : label,
      data: [
        {
          name: dataName[label] || '',
          value: row[metrics]
        }
      ],
      detail: {
        formatter (v) {
          return getFormated(v, dataType[label], digit)
        }
      },
      axisLabel: {
        formatter (v) {
          return getFormated(v, dataType[label], digit)
        }
      }
    }

    if (seriesItem) {
      Object.keys(seriesItem).forEach(key => {
        if (isObject(result[key])) {
          Object.assign(result[key], seriesItem[key])
        } else {
          result[key] = seriesItem[key]
        }
      })
    }

    return result
  })

  return series
}

export const gauge = (columns, rows, settings, extra) => {
  const {
    dimension = columns[0],
    metrics = columns[1],
    digit = 2,
    dataType = {},
    labelMap = {},
    seriesMap = {},
    dataName = {}
  } = settings

  const { tooltipFormatter, tooltipVisible } = extra

  const tooltip = tooltipVisible && getTooltip({
    tooltipFormatter,
    dataType
  })

  const series = getSeries({
    rows,
    dimension,
    metrics,
    digit,
    dataType,
    labelMap,
    seriesMap,
    dataName
  })
  return { tooltip, series }
}
