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
const path = require('path')
const fs = require('fs')
const { pkgTypeList, addons } = require('./config')

let pkg = []

pkgTypeList.forEach(({ type, min, suffix }) => {
  Object.keys(componentInfo).forEach(name => {
    const { src, dist } = componentInfo[name]
    pkg.push({ min, type, suffix, globalName: name, src, dist })
  })
})

pkg = pkg.concat(addons)

pkg.forEach(item => { rollupFn(item) })

fs.mkdirSync(path.resolve(__dirname, '../lib'))

async function rollupFn (item) {
  const { min, dist, suffix, src: input, type: format, globalName: name } = item
  const vueSettings = min
    ? { css: 'lib/style.min.css', postcss: [autoprefixer, cssnano] }
    : { css: 'lib/style.css', postcss: [autoprefixer] }
  const plugins = [
    eslint(),
    vue(vueSettings),
    resolve({ extensions: ['.js', '.vue'] }),
    babel({ plugins: ['external-helpers'] })
  ]
  if (min) plugins.push(uglify({}, minify))

  const distPath = '../' + dist + suffix
  const isCommonjs = format === 'cjs'
  let reg = isCommonjs
    ? /(^(echarts|numerify|utils-lite)|(\/core|\/utils|\/constants)$)/
    : /^(echarts)/
  const external = id => reg.test(id)
  const globals = { 'echarts/lib/echarts': 'echarts' }

  const bundle = await rollup.rollup({ input, external, plugins })
  let { code } = await bundle.generate({ format, name, globals })
  if (isCommonjs) {
    code = code.replace(
      /require\(['"](..?\/)+(utils|core|constants)['"]\)/g,
      'require(\'./$2\')'
    )
  }
  fs.writeFileSync(path.resolve(__dirname, distPath), code)
}
