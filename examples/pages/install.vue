<template>
  <div class="page-install page-item">
    <h3>V-Charts</h3>
    <p>在使用echarts生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts的出现正是为了解决这个痛点。使用v-charts生成图表，只需要统一提供一种对前后端都友好的数据格式，设置简单的配置项，便可轻松生成常见的图表。</p>
    <h3>安装</h3>
    <code-section :content="codeList[0]"></code-section>
    <h3>加载v-charts</h3>
    <code-section :content="codeList[1]"></code-section>
    <p class="multi-tip">现有的图表种类有折线图(line)，饼图(pie)，条形图(bar)，柱状图(histogram)，环图(ring)，瀑布图(waterfall)，漏斗图(funnel)，雷达图(radar)。</p>
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
    example: false,
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
    intro: '为图表绑定事件',
    example: '{ click: function (e) { console.log(e) } }',
    remark: ''
  },
  {
    name: 'before-config',
    type: 'Function',
    intro: '对数据提前进行额外的处理',
    example: 'function (data) { /* do something */return data; }',
    remark: '在数据转化为配置项开始前触发，参数为data，需返回表格数据'
  },
  {
    name: 'after-config',
    type: 'Function',
    intro: '对生成好的echarts配置进行额外的处理',
    example: 'function (options) { /* do something */return options; }',
    remark: '在数据转化为配置项结束后触发，参数为options, 需返回echarts配置'
  }
]
export default {
  created () {
    this.codeList = CODE_LIST
    this.properties = PROPERTIES
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
