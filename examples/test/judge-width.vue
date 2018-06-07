<template>
  <!-- 测试属性
    judgeWidth: { type: Boolean, default: false }
    widthChangeDelay: { type: Number, default: 300 }
  -->
  <div :style="style">
    <ve-line :data="chartData"></ve-line>
    <ve-line :data="chartData" judge-width></ve-line>
  </div>
</template>

<script>
import { VeLine } from '../../src/index.es'
import { LINE_DATA } from './data'
export default {
  data () {
    return {
      chartData: LINE_DATA,
      style: {
        width: 0
      }
    }
  },
  mounted () {
    this.style.width = '400px'
  },
  components: { VeLine }
}
</script>
