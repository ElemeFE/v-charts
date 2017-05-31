## V-Charts

在使用 echarts 生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts 的出现正是为了解决这个痛点。基于 Vue2.0 和 echarts 封装的 V-Charts 图表组件，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表。

v-charts 已经处理了关于echarts依赖引入的问题，保证所使用的图表，都是最小的文件。

### 引入V-Charts

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
----
借助 webpack2.0提供的tree-shaking功能，可以轻松实现按需引入，使得最终的打包文件体积更小。
```js
import Vue from 'vue'
import 'echarts/lib/chart/line'
import { VeLine } from 'v-charts/lib/index.esm'

Vue.component(VeLine.name, VeLine)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
> 为了使生成的内容更小，按需引入时需要手动引入echarts中对应的模块，例如上面使用了折线图，
则需要引入 'echarts/lib/chart/line'，模块对应关系如下

> VeLine => 'echarts/lib/chart/line'

> VeBar => 'echarts/lib/chart/bar'

> VeColumn => 'echarts/lib/chart/bar'

> VeRing => 'echarts/lib/chart/pie'

> VePie => 'echarts/lib/chart/pie'

> VeWaterfall => 'echarts/lib/chart/bar'

> VeRadar => 'echarts/lib/chart/radar'

> VeFunnel => 'echarts/lib/chart/funnel'

同时，V-Charts的每种图表组件，都单独打包到lib文件夹下，使用单独引入的方式则不依赖于webpack的tree-shaking
```
|- lib/
    |- line.js  -------------- 折线图
    |- bar.js  --------------- 条形图
    |- column.js  ------------ 柱状图
    |- pie.js  --------------- 饼图
    |- ring.js  -------------- 环图
    |- funnel.js  ------------ 漏斗图
    |- waterfall.js  --------- 瀑布图
    |- radar.js  ------------- 雷达图
```
使用时，可以直接将单个图表引入到项目中
```js
import Vue from 'vue'
import 'echarts/lib/chart/line'
import VeLine from 'v-charts/lib/line'

Vue.component(VeLine.name, VeLine)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
