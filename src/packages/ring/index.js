import 'echarts/lib/chart/pie'
import { ring } from '../pie/main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeRing',
  data () {
    this.chartHandler = ring
    return {}
  }
})
