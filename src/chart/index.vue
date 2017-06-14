<template>
  <div class="ve-chart" :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import { bar, histogram } from '../bar/bar'
import { line } from '../line/line'
import { pie, ring } from '../pie/pie'
import { funnel } from '../funnel/funnel'
import { radar } from '../radar/radar'
import { waterfall } from '../waterfall/waterfall'
import chartMixin from '../mixins'
export default {
  name: 'VeChart',
  mixins: [chartMixin],
  created () {
    this.chartLib = { bar, histogram, line, pie, ring, funnel, radar, waterfall }
    this.chartHandler = this.chartLib[this.settings.type]
    this.echartsLib = echarts
  }
}
</script>
