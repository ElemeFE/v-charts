# 雷达图

#### 示例

<vuep template="#simple-radar"></vuep>

<script v-pre type="text/x-template" id="simple-radar">
<template>
  <ve-radar :data="chartData"></ve-radar>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置显示的指标维度

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dimension: ['日期'],
        metrics: ['访问用户', '下单用户', '下单率'],
        dataType: { '下单率': 'percent' }
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
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
  <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        labelMap: {
          '日期': 'date',
          '访问用户': 'PV',
          '下单用户': 'Order',
          '下单率': 'orderRate'
        }
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    }
  }
</script>
</script>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | string | 默认columns第一项为维度 |
| metrics | 指标 | array | 默认columns第二项起为指标 |
| dataType | 数据类型 | object | 可选值: KMB, normal, percent |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| label | 图形上的文本标签 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-radar.label) |
| itemStyle | 折线拐点标志的样式 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-radar.itemStyle) |
| lineStyle | 线条样式 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-radar.lineStyle) |
| areaStyle | 区域填充样式 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-radar.areaStyle)  |


> 备注：dataType中直接设置对应维度的数据类型，例如示例的`{ '占比': 'percent' }`，即将占比数据设置为百分比类型
