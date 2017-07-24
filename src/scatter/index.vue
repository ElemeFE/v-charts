<template>
  <div class="ve-scatter" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { scatter } from './scatter'
import chartMixin from '../mixins'
export default {
  name: 'VeScatter',
  mixins: [chartMixin],
  created () {
    this.chartHandler = scatter
    this.echartsLib = echarts
  }
}
</script>
