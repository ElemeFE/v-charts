import echarts from '../../echarts-base'
import 'echarts/lib/chart/map'
import { map } from './main'
import Core from '../../core'
export default {
  name: 'VeMap',
  mixins: [Core],
  created () {
    this.chartHandler = map
    this.echartsLib = echarts
  }
}
