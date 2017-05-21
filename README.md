<p align="center">
  <img width="200" src="https://cdn.rawgit.com/ElemeFE/v-charts/dev/docs/static/logo.png">
</p>

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

`import VeLine from 'v-charts/lib/line'`

`<ve-line :data="chartData" :settings="chartSettings"></ve-line>`

> 目前支持的图表有 line, bar, column, waterfall, pie, ring, funnel, radar

### 文档

[https://vue-echarts.github.io/](https://vue-echarts.github.io/)

### 属性
---
| 配置项 | 简介 | 类型 | 示例 | 备注 |
| --- | --- | --- | --- | --- |
| data | 图表数据 | Object | `{ columns: [], rows: [] }` | columns代表指标和维度名称， rows为数据内容 |
| settings | 图表配置项 | Object | `{ "yAxisType": [ "KMB", "percent" ] }` |  |
| colors | 颜色列表 | Array | `[ "#19d4ae", "#5ab1ef", "#fa6e86", "#ffb980", "#0067a6", "#c4b4e4" ]` |  |
| tooltip | 是否显示提示框 | Boolean | `false` | 默认为true |
| grid | 网格配置 | Object | `{ left: 20, right: 20 }` |  |
| scale | 是否是脱离 0 值比例 | Object | `{ x: true, y: true }` | 设置成 true 后坐标刻度不会强制包含零刻度，默认都是false |
| events | 为图表绑定事件 | Object | `{ click: function (e) { console.log(e) } }` |  |
| before-config | 对数据提前进行额外的处理 | Function | `function (data) { /* do something */return data; }` | 在数据转化为配置项开始前触发，参数为data，需返回表格数据
| after-config | 对生成好的echarts配置进行额外的处理 | Function | `function (options) { /* do something */return options; }` | 在数据转化为配置项结束后触发，参数为options, 需返回echarts配置
