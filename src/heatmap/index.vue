<template>
  <div class="ve-heatmap" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { heatmap } from './heatmap'
import chartMixin from '../mixins'
export default {
  name: 'VeHeatmap',
  mixins: [chartMixin],
  created () {
    this.chartHandler = heatmap
    this.echartsLib = echarts
  }
}
</script>
