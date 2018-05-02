const envDev = require('./env-development')
const envProd = require('./env-production')
const envTest = require('./env-test')

module.exports = {
  development: envDev,
  production: envProd,
  test: envTest
}
