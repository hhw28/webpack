const path = require('path');  // 内置模块path
const HtmlWebpackPlugin = require('html-webpack-plugin');  // html模板插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 打包前清空dist文件夹
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  //CSS插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 开发模式，生产模式production
  devtool: 'cheap-module-eval-source-map',  // production环境DevTool最佳实践：'cheap-module-source-map'
  entry: {
    main: './src/index.js',
    // app: './src/index.js'  //打包多个文件
  },
  output: {
    filename: '[name].bundle.[hash:8].js', // 打包后文件名
    path: path.resolve(__dirname, 'dist'), // 打包后文件路径，绝对路径
    // publicPath: 'http://sth.com/'  // index.html中引入的地址为 publicPath + filename
  },
  devServer: {   
    port: 3011,  // 不配置的情况默认为8080
    contentBase: path.join(__dirname, "dist"),  //需开启服务的地址 
    open: true,  // 自动打开localhost:3000的地址
    progress: true,
    compress: true,
    hot: true,  // 开启热模块更新
    hotOnly: true  // 即使热模块开启失效，浏览器仍旧不刷新
  },
  // 优化项
  optimization: { 
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin()
    ]
  },
  // 所有的webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      // minify: { // 压缩配置
      // 	removeAttributeQuotes: true, // 删除属性双引号
      // 	collapseWhitespace: true, // 折叠空行
      // },
      // hash: true // 哈希戳
    }),
    // new MiniCssExtractPlugin({
    // 	filename: 'main.css'
    // })
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      // loader 特点单一；字符串定义一个loader或对象（可传入参数options）; 多个loader使用数组 ; loader 顺序，默认从右向左执行
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', // style-loader 把 css 插入到head标签中
            options: {
              insertAt: 'top' // style标签内样式放在最上面
            }
          },
          'css-loader', // css-loader 解析 @import 这个语法
          'postcss-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'postcss-loader',
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insertAt: "top" 
            }
          },
          "css-loader", 
          "sass-loader",
          "postcss-loader",
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            // url-loader 和 file-loader 的区别
            // url-loader 有一个 limit 属性，可以定义图片文件大小
            // 当图片小于limit定义的大小，则图片会直接被打包在bundle.js中
            // 若图片大于limit定义的大小，则图片会和file-loader一样被打包在文件夹中然后被引用
            options: {
              limit: 10240,
              name: '[name]-[hash].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|ttf)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
}