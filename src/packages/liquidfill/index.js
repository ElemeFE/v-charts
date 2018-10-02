import 'echarts-liquidfill'
import {
  liquidfill
} from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeLiquidfill',
  data () {
    this.chartHandler = liquidfill
    return {}
  }
})
