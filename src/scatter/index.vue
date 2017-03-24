<template>
  <div :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import 'echarts/lib/chart/scatter'
import { scatter } from './scatter'
import chartMixin from '../mixins'
export default {
  name: 'VeScatter',
  mixins: [chartMixin],
  created () {
    this.chartHandler = scatter
    this.echartsLib = echarts
  }
}
</script>
