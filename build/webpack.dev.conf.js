var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var opn = require('opn')

opn('http://localhost:8099')
module.exports = merge(baseWebpackConfig, {
  devtool: '#source-map',
  devServer: {
    port: '8099',
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    stats: "errors-only"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './examples/index.html',
      inject: true
    })
  ]
})
