### 漏斗图

#### 示例

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/3hx08359/4/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### 指定指标维度

<vuep template="#custom-demision-funnel"></vuep>

<script v-pre type="text/x-template" id="custom-demision-funnel">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['状态', '状态1', '数值'],
        rows: [
          { '状态': '展示', '状态1': '展示1', '数值': 900 },
          { '状态': '访问', '状态1': '访问1', '数值': 600 },
          { '状态': '点击', '状态1': '点击1', '数值': 300 },
          { '状态': '订单', '状态1': '订单1', '数值': 100 }
        ]
      }
      this.chartSettings = {
        dimension: '状态1',
        metrics: '数值'
      }
    }
  }
</script>
</script>

#### 定制顺序漏斗图

<vuep template="#custom-order-funnel"></vuep>

<script v-pre type="text/x-template" id="custom-order-funnel">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['状态', '数值'],
        rows: [
          { '状态': '展示', '数值': 900 },
          { '状态': '访问', '数值': 600 },
          { '状态': '点击', '数值': 300 },
          { '状态': '订单', '数值': 100 }
        ]
      },
      this.chartSettings = {
        sequence: ['订单', '点击', '访问', '展示']
      }
    }
  }
</script>
</script>

#### 指定数据类型漏斗图

<vuep template="#custom-datatype-funnel"></vuep>

<script v-pre type="text/x-template" id="custom-datatype-funnel">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['状态', '数值'],
        rows: [
          { '状态': '展示', '数值': 0.9 },
          { '状态': '访问', '数值': 0.6 },
          { '状态': '点击', '数值': 0.3 },
          { '状态': '订单', '数值': 0.1 }
        ]
      },
      this.chartSettings = {
        dataType: 'percent'
      }
    }
  }
</script>
</script>

#### 修改legend别名漏斗图

<vuep template="#change-legend-name"></vuep>

<script v-pre type="text/x-template" id="change-legend-name">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['状态', '数值'],
        rows: [
          { '状态': '展示', '数值': 0.9 },
          { '状态': '访问', '数值': 0.6 },
          { '状态': '点击', '数值': 0.3 },
          { '状态': '订单', '数值': 0.1 }
        ]
      },
      this.chartSettings = {
        legendName: {
          '订单': '订单biubiu～'
        }
      }
    }
  }
</script>
</script>

#### 金字塔

<vuep template="#pyramid-funnel"></vuep>

<script v-pre type="text/x-template" id="pyramid-funnel">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['状态', '数值'],
        rows: [
          { '状态': '展示', '数值': 900 },
          { '状态': '访问', '数值': 600 },
          { '状态': '点击', '数值': 300 },
          { '状态': '订单', '数值': 100 }
        ]
      },
      this.chartSettings = {
        ascending: true
      }
    }
  }
</script>
</script>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | String | 默认columns第一项为维度 |
| metrics | 指标 | String | 默认columns第二项为指标 |
| dataType | 数据类型 | String | 可选值: KMB, normal, percent |
| sequence | 数据显示顺序 | Array | 默认按照数据大小顺序 |
| ascending | 是否显示为金字塔 | Boolean | 默认为false |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
| label | 设置文本标签样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-funnel.label) |
| labelLine | 设置标签的视觉引导线样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-funnel.labelLine) |
| itemStyle | 设置图形样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-funnel.itemStyle) |
