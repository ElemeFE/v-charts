# Sankey

#### Example

<vuep template="#simple-sankey"></vuep>

<script v-pre type="text/x-template" id="simple-sankey">
<template>
  <ve-sankey :data="chartData" :settings="chartSettings"></ve-sankey>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        links: [
          { source: 'front', target: 'list-a', value: 0.5 },
          { source: 'front', target: 'list-b', value: 0.5 },
          { source: 'list-a', target: 'content-a-1', value: 0.1 },
          { source: 'list-a', target: 'content-a-2', value: 0.4 },
          { source: 'list-b', target: 'content-b-1', value: 0.2 },
          { source: 'list-b', target: 'content-b-2', value: 0.3 }
        ]
      }
      return {
        chartData: {
          columns: ['page', 'pv'],
          rows: [
            { 'page': 'front', 'pv': 100000 },
            { 'page': 'list-a', 'pv': 20000 },
            { 'page': 'list-b', 'pv': 80000 },
            { 'page': 'content-a-1', 'pv': 10000 },
            { 'page': 'content-a-2', 'pv': 10000 },
            { 'page': 'content-b-1', 'pv': 60000 },
            { 'page': 'content-b-2', 'pv': 20000 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set type of data

<vuep template="#set-data-type"></vuep>

<script v-pre type="text/x-template" id="set-data-type">
<template>
  <ve-sankey :data="chartData" :settings="chartSettings"></ve-sankey>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        links: [
          { source: 'front', target: 'list-a', value: 0.5 },
          { source: 'front', target: 'list-b', value: 0.5 },
          { source: 'list-a', target: 'content-a-1', value: 0.1 },
          { source: 'list-a', target: 'content-a-2', value: 0.4 },
          { source: 'list-b', target: 'content-b-1', value: 0.2 },
          { source: 'list-b', target: 'content-b-2', value: 0.3 }
        ],
        dataType: ['KMB', 'percent']
      }
      return {
        chartData: {
          columns: ['page', 'pv'],
          rows: [
            { 'page': 'front', 'pv': 100000 },
            { 'page': 'list-a', 'pv': 20000 },
            { 'page': 'list-b', 'pv': 80000 },
            { 'page': 'content-a-1', 'pv': 10000 },
            { 'page': 'content-a-2', 'pv': 10000 },
            { 'page': 'content-b-1', 'pv': 60000 },
            { 'page': 'content-b-2', 'pv': 20000 }
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
| dataType | data type of metrics | array | array[0] is type of sankey item, array[1] is type of sankey link line, support `'KMB'`, `'normal'`, `'percent'` |
| links | links data between nodes | array | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-sankey.links) |
| digit | digit of percent type data | number | default `2` |
| label | label style of node | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-sankey.label) |
| itemStyle | style of node rectangle in sankey graphs | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-sankey.itemStyle) |
| lineStyle | line style of sankey graph | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-sankey.lineStyle) |
