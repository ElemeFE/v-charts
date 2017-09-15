### 饼图

#### 示例

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/tecfxdg9/13/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### 玫瑰图

<vuep template="#rose-pie"></vuep>

<script v-pre type="text/x-template" id="rose-pie">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 90 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
      }
      this.chartSettings = {
        roseType: 'radius'
      }
    }
  }
</script>
</script>

#### 限制显示条数饼图

<vuep template="#limited-number"></vuep>

<script v-pre type="text/x-template" id="limited-number">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 90 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
      }
      this.chartSettings = {
        limitShowNum: 5
      }
    }
  }
</script>
</script>

#### 多圆饼图

<vuep template="#mutiple-pie"></vuep>

<script v-pre type="text/x-template" id="mutiple-pie">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 9 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 },
          { '日期': '1-7', '余额': 4123, '年龄': 20 },
          { '日期': '1-8', '余额': 1123, '年龄': 20 },
          { '日期': '1-9', '余额': 5223, '年龄': 20 },
          { '日期': '1-10', '余额': 9123, '年龄': 20 },
          { '日期': '1-11', '余额': 4123, '年龄': 20 }
        ]
      }
      this.chartSettings = {
        level: [
          ['1-1', '1-2', '1-3'],
          ['1-4', '1-5']
        ]
      }
    }
  }
</script>
</script>

#### 设置数据类型

<vuep template="#data-type"></vuep>

<script v-pre type="text/x-template" id="data-type">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '比率'],
        rows: [
          { '日期': '1-1', '余额': 123, '比率': 0.00001 },
          { '日期': '1-2', '余额': 1223, '比率': 0.0002 },
          { '日期': '1-3', '余额': 2123, '比率': 0.003 },
          { '日期': '1-4', '余额': 4123, '比率': 0.0004 },
          { '日期': '1-5', '余额': 3123, '比率': 0.005 },
          { '日期': '1-6', '余额': 7123, '比率': 0.06 }
        ]
      }
      this.chartSettings = {
        dataType: 'percent',
        digit: 4
      }
    }
  }
</script>
</script>

#### 设置指标维度

<vuep template="#index-demision"></vuep>

<script v-pre type="text/x-template" id="index-demision">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 90 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
      }
      this.chartSettings = {
        dimension: '余额',
        metrics: '年龄'
      }
    }
  }
</script>
</script>

#### 限制legend显示长度

<vuep template="#limit-legend-length"></vuep>

<script v-pre type="text/x-template" id="limit-legend-length">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '余额', '比率'],
        rows: [
          { '日期': '1-1', '余额': 123, '比率': 0.1 },
          { '日期': '1-2', '余额': 1223, '比率': 0.2 },
          { '日期': '1-3', '余额': 2123, '比率': 0.3 },
          { '日期': '1-4', '余额': 4123, '比率': 0.4 },
          { '日期': '1-5', '余额': 3123, '比率': 0.5 },
          { '日期': '1-6', '余额': 7123, '比率': 0.6 }
        ]
      }
      this.chartSettings = {
        legendLimit: 2
      }
    }
  }
</script>
</script>

#### 设置饼图样式

<vuep template="#pie-style"></vuep>

<script v-pre type="text/x-template" id="pie-style">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '余额', '比率'],
        rows: [
          { '日期': '1-1', '余额': 123, '比率': 0.1 },
          { '日期': '1-2', '余额': 1223, '比率': 0.2 },
          { '日期': '1-3', '余额': 2123, '比率': 0.3 },
          { '日期': '1-4', '余额': 4123, '比率': 0.4 },
          { '日期': '1-5', '余额': 3123, '比率': 0.5 },
          { '日期': '1-6', '余额': 7123, '比率': 0.6 }
        ]
      }
      this.chartSettings = {
        radius: 10,
        offsetY: 300
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
| legendLimit | legend显示数量限制 | Number | legend数量过多会导致饼图样式错误，限制legend最大值并且当超过此值时隐藏legend可以解决这个问题 |
| selectedMode | 	选中模式 | String | 可选值：single, multiple，默认为false |
| hoverAnimation | 是否开启 hover 在扇区上的放大动画效果 | Boolean | 默认值为true |
| radius | 饼图半径 | Number | - |
| offsetY | 	纵向偏移量 | Number | - |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
| roseType | 显示为南丁格尔玫瑰图 | String | 默认不展示为南丁格尔玫瑰图，可设置为`'radius', 'area'` |
| label | 饼图图形上的文本标签 | Object | - |
| level | 多圆饼图时设置 | Array | - |
| limitShowNum | 设置超过此数字时使用‘其他’代替 | Number | - |

> 备注1. level 的值接受二维数组，例如：`[['a', 'b'], ['c', 'd']]`, 表示的含义是内层展示的是维度中的`'a', 'b'`的指标加在一起组成的饼图，外层为`'c', 'd'`的指标加在一起组成的环图。
