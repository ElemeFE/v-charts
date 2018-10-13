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
import VeAmap from '../amap'
import VeSankey from '../sankey'
import VeHeatmap from '../heatmap'
import VeScatter from '../scatter'
import VeCandle from '../candle'
import VeGauge from '../gauge'
import VeTree from '../tree'
import VeLiquidfill from '../liquidfill'
import VeWordcloud from '../wordcloud'

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
  VeBmap,
  VeAmap,
  VeSankey,
  VeHeatmap,
  VeScatter,
  VeCandle,
  VeGauge,
  VeTree,
  VeLiquidfill,
  VeWordcloud
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
  VeAmap,
  VeSankey,
  VeScatter,
  VeCandle,
  VeGauge,
  VeTree,
  VeLiquidfill,
  VeWordcloud,
  install
}
