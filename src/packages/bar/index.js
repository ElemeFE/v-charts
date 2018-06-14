import echarts from '../../echarts-base'
import 'echarts/lib/chart/bar'
import { bar } from './main'
import Core from '../../core'
import numerify from 'numerify/lib/index.es'

export default {
  name: 'VeBar',
  mixins: [Core],
  created () {
    this.chartHandler = bar
    this.echartsLib = echarts
  },
  _numerify: numerify
}
