<template>
  <div class="ve-bar" ref="canvas"></div>
</template>

<script>
import echarts from '../echarts-base'
import 'echarts/lib/chart/bar'
import { bar } from './bar'
import chartMixin from '../mixins'
export default {
  name: 'VeBar',
  mixins: [chartMixin],
  methods: {
    init () {
      this.echarts = echarts.init(this.$refs.canvas, 've-chart')
      if (this.data) this.dataHandler(this.data)
    },

    dataHandler (data) {
      const options = bar(data, this.settings)
      this.echarts.setOption(options, true)
    }
  }
}
</script>
