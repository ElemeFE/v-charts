<template>
  <div>
    <ve-bmap
      :settings="chartSettings"
      :series="chartSeries"
      :after-set-option-once="getMap"
      :tooltip="{ show: true }">
    </ve-bmap>
    <p>
      提示：因bmap和amap不能同时存在，如果页面错误，刷新页面试试
    </p>
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
      const bmap = echarts.getModel().getComponent('bmap').getBMap()
      bmap.addControl(new window.BMap.MapTypeControl())
    }
  },

  components: { VeBmap }
}
</script>
