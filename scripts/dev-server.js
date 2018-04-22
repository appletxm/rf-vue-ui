var express = require('express')
var webpack = require('webpack')
var path = require('path')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var envConfig = require('../config/env')
var webpackConfig = require('../config/webpack.config')
var serverRouter = require('./server-router')
var open = require('open')
var app = express()
var compiler = webpack(webpackConfig)
var host = envConfig['development']['host']
var port = envConfig['development']['port']
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var apiPrefix

process.env.NODE_ENV = process.argv && process.argv.length >= 2 ? (process.argv)[2] : 'development'
apiPrefix = envConfig[process.env.NODE_ENV]['apiPrefix']

app.use(webpackDevMiddleware(compiler, {
  // public path should be the same with webpack config
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname + '/../dist'))

app.use('*', serverRouter['*'])

// single file
app.use(['*/oss/uploadFile'], upload.single('file'), function (req, res) {
  serverRouter['uploadSingleFile'](req, res)
})

// multiple file
// app.use(['*/oss/uploadFiles'], upload.array('file', 10), function (req, res) {
//   serverRouter['uploadMultipleFile'](req, res)
// })

app.use(apiPrefix, function (req, res) {
  serverRouter[apiPrefix](req, res)
})

app.use('/*assets/images/*', function (req, res) {
  serverRouter['image'](req, res, compiler)
})

app.use('/*.html', function (req, res) {
  serverRouter['html'](req, res, compiler)
})

app.use('/', function (req, res) {
  serverRouter['/'](req, res, compiler)
})

// TODO why in windows the port must to be 8088, and in mac you can define anyother port
// sometimes the npm start cli will get the "event: 160 erro" in windows you need to run the cli in the ternimal "rm -rf node_modules && npm cache clean --force && npm install" or the port still works need to end them
app.listen(port, host, function (arg) {
  var url = 'http://' + host + ':' + port
  console.info('dev server started at: ', url)
})
