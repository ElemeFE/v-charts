### Ring

#### Example

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/a0pep942/19/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### set dimension and metrics

<vuep template="#index-demision-ring"></vuep>

<script v-pre type="text/x-template" id="index-demision-ring">
<template>
  <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        dimension: 'cost',
        metrics: 'profit'
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        roseType: 'radius'
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        limitShowNum: 5
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        dataType: 'KMB'
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        radius: [100, 10],
        offsetY: 300
      }
    }
  }
</script>
</script>

#### settings

| attribute | description | type | remark |
| --- | --- | --- | --- |
| dimension | dimension of chart | String | default `columns[0]` |
| metrics | metrics of chart | String | defaut `columns[1]` |
| dataType | data type of metrics | String | `'KMB'`, `'normal'`, `'percent'` |
| selectedMode | mode of ring select | String | `'single'`, `'multiple'` , default `false` |
| hoverAnimation | Whether to enable the zoom animation effects when hovering sectors | Boolean | default `true` |
| radius | radius of ring | Array | - |
| offsetY | y offset of ring | Number | - |
| digit | digit of percent type data | Number | default `2` |
| roseType | whether display as rose pie | String | `'radius', 'area'`, default `false` |
| label | label of chart | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.label) |
| labelLine | style of visual guide line. | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.labelLine) |
| itemStyle | style of pie item | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.itemStyle)  |
| limitShowNum | limit legend number | Number | - |
