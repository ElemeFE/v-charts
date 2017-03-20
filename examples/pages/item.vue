<template>
  <div class="page-bar">
    <div class="chart-item" v-for="d in chartData" :key="d">
      <h3>{{ d.name }}</h3>
      <component :is="`ve-${type}`" :data="d.data" :settings="d.settings"></component>
      <div class="code-view">
        <p>数据格式</p>
        <div class="data-code">
          <pre class="language-javascript"><code class="language-javascript" v-html='getCode(d.data)'></code></pre>
        </div>
        <p>配置</p>
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
    VeRadar
  }
}
</script>
