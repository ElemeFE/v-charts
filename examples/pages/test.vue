<template>
  <div class="page-test">
    <ve-map
      ref="chart"
      :data="chartData"
      :settings="chartSettings"
      :animation="anit"
      :set-option-opts="false">
    </ve-map>
    <button @click="addData">addData</button>
  </div>
</template>

<script>
import VeMap from '../../src/packages/map'

export default {
  data () {
    this.chartSettings = {
      position: 'china',
      dataType: {
        'GDP': 'KMB'
      },
      selectData: true
    }
    this.anit = {
      animation: true
    }
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
      markLine: {},
      markArea: {}
    }
  },

  methods: {
    addData () {
      this.chartData = {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '吉林', 'GDP': 123 },
          { '位置': '北京', 'GDP': 1223 },
          { '位置': '上海', 'GDP': 2123 },
          { '位置': '浙江', 'GDP': 4123 },
          { '位置': '广东', 'GDP': 4123 },
          { '位置': '福建', 'GDP': 4123 },
          { '位置': '江西', 'GDP': 4123 },
          { '位置': '河北', 'GDP': 4123 },
          { '位置': '河南', 'GDP': 4123 }
        ]
      }
    }
  },

  components: { VeMap }
}
</script>
