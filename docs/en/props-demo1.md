# Attribute demos（1）

#### hide tooltip and legend

<vuep template="#hide-tooltip-and-legend-1"></vuep>

<script v-pre type="text/x-template" id="hide-tooltip-and-legend-1">
<template>
  <ve-line
    :data="chartData"
    :tooltip-visible="false"
    :legend-visible="false">
  </ve-line>
</template>

<script>
  export default {
    created: function () {
      this.chartData = {
        columns: ['date', 'cost', 'profit'],
        rows: [
          { 'date': '01/01', 'cost': 1523, 'profit': 1231 },
          { 'date': '01/02', 'cost': 1223, 'profit': 2523 },
          { 'date': '01/03', 'cost': 2123, 'profit': 1000 },
          { 'date': '01/04', 'cost': 4123, 'profit': 3223 },
          { 'date': '01/05', 'cost': 3123, 'profit': 3023 },
          { 'date': '01/06', 'cost': 7123, 'profit': 5523 }
        ]
      }
    }
  }
</script>
</script>

#### set chart grid

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
    created: function () {
      this.chartData = {
        columns: ['date', 'cost', 'profit'],
        rows: [
          { 'date': '01/01', 'cost': 1523, 'profit': 1231 },
          { 'date': '01/02', 'cost': 1223, 'profit': 2523 },
          { 'date': '01/03', 'cost': 2123, 'profit': 1000 },
          { 'date': '01/04', 'cost': 4123, 'profit': 3223 },
          { 'date': '01/05', 'cost': 3123, 'profit': 3023 },
          { 'date': '01/06', 'cost': 7123, 'profit': 5523 }
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

#### set markLine and markPoint

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
  // import modules first
  // import 'echarts/lib/component/markLine'
  // import 'echarts/lib/component/markPoint'
  export default {
    created: function () {
      this.chartData = {
        columns: ['date', 'cost', 'profit'],
        rows: [
          { 'date': '01/01', 'cost': 1523, 'profit': 1231 },
          { 'date': '01/02', 'cost': 1223, 'profit': 2523 },
          { 'date': '01/03', 'cost': 2123, 'profit': 1000 },
          { 'date': '01/04', 'cost': 4123, 'profit': 3223 },
          { 'date': '01/05', 'cost': 3123, 'profit': 3023 },
          { 'date': '01/06', 'cost': 7123, 'profit': 5523 }
        ]
      }
      this.markLine = {
        data: [
          {
            name: 'average',
            type: 'average'
          }
        ]
      }
      this.markPoint = {
        data: [
          {
            name: 'max',
            type: 'max'
          }
        ]
      }
    }
  }
</script>
</script>

#### set visualMap

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
  // import modules first
  // import 'echarts/lib/component/visualMap'
  export default {
    created: function () {
      this.chartData = {
        columns: ['date', 'cost', 'profit'],
        rows: [
          { 'date': '01/01', 'cost': 15, 'profit': 12 },
          { 'date': '01/02', 'cost': 12, 'profit': 25 },
          { 'date': '01/03', 'cost': 21, 'profit': 10 },
          { 'date': '01/04', 'cost': 41, 'profit': 32 },
          { 'date': '01/05', 'cost': 31, 'profit': 30 },
          { 'date': '01/06', 'cost': 71, 'profit': 55 }
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

#### set dataZoom

<vuep template="#set-data-zoom"></vuep>

<script v-pre type="text/x-template" id="set-data-zoom">
<template>
  <ve-line
    :data="chartData"
    :data-zoom="dataZoom">
  </ve-line>
</template>

<script>
  // import modules first
  // import 'echarts/lib/component/dataZoom'
  export default {
    created: function () {
      this.chartData = {
        columns: ['date', 'cost', 'profit'],
        rows: [
          { 'date': '01/01', 'cost': 15, 'profit': 12 },
          { 'date': '01/02', 'cost': 12, 'profit': 25 },
          { 'date': '01/03', 'cost': 21, 'profit': 10 },
          { 'date': '01/04', 'cost': 41, 'profit': 32 },
          { 'date': '01/05', 'cost': 31, 'profit': 30 },
          { 'date': '01/06', 'cost': 71, 'profit': 55 }
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

#### set toolbox

<vuep template="#set-toolbox-1"></vuep>

<script v-pre type="text/x-template" id="set-toolbox-1">
<template>
  <ve-line
    :data="chartData"
    :toolbox="toolbox">
  </ve-line>
</template>

<script>
  // import modules first
  // import 'echarts/lib/component/toolbox'
  export default {
    created: function () {
      this.chartData = {
        columns: ['date', 'cost', 'profit'],
        rows: [
          { 'date': '01/01', 'cost': 15, 'profit': 12 },
          { 'date': '01/02', 'cost': 12, 'profit': 25 },
          { 'date': '01/03', 'cost': 21, 'profit': 10 },
          { 'date': '01/04', 'cost': 41, 'profit': 32 },
          { 'date': '01/05', 'cost': 31, 'profit': 30 },
          { 'date': '01/06', 'cost': 71, 'profit': 55 }
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

#### set color

<vuep template="#set-color-1"></vuep>

<script v-pre type="text/x-template" id="set-color-1">
<template>
  <ve-line
    :data="chartData"
    :colors="colors">
  </ve-line>
</template>

<script>
  export default {
    created: function () {
      this.chartData = {
        columns: ['date', 'cost', 'profit'],
        rows: [
          { 'date': '01/01', 'cost': 15, 'profit': 12 },
          { 'date': '01/02', 'cost': 12, 'profit': 25 },
          { 'date': '01/03', 'cost': 21, 'profit': 10 },
          { 'date': '01/04', 'cost': 41, 'profit': 32 },
          { 'date': '01/05', 'cost': 31, 'profit': 30 },
          { 'date': '01/06', 'cost': 71, 'profit': 55 }
        ]
      }
      this.colors = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
    }
  }
</script>
</script>

