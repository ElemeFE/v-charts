# 水球图

#### 示例

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
            city: '上海',
            percent: 0.6
          }]
        }
      }
    }
  }
</script>
</script>

#### 水球图分层

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
          '上海': {
            color: ['red', 'green', 'yellow']
          }
        }
      }
      return {
        chartData: {
          columns: ['city', 'percent'],
          rows: [{
            city: '上海',
            percent: 0.7
          }]
        }
      }
    }
  }
</script>
</script>

#### 设置多个水球图

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
              fontSize: 30
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
              fontSize: 30
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
            city: '上海',
            percent: 0.6
          }, {
            city: '广州',
            percent: 0.4
          }, {
            city: '成都',
            percent: 0.9
          }]
        }
      }
    }
  }
</script>
</script>

#### 设置水球图的形状

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
          '上海': {
            shape: 'rect'
          }
        }
      }
      return {
        chartData: {
          columns: ['city', 'percent'],
          rows: [{
            city: '上海',
            percent: 0.6
          }]
        }
      }
    }
  }
</script>
</script>

#### 水球图文字标签及样式设置

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
          '上海': {
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
              fontSize: 40,
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
            city: '上海',
            percent: 0.6
          }]
        }
      }
    }
  }
</script>
</script>


#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | String | 默认 columns[0] |
| metrics | 指标 | String | 默认 columns[1] |
| dataType | 数据类型 | String | 默认为percent,也可设置为normal |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
| wave | 设置水球图分层 | Array[Number]，Array[Array[Number]] | 默认为[], 数组中的值不大于row中对应的维度值，且需要由大到小排列。可设置为[0.3, 0.2, 0.1]的形式，表示每个水球图都显示4层，且最下面三层的值分别为0.1，0.2，0.3；也可设置为[[0.2, 0.1], [0.1], []]的形式，当有多个水球图时，wave中的每一项对应一个水球图的分层设置，如果wave.length < rows.length,则剩余的水球图的分层设置以wave数组中最后一项为准。比如rows=[{val: 0.1}, {val: 0.2}, {val: 0.3}, {val: 0.4}], 而wave=[[0.2,0.1], [0.2]]，此时rows中后三项的分层设置均为[0.2]|
| seriesMap | 附加到 series 中的设置 | Object，Array[Object] | 默认为{}，可以设置单个水球图，也可以一次设置多个。数组形式配置见“多个水球图”示例，对象形式配置见其他示例。 |

> 备注1： 通过 seriesMap，可以为每一个水球图设置样式，具体样式的配置可以参考[文档](https://github.com/ecomfe/echarts-liquidfill)或下面对应的中文文档。

### echarts-liquidfill配置中文文档(在seriesMap中使用))
#### seriesMap 配置项
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| color | 颜色 | Array[String] | data中第一个数据对应color中第一个颜色，以此类推。如果color.length小于data.length, data中数据项的颜色会循环展示。在这里，color设置的是row中metrics和wave的值对应数据波浪的颜色。|
| radius | 水球图的半径 | String | 单个水球图的半径，相对于容器元素中较短边(width和height)的长度，以百分数表示,如’50%’ |
| center | 水球图的位置 | Array[String] | 设置时以百分数表示，数组中第一项代表横坐标，相对于容器的width的百分比，第二项代表纵坐标，相对于容器heigght的百分比。如[’50%’, ’50%’]表示居中 |
| amplitude | 水波的起伏程度 | String | 用百分数表示。数值越大，起伏程度越大，如’10%’ |
| waveLength | 水波的长度 | String | 相对于水球的直径。当为’50%’时，水球图中一条数据上会出现两个水波；为33%时，会出现三个水波。以此类推。|
| period | 水波滚动的速度 | Number, Function | 表示滚动一个水波需要花费的时间，以毫秒为单位。可以直接设置数字，也可以设置为function(value, index)的形式。|
| direction | 水波的滚动方向 | String | 整体设置水波的滚动方向，可选’left’或’right’|
| shape | 水球图的形状 | String | 水球图的形状，可选值有’circle’, ‘rect’, ‘roundRect’, ‘triangle’, ‘diamond’, ‘pin’, ‘arrow’，也可以通过svg自定义’path://*' | 
| waveAnimation | 水波是否滚动 | Boolean | 为true时水波滚动，反之不滚动。默认为true |
| animationEasing | 水波初始的动画的速度曲线 | String | 水波初始的动画的速度曲线 |
| animationEasingUpdate | 数据变动时水波动画的速度曲线 | String | 数据变动时水波动画的速度曲线 |
| animationDuration | 水波初始动画所需要的时间 | Number | 水波初始动画所需要的时间 |
| animationDurationUpdate |  数据变动时水波动画变化所需要的时间 | Number |  数据变动时水波动画变化所需要的时间 |
| outline | 水球图的外边框设置 | Object | 水球图的外边框设置 | 
| backgroundStyle | 水球图的背景颜色 | Object | 水球图的背景颜色 |
| itemStyle | 水球图波浪的样式 | Object | 水球图波浪的样式 |
| emphasis | 鼠标悬浮时波浪的样式 | Object | 鼠标悬浮时波浪的样式 |
| label | 图形上的文本标签 | Object | 图形上的文本标签 |

!> 注意：不要在seriesMap中设置data，这样会覆盖row中对应的数据和wave。

##### "outline" 水球图外边框配置
| 配置项 | 简介 | 类型 | 备注 | 
| --- | --- | --- | --- |
| show | 是否显示 | Boolean | |
| borderDistance | | Number | 水球图外边框和水球图核心内容的距离，类似于元素的内边距 |
| itemStyle | 水球图外边框的样式 | Object | 主要配置项有color: String(边框和核心内容之间的背景颜色，也就是borderDistance那部分的背景颜色), borderColor: String(外边框的颜色)，borderWidth: Number(外边框的宽度)，shadowBlur: Number(外边阴影的模糊距离)，shadowColor: String(边框阴影的颜色)

##### "backgroundStyle" 配置
| 配置项 | 简介 | 类型 | 备注 | 
| --- | --- | --- | --- |
| color | 水球图的背景颜色 | String | |
| borderWidth | 背景的边框 | Number | |
| borderColor | 背景边框的颜色 | String | |

##### "itemStyle" 配置
| 配置项 | 简介 | 类型 | 备注 | 
| --- | --- | --- | --- |
| opacity | 波浪的透明度 | Number | |
| shadowBlur | 波浪阴影的模糊距离 | Number | |
| shadowColor | 波浪阴影的颜色 | String | |

##### "emphasis" 配置
| 配置项 | 简介 | 类型 | 备注 | 
| --- | --- | --- | --- |
| itemStyle | 鼠标悬浮时波浪的样式 | Object | opacity: Number(鼠标悬浮时波浪的透明度) | 

##### "label" 配置
| 配置项 | 简介 | 类型 | 备注 | 
| --- | --- | --- | --- |
| show | 是否显示 | Boolean | 默认显示
| color | 文本的颜色 | String | |
| insideColor | 被波浪覆盖部分的文本的颜色 | String | |
| fontWeight | 文本的字重 | String | |
| fontSize | 字号 | Number | |
| formatter | 自定义文字标签内容 | Function | |
| align | 文本的位置 | String | 可选值有'left', 'center', 'right |
| baseline | 文本垂直方向上对齐方向 | String | 可选值有'top', 'middle', 'bottom' | 
| position | 文本的位置 | String, Array[string] | 有inside, left, right, top, bottom可选，也可设置为[’10%’, ’20%’]形式表示水平和垂直方向的位置 |





