var rollup = require('rollup')
var vue = require('rollup-plugin-vue2')
var resolve = require('rollup-plugin-node-resolve')
var commonjs = require('rollup-plugin-commonjs')
var babel = require('rollup-plugin-babel')
var eslint = require('rollup-plugin-eslint')
var componentInfo = require('../src/component-list')
var echartsLib = require('../src/echarts-lib')

Object.keys(componentInfo).forEach(com => {
  rollupFn(com, componentInfo[com])
})

function rollupFn(entryPath, destPath) {
  rollup.rollup({
    entry: entryPath,
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
      commonjs(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }).then(function (bundle) {
    bundle.write({
      format: 'cjs',
      dest: destPath
    })
  }).catch((e) => { process.exit(1) })
}
