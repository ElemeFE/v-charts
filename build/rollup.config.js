const rollup = require('rollup')
const vue = require('rollup-plugin-vue')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const eslint = require('rollup-plugin-eslint')
const minify = require('uglify-es').minify
const componentInfo = require('../src/component-list')
const uglify = require('rollup-plugin-uglify').uglify
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

let pkg = []
const pkgTypeList = [
  { type: 'cjs', min: false, suffix: '.common.js' },
  { type: 'cjs', min: true, suffix: '.common.min.js' },
  { type: 'umd', min: false, suffix: '.js' },
  { type: 'umd', min: true, suffix: '.min.js' }
]

pkgTypeList.forEach(({ type, min, suffix }) => {
  Object.keys(componentInfo).forEach(name => {
    const { src, dist } = componentInfo[name]
    pkg.push({
      min,
      type,
      suffix,
      globalName: name,
      src,
      dist
    })
  })
})

const addons = [
  {
    min: false,
    type: 'es',
    suffix: '.esm.js',
    globalName: '',
    src: 'src/index.es.js',
    dist: 'lib/index'
  }
]
pkg = pkg.concat(addons)

pkg.forEach(item => { rollupFn(item) })

function rollupFn (item) {
  const vueSettings = item.min
    ? { css: 'lib/style.min.css', postcss: [autoprefixer, cssnano] }
    : { css: 'lib/style.css', postcss: [autoprefixer] }

  const plugins = [
    eslint({
      throwError: true,
      exclude: 'node_modules/**'
    }),
    vue(vueSettings),
    resolve({
      extensions: ['.js', '.vue']
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    })
  ]
  if (item.min) plugins.push(uglify({}, minify))

  rollup.rollup({
    input: item.src,
    external: id => /^echarts/.test(id),
    plugins
  }).then(function (bundle) {
    return bundle.write({
      format: item.type,
      name: item.globalName,
      globals: {
        'echarts/lib/echarts': 'echarts'
      },
      file: item.dist + item.suffix
    })
  }).catch((e) => {
    console.log(e)
    process.exit(1)
  })
}
