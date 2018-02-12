### Funnel

#### Example

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/3hx08359/16/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### set dimension and metrics

<vuep template="#custom-demision-funnel"></vuep>

<script v-pre type="text/x-template" id="custom-demision-funnel">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['status', 'status1', 'value'],
        rows: [
          { 'status': 'display', 'status1': 'display1', 'value': 900 },
          { 'status': 'visit', 'status1': 'visit1', 'value': 600 },
          { 'status': 'click', 'status1': 'click1', 'value': 300 },
          { 'status': 'order', 'status1': 'order1', 'value': 100 }
        ]
      }
      this.chartSettings = {
        dimension: 'status1',
        metrics: 'value'
      }
    }
  }
</script>
</script>

#### custom order

<vuep template="#custom-order-funnel"></vuep>

<script v-pre type="text/x-template" id="custom-order-funnel">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['status', 'value'],
        rows: [
          { 'status': 'display', 'value': 900 },
          { 'status': 'visit', 'value': 600 },
          { 'status': 'click', 'value': 300 },
          { 'status': 'order', 'value': 100 }
        ]
      },
      this.chartSettings = {
        sequence: ['order', 'click', 'visit', 'display']
      }
    }
  }
</script>
</script>

#### set data type

<vuep template="#custom-datatype-funnel"></vuep>

<script v-pre type="text/x-template" id="custom-datatype-funnel">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['status', 'value'],
        rows: [
          { 'status': 'display', 'value': 0.9 },
          { 'status': 'visit', 'value': 0.6 },
          { 'status': 'click', 'value': 0.3 },
          { 'status': 'order', 'value': 0.1 }
        ]
      },
      this.chartSettings = {
        dataType: 'percent'
      }
    }
  }
</script>
</script>

#### legend alias

<vuep template="#change-legend-name"></vuep>

<script v-pre type="text/x-template" id="change-legend-name">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['status', 'value'],
        rows: [
          { 'status': 'display', 'value': 0.9 },
          { 'status': 'visit', 'value': 0.6 },
          { 'status': 'click', 'value': 0.3 },
          { 'status': 'order', 'value': 0.1 }
        ]
      },
      this.chartSettings = {
        legendName: {
          'order': 'orderbiubiu～'
        }
      }
    }
  }
</script>
</script>

#### pyramid

<vuep template="#pyramid-funnel"></vuep>

<script v-pre type="text/x-template" id="pyramid-funnel">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['status', 'value'],
        rows: [
          { 'status': 'display', 'value': 900 },
          { 'status': 'visit', 'value': 600 },
          { 'status': 'click', 'value': 300 },
          { 'status': 'order', 'value': 100 }
        ]
      },
      this.chartSettings = {
        ascending: true
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
| sequence | custom data order | Array | defautthe order of the data |
| ascending | whether display as pyramid | Boolean | default `false` |
| digit | digit of percent type data | Number | default `2` |
| label | label of chart | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.label) |
| labelLine | visual guide line style of label | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.labelLine) |
| itemStyle | style of funnel item | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.itemStyle) |
