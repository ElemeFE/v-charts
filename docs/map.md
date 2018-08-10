# 地图

#### 示例

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
          columns: ['位置', '税收', '人口', '面积'],
          rows: [
            { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
            { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
            { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
            { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置指标维度

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
        dimension: '位置',
        metrics: ['人口', '面积'],
        dataType: {
          '面积': 'KMB'
        }
      }
      return {
        chartData: {
          columns: ['位置', '税收', '人口', '面积'],
          rows: [
            { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
            { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
            { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
            { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
          ]
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
  export default {
    data () {
      this.chartSettings = {
        position: 'province/beijing'
      }
      return {
        chartData: {
          columns: ['位置', '人口'],
          rows: [
            { '位置': '延庆区', '人口': 123 },
            { '位置': '密云区', '人口': 1223 },
            { '位置': '平谷区', '人口': 2123 },
            { '位置': '海淀区', '人口': 4123 }
          ]
        }
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
  export default {
    data () {
      this.chartSettings = {
        position: 'province/beijing',
        labelMap: {
          'people': '人口'
        }
      }
      return {
        chartData: {
          columns: ['位置', 'people'],
          rows: [
            { '位置': '延庆区', 'people': 123 },
            { '位置': '密云区', 'people': 1223 },
            { '位置': '平谷区', 'people': 2123 },
            { '位置': '海淀区', 'people': 4123 }
          ]
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
  export default {
    data () {
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
        cityName: '',
        chartData: {
          columns: ['位置', 'GDP'],
          rows: [
            { '位置': '吉林', 'GDP': 123 },
            { '位置': '北京', 'GDP': 1223 },
            { '位置': '上海', 'GDP': 2123 },
            { '位置': '浙江', 'GDP': 4123 }
          ]
        }
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
          columns: ['位置', '人口'],
          rows: [
            { '位置': '吉林', ' 人口': 123 },
            { '位置': '北京', ' 人口': 1223 },
            { '位置': '上海', ' 人口': 2123 },
            { '位置': '浙江', ' 人口': 4123 }
          ]
        }
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
          columns: ['位置', ' 人口'],
          rows: [
            { '位置': '北区', ' 人口': 123 }
          ]
        }
      }
    }
  }
</script>
</script>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | string | 默认columns第一项为维度 |
| metrics | 指标 | array | 默认columns第二项为指标 |
| position | 位置 | string | 默认为 `'china'` |
| selectData | 是否高亮显示数据对应位置 | boolean | 默认为 `false` |
| selectedMode | 地图选中模式 | Boolean，String | 默认为 `false`, 可选值有<br>`'single', 'multiple'` |
| dataType | 指标数据类型 | object | 内容为 指标-指标数据 <br>类型的键值对，支持<br>`'normal', 'KMB', 'percent'` |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| zoom | 视角的缩放比例 | number | 默认为1 |
| center | 当前视角的中心点 | array | - |
| aspectScale | 用于 scale 地图的长宽比 | number | 默认为0.75 |
| boundingCoords | 左上角以及右下角分别所对应的经纬度 | array | 默认为null |
| roam | 是否开启鼠标缩放和平移漫游 | boolean, string | 默认为false, 可选值有<br>`false, true, 'scale', 'move'` |
| scaleLimit | 滚轮缩放的极限控制 | object | 默认`{ min: 1, max: 1 }` |
| mapGrid | 地图距离容器的边距 | object | 默认值为<br>`{`<br>` left: auto,`<br>` right: auto,`<br>` top: auto,`<br>` bottom: auto`<br>` }` |
| label | 文本标签 | boolean, object | 默认为`true`, 内容参考[文档](http://echarts.baidu.com/option.html#series-map.label) |
| itemStyle | 地图区域的多边形 图形样式 | boolean, object | 默认为true, 内容参考[文档](http://echarts.baidu.com/option.html#series-map.itemStyle) |
| positionJsonLink | 地图数据源 | string | - |
| beforeRegisterMap | 地图数据注册前执行的函数 | Function | 参数为地图数据，需返回地图数据 |
| beforeRegisterMapOnce | 地图数据注册前执行的函数(仅执行一次) | Function | 参数为地图数据，需返回地图数据 |
| specialAreas | 地图中的位置配置 | object | 将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看, 用法参考[文档](http://echarts.baidu.com/api.html#echarts.registerMap) |
| mapURLProfix | 位置请求的 URL 前缀 | string | 默认为 `https://unpkg.com/echarts@3.6.2/map/json/` |
| mapOrigin | 地图 geojson | object | - |

> 备注: 属性中的 position 默认为'china',可设置的类型有'china'、'china-cities'、'china-contour'、'world'、'province/beijing'、'province/shanghai'等，省份的position如例子中所示需要在前面加'province/'
