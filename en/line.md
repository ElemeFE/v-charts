# Line

#### Example

<vuep template="#simple-line"></vuep>

<script v-pre type="text/x-template" id="simple-line">
<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'cost': 1523, 'date': '01/01', 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'cost': 1223, 'date': '01/02', 'profit': 1523, 'growthRate': 0.345, 'people': 100 },
            { 'cost': 2123, 'date': '01/03', 'profit': 1523, 'growthRate': 0.7, 'people': 100 },
            { 'cost': 4123, 'date': '01/04', 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
            { 'cost': 3123, 'date': '01/05', 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'cost': 7123, 'date': '01/06', 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set metrics and dimension

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        metrics: ['cost', 'profit'],
        dimension: ['date']
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'cost': 1523, 'date': '01/01', 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'cost': 1223, 'date': '01/02', 'profit': 1523, 'growthRate': 0.345, 'people': 100 },
            { 'cost': 2123, 'date': '01/03', 'profit': 1523, 'growthRate': 0.7, 'people': 100 },
            { 'cost': 4123, 'date': '01/04', 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
            { 'cost': 3123, 'date': '01/05', 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'cost': 7123, 'date': '01/06', 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set metrics and dimension

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        metrics: ['cost', 'profit'],
        dimension: ['date']
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'cost': 1523, 'date': '01/01', 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'cost': 1223, 'date': '01/02', 'profit': 1523, 'growthRate': 0.345, 'people': 100 },
            { 'cost': 2123, 'date': '01/03', 'profit': 1523, 'growthRate': 0.7, 'people': 100 },
            { 'cost': 4123, 'date': '01/04', 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
            { 'cost': 3123, 'date': '01/05', 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'cost': 7123, 'date': '01/06', 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### xAxis label rotate

<vuep template="#show-all-xaxis"></vuep>

<script v-pre type="text/x-template" id="show-all-xaxis">
<template>
  <ve-line :data="chartData" :extend="extend"></ve-line>
</template>

<script>
  export default {
    data: function () {
      this.extend = {
        'xAxis.0.axisLabel.rotate': 45
      }
      return {
        chartData: {
          columns: ['date', 'PV', 'order', 'orderRate'],
          rows: [
            { 'date': '1/1', 'PV': 1393, 'order': 1093, 'orderRate': 0.32 },
            { 'date': '1/2', 'PV': 3530, 'order': 3230, 'orderRate': 0.26 },
            { 'date': '1/3', 'PV': 2923, 'order': 2623, 'orderRate': 0.76 },
            { 'date': '1/4', 'PV': 1723, 'order': 1423, 'orderRate': 0.49 },
            { 'date': '1/5', 'PV': 3792, 'order': 3492, 'orderRate': 0.323 },
            { 'date': '1/6', 'PV': 4593, 'order': 4293, 'orderRate': 0.78 },
            { 'date': '1/7', 'PV': 1393, 'order': 1093, 'orderRate': 0.32 },
            { 'date': '1/8', 'PV': 3530, 'order': 3230, 'orderRate': 0.26 },
            { 'date': '1/9', 'PV': 2923, 'order': 2623, 'orderRate': 0.76 },
            { 'date': '1/10', 'PV': 1723, 'order': 1423, 'orderRate': 0.49 },
            { 'date': '1/11', 'PV': 3792, 'order': 3492, 'orderRate': 0.323 },
            { 'date': '1/12', 'PV': 4593, 'order': 4293, 'orderRate': 0.78 }
          ]
        }
      }
    }
  }
</script>
</script>

#### double y axis


<vuep template="#set-double-y-axis"></vuep>

<script v-pre type="text/x-template" id="set-double-y-axis">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        axisSite: { right: ['growthRate'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['number', 'rate']
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'date': '01/01', 'cost': 1523, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/02', 'cost': 1223, 'profit': 1523, 'growthRate': 0.345, 'people': 100 },
            { 'date': '01/03', 'cost': 2123, 'profit': 1523, 'growthRate': 0.7, 'people': 100 },
            { 'date': '01/04', 'cost': 4123, 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
            { 'date': '01/05', 'cost': 3123, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/06', 'cost': 7123, 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### stacked area chart

<vuep template="#stack-area"></vuep>

<script v-pre type="text/x-template" id="stack-area">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        stack: { 'sell': ['cost', 'profit'] },
        area: true
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'date': '01/01', 'cost': 1523, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/02', 'cost': 1223, 'profit': 1523, 'growthRate': 0.345, 'people': 100 },
            { 'date': '01/03', 'cost': 2123, 'profit': 1523, 'growthRate': 0.7, 'people': 100 },
            { 'date': '01/04', 'cost': 4123, 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
            { 'date': '01/05', 'cost': 3123, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/06', 'cost': 7123, 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### metrics alias

<vuep template="#metrics-name-map"></vuep>

<script v-pre type="text/x-template" id="metrics-name-map">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        labelMap: {
          balance: 'b',
          age: 'a'
        }
      }
      return {
        chartData: {
          columns: ['date', 'balance', 'age'],
          rows: [
            { 'date': '01/01', 'balance': 123, 'age': 3 },
            { 'date': '01/02', 'balance': 1223, 'age': 6 },
            { 'date': '01/03', 'balance': 2123, 'age': 9 },
            { 'date': '01/04', 'balance': 4123, 'age': 12 },
            { 'date': '01/05', 'balance': 3123, 'age': 15 },
            { 'date': '01/06', 'balance': 7123, 'age': 20 }
          ]
        }
      }
    }
  }
</script>
</script>


#### set xAxis type

<vuep template="#xAxis-type-value"></vuep>

<script v-pre type="text/x-template" id="xAxis-type-value">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        xAxisType: 'value'
      }
      return {
        chartData: {
          columns: ['num', 'balance'],
          rows: [
            { 'num': 1, 'balance': 123 },
            { 'num': 10, 'balance': 1223 },
            { 'num': 11, 'balance': 2123 },
            { 'num': 100, 'balance': 4123 },
            { 'num': 101, 'balance': 6123 },
            { 'num': 120, 'balance': 7123 }
          ]
        }
      }
    }
  }
</script>
</script>

#### settings

| attribute | description | type | remark |
| --- | --- | --- | --- |
| dimension | dimension of chart data | array | default `columns[0]` |
| metrics | metrics of chart data | array | defaut `[columns[1] ~ columns[columns.length - 1]]` |
| xAxisType | type of x axis | string | `'category'`/`'value'`/`'time'`/`'log'` |
| yAxisType | type of left and right y-axis | array |`'KMB'`/`'normal'`/`'percent'` |
| yAxisName | title of left and right y-axis | array | - |
| axisSite | metrics in left or right | object | - |
| stack | stack option | object | - |
| area | whether display area | boolean | default `false` |
| scale | whether not to contain zero position of left and right y-axis | array | default `[false, false]` |
| min | min value of left and right y-axis | array | - |
| max | max value of left and right y-axis | array | - |
| nullAddZero | null convert to zero | boolean | When set to true, if the corresponding data in the data is null or undefined, 0 is added to the chart|
| digit | digit of percent type data | number | default `2` |
| labelMap | metrics alias | object | effect both tooltip and legend |
| legendName | legend alias | object | only effect legend |
| label | label of chart | object | content reference [docs](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.label) |
| itemStyle | style of the symbol point of broken line | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.itemStyle) |
| lineStyle | line style | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.lineStyle) |
| areaStyle | style of area | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.areaStyle) |

> Remark 1. `axisSite` object can set left and right, like the example, if you set `axisSite: { right: ['growthRate'] }`, data of growthRate will be set in right y-axis.

> Remark 2. `stack` is used to put data on same stack name series,, like the example, if you set `stack: { 'sales': ['cost', 'profit'] }`, cost line will put on profit line.

> Remark 3. `min` and `max` can set number like `[100, 3000]`, or set `['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`, at this moment, it means use the max or min number of all data in one line.
