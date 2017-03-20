import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index'
import Item from './pages/item'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '首页', component: Index },
    { path: '/item/:type', name: '柱状图', component: Item }
  ]
})
