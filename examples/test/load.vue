<template>
  <div>
    <button @click="load">加载数据</button>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
import { VeLine } from '../../src/index.es'
import { LINE_DATA } from '../test/data'
export default {
  data () {
    return {
      chartData: []
    }
  },
  methods: {
    load () {
      setTimeout(_ => {
        this.chartData = LINE_DATA
      }, 1000)
    }
  },
  components: { VeLine }
}
</script>
