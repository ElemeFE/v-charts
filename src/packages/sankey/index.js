import echarts from '../../echarts-base'
import 'echarts/lib/chart/sankey'
import { sankey } from './main'
import Core from '../../core'
import numerify from 'numerify/lib/index.es'
export default {
  name: 'VeSankey',
  mixins: [Core],
  created () {
    this.chartHandler = sankey
    this.echartsLib = echarts
  },
  _numerify: numerify
}
