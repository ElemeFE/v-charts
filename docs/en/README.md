
# Introduction

When using [echarts](http://echarts.baidu.com) to generate charts, we often need to do cumbersome data scheme conversion, modify complex configuration items, v-charts precisely to solve this. v-charts is based on Vue2.x and echarts, just need to provide a friendly data scheme and set simple configuration items, you can easily generate common charts.

### npm

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

> when using bmap or amap need to add additional modules
> <br>`<script src="https://cdn.jsdelivr.net/npm/echarts-amap/dist/echarts-amap.min.js"></script>`
> <br>`<script src="https://cdn.jsdelivr.net/npm/echarts/dist/extension/bmap.min.js"></script>`


#### Example

[online demo](https://jsfiddle.net/vue_echarts/hc4xhyva)

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

#### Use a single chart component

[online demo](https://jsfiddle.net/vue_echarts/6h15xnxx)

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
