<template>
  <div :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { line } from './line'
import chartMixin from '../mixins'
export default {
  name: 'VeLine',
  mixins: [chartMixin],
  created () {
    this.chartHandler = line
    this.echartsLib = echarts
  }
}
</script>
