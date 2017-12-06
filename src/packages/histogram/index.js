import echarts from '../../echarts-base'
import 'echarts/lib/chart/bar'
import { histogram } from '../bar/main'
import Core from '../../core'
export default {
  name: 'VeHistogram',
  mixins: [Core],
  created () {
    this.chartHandler = histogram
    this.echartsLib = echarts
  }
}
