# 条形图

#### 示例

<vuep template="#simple-bar"></vuep>

<script v-pre type="text/x-template" id="simple-bar">
<template>
  <ve-bar :data="chartData"></ve-bar>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 指定指标维度

<vuep template="#order-dimesion"></vuep>

<script v-pre type="text/x-template" id="order-dimesion">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dimension: ['日期'],
        metrics: ['访问用户']
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 排序条形图

<vuep template="#order-bar"></vuep>

<script v-pre type="text/x-template" id="order-bar">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        metrics: ['访问用户'],
        dataOrder: {
          label: '访问用户',
          order: 'desc'
        }
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 条形轴配置双y轴

<vuep template="#double-yAxis"></vuep>

<script v-pre type="text/x-template" id="double-yAxis">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        xAxisType: ['KMB', 'KMB'],
        xAxisName: ['下单用户', '访问用户'],
        axisSite: {
          top: ['访问用户']
        }
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置legend别名

<vuep template="#set-alias"></vuep>

<script v-pre type="text/x-template" id="set-alias">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        labelMap: {
          'PV': '访问用户',
          'Order': '下单用户'
        },
        legendName: {
          '访问用户': '访问用户 total: 10000'
        }
      }
      return {
        chartData: {
          columns: ['date', 'PV', 'Order', 'OrderRate'],
          rows: [
            { 'date': '1/1', 'PV': 1393, 'Order': 1093, 'OrderRate': 0.32 },
            { 'date': '1/2', 'PV': 3530, 'Order': 3230, 'OrderRate': 0.26 },
            { 'date': '1/3', 'PV': 2923, 'Order': 2623, 'OrderRate': 0.76 },
            { 'date': '1/4', 'PV': 1723, 'Order': 1423, 'OrderRate': 0.49 },
            { 'date': '1/5', 'PV': 3792, 'Order': 3492, 'OrderRate': 0.323 },
            { 'date': '1/6', 'PV': 4593, 'Order': 4293, 'OrderRate': 0.78 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 堆叠条形图

<vuep template="#stacked-bar"></vuep>

<script v-pre type="text/x-template" id="stacked-bar">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  export default {
    data () {
      this.chartSettings =  {
        stack: {
          'xxx': ['访问用户', '下单用户']
        }
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置纵轴为连续的数值轴

<vuep template="#set-value-axis"></vuep>

<script v-pre type="text/x-template" id="set-value-axis">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        yAxisType: 'value'
      }
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': 1, '访问用户': 1393 },
            { '日期': 2, '访问用户': 3530 },
            { '日期': 5, '访问用户': 2923 },
            { '日期': 10, '访问用户': 1723 },
            { '日期': 15, '访问用户': 3792 },
            { '日期': 36, '访问用户': 4593 }
          ]
        }
      }
    }
  }
</script>
</script>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | array | 默认columns第一项为维度 |
| metrics | 指标 | array | 默认columns第二项起为指标 |
| xAxisType | 上下坐标轴数据类型 | array | 可选值: KMB, normal, percent |
| xAxisName | 上下坐标轴标题 | array | - |
| axisSite | 指标所在的轴 | object | 默认不在top轴的指标都在bottom轴 |
| stack | 堆叠选项 | object | - |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| dataOrder | 设置数据排序方式 | boolean, object | 默认为false |
| scale | 是否是脱离 0 值比例 | array | 默认为[false, false]，表示上下两个轴都不会脱离0值比例。设置成 true 后坐标刻度不会强制包含零刻度 |
| min | 上下坐标轴最小值 | array | - |
| max | 上下坐标轴最大值 | array | - |
| labelMap | 设置指标的别名，同时作用于提示框和图例| object | - |
| legendName | 设置图表上方图例的别名 | object | - |
| label | 设置图形上的文本标签 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-bar.label) |
| itemStyle | 图形样式 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-bar.itemStyle) |
| yAxisType | 纵轴的类型 | string | 可选值'category'，'value'，默认为'category' |
| opacity | 透明度 | number | - |

> 备注1. axisSite 可以设置 top 和 bottom，例如示例所示 `axisSite: { top: ['占比'] }` 即将占比的数据置于上轴上。

> 备注2. stack 用于将两数据堆叠起来，例如实例中所示`stack: { '销售额': ['销售额-1季度', '销售额-2季度'] }` 即将'销售额-1季度', '销售额-2季度'相应的数据堆叠在一起。

> 备注3. dataOrder 用于设置数据的排序方式，用于更加清晰的展示数据的升降。例如： `{ label: '成本', order: 'asc }` 表示数据按照成本指标升序展示，降序为`desc`。

> 备注4. min和max的值可以直接设置为数字，例如：`[100, 300]`；也可以设置为`['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`，此时表示使用该坐标轴上的最小值或最大值为最小或最大刻度。

> 备注5. 为了优化连续的数值型横轴显示多指标的时候样式，在此情况下默认设置opacity为0.5。
