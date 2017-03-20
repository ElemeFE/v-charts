<template>
  <div :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import 'echarts/lib/chart/radar'
import { radar } from './radar'
import chartMixin from '../mixins'
export default {
  name: 'VeRadar',
  mixins: [chartMixin],
  methods: {
    init () {
      this.echarts = echarts.init(this.$refs.canvas, 've-chart')
      if (this.data) this.dataHandler(this.data)
    },

    dataHandler (data) {
      const options = radar(data, this.settings)
      this.echarts.setOption(options, true)
    }
  }
}
</script>
