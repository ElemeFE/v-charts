<template>
  <div class="page-install page-item">
    <div class="image">
      <img src="../static/logo.png" alt="logo">
    </div>
    <h3>安装</h3>
    <code-section :content="codeList[0]"></code-section>
    <h3>加载v-charts</h3>
    <code-section :content="codeList[1]"></code-section>
    <p class="multi-tip">现有的图表种类有折线图(line)，饼图(pie)，条形图(bar)，柱状图(column)，环图(ring)，瀑布图(waterfall)，漏斗图(funnel)，雷达图(radar)。</p>
    <h3>属性</h3>
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
        <tr v-for="property in properties" :key="property">
          <td>{{ property.name }}</td>
          <td>{{ property.intro }}</td>
          <td>{{ property.type }}</td>
          <td><code-section json :content="property.example"></code-section></td>
          <td>{{ property.remark }}</td>
        </tr>
      </tbody>
    </table>
    <h3>事件</h3>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>简介</th>
          <th>触发时间</th>
          <th>参数</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fn in fns" :key="fn">
          <td>{{ fn.name }}</td>
          <td>{{ fn.intro }}</td>
          <td>{{ fn.time }}</td>
          <td>{{ fn.props }}</td>
          <td>{{ fn.return }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const CODE_LIST = [
  'npm install v-charts --save',
  'import VeLine from \'v-charts/lib/line\'',
  '<ve-line :data="chartData" :settings="chartSettings"></ve-line>',
  '{ columns: [], rows: [] }'
]
const PROPERTIES = [
  {
    name: 'data',
    type: 'Object',
    intro: '图表数据',
    example: {
      columns: ['日期', '降雨量'],
      rows: [{ '日期': '1月1日', '降雨量': '12.1' }]
    },
    remark: 'columns代表指标和维度名称， rows为数据内容'
  },
  {
    name: 'settings',
    type: 'Object',
    intro: '图表配置项',
    example: {
      yAxisType: ['KMB', 'percent']
    },
    remark: ''
  },
  {
    name: 'colors',
    type: 'Array',
    intro: '颜色列表',
    example: ['#19d4ae', '#5ab1ef', '#fa6e86', '#ffb980', '#0067a6', '#c4b4e4'],
    remark: ''
  },
  {
    name: 'tooltip',
    type: 'Boolean',
    intro: '是否显示提示框',
    example: 'false',
    remark: '默认为true'
  },
  {
    name: 'grid',
    type: 'Object',
    intro: '网格配置',
    example: { left: 20, right: 20 },
    remark: '更多的配置参考http://echarts.baidu.com/option.html#grid'
  },
  {
    name: 'scale',
    type: 'Object',
    intro: '是否是脱离 0 值比例',
    example: { x: true, y: true },
    remark: '设置成 true 后坐标刻度不会强制包含零刻度，默认都是false'
  },
  {
    name: 'events',
    type: 'Object',
    intro: '向图表绑定事件',
    example: '',
    remark: ''
  }
]
const FNS = [
  {
    name: 'beforeConfig',
    intro: '对数据提前进行额外的处理',
    time: '在数据转化为配置项开始前',
    props: 'data(预先传入的数据)',
    return: '返回处理好的数据'
  },
  {
    name: 'afterConfig',
    intro: '对生成好的echarts配置进行额外的处理',
    time: '在数据转化为配置项结束后',
    props: 'options(echarts配置)',
    return: '返回处理好的echarts配置'
  }
]
export default {
  created () {
    this.codeList = CODE_LIST
    this.properties = PROPERTIES
    this.fns = FNS
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
