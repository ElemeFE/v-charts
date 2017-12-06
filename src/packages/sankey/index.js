import echarts from '../../echarts-base'
import 'echarts/lib/chart/sankey'
import { sankey } from './main'
import Core from '../../core'
export default {
  name: 'VeSankey',
  mixins: [Core],
  created () {
    this.chartHandler = sankey
    this.echartsLib = echarts
  }
}
