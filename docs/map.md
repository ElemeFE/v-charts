### 地图

#### 示例

<iframe width="100%" height="415" src="//jsfiddle.net/vue_echarts/1fwe4tt7/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### 设置指标维度

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-map :data="chartData" :settings="chartSettings"></ve-map>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
          { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
          { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
          { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
        ]
      }
      this.chartSettings = {
        position: 'china',
        dimension: '位置',
        metrics: ['人口', '面积'],
        dataType: {
          '面积': 'KMB'
        }
      }
    }
  }
</script>
</script>

#### 设置城市

<vuep template="#set-city"></vuep>

<script v-pre type="text/x-template" id="set-city">
<template>
  <ve-map :data="chartData" :settings="chartSettings"></ve-map>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '延庆区', 'GDP': 123 },
          { '位置': '密云区', 'GDP': 1223 },
          { '位置': '平谷区', 'GDP': 2123 },
          { '位置': '海淀区', 'GDP': 4123 }
        ]
      }
      this.chartSettings = {
        position: 'province/beijing'
      }
    }
  }
</script>
</script>

#### 修改指标名称

<vuep template="#change-metrics-name"></vuep>

<script v-pre type="text/x-template" id="change-metrics-name">
<template>
  <ve-map :data="chartData" :settings="chartSettings"></ve-map>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '延庆区', 'GDP': 123 },
          { '位置': '密云区', 'GDP': 1223 },
          { '位置': '平谷区', 'GDP': 2123 },
          { '位置': '海淀区', 'GDP': 4123 }
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

#### 设置选中模式

<vuep template="#set-selection"></vuep>

<script v-pre type="text/x-template" id="set-selection">
<template>
  <div>
    <span>当前选中了: {{ cityName || '-' }}</span>
    <ve-map :data="chartData" :settings="chartSettings" :events="chartEvents"></ve-map>
  </div>
</template>

<script>
  module.exports = {
    data () {
      this.chartData = {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '吉林', 'GDP': 123 },
          { '位置': '北京', 'GDP': 1223 },
          { '位置': '上海', 'GDP': 2123 },
          { '位置': '浙江', 'GDP': 4123 }
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

#### 设置样式

<vuep template="#set-style"></vuep>

<script v-pre type="text/x-template" id="set-style">
<template>
  <ve-map :data="chartData" :settings="chartSettings"></ve-map>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '吉林', 'GDP': 123 },
          { '位置': '北京', 'GDP': 1223 },
          { '位置': '上海', 'GDP': 2123 },
          { '位置': '浙江', 'GDP': 4123 }
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

#### 设置自定义位置并修改数据源

<vuep template="#set-position-json"></vuep>

<script v-pre type="text/x-template" id="set-position-json">
<template>
  <ve-map :data="chartData" :settings="chartSettings" :extend="chartExtend"></ve-map>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['位置', ' 人口'],
        rows: [
          { '位置': '北区', ' 人口': 123 }
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

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | String | 默认columns第一项为维度 |
| metrics | 指标 | Array | 默认columns第二项为指标 |
| position | 位置 | String | 默认为 `'china'` |
| selectData | 是否高亮显示数据对应位置 | Boolean | 默认为 `false` |
| selectedMode | 地图选中模式 | Boolean，String | 默认为 `false`, 可选值有<br>`'single', 'multiple'` |
| dataType | 指标数据类型 | Object | 内容为 指标-指标数据 <br>类型的键值对，支持<br>`'normal', 'KMB', 'percent'` |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
| zoom | 视角的缩放比例 | Number | 默认为1 |
| center | 当前视角的中心点 | Array | - |
| aspectScale | 用于 scale 地图的长宽比 | Number | 默认为0.75 |
| boundingCoords | 左上角以及右下角分别所对应的经纬度 | Array | 默认为null |
| roam | 是否开启鼠标缩放和平移漫游 | Boolean, String | 默认为false, 可选值有<br>`false, true, 'scale', 'move'` |
| scaleLimit | 滚轮缩放的极限控制 | Object | 默认`{ min: 1, max: 1 }` |
| mapGrid | 地图距离容器的边距 | Object | 默认值为<br>`{`<br>` left: auto,`<br>` right: auto,`<br>` top: auto,`<br>` bottom: auto`<br>` }` |
| label | 文本标签 | Boolean, Object | 默认为`true`, 内容参考[文档](http://echarts.baidu.com/option.html#series-map.label) |
| itemStyle | 地图区域的多边形 图形样式 | Boolean, Object | 默认为true, 内容参考[文档](http://echarts.baidu.com/option.html#series-map.itemStyle) |
| positionJsonLink | 地图数据源 | String | - |
| beforeRegisterMap | 地图数据注册前执行的函数 | Function | 参数为地图数据，需返回地图数据 |
| beforeRegisterMapOnce | 地图数据注册前执行的函数(仅执行一次) | Function | 参数为地图数据，需返回地图数据 |
| specialAreas | 地图中的位置配置 | Object | 将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看, 用法参考[文档](http://echarts.baidu.com/api.html#echarts.registerMap) |
| mapURLProfix | 位置请求的 URL 前缀 | String | 默认为 `https://unpkg.com/echarts@3.6.2/map/json/` |
| mapOrigin | 地图 geojson | Object | - |

> 备注: 属性中的 position 默认为'china',可设置的类型有'china'、'china-cities'、'china-contour'、'world'、'province/beijing'、'province/shanghai'等，省份的position如例子中所示需要在前面加'province/'
