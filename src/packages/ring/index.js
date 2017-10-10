import echarts from '../../echarts-base'
import { ring } from '../pie/main'
import Core from '../../core'
export default {
  name: 'VeRing',
  mixins: [Core],
  created () {
    this.chartHandler = ring
    this.echartsLib = echarts
  }
}
