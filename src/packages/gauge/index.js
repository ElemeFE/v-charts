import echarts from '../../echarts-base'
import 'echarts/lib/chart/gauge'
import { gauge } from './main'
import Core from '../../core'

export default {
  name: 'VeGauge',
  mixins: [Core],
  created () {
    this.chartHandler = gauge
    this.echartsLib = echarts
  }
}
