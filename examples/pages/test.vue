<template>
  <div class="page-test">
    <ve-line
      :data="chartData"
      :loading="loading"
      :mark-line="markLine"
      :mark-point="markPoint"
      :after-config="afterConfig"
      :settings="chartSettings">
    </ve-line>
    <button @click="loading = !loading">切换loading</button>
    <button @click="markLine = markPoint = {}">切换markline</button>
  </div>
</template>

<script>
import VeLine from '../../src/packages/line'

export default {
  data () {
    this.chartSettings = {}
    return {
      chartData: {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '吉林', 'GDP': 123 },
          { '位置': '北京', 'GDP': 1223 },
          { '位置': '上海', 'GDP': 2123 },
          { '位置': '浙江', 'GDP': 4123 }
        ]
      },
      loading: false,
      markLine: {},
      markPoint: {}
    }
  },

  methods: {
    afterConfig (item) {
      console.log('render')
      return item
    }
  },

  components: { VeLine }
}
</script>
