# Quick Start

### Fully import
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

### On demand
-----

Each chart component of v-charts is individually packaged under the lib folder

```
|- lib/
    |- line.common.js  -------------- Line Chart
    |- bar.common.js  --------------- Bar Chart
    |- histogram.common.js  --------- Histogram Chart
    |- pie.common.js  --------------- Pie Chart
    |- ring.common.js  -------------- Ring Chart
    |- funnel.common.js  ------------ Funnel Chart
    |- waterfall.common.js  --------- Waterfall Chart
    |- radar.common.js  ------------- Radar Chart
    |- map.common.js  --------------- Map Chart
    |- sankey.common.js  ------------ Sankey Chart
    |- heatmap.common.js  ----------- Heatmap Chart
    |- scatter.common.js  ----------- Scatter Chart
    |- candle.common.js  ------------ Candle Chart
    |- gauge.common.js  ------------- Gauge Chart
    |- tree.common.js  -------------- Tree Chart
    |- bmap.common.js  -------------- Baidu map
    |- amap.common.js  -------------- Amap
```

When used, a single chart component can be directly import into the project.

```js
import Vue from 'vue'
import VeLine from 'v-charts/lib/line.common'
import App from './App.vue'

Vue.component(VeLine.name, VeLine)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
