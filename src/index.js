import VeBar from './bar/index'
import VeHistogram from './bar/histogram'
import VeLine from './line'
import VePie from './pie'
import VeRing from './pie/ring'
import VeWaterfall from './waterfall'
import VeFunnel from './funnel'
import VeRadar from './radar'
import VeScatter from './scatter'
import VeChart from './chart'

import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/funnel'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/radar'
import 'echarts/lib//chart/scatter'

const components = [
  VeBar,
  VeHistogram,
  VeLine,
  VePie,
  VeRing,
  VeWaterfall,
  VeFunnel,
  VeRadar,
  VeScatter,
  VeChart
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  VeBar,
  VeHistogram,
  VeRing,
  VeLine,
  VePie,
  VeWaterfall,
  VeFunnel,
  VeRadar,
  VeScatter,
  VeChart,
  install
}
