import echarts from '../../echarts-base'
import { bar, histogram } from '../bar/main'
import { line } from '../line/main'
import { pie, ring } from '../pie/main'
import { funnel } from '../funnel/main'
import { radar } from '../radar/main'
import { waterfall } from '../waterfall/main'
import Core from '../../core'
export default {
  name: 'VeChart',
  mixins: [Core],
  created () {
    this.chartLib = {
      bar,
      histogram,
      line,
      pie,
      ring,
      funnel,
      radar,
      waterfall
    }
    this.chartHandler = this.chartLib[this.settings.type]
    this.echartsLib = echarts
  }
}
