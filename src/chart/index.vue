<template>
  <div :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import { bar, column } from '../bar/bar'
import { line } from '../line/line'
import { pie, ring } from '../pie/pie'
import { waterfall } from '../waterfall/waterfall'
import chartMixin from '../mixins'
export default {
  name: 'VeChart',
  mixins: [chartMixin],
  created () {
    this.chartLib = { bar, column, line, pie, ring, waterfall }
    this.chartHandler = this.chartLib[this.settings.type]
    this.echartsLib = echarts
  }
}
</script>
