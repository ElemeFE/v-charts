import VeBar from './packages/bar'
import VeHistogram from './packages/histogram'
import VeLine from './packages/line'
import VePie from './packages/pie'
import VeRing from './packages/ring'
import VeWaterfall from './packages/waterfall'
import VeFunnel from './packages/funnel'
import VeRadar from './packages/radar'
import VeChart from './packages/chart'
import VeMap from './packages/map'
import VeBmap from './packages/bmap'
import VeAmap from './packages/amap'
import VeSankey from './packages/sankey'
import VeHeatmap from './packages/heatmap'
import VeScatter from './packages/scatter'
import VeCandle from './packages/candle'
import VeGauge from './packages/gauge'
import VeTree from './packages/tree'
import VeLiquidfill from './packages/liquidfill'
import VeWordcloud from './packages/wordcloud'

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
  VeAmap,
  VeSankey,
  VeHeatmap,
  VeScatter,
  VeCandle,
  VeGauge,
  VeTree,
  VeLiquidfill,
  VeWordcloud,
  install
}
