<template>
  <!-- 测试属性
    loading: Boolean,
    dataEmpty: Boolean,
  -->
  <div>
    <button @click="loading = !loading">loading</button>
    <button @click="dataEmpty = !dataEmpty">dataEmpty</button>
    <ve-line :data="chartData" :loading="loading"></ve-line>
    <ve-line :data="chartData" :data-empty="dataEmpty"></ve-line>
  </div>
</template>

<script>
import { VeLine } from '../../src/index.es'
import { LINE_DATA } from './data'
export default {
  data () {
    return {
      chartData: LINE_DATA,
      loading: false,
      dataEmpty: false
    }
  },
  components: { VeLine }
}
</script>
