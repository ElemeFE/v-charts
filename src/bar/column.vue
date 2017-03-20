<template>
  <div :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import 'echarts/lib/chart/bar'
import { column } from './bar'
import chartMixin from '../mixins'
export default {
  name: 'VeColumn',
  mixins: [chartMixin],
  methods: {
    init () {
      this.echarts = echarts.init(this.$refs.canvas, 've-chart')
      if (this.data) this.dataHandler(this.data)
    },

    dataHandler (data) {
      const options = column(data, this.settings)
      this.echarts.setOption(options, true)
    }
  }
}
</script>
