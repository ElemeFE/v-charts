<template>
  <!-- 测试属性
    theme: Object
    themeName: String
    initOptions: { type: Object, default () { return {} } }
  -->
  <div>
    theme
    <ve-line :data="chartData" :theme="theme"></ve-line>
    themeName
    <ve-line :data="chartData" theme-name="test"></ve-line>
    initOptions  svg
    <ve-line :data="chartData" :init-options="initOptions"></ve-line>
  </div>
</template>

<script>
import { VeLine } from '../../src/index.es'
import { LINE_DATA } from './data'
import echarts from 'echarts/lib/echarts'
import 'zrender/lib/svg/svg'

echarts.registerTheme('test', {
  line: {
    smooth: false
  }
})

export default {
  data () {
    this.theme = {
      line: {
        smooth: false
      }
    }
    this.initOptions = {
      renderer: 'svg'
    }
    return {
      chartData: LINE_DATA
    }
  },
  components: { VeLine }
}
</script>
