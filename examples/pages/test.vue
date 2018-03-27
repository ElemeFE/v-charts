<template>
  <div class="page-test">
    <ve-map
      :data="chartData"
      :settings="chartSettings">
    </ve-map>
    <button @click="toggle">切换</button>
  </div>
</template>

<script>
import VeMap from '../../src/packages/map'
import china from 'echarts/map/json/china.json'

export default {
  data () {
    this.chartSettings = {
      position: 'china',
      dataType: {
        'GDP': 'KMB'
      },
      beforeRegisterMapOnce (map) {
        console.log('beforeRegisterMapOnce')
        return map
      },
      beforeRegisterMap (map) {
        console.log('beforeRegisterMap')
        return map
      },
      // mapURLProfix: 'https://unpkg.com/echarts@3.6.2/map/json/'
      mapOrigin: china
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
      }
    }
  },

  methods: {
    toggle () {
      console.log('toggle')
      const firstData = this.chartData.rows[0]
      firstData['GDP'] = firstData['GDP'] === 123 ? 234 : 123
    }
  },

  components: { VeMap }
}
</script>
