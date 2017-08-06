import VeBar from './bar/index'
import VeHistogram from './bar/histogram'
import VeLine from './line'
import VePie from './pie'
import VeRing from './pie/ring'
import VeWaterfall from './waterfall'
import VeFunnel from './funnel'
import VeRadar from './radar'
import VeChart from './chart'
import VeMap from './map'
import VeBmap from './bmap'

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

export {
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
