module.exports = {
  host: '127.0.0.1',
  port: 9000,
  get publicPath() {
    return 'http://' + this.host + ':' + this.port + '/dist/'
  },
  distPath: '../dist/',
  sourcePath: '../src/',
  css: [
    'assets/style/element-ui/index.css'
  ],
  js: [
    'assets/js-libs/es6-promise.min.js',
    'assets/js-libs/polyfill.min.js',
    'assets/js-libs/eventsource.min.js',
    'assets/js-libs/vue.min.js',
    'assets/js-libs/vuex.min.js',
    'assets/js-libs/vue-router.min.js',
    'assets/js-libs/moment.min.js',
    'assets/js-libs/lodash.min.js',
    'assets/js-libs/element-ui-2.0.8.min.js'
  ],
  smaplePath: './example'
}
