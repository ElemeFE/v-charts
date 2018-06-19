# 漏斗图

#### 示例

<vuep template="#simple-funnel"></vuep>

<script v-pre type="text/x-template" id="simple-funnel">
<template>
  <ve-funnel :data="chartData"></ve-funnel>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['状态', '数值'],
          rows: [
            { '状态': '展示', '数值': 900 },
            { '状态': '访问', '数值': 600 },
            { '状态': '点击', '数值': 300 },
            { '状态': '订单', '数值': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 指定指标维度

<vuep template="#custom-demision-funnel"></vuep>

<script v-pre type="text/x-template" id="custom-demision-funnel">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dimension: '状态1',
        metrics: '数值'
      }
      return {
        chartData: {
          columns: ['状态', '状态1', '数值'],
          rows: [
            { '状态': '展示', '状态1': '展示1', '数值': 900 },
            { '状态': '访问', '状态1': '访问1', '数值': 600 },
            { '状态': '点击', '状态1': '点击1', '数值': 300 },
            { '状态': '订单', '状态1': '订单1', '数值': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 自动按照数值排序并过滤0值

<vuep template="#use-default-filter"></vuep>

<script v-pre type="text/x-template" id="use-default-filter">
<template>
  <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        useDefaultOrder: true,
        filterZero: true
      }
      return {
        chartData: {
          columns: ['状态', '数值'],
          rows: [
            { '状态': '展示', '数值': 900 },
            { '状态': '访问', '数值': 100 },
            { '状态': '零', '数值': 0 },
            { '状态': '点击', '数值': 300 },
            { '状态': '订单', '数值': 200 }
          ]
        }
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
  export default {
    data () {
      this.chartSettings = {
        sequence: ['订单', '点击', '访问', '展示']
      }
      return {
        chartData: {
          columns: ['状态', '数值'],
          rows: [
            { '状态': '展示', '数值': 900 },
            { '状态': '访问', '数值': 600 },
            { '状态': '点击', '数值': 300 },
            { '状态': '订单', '数值': 100 }
          ]
        }
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
  export default {
    data () {
      this.chartSettings = {
        dataType: 'percent'
      }
      return {
        chartData: {
          columns: ['状态', '数值'],
          rows: [
            { '状态': '展示', '数值': 0.9 },
            { '状态': '访问', '数值': 0.6 },
            { '状态': '点击', '数值': 0.3 },
            { '状态': '订单', '数值': 0.1 }
          ]
        }
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
  export default {
    data () {
      this.chartSettings = {
        legendName: {
          '订单': '订单 total:1000'
        }
      }
      return {
        chartData: {
          columns: ['状态', '数值'],
          rows: [
            { '状态': '展示', '数值': 0.9 },
            { '状态': '访问', '数值': 0.6 },
            { '状态': '点击', '数值': 0.3 },
            { '状态': '订单', '数值': 0.1 }
          ]
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
  export default {
    data () {
      this.chartSettings = {
        ascending: true
      }
      return {
        chartData: {
          columns: ['状态', '数值'],
          rows: [
            { '状态': '展示', '数值': 900 },
            { '状态': '访问', '数值': 600 },
            { '状态': '点击', '数值': 300 },
            { '状态': '订单', '数值': 100 }
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
| dataType | 数据类型 | string | 可选值: KMB, normal, percent |
| sequence | 数据显示顺序 | array | 默认按照数据大小顺序 |
| ascending | 是否显示为金字塔 | boolean | 默认为false |
| useDefaultOrder | 是否自动按照数值大小排序 | boolean | 默认为false |
| filterZero | 是否过滤指标为0的数据 | boolean | 默认为false |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| label | 设置文本标签样式 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-funnel.label) |
| labelLine | 设置标签的视觉引导线样式 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-funnel.labelLine) |
| itemStyle | 设置图形样式 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-funnel.itemStyle) |
