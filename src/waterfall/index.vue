<template>
  <div :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import 'echarts/lib/chart/bar'
import { waterfall } from './waterfall'
import chartMixin from '../mixins'
export default {
  name: 'VeWaterfall',
  mixins: [chartMixin],
  methods: {
    init () {
      this.echarts = echarts.init(this.$refs.canvas, 've-chart')
      if (this.data) this.dataHandler(this.data)
    },

    dataHandler (data) {
      const options = waterfall(data, this.settings)
      this.echarts.setOption(options, true)
    }
  }
}
</script>
