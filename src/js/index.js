/* global Vue */
import uiAdapt from 'utils/mobileAdapt'
import router from './router'
import App from './app'

uiAdapt(window, document, 750)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
