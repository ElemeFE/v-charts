<template>
  <div class="ve-histogram" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../../echarts-base'
import { histogram } from '../bar/main'
import Core from '../../core'
export default {
  name: 'VeHistogram',
  mixins: [Core],
  created () {
    this.chartHandler = histogram
    this.echartsLib = echarts
  }
}
</script>
