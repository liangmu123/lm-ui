const path = require('path')

const { getComponentEntries } = require('./utils')

const componentEntries = getComponentEntries('./packages')

module.exports = {
  configureWebpack: config => {
    // config.mode = 'development'
    config.entry = {
      index: './src/index.js',
      base: './src/styles/base.scss',
      ...componentEntries
    }
    config.output.filename = (chunkData) => {
      return '[name]/index.js'
    }
    config.output.libraryTarget = 'commonjs2'
    config.output.library = 'LMUI'
    // config.output.libraryExport = 'default'
  },
  outputDir: path.resolve(__dirname, '../lib'),
  lintOnSave: false,
  css: {
    sourceMap: true,
    extract: {
      filename: 'lm-theme/[name].css'
    }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('html')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')

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
  }
}