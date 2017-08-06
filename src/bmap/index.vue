<template>
  <div class="ve-bmap" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { bmap } from './bmap'
import chartMixin from '../mixins'
export default {
  name: 'VeBmap',
  mixins: [chartMixin],
  created () {
    this.chartHandler = bmap
    this.echartsLib = echarts
  }
}
</script>
