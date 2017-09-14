var rollup = require('rollup')
var vue = require('rollup-plugin-vue')
var resolve = require('rollup-plugin-node-resolve')
var babel = require('rollup-plugin-babel')
var eslint = require('rollup-plugin-eslint')
var componentInfo = require('../src/component-list')
var echartsLib = require('../src/echarts-lib')
var uglify = require('rollup-plugin-uglify')
var pkg = []
var pkgTypeList = [
  { type: 'cjs', min: false, suffix: '.common.js' },
  { type: 'cjs', min: true, suffix: '.common.min.js' },
  { type: 'umd', min: false, suffix: '.js' },
  { type: 'umd', min: true, suffix: '.min.js' }
]

pkgTypeList.forEach(({ type, min, suffix }) => {
  Object.keys(componentInfo).forEach(name => {
    pkg.push({
      min,
      type,
      suffix,
      globalName: name,
      src: componentInfo[name].src,
      dist: componentInfo[name].dist
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
  var plugins = [
    eslint({
      throwError: true,
      exclude: 'node_modules/**'
    }),
    vue(),
    resolve({
      extensions: ['.js', '.vue']
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    })
  ]
  if (item.min) plugins.push(uglify())
  rollup.rollup({
    entry: item.src,
    external: echartsLib,
    plugins
  }).then(function (bundle) {
    var dest = item.dist + item.suffix
    bundle.write({
      format: item.type,
      moduleName: item.globalName,
      globals: {
        'echarts/lib/echarts': 'echarts'
      },
      dest
    })
  }).catch((e) => {
    console.log(e)
    process.exit(1)
  })
}
