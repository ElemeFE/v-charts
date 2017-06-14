<template>
  <div class="ve-histogram" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { histogram } from './bar'
import chartMixin from '../mixins'
export default {
  name: 'VeHistogram',
  mixins: [chartMixin],
  created () {
    this.chartHandler = histogram
    this.echartsLib = echarts
  }
}
</script>
