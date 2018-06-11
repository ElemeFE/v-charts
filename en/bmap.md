# Bmap/Amap

To make it easier to use the Baidu / Gauteng maps on echarts, v-charts package a 'shell' of a Baidu / Gauteng map, add settings about the chart's settings (key, bmap, amap) Set directly on the series, tooltip, etc., can be generated to Baidu / Germany map as the coordinate system Echarts chart.

#### Example

##### Bmap

<vuep template="#simple-bmap"></vuep>

<script v-pre type="text/x-template" id="simple-bmap">
<template>
  <ve-bmap
    :settings="chartSettings"
    :series="chartSeries"
    :tooltip="chartTooltip">
  </ve-bmap>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        bmap: {
          center: [120, 30],
          zoom: 14,
          roam: true,
          mapStyle: {}
        }
      }
      this.chartTooltip = { show: true }
      return {
        chartSeries: [
          {
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
              [120, 30, 1] // lat，lng，value，...
            ]
          }
        ]
      }
    }
  }
</script>
</script>

##### Amap

<vuep template="#simple-amap"></vuep>

<script v-pre type="text/x-template" id="simple-amap">
<template>
  <ve-amap
    :settings="chartSettings"
    :series="chartSeries"
    :tooltip="chartTooltip">
  </ve-amap>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        key: '4b5f2cf2cba25200cc6b68c398468899',
        v: '1.4.3',
        amap: {
          resizeEnable: true,
          center: [120.14322240845, 30.236064370321],
          zoom: 10
        }
      }
      this.chartTooltip = { show: true }
      return {
        chartSeries: [
          {
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
              [120, 30, 1] // lat，lng，value，...
            ]
          }
        ]
      }
    }
  }
</script>
</script>

#### get map instance

<vuep template="#set-bmap"></vuep>

<script v-pre type="text/x-template" id="set-bmap">
<template>
  <ve-bmap
    :settings="chartSettings"
    :after-set-option-once="afterSet"
    :series="chartSeries"
    :tooltip="chartTooltip">
  </ve-bmap>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        bmap: {
          center: [120, 30],
          zoom: 14,
          roam: true,
          mapStyle: {}
        }
      }
      this.chartTooltip = { show: true }
      return {
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
      afterSet: function (echarts) {
        var bmap = echarts.getModel().getComponent('bmap').getBMap()
        bmap.addControl(new window.BMap.MapTypeControl())
      }
    }
  }
</script>
</script>


#### settings

| attribute | description | type | remark |
| --- | --- | --- | --- |
| key | Bmap/Amap access_key | string | get key [here](http://lbsyun.baidu.com/apiconsole/key) |
| v | Bmap/Amap version | string | default 2.0(Bmap)/1.4.3(Amap) |
| bmap | Bmap settings | object | content reference [docs](https://github.com/ecomfe/echarts/tree/master/extension/bmap#使用) |
| amap | Amap settings | object | reference amap doc |
| useOuterMap | use global map source | boolean | 默认为 `false` |

> 1. Bmap / Amap Maps When used in conjunction with other maps, additional echarts modules are required, such as heatmap, to be used `import 'echarts/lib/chart/heatmap'`.
> 2. if import bmap or amap source by use script tag, set useOuterMap `true`.<br>
> bmap `<script src="https://api.map.baidu.com/api?v=2.0&ak=key"></script>`<br>
> amap `<script src="https://webapi.amap.com/maps?v=1.4.3&key=key"></script>`
