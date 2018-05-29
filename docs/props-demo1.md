# 属性配置示例（1）

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
  export default {
    data () {
      return {
        chartData: {
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
  export default {
    data () {
      this.grid = {
        show: true,
        top: 50,
        left: 10,
        backgroundColor: '#ccc',
        borderColor: '#000'
      }
      return {
        chartData: {
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
  export default {
    data () {
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
      return {
        chartData: {
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
  export default {
    data () {
      this.visualMap = [
        {
          type: 'piecewise',
          splitNumber: 5,
          min: 0,
          max: 60,
          right: 0,
          top: '50%'
        }
      ]
      this.grid = {
        right: 60
      }
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
  export default {
    data () {
      this.dataZoom = [
        {
          type: 'slider',
          start: 0,
          end: 20
        }
      ]
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
  export default {
    data () {
      this.toolbox = {
        feature: {
          magicType: {type: ['line', 'bar']},
          saveAsImage: {}
        }
      }
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
  export default {
    data () {
      this.colors = ['#c23531','#2f4554', '#61a0a8',
        '#d48265', '#91c7ae','#749f83', 
        '#ca8622', '#bda29a','#6e7074',
        '#546570', '#c4ccd3']
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
