import echarts from '../../echarts-base'
import 'echarts/lib/chart/pie'
import { ring } from '../pie/main'
import Core from '../../core'
import numerify from 'numerify/lib/index.es'
export default {
  name: 'VeRing',
  mixins: [Core],
  created () {
    this.chartHandler = ring
    this.echartsLib = echarts
  },
  _numerify: numerify
}
