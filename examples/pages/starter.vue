<template>
  <div>
    <h3>开始使用</h3>
    <p>引入所需类型图表的组件</p>
    <code-section :content="codeList[0]"></code-section>
    <p>现有的图表种类有折线图(line)，饼图(pie)，条形图(bar)，柱状图(column)，环图(ring)，瀑布图(waterfall)，漏斗图(funnel)，雷达图(radar)</p>
  </div>
</template>

<script>
const CODE_LIST = [
  'import chart from \'vue-echarts-components/lib/chart\''
]
export default {
  data () {
    this.codeList = CODE_LIST
    return {}
  }
}
</script>
