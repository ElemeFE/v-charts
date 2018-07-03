import { getFnAndObjValue } from 'utils-lite'

export default function (options, config) {
  const {
    v_legend: {
      legendName,
      labelMap,
      category
    }
  } = options
  if (!legendName && !labelMap) return { data: category }
  const data = labelMap
    ? category.map(item => getFnAndObjValue(labelMap, item))
    : category
  options.legend = {
    data,
    show: config.visible,
    formatter (name) {
      return legendName ? getFnAndObjValue(legendName, name) : name
    }
  }
}
