<template>
  <div>
    <h3>安装</h3>
    <code-section :content="codeList[0]"></code-section>
    <h3>引入v-charts</h3>
    <code-section :content="codeList[1]"></code-section>
    <p>现有的图表种类有折线图(line)，饼图(pie)，条形图(bar)，柱状图(histogram)，环图(ring)，瀑布图(waterfall)，漏斗图(funnel)，雷达图(radar)</p>
  </div>
</template>

<script>
const CODE_LIST = [
  'npm install v-charts --save',
  'import chart from \'v-charts/lib/chart\''
]
export default {
  data () {
    this.codeList = CODE_LIST
    return {}
  }
}
</script>
