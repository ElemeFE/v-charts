# Map

#### Example

<vuep template="#simple-map"></vuep>

<script v-pre type="text/x-template" id="simple-map">
<template>
  <ve-map :data="chartData"></ve-map>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['location', 'GDP'],
          rows: [
            { 'location': '吉林', 'GDP': 123, 'person': 123, 'area': 92134 },
            { 'location': '北京', 'GDP': 1223, 'person': 2123, 'area': 29234 },
            { 'location': '上海', 'GDP': 2123, 'person': 1243, 'area': 94234 },
            { 'location': '浙江', 'GDP': 4123, 'person': 5123, 'area': 29234 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set dimension and metrics

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-map :data="chartData" :settings="chartSettings"></ve-map>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        position: 'china',
        dimension: 'location',
        metrics: ['person', 'area'],
        dataType: {
          'area': 'KMB'
        }
      }
      return {
        chartData: {
          columns: ['location', 'GDP'],
          rows: [
            { 'location': '吉林', 'GDP': 123, 'person': 123, 'area': 92134 },
            { 'location': '北京', 'GDP': 1223, 'person': 2123, 'area': 29234 },
            { 'location': '上海', 'GDP': 2123, 'person': 1243, 'area': 94234 },
            { 'location': '浙江', 'GDP': 4123, 'person': 5123, 'area': 29234 }
          ]
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
  export default {
    data () {
      this.chartSettings = {
        position: 'province/beijing'
      }
      return {
        chartData: {
          columns: ['location', 'GDP'],
          rows: [
            { 'location': '延庆区', 'GDP': 123 },
            { 'location': '密云区', 'GDP': 1223 },
            { 'location': '平谷区', 'GDP': 2123 },
            { 'location': '海淀区', 'GDP': 4123 }
          ]
        }
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
  export default {
    data () {
      this.chartSettings = {
        labelMap: {
          'GDP': '国内生产总值'
        }
      }
      return {
        chartData: {
          columns: ['location', 'GDP'],
          rows: [
            { 'location': '延庆区', 'GDP': 123 },
            { 'location': '密云区', 'GDP': 1223 },
            { 'location': '平谷区', 'GDP': 2123 },
            { 'location': '海淀区', 'GDP': 4123 }
          ]
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
  export default {
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
  export default {
    data () {
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
      return {
        chartData: {
          columns: ['location', 'GDP'],
          rows: [
            { 'location': '吉林', 'GDP': 123 },
            { 'location': '北京', 'GDP': 1223 },
            { 'location': '上海', 'GDP': 2123 },
            { 'location': '浙江', 'GDP': 4123 }
          ]
        }
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
  export default {
    data () {
      this.chartSettings = {
        positionJsonLink: 'https://unpkg.com/v-charts-custom-maps@0.2.1/hk-geo.json',
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
      return {
        chartData: {
          columns: ['location', ' person'],
          rows: [
            { 'location': '北区', ' person': 123 }
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
| dimension | dimension of chart | string | default `columns[0]` |
| metrics | metrics of chart | array | defaut `[columns[1] ~ columns[columns.length - 1]]` |
| position | location of map | string | default `'china'` |
| selectData | whether highlight data location | boolean | default `false` |
| selectedMode | mode of map select | boolean, string | `'single'`, `'multiple'`, default `false` |
| dataType | data type of metrics | object | content is `{ metricsName: dataType }`, support `'normal'`, `'KMB'`, `'percent'` |
| digit | digit of percent type data | number | default `2` |
| zoom | zoom rate of current view-port | number | default `1` |
| center | center of current view-port, in longitude and latitude | array | - |
| mapGrid | grid of chart | object | default <br>`{`<br>` left: auto,`<br>` right: auto,`<br>` top: auto,`<br>` bottom: auto`<br>` }` |
| label | label of chart | boolean, object | default `true`, content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-map.label) |
| itemStyle | style of map area | boolean, object | default `true`, content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-map.itemStyle) |
| positionJsonLink | data source of map | string | - |
| beforeRegisterMap | trigger before map register | Function | parameter is map data, need to return map data |
| beforeRegisterMapOnce | trigger before map register (only once) | Function | parameter is map data, need to return map data |
| specialAreas | special location settings | object | content reference [docs](http://echarts.baidu.com/api.html#echarts.registerMap) |
| mapURLProfix | url profix of map location | string | default  `https://unpkg.com/echarts@3.6.2/map/json/` |
| mapOrigin | map geojson | object | - |

> Remark: position default value is 'china',and also you can set 'china'、'china-cities'、'china-contour'、'world'、'province/beijing'、'province/shanghai' and so on, china province need add `province/` before province name.
