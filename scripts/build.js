const rm = require('rimraf')
const webpackConfigCore = require('../config/webpack.config.release')
const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const distOperations = require('./release-dist-operations')
const keyWord = process.argv[2]

function build () {
  var spinner
  if(keyWord === 'production') {
    spinner = ora('building components...')
  } else {
    spinner = ora('packaging components...')
  }

  spinner.start()

  // rm(path.resolve('./dist/'), function (err) {
  //   if (err) {
  //     spinner.stop()
  //     throw err
  //   }

  //   webpack(webpackConfigCore, function (err, stats) {
  //     spinner.stop()
  //     console.log(chalk.magenta('*****************' + (keyWord === 'production' ? 'building' : 'packaging') + ' success****************'))
  //   })
  // })

  webpack(webpackConfigCore, function (err, stats) {
    spinner.stop()
    console.log(chalk.magenta('*****************' + (keyWord === 'production' ? 'building' : 'packaging') + ' success****************'))
  })
}

build()
