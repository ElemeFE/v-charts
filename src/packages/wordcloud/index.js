import 'echarts-wordcloud'
import {
  wordcloud
} from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeWordcloud',
  data () {
    this.chartHandler = wordcloud
    return {}
  }
})
