# Waterfall

#### Example

<vuep template="#simple-waterfall"></vuep>

<script v-pre type="text/x-template" id="simple-waterfall">
<template>
  <ve-waterfall :data="chartData"></ve-waterfall>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['action', 'time'],
          rows: [
            { 'action': 'eat', 'time': 4 },
            { 'action': 'sleep', 'time': 10 },
            { 'action': 'learn', 'time': 5 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set dimension and metrics

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-waterfall :data="chartData" :settings="chartSettings"></ve-waterfall>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dimension: 'action',
        metrics: 'time'
      }
      return {
        chartData: {
          columns: ['action', 'time'],
          rows: [
            { 'action': 'eat', 'time': 4 },
            { 'action': 'sleep', 'time': 10 },
            { 'action': 'learn', 'time': 5 }
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
  <ve-waterfall :data="chartData" :settings="chartSettings"></ve-waterfall>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        "dataType": "percent"
      }
      return {
        chartData: {
          columns: ['action', 'time'],
          rows: [
            { 'action': 'eat', 'time': 0.1 },
            { 'action': 'sleep', 'time': 0.2 },
            { 'action': 'learn', 'time': 0.3 }
          ]
        }
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
  export default {
    data () {
      this.chartSettings = {
        labelMap: {
          'time': 't'
        }
      }
      return {
        chartData: {
          columns: ['action', 'time'],
          rows: [
            { 'action': 'eat', 'time': 0.1 },
            { 'action': 'sleep', 'time': 0.2 },
            { 'action': 'learn', 'time': 0.3 }
          ]
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
  export default {
    data () {
      this.chartSettings = {
        totalNum: 24,
        totalName: 'timeAll',
        remainName: 'timeRemain'
      }
      return {
        chartData: {
          columns: ['action', 'time'],
          rows: [
            { 'action': 'eat', 'time': 4 },
            { 'action': 'sleep', 'time': 10 },
            { 'action': 'learn', 'time': 5 }
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
| totalNum | total number | number | default display the sum of all data |
| totalName | text of total | string | default `'总计'` |
| remainName | text of remain | string | default `'其他'` |
| digit | digit of percent type data | number | default `2` |
