import 'echarts/lib/chart/bar'
import { waterfall } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeWaterfall',
  data () {
    this.chartHandler = waterfall
    return {}
  }
})
