import App from './App'
import Vue from 'vue'
import router from './router'
import 'normalize.css'

import CodeSection from './components/code-section'

Vue.component(CodeSection.name, CodeSection)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
