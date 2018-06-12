/* eslint-disable comma-dangle */
import Vue from 'vue'
import Router from 'vue-router'
import Install from './pages/install'
import Chart from './pages/chart'

Vue.use(Router)

export const TEST_ROUTES = [
  { path: '/columns-rows', name: 'data', component: () => import('./test/columns-rows.vue') },
  { path: '/custom-props', name: 'options', component: () => import('./test/custom-props.vue') },
  { path: '/events', name: 'events', component: () => import('./test/events.vue') },
  { path: '/extend', name: 'extend', component: () => import('./test/extend.vue') },
  { path: '/hook', name: 'hook', component: () => import('./test/hook.vue') },
  { path: '/init', name: 'init', component: () => import('./test/init.vue') },
  { path: '/judge-width', name: 'judge-width', component: () => import('./test/judge-width.vue') },
  { path: '/loading-empty', name: 'loading-empty', component: () => import('./test/loading-empty.vue') },
  { path: '/mark', name: 'mark', component: () => import('./test/mark.vue') },
  { path: '/resize', name: 'resize', component: () => import('./test/resize.vue') },
  { path: '/set-option', name: 'set-option', component: () => import('./test/set-option.vue') },
]

export default new Router({
  routes: [
    { path: '/', name: '安装', component: Install },
    { path: '/chart/:type', name: '图表', component: Chart }
  ].concat(TEST_ROUTES)
})
