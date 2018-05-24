import { getBmap } from '../../utils'

export const bmap = (_, __, settings, extra) => {
  const {
    key,
    v,
    bmap
  } = settings
  const { _once } = extra
  const registerSign = 'bmap_register'
  if (!key) console.warn('settings.key must be a string.')
  if (_once[registerSign]) return {}
  _once[registerSign] = true
  return getBmap(key, v).then(_ => {
    return { bmap }
  })
}
