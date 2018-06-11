# Heatmap

#### Example

<vuep template="#cartesian-heatmap-chart"></vuep>

<script v-pre type="text/x-template" id="cartesian-heatmap-chart">
<template>
  <ve-heatmap :data="chartData"></ve-heatmap>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['week', 'location', 'person'],
          rows: [
            { 'week': 'Monday', 'location': 'Beijing', 'person': 1000 },
            { 'week': 'Tuesday', 'location': 'Shanghai', 'person': 400 },
            { 'week': 'Wednesday', 'location': 'Hangzhou', 'person': 800 },
            { 'week': 'Tuesday', 'location': 'Shenzhen', 'person': 200 },
            { 'week': 'Wednesday', 'location': 'Changhcun', 'person': 100 },
            { 'week': 'Friday', 'location': 'Nanjing', 'person': 300 },
            { 'week': 'Thursday', 'location': 'Jiangsu', 'person': 800 },
            { 'week': 'Monday', 'location': 'Beijing', 'person': 700 },
            { 'week': 'Wednesday', 'location': 'Shanghai', 'person': 300 },
            { 'week': 'Tuesday', 'location': 'Hangzhou', 'person': 500 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set axis

<vuep template="#axis-settings"></vuep>

<script v-pre type="text/x-template" id="axis-settings">
<template>
  <ve-heatmap :data="chartData" :settings="chartSettings"></ve-heatmap>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        xAxisList: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', '星期六', '星期日'],
        yAxisList: ['Beijing', 'Shanghai', 'Hangzhou', 'Shenzhen', 'Changhcun', 'Nanjing', 'Jiangsu']
      }
      return {
        chartData: {
          columns: ['week', 'location', 'person'],
          rows: [
            { 'week': 'Monday', 'location': 'Beijing', 'person': 1000 },
            { 'week': 'Tuesday', 'location': 'Shanghai', 'person': 400 },
            { 'week': 'Wednesday', 'location': 'Hangzhou', 'person': 800 },
            { 'week': 'Tuesday', 'location': 'Shenzhen', 'person': 200 },
            { 'week': 'Wednesday', 'location': 'Changhcun', 'person': 100 },
            { 'week': 'Friday', 'location': 'Nanjing', 'person': 300 },
            { 'week': 'Thursday', 'location': 'Jiangsu', 'person': 800 },
            { 'week': 'Wednesday', 'location': 'Beijing', 'person': 700 },
            { 'week': 'Wednesday', 'location': 'Shanghai', 'person': 300 },
            { 'week': 'Tuesday', 'location': 'Hangzhou', 'person': 500 }
          ]
        }
      }
    }
  }
</script>
</script>

#### custom visualMap

<vuep template="#visualMap-settings"></vuep>

<script v-pre type="text/x-template" id="visualMap-settings">
<template>
  <ve-heatmap :data="chartData" :visual-map="chartVisualMap" :grid="chartGrid"></ve-heatmap>
</template>

<script>
  export default {
    data () {
      this.chartGrid = {
        right: 100
      }
      this.chartVisualMap = {
        min: 0,
        max: 1500,
        type: 'piecewise',
        right: 0,
        top: '50%'
      }
      return {
        chartData: {
          columns: ['week', 'location', 'person'],
          rows: [
            { 'week': 'Monday', 'location': 'Beijing', 'person': 1000 },
            { 'week': 'Tuesday', 'location': 'Shanghai', 'person': 400 },
            { 'week': 'Wednesday', 'location': 'Hangzhou', 'person': 800 },
            { 'week': 'Tuesday', 'location': 'Shenzhen', 'person': 200 },
            { 'week': 'Wednesday', 'location': 'Changhcun', 'person': 100 },
            { 'week': 'Friday', 'location': 'Nanjing', 'person': 300 },
            { 'week': 'Thursday', 'location': 'Jiangsu', 'person': 800 },
            { 'week': 'Wednesday', 'location': 'Beijing', 'person': 700 },
            { 'week': 'Wednesday', 'location': 'Shanghai', 'person': 200 },
            { 'week': 'Tuesday', 'location': 'Hangzhou', 'person': 500 }
          ]
        }
      }
    }
  }
</script>
</script>

#### heatmap on map

<vuep template="#map-heatmap-1"></vuep>

<script v-pre type="text/x-template" id="map-heatmap-1">
<template>
  <ve-heatmap :data="chartData" :settings="chartSettings"></ve-heatmap>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        position: 'china',
        type: 'map',
        geo: {
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        }
      }
      return {
        chartData: {
          columns: ['lat', 'lng', 'person'],
          rows: [
            { 'lat': 115.892151, 'lng': 28.676493, 'person': 1000 },
            { 'lat': 117.000923, 'lng': 36.675807, 'person': 400 },
            { 'lat': 113.665412, 'lng': 34.757975, 'person': 800 },
            { 'lat': 114.298572, 'lng': 30.584355, 'person': 200 },
            { 'lat': 112.982279, 'lng': 28.19409, 'person': 100 },
            { 'lat': 113.280637, 'lng': 23.125178, 'person': 300 },
            { 'lat': 110.33119, 'lng': 20.031971, 'person': 800 },
            { 'lat': 104.065735, 'lng': 30.659462, 'person': 700 },
            { 'lat': 108.948024, 'lng': 34.263161, 'person': 300 },
            { 'lat': 103.823557, 'lng': 36.058039, 'person': 500 }
          ]
        }
      }
    }
  }
</script>
</script>


#### heatmap on bmap

<vuep template="#bmap-heatmap"></vuep>

<script v-pre type="text/x-template" id="bmap-heatmap">
<template>
  <ve-heatmap :data="chartData" :settings="chartSettings"></ve-heatmap>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        bmap: {
          center: [120.14322240845, 30.236064370321],
          zoom: 14,
          roam: true
        },
        type: 'bmap'
      }
      return {
        chartData: {
          columns: ['lat', 'lng'],
          rows: [
            { 'lat': 120.14322240845, 'lng': 30.236064370321 },
            { 'lat': 120.14301682797, 'lng': 30.236035316745 },
            { 'lat': 120.14138577045, 'lng': 30.236113748704 },
            { 'lat': 120.1400398833, 'lng': 30.235973050702 },
            { 'lat': 120.13893453465, 'lng': 30.23517220446 },
            { 'lat': 120.1382899739, 'lng': 30.234062922977 },
            { 'lat': 120.13265960629, 'lng': 30.231641351722 },
            { 'lat': 120.13170681763, 'lng': 30.229925745619 },
            { 'lat': 120.13119614803, 'lng': 30.228996846637 },
            { 'lat': 120.13023980134, 'lng': 30.228226570416 }
          ]
        }
      }
    }
  }
</script>
</script>

#### settings

| attribute | description | type | remark |
| --- | --- | --- | --- |
| type | type of heatmap | string | `cartesian`, `map`, `bmap`, default `cartesian` |
| dimension | dimension of chart | array | default `[columns[0], columns[1]]` |
| metrics | metrics of chart | string | default `columns[2]` |
| xAxisList | x-axis data  | array | default is dimension[0] data |
| yAxisList | y-axis data | array | default is dimension[1] data |
| dataType | data type of metrics | string | `'KMB'`, `'normal'`, `'percent'` |
| min | min number of visualMap | number | defualt is min number of data |
| max | max number of visualMap | number | defualt is max number of data |
| digit | digit of percent type data | number | default `2` |
| key | Bmap access_key | string | get [here](http://lbsyun.baidu.com/apiconsole/key) |
| bmap | Bmap settings | object | content reference [docs](https://github.com/ecomfe/echarts/tree/master/extension/bmap#使用) |
| geo |  map settings |  object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#geo) |
| position | map location | string | default `'china'` |
| positionJsonLink | data source of map | string | - |
| beforeRegisterMap | trigger before map register | Function | parameter is map data, need to return map data |
| beforeRegisterMapOnce | trigger before map register (only once) | Function | parameter is map data, need to return map data |
| specialAreas | special location settings | object | content reference [docs](http://echarts.baidu.com/api.html#echarts.registerMap) |
| mapURLProfix | url profix of map location | string | default  `https://unpkg.com/echarts@3.6.2/map/json/` |
| pointSize | size of heatmap point | number | default `10` |
| blurSize | size of heatmap point blur | number | default `5` |
| heatColor | color range of visualMap | array | - |
| yAxisName | name of y-axis | string | - |
| xAxisName | name of x-axis | string | - |

> Remark: if not set metrics, value will be 1 by default.
