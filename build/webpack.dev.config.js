var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var baseWebpackConfig = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var opn = require('opn')

opn('http://localhost:8099')
module.exports = merge(baseWebpackConfig, {
  devtool: '#source-map',
  devServer: {
    port: '8099',
    contentBase: path.join(__dirname, "dist")
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"development"'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './examples/index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
