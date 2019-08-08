const merge = require('webpack-merge')
const commonConfig = require('./webpack.config')

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-inline-source-map'
}

module.exports = merge(prodConfig, commonConfig)