<template>
  <div>
    <ve-line
      :data="chartData"
      :settings="chartSettings"
      :after-config="afterConfig">
    </ve-line>
  </div>
</template>

<script>
import VeLine from '../../src/packages/line'
import 'echarts/lib/component/toolbox'

export default {
  data () {
    this.chartSettings = {
      xAxisType: 'value'
    }
    return {
      chartData: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': 1, '余额': 2123, '年龄': 300 },
          { '日期': 10, '余额': 123, '年龄': 600 },
          { '日期': 20, '余额': 1323, '年龄': 900 },
          { '日期': 50, '余额': 4123, '年龄': 1200 },
          { '日期': 100, '余额': 3223, '年龄': 1500 },
          { '日期': 120, '余额': 123, '年龄': 2000 }
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

  components: { VeLine }
}
</script>
