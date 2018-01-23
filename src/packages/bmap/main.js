import { getBmap } from '../../utils'

export const bmap = (_, __, settings) => {
  const {
    key,
    v = '2.0',
    bmap
  } = settings
  if (!key) console.warn('settings.key must be a string.')

  return getBmap(key, v).then(_ => {
    return { bmap }
  })
}
