<template>
  <div class="page-item-test">
    <div class="chart-item" v-for="(d, i) in chartData" :key="i">
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
import VeIndex from '../../src/packages/index'
import CHART_DATA from '../data'

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

  components: VeIndex
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
