import echarts from '../../echarts-base'
import 'echarts/lib/chart/pie'
import { pie } from './main'
import Core from '../../core'
import numerify from 'numerify/lib/index.es'
export default {
  name: 'VePie',
  mixins: [Core],
  created () {
    this.chartHandler = pie
    this.echartsLib = echarts
  },
  _numerify: numerify
}
