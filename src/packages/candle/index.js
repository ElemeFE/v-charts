import echarts from '../../echarts-base'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/candlestick'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/dataZoom'
import { candle } from './main'
import Core from '../../core'

export default {
  name: 'VeCandle',
  mixins: [Core],
  created () {
    this.chartHandler = candle
    this.echartsLib = echarts
  }
}
