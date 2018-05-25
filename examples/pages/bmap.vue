<template>
  <div>
    <ve-bmap
      :settings="chartSettings"
      :series="chartSeries"
      :after-set-option-once="getMap"
      :set-option-opts="false"
      :mark-line="markLine">
    </ve-bmap>
    <button @click="markLine = {}">toggle</button>
  </div>
</template>

<script>
import VeBmap from '../../src/packages/bmap'
export default {
  name: 'bmap',
  data () {
    return {
      chartSettings: {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        v: '3.0',
        useOuterMap: true,
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
      ],
      markLine: {}
    }
  },

  methods: {
    getMap (echarts) {
      const bmap = echarts.getModel().getComponent('bmap').getBMap()
      bmap.addControl(new window.BMap.MapTypeControl())
    }
  },

  components: { VeBmap }
}
</script>
