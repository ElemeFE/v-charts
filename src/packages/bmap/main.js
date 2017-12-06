import { getBmap } from '../../utils'

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
