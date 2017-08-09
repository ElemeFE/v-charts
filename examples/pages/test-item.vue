<template>
  <div class="page-item-test">
    <div class="chart-item" v-for="d in chartData" :key="d">
      <div class="chart-part">
        <h3>{{ d.name }}</h3>
        <component
          :is="`ve-${innerType}`"
          :data="d.data"
          :settings="d.settings">
        </component>
      </div>
      <div class="code-view">
        <p>数据格式</p>
        <div class="data-code">
          <code-section :content="d.data" json></code-section>
        </div>
        <p>配置项</p>
        <div class="setting-code">
          <code-section :content="d.settings" json></code-section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VeBar from '../../src/bar/index'
import VeLine from '../../src/line/index'
import VeHistogram from '../../src/bar/histogram'
import VePie from '../../src/pie/index'
import VeRing from '../../src/pie/ring'
import VeWaterfall from '../../src/waterfall/index'
import VeFunnel from '../../src/funnel/index'
import VeRadar from '../../src/radar/index'
import VeChart from '../../src/chart/index'
import VeMap from '../../src/map/index'
import VeHeatmap from '../../src/heatmap/index'
import CHART_DATA from '../test-data'

export default {
  name: 'Item',

  data () {
    return {
      chartData: [],
      type: null,
      innerType: null
    }
  },

  methods: {
    init () {
      this.type = this.$route.params.type
      this.chartData = CHART_DATA[this.type].data
      this.innerType = CHART_DATA[this.type].type
    }
  },

  created () { this.init() },

  watch: {
    $route () {
      this.init()
    }
  },

  components: {
    VeBar,
    VeLine,
    VeHistogram,
    VePie,
    VeRing,
    VeWaterfall,
    VeFunnel,
    VeRadar,
    VeChart,
    VeMap,
    VeHeatmap
  }
}
</script>

<style lang="less">
.page-item-test {
  h3, p {
    margin: 0;
  }

  pre {
    height: 150px;
  }

  .chart-item {
    display: flex;
    padding: 15px;

    .chart-part {
      flex: 1;
    }

    .code-view {
      width: 400px;
      margin-left: 20px;
    }
  }
}
</style>
