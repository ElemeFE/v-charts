# 环图

#### 示例

<vuep template="#simple-ring"></vuep>

<script v-pre type="text/x-template" id="simple-ring">
<template>
  <ve-ring :data="chartData"></ve-ring>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置指标维度

<vuep template="#index-demision-ring"></vuep>

<script v-pre type="text/x-template" id="index-demision-ring">
<template>
  <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dimension: '日期',
        metrics: '访问用户'
      }
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 玫瑰图

<vuep template="#rose-ring"></vuep>

<script v-pre type="text/x-template" id="rose-ring">
<template>
  <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        roseType: 'radius'
      }
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 限制显示条数环图

<vuep template="#limit-number-ring"></vuep>

<script v-pre type="text/x-template" id="limit-number-ring">
<template>
  <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        limitShowNum: 3
      }
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置数据类型

<vuep template="#data-type-ring"></vuep>

<script v-pre type="text/x-template" id="data-type-ring">
<template>
  <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dataType: 'KMB'
      }
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置环图半径

<vuep template="#ring-style"></vuep>

<script v-pre type="text/x-template" id="ring-style">
<template>
  <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        radius: [10, 100],
        offsetY: 300
      }
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
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
| legendLimit | legend显示数量限制 | number | legend数量过多会导致环图样式错误，限制legend最大值并且当超过此值时，隐藏legend可以解决这个问题 |
| selectedMode | 	选中模式 | string | 可选值：single, multiple，默认为false |
| hoverAnimation | 是否开启 hover 在扇区上的放大动画效果 | boolean | 默认值为true |
| radius | 环图外半径与内半径 | array | - |
| offsetY | 	纵向偏移量 | number | - |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| roseType | 显示为南丁格尔玫瑰图 | string | 默认不展示为南丁格尔玫瑰图，可设置为`'radius', 'area'` |
| label | 环图图形上的文本标签 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-pie.label) |
| labelLine | 标签的视觉引导线样式 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-pie.labelLine) |
| itemStyle | 图形样式 | object | 内容参考[文档](http://echarts.baidu.com/option.html#series-pie.itemStyle)  |
| limitShowNum | 设置超过此数字时使用‘其他’代替 | number | 此时数据会按照由大到小顺序显示 |
