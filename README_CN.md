<p align="center">
<img src="./examples/favicon.ico" alt="mark text" width="100" height="100">
</p>

<h3 align="center">v-charts</h3>

<p align="center">
  <a href="https://travis-ci.org/ElemeFE/v-charts">
    <img src="https://travis-ci.org/ElemeFE/v-charts.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://npmjs.org/package/v-charts">
    <img src="http://img.shields.io/npm/dm/v-charts.svg" alt="NPM downloads">
  </a>
  <a href="https://www.npmjs.org/package/v-charts">
    <img src="https://img.shields.io/npm/v/v-charts.svg" alt="Npm package">
  </a>
  <a>
    <img src="https://img.shields.io/badge/language-javascript-yellow.svg" alt="Language">
  </a>
  <a>
    <img src="https://img.shields.io/badge/license-MIT-000000.svg" alt="License">
  </a>
  <a href="https://gitter.im/ElemeFE/v-charts?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
    <img src="https://badges.gitter.im/ElemeFE/v-charts.svg" alt="Join the chat">
  </a>
</p>

<p align="center">
  <a href="https://v-charts.js.org">
    文档
  </a>
  <span> | </span>
  <a href="https://codesandbox.io/s/z69myovqzx">
    示例项目
  </a>
  <span> | </span>
  <a href="./README.md">
    English
  </a>
  <span> | </span>
  <a>
    中文
  </a>
</p>

> 基于 Vue2.x 封装的 Echarts 图表组件

## 特性

- **统一的数据格式：** 使用对前后端都友好的数据格式，方便生成和修改。
- **简化的配置项：** 通过简化的配置项，可以轻松实现复杂需求。
- **定制简单：** 提供多种自定义 Echarts 方式，可以方便的设置图表配置项。

## 支持性

支持所有现代浏览器及 IE10+ ，包括 pc 端和移动端。

## 安装

```
npm i v-charts echarts -S
```

## 快速上手

```html
<template>
  <div>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  components: { VeLine },
  data () {
    return {
      chartData: {
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
    }
  }
}
</script>
```

## 更新日志

每个版本的详细修改可以参考 [release notes](https://github.com/ElemeFE/v-charts/releases) 或者 [ChangeLog](./CHANGELOG_CN.md)。

## 贡献

在发起一个 pull request 之前，请先阅读[贡献指南](./CONTRIBUTING_CN.md)。

## License

[MIT](http://opensource.org/licenses/MIT)
