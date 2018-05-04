var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')
var packageJoson = require('../package.json')
var CopyPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const keyWord = process.argv[2]
const moduleName = packageJoson.name

let baseConfig = {
  entry: {
    [moduleName]: path.resolve('./src/js/components/index.js')
  },
  output: {
    filename: 'js/[name]' + (keyWord === 'production' ? '.min' : '') + '.js',
    path: path.resolve('./dist'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'test')]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          context: 'client',
          name: '[name].[ext]',
          outputPath: 'assets/images/',
          publicPath: '../'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          context: 'client',
          name: '[name].[ext]',
          outputPath: 'assets/fonts/',
          publicPath: '../'
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [autoprefixer({ browsers: ['iOS >= 7', 'Android >= 4.1'] })]
              }
            },
            'less-loader'
          ]
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        include: [path.join(__dirname, '..', 'src')]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.less', '.css', '.html', '.json'],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      'vue': 'vue/dist/vue.min.js',
      '@': path.join(__dirname, '../src/'),
      'components': path.join(__dirname, '../src/js/components/'),
      'assets': path.join(__dirname, '../src/assets/'),
      'common': path.join(__dirname, '../src/js/common/'),
      'utils': path.join(__dirname, '../src/js/utils/'),
      'pages': path.join(__dirname, '../src/js/pages/')
    }
  }
}

function getPlugins(){
  let plugins = []

  if (keyWord === 'production') {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: true
      }),

      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      // // new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: vendorPath }),
      new ExtractTextPlugin('css/' + moduleName + '.min.css')
    )
  } else {
    plugins.push(
      new ExtractTextPlugin('css/' + moduleName + '.css')
    )
  }

  plugins.push(new CopyPlugin([{ from: path.join(__dirname, '../src/assets'), to: path.join(__dirname, '../dist/assets') }]))

  baseConfig.plugins = plugins

  return baseConfig
}

baseConfig = getPlugins()

module.exports = baseConfig
