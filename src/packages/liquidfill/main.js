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
    wave
  } = args

  let itemWave = wave
  let len = isArray(seriesMap) ? seriesMap.length : 0

  return rows.slice().map((item, index) => {
    let data = []
    let result = {
      type: 'liquidFill'
    }

    let name = item[dimension]
    let val = Number(item[metrics])
    let itemMap = {}

    if (isArray(seriesMap)) {
      itemMap = !seriesMap[index] ? seriesMap[len - 1] : seriesMap[index]
    } else if (isObject(seriesMap[name])) {
      itemMap = seriesMap[name]
    }

    if (isArray(wave) && isArray(wave[0])) {
      itemWave = isArray(wave[index]) ? wave[index] : wave[wave.length - 1]
    }

    // 根据传入的数据(rows)和额外配置(seriesMap)的数据组合data
    data.push({ value: val })
    if (itemWave && itemWave.length) {
      data = data.concat(itemWave.map(val => ({ value: val })))
    }

    result = Object.assign(result, { data, name }, itemMap)
    return result
  })
}

export const liquidfill = (columns, rows, settings, extra) => {
  const {
    dimension = columns[0],
    metrics = columns[1],
    seriesMap = {},
    dataType = 'percent',
    digit = 2,
    wave = []
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
    seriesMap,
    wave
  })

  return {
    tooltip,
    series
  }
}
