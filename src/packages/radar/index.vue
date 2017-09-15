<template>
  <div class="ve-radar" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../../echarts-base'
import { radar } from './main'
import Core from '../../core'
export default {
  name: 'VeRadar',
  mixins: [Core],
  created () {
    this.chartHandler = radar
    this.echartsLib = echarts
  }
}
</script>
