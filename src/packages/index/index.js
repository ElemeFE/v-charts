import VeBar from '../bar'
import VeHistogram from '../histogram'
import VeLine from '../line'
import VePie from '../pie'
import VeRing from '../ring'
import VeWaterfall from '../waterfall'
import VeFunnel from '../funnel'
import VeRadar from '../radar'
import VeChart from '../chart'
import VeMap from '../map'
import VeBmap from '../bmap'

import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/funnel'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/radar'

const components = [
  VeBar,
  VeHistogram,
  VeLine,
  VePie,
  VeRing,
  VeWaterfall,
  VeFunnel,
  VeRadar,
  VeChart,
  VeMap,
  VeBmap
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
  VeChart,
  VeMap,
  VeBmap,
  install
}
