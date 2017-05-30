<template>
  <div :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { funnel } from './funnel'
import chartMixin from '../mixins'
export default {
  name: 'VeFunnel',
  mixins: [chartMixin],
  created () {
    this.chartHandler = funnel
    this.echartsLib = echarts
  }
}
</script>
