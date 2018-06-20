import 'echarts/lib/chart/graph'
import { graph } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeGraph',
  data () {
    this.chartHandler = graph
    return {}
  }
})
