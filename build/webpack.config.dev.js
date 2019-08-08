const path = require('path');  // 内置模块path
const webpack = require('webpack');
const merge = require('webpack-merge')
const commonConfig = require('./webpack.config')

const devConfig = {
  mode: 'development', // 开发模式，生产模式production
  devtool: 'cheap-module-eval-source-map',  // production环境DevTool最佳实践：'cheap-module-source-map'
  devServer: {   
    port: 3011,  // 不配置的情况默认为8080
    contentBase: path.join(__dirname, "dist"),  //需开启服务的地址 
    open: true,  // 自动打开localhost:3000的地址
    progress: true,
    compress: true,
    hot: true,  // 开启热模块更新
    // hotOnly: true  // 即使热模块开启失效，浏览器仍旧不刷新
  },
  // 优化项
  optimization: { 
    usedExports: true  // 开发模式的tree-shaking
  },
  // 插件
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
}

module.exports = merge(devConfig, commonConfig)