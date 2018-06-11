# Bar

#### Example

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
          columns: ['date', 'cost', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 123, 'profit': 3 },
            { 'date': '01/02', 'cost': 1223, 'profit': 6 },
            { 'date': '01/03', 'cost': 2123, 'profit': 90 },
            { 'date': '01/04', 'cost': 4123, 'profit': 12 },
            { 'date': '01/05', 'cost': 3123, 'profit': 15 },
            { 'date': '01/06', 'cost': 7123, 'profit': 20 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set dimension and metrics

<vuep template="#order-dimesion"></vuep>

<script v-pre type="text/x-template" id="order-dimesion">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dimension: ['cost'],
        metrics: ['profit']
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 123, 'profit': 3 },
            { 'date': '01/02', 'cost': 1223, 'profit': 6 },
            { 'date': '01/03', 'cost': 2123, 'profit': 90 },
            { 'date': '01/04', 'cost': 4123, 'profit': 12 },
            { 'date': '01/05', 'cost': 3123, 'profit': 15 },
            { 'date': '01/06', 'cost': 7123, 'profit': 20 }
          ]
        }
      }
    }
  }
</script>
</script>

#### sort data

<vuep template="#order-bar"></vuep>

<script v-pre type="text/x-template" id="order-bar">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        metrics: ['profit'],
        dataOrder: {
          label: 'profit',
          order: 'desc'
        }
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 123, 'profit': 3 },
            { 'date': '01/02', 'cost': 1223, 'profit': 6 },
            { 'date': '01/03', 'cost': 2123, 'profit': 90 },
            { 'date': '01/04', 'cost': 4123, 'profit': 12 },
            { 'date': '01/05', 'cost': 3123, 'profit': 15 },
            { 'date': '01/06', 'cost': 7123, 'profit': 20 }
          ]
        }
      }
    }
  }
</script>
</script>

#### double x-axis

<vuep template="#double-yAxis"></vuep>

<script v-pre type="text/x-template" id="double-yAxis">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        xAxisType: ['KMB', 'percent'],
        xAxisName: ['cost', 'profit'],
        axisSite: {
          top: ['profit']
        }
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 123, 'profit': 3 },
            { 'date': '01/02', 'cost': 1223, 'profit': 6 },
            { 'date': '01/03', 'cost': 2123, 'profit': 90 },
            { 'date': '01/04', 'cost': 4123, 'profit': 12 },
            { 'date': '01/05', 'cost': 3123, 'profit': 15 },
            { 'date': '01/06', 'cost': 7123, 'profit': 20 }
          ]
        }
      }
    }
  }
</script>
</script>

#### legend alias

<vuep template="#set-legend-alias"></vuep>

<script v-pre type="text/x-template" id="set-legend-alias">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  export default {
    data () {
      this.chartSettings =  {
        legendName: {
          'cost': 'costmoney'
        }
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 123, 'profit': 300 },
            { 'date': '01/02', 'cost': 1223, 'profit': 600 },
            { 'date': '01/03', 'cost': 2123, 'profit': 9000 },
            { 'date': '01/04', 'cost': 4123, 'profit': 1200 },
            { 'date': '01/05', 'cost': 3123, 'profit': 1500 },
            { 'date': '01/06', 'cost': 7123, 'profit': 2000 }
          ]
        }
      }
    }
  }
</script>
</script>

#### stack bar

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
          'xxx': ['cost', 'profit']
        }
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 123, 'profit': 300 },
            { 'date': '01/02', 'cost': 1223, 'profit': 600 },
            { 'date': '01/03', 'cost': 2123, 'profit': 9000 },
            { 'date': '01/04', 'cost': 4123, 'profit': 1200 },
            { 'date': '01/05', 'cost': 3123, 'profit': 1500 },
            { 'date': '01/06', 'cost': 7123, 'profit': 2000 }
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
| xAxisType | type of top and bottom x-axis | array |`'KMB'`/`'normal'`/`'percent'` |
| xAxisName | title of top and bottom x-axis | array | - |
| axisSite | metrics in top or bottom | object | - |
| stack | stack option | object | - |
| digit | digit of percent type data | number | default `2` |
| dataOrder | whether to sort data | boolean, object | default `false` |
| scale | whether not to contain zero position of top and bottom y-axis | array | default `[false, false]`|
| min | min value of top and bottom x-axis | array | - |
| max | max value of top and bottom x-axis | array | - |
| labelMap | metrics alias | object | effect both tooltip and legend |
| legendName | legend alias | object | only effect legend |
| label | label of chart | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label) |
| itemStyle | style of bar item | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle) |
| yAxisType | type of y-axis | string | `'category'`/`'value'`, default `'category'` |
| opacity | opacity option | number | - |

> Remark 1. `axisSite` object can set top and bottom, like the example, if you set `axisSite: { bottom: ['growthRate'] }`, data of growthRate will be set in bottom y-axis.

> Remark 2. `stack` is used to put data on same stack name series,, like the example, if you set `stack: { 'sales': ['cost', 'profit'] }`, cost line will put on profit line.

> Remark 3. `min` and `max` can set number like `[100, 3000]`, or set `['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`, at this moment, it means use the max or min number of all data in one line.

> Remark 4. `dataOrder` is used to set data order, In order to show more clearly, for example, if you set `{ label: 'cost', order: 'asc }`, it means that cost data will display order by asc, and the opposite is `desc`

> Remark 6. In order to optimize the continuous numeric horizontal axis display multi-metrics style, in this case the default setting opacity is 0.5.
