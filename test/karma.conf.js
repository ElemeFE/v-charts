module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './index.js'
    ],
    browsers: ['PhantomJS'],
    reporters: ['spec'],
    preprocessors: {
      './index.js': ['webpack']
    },
    webpack: {
      devtool: 'inline-source-map',
      mode: 'development',
      module: {
        rules: [
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
