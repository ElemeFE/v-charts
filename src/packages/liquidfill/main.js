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
  let len = 0
  if (isArray(seriesMap)) {
    len = seriesMap.length
  }

  const results = []
  rows.forEach((item, index) => {
    let data = []
    let layers = []
    let result = {
      type: 'liquidFill'
    }

    let name = item[dimension]
    let val = Number(item[metrics])
    let itemMap = {}

    if (isArray(seriesMap)) {
      if (!seriesMap[index]) {
        itemMap = seriesMap[len - 1]
      } else {
        itemMap = seriesMap[index]
      }
    }
    if (isObject(seriesMap[name])) {
      itemMap = seriesMap[name]
    }

    if (isArray(wave) && isArray(wave[0])) {
      itemWave = isArray(wave[index]) ? wave[index] : wave[wave.length - 1]
    }

    // 根据传入的数据(rows)和额外配置(seriesMap)的数据组合data
    data.push({ value: val })
    if (itemWave.length) {
      layers = itemWave.map(val => ({ value: val }))
      data = data.concat(layers)
    }

    result = Object.assign(result, { data, name }, itemMap)
    results.push(result)
  })

  return results
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
