module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './polyfill.js',
      './index.js'
    ],
    browsers: ['PhantomJS'],
    reporters: ['spec'],
    preprocessors: {
      './index.js': ['webpack']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.(js)$/,
            loader: 'babel-loader'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.vue']
      }
    },
    singleRun: true
  })
}
