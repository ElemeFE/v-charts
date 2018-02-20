### Waterfall

#### Example

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/tecfxdg9/68/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### set dimension and metrics

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-waterfall :data="chartData" :settings="chartSettings"></ve-waterfall>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['action', 'time'],
        rows: [
          { 'action': 'eat', 'time': 4 },
          { 'action': 'sleep', 'time': 10 },
          { 'action': 'learn', 'time': 5 }
        ]
      }
      this.chartSettings = {
        dimension: 'action',
        metrics: 'time'
      }
    }
  }
</script>
</script>

#### set type of data

<vuep template="#set-data-type"></vuep>

<script v-pre type="text/x-template" id="set-data-type">
<template>
  <ve-waterfall :data="chartData" :settings="chartSettings"></ve-waterfall>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['action', 'time'],
        rows: [
          { 'action': 'eat', 'time': 0.1 },
          { 'action': 'sleep', 'time': 0.2 },
          { 'action': 'learn', 'time': 0.3 }
        ]
      }
      this.chartSettings = {
        "dataType": "percent"
      }
    }
  }
</script>
</script>

#### metrics alias

<vuep template="#change-metrics-name"></vuep>

<script v-pre type="text/x-template" id="change-metrics-name">
<template>
  <ve-waterfall :data="chartData" :settings="chartSettings"></ve-waterfall>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['action', 'time'],
        rows: [
          { 'action': 'eat', 'time': 0.1 },
          { 'action': 'sleep', 'time': 0.2 },
          { 'action': 'learn', 'time': 0.3 }
        ]
      }
      this.chartSettings = {
        labelMap: {
          'time': 't'
        }
      }
    }
  }
</script>
</script>

#### set alias

<vuep template="#set-label"></vuep>

<script v-pre type="text/x-template" id="set-label">
<template>
  <ve-waterfall :data="chartData" :settings="chartSettings"></ve-waterfall>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['action', 'time'],
        rows: [
          { 'action': 'eat', 'time': 4 },
          { 'action': 'sleep', 'time': 10 },
          { 'action': 'learn', 'time': 5 }
        ]
      }
      this.chartSettings = {
        totalNum: 24,
        totalName: 'timeAll',
        remainName: 'timeRemain'
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
| totalNum | total number | Number | default display the sum of all data |
| totalName | text of total | String | default `'总计'` |
| remainName | text of remain | String | default `'其他'` |
| digit | digit of percent type data | Number | default `2` |
