<template>
  <div class="ve-map" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../../echarts-base'
import { map } from './main'
import Core from '../../core'
export default {
  name: 'VeMap',
  mixins: [Core],
  created () {
    this.chartHandler = map
    this.echartsLib = echarts
  }
}
</script>
