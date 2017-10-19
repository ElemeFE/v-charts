### 折线图

#### 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vue_echarts/jepw6dy2/67/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### 设置显示的指标维度

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
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
          { '成本': 4123, '日期': '1月4日', '利润': 1523, '占比': 0.31, '其他': 100 },
          { '成本': 3123, '日期': '1月5日', '利润': 1523, '占比': 0.12, '其他': 100 },
          { '成本': 7123, '日期': '1月6日', '利润': 1523, '占比': 0.65, '其他': 100 }
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
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
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
          { '日期': '1月4日', '成本': 4123, '利润': 1523, '占比': 0.31, '其他': 100 },
          { '日期': '1月5日', '成本': 3123, '利润': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月6日', '成本': 7123, '利润': 1523, '占比': 0.65, '其他': 100 }
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

#### 堆叠面积图

<vuep template="#stack-area"></vuep>

<script v-pre type="text/x-template" id="stack-area">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
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
          { '日期': '1月4日', '成本': 4123, '利润': 1523, '占比': 0.31, '其他': 100 },
          { '日期': '1月5日', '成本': 3123, '利润': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月6日', '成本': 7123, '利润': 1523, '占比': 0.65, '其他': 100 }
        ]
      }
      this.chartSettings = {
        stack: { '售价': ['成本', '利润'] },
        area: true
      }
    }
  }
</script>
</script>

#### 修改指标名称

<vuep template="#change-metrics-name"></vuep>

<script v-pre type="text/x-template" id="change-metrics-name">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['date', 'balance', 'age'],
        rows: [
          { 'date': '1月1日', 'balance': 123, 'age': 3 },
          { 'date': '1月2日', 'balance': 1223, 'age': 6 },
          { 'date': '1月3日', 'balance': 2123, 'age': 9 },
          { 'date': '1月4日', 'balance': 4123, 'age': 12 },
          { 'date': '1月5日', 'balance': 3123, 'age': 15 },
          { 'date': '1月6日', 'balance': 7123, 'age': 20 }
        ]
      }
      this.chartSettings = {
        labelMap: {
          balance: '余额',
          age: '年龄'
        }
      }
    }
  }
</script>
</script>

#### 显示指标数值

<vuep template="#show-metrics-value"></vuep>

<script v-pre type="text/x-template" id="show-metrics-value">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['date', 'balance', 'age'],
        rows: [
          { 'date': '1月1日', 'balance': 123, 'age': 3 },
          { 'date': '1月2日', 'balance': 1223, 'age': 6 },
          { 'date': '1月3日', 'balance': 2123, 'age': 9 },
          { 'date': '1月4日', 'balance': 4123, 'age': 12 },
          { 'date': '1月5日', 'balance': 3123, 'age': 15 },
          { 'date': '1月6日', 'balance': 7123, 'age': 20 }
        ]
      }
      this.chartSettings = {
        label: {
          normal: {
            show: true
          }
        }
      }
    }
  }
</script>
</script>

#### 设置横轴为连续的数值轴

<vuep template="#xAxis-type-value"></vuep>

<script v-pre type="text/x-template" id="xAxis-type-value">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['num', 'balance'],
        rows: [
          { 'num': 1, 'balance': 123 },
          { 'num': 10, 'balance': 1223 },
          { 'num': 11, 'balance': 2123 },
          { 'num': 100, 'balance': 4123 },
          { 'num': 101, 'balance': 6123 },
          { 'num': 120, 'balance': 7123 }
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
| xAxisType | 横轴的数据类型 | String | 可选值: category, value, time, log |
| yAxisType | 左右坐标轴数据类型 | Array | 可选值: KMB, normal, percent |
| yAxisName | 左右坐标轴标题 | Array | - |
| axisSite | 指标所在的轴 | Object | 默认不在right轴的指标都在left轴 |
| stack | 堆叠选项 | Object | - |
| area | 是否展示为面积图 | Boolean | 默认为false |
| scale | 是否是脱离 0 值比例 | Array | 默认为[false, false]，表示左右<br>两个轴都不会脱离0值比例。<br>设置成 true 后坐标刻度不会<br>强制包含零刻度<br> |
| min | 左右坐标轴最小值 | Array | - |
| max | 左右坐标轴最大值 | Array | - |
| nullAddZero | 空值补零 | Boolean | 设置为true后，如果数据中对应某项<br>为null或undefined，则在表格中补0 |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
| labelMap | 设置指标的别名，同时作用于提示框和图例 | Object | - |
| legendName | 设置图表上方图例的别名 | Object | - |
| label | 设置图形上的文本标签 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-line.label) |
| itemStyle | 设置折线拐点标志的样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-line.itemStyle) |
| lineStyle | 设置线条样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-line.lineStyle) |
| areaStyle | 设置区域填充样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-line.areaStyle) |

> 备注1. axisSite 可以设置 left 和 right，例如示例所示 `axisSite: { right: ['占比'] }` 即将占比的数据置于右轴上。

> 备注2. stack 用于将两数据堆叠起来，例如实例中所示`stack: { '销售额': ['成本', '利润'] }` 即将'成本', '利润'相应的数据堆叠在一起。

> 备注3. min和max的值可以直接设置为数字，例如：`[100, 300]`；也可以设置为`['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`，此时表示使用该坐标轴上的最小值或最大值为最小或最大刻度。
