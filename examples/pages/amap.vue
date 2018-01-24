<template>
  <div>
    <ve-amap
      :settings="chartSettings"
      :series="chartSeries"
      :after-set-option-once="getMap"
      :tooltip="{ show: true }">
    </ve-amap>
  </div>
</template>

<script>
import VeAmap from '../../src/packages/amap'
export default {
  name: 'amap',
  data () {
    return {
      chartSettings: {
        key: '08ec82355a34cc2f501fd51139227f32',
        v: '1.4.3',
        amap: {
          resizeEnable: true,
          center: [120.14322240845, 30.236064370321],
          zoom: 10
        }
      },
      chartSeries: [
        {
          type: 'scatter',
          coordinateSystem: 'amap',
          data: [
            [120, 30, 1]
          ]
        }
      ]
    }
  },

  methods: {
    getMap (echarts) {
      echarts.getModel().getComponent('amap').getAMap()
    }
  },

  components: { VeAmap }
}
</script>
