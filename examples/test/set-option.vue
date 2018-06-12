<template>
  <div>
    <ve-line
      :set-option-opts="false"
      :data="chartData"
      :data-zoom="chartDataZoom">
    </ve-line>
    <button @click="change">change</button>
  </div>
</template>

<script>
import { VeLine } from '../../src/index.es'
import { LINE_DATA } from '../test/data'
import 'echarts/lib/component/dataZoom'
export default {
  data () {
    this.chartDataZoom = [{
      type: 'slider'
    }]
    return {
      chartData: LINE_DATA
    }
  },
  methods: {
    change () {
      this.chartData.rows.push({
        '日期': '1/1',
        '访问用户': Math.random() * 1000,
        '下单用户': Math.random() * 1000
      })
    }
  },
  components: { VeLine }
}
</script>
