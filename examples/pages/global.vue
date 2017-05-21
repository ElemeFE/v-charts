<template>
  <div class="page-item">
    <div class="chart-item">
      <div class="chart-part">
        <h3>折线图</h3>
        <ve-line
          :data="chartData.data"
          :settings="{}"
          :grid="chartData.grid"
          :scale="chartData.scale"
          :colors="chartData.colors">
        </ve-line>
      </div>
      <div class="code-view">
        <p>数据格式</p>
        <div class="data-code">
          <pre class="language-javascript"><code class="language-javascript" v-html='getCode(chartData.data)'></code></pre>
        </div>
        <p>配置项</p>
        <div class="setting-code">
          <pre class="language-javascript"><code class="language-javascript" v-html='getCode(chartData.settings)'></code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VeLine from '../../src/line/index'
import globalData from '../data/global'

export default {
  name: 'Global',

  data () {
    return {
      chartData: {}
    }
  },

  methods: {
    init () {
      this.chartData = globalData
      const copyData = Object.assign({}, globalData)
      delete copyData.data
      this.chartData.settings = copyData
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
    VeLine
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
