# Attribute demos（2）

#### set extend

<vuep template="#extend"></vuep>

<script v-pre type="text/x-template" id="extend">
<template>
  <ve-histogram
    :data="chartData"
    :extend="chartExtend">
  </ve-histogram>
</template>

<script>
  export default {
    data () {
      this.chartExtend = {
        series (v) {
          v.forEach(i => {
            i.barWidth = 10
          })
          return v
        },
        tooltip (v) {
          v.trigger = 'none'
          return v
        }
      }
      /* equal to
        this.chartExtend = {
          series: {
            barWidth: 10
          },
          tooltip: {
            trigger: 'none'
          }
        }
        equal to
        this.chartExtend = {
          'series.0.barWidth': 10,
          'series.1.barWidth': 10,
          'tooltip.trigger': 'none'
        }
      */
      return {
        chartData: {
          columns: ['date', 'cost', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 15, 'profit': 12 },
            { 'date': '01/02', 'cost': 12, 'profit': 25 },
            { 'date': '01/03', 'cost': 21, 'profit': 10 },
            { 'date': '01/04', 'cost': 41, 'profit': 32 },
            { 'date': '01/05', 'cost': 31, 'profit': 30 },
            { 'date': '01/06', 'cost': 71, 'profit': 55 }
          ]
        }
      }
    }
  }
</script>
</script>

#### use afterConfig

<vuep template="#afterconfig"></vuep>

<script v-pre type="text/x-template" id="afterconfig">
<template>
  <ve-line
    :data="chartData"
    :after-config="afterConfig">
  </ve-line>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['date', 'cost', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 15, 'profit': 12 },
            { 'date': '01/02', 'cost': 12, 'profit': 25 },
            { 'date': '01/03', 'cost': 21, 'profit': 10 },
            { 'date': '01/04', 'cost': 41, 'profit': 32 },
            { 'date': '01/05', 'cost': 31, 'profit': 30 },
            { 'date': '01/06', 'cost': 71, 'profit': 55 }
          ]
        }
      }
    },
    methods: {
      afterConfig (options) {
        options.tooltip.showDelay = 500
        return options
      }
    }
  }
</script>
</script>

#### set loading status

<vuep template="#set-loading"></vuep>

<script v-pre type="text/x-template" id="set-loading">
<template>
  <ve-line
    :data="chartData"
    :loading="loading">
  </ve-line>
</template>

<script>
  // import css first
  // import 'v-charts/lib/style.css'
  export default {
    data () {
      return {
        chartData: {
          columns: ['date', 'cost', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 15, 'profit': 12 },
            { 'date': '01/02', 'cost': 12, 'profit': 25 },
            { 'date': '01/03', 'cost': 21, 'profit': 10 },
            { 'date': '01/04', 'cost': 41, 'profit': 32 },
            { 'date': '01/05', 'cost': 31, 'profit': 30 },
            { 'date': '01/06', 'cost': 71, 'profit': 55 }
          ]
        },
        loading: true
      }
    }
  }
</script>
</script>

#### set data empty status

<vuep template="#set-data-empty"></vuep>

<script v-pre type="text/x-template" id="set-data-empty">
<template>
  <ve-line
    :data="chartData"
    :data-empty="dataEmpty">
  </ve-line>
</template>

<script>
  // import css first
  // import 'v-charts/lib/style.css'
  export default {
    data () {
      return {
        chartData: {
          columns: ['date', 'cost', 'profit'],
          rows: []
        },
        dataEmpty: true
      }
    }
  }
</script>
</script>

#### add custom content

<vuep template="#set-content"></vuep>

<script v-pre type="text/x-template" id="set-content">
<style>
.data-empty {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .7);
  color: #888;
  font-size: 14px;
}
</style>

<template>
  <ve-line
    :data="chartData">
    <div class="data-empty">data empty😂</div>
  </ve-line>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['date', 'cost', 'profit'],
          rows: []
        }
      }
    }
  }
</script>
</script>
