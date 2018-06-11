# Pie

#### Example

<vuep template="#simple-pie"></vuep>

<script v-pre type="text/x-template" id="simple-pie">
<template>
  <ve-pie :data="chartData"></ve-pie>
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

<vuep template="#index-demision"></vuep>

<script v-pre type="text/x-template" id="index-demision">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dimension: 'cost',
        metrics: 'profit'
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

#### rose

<vuep template="#rose-pie"></vuep>

<script v-pre type="text/x-template" id="rose-pie">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        roseType: 'radius'
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

<vuep template="#change-legend-name"></vuep>

<script v-pre type="text/x-template" id="change-legend-name">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        limitShowNum: 5,
        legendName: {
          'profit': 'haha'
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

#### limit display number

<vuep template="#limited-number"></vuep>

<script v-pre type="text/x-template" id="limited-number">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        limitShowNum: 5
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

#### mutiple data pie

<vuep template="#mutiple-pie"></vuep>

<script v-pre type="text/x-template" id="mutiple-pie">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        level: [
          ['01/01', '01/02', '01/03'],
          ['01/04', '01/05']
        ]
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 123, 'profit': 3 },
            { 'date': '01/02', 'cost': 1223, 'profit': 6 },
            { 'date': '01/03', 'cost': 2123, 'profit': 9 },
            { 'date': '01/04', 'cost': 4123, 'profit': 12 },
            { 'date': '01/05', 'cost': 3123, 'profit': 15 },
            { 'date': '01/06', 'cost': 7123, 'profit': 20 },
            { 'date': '1月7号', 'cost': 4123, 'profit': 20 },
            { 'date': '1月8号', 'cost': 1123, 'profit': 20 },
            { 'date': '1月9号', 'cost': 5223, 'profit': 20 },
            { 'date': '01/010', 'cost': 9123, 'profit': 20 },
            { 'date': '01/011', 'cost': 4123, 'profit': 20 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set type of data

<vuep template="#data-type"></vuep>

<script v-pre type="text/x-template" id="data-type">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dataType: 'percent'
      }
      return {
        chartData: {
          columns: ['date', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 123, 'profit': 0.01 },
            { 'date': '01/02', 'cost': 1223, 'profit': 0.02 },
            { 'date': '01/03', 'cost': 2123, 'profit': 0.03 },
            { 'date': '01/04', 'cost': 4123, 'profit': 0.04 },
            { 'date': '01/05', 'cost': 3123, 'profit': 0.05 },
            { 'date': '01/06', 'cost': 7123, 'profit': 0.06 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set pie position

<vuep template="#pie-style"></vuep>

<script v-pre type="text/x-template" id="pie-style">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        radius: 10,
        offsetY: 300
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 123, 'profit': 0.1 },
            { 'date': '01/02', 'cost': 1223, 'profit': 0.2 },
            { 'date': '01/03', 'cost': 2123, 'profit': 0.3 },
            { 'date': '01/04', 'cost': 4123, 'profit': 0.4 },
            { 'date': '01/05', 'cost': 3123, 'profit': 0.5 },
            { 'date': '01/06', 'cost': 7123, 'profit': 0.6 }
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
| dimension | dimension of chart | string | default `columns[0]` |
| metrics | metrics of chart | string | defaut `columns[1]` |
| dataType | data type of metrics | string | `'KMB'`, `'normal'`, `'percent'` |
| selectedMode | mode of pie select | string | `'single'`, `'multiple'` , default `false` |
| hoverAnimation | Whether to enable the zoom animation effects when hovering sectors | boolean | default `true` |
| radius | radius of pie | number | - |
| offsetY | y offset of pie | number | - |
| digit | digit of percent type data | number | default `2` |
| roseType | whether display as rose pie | string | `'radius', 'area'`, default `false` |
| label | label of chart | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.label) |
| labelLine | style of visual guide line. | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.labelLine) |
| itemStyle | style of pie item | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.itemStyle)  |
| level | set while show multiple pie | array | - |
| limitShowNum | limit legend number | number | - |

> Remark. The value of level accepts a two-dimensional array, for example: `[['a', 'b'], ['c', 'd']]`, which means the inner layer displays the 'a' , 'b'` indicators plus the composition of the pie chart, the outer layer of' c ',' d'`indicators together ring chart.
