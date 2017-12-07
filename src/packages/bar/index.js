import echarts from '../../echarts-base'
import 'echarts/lib/chart/bar'
import { bar } from './main'
import Core from '../../core'

export default {
  name: 'VeBar',
  mixins: [Core],
  created () {
    this.chartHandler = bar
    this.echartsLib = echarts
  }
}
