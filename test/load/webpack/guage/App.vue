<template>
  <div id="app">
    <ve-gauge :data="chartData" :settings="chartSettings"></ve-gauge>
  </div>
</template>

<script>
import VeGauge from '../../../../lib/gauge.common'

export default {
  created: function () {
    this.chartData = {
      columns: ['type', 'value'],
      rows: [
        { type: '油量', value: 2343 },
        { type: '速度', value: 123 }
      ]
    }
    this.chartSettings = {
      seriesMap: {
        '油量': {
          radius: 90,
          center: ['25%', '55%'],
          min: 0,
          max: 10000
        },
        '速度': {
          radius: 90,
          center: ['75%', '55%']
        }
      }
    }
  },
  components: { VeGauge }
}
</script>
