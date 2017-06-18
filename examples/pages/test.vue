<template>
  <div class="page-eventer">
  </div>
</template>

<script>
import 'echarts/lib/chart/pie'
import Vue from 'vue'
import VePie from '../../src/pie/index'
import chartData from '../test-data/pie.js'

export default {
  name: 'Eventer',

  mounted () {
    const Ctor = Vue.extend(VePie)
    const vm = new Ctor({
      propsData: {
        data: chartData.data[0].data
      }
    }).$mount(this.$el)
    console.log(vm)
  }
}
</script>
