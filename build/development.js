const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: './examples/main.js',
      template: './public/index.html',
      filename: 'index.html'
    }
  },
  lintOnSave: false,
  configureWebpack: config => {
    config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
          },
          {
            loader: path.resolve(__dirname, '../loaders/markdownLoader.js')
          }
        ]
      }
    )
  },
  chainWebpack: config => {

    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/src/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
    
    config.resolve.alias
    .set('@', path.resolve(__dirname, '../src'))

    config.resolve.alias
    .set('examples', path.resolve(__dirname, '../examples'))

    config.resolve.alias
    .set('docs', path.resolve(__dirname, '../docs'))

    config.resolve.alias
    .set('helpers', path.resolve(__dirname, '../helpers'))
  },
  devServer: {
    host: 'localhost',
    port: 8888
  }
}