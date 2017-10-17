import echarts from '../../echarts-base'
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
