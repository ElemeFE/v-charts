## V-Charts

在使用echarts生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts的出现正是为了解决这个
痛点。基于Vue2.0和echarts封装的v-charts图表组件，只需要统一提供一种对前后端都友好的数据格式
设置简单的配置项，便可轻松生成常见的图表。

### 安装
---

```
npm i v-charts -S
```

### 快速上手
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

> 目前支持的图表有 line, bar, column, waterfall, pie, ring, funnel, radar

<iframe width="100%" height="400" src="//jsfiddle.net/vue_echarts/he1u3j75/3/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### 属性
---
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data | 图表数据 | Object | columns代表指标和维度名称， rows为数据内容 |
| width | 图表宽度 | String | 默认100% |
| height | 图表高度 | String | 默认400px |
| settings | 图表配置项 | Object |  |
| colors | 颜色列表 | Array |  |
| tooltip | 是否显示提示框 | Boolean | 默认为true |
| grid | 网格配置 | Object |  |
| scale | 是否是脱离 0 值比例 | Object | 设置成 true 后坐标刻度不会强制包含零刻度，默认都是false |
| events | 为图表绑定事件 | Object |  |
| before-config | 对数据提前进行额外的处理 | Function | 在数据转化为配置项开始前触发，参数为data，需返回表格数据
| after-config | 对生成好的echarts配置进行额外的处理 | Function | 在数据转化为配置项结束后触发，参数为options, 需返回echarts配置
