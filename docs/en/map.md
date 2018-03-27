### Map

#### Example

<iframe width="100%" height="415" src="//jsfiddle.net/vue_echarts/1fwe4tt7/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### set dimension and metrics

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-map :data="chartData" :settings="chartSettings"></ve-map>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['location', 'GDP'],
        rows: [
          { 'location': '吉林', 'GDP': 123, 'person': 123, 'area': 92134 },
          { 'location': '北京', 'GDP': 1223, 'person': 2123, 'area': 29234 },
          { 'location': '上海', 'GDP': 2123, 'person': 1243, 'area': 94234 },
          { 'location': '浙江', 'GDP': 4123, 'person': 5123, 'area': 29234 }
        ]
      }
      this.chartSettings = {
        position: 'china',
        dimension: 'location',
        metrics: ['person', 'area'],
        dataType: {
          'area': 'KMB'
        }
      }
    }
  }
</script>
</script>

#### set position

<vuep template="#set-city"></vuep>

<script v-pre type="text/x-template" id="set-city">
<template>
  <ve-map :data="chartData" :settings="chartSettings"></ve-map>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['location', 'GDP'],
        rows: [
          { 'location': '延庆区', 'GDP': 123 },
          { 'location': '密云区', 'GDP': 1223 },
          { 'location': '平谷区', 'GDP': 2123 },
          { 'location': '海淀区', 'GDP': 4123 }
        ]
      }
      this.chartSettings = {
        position: 'province/beijing'
      }
    }
  }
</script>
</script>

#### metrics alias

<vuep template="#change-metrics-name"></vuep>

<script v-pre type="text/x-template" id="change-metrics-name">
<template>
  <ve-map :data="chartData" :settings="chartSettings"></ve-map>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['location', 'GDP'],
        rows: [
          { 'location': '延庆区', 'GDP': 123 },
          { 'location': '密云区', 'GDP': 1223 },
          { 'location': '平谷区', 'GDP': 2123 },
          { 'location': '海淀区', 'GDP': 4123 }
        ]
      }
      this.chartSettings = {
        labelMap: {
          'GDP': '国内生产总值'
        }
      }
    }
  }
</script>
</script>

#### select mode of select

<vuep template="#set-selection"></vuep>

<script v-pre type="text/x-template" id="set-selection">
<template>
  <div>
    <span>selected: {{ cityName || '-' }}</span>
    <ve-map :data="chartData" :settings="chartSettings" :events="chartEvents"></ve-map>
  </div>
</template>

<script>
  module.exports = {
    data () {
      this.chartData = {
        columns: ['location', 'GDP'],
        rows: [
          { 'location': '吉林', 'GDP': 123 },
          { 'location': '北京', 'GDP': 1223 },
          { 'location': '上海', 'GDP': 2123 },
          { 'location': '浙江', 'GDP': 4123 }
        ]
      }
      this.chartSettings = {
        position: 'china',
        // selectData: true,
        selectedMode: 'single'
      }
      this.chartEvents = {
        click: (v) => {
          this.cityName = v.name
        }
      }
      return {
        cityName: ''
      }
    }
  }
</script>
</script>

#### custom style

<vuep template="#set-style"></vuep>

<script v-pre type="text/x-template" id="set-style">
<template>
  <ve-map :data="chartData" :settings="chartSettings"></ve-map>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['location', 'GDP'],
        rows: [
          { 'location': '吉林', 'GDP': 123 },
          { 'location': '北京', 'GDP': 1223 },
          { 'location': '上海', 'GDP': 2123 },
          { 'location': '浙江', 'GDP': 4123 }
        ]
      }
      this.chartSettings = {
        position: 'china',
        label: false,
        itemStyle: {
          normal: {
            borderColor: '#00f'
          }
        },
        zoom: 1.2
      }
    }
  }
</script>
</script>

#### custom location and set data source

<vuep template="#set-position-json"></vuep>

<script v-pre type="text/x-template" id="set-position-json">
<template>
  <ve-map :data="chartData" :settings="chartSettings" :extend="chartExtend"></ve-map>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['location', ' person'],
        rows: [
          { 'location': '北区', ' person': 123 }
        ]
      }
      this.chartSettings = {
        positionJsonLink: 'https://dn-quietcoder.qbox.me/HK_geo.json',
        position: 'HK',
        beforeRegisterMap (json) {
          // edit data here such as:
          // json.features[0].properties.cp = [121.509062, 26.044332]
          return json
        }
      }
      this.chartExtend = {
        series: {
          nameMap: {
            'Central and Western':'中西区',
            'Eastern':'东区',
            'Islands':'离岛',
            'Kowloon City':'九龙城',
            'Kwai Tsing':'葵青',
            'Kwun Tong':'观塘',
            'North':'北区',
            'Sai Kung':'西贡',
            'Sha Tin':'沙田',
            'Sham Shui Po':'深水埗',
            'Southern':'南区',
            'Tai Po':'大埔',
            'Tsuen Wan':'荃湾',
            'Tuen Mun':'屯门',
            'Wan Chai':'湾仔',
            'Wong Tai Sin':'黄大仙',
            'Yau Tsim Mong':'油尖旺',
            'Yuen Long':'元朗'
          }
        }
      }
    }
  }
</script>
</script>

#### settings

| attribute | description | type | remark |
| --- | --- | --- | --- |
| dimension | dimension of chart | String | default `columns[0]` |
| metrics | metrics of chart | Array | defaut `[columns[1] ~ columns[columns.length - 1]]` |
| position | location of map | String | default `'china'` |
| selectData | whether highlight data location | Boolean | default `false` |
| selectedMode | mode of map select | Boolean, String | `'single'`, `'multiple'`, default `false` |
| dataType | data type of metrics | Object | content is `{ metricsName: dataType }`, support `'normal'`, `'KMB'`, `'percent'` |
| digit | digit of percent type data | Number | default `2` |
| zoom | zoom rate of current view-port | Number | default `1` |
| center | center of current view-port, in longitude and latitude | Array | - |
| mapGrid | grid of chart | Object | default <br>`{`<br>` left: auto,`<br>` right: auto,`<br>` top: auto,`<br>` bottom: auto`<br>` }` |
| label | label of chart | Boolean, Object | default `true`, content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-map.label) |
| itemStyle | style of map area | Boolean, Object | default `true`, content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-map.itemStyle) |
| positionJsonLink | data source of map | String | - |
| beforeRegisterMap | trigger before map register | Function | parameter is map data, need to return map data |
| beforeRegisterMapOnce | trigger before map register (only once) | Function | parameter is map data, need to return map data |
| specialAreas | special location settings | Object | content reference [docs](http://echarts.baidu.com/api.html#echarts.registerMap) |
| mapURLProfix | url profix of map location | String | default  `https://unpkg.com/echarts@3.6.2/map/json/` |
| mapOrigin | map geojson | Object | - |

> Remark: position default value is 'china',and also you can set 'china'、'china-cities'、'china-contour'、'world'、'province/beijing'、'province/shanghai' and so on, china province need add `province/` before province name.
