<template>
  <div class="ve-line" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../../echarts-base'
import { line } from './main'
import Core from '../../core'
export default {
  name: 'VeLine',
  mixins: [Core],
  created () {
    this.chartHandler = line
    this.echartsLib = echarts
  }
}
</script>
