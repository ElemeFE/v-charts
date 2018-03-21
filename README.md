# v-charts

[![Build Status](https://travis-ci.org/ElemeFE/v-charts.svg?branch=master)](https://travis-ci.org/ElemeFE/v-charts)
[![NPM downloads](http://img.shields.io/npm/dm/v-charts.svg)](https://npmjs.org/package/v-charts)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/v-charts/lib/index.js?compression=gzip&label=gzip%20size:%20JS)
[![Npm package](https://img.shields.io/npm/v/v-charts.svg)](https://www.npmjs.org/package/v-charts)
![Language](https://img.shields.io/badge/language-javascript-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-000000.svg)
[![Join the chat at https://gitter.im/ElemeFE/v-charts](https://badges.gitter.im/ElemeFE/v-charts.svg)](https://gitter.im/ElemeFE/v-charts?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

在使用echarts生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts的出现正是为了解决这个
痛点。基于Vue2.0和echarts封装的v-charts图表组件，只需要统一提供一种对前后端都友好的数据格式
设置简单的配置项，便可轻松生成常见的图表。

### 安装
---

```
npm i v-charts echarts -S
```

### 文档
---

[v-charts.js.org](https://v-charts.js.org)

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

### LICENSE
---

MIT
