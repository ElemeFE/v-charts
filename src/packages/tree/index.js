import echarts from '../../echarts-base'
import 'echarts/lib/chart/tree'
import { tree } from './main'
import Core from '../../core'
import numerify from 'numerify/lib/index.es'
export default {
  name: 'VeTree',
  mixins: [Core],
  created () {
    this.chartHandler = tree
    this.echartsLib = echarts
  },
  _numerify: numerify
}
