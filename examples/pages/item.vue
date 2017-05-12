<template>
  <div class="page-item">
    <h3>{{ title }}</h3>
    <code-section :content="codeList[0]"></code-section>
    <code-section :content="codeList[1]"></code-section>
    <p>基本用法</p>
    <component :is="`ve-${type}`" :data="chartData.base.data" :settings="chartData.base.settings"></component>
    <p>chartData</p>
    <code-section :content="chartData.base.data" json></code-section>
    <p>chartSettings</p>
    <code-section :content="chartData.base.settings" json></code-section>
    <p>可选配置项</p>
    <table>
      <thead>
        <tr>
          <th>配置项</th>
          <th>简介</th>
          <th>类型</th>
          <th>示例</th>
          <th>备注</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="property in chartData.properties" :key="property">
          <td>{{ property.name }}</td>
          <td>{{ property.intro }}</td>
          <td>{{ property.type }}</td>
          <td>{{ property.example }}</td>
          <td>{{ property.remark }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import VeBar from '../../src/bar/index'
import VeLine from '../../src/line/index'
import VeColumn from '../../src/bar/column'
import VePie from '../../src/pie/index'
import VeRing from '../../src/pie/ring'
import VeWaterfall from '../../src/waterfall/index'
import VeFunnel from '../../src/funnel/index'
import VeRadar from '../../src/radar/index'
import VeChart from '../../src/chart/index'
import chartData from '../data/index'
export default {
  name: 'Item',

  data () {
    return {
      chartData: [],
      type: null
    }
  },

  computed: {
    title () {
      return chartData[this.type] && chartData[this.type].name
    }
  },

  methods: {
    init () {
      this.type = this.$route.params.type
      this.chartData = chartData[this.type].data
      this.codeList = [
        `import Ve${this.fistLetterUpper(this.type)} from 'vue-echarts-components/lib/${this.type}'`,
        `<ve-${this.type} :data="chartData" :settings="chartSettings"></ve-${this.type}>`
      ]
    },

    getCode (code) {
      return JSON.stringify(code, null, 2)
    },

    fistLetterUpper (str = '') {
      return str.charAt(0).toUpperCase() + str.slice(1)
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

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;

    th, td {
      padding: 10px 20px 10px 0;
      text-align: left;
      cursor: pointer;
    }

    th {
      font-weight: normal;
    }

    tr {
      border-bottom: 1px solid #e6e6e6;
    }

    thead, tbody tr {
      display: table;
      width: 100%;
      table-layout: fixed;
    }

    tbody {
      display: block;
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>
