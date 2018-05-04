const rm = require('rimraf')
const webpackConfigCore = require('../config/webpack.config.release')
const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const distOperations = require('./release-dist-operations')
const keyWord = process.argv[2]
const isCdn = !!process.argv[3]

function build () {
  var spinner,
  label = 'production'

  if(isCdn === true){
    label = 'cdn'
  } else if(keyWord === 'package'){
    label = 'package'
  }

  spinner = ora(chalk.blue('*******build ' + label + ' version start*******'))
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
    if (err) {
      console.log(chalk.red('*******build ' + label + ' version failed*******'))
      throw err
    } else {
      console.log(chalk.green('*******build ' + label + ' version success*******'))
    }    
  })
}

build()
