import Vue from 'vue'
import App from './App'

import VeCharts from '../../../../lib/index.common'

Vue.use(VeCharts)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
