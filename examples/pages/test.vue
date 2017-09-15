<template>
  <div>
    <ve-line
      :data="chartData"
      :settings="chartSettings"
      :after-config="afterConfig"
      :toolbox="toolbox">
    </ve-line>
  </div>
</template>

<script>
import VePie from '../../src/packages/pie'
import VeLine from '../../src/packages/line'
import 'echarts/lib/component/toolbox'

export default {
  data () {
    this.toolbox = {
      show: true,
      feature: {
        saveAsImage: {
          type: 'jpeg'
        }
      }
    }
    this.chartSettings = {
      nullAddZero: false
    }
    return {
      chartData: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': 1, '余额': 123, '年龄': 3 },
          { '日期': 2, '年龄': 6 },
          { '日期': 3, '余额': 123, '年龄': 9 },
          { '日期': 4, '余额': 123, '年龄': 12 },
          { '日期': 5, '余额': 323, '年龄': 15 },
          { '日期': 6, '余额': 123, '年龄': 20 }
        ]
      }
    }
  },

  methods: {
    afterConfig (options) {
      console.log(options)
      return options
    }
  },

  components: { VePie, VeLine }
}
</script>
