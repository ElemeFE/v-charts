### Pie

#### Example

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/tecfxdg9/66/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### set dimension and metrics

<vuep template="#index-demision"></vuep>

<script v-pre type="text/x-template" id="index-demision">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
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

<vuep template="#rose-pie"></vuep>

<script v-pre type="text/x-template" id="rose-pie">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
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
        roseType: 'radius'
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
        limitShowNum: 5,
        legendName: {
          'profit': 'haha'
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
        limitShowNum: 5
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
          { 'date': '1月7号', 'cost': 4123, 'profit': 20 },
          { 'date': '1月8号', 'cost': 1123, 'profit': 20 },
          { 'date': '1月9号', 'cost': 5223, 'profit': 20 },
          { 'date': '01/010', 'cost': 9123, 'profit': 20 },
          { 'date': '01/011', 'cost': 4123, 'profit': 20 }
        ]
      }
      this.chartSettings = {
        level: [
          ['01/01', '01/02', '01/03'],
          ['01/04', '01/05']
        ]
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        dataType: 'percent'
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        radius: 10,
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
| selectedMode | mode of pie select | String | `'single'`, `'multiple'` , default `false` |
| hoverAnimation | Whether to enable the zoom animation effects when hovering sectors | Boolean | default `true` |
| radius | radius of pie | Number | - |
| offsetY | y offset of pie | Number | - |
| digit | digit of percent type data | Number | default `2` |
| roseType | whether display as rose pie | String | `'radius', 'area'`, default `false` |
| label | label of chart | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.label) |
| labelLine | style of visual guide line. | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.labelLine) |
| itemStyle | style of pie item | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.itemStyle)  |
| level | set while show multiple pie | Array | - |
| limitShowNum | limit legend number | Number | - |

> Remark. The value of level accepts a two-dimensional array, for example: `[['a', 'b'], ['c', 'd']]`, which means the inner layer displays the 'a' , 'b'` indicators plus the composition of the pie chart, the outer layer of' c ',' d'`indicators together ring chart.
