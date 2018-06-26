<template>
  <div>
    <button @click="change">change data</button>
    <button @click="changeDataZoom">change dataZoom</button>
    <ve-line
      :data="chartData"
      :not-set-unchange="['dataZoom']"
      :data-zoom="dataZoom">
    </ve-line>
    <ve-line
      :data="chartData"
      :data-zoom="dataZoom">
    </ve-line>
  </div>
</template>

<script>
import { VeLine } from '../../src/index.es'
import { LINE_DATA, LINE_DATA1 } from '../test/data'
export default {
  data () {
    this.unchange = ['dataZoom']
    return {
      chartData: LINE_DATA,
      dataZoom: { start: 20, end: 100 }
    }
  },
  methods: {
    change () {
      this.chartData = this.chartData === LINE_DATA
        ? LINE_DATA1
        : LINE_DATA
    },
    changeDataZoom () {
      this.dataZoom.start = this.dataZoom.start === 20 ? 50 : 20
    }
  },
  components: { VeLine }
}
</script>
