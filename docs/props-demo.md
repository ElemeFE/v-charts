### 属性配置示例

#### 隐藏提示框与图例

<vuep template="#hide-tooltip-and-legend"></vuep>

<script v-pre type="text/x-template" id="hide-tooltip-and-legend">
<template>
  <ve-line
    :data="chartData"
    :tooltip-visible="false"
    :legend-visible="false">
  </ve-line>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润'],
        rows: [
          { '日期': '1月1日', '成本': 1523, '利润': 1231 },
          { '日期': '1月2日', '成本': 1223, '利润': 2523 },
          { '日期': '1月3日', '成本': 2123, '利润': 1000 },
          { '日期': '1月4日', '成本': 4123, '利润': 3223 },
          { '日期': '1月5日', '成本': 3123, '利润': 3023 },
          { '日期': '1月6日', '成本': 7123, '利润': 5523 }
        ]
      }
    }
  }
</script>
</script>

#### 设置图表容器样式

<vuep template="#set-grid"></vuep>

<script v-pre type="text/x-template" id="set-grid">
<template>
  <ve-line
    :data="chartData"
    :grid="grid">
  </ve-line>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润'],
        rows: [
          { '日期': '1月1日', '成本': 1523, '利润': 1231 },
          { '日期': '1月2日', '成本': 1223, '利润': 2523 },
          { '日期': '1月3日', '成本': 2123, '利润': 1000 },
          { '日期': '1月4日', '成本': 4123, '利润': 3223 },
          { '日期': '1月5日', '成本': 3123, '利润': 3023 },
          { '日期': '1月6日', '成本': 7123, '利润': 5523 }
        ]
      }
      this.grid = {
        show: true,
        top: 50,
        left: 10,
        backgroundColor: '#ccc',
        borderColor: '#000'
      }
    }
  }
</script>
</script>

#### 设置图表标线与标点

<vuep template="#set-mark"></vuep>

<script v-pre type="text/x-template" id="set-mark">
<template>
  <ve-line
    :data="chartData"
    :mark-line="markLine"
    :mark-point="markPoint">
  </ve-line>
</template>

<script>
  // 使用前需先引入对应模块
  // import 'echarts/lib/component/markLine'
  // import 'echarts/lib/component/markPoint'
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润'],
        rows: [
          { '日期': '1月1日', '成本': 1523, '利润': 1231 },
          { '日期': '1月2日', '成本': 1223, '利润': 2523 },
          { '日期': '1月3日', '成本': 2123, '利润': 1000 },
          { '日期': '1月4日', '成本': 4123, '利润': 3223 },
          { '日期': '1月5日', '成本': 3123, '利润': 3023 },
          { '日期': '1月6日', '成本': 7123, '利润': 5523 }
        ]
      }
      this.markLine = {
        data: [
          {
            name: '平均线',
            type: 'average'
          }
        ]
      }
      this.markPoint = {
        data: [
          {
            name: '最大值',
            type: 'max'
          }
        ]
      }
    }
  }
</script>
</script>

#### 设置视觉映射组件

<vuep template="#set-visual-map"></vuep>

<script v-pre type="text/x-template" id="set-visual-map">
<template>
  <ve-line
    :data="chartData"
    :grid="grid"
    :visual-map="visualMap">
  </ve-line>
</template>

<script>
  // 使用前需先引入对应模块
  // import 'echarts/lib/component/visualMap'
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.visualMap = [
        {
          type: 'piecewise',
          splitNumbwe: 5,
          min: 0,
          max: 60,
          right: 0,
          top: '50%'
        }
      ]
      this.grid = {
        right: 60
      }
    }
  }
</script>
</script>

#### 设置区域缩放组件

<vuep template="#set-data-zoom"></vuep>

<script v-pre type="text/x-template" id="set-data-zoom">
<template>
  <ve-line
    :data="chartData"
    :data-zoom="dataZoom">
  </ve-line>
</template>

<script>
  // 使用前需先引入对应模块
  // import 'echarts/lib/component/dataZoom'
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.dataZoom = [
        {
          type: 'slider',
          start: 0,
          end: 20
        }
      ]
    }
  }
</script>
</script>

#### 设置工具箱

<vuep template="#set-toolbox"></vuep>

<script v-pre type="text/x-template" id="set-toolbox">
<template>
  <ve-line
    :data="chartData"
    :toolbox="toolbox">
  </ve-line>
</template>

<script>
  // 使用前需先引入对应模块
  // import 'echarts/lib/component/toolbox'
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.toolbox = {
        feature: {
          magicType: {type: ['line', 'bar']},
          saveAsImage: {}
        }
      }
    }
  }
</script>
</script>

#### 修改颜色列表

<vuep template="#set-color"></vuep>

<script v-pre type="text/x-template" id="set-color">
<template>
  <ve-line
    :data="chartData"
    :colors="colors">
  </ve-line>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.colors = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
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
  module.exports = {
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
  module.exports = {
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
  module.exports = {
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
