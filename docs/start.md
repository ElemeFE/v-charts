## V-Charts

在使用 echarts 生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts 的出现正是为了解决这个痛点。基于 Vue2.0 和 echarts 封装的 V-Charts 图表组件，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表。

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

V-Charts的每种图表组件，都单独打包到lib文件夹下
```
|- lib/  --------------------- lib
    |- line.js  -------------- 折线图
    |- bar.js  -------------- 条形图
    |- column.js  -------------- 柱状图
    |- pie.js  -------------- 饼图
    |- ring.js  -------------- 环图
    |- funnel.js  -------------- 漏斗图
    |- waterfall.js  -------------- 瀑布图
    |- radar.js  -------------- 雷达图
```
使用时，可以直接将单个图表引入到项目中
```js
import Vue from 'vue'
import VeLine from 'v-charts/lib/line'

Vue.component(VeLine.name, VeLine)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

#### 在单独的页面中使用
---

```html
<template>
  <div>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line'
export default {
  created () {
    this.chartData = {
      columns: ['日期', '销售量'],
      rows: [
        { '日期': '1月1日', '销售量': 123 },
        { '日期': '1月2日', '销售量': 1223 },
        { '日期': '1月3日', '销售量': 2123 },
        { '日期': '1月4日', '销售量': 4123 },
        { '日期': '1月5日', '销售量': 3123 },
        { '日期': '1月6日', '销售量': 7123 }
      ]
    }
  },

  components: { VeLine }
}
</script>
```

