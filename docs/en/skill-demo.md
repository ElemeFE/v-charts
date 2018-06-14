# FAQ

#### The initial width of the container is unknown

Drawing a chart in an unknown initial width of the container, because can not get the width, so the chart will fail to draw, the solution is when the container width is known,
call the echarts resize function.

<vuep template="#container-width"></vuep>

<script v-pre type="text/x-template" id="container-width">
<template>  <!-- [_ https://cdn.jsdelivr.net/npm/element-ui@1.4.0/lib/index.js,https://cdn.jsdelivr.net/npm/element-ui@1.4.0/lib/theme-default/index.css _] -->
  <el-tabs type="border-card" v-model="activeName">
    <el-tab-pane label="用户管理" name="1"> <!-- name 中的数字对应chart的ref -->
      <ve-line :data="chartData" ref="chart1"></ve-line>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="2">
      <ve-line :data="chartData" ref="chart2"></ve-line>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="3">
      <ve-line :data="chartData" ref="chart3"></ve-line>
    </el-tab-pane>
    <el-tab-pane label="定时任务" name="4">
      <ve-line :data="chartData" ref="chart4"></ve-line>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data () {
      return {
        activeName: '1'
      }
    },
    created: function () {
      this.chartData = {
        columns: ['date', 'sales'],
        rows: [
          { 'date': '01/01', 'sales': 1523 },
          { 'date': '01/02', 'sales': 1223 },
          { 'date': '01/03', 'sales': 2123 },
          { 'date': '01/04', 'sales': 4123 },
          { 'date': '01/05', 'sales': 3123 },
          { 'date': '01/06', 'sales': 7123 }
        ]
      }
    },
    watch: {
      activeName (v) {
        this.$nextTick(_ => {
          this.$refs[`chart${v}`].echarts.resize()
        })
      }
    }
  }
</script>
</script>

#### Decimal display accuracy

By default, v-charts retain two significant digits when working with data types, but when the number is small and is set as a percentage type, this can cause display issues such as

<vuep template="#error-digit"></vuep>

<script v-pre type="text/x-template" id="error-digit">
<template>
  <ve-line :data="chartData" :settings="chartSettings">
  </ve-line>
</template>

<script>
  export default {
    created: function () {
      this.chartData = {
        columns: ['date', 'value'],
        rows: [
          { 'date': '01/01', 'value': 0.00001 },
          { 'date': '01/02', 'value': 0.00002 },
          { 'date': '01/03', 'value': 0.00003 },
          { 'date': '01/04', 'value': 0.00004 },
          { 'date': '01/05', 'value': 0.00005 },
          { 'date': '01/06', 'value': 0.00006 }
        ]
      },
      this.chartSettings = {
        yAxisType: ['percent']
      }
    }
  }
</script>
</script>

Each chart has digit configuration items, set this attribute, so the smaller the value can be displayed normally

<vuep template="#true-digit"></vuep>

<script v-pre type="text/x-template" id="true-digit">
<template>
  <ve-line :data="chartData" :settings="chartSettings">
  </ve-line>
</template>

<script>
  export default {
    created: function () {
      this.chartData = {
        columns: ['date', 'value'],
        rows: [
          { 'date': '01/01', 'value': 0.00001 },
          { 'date': '01/02', 'value': 0.00002 },
          { 'date': '01/03', 'value': 0.00003 },
          { 'date': '01/04', 'value': 0.00004 },
          { 'date': '01/05', 'value': 0.00005 },
          { 'date': '01/06', 'value': 0.00006 }
        ]
      },
      this.chartSettings = {
        yAxisType: ['percent'],
        digit: 3
      }
    }
  }
</script>
</script>
