import { getAmap } from '../../utils'

export const amap = (_, __, settings, extra) => {
  const {
    key,
    v,
    amap
  } = settings
  const { _once } = extra
  const registerSign = 'amap_register'
  if (!key) console.warn('settings.key must be a string.')
  if (_once[registerSign]) return {}
  _once[registerSign] = true
  return getAmap(key, v).then(_ => {
    return { amap }
  })
}
