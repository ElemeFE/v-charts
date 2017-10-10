### 柱状图

#### 示例

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/1Le0wps5/33/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### 设置显示的指标维度

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润', '占比', '其他'],
        rows: [
          { '成本': 1523, '日期': '1月1日', '利润': 1523, '占比': 0.12, '其他': 100 },
          { '成本': 1223, '日期': '1月2日', '利润': 1523, '占比': 0.345, '其他': 100 },
          { '成本': 2123, '日期': '1月3日', '利润': 1523, '占比': 0.7, '其他': 100 },
          { '成本': 4123, '日期': '1月4日', '利润': 1523, '占比': 0.31, '其他': 100 }
        ]
      }
      this.chartSettings = {
        metrics: ['成本', '利润'],
        dimension: ['日期']
      }
    }
  }
</script>
</script>

#### 设置双y轴

<vuep template="#set-double-y-axis"></vuep>

<script v-pre type="text/x-template" id="set-double-y-axis">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '成本': 1223, '利润': 1523, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '成本': 2123, '利润': 1523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '成本': 4123, '利润': 1523, '占比': 0.31, '其他': 100 }
        ]
      }
      this.chartSettings = {
        axisSite: { right: ['占比'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['数值', '比率']
      }
    }
  }
</script>
</script>

#### 柱状图+折线图

<vuep template="#histogram-line"></vuep>

<script v-pre type="text/x-template" id="histogram-line">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '成本': 1223, '利润': 1921, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '成本': 2123, '利润': 5523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '成本': 4123, '利润': 6523, '占比': 0.31, '其他': 100 }
        ]
      }
      this.chartSettings = {
        metrics: ['成本', '利润'],
        showLine: ['利润']
      }
    }
  }
</script>
</script>

#### 堆叠柱状图

<vuep template="#histogram-stack"></vuep>

<script v-pre type="text/x-template" id="histogram-stack">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '成本': 1223, '利润': 1921, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '成本': 2123, '利润': 5523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '成本': 4123, '利润': 6523, '占比': 0.31, '其他': 100 }
        ]
      }
      this.chartSettings = {
        metrics: ['成本', '利润'],
        stack: { '单价': ['成本', '利润'] }
      }
    }
  }
</script>
</script>

#### 默认显示柱状图数据

<vuep template="#show-data-default"></vuep>

<script v-pre type="text/x-template" id="show-data-default">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '成本': 1223, '利润': 1921, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '成本': 2123, '利润': 5523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '成本': 4123, '利润': 6523, '占比': 0.31, '其他': 100 }
        ]
      }
      this.chartSettings = {
        label: {
          normal: { show: true, position: "top" }
        }
      }
    }
  }
</script>
</script>

#### 修改指标名称

<vuep template="#change-metrics-name"></vuep>

<script v-pre type="text/x-template" id="change-metrics-name">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['date', 'resume', 'uplevel'],
        rows: [
          { 'date': '1-1', 'resume': 123, 'uplevel': 0.3 },
          { 'date': '1-2', 'resume': 1223, 'uplevel': 0.6 },
          { 'date': '1-3', 'resume': 2123, 'uplevel': 0.9 },
          { 'date': '1-4', 'resume': 4123, 'uplevel': 0.12 },
          { 'date': '1-5', 'resume': 3123, 'uplevel': 0.15 },
          { 'date': '1-6', 'resume': 7123, 'uplevel': 0.2 }
        ]
      }
      this.chartSettings = {
        labelMap: {
          resume: '余额',
          uplevel: '增长率'
        }
      }
    }
  }
</script>
</script>

#### 设置横轴为连续的数值轴

<vuep template="#set-value-axis"></vuep>

<script v-pre type="text/x-template" id="set-value-axis">
<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['date', 'resume', 'uplevel'],
        rows: [
          { 'date': 10, 'resume': 123, 'uplevel': 1213 },
          { 'date': 11, 'resume': 1223, 'uplevel': 3116 },
          { 'date': 12, 'resume': 2123, 'uplevel': 4119 },
          { 'date': 20, 'resume': 4123, 'uplevel': 1112 },
          { 'date': 21, 'resume': 3123, 'uplevel': 4115 },
          { 'date': 25, 'resume': 7123, 'uplevel': 1212 }
        ]
      }
      this.chartSettings = {
        xAxisType: 'value'
      }
    }
  }
</script>
</script>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | Array | 默认columns第一项为维度 |
| metrics | 指标 | Array | 默认columns第二项起为指标 |
| yAxisType | 左右坐标轴数据类型 | Array | 可选值: KMB, normal, percent |
| yAxisName | 左右坐标轴标题 | Array | - |
| axisSite | 指标所在的轴 | Object | 默认不在right轴的指标都在left轴 |
| stack | 堆叠选项 | Object | - |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
| dataOrder | 设置数据排序方式 | Boolean, Object | 默认为false |
| scale | 是否是脱离 0 值比例 | Array | 默认为[false, false]，表示左右<br>两个轴都不会脱离0值比例。<br>设置成 true 后坐标刻度不会<br>强制包含零刻度<br> |
| min | 左右坐标轴最小值 | Array | - |
| max | 左右坐标轴最大值 | Array | - |
| labelMap | 设置指标的别名，同时作用于提示框和图例| Object | - |
| legendName | 设置图表上方图例的别名 | Object | - |
| label | 设置图形上的文本标签 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-bar.label) |
| itemStyle | 图形样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-bar.itemStyle) |
| showLine | 展示为折线图的指标 | Array | - |
| xAxisType | 横轴的类型 | String | 可选值'category'，'value'，默认为'category' |
| opacity | 透明度 | Number | - |

> 备注1. axisSite 可以设置 left 和 right，例如示例所示 `axisSite: { right: ['占比'] }` 即将占比的数据置于右轴上。

> 备注2. stack 用于将两数据堆叠起来，例如实例中所示`stack: { '销售额': ['销售额-1季度', '销售额-2季度'] }` 即将'销售额-1季度', '销售额-2季度'相应的数据堆叠在一起。

> 备注3. dataOrder 用于设置数据的排序方式，用于更加清晰的展示数据的升降。例如： `{ label: '余额', order: 'asc }` 表示数据按照余额指标升序展示，降序为`desc`。

> 备注4. min和max的值可以直接设置为数字，例如：`[100, 300]`；也可以设置为`['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`，此时表示使用该坐标轴上的最小值或最大值为最小或最大刻度。

> 备注5. 有时我们需要将折线图与柱状图展示在同一个图上，利用showLine属性可以设置需要展示为折线图的指标，其他的指标则使用柱状图展示。

> 备注6. 为了优化连续的数值型横轴显示多指标的时候样式，在此情况下默认设置opacity为0.5。
