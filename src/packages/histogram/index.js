import 'echarts/lib/chart/bar'
import { histogram } from '../bar/main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeHistogram',
  data () {
    this.chartHandler = histogram
    return {}
  }
})
