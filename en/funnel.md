# Funnel

#### Example

<vuep template="#simple-funnel"></vuep>

<script v-pre type="text/x-template" id="simple-funnel">
<template>
  <ve-funnel :data="chartData"></ve-funnel>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['status', 'status1', 'value'],
          rows: [
            { 'status': 'display', 'status1': 'display1', 'value': 900 },
            { 'status': 'visit', 'status1': 'visit1', 'value': 600 },
            { 'status': 'click', 'status1': 'click1', 'value': 300 },
            { 'status': 'order', 'status1': 'order1', 'value': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set dimension and metrics

<vuep template="#custom-demision-funnel"></vuep>

<script v-pre type="text/x-template" id="custom-demision-funnel">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dimension: 'status1',
        metrics: 'value'
      }
      return {
        chartData: {
          columns: ['status', 'status1', 'value'],
          rows: [
            { 'status': 'display', 'status1': 'display1', 'value': 900 },
            { 'status': 'visit', 'status1': 'visit1', 'value': 600 },
            { 'status': 'click', 'status1': 'click1', 'value': 300 },
            { 'status': 'order', 'status1': 'order1', 'value': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### auto set order and filter data which value is 0

<vuep template="#use-default-filter"></vuep>

<script v-pre type="text/x-template" id="use-default-filter">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        useDefaultOrder: true,
        filterZero: true
      }
      return {
        chartData: {
          columns: ['status', 'value'],
          rows: [
            { 'status': 'display', 'value': 900 },
            { 'status': 'visit', 'value': 100 },
            { 'status': 'zeroValue', 'value': 0 },
            { 'status': 'click', 'value': 300 },
            { 'status': 'order', 'value': 200 }
          ]
        }
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
  export default {
    data () {
      this.chartSettings = {
        sequence: ['order', 'click', 'visit', 'display']
      }
      return {
        chartData: {
          columns: ['status', 'value'],
          rows: [
            { 'status': 'display', 'value': 900 },
            { 'status': 'visit', 'value': 600 },
            { 'status': 'click', 'value': 300 },
            { 'status': 'order', 'value': 100 }
          ]
        }
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
  export default {
    data () {
      this.chartSettings = {
        dataType: 'percent'
      }
      return {
        chartData: {
          columns: ['status', 'value'],
          rows: [
            { 'status': 'display', 'value': 0.9 },
            { 'status': 'visit', 'value': 0.6 },
            { 'status': 'click', 'value': 0.3 },
            { 'status': 'order', 'value': 0.1 }
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
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        legendName: {
          'order': 'orderItem'
        }
      }
      return {
        chartData: {
          columns: ['status', 'value'],
          rows: [
            { 'status': 'display', 'value': 0.9 },
            { 'status': 'visit', 'value': 0.6 },
            { 'status': 'click', 'value': 0.3 },
            { 'status': 'order', 'value': 0.1 }
          ]
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
  export default {
    data () {
      this.chartSettings = {
        ascending: true
      }
      return {
        chartData: {
          columns: ['status', 'value'],
          rows: [
            { 'status': 'display', 'value': 900 },
            { 'status': 'visit', 'value': 600 },
            { 'status': 'click', 'value': 300 },
            { 'status': 'order', 'value': 100 }
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
| sequence | custom data order | array | defautthe order of the data |
| ascending | whether display as pyramid | boolean | default `false` |
| useDefaultOrder | auto sort data by metrics value | boolean | default `false` |
| filterZero | whether filter data which value is 0 | boolean | default `false` |
| digit | digit of percent type data | number | default `2` |
| label | label of chart | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.label) |
| labelLine | visual guide line style of label | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.labelLine) |
| itemStyle | style of funnel item | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.itemStyle) |
