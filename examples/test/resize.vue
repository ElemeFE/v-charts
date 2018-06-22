<template>
  <!-- 测试属性
    resizeable: { type: Boolean, default: true },
    resizeDelay: { type: Number, default: 200 },
    width: { type: String },
    height: { type: String },
  -->
  <div>
    <ve-line :data="chartData"></ve-line>
    <ve-line :data="chartData" :cancel-resize-check="false"></ve-line>
    <button @click="resizeable = !resizeable">
      change resizeable: {{ resizeable }}
    </button>
    <ve-line :data="chartData" :resizeable="resizeable"></ve-line>
    <button @click="change">change width height</button>
    <ve-line :data="chartData" :width="chartWidth" :height="chartHeight"></ve-line>
    <ve-line :data="chartData" :resizeable="false"></ve-line>
    <ve-line :data="chartData" :resize-delay="1000"></ve-line>
  </div>
</template>

<script>
import { VeLine } from '../../src/index.es'
import { LINE_DATA } from './data'
export default {
  data () {
    return {
      chartData: LINE_DATA,
      chartWidth: '400px',
      chartHeight: '400px',
      resizeable: true
    }
  },
  methods: {
    change () {
      this.chartWidth = this.chartWidth === '400px' ? '300px' : '400px'
      this.chartHeight = this.chartHeight === '400px' ? '300px' : '400px'
    }
  },
  components: { VeLine }
}
</script>
