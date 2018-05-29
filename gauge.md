# 仪表盘

#### 示例

<vuep template="#simple-gauge"></vuep>

<script v-pre type="text/x-template" id="simple-gauge">
<template>
  <ve-gauge :data="chartData"></ve-gauge>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['type', 'a', 'b', 'value'],
          rows: [
            { type: '速度', value: 80, a: 1, b: 2 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 指标维度配置

<vuep template="#set-dim-metrics"></vuep>

<script v-pre type="text/x-template" id="set-dim-metrics">
<template>
  <ve-gauge :data="chartData" :settings="chartSettings"></ve-gauge>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dimension: 'type',
        metrics: 'value'
      }
      return {
        chartData: {
          columns: ['a', 'b', 'type', 'value'],
          rows: [
            { type: '速度', value: 80, a: 1, b: 2 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置数据类型

<vuep template="#set-dataType"></vuep>

<script v-pre type="text/x-template" id="set-dataType">
<template>
  <ve-gauge :data="chartData" :settings="chartSettings"></ve-gauge>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dataType: {
          '占比': 'percent'
        },
        seriesMap: {
          '占比': {
            min: 0,
            max: 1
          }
        }
      }
      return {
        chartData: {
          columns: ['type', 'value'],
          rows: [
            { type: '占比', value: 0.8 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置指标别名与单位

<vuep template="#set-label"></vuep>

<script v-pre type="text/x-template" id="set-label">
<template>
  <ve-gauge :data="chartData" :settings="chartSettings"></ve-gauge>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        labelMap: {
          'speed': '速度'
        },
        dataName: {
          'speed': 'km/h'
        }
      }
      return {
        chartData: {
          columns: ['type', 'value'],
          rows: [
            { type: 'speed', value: 60 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置多表盘及修改样式

<vuep template="#set-style"></vuep>

<script v-pre type="text/x-template" id="set-style">
<template>
  <ve-gauge
    :data="chartData"
    background-color="#000"
    :settings="chartSettings">
  </ve-gauge>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dataName: {
          '速度': 'km/h',
          '转速': 'x1000 r/min',
          '油表': 'gas'
        },
        seriesMap: {
          '速度': {
            min:0,
            max:220,
            splitNumber:11,
            radius: '50%',
            axisLine: {
              lineStyle: {
                color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                width: 3,
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            axisLabel: {
              textStyle: {
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            axisTick: {
              length:15,
              lineStyle: {
                color: 'auto',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            splitLine: {
              length:25,
              lineStyle: {
                width:3,
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            pointer: {
              shadowColor: '#fff',
              shadowBlur: 5
            },
            title: {
              textStyle: {
                fontWeight: 'bolder',
                fontSize: 20,
                fontStyle: 'italic',
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            detail: {
              backgroundColor: 'rgba(30,144,255,0.8)',
              borderWidth: 1,
              borderColor: '#fff',
              shadowColor: '#fff',
              shadowBlur: 5,
              offsetCenter: [0, '50%'],
              textStyle: {
                fontWeight: 'bolder',
                color: '#fff'
              }
            }
          },
          '转速': {
            center: ['10%', '55%'],
            radius: '25%',
            min:0,
            max:7,
            endAngle:45,
            splitNumber:7,
            axisLine: {
              lineStyle: {
                color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
                width: 2,
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            axisLabel: {
              textStyle: {
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            axisTick: {
              length:12,
              lineStyle: {
                color: 'auto',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            splitLine: {
              length:20,
              lineStyle: {
                width:3,
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            pointer: {
              width:5,
              shadowColor: '#fff',
              shadowBlur: 5
            },
            title: {
              offsetCenter: [0, '-30%'],
              textStyle: {
                fontWeight: 'bolder',
                fontStyle: 'italic',
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            detail: {
              borderColor: '#fff',
              shadowColor: '#fff',
              shadowBlur: 5,
              width: 80,
              height:30,
              offsetCenter: [25, '20%'],
              textStyle: {
                fontWeight: 'bolder',
                color: '#fff'
              }
            }
          },
          '油表': {
            center: ['84%', '50%'],
            radius: '30%',
            min:0,
            max:2,
            startAngle:135,
            endAngle:45,
            splitNumber:2,
            axisLine: {
              lineStyle: {
                color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                width: 2,
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            axisTick: {
              length:12,
              lineStyle: {
                color: 'auto',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            axisLabel: {
              textStyle: {
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10
              },
              formatter: function(v){
                switch (v + '') {
                  case '0': return 'E';
                  case '1': return 'Gas';
                  case '2': return 'F';
                }
              }
            },
            splitLine: {
              length:15,
              lineStyle: {
                width:3,
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            pointer: {
              width:2,
              shadowColor: '#fff',
              shadowBlur: 5
            },
            title: {
              show: false
            },
            detail: {
              show: false
            }
          }
        }
      }
      return {
        chartData: {
          columns: ['type', 'value'],
          rows: [
            { type: '速度', value: 60 },
            { type: '转速', value: 80 },
            { type: '油表', value: 6000 },
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
| dimension | 维度 | string | 默认 columns[0] |
| metrics | 指标 | string | 默认 columns[1] |
| dataType | 数据类型 | object | - |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| labelMap | 设置指标的别名 | object | - |
| seriesMap | 附加到 series 中的设置 | object | - |
| dataName | 表盘上显示的单位 | object | - |

> 备注1： 通过 seriesMap，可以为每一个仪表设置样式，具体样式的配置可以参考[文档](http://echarts.baidu.com/option.html#series-gauge)
