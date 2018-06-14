import 'echarts/lib/chart/map'
import { map } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeMap',
  data () {
    this.chartHandler = map
    return {}
  }
})
