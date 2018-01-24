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
        },
        visualMap: {
          min: 0,
          max: 5,
          calculable: true,
          show: false,
          orient: 'vertical',
          left: 0,
          bottom: 0,
          inRange: { color: ['blue', 'blue', 'green', 'yellow', 'red'] }
        }
      },
      chartSeries: [
        {
          type: 'heatmap',
          data: [
            [120.14322240845, 30.236064370321, 1],
            [120.14301682797, 30.236035316745, 1],
            [120.14138577045, 30.236113748704, 1],
            [120.1400398833, 30.235973050702, 1],
            [120.13893453465, 30.23517220446, 1],
            [120.1382899739, 30.234062922977, 1],
            [120.13265960629, 30.231641351722, 1]
          ],
          coordinateSystem: 'amap',
          pointSize: 10,
          blurSize: 5
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
