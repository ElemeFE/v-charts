import echarts from '../../echarts-base'
import 'echarts-amap'
import { amap } from './main'
import Core from '../../core'
export default {
  name: 'VeAmap',
  mixins: [Core],
  created () {
    this.chartHandler = amap
    this.echartsLib = echarts
  }
}
