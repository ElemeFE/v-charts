### 雷达图

#### 示例

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/jww5fqs8/11/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### 设置显示的指标维度

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
          { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
        ]
      }
      this.chartSettings = {
        dimension: ['日期'],
        metrics: ['销售额-1季度', '销售额-2季度', '占比'],
        dataType: { '占比': 'percent' }
      }
    }
  }
</script>
</script>

#### 修改指标名称

<vuep template="#change-metrics-name"></vuep>

<script v-pre type="text/x-template" id="change-metrics-name">
<template>
  <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
          { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
        ]
      }
      this.chartSettings = {
        labelMap: {
          '日期': 'date',
          '销售额-1季度': 'sales-1',
          '销售额-2季度': 'sales-2',
          '占比': 'percent',
          '其他': 'other'
        }
      }
    }
  }
</script>
</script>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | String | 默认columns第一项为维度 |
| metrics | 指标 | Array | 默认columns第二项起为指标 |
| dataType | 数据类型 | Object | 可选值: KMB, normal, percent |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
| label | 图形上的文本标签 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-radar.label) |
| itemStyle | 折线拐点标志的样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-radar.itemStyle) |
| lineStyle | 线条样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-radar.lineStyle) |
| areaStyle | 区域填充样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-radar.areaStyle)  |


> 备注：dataType中直接设置对应维度的数据类型，例如示例的`{ '占比': 'percent' }`，即将占比数据设置为百分比类型
