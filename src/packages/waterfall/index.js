import echarts from '../../echarts-base'
import 'echarts/lib/chart/bar'
import { waterfall } from './main'
import Core from '../../core'
export default {
  name: 'VeWaterfall',
  mixins: [Core],
  created () {
    this.chartHandler = waterfall
    this.echartsLib = echarts
  }
}
