<template>
  <div class="ve-map" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { map } from './map'
import chartMixin from '../mixins'
export default {
  name: 'VeMap',
  mixins: [chartMixin],
  created () {
    this.chartHandler = map
    this.echartsLib = echarts
  }
}
</script>
