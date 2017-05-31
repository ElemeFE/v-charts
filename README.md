# V-Charts

[![Join the chat at https://gitter.im/ElemeFE/v-charts](https://badges.gitter.im/ElemeFE/v-charts.svg)](https://gitter.im/ElemeFE/v-charts?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status](https://travis-ci.org/ElemeFE/v-charts.svg?branch=master)](https://travis-ci.org/ElemeFE/v-charts)
[![NPM downloads](http://img.shields.io/npm/dm/v-charts.svg)](https://npmjs.org/package/v-charts)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/v-charts/lib/index.js?compression=gzip&label=gzip%20size:%20JS)
[![Npm package](https://img.shields.io/npm/v/v-charts.svg)](https://www.npmjs.org/package/v-charts)
![Language](https://img.shields.io/badge/language-javascript-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-000000.svg)

在使用echarts生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts的出现正是为了解决这个
痛点。基于Vue2.0和echarts封装的v-charts图表组件，只需要统一提供一种对前后端都友好的数据格式
设置简单的配置项，便可轻松生成常见的图表。

### 文档

[https://elemefe.github.io/v-charts/#/](https://elemefe.github.io/v-charts/#/)

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
