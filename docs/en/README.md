## README

## Introduction

Creating charts with [ECharts](http://echarts.baidu.com) often involves complex data transformations and intricate configuration settings. vcharts simplifies this process. Built on Vue 2.x and ECharts, vcharts allows you to generate graphical charts easily by providing a user-friendly data structure and minimal configuration.

## Installation

### npm

Install v-charts and ECharts by using the following command:

```
npm i v-charts echarts -S
```

### cdn

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/v-charts/lib/index.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/v-charts/lib/style.min.css">
```

> If you're using BMap or AMap charts, additional modules are required:
> <br>`<script src="https://cdn.jsdelivr.net/npm/echarts-amap/dist/echarts-amap.min.js"></script>`
> <br>`<script src="https://cdn.jsdelivr.net/npm/echarts/dist/extension/bmap.min.js"></script>`


#### Example #1

[Here is a basic example of using v-charts to create a line chart](https://jsfiddle.net/vue_echarts/hc4xhyva)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>v-charts</title>
</head>
<body>
  <div id="app">
    <ve-line :data="chartData"></ve-line>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/v-charts/lib/index.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/v-charts/lib/style.min.css">
  <script>
    new Vue({
      el: '#app',
      data: function () {
        return {
          chartData: {
            columns: ['date', 'sales'],
            rows: [
              { 'date': '1月1日', 'sales': 123 },
              { 'date': '1月2日', 'sales': 1223 },
              { 'date': '1月3日', 'sales': 2123 },
              { 'date': '1月4日', 'sales': 4123 },
              { 'date': '1月5日', 'sales': 3123 },
              { 'date': '1月6日', 'sales': 7123 }
            ]
          }
        }
      }
    })
  </script>
</body>
</html>
```

#### Example #2

[Here's an example of how to use a specific chart component](https://jsfiddle.net/vue_echarts/6h15xnxx)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>v-charts</title>
</head>
<body>
  <div id="app">
    <ve-line :data="chartData"></ve-line>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/v-charts/lib/line.min.js"></script>
  <!-- -------------------------------------------------△△△△------------ -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/v-charts/lib/style.min.css">
  <script>
    new Vue({
      el: '#app',
      data: function () {
        return {
          chartData: {
            columns: ['date', 'sales'],
            rows: [
              { 'date': '1月1日', 'sales': 123 },
              { 'date': '1月2日', 'sales': 1223 },
              { 'date': '1月3日', 'sales': 2123 },
              { 'date': '1月4日', 'sales': 4123 },
              { 'date': '1月5日', 'sales': 3123 },
              { 'date': '1月6日', 'sales': 7123 }
            ]
          }
        }
      },
      components: { VeLine }
    })
  </script>
</body>
</html>
```