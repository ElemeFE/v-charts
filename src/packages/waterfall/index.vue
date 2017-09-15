<template>
  <div class="ve-waterfall" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../../echarts-base'
import { waterfall } from './main'
import Core from '../../core'
export default {
  name: 'VeWaterfall',
  mixins: [Core],
  created () {
    this.chartHandler = waterfall
    this.echartsLib = echarts
  }
}
</script>
