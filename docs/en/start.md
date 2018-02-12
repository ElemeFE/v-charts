## v-charts

When using [echarts](http://echarts.baidu.com) to generate charts, we often need to do cumbersome data scheme conversion, modify complex configuration items, v-charts precisely to solve this. v-charts is based on Vue2.x and echarts, just need to provide a friendly data scheme and set simple configuration items, you can easily generate common charts.

### Import v-charts

#### Fully import
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

#### On demand
-----

v-charts的每种图表组件，都单独打包到lib文件夹下

```
|- lib/
    |- line.js  -------------- Line Chart
    |- bar.js  --------------- Bar Chart
    |- histogram.js  --------- Histogram Chart
    |- pie.js  --------------- Pie Chart
    |- ring.js  -------------- Ring Chart
    |- funnel.js  ------------ Funnel Chart
    |- waterfall.js  --------- Waterfall Chart
    |- radar.js  ------------- Radar Chart
    |- map.js  --------------- Map Chart
    |- sankey.js  ------------ Sankey Chart
    |- heatmap.js  ----------- Heatmap Chart
    |- scatter.js  ----------- Scatter Chart
    |- candle.js  ------------ Candle Chart
    |- gauge.js  ------------- Gauge Chart
    |- tree.js  -------------- Tree Chart
    |- bmap.js  -------------- Baidu map
    |- amap.js  -------------- Amap
```

When used, a single chart component can be directly import into the project.

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
