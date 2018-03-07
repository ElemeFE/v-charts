<template>
  <div class="page-test">
    <ve-line
      :data="chartData"
      :extend="chartExtend"
      :colors="color"
      @ready="chartReady($event, 1)"
      @ready-once="chartReadyOnce($event, 1)"
      ref="chart">
    </ve-line>
    <button @click="changeSmooth">平滑切换</button>
    <button @click="changeTheme">主题切换</button>
  </div>
</template>

<script>
import VeLine from '../../src/packages/line'
import 'echarts/lib/component/toolbox'

export default {
  data () {
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
      },
      chartExtend: {
        series: {
          smooth: false
        }
      },
      color: ['red', 'blue'],
      grid: {
        show: true
      }
    }
  },

  methods: {
    changeSmooth () {
      this.chartExtend.series.smooth = !this.chartExtend.series.smooth
      this.$nextTick(() => {
        this.$refs.chart.echarts.resize()
      })
    },
    changeTheme () {
      let c = this.color[0]
      this.color.splice(0, 1, this.color[1])
      this.color.splice(1, 1, c)
    },

    chartReady () {
      console.log(this.$refs.chart._watchers.map(({ expression }) => expression))
      console.log('ready', arguments)
    },

    chartReadyOnce () {
      console.log('ready-once', arguments)
    }
  },

  components: { VeLine }
}
</script>

<style>
.page-test .ve-line {
  width: 0;
}
</style>
