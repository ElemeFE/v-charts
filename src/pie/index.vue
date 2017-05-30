<template>
  <div :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { pie } from './pie'
import chartMixin from '../mixins'
export default {
  name: 'VePie',
  mixins: [chartMixin],
  created () {
    this.chartHandler = pie
    this.echartsLib = echarts
  }
}
</script>
