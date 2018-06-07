<template>
  <!-- 测试属性
    resizeable: { type: Boolean, default: true },
    resizeDelay: { type: Number, default: 200 },
  -->
  <div>
    <ve-line :data="chartData"></ve-line>
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
      chartData: LINE_DATA
    }
  },
  components: { VeLine }
}
</script>
