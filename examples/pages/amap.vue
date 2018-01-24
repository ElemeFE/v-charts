<template>
  <div>
    <ve-amap
      :settings="chartSettings"
      :series="chartSeries"
      :after-set-option-once="getMap"
      :tooltip="{ show: true }">
    </ve-amap>
    <p>
      提示：因bmap和amap不能同时存在，如果页面错误，刷新页面试试
    </p>
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
          center: [116.397428, 39.90923],
          zoom: 10
        }
      },
      chartSeries: [
        {
          type: 'scatter',
          coordinateSystem: 'amap',
          data: [[120, 30, 1]]
        }
      ]
    }
  },

  methods: {
    getMap (echarts) {
      let district
      const amap = echarts
        .getModel()
        .getComponent('amap')
        .getAMap()

      addQingDao()
      function addQingDao () {
        // 加载行政区划插件
        window.AMap.service('AMap.DistrictSearch', function () {
          var opts = {
            subdistrict: 1, // 返回下一级行政区
            extensions: 'all', // 返回行政区边界坐标组等具体信息
            level: 'city' // 查询行政级别为 市
          }
          // 实例化DistrictSearch
          district = new window.AMap.DistrictSearch(opts)
          district.setLevel('district')
          // 行政区查询
          district.search('370200', function (status, result) {
            var bounds = result.districtList[0].boundaries
            var polygons = []
            if (bounds) {
              for (var i = 0, l = bounds.length; i < l; i++) {
                // 生成行政区划polygon
                var polygon = new window.AMap.Polygon({
                  map: amap,
                  strokeWeight: 1,
                  path: bounds[i],
                  fillOpacity: 0.7,
                  fillColor: '#CCF3FF',
                  strokeColor: '#CC66CC'
                })
                polygons.push(polygon)
              }
              amap.setFitView() // 地图自适应
            }
          })
        })
      }
    }
  },

  components: { VeAmap }
}
</script>
