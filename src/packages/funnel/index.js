import echarts from '../../echarts-base'
import 'echarts/lib/chart/funnel'
import { funnel } from './main'
import Core from '../../core'
export default {
  name: 'VeFunnel',
  mixins: [Core],
  created () {
    this.chartHandler = funnel
    this.echartsLib = echarts
  }
}
