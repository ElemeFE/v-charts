import echarts from '../../echarts-base'
import 'echarts/lib/chart/scatter'
import { scatter } from './main'
import Core from '../../core'
export default {
  name: 'VeScatter',
  mixins: [Core],
  created () {
    this.chartHandler = scatter
    this.echartsLib = echarts
  }
}
