# Histogram

#### Example

<vuep template="#simple-histogram"></vuep>

<script v-pre type="text/x-template" id="simple-histogram">
<template>
  <ve-histogram :data="chartData"></ve-histogram>
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
            { 'cost': 4123, 'date': '01/04', 'profit': 1523, 'growthRate': 0.31, 'people': 100 }
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
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
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
            { 'cost': 4123, 'date': '01/04', 'profit': 1523, 'growthRate': 0.31, 'people': 100 }
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
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
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
            { 'date': '01/04', 'cost': 4123, 'profit': 1523, 'growthRate': 0.31, 'people': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### histogram with line

<vuep template="#histogram-line"></vuep>

<script v-pre type="text/x-template" id="histogram-line">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        metrics: ['cost', 'profit'],
        showLine: ['profit']
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'date': '01/01', 'cost': 1523, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/02', 'cost': 1223, 'profit': 1921, 'growthRate': 0.345, 'people': 100 },
            { 'date': '01/03', 'cost': 2123, 'profit': 5523, 'growthRate': 0.7, 'people': 100 },
            { 'date': '01/04', 'cost': 4123, 'profit': 6523, 'growthRate': 0.31, 'people': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### stack histogram

<vuep template="#histogram-stack"></vuep>

<script v-pre type="text/x-template" id="histogram-stack">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        metrics: ['cost', 'profit'],
        stack: { 'sales': ['cost', 'profit'] }
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'date': '01/01', 'cost': 1523, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/02', 'cost': 1223, 'profit': 1921, 'growthRate': 0.345, 'people': 100 },
            { 'date': '01/03', 'cost': 2123, 'profit': 5523, 'growthRate': 0.7, 'people': 100 },
            { 'date': '01/04', 'cost': 4123, 'profit': 6523, 'growthRate': 0.31, 'people': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### show histogram data by default

<vuep template="#show-data-default"></vuep>

<script v-pre type="text/x-template" id="show-data-default">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        label: {
          normal: { show: true, position: "top" }
        }
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'date': '01/01', 'cost': 1523, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/02', 'cost': 1223, 'profit': 1921, 'growthRate': 0.345, 'people': 100 },
            { 'date': '01/03', 'cost': 2123, 'profit': 5523, 'growthRate': 0.7, 'people': 100 },
            { 'date': '01/04', 'cost': 4123, 'profit': 6523, 'growthRate': 0.31, 'people': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### metrics alias

<vuep template="#change-metrics-name"></vuep>

<script v-pre type="text/x-template" id="change-metrics-name">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        labelMap: {
          resume: 'a',
          uplevel: 'b'
        }
      }
      return {
        chartData: {
          columns: ['date', 'resume', 'uplevel'],
          rows: [
            { 'date': '1-1', 'resume': 123, 'uplevel': 0.3 },
            { 'date': '1-2', 'resume': 1223, 'uplevel': 0.6 },
            { 'date': '1-3', 'resume': 2123, 'uplevel': 0.9 },
            { 'date': '1-4', 'resume': 4123, 'uplevel': 0.12 },
            { 'date': '1-5', 'resume': 3123, 'uplevel': 0.15 },
            { 'date': '1-6', 'resume': 7123, 'uplevel': 0.2 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set value type of x-axis

<vuep template="#set-value-axis"></vuep>

<script v-pre type="text/x-template" id="set-value-axis">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        xAxisType: 'value'
      }
      return {
        chartData: {
          columns: ['date', 'resume', 'uplevel'],
          rows: [
            { 'date': 10, 'resume': 123, 'uplevel': 1213 },
            { 'date': 11, 'resume': 1223, 'uplevel': 3116 },
            { 'date': 12, 'resume': 2123, 'uplevel': 4119 },
            { 'date': 20, 'resume': 4123, 'uplevel': 1112 },
            { 'date': 21, 'resume': 3123, 'uplevel': 4115 },
            { 'date': 25, 'resume': 7123, 'uplevel': 1212 }
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
| yAxisType | type of left and right y-axis | array |`'KMB'`/`'normal'`/`'percent'` |
| yAxisName | title of left and right y-axis | array | - |
| axisSite | metrics in left or right | object | - |
| stack | stack option | object | - |
| digit | digit of percent type data | number | default `2` |
| dataOrder | whether to sort data | boolean, object | default `false` |
| scale | whether not to contain zero position of left and right y-axis | array | default `[false, false]`|
| min | min value of left and right y-axis | array | - |
| max | max value of left and right y-axis | array | - |
| labelMap | metrics alias | object | effect both tooltip and legend |
| legendName | legend alias | object | only effect legend |
| label | label of chart | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label) |
| itemStyle | style of bar item | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle) |
| showLine | metrics which display as line | array | - |
| xAxisType | type of x-axis | string | `'category'`/`'value'`, default `'category'` |
| opacity | opacity option | number | - |

> Remark 1. `axisSite` object can set left and right, like the example, if you set `axisSite: { right: ['growthRate'] }`, data of growthRate will be set in right y-axis.

> Remark 2. `stack` is used to put data on same stack name series,, like the example, if you set `stack: { 'sales': ['cost', 'profit'] }`, cost line will put on profit line.

> Remark 3. `min` and `max` can set number like `[100, 3000]`, or set `['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`, at this moment, it means use the max or min number of all data in one line.

> Remark 4. `dataOrder` is used to set data order, In order to show more clearly, for example, if you set `{ label: 'cost', order: 'asc }`, it means that cost data will display order by asc, and the opposite is `desc`

> Remark 5. sometimes we need to show the line chart and histogram on the same map, use the showLine property can be set to be displayed as a line chart indicators, as the example, profit data show as line in histogram.

> Remark 6. In order to optimize the continuous numeric horizontal axis display multi-metrics style, in this case the default setting opacity is 0.5.
