

## v-charts

在使用 echarts 生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts 的出现正是为了解决这个痛点。基于 Vue2.0 和 echarts 封装的 v-charts 图表组件，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表。

v-charts 已经处理了关于echarts依赖引入的问题，保证所使用的图表，都是最小的文件。

### 引入v-charts

#### 完整引入
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

#### 按需引入
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
    |- bmap.js  -------------- 百度地图
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
