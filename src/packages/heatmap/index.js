import echarts from '../../echarts-base'
import { heatmap } from './main'
import Core from '../../core'
export default {
  name: 'VeHeatmap',
  mixins: [Core],
  created () {
    this.chartHandler = heatmap
    this.echartsLib = echarts
  }
}
