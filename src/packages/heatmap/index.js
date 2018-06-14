import 'echarts/lib/chart/heatmap'
import 'echarts/lib/component/visualMap'
import 'echarts/extension/bmap/bmap'
import 'echarts/lib/chart/map'
import { heatmap } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeHeatmap',
  data () {
    this.chartHandler = heatmap
    return {}
  }
})
