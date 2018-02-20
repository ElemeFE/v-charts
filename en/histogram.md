### Histogram

#### Example

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/1Le0wps5/82/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### set metrics and dimension

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
        rows: [
          { 'cost': 1523, 'date': '01/01', 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
          { 'cost': 1223, 'date': '01/02', 'profit': 1523, 'growthRate': 0.345, 'people': 100 },
          { 'cost': 2123, 'date': '01/03', 'profit': 1523, 'growthRate': 0.7, 'people': 100 },
          { 'cost': 4123, 'date': '01/04', 'profit': 1523, 'growthRate': 0.31, 'people': 100 }
        ]
      }
      this.chartSettings = {
        metrics: ['cost', 'profit'],
        dimension: ['date']
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
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
        rows: [
          { 'date': '01/01', 'cost': 1523, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
          { 'date': '01/02', 'cost': 1223, 'profit': 1523, 'growthRate': 0.345, 'people': 100 },
          { 'date': '01/03', 'cost': 2123, 'profit': 1523, 'growthRate': 0.7, 'people': 100 },
          { 'date': '01/04', 'cost': 4123, 'profit': 1523, 'growthRate': 0.31, 'people': 100 }
        ]
      }
      this.chartSettings = {
        axisSite: { right: ['growthRate'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['number', 'rate']
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
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
        rows: [
          { 'date': '01/01', 'cost': 1523, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
          { 'date': '01/02', 'cost': 1223, 'profit': 1921, 'growthRate': 0.345, 'people': 100 },
          { 'date': '01/03', 'cost': 2123, 'profit': 5523, 'growthRate': 0.7, 'people': 100 },
          { 'date': '01/04', 'cost': 4123, 'profit': 6523, 'growthRate': 0.31, 'people': 100 }
        ]
      }
      this.chartSettings = {
        metrics: ['cost', 'profit'],
        showLine: ['profit']
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
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
        rows: [
          { 'date': '01/01', 'cost': 1523, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
          { 'date': '01/02', 'cost': 1223, 'profit': 1921, 'growthRate': 0.345, 'people': 100 },
          { 'date': '01/03', 'cost': 2123, 'profit': 5523, 'growthRate': 0.7, 'people': 100 },
          { 'date': '01/04', 'cost': 4123, 'profit': 6523, 'growthRate': 0.31, 'people': 100 }
        ]
      }
      this.chartSettings = {
        metrics: ['cost', 'profit'],
        stack: { 'sales': ['cost', 'profit'] }
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
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
        rows: [
          { 'date': '01/01', 'cost': 1523, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
          { 'date': '01/02', 'cost': 1223, 'profit': 1921, 'growthRate': 0.345, 'people': 100 },
          { 'date': '01/03', 'cost': 2123, 'profit': 5523, 'growthRate': 0.7, 'people': 100 },
          { 'date': '01/04', 'cost': 4123, 'profit': 6523, 'growthRate': 0.31, 'people': 100 }
        ]
      }
      this.chartSettings = {
        label: {
          normal: { show: true, position: "top" }
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        labelMap: {
          resume: 'a',
          uplevel: 'b'
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        xAxisType: 'value'
      }
    }
  }
</script>
</script>

#### settings

| attribute | description | type | remark |
| --- | --- | --- | --- |
| dimension | dimension of chart data | Array | default `columns[0]` |
| metrics | metrics of chart data | Array | defaut `[columns[1] ~ columns[columns.length - 1]]` |
| yAxisType | type of left and right y-axis | Array |`'KMB'`/`'normal'`/`'percent'` |
| yAxisName | title of left and right y-axis | Array | - |
| axisSite | metrics in left or right | Object | - |
| stack | stack option | Object | - |
| digit | digit of percent type data | Number | default `2` |
| dataOrder | whether to sort data | Boolean, Object | default `false` |
| scale | whether not to contain zero position of left and right y-axis | Array | default `[false, false]`|
| min | min value of left and right y-axis | Array | - |
| max | max value of left and right y-axis | Array | - |
| labelMap | metrics alias | Object | effect both tooltip and legend |
| legendName | legend alias | Object | only effect legend |
| label | label of chart | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label) |
| itemStyle | style of bar item | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle) |
| showLine | metrics which display as line | Array | - |
| xAxisType | type of x-axis | String | `'category'`/`'value'`, default `'category'` |
| opacity | opacity option | Number | - |

> Remark 1. `axisSite` object can set left and right, like the example, if you set `axisSite: { right: ['growthRate'] }`, data of growthRate will be set in right y-axis.

> Remark 2. `stack` is used to put data on same stack name series,, like the example, if you set `stack: { 'sales': ['cost', 'profit'] }`, cost line will put on profit line.

> Remark 3. `min` and `max` can set number like `[100, 3000]`, or set `['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`, at this moment, it means use the max or min number of all data in one line.

> Remark 4. `dataOrder` is used to set data order, In order to show more clearly, for example, if you set `{ label: 'cost', order: 'asc }`, it means that cost data will display order by asc, and the opposite is `desc`

> Remark 5. sometimes we need to show the line chart and histogram on the same map, use the showLine property can be set to be displayed as a line chart indicators, as the example, profit data show as line in histogram.

> Remark 6. In order to optimize the continuous numeric horizontal axis display multi-metrics style, in this case the default setting opacity is 0.5.
