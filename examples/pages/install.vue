<template>
  <div class="page-install">
    <div class="image">
      <img src="../static/logo.png" alt="logo">
    </div>
    <h3>安装</h3>
    <code-section :content="codeList[0]"></code-section>
    <h3>引入v-charts</h3>
    <code-section :content="codeList[1]"></code-section>
    <p>现有的图表种类有折线图(line)，饼图(pie)，条形图(bar)，柱状图(column)，环图(ring)，瀑布图(waterfall)，漏斗图(funnel)，雷达图(radar)。</p>
    <h3>在组件中使用</h3>
    <code-section :content="codeList[2]"></code-section>
    <h3>props</h3>
    <p>为了使数据更加简洁，v-charts接受的数据格式统一为：</p>
    <code-section :content="codeList[3]"></code-section>
    <p>其中，columns用于表示指标和维度名，rows为用于展示表格的具体数据。</p>
    <p>对于控制图表展示样式，则将这部分配置放到了settings内。</p>
  </div>
</template>

<script>
const CODE_LIST = [
  'npm install v-charts --save',
  'import VeLine from \'v-charts/lib/line\'',
  '<ve-line :data="chartData" :settings="chartSettings"></ve-line>',
  '{ columns: [], rows: [] }'
]
export default {
  data () {
    this.codeList = CODE_LIST
    return {}
  }
}
</script>

<style lang="less">
.page-install {
  .image {
    text-align: center;
  }

  img {
    width: 200px;
  }
}
</style>
