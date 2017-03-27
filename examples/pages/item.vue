<template>
  <div class="page-item">
    <div class="chart-item" v-for="d in chartData" :key="d">
      <div class="chart-part">
        <h3>{{ d.name }}</h3>
        <component :is="`ve-${type}`" :data="d.data" :settings="d.settings"></component>
      </div>
      <div class="code-view">
        <p>数据格式</p>
        <div class="data-code">
          <pre class="language-javascript"><code class="language-javascript" v-html='getCode(d.data)'></code></pre>
        </div>
        <p>配置项</p>
        <div class="setting-code">
          <pre class="language-javascript"><code class="language-javascript" v-html='getCode(d.settings)'></code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VeBar from '../../src/bar/index'
import VeLine from '../../src/line/index'
import VeColumn from '../../src/bar/column'
import VePie from '../../src/pie/index'
import VeRing from '../../src/pie/ring'
import VeWaterfall from '../../src/waterfall/index'
import VeScatter from '../../src/scatter/index'
import VeFunnel from '../../src/funnel/index'
import VeRadar from '../../src/radar/index'
import VeChart from '../../src/chart/index'

export default {
  name: 'Item',

  data () {
    return {
      chartData: [],
      type: null
    }
  },

  methods: {
    init () {
      this.type = this.$route.params.type
      this.chartData = this.$chartData[this.type].data
    },

    getCode (code) {
      return this.$Prism.highlight(JSON.stringify(code, null, 2), this.$Prism.languages.javascript)
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
    VeColumn,
    VePie,
    VeRing,
    VeWaterfall,
    VeScatter,
    VeFunnel,
    VeRadar,
    VeChart
  }
}
</script>

<style lang="less">
.page-item {
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
