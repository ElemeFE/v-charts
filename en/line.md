### Line

#### Example

<iframe width="100%" height="470" src="//jsfiddle.net/vue_echarts/jepw6dy2/139/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### set metrics and dimension

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
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
          { 'cost': 4123, 'date': '01/04', 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
          { 'cost': 3123, 'date': '01/05', 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
          { 'cost': 7123, 'date': '01/06', 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
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
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
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
          { 'date': '01/04', 'cost': 4123, 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
          { 'date': '01/05', 'cost': 3123, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
          { 'date': '01/06', 'cost': 7123, 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
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

#### stacked area chart

<vuep template="#stack-area"></vuep>

<script v-pre type="text/x-template" id="stack-area">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
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
          { 'date': '01/04', 'cost': 4123, 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
          { 'date': '01/05', 'cost': 3123, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
          { 'date': '01/06', 'cost': 7123, 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
        ]
      }
      this.chartSettings = {
        stack: { 'sell': ['cost', 'profit'] },
        area: true
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        labelMap: {
          balance: 'b',
          age: 'a'
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
  module.exports = {
    created: function () {
      this.chartData = {
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
| xAxisType | type of x axis | String | `'category'`/`'value'`/`'time'`/`'log'` |
| yAxisType | type of left and right y-axis | Array |`'KMB'`/`'normal'`/`'percent'` |
| yAxisName | title of left and right y-axis | Array | - |
| axisSite | metrics in left or right | Object | - |
| stack | stack option | Object | - |
| area | whether display area | Boolean | default `false` |
| scale | whether not to contain zero position of left and right y-axis | Array | default `[false, false]` |
| min | min value of left and right y-axis | Array | - |
| max | max value of left and right y-axis | Array | - |
| nullAddZero | null convert to zero | Boolean | When set to true, if the corresponding data in the data is null or undefined, 0 is added to the chart|
| digit | digit of percent type data | Number | default `2` |
| labelMap | metrics alias | Object | effect both tooltip and legend |
| legendName | legend alias | Object | only effect legend |
| label | label of chart | Object | content reference [docs](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.label) |
| itemStyle | style of the symbol point of broken line | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.itemStyle) |
| lineStyle | line style | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.lineStyle) |
| areaStyle | style of area | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.areaStyle) |

> Remark 1. `axisSite` object can set left and right, like the example, if you set `axisSite: { right: ['growthRate'] }`, data of growthRate will be set in right y-axis.

> Remark 2. `stack` is used to put data on same stack name series,, like the example, if you set `stack: { 'sales': ['cost', 'profit'] }`, cost line will put on profit line.

> Remark 3. `min` and `max` can set number like `[100, 3000]`, or set `['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`, at this moment, it means use the max or min number of all data in one line.
