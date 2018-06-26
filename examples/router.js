/* eslint-disable comma-dangle */
import Vue from 'vue'
import Router from 'vue-router'

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
  { path: '/number-format', name: 'number', component: () => import('./test/number-format.vue') },
  { path: '/data-zoom', name: 'data-zoom', component: () => import('./test/data-zoom.vue') },
]

export default new Router({
  routes: [
    { path: '/', name: '安装', component: () => import('./pages/install') },
    { path: '/chart/:type', name: '图表', component: () => import('./pages/chart') },
    { path: '/bmap', name: '百度地图', component: () => import('./pages/bmap') },
    { path: '/amap', name: '高德地图', component: () => import('./pages/amap') },
  ].concat(TEST_ROUTES)
})
