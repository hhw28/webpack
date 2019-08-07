const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')

const complier = webpack(config)
const app = express()

app.use(webpackDevMiddleware(complier, {}))

app.listen(3001, () => {
  console.log('server 3001 is running')
})