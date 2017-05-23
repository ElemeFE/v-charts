var rollup = require('rollup')
var vue = require('rollup-plugin-vue2')
var resolve = require('rollup-plugin-node-resolve')
var babel = require('rollup-plugin-babel')
var eslint = require('rollup-plugin-eslint')
var componentInfo = require('../src/component-list')
var echartsLib = require('../src/echarts-lib')
var uglify = require('rollup-plugin-uglify')
for (var i = 0; i < 2; i++) {
  Object.keys(componentInfo).forEach(name => {
    rollupFn(name, componentInfo[name], i)
  })
}

function rollupFn (name, info, min) {
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
  if (min) plugins.push(uglify())
  rollup.rollup({
    entry: info.src,
    external: echartsLib,
    plugins
  }).then(function (bundle) {
    var dest = info.dist + (min ? '.min.js' : '.js')
    bundle.write({
      format: 'umd',
      moduleName: name,
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
