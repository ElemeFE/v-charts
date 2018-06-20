import { getFnAndObjValue } from 'utils-lite'

export default function (options, config) {
  const {
    v_legend: {
      legendName,
      labelMap
    },
    v_category: category
  } = options
  const { visible } = config
  if (!legendName && !labelMap) return { data: category }
  const data = labelMap
    ? category.map(item => getFnAndObjValue(labelMap, item))
    : category
  options.legend = {
    data,
    show: !(visible === false),
    formatter (name) {
      return legendName ? getFnAndObjValue(legendName, name) : name
    }
  }
}
