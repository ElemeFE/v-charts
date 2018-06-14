import echarts from '../../echarts-base'
import 'echarts/lib/chart/gauge'
import { gauge } from './main'
import Core from '../../core'
import numerify from 'numerify/lib/index.es'

export default {
  name: 'VeGauge',
  mixins: [Core],
  created () {
    this.chartHandler = gauge
    this.echartsLib = echarts
  },
  _numerify: numerify
}
