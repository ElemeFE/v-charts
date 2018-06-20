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
  <a href="https://v-charts.js.org/#/en/">
    Document
  </a>
  <span> | </span>
  <a href="https://codesandbox.io/s/z69myovqzx">
    Sample Project
  </a>
  <span> | </span>
  <a>
    English
  </a>
  <span> | </span>
  <a href="./README_CN.md">
    中文
  </a>
</p>

> Chart components based on Vue2.x and Echarts

## Features
- **Uniform data format:** Use an uniform data format that both convient for frontend and backend, and also easy to create and edit.
- **Simplified configuration:** With simplified configuration items, complex requirements can be easily implemented.
- **Simple customization:** Provide a variety of custom Echarts way, you can easily set the chart options.

## Support

Modern browsers and Internet Explorer 10+, include pc and mobile browser.

## Install

```
npm i v-charts echarts -S
```

## Start

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
        columns: ['date', 'PV'],
        rows: [
          { 'date': '01-01', 'PV': 1231 },
          { 'date': '01-02', 'PV': 1223 },
          { 'date': '01-03', 'PV': 2123 },
          { 'date': '01-04', 'PV': 4123 },
          { 'date': '01-05', 'PV': 3123 },
          { 'date': '01-06', 'PV': 7123 }
        ]
      }
    }
  }
}
</script>
```

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/ElemeFE/v-charts/releases) or [ChangeLog](./CHANGELOG.md).

## Contribution

Please make sure to read the [Contributing Guide](./CONTRIBUTING.md) before making a pull request.

## License

[MIT](http://opensource.org/licenses/MIT)
