var rollup = require('rollup')
var vue = require('rollup-plugin-vue2')
var resolve = require('rollup-plugin-node-resolve')
var babel = require('rollup-plugin-babel')
var eslint = require('rollup-plugin-eslint')
var componentInfo = require('../src/component-list')
var echartsLib = require('../src/echarts-lib')

Object.keys(componentInfo).forEach(name => {
  rollupFn(name, componentInfo[name])
})

function rollupFn (name, info) {
  rollup.rollup({
    entry: info.src,
    external: echartsLib,
    plugins: [
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
  }).then(function (bundle) {
    bundle.write({
      format: 'umd',
      moduleName: name,
      globals: {
        'echarts/lib/echarts': 'echarts'
      },
      dest: info.dist
    })
  }).catch((e) => {
    console.log(e)
    process.exit(1)
  })
}
