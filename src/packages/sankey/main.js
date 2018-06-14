import { getFormated } from '../../utils'
import { itemPoint } from '../../constants'

function getTooltip (args) {
  const {
    itemDataType,
    linksDataType,
    digit
  } = args
  return {
    trigger: 'item',
    formatter (item) {
      const tpl = []
      const { name, data, value, color } = item
      tpl.push(itemPoint(color))
      tpl.push(`${name} : `)
      if (data && data.source) {
        tpl.push(`${getFormated(value, linksDataType, digit)}<br />`)
      } else {
        tpl.push(`${getFormated(value, itemDataType, digit)}<br />`)
      }
      return tpl.join('')
    }
  }
}

function getSeries (args) {
  const {
    rows,
    dimension,
    metrics,
    links,
    valueFull,
    useDataValue,
    label,
    itemStyle,
    lineStyle
  } = args
  const dataMap = {}
  const seriesData = rows.map(row => {
    dataMap[row[dimension]] = row[metrics]
    return { name: row[dimension], value: row[metrics] }
  })
  let innerLinks = null
  if (useDataValue) {
    innerLinks = links.map(link => {
      return Object.assign({}, link, { value: dataMap[link.target] })
    })
  } else if (!valueFull) {
    innerLinks = links.map(link => {
      return link.value == null
        ? Object.assign({}, link, { value: dataMap[link.target] })
        : link
    })
  } else {
    innerLinks = links
  }

  const result = {
    type: 'sankey',
    data: seriesData,
    links: innerLinks
  }
  if (label) result.label = label
  if (itemStyle) result.itemStyle = itemStyle
  if (lineStyle) result.lineStyle = lineStyle
  return [result]
}

export const sankey = (columns, rows, settings, extra) => {
  const {
    links,
    dimension = columns[0],
    metrics = columns[1],
    dataType = ['normal', 'normal'],
    digit = 2,
    valueFull = false,
    useDataValue = false,
    label,
    itemStyle,
    lineStyle
  } = settings

  if (!links) {
    console.warn('links is needed in settings!')
    return
  }

  const itemDataType = dataType[0]
  const linksDataType = dataType[1]
  const tooltip = getTooltip({
    itemDataType,
    linksDataType,
    digit
  })
  const series = getSeries({
    rows,
    dimension,
    metrics,
    links,
    valueFull,
    useDataValue,
    label,
    itemStyle,
    lineStyle
  })
  return { tooltip, series }
}
