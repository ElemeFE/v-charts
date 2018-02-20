### 条形图

#### 示例

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/m1hdcmf4/10/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### 指定指标维度

<vuep template="#order-dimesion"></vuep>

<script v-pre type="text/x-template" id="order-dimesion">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润'],
        rows: [
          { '日期': '1月1号', '成本': 123, '利润': 3 },
          { '日期': '1月2号', '成本': 1223, '利润': 6 },
          { '日期': '1月3号', '成本': 2123, '利润': 90 },
          { '日期': '1月4号', '成本': 4123, '利润': 12 },
          { '日期': '1月5号', '成本': 3123, '利润': 15 },
          { '日期': '1月6号', '成本': 7123, '利润': 20 }
        ]
      }
      this.chartSettings = {
        dimension: ['成本'],
        metrics: ['利润']
      }
    }
  }
</script>
</script>

#### 排序条形图

<vuep template="#order-bar"></vuep>

<script v-pre type="text/x-template" id="order-bar">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润'],
        rows: [
          { '日期': '1月1号', '成本': 123, '利润': 3 },
          { '日期': '1月2号', '成本': 1223, '利润': 6 },
          { '日期': '1月3号', '成本': 2123, '利润': 90 },
          { '日期': '1月4号', '成本': 4123, '利润': 12 },
          { '日期': '1月5号', '成本': 3123, '利润': 15 },
          { '日期': '1月6号', '成本': 7123, '利润': 20 }
        ]
      }
      this.chartSettings = {
        metrics: ['利润'],
        dataOrder: {
          label: '利润',
          order: 'desc'
        }
      }
    }
  }
</script>
</script>

#### 条形轴配置双y轴

<vuep template="#double-yAxis"></vuep>

<script v-pre type="text/x-template" id="double-yAxis">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润'],
        rows: [
          { '日期': '1月1号', '成本': 123, '利润': 3 },
          { '日期': '1月2号', '成本': 1223, '利润': 6 },
          { '日期': '1月3号', '成本': 2123, '利润': 90 },
          { '日期': '1月4号', '成本': 4123, '利润': 12 },
          { '日期': '1月5号', '成本': 3123, '利润': 15 },
          { '日期': '1月6号', '成本': 7123, '利润': 20 }
        ]
      }
      this.chartSettings = {
        xAxisType: ['KMB', 'percent'],
        xAxisName: ['成本', '利润'],
        axisSite: {
          top: ['利润']
        }
      }
    }
  }
</script>
</script>

#### 设置legend别名

<vuep template="#stacked-bar"></vuep>

<script v-pre type="text/x-template" id="stacked-bar">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润'],
        rows: [
          { '日期': '1月1号', '成本': 123, '利润': 300 },
          { '日期': '1月2号', '成本': 1223, '利润': 600 },
          { '日期': '1月3号', '成本': 2123, '利润': 9000 },
          { '日期': '1月4号', '成本': 4123, '利润': 1200 },
          { '日期': '1月5号', '成本': 3123, '利润': 1500 },
          { '日期': '1月6号', '成本': 7123, '利润': 2000 }
        ]
      }
      this.chartSettings =  {
        legendName: {
          '成本': '成本biubiu～'
        }
      }
    }
  }
</script>
</script>

#### 堆叠条形图

<vuep template="#stacked-bar"></vuep>

<script v-pre type="text/x-template" id="stacked-bar">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润'],
        rows: [
          { '日期': '1月1号', '成本': 123, '利润': 300 },
          { '日期': '1月2号', '成本': 1223, '利润': 600 },
          { '日期': '1月3号', '成本': 2123, '利润': 9000 },
          { '日期': '1月4号', '成本': 4123, '利润': 1200 },
          { '日期': '1月5号', '成本': 3123, '利润': 1500 },
          { '日期': '1月6号', '成本': 7123, '利润': 2000 }
        ]
      }
      this.chartSettings =  {
        stack: {
          'xxx': ['成本', '利润']
        }
      }
    }
  }
</script>
</script>

#### 设置纵轴为连续的数值轴

<vuep template="#set-value-axis"></vuep>

<script v-pre type="text/x-template" id="set-value-axis">
<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
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
        yAxisType: 'value'
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
| xAxisType | 上下坐标轴数据类型 | Array | 可选值: KMB, normal, percent |
| xAxisName | 上下坐标轴标题 | Array | - |
| axisSite | 指标所在的轴 | Object | 默认不在top轴的指标都在bottom轴 |
| stack | 堆叠选项 | Object | - |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
| dataOrder | 设置数据排序方式 | Boolean, Object | 默认为false |
| scale | 是否是脱离 0 值比例 | Array | 默认为[false, false]，表示上下两个轴都不会脱离0值比例。设置成 true 后坐标刻度不会强制包含零刻度 |
| min | 上下坐标轴最小值 | Array | - |
| max | 上下坐标轴最大值 | Array | - |
| labelMap | 设置指标的别名，同时作用于提示框和图例| Object | - |
| legendName | 设置图表上方图例的别名 | Object | - |
| label | 设置图形上的文本标签 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-bar.label) |
| itemStyle | 图形样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-bar.itemStyle) |
| yAxisType | 纵轴的类型 | String | 可选值'category'，'value'，默认为'category' |
| opacity | 透明度 | Number | - |

> 备注1. axisSite 可以设置 top 和 bottom，例如示例所示 `axisSite: { top: ['占比'] }` 即将占比的数据置于上轴上。

> 备注2. stack 用于将两数据堆叠起来，例如实例中所示`stack: { '销售额': ['销售额-1季度', '销售额-2季度'] }` 即将'销售额-1季度', '销售额-2季度'相应的数据堆叠在一起。

> 备注3. dataOrder 用于设置数据的排序方式，用于更加清晰的展示数据的升降。例如： `{ label: '成本', order: 'asc }` 表示数据按照成本指标升序展示，降序为`desc`。

> 备注4. min和max的值可以直接设置为数字，例如：`[100, 300]`；也可以设置为`['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`，此时表示使用该坐标轴上的最小值或最大值为最小或最大刻度。

> 备注5. 为了优化连续的数值型横轴显示多指标的时候样式，在此情况下默认设置opacity为0.5。
