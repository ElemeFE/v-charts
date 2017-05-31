<template>
  <div class="ve-column" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { column } from './bar'
import chartMixin from '../mixins'
export default {
  name: 'VeColumn',
  mixins: [chartMixin],
  created () {
    this.chartHandler = column
    this.echartsLib = echarts
  }
}
</script>
