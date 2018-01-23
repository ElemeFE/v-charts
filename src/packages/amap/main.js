import { getAmap } from '../../utils'

export const amap = (_, __, settings) => {
  const {
    key,
    v = '2.0',
    amap
  } = settings
  if (!key) console.warn('settings.key must be a string.')
  return getAmap(key, v).then(_ => {
    return { amap }
  })
}
