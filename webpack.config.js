// 内置模块path
let path = require('path')
// html模板插件
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')  //CSS插件
let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
	// devServer: {   //不配置的情况默认为8080
	// 	port: 3000,
	// 	progress: true,
	// 	contentBase: './build',
	// 	compress: true
	// },
	optimization: { // 优化项
		minimizer: [
			new OptimizeCssAssetsWebpackPlugin()
    ]
  },
	mode: 'development', // 开发模式，生产模式production
	entry: './src/index.js', // 入口
	output: {
		filename: 'bundle.js', // 打包后文件名，用hash区别文件名"bundle.[hash:8].js"
		path: path.resolve(__dirname, 'dist'), // 打包后文件路径，绝对路径
	},
	// 所有的webpack插件
	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: './src/index.html',
		// 	filename: 'index.html',
		// 	// minify: { // 压缩配置
		// 	// 	removeAttributeQuotes: true, // 删除属性双引号
		// 	// 	collapseWhitespace: true, // 折叠空行
		// 	// },
		// 	// hash: true // 哈希戳
		// }),
		new MiniCssExtractPlugin({
			filename: 'main.css'
		})
	],
	module: {
		rules: [
			// loader 特点单一；字符串定义一个loader或对象（可传入参数options）; 多个loader使用数组 ; loader 顺序，默认从右向左执行
			{
				test: /\.css$/,
				use: [{
						loader: 'style-loader', // style-loader 把 css 插入到head标签中
						options: {
							insertAt: 'top' // style标签内样式放在最上面
						}
					},
					'postcss-loader',
					'css-loader', // css-loader 解析 @import 这个语法
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
				test: /\.sass$/,
				use: [
					MiniCssExtractPlugin.loader,
					'postcss-loader',
					'css-loader',
					'less-loader',
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