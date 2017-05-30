<template>
  <div :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { radar } from './radar'
import chartMixin from '../mixins'
export default {
  name: 'VeRadar',
  mixins: [chartMixin],
  created () {
    this.chartHandler = radar
    this.echartsLib = echarts
  }
}
</script>
