import { getBmap } from '../../utils'

export const bmap = (_, __, settings) => {
  const {
    key,
    v,
    bmap
  } = settings
  if (!key) console.warn('settings.key must be a string.')

  return getBmap(key, v).then(_ => {
    return Object.assign({ bmap }, settings)
  })
}
