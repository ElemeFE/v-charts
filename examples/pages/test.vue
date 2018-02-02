<template>
  <div class="page-test">
    <ve-line
      :data="chartData"
      :theme="chartTheme"
      ref="chart">
    </ve-line>
    <button @click="changeTheme">切换主题</button>
  </div>
</template>

<script>
import VeLine from '../../src/packages/line'
import 'echarts/lib/component/toolbox'
const CHART_THEMES = [
  {
    color: ['#000']
  },
  {
    color: ['#0f0']
  }
]

export default {
  data () {
    this.themeSign = false

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
      chartTheme: {}
    }
  },

  methods: {
    changeTheme () {
      this.themeSign = !this.themeSign
      this.chartTheme = CHART_THEMES[+this.themeSign]
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
