module.exports = {
  pkgTypeList: [
    { type: 'cjs', min: false, suffix: '.common.js' },
    { type: 'cjs', min: true, suffix: '.common.min.js' },
    { type: 'umd', min: false, suffix: '.js' },
    { type: 'umd', min: true, suffix: '.min.js' }
  ],
  addons: [
    {
      min: false,
      type: 'es',
      suffix: '.esm.js',
      globalName: '',
      src: 'src/index.es.js',
      dist: 'lib/index'
    },
    {
      min: false,
      type: 'cjs',
      suffix: '.js',
      globalName: '',
      src: 'src/core.js',
      dist: 'lib/core'
    },
    {
      min: false,
      type: 'cjs',
      suffix: '.js',
      globalName: '',
      src: 'src/utils.js',
      dist: 'lib/utils'
    },
    {
      min: false,
      type: 'cjs',
      suffix: '.js',
      globalName: '',
      src: 'src/constants.js',
      dist: 'lib/constants'
    }
  ]
}
