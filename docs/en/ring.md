# Ring

#### Example

<vuep template="#simple-ring"></vuep>

<script v-pre type="text/x-template" id="simple-ring">
<template>
  <ve-ring :data="chartData"></ve-ring>
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

<vuep template="#index-demision-ring"></vuep>

<script v-pre type="text/x-template" id="index-demision-ring">
<template>
  <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
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

<vuep template="#rose-ring"></vuep>

<script v-pre type="text/x-template" id="rose-ring">
<template>
  <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
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
            { 'date': '01/03', 'cost': 2123, 'profit': 9 },
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

<vuep template="#limit-number-ring"></vuep>

<script v-pre type="text/x-template" id="limit-number-ring">
<template>
  <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
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
            { 'date': '01/03', 'cost': 2123, 'profit': 9 },
            { 'date': '01/04', 'cost': 4123, 'profit': 12 },
            { 'date': '01/05', 'cost': 3123, 'profit': 15 },
            { 'date': '01/06', 'cost': 7123, 'profit': 20 },
            { 'date': '01/07', 'cost': 4123, 'profit': 20 },
            { 'date': '01/08', 'cost': 1123, 'profit': 20 },
            { 'date': '01/09', 'cost': 5223, 'profit': 20 },
            { 'date': '01/10', 'cost': 9123, 'profit': 20 },
            { 'date': '01/11', 'cost': 4123, 'profit': 20 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set type of data

<vuep template="#data-type-ring"></vuep>

<script v-pre type="text/x-template" id="data-type-ring">
<template>
  <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dataType: 'KMB'
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
            { 'date': '01/06', 'cost': 7123, 'profit': 20 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set ring position

<vuep template="#ring-style"></vuep>

<script v-pre type="text/x-template" id="ring-style">
<template>
  <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        radius: [10, 100],
        offsetY: 300
      }
      return {
        chartData: {
          columns: ['date', 'cost', '比率'],
          rows: [
            { 'date': '01/01', 'cost': 123, '比率': 0.1 },
            { 'date': '01/02', 'cost': 1223, '比率': 0.2 },
            { 'date': '01/03', 'cost': 2123, '比率': 0.3 },
            { 'date': '01/04', 'cost': 4123, '比率': 0.4 },
            { 'date': '01/05', 'cost': 3123, '比率': 0.5 },
            { 'date': '01/06', 'cost': 7123, '比率': 0.6 }
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
| selectedMode | mode of ring select | string | `'single'`, `'multiple'` , default `false` |
| hoverAnimation | Whether to enable the zoom animation effects when hovering sectors | boolean | default `true` |
| radius | radius of ring | array | - |
| offsetY | y offset of ring | number | - |
| digit | digit of percent type data | number | default `2` |
| roseType | whether display as rose pie | string | `'radius', 'area'`, default `false` |
| label | label of chart | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.label) |
| labelLine | style of visual guide line. | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.labelLine) |
| itemStyle | style of pie item | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.itemStyle)  |
| limitShowNum | limit legend number | number | - |
