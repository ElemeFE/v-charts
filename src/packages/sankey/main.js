import { getFormated } from '../../utils'
import 'echarts/lib/chart/sankey'

function getTooltip (args) {
  const {
    itemDataType,
    linksDataType,
    digit
  } = args
  return {
    trigger: 'item',
    formatter (item) {
      const { data, marker, value, name } = item
      return data && data.source
        ? `${name}: ${getFormated(value, linksDataType, digit)}`
        : `${marker} ${name}: ${getFormated(value, itemDataType, digit)}`
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
    useDataValue
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
    useDataValue = false
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
    useDataValue
  })
  return { tooltip, series }
}
