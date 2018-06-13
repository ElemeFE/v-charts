# 属性配置示例（2）

#### 设置extend配置项

<vuep template="#extend"></vuep>

<script v-pre type="text/x-template" id="extend">
<template>
  <ve-histogram
    :data="chartData"
    :extend="chartExtend">
  </ve-histogram>
</template>

<script>
  export default {
    data () {
      this.chartExtend = {
        series (v) {
          v.forEach(i => {
            i.barWidth = 10
          })
          return v
        },
        tooltip (v) {
          v.trigger = 'none'
          return v
        }
      }
      /* 等同于
        this.chartExtend = {
          series: {
            barWidth: 10
          },
          tooltip: {
            trigger: 'none'
          }
        }
        等同于
        this.chartExtend = {
          'series.0.barWidth': 10,
          'series.1.barWidth': 10,
          'tooltip.trigger': 'none'
        }
      */
      return {
        chartData: {
          columns: ['日期', '成本', '利润'],
          rows: [
            { '日期': '1月1日', '成本': 15, '利润': 12 },
            { '日期': '1月2日', '成本': 12, '利润': 25 },
            { '日期': '1月3日', '成本': 21, '利润': 10 },
            { '日期': '1月4日', '成本': 41, '利润': 32 },
            { '日期': '1月5日', '成本': 31, '利润': 30 },
            { '日期': '1月6日', '成本': 71, '利润': 55 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置afterConfig函数

<vuep template="#afterconfig"></vuep>

<script v-pre type="text/x-template" id="afterconfig">
<template>
  <ve-line
    :data="chartData"
    :after-config="afterConfig">
  </ve-line>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['日期', '成本', '利润'],
          rows: [
            { '日期': '1月1日', '成本': 15, '利润': 12 },
            { '日期': '1月2日', '成本': 12, '利润': 25 },
            { '日期': '1月3日', '成本': 21, '利润': 10 },
            { '日期': '1月4日', '成本': 41, '利润': 32 },
            { '日期': '1月5日', '成本': 31, '利润': 30 },
            { '日期': '1月6日', '成本': 71, '利润': 55 }
          ]
        }
      }
    },
    methods: {
      afterConfig (options) {
        options.tooltip.showDelay = 500
        return options
      }
    }
  }
</script>
</script>

#### 设置加载状态

<vuep template="#set-loading"></vuep>

<script v-pre type="text/x-template" id="set-loading">
<template>
  <ve-line
    :data="chartData"
    :loading="loading">
  </ve-line>
</template>

<script>
  // 使用loading属性前先引入css
  // import 'v-charts/lib/style.css'
  export default {
    data () {
      return {
        chartData: {
          columns: ['日期', '成本', '利润'],
          rows: [
            { '日期': '1月1日', '成本': 15, '利润': 12 },
            { '日期': '1月2日', '成本': 12, '利润': 25 },
            { '日期': '1月3日', '成本': 21, '利润': 10 },
            { '日期': '1月4日', '成本': 41, '利润': 32 },
            { '日期': '1月5日', '成本': 31, '利润': 30 },
            { '日期': '1月6日', '成本': 71, '利润': 55 }
          ]
        },
        loading: true
      }
    }
  }
</script>
</script>

#### 设置暂无数据状态

<vuep template="#set-data-empty"></vuep>

<script v-pre type="text/x-template" id="set-data-empty">
<template>
  <ve-line
    :data="chartData"
    :data-empty="dataEmpty">
  </ve-line>
</template>

<script>
  // 使用data-empty属性前先引入css
  // import 'v-charts/lib/style.css'
  export default {
    data () {
      return {
        chartData: {
          columns: ['日期', '成本', '利润'],
          rows: []
        },
        dataEmpty: true
      }
    }
  }
</script>
</script>

#### 增加自定义内容

<vuep template="#set-content"></vuep>

<script v-pre type="text/x-template" id="set-content">
<style>
.data-empty {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .7);
  color: #888;
  font-size: 14px;
}
</style>

<template>
  <ve-line
    :data="chartData">
    <div class="data-empty">没有数据😂</div>
  </ve-line>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['日期', '成本', '利润'],
          rows: []
        }
      }
    }
  }
</script>
</script>
