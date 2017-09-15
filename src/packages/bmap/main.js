import 'echarts/extension/bmap/bmap'
import { getBmap } from '../../util'

export const bmap = (_, __, settings) => {
  const {
    key,
    bmap
  } = settings
  if (!key) console.warn('settings.key must be a string.')

  return getBmap(key).then(_ => {
    return { bmap }
  })
}
