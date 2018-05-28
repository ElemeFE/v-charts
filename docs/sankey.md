# 桑基图

#### 示例

<vuep template="#simple-sankey"></vuep>

<script v-pre type="text/x-template" id="simple-sankey">
<template>
  <ve-sankey :data="chartData" :settings="chartSettings"></ve-sankey>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        links: [
          { source: '首页', target: '列表页a', value: 0.5 },
          { source: '首页', target: '列表页b', value: 0.5 },
          { source: '列表页a', target: '内容页a-1', value: 0.1 },
          { source: '列表页a', target: '内容页a-2', value: 0.4 },
          { source: '列表页b', target: '内容页b-1', value: 0.2 },
          { source: '列表页b', target: '内容页b-2', value: 0.3 }
        ]
      }
      return {
        chartData: {
          columns: ['页面', '访问量'],
          rows: [
            { '页面': '首页', '访问量': 100000 },
            { '页面': '列表页a', '访问量': 20000 },
            { '页面': '列表页b', '访问量': 80000 },
            { '页面': '内容页a-1', '访问量': 10000 },
            { '页面': '内容页a-2', '访问量': 10000 },
            { '页面': '内容页b-1', '访问量': 60000 },
            { '页面': '内容页b-2', '访问量': 20000 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置数据类型

<vuep template="#set-data-type"></vuep>

<script v-pre type="text/x-template" id="set-data-type">
<template>
  <ve-sankey :data="chartData" :settings="chartSettings"></ve-sankey>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        links: [
          { source: '首页', target: '列表页a', value: 0.5 },
          { source: '首页', target: '列表页b', value: 0.5 },
          { source: '列表页a', target: '内容页a-1', value: 0.1 },
          { source: '列表页a', target: '内容页a-2', value: 0.4 },
          { source: '列表页b', target: '内容页b-1', value: 0.2 },
          { source: '列表页b', target: '内容页b-2', value: 0.3 }
        ],
        dataType: ['KMB', 'percent']
      }
      return {
        chartData: {
          columns: ['页面', '访问量'],
          rows: [
            { '页面': '首页', '访问量': 100000 },
            { '页面': '列表页a', '访问量': 20000 },
            { '页面': '列表页b', '访问量': 80000 },
            { '页面': '内容页a-1', '访问量': 10000 },
            { '页面': '内容页a-2', '访问量': 10000 },
            { '页面': '内容页b-1', '访问量': 60000 },
            { '页面': '内容页b-2', '访问量': 20000 }
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
| metrics | 指标 | string | 默认columns第二项为指标 |
| dataType | 数据类型 | array | 数组的第一项为item的数据类型，<br>第二项为line的数据类型，<br>可选值: KMB, normal, percent |
| links | 节点间的关系数据 | array | 内容参考[文档](http://echarts.baidu.com/option.html#series-sankey.links) |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| label | 每个矩形节点中文本标签的样式 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-sankey.label) |
| itemStyle | 节点矩形的样式 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-sankey.itemStyle) |
| lineStyle | 桑基图边的样式 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-sankey.lineStyle) |
