<template>
  <div id="ap">
    <h3>图表切换</h3>
    <p>{{ contentList[0] }}</p>
    <ve-chart :data="chartData" :settings="chartSettings"></ve-chart>
    <button @click="changeChart">切换图表类型</button>
    <p>代码示例</p>
    <code-section :content="codeList[0]"></code-section>
    <code-section :content="codeList[1]"></code-section>
    <code-section :content="chartDataStr"></code-section>
  </div>
</template>

<script>
import VeChart from '../../src/chart/index'
const CONTENT_LIST = [
  '为了方便使用一份数据即可生成不同的表格，可以使用<ve-chart>组件，切换图表类型则只需要改变settings即可'
]
const CODE_LIST = [
  '<ve-chart :data="chartData" :settings="chartSettings"></ve-chart>',
  'this.chartSettings = { type: line } // column, pie'
]

export default {
  name: 'Test',
  components: {
    VeChart
  },
  data () {
    this.contentList = CONTENT_LIST
    this.codeList = CODE_LIST
    this.lineData = {
      key: ['1', '2', '3', '4', '5', '6'],
      a: [20, 50, 30, 1, 50, 60],
      b: [7, 3, 4, 2, 5, 3]
    }
    this.lineSettings = {}
    this.chartDataStore = {
      columns: ['日期', '余额', '年龄'],
      rows: [
        { '日期': 1, '余额': 123, '年龄': 3 },
        { '日期': 2, '余额': 1223, '年龄': 6 },
        { '日期': 3, '余额': 2123, '年龄': 9 },
        { '日期': 4, '余额': 4123, '年龄': 12 },
        { '日期': 5, '余额': 3123, '年龄': 15 },
        { '日期': 6, '余额': 7123, '年龄': 20 }
      ]
    }
    this.chartSettingsStore = [
      {
        type: 'line'
      },
      {
        type: 'column'
      },
      {
        type: 'pie'
      }
    ]
    return {
      currentValue: '',
      chartData: {},
      chartSettings: {},
      index: 0
    }
  },
  computed: {
    chartDataStr () {
      return JSON.stringify(this.chartData, null, 2)
    }
  },
  methods: {
    afterConfig (options) {
      console.log(options)
      return options
    },
    changeChart () {
      if (this.index === 2) this.index = 0
      else this.index++
    },
    init () {
      this.chartData = this.chartDataStore
      this.chartSettings = this.chartSettingsStore[this.index]
    }
  },
  watch: {
    index (v) {
      this.chartSettings = this.chartSettingsStore[v]
    }
  },
  mounted () {
    this.$nextTick(this.init)
  }
}
</script>
