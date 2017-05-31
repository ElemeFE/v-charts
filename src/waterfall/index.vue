<template>
  <div class="ve-waterfall" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { waterfall } from './waterfall'
import chartMixin from '../mixins'
export default {
  name: 'VeWaterfall',
  mixins: [chartMixin],
  created () {
    this.chartHandler = waterfall
    this.echartsLib = echarts
  }
}
</script>
