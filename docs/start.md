

# 开始使用

### 完整引入
-----

```js
// main.js
import Vue from 'vue'
import VCharts from 'v-charts'
import App from './App.vue'

Vue.use(VCharts)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### 按需引入
-----

v-charts的每种图表组件，都单独打包到lib文件夹下
```
|- lib/
    |- line.js  -------------- 折线图
    |- bar.js  --------------- 条形图
    |- histogram.js  --------- 柱状图
    |- pie.js  --------------- 饼图
    |- ring.js  -------------- 环图
    |- funnel.js  ------------ 漏斗图
    |- waterfall.js  --------- 瀑布图
    |- radar.js  ------------- 雷达图
    |- map.js  --------------- 地图
    |- sankey.js  ------------ 桑基图
    |- heatmap.js  ----------- 热力图
    |- scatter.js  ----------- 散点图
    |- candle.js  ------------ k线图
    |- guage.js  ------------- 仪表盘
    |- tree.js  -------------- 树图
    |- bmap.js  -------------- 百度地图
    |- amap.js  -------------- 高德地图
```
使用时，可以直接将单个图表引入到项目中
```js
import Vue from 'vue'
import VeLine from 'v-charts/lib/line'
import App from './App.vue'

Vue.component(VeLine.name, VeLine)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
