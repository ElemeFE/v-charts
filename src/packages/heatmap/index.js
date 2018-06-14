import echarts from '../../echarts-base'
import 'echarts/lib/chart/heatmap'
import 'echarts/lib/component/visualMap'
import 'echarts/extension/bmap/bmap'
import 'echarts/lib/chart/map'
import { heatmap } from './main'
import Core from '../../core'
import numerify from 'numerify/lib/index.es'
export default {
  name: 'VeHeatmap',
  mixins: [Core],
  created () {
    this.chartHandler = heatmap
    this.echartsLib = echarts
  },
  _numerify: numerify
}
