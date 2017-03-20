<template>
  <div :style="canvasStyle" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import 'echarts/lib/chart/pie'
import { pie } from './pie'
import chartMixin from '../mixins'
export default {
  name: 'VePie',
  mixins: [chartMixin],
  methods: {
    init () {
      this.echarts = echarts.init(this.$refs.canvas, 've-chart')
      if (this.data) this.dataHandler(this.data)
    },

    dataHandler (data) {
      const options = pie(data, this.settings)
      this.echarts.setOption(options, true)
    }
  }
}
</script>
