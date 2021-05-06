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
    
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
    
    config.resolve.alias
    .set('@', path.resolve(__dirname, '../src'))

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