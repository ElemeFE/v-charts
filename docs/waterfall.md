### 瀑布图

#### 示例

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/tecfxdg9/23/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### 设置指标维度

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-waterfall :data="chartData" :settings="chartSettings"></ve-waterfall>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 4 },
          { '活动': '睡觉', '时间': 10 },
          { '活动': '打豆豆', '时间': 5 }
        ]
      }
      this.chartSettings = {
        dimension: '活动',
        metrics: '时间'
      }
    }
  }
</script>
</script>

#### 设置数据类型

<vuep template="#set-data-type"></vuep>

<script v-pre type="text/x-template" id="set-data-type">
<template>
  <ve-waterfall :data="chartData" :settings="chartSettings"></ve-waterfall>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 0.1 },
          { '活动': '睡觉', '时间': 0.2 },
          { '活动': '打豆豆', '时间': 0.3 }
        ]
      }
      this.chartSettings = {
        "dataType": "percent"
      }
    }
  }
</script>
</script>

#### 修改指标名称

<vuep template="#change-metrics-name"></vuep>

<script v-pre type="text/x-template" id="change-metrics-name">
<template>
  <ve-waterfall :data="chartData" :settings="chartSettings"></ve-waterfall>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 0.1 },
          { '活动': '睡觉', '时间': 0.2 },
          { '活动': '打豆豆', '时间': 0.3 }
        ]
      }
      this.chartSettings = {
        labelMap: {
          '时间': 'time'
        }
      }
    }
  }
</script>
</script>

#### 设置 总计、剩余 的名称

<vuep template="#set-label"></vuep>

<script v-pre type="text/x-template" id="set-label">
<template>
  <ve-waterfall :data="chartData" :settings="chartSettings"></ve-waterfall>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 4 },
          { '活动': '睡觉', '时间': 10 },
          { '活动': '打豆豆', '时间': 5 }
        ]
      }
      this.chartSettings = {
        totalNum: 24,
        totalName: '总时间',
        remainName: '剩余时间'
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
| totalNum | 总量 | Number | 默认瀑布图总量为所有数据的和 |
| totalName | 总量的显示文案 | String | 默认显示总计 |
| remainName | 剩余的显示文案 | String | 默认显示其他 |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
