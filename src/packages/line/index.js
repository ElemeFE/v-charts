import echarts from '../../echarts-base'
import 'echarts/lib/chart/line'
import { line } from './main'
import Core from '../../core'
export default {
  name: 'VeLine',
  mixins: [Core],
  created () {
    this.chartHandler = line
    this.echartsLib = echarts
  }
}
