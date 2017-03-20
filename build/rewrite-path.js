var pathPrefix = ''

function RewritePath (options) {
  pathPrefix = options.pathPrefix
}

RewritePath.prototype.apply = function (compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-html-processing', function(htmlPluginData, callback) {
      htmlPluginData.html = htmlPluginData.html.replace(/(src=\/js)|(href=\/css)/g, function (t, $1, $2) {
        if ($1) return $1.replace(/\//, pathPrefix + '/')
        return $2.replace(/\//, pathPrefix + '/')
      })
      callback(null, htmlPluginData);
    });
  });
}

module.exports = RewritePath
