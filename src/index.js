import VeBar from './bar/index'
import VeColumn from './bar/column'
import VeLine from './line'
import VePie from './pie'
import VeRing from './pie/ring'
import VeWaterfall from './waterfall'
import VeFunnel from './funnel'
import VeRadar from './radar'
import VeChart from './chart'

import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/funnel'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/radar'

const components = [
  VeBar,
  VeColumn,
  VeLine,
  VePie,
  VeRing,
  VeWaterfall,
  VeFunnel,
  VeRadar,
  VeChart
]

function install (Vue, _) {
  components.forEach(component => { Vue.component(component.name, component) })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { VeBar, VeColumn, VeRing, VeLine, VePie, VeWaterfall, VeFunnel, VeRadar, VeChart, install }
