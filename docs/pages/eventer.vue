<template>
  <div class="page-eventer">
    <h3>事件监听</h3>
    <p>示例</p>
    <ve-pie
      :data="chartData"
      :settings="chartSettings"
      :events="events">
    </ve-pie>
    <div ref="box">被选中饼的名称: {{ name }}</div>
    <code-section :content="codeList[0]"></code-section>
    <code-section :content="codeList[1]"></code-section>
  </div>
</template>

<script>
import VePie from '../../src/pie/index'
import chartData from '../data/pie.js'

const CODE_LIST = [
  '<ve-pie :data="chartData" :events="events"></ve-pie>',
  'this.events = { click: (e) => { this.name = e.name } }'
]

export default {
  name: 'Eventer',

  data () {
    this.codeList = CODE_LIST
    return {
      name: '未选择'
    }
  },

  created () {
    this.chartData = chartData.data.base.data
    this.chartSettings = { selectedMode: 'single', hoverAnimation: false }
    this.events = {
      click: (e) => { this.name = e.name }
    }
  },

  components: { VePie }
}
</script>
