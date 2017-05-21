import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index'
import Item from './pages/item'
import Test from './pages/test'
import Global from './pages/global'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '首页', component: Index },
    { path: '/item/:type', name: '图', component: Item },
    { path: '/test', name: '测试', component: Test },
    { path: '/global', name: '其余参数', component: Global }
  ]
})
