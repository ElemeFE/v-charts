<template>
  <div class="ve-funnel" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../../echarts-base'
import { funnel } from './main'
import Core from '../../core'
export default {
  name: 'VeFunnel',
  mixins: [Core],
  created () {
    this.chartHandler = funnel
    this.echartsLib = echarts
  }
}
</script>
