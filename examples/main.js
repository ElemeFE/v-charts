import App from './App'
import Vue from 'vue'
import chartData from './data/index'
import router from './router'
import 'normalize.css'
import Prism from 'prismjs'
import 'prismjs/themes/prism-twilight.css'

Vue.prototype.$chartData = chartData
Vue.prototype.$Prism = Prism

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
