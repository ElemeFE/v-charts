import Vue from 'vue'
import Router from 'vue-router'
import Install from './pages/install'
import Starter from './pages/starter'
import Item from './pages/item'
import TestItem from './pages/test-item'
import Eventer from './pages/eventer'
import Toggle from './pages/toggle'
import Test from './pages/test'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '安装', component: Install },
    { path: '/starter', name: '开始使用', component: Starter },
    { path: '/item/:type', name: '图表', component: Item },
    { path: '/test-item/:type', name: '测试图表', component: TestItem },
    { path: '/eventer', name: '事件监听', component: Eventer },
    { path: '/toggle', name: '图表切换', component: Toggle },
    { path: '/test', name: '测试', component: Test }
  ]
})
