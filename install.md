# 介绍

在使用 echarts 生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts 的出现正是为了解决这个痛点。基于 Vue2.0 和 echarts 封装的 v-charts 图表组件，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表。

### npm安装

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

> 使用百度地图或高德地图时需要额外引入相应的模块
> <br>`<script src="https://cdn.jsdelivr.net/npm/echarts-amap/dist/echarts-amap.min.js"></script>`
> <br>`<script src="https://cdn.jsdelivr.net/npm/echarts/dist/extension/bmap.min.js"></script>`

### cdn示例

#### 全部引入

[在线示例](https://jsfiddle.net/vue_echarts/aa7ojxyt)

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
            columns: ['日期', '销售额'],
            rows: [
              { '日期': '1月1日', '销售额': 123 },
              { '日期': '1月2日', '销售额': 1223 },
              { '日期': '1月3日', '销售额': 2123 },
              { '日期': '1月4日', '销售额': 4123 },
              { '日期': '1月5日', '销售额': 3123 },
              { '日期': '1月6日', '销售额': 7123 }
            ]
          }
        }
      }
    })
  </script>
</body>
</html>
```

#### 单独引入某个图

[在线示例](https://jsfiddle.net/vue_echarts/jtvhj7jg)

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
            columns: ['日期', '销售额'],
            rows: [
              { '日期': '1月1日', '销售额': 123 },
              { '日期': '1月2日', '销售额': 1223 },
              { '日期': '1月3日', '销售额': 2123 },
              { '日期': '1月4日', '销售额': 4123 },
              { '日期': '1月5日', '销售额': 3123 },
              { '日期': '1月6日', '销售额': 7123 }
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
