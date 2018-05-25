# 介绍

在使用 echarts 生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts 的出现正是为了解决这个痛点。基于 Vue2.0 和 echarts 封装的 v-charts 图表组件，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表。

### npm安装

```
npm i v-charts echarts -S
```

### cdn

```html
<script src="//cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="//cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/v-charts/lib/index.min.js"></script>
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/v-charts/lib/style.min.css">
```

### cdn示例

#### 全部引入

<iframe width="100%" height="430" src="//jsfiddle.net/vue_echarts/aa7ojxyt/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### 单独引入某个图

<iframe width="100%" height="430" src="//jsfiddle.net/jtvhj7jg/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
