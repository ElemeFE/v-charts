import 'echarts/lib/chart/gauge'
import { gauge } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeGauge',
  data () {
    this.chartHandler = gauge
    return {}
  }
})
