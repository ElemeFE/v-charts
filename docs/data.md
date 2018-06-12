# 数据

### 指标和维度

v-charts 的数据由指标和维度组成。以一组常见的数据为例：

| 日期 | 访问用户 | 下单用户 |
| :--: | --: | --: |
| 2018-05-22 | 32371 | 29810 |
| 2018-05-23 | 12328 | 11398 |
| 2018-05-24 | 92381 | 82910 |

“维度” 指的是数据的属性，例如表格中的 “日期” 维度，表示生成的每组数据的日期。

“指标” 是量化衡量标准，例如表格中的 “访问用户” 和 “下单用户”。

下面，以上面的这组数据为例绘制一个折线图：

<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户'],
          rows: [
            { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
            { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
            { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
          ]
        }
      }
    }
  }
</script>
</script>

### 设置指标维度

一种典型的 v-charts `data` 属性数据格式如下所示：

```js
{
  columns: ['日期', '访问用户', '下单用户'],
  rows: [
    { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
    { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
    { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
  ]
}
```

- columns 中是维度和指标的集合，v-charts 中的大部分图表都是单维度多指标，所以默认第一个值为
维度，剩余的值为指标
- rows 中是数据的集合。

图表的 setting 属性中统一有两个配置：

- dimension 用于指定维度
- metrics 用于指定指标

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        metrics: ['下单用户']
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户'],
          rows: [
            { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
            { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
            { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
          ]
        }
      }
    }
  }
</script>
</script>

### 设置指标的别名

某些情况下，数据中指标的名称并不是我们想要展示出来的，大部分图表的 setting 属性中提供
统一的配置来解决这个问题。

<vuep template="#set-alias"></vuep>

<script v-pre type="text/x-template" id="set-alias">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>
<script>
  export default {
    data () {
      this.chartSettings = {
        labelMap: {
          PV: '访问用户',
          Order: '下单用户'
        }
      }
      return {
        chartData: {
          columns: ['date', 'PV', 'Order'],
          rows: [
            { 'date': '2018-05-22', 'PV': 32371, 'Order': 19810 },
            { 'date': '2018-05-23', 'PV': 12328, 'Order': 4398 },
            { 'date': '2018-05-24', 'PV': 92381, 'Order': 52910 }
          ]
        }
      }
    }
  }
</script>
</script>


### 设置数据格式

大部分情况下，我们需要对数据进行一些格式化，每种图表组件对数据格式的设置方式略有不同。
例如 折线图使用 yAxisType, 饼图使用 dataType。基本的数据格式有 'normal' （千分位）、'KMB' （kmb 格式）、percent （百分比格式）；如果上述格式不能满足需求的话，还可以使用 [numerify](http://daxigua.me/numerify/) 的格式来配置显示，具体的格式支持和插件扩展写法可以参考
numerify 文档；并且，为了支持更多未知的情况，格式的设置也支持使用回调函数的方式。以上三种方式
的使用可以参考下面的示例。

#### 基本类型

<vuep template="#set-data-type"></vuep>

<script v-pre type="text/x-template" id="set-data-type">
<template>
  <ve-scatter :data="chartData" :settings="chartSettings"></ve-scatter>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dataType: {
          '访问用户': 'KMB',
          '年龄': 'percent',
          '下单用户': 'normal'
        }
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '年龄'],
          rows: {
            '上海': [
              { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
              { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
              { '日期': '1/3', '访问用户': 7123, '年龄': 9, '下单用户': 3245 },
              { '日期': '1/4', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
              { '日期': '1/5', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
              { '日期': '1/6', '访问用户': 2323, '年龄': 20, '下单用户': 6537 }
            ],
            '北京': [
              { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
              { '日期': '1/2', '访问用户': 1273, '年龄': 6, '下单用户': 2344 },
              { '日期': '1/3', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
              { '日期': '1/4', '访问用户': 2123, '年龄': 9, '下单用户': 3245 },
              { '日期': '1/5', '访问用户': 4103, '年龄': 12, '下单用户': 4355 },
              { '日期': '1/6', '访问用户': 7123, '年龄': 10, '下单用户': 3567 }
            ],
            '广州': [
              { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
              { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
              { '日期': '1/3', '访问用户': 2123, '年龄': 30, '下单用户': 3245 },
              { '日期': '1/5', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
              { '日期': '1/4', '访问用户': 5123, '年龄': 18, '下单用户': 4564 },
              { '日期': '1/6', '访问用户': 3843, '年龄': 30, '下单用户': 4850 }
            ]
          }
        }
      }
    }
  }
</script>
</script>

#### 使用 numerify 格式

<vuep template="#set-data-format"></vuep>

<script v-pre type="text/x-template" id="set-data-format">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>
<script>
  export default {
    data () {
      this.chartSettings = {
        yAxisType: ['0,0a']
      }
      return {
        chartData: {
          columns: ['date', 'PV', 'Order'],
          rows: [
            { 'date': '2018-05-22', 'PV': 32371, 'Order': 19810 },
            { 'date': '2018-05-23', 'PV': 12328, 'Order': 4398 },
            { 'date': '2018-05-24', 'PV': 92381, 'Order': 52910 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 使用回调函数


<vuep template="#data-type"></vuep>

<script v-pre type="text/x-template" id="data-type">
<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dataType: function (v) {
          return v + ' ￥'
        }
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

### 数据请求示例

<vuep template="#get-data"></vuep>

<script v-pre type="text/x-template" id="get-data">
<template>
  <div>
    <button @click="getData">get Data</button>
    <ve-line
      :data="chartData"
      :loading="loading"
      :data-empty="dataEmpty"
      :settings="chartSettings">
    </ve-line>
  </div>
</template>
<script>
  const DATA_FROM_BACKEND = {
    columns: ['date', 'PV', 'Order'],
    rows: [
      { 'date': '2018-05-22', 'PV': 32371, 'Order': 19810 },
      { 'date': '2018-05-23', 'PV': 12328, 'Order': 4398 },
      { 'date': '2018-05-24', 'PV': 92381, 'Order': 52910 }
    ]
  }
  const EMPTY_DATA = {
    columns: [],
    rows: []
  }
  export default {
    data () {
      this.chartSettings = {
        yAxisType: ['0,0a']
      }
      return {
        chartData: {
          columns: [],
          rows: []
        },
        loading: false,
        dataEmpty: false
      }
    },
    methods: {
      getData () {
        this.loading = true
        // ajax get data ....
        setTimeout(() => {
          this.chartData = this.chartData.rows.length
            ? EMPTY_DATA
            : DATA_FROM_BACKEND
          this.dataEmpty = !this.chartData.rows.length
          this.loading = false
        }, 1000)
      }
    },
    created () {
      this.getData()
    }
  }
</script>
</script>
