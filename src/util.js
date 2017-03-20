const numberFormat = (val, digits = 2) => {
  if (isNaN(+val)) return val

  let symbolMap = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'B' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]

  for (let i = 0; i < symbolMap.length; i++) {
    if (Math.abs(val) >= symbolMap[i].value) {
      return (val / symbolMap[i].value).toFixed(digits) + symbolMap[i].symbol
    }
  }

  return val.toString()
}

const formatTausends = (num) => {
  return String(num).replace(/^(\s+|-)?\d+(?=.?\d*($|\s))/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

const getFormated = (val, type) => {
  switch (type) {
    case 'KMB': return numberFormat(val)
    case 'percent': return `${(val * 100).toFixed(2)}%`
    case 'normal': return formatTausends(val)
    default: return val
  }
}

const getLineKB = (s, v) => {
  const result = []
  result[0] = (s[1] - s[0]) / (v[1] - v[0])
  result[1] = s[0] - result[0] * v[0]
  return result
}

export { numberFormat, formatTausends, getFormated, getLineKB }
