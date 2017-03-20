var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './examples/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': './src'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('examples'), resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          sourceMap: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('./src'), resolve('./examples')]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      vue: {
        postcss: [
            require('autoprefixer')(),
        ],
        loaders: {
          css: ExtractTextPlugin.extract("css-loader"),
          less: ExtractTextPlugin.extract("css-loader!less-loader")
        }
      }
    })
  ]
}
