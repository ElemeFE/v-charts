<template>
  <!-- 测试属性
    markLine: Object
    markArea: Object
    markPoint: Object
  -->
  <div>
    <ve-line :data="chartData" :mark-line="markLine"></ve-line>
    <ve-line :data="chartData" :extend="chartExtend"></ve-line>
    <ve-line :data="chartData" :mark-point="markPoint"></ve-line>
    <ve-line :data="chartData" :mark-area="markArea"></ve-line>
  </div>
</template>

<script>
import { VeLine } from '../../src/index.es'
import { LINE_DATA } from './data'
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/markArea'

export default {
  data () {
    this.markLine = {
      data: [
        { name: '平均线', type: 'average' }
      ]
    }
    this.markPoint = {
      data: [
        {
          name: '最大值',
          type: 'max'
        }
      ]
    }
    this.markArea = {
      data: [
        [
          {
            name: '平均值到最大值',
            type: 'average'
          },
          {
            type: 'max'
          }
        ]
      ]
    }
    this.chartExtend = {
      series (item) {
        item[0].markLine = {
          label: {
            position: 'middle'
          },
          data: [
            { name: '平均线', type: 'average' }
          ]
        }
        return item
      }
    }
    return {
      chartData: LINE_DATA
    }
  },
  components: { VeLine }
}
</script>
