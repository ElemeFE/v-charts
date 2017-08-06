<template>
  <div>
    <ve-bmap
      :settings="chartSettings"
      :series="chartSeries"
      :after-set-option-once="getMap"
      :tooltip="{ show: true }">
    </ve-bmap>
  </div>
</template>

<script>
import VeBmap from '../../src/bmap/index'
export default {
  name: 'bmap',
  data () {
    return {
      chartSettings: {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        bmap: {
          center: [120, 30],
          zoom: 14,
          roam: true,
          mapStyle: {}
        }
      },
      chartSeries: [
        {
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: [
            [120, 30, 1]
          ]
        }
      ]
    }
  },

  methods: {
    getMap (echarts) {
      console.log(echarts)
      console.log(echarts.getModel().getComponent('bmap').getBMap())
      const bmap = echarts.getModel().getComponent('bmap').getBMap()
      bmap.addControl(new window.BMap.MapTypeControl())
    }
  },

  components: { VeBmap }
}
</script>
