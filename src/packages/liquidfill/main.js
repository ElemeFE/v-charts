import {
  isObject,
  isArray
} from 'utils-lite'

import {
  getFormated
} from '../../utils'

function getTooltip (args) {
  const {
    tooltipFormatter,
    dataType,
    digit
  } = args

  return {
    show: true,
    formatter (options) {
      const {
        seriesName,
        value
      } = options
      if (tooltipFormatter) {
        return tooltipFormatter.apply(null, arguments)
      }

      return [
        `${seriesName}: `,
        getFormated(value, dataType, digit)
      ].join('')
    }
  }
}

function getSeries (args) {
  const {
    dimension,
    metrics,
    seriesMap,
    rows,
    direction
  } = args

  const results = []
  rows.forEach(item => {
    let data = []
    let layers = []
    let result = {
      type: 'liquidFill'
    }

    let name = item[dimension]
    let val = Number(item[metrics])
    let itemMap = isObject(seriesMap[name]) ? seriesMap[name] : {}

    // 根据传入的数据(rows)和额外配置(seriesMap)的数据组合data
    if (!isNaN(val)) {
      data.push({ value: val })
      if (itemMap['wave'] && isArray(itemMap['wave'])) {
        layers = itemMap['wave'].filter(num => typeof num === 'number' && val > num).sort((a, b) => a < b).map(val => ({ value: val }))
        data = data.concat(layers)
        delete itemMap['wave']
      }
    }

    result = Object.assign(result, { data, name }, itemMap)
    results.push(result)
  })

  if (results.length > 1) {
    const radius = Number(50 / results.length)
    results.forEach((res, index) => {
      if (!res.center) {
        res.center = direction === 'row' ? [(radius + index * radius * 2) + '%', '50%'] : ['50%', (radius + index * radius * 2) + '%']
      }
      if (!res.label) {
        res.label = {
          fontSize: radius * 1.6
        }
      }

      if (res.label && !res.label.fontSize) {
        res.label.fontSize = radius * 1.6
      }
    })
  }

  return results
}

export const liquidfill = (columns, rows, settings, extra) => {
  const {
    dimension = columns[0],
    metrics = columns[1],
    seriesMap = {},
    dataType = 'percent',
    digit = 2,
    direction = 'row' // row和column可选，如果是row，则多个水球图横向排列，否则纵向排列
  } = settings

  const {
    tooltipVisible,
    tooltipFormatter
  } = extra

  const tooltip = tooltipVisible && getTooltip({
    tooltipFormatter,
    dataType,
    digit
  })
  const series = getSeries({
    rows,
    columns,
    dimension,
    metrics,
    direction,
    seriesMap
  })

  return {
    tooltip,
    series
  }
}
