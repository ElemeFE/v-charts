# 数据

### 指标和维度

v-charts 的数据由指标和维度组成。以一组常见的数据为例：

| 日期 | 访问用户 | 下单用户 |
| :--: | --: | --: |
| 2018-05-22 | 32371 | 29810 |
| 2018-05-23 | 12328 | 11398 |
| 2018-05-24 | 92381 | 82910 |

“维度” 指的是数据的属性，例如表格中的 “日期” 维度，表示生成的每组数据的日期。

“指标” 是量化衡量标准，例如表格中的 “访问用户” 和 “下单用户”。

下面，以上面的这组数据为例绘制一个折线图：

<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户'],
          rows: [
            { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
            { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
            { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
          ]
        }
      }
    }
  }
</script>
</script>

### 设置指标维度

一种典型的 v-charts `data` 属性数据格式如下所示：

```js
{
  columns: ['日期', '访问用户', '下单用户'],
  rows: [
    { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
    { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
    { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
  ]
}
```

- columns 中是维度和指标的集合，v-charts 中的大部分图表都是单维度多指标，所以默认第一个值为
维度，剩余的值为指标
- rows 中是数据的集合。

图表的 setting 属性中统一有两个配置：

- dimension 用于指定维度
- metrics 用于指定指标

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        metrics: ['下单用户']
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户'],
          rows: [
            { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
            { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
            { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
          ]
        }
      }
    }
  }
</script>
</script>

### 设置指标的别名

某些情况下，数据中指标的名称并不是我们想要展示出来的，大部分图表的 setting 属性中提供
统一的配置来解决这个问题。

<vuep template="#set-alias"></vuep>

<script v-pre type="text/x-template" id="set-alias">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>
<script>
  export default {
    data () {
      this.chartSettings = {
        labelMap: {
          PV: '访问用户',
          Order: '下单用户'
        }
      }
      return {
        chartData: {
          columns: ['date', 'PV', 'Order'],
          rows: [
            { 'date': '2018-05-22', 'PV': 32371, 'Order': 19810 },
            { 'date': '2018-05-23', 'PV': 12328, 'Order': 4398 },
            { 'date': '2018-05-24', 'PV': 92381, 'Order': 52910 }
          ]
        }
      }
    }
  }
</script>
</script>
