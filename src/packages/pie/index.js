import echarts from '../../echarts-base'
import { pie } from './main'
import Core from '../../core'
export default {
  name: 'VePie',
  mixins: [Core],
  created () {
    this.chartHandler = pie
    this.echartsLib = echarts
  }
}
