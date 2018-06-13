# Gauge

#### Example

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
          columns: ['type', 'value'],
          rows: [
            { type: 'speed', value: 80, a: 1, b: 2 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set dimension and metrics

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
            { type: 'speed', value: 80, a: 1, b: 2 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set type of data

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
          'rate': 'percent'
        },
        seriesMap: {
          'rate': {
            min: 0,
            max: 1
          }
        }
      }
      return {
        chartData: {
          columns: ['type', 'value'],
          rows: [
            { type: 'rate', value: 0.8 }
          ]
        }
      }
    }
  }
</script>
</script>

#### alias

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
          'speed': 's'
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

#### multi gauge

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
          'speed': 'km/h',
          'rotateSpeed': 'x1000 r/min',
          'oilVolume': 'gas'
        },
        seriesMap: {
          'speed': {
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
          'rotateSpeed': {
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
          'oilVolume': {
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
            { type: 'speed', value: 60 },
            { type: 'rotateSpeed', value: 80 },
            { type: 'oilVolume', value: 6000 },
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
| dimension | dimension of chart | string | 默认 columns[0] |
| metrics | metrics of chart | string | 默认 columns[1] |
| dataType | data type of metrics | object | - |
| digit | digit of percent type data | number | default `2` |
| labelMap | metrics alias | object | - |
| seriesMap | series of each gauge | object | - |
| dataName | unit displayed on the dial | object | - |

> Remark: by set `seriesMap`, you can set style for every gauge, content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge).
