<template>
  <div>
    <ve-histogram
      :data="chartData"
      :settings="chartSettings"
      :extend="chartExtend"
      :after-config="afterConfig">
    </ve-histogram>
  </div>
</template>

<script>
import VeHistogram from '../../src/packages/histogram'
import 'echarts/lib/component/toolbox'

export default {
  data () {
    this.chartSettings = {
      xAxisType: 'value'
    }
    /* this.chartExtend = {
      series (v) {
        console.log('series', v)
        v.forEach(i => {
          i.barWidth = 1
        })
        return v
      },
      color (v) {
        console.log('color', v)
        return ['#000']
      },
      tooltip (v) {
        console.log('tooltip', v)
        v.trigger = 'none'
        return v
      }
    } */
    this.chartExtend = {
      series: {
        barWidth: 1
      },
      color: ['#000'],
      tooltip: {
        trigger: 'none'
      }
    }
    return {
      chartData: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': 10, '余额': 2123, '年龄': 300 },
          { '日期': 12, '余额': 123, '年龄': 600 },
          { '日期': 13, '余额': 1323, '年龄': 900 },
          { '日期': 14, '余额': 4123, '年龄': 1200 },
          { '日期': 15, '余额': 3223, '年龄': 1500 },
          { '日期': 106, '余额': 123, '年龄': 2000 }
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

  components: { VeHistogram }
}
</script>
