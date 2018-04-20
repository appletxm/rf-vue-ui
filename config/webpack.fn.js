var path = require('path')
var HtmlWebPlugin = require('html-webpack-plugin')
var CopyPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'

module.exports = {
  getEnvCfg: function (envKeyWord) {
    let envCfg, envFilePath

    if (envKeyWord === 'development') {
      envCfg = 'env-development'
    } else if (envKeyWord === 'mock') {
      envCfg = 'env-mock'
    } else if (envKeyWord === 'test') {
      envCfg = 'env-test'
    } else {
      if ((process.argv)[3] && (process.argv)[3] === 'test') {
        envCfg = 'env-test'
      } else if ((process.argv)[3] && (process.argv)[3] === 'pre') {
        envCfg = 'env-pre'
      } else {
        envCfg = 'env-production'
      }
    }

    envFilePath = path.join(__dirname, './' + envCfg + '.js')

    return envFilePath
  },

  getOutPutConfig: function (envKeyWord, webpack, webpackConfig) {
    var indexJs = path.resolve('./src/index.js')

    if (envKeyWord === 'development' || envKeyWord === 'mock') {
      webpackConfig.entry.main = [hotMiddlewareScript, indexJs]
      webpackConfig.devtool = 'source-map'
    } else {
      webpackConfig.entry.main = [indexJs]
      webpackConfig.devtool = 'cheap-source-map'
    }

    return webpackConfig
  },

  getPluginConfig: function (envKeyWord, webpack, webpackConfig) {
    var vendorPath, cssPath

    if (envKeyWord === 'development' || envKeyWord === 'mock') {
      vendorPath = 'js/vendor.js'
      cssPath = 'css/app.[hash:7].css'
      webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin()
      )
    } else {
      vendorPath = 'js/vendor.min.[hash:7].js'
      cssPath = 'css/app.min.[hash:7].css'
      webpackConfig.plugins.push(
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.DedupePlugin()
      )
    }

    webpackConfig.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: vendorPath }),
      new CopyPlugin([{ from: path.join(__dirname, '../src/assets'), to: path.join(__dirname, '../dist/assets') }]),
      new ExtractTextPlugin(cssPath)
    )

    return webpackConfig
  },

  getHtmlWebPluginConfig: function (env, webpackConfig) {
    var baseConfig = {
      favicon: '',
      inject: 'body',
      publicPath: env.publicPath,
      libFiles: {
        css: env['css'],
        js: env['js']
      }
    }
    webpackConfig.plugins.push(
      new HtmlWebPlugin(Object.assign(baseConfig, {
        title: 'Smart Sampling - admin',
        filename: path.join(__dirname, '../dist/', 'admin.html'),
        template: path.join(__dirname, '../src/', 'index.ejs'),
        chunks: ['vendor', 'app']
      })),

      new HtmlWebPlugin(Object.assign(baseConfig, {
        title: 'Smart Sampling - login',
        filename: path.join(__dirname, '../dist/', 'login.html'),
        template: path.join(__dirname, '../src/', 'index.ejs'),
        chunks: ['vendor', 'login']
      })),

      new HtmlWebPlugin(Object.assign(baseConfig, {
        title: 'Smart Sampling - register',
        filename: path.join(__dirname, '../dist/', 'register.html'),
        template: path.join(__dirname, '../src/', 'index.ejs'),
        chunks: ['vendor', 'register']
      })),

      new HtmlWebPlugin(Object.assign(baseConfig, {
        title: 'Smart Sampling - reset-password',
        filename: path.join(__dirname, '../dist/', 'reset-password.html'),
        template: path.join(__dirname, '../src/', 'index.ejs'),
        chunks: ['vendor', 'resetPss']
      })),

      new HtmlWebPlugin(Object.assign(baseConfig, {
        title: 'Smart Sampling - completion userinfo',
        filename: path.join(__dirname, '../dist/', 'completion-user-info.html'),
        template: path.join(__dirname, '../src/', 'index.ejs'),
        chunks: ['vendor', 'completionUserInfo']
      })),

      new HtmlWebPlugin(Object.assign(baseConfig, {
        title: 'Smart Sampling - portal home',
        filename: path.join(__dirname, '../dist/', 'index.html'),
        template: path.join(__dirname, '../src/', 'index.ejs'),
        chunks: ['vendor', 'portalHome']
      })),

      new HtmlWebPlugin(Object.assign(baseConfig, {
        title: 'Smart Sampling - portal home',
        filename: path.join(__dirname, '../dist/', 'portal-supplier-detail.html'),
        template: path.join(__dirname, '../src/', 'index.ejs'),
        chunks: ['vendor', 'portalSupplierDetail']
      })),

      new HtmlWebPlugin(Object.assign(baseConfig, {
        title: 'Smart Sampling - portal home',
        filename: path.join(__dirname, '../dist/', 'portal-create-order.html'),
        template: path.join(__dirname, '../src/', 'index.ejs'),
        chunks: ['vendor', 'portalCreateOrder']
      })),

      new HtmlWebPlugin(Object.assign(baseConfig, {
        title: 'Smart Sampling - portal home',
        filename: path.join(__dirname, '../dist/', 'portal-supplier-list.html'),
        template: path.join(__dirname, '../src/', 'index.ejs'),
        chunks: ['vendor', 'portalSupplierList']
      })),

      new HtmlWebPlugin(Object.assign(baseConfig, {
        title: 'Smart Sampling - portal home',
        filename: path.join(__dirname, '../dist/', 'portal-sample-detail.html'),
        template: path.join(__dirname, '../src/', 'index.ejs'),
        chunks: ['vendor', 'portalSampleDetail']
      })),

      new HtmlWebPlugin(Object.assign(baseConfig, {
        title: 'Smart Sampling - portal home',
        filename: path.join(__dirname, '../dist/', 'portal-create-simple-order.html'),
        template: path.join(__dirname, '../src/', 'index.ejs'),
        chunks: ['vendor', 'portalCreateSimpleOrder']
      }))

    )

    return webpackConfig
  }
}