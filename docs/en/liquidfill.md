# liquidfill

#### demo

<vuep template="#simple-liquidfill"></vuep>

<script v-pre type="text/x-template" id="simple-liquidfill">
<template>
  <ve-liquidfill :data="chartData"></ve-liquidfill>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['city', 'percent'],
          rows: [{
            city: 'ShangHai',
            percent: 0.6
          }]
        }
      }
    }
  }
</script>
</script>

#### multi-layer liquidfill

<vuep template="#set-layers"></vuep>

<script v-pre type="text/x-template" id="set-layers">
<template>
  <ve-liquidfill :data="chartData" :settings="chartSettings"></ve-liquidfill>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        wave: [0.5, 0.3, 0.1],
        seriesMap: {
          'ShangHai': {
            color: ['red', 'green', 'yellow']
          }
        }
      }
      return {
        chartData: {
          columns: ['city', 'percent'],
          rows: [{
            city: 'ShangHai',
            percent: 0.7
          }]
        }
      }
    }
  }
</script>
</script>

#### set many liquidfill balls

<vuep template="#set-multi"></vuep>

<script v-pre type="text/x-template" id="set-multi">
<template>
  <ve-liquidfill :data="chartData" :settings="chartSettings"></ve-liquidfill>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        wave: [[0.5, 0.3, 0.1], [0.3, 0.2], []],
        seriesMap: [
          {
            color: ['red', 'green', 'yellow'],
            label: {
              formatter (options) {
                const {
                  seriesName,
                  data: {
                    value
                  }
                } = options
                return `${seriesName}\n${value}`
              },
              fontSize: 20
            },
            center: ['24%', '20%'],
            radius: '40%',
            waveAnimation: false
          },
          {
            label: {
              formatter (options) {
                return `${options.seriesName}\n${options.data.value}`
              },
              fontSize: 20
            },
            center: ['25%', '70%'],
            radius: '40%'
          },
          {
            label: {
              fontSize: 30
            },
            center: ['70%', '50%'],
            radius: '40%',
            waveAnimation: false
          }
        ]
      }
      return {
        chartData: {
          columns: ['city', 'percent'],
          rows: [{
            city: 'ShangHai',
            percent: 0.6
          }, {
            city: 'Guangzhou',
            percent: 0.4
          }, {
            city: 'ChengDu',
            percent: 0.9
          }]
        }
      }
    }
  }
</script>
</script>

#### set the shape of liquidfill

<vuep template="#set-shape"></vuep>

<script v-pre type="text/x-template" id="set-shape">
<template>
  <ve-liquidfill :data="chartData" :settings="chartSettings"></ve-liquidfill>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        seriesMap: {
          'ShangHai': {
            shape: 'rect'
          }
        }
      }
      return {
        chartData: {
          columns: ['city', 'percent'],
          rows: [{
            city: 'ShangHai',
            percent: 0.6
          }]
        }
      }
    }
  }
</script>
</script>

#### set the text and styles about the liquidfill

<vuep template="#set-style"></vuep>

<script v-pre type="text/x-template" id="set-style">
<template>
  <ve-liquidfill
    :data="chartData"
    background-color="#000"
    :settings="chartSettings">
  </ve-gauge>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        seriesMap: {
          'ShangHai': {
            color: ['red'],
            itemStyle: {
              opacity: 0.2
            },
            emphasis: {
              itemStyle: {
                opacity: 0.8
              }
            },
            backgroundStyle: {
              color: 'yellow'
            },
            label: {
              formatter (options) {
                const {
                  seriesName,
                  value
                } = options
                return `${seriesName}\n${value * 100}%`
              },
              fontSize: 30,
              color: 'green',
              insideColor: 'red'
            }
          }
        }
      }
      return {
        chartData: {
          columns: ['city', 'percent'],
          rows: [{
            city: 'ShangHai',
            percent: 0.6
          }]
        }
      }
    }
  }
</script>
</script>


#### settings configuration

| attribute | description | type | remark |
| --- | --- | --- | --- |
| dimension | dimension of chart data | String | default `columns[0]` |
| metrics | metrics of chart data | String | default `columns[1]` |
| dataType | type of data | String | default `percent`, also can be setted as `normal` |
| digit | Set the number of digits to retain when the dataType is `percent` | Number | default `2` |
| wave | set the liquidfill layering | Array[Number]，Array[Array[Number]] | default `[]` |
| seriesMap | add settings to series | Object，Array[Object] | default `{}`，you can set one liquidfill, or set many liquidfill balls.The detail configuration can be seen in demos.

> Remark1: wave in settings: The dataType is Array[Number] or Array[Array[Number]]. The value in the array is not greater than the dimension value in the row, and needs to be arranged from large to small. It can be setted like [0.3, 0.2, 0.1]，which represents each liquidfill shows four layers and the values of bottom layers are 0.1、0.2、0.3 from bottom to top；It also can be setted like [[0.2, 0.1], [0.1], []].When there are a few liquidfill balls, Each item in the wave corresponds to a hierarchical setting of a liquidfill ball.If the wave.length is less than the rows.length, the left liquidfill will be setted according to the last value of wave. For example, the rows is [{val: 0.1}, {val: 0.2}, {val: 0.3}, {val: 0.4}], and the wave is [[0.2,0.1], [0.2]].此时Now the last three items's layering of rows will be setted as [0.2].

> Remark2： You can set each item of liquidfill by seriesMap.You can get more detail configuration about seriesMap in this [document](https://github.com/ecomfe/echarts-liquidfill)