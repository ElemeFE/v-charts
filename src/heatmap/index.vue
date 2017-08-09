<template>
  <div class="ve-heatmap" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { heatmap, Geoheatmap } from './heatmap'
import chartMixin from '../mixins'
export default {
  name: 'VeHeatmap',
  mixins: [chartMixin],
  created () {
    this.chartHandler = this.settings.GeoHeatmap ? Geoheatmap : heatmap
    this.echartsLib = echarts
  }
}
</script>
