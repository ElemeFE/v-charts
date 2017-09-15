<template>
  <div class="ve-bmap" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../../echarts-base'
import { bmap } from './main'
import Core from '../../core'
export default {
  name: 'VeBmap',
  mixins: [Core],
  created () {
    this.chartHandler = bmap
    this.echartsLib = echarts
  }
}
</script>
