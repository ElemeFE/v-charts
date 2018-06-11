# Scatter


There are two kinds of scatter: one dimension with multiple metrics scatter, two dimension with multiple metrics scatter.

#### one dimension with multiple metrics scatter demo: 

<vuep template="#simple-single-dim"></vuep>

<script v-pre type="text/x-template" id="simple-single-dim">
<template>
  <ve-scatter :data="chartData"></ve-scatter>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['date', 'PV', 'order', 'age'],
          rows: [
            { 'date': '1/1', 'PV': 123, 'age': 3, 'order': 1244 },
            { 'date': '1/2', 'PV': 1223, 'age': 6, 'order': 2344 },
            { 'date': '1/3', 'PV': 7123, 'age': 9, 'order': 3245 },
            { 'date': '1/4', 'PV': 4123, 'age': 12, 'order': 4355 },
            { 'date': '1/5', 'PV': 3123, 'age': 15, 'order': 4564 },
            { 'date': '1/6', 'PV': 2323, 'age': 20, 'order': 6537 }
          ]
        }
      }
    }
  }
</script>
</script>

x-axis is dimension（date）, y-axis is metrics（profit, number, age）.

#### two dimension with multiple metrics scatter demo: 

#### 双维度多指标散点图示例：

<vuep template="#simple-multi-dims"></vuep>

<script v-pre type="text/x-template" id="simple-multi-dims">
<template>
  <ve-scatter :data="chartData"></ve-scatter>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['date', 'PV', 'order', 'age'],
          rows: {
            'Shanghai': [
              { 'date': '1/1', 'PV': 123, 'age': 3, 'order': 1244 },
              { 'date': '1/2', 'PV': 1223, 'age': 6, 'order': 2344 },
              { 'date': '1/3', 'PV': 7123, 'age': 9, 'order': 3245 },
              { 'date': '1/4', 'PV': 4123, 'age': 12, 'order': 4355 },
              { 'date': '1/5', 'PV': 3123, 'age': 15, 'order': 4564 },
              { 'date': '1/6', 'PV': 2323, 'age': 20, 'order': 6537 }
            ],
            'Beijing': [
              { 'date': '1/1', 'PV': 123, 'age': 3, 'order': 1244 },
              { 'date': '1/2', 'PV': 1273, 'age': 6, 'order': 2344 },
              { 'date': '1/3', 'PV': 3123, 'age': 15, 'order': 4564 },
              { 'date': '1/4', 'PV': 2123, 'age': 9, 'order': 3245 },
              { 'date': '1/5', 'PV': 4103, 'age': 12, 'order': 4355 },
              { 'date': '1/6', 'PV': 7123, 'age': 10, 'order': 3567 }
            ],
            'Guangzhou': [
              { 'date': '1/1', 'PV': 123, 'age': 3, 'order': 1244 },
              { 'date': '1/2', 'PV': 1223, 'age': 6, 'order': 2344 },
              { 'date': '1/3', 'PV': 2123, 'age': 30, 'order': 3245 },
              { 'date': '1/5', 'PV': 4123, 'age': 12, 'order': 4355 },
              { 'date': '1/4', 'PV': 5123, 'age': 18, 'order': 4564 },
              { 'date': '1/6', 'PV': 3843, 'age': 30, 'order': 4850 }
            ]
          }
        }
      }
    }
  }
</script>
</script>

legend and x-axis show two dimension(location, date), metrics(profit, number, age) display on y-axis, point size, visualMap and tooltip.

the first item (default columns[1]) in metrics array display on y-axis, the second one (default columns[2]) display as point size.

`dimension` attribute of visualMap is used to decide which metrics display on visualMap, it's type is number, which represent the order of data, the order is `dimension, metrics[0], metrics[1], other metrics in columns`, and in this example, the order is `date, cost, number, age`, if you want to set `age` metrics on visualMap, set dimension = 3.

The two types of graphs are differentiated by the data format:

one dimension with multiple metrics scatter:
```js
{
  columns: ['date', 'profit', 'number', 'age'],
  rows: [
    { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
    { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
    { 'date': '01/03', 'profit': 7123, 'age': 9, 'number': 3245 },
    { 'date': '01/04', 'profit': 4123, 'age': 12, 'number': 4355 },
    { 'date': '01/05', 'profit': 3123, 'age': 15, 'number': 4564 },
    { 'date': '01/06', 'profit': 2323, 'age': 20, 'number': 6537 }
  ]
}
```

two dimension with multiple metrics scatter demo:
```js
{
  columns: ['date', 'profit', 'number', 'age'],
  rows: {
    'China': [
      { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
      { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
      { 'date': '01/03', 'profit': 7123, 'age': 9, 'number': 3245 },
      { 'date': '01/04', 'profit': 4123, 'age': 12, 'number': 4355 },
      { 'date': '01/05', 'profit': 3123, 'age': 15, 'number': 4564 },
      { 'date': '01/06', 'profit': 2323, 'age': 20, 'number': 6537 }
    ],
    'America': [
      { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
      { 'date': '01/02', 'profit': 1273, 'age': 6, 'number': 2344 },
      { 'date': '01/03', 'profit': 3123, 'age': 15, 'number': 4564 },
      { 'date': '01/04', 'profit': 2123, 'age': 9, 'number': 3245 },
      { 'date': '01/05', 'profit': 4103, 'age': 12, 'number': 4355 },
      { 'date': '01/06', 'profit': 7123, 'age': 10, 'number': 3567 }
    ],
    'Japan': [
      { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
      { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
      { 'date': '01/03', 'profit': 2123, 'age': 30, 'number': 3245 },
      { 'date': '01/05', 'profit': 4123, 'age': 12, 'number': 4355 },
      { 'date': '01/04', 'profit': 5123, 'age': 18, 'number': 4564 },
      { 'date': '01/06', 'profit': 3843, 'age': 30, 'number': 4850 }
    ]
  }
}
```

#### set dimension and metrics

<vuep template="#set-dim-metrics"></vuep>

<script v-pre type="text/x-template" id="set-dim-metrics">
<template>
  <ve-scatter :data="chartData" :settings="chartSettings"></ve-scatter>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dimension: 'date',
        metrics: ['age', 'number']
      }
      return {
        chartData: {
          columns: ['date', 'profit', 'number', 'age'],
          rows: {
            'China': [
              { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 7123, 'age': 9, 'number': 3245 },
              { 'date': '01/04', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/05', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/06', 'profit': 2323, 'age': 20, 'number': 6537 }
            ],
            'America': [
              { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1273, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/04', 'profit': 2123, 'age': 9, 'number': 3245 },
              { 'date': '01/05', 'profit': 4103, 'age': 12, 'number': 4355 },
              { 'date': '01/06', 'profit': 7123, 'age': 10, 'number': 3567 }
            ],
            'Japan': [
              { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 2123, 'age': 30, 'number': 3245 },
              { 'date': '01/05', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/04', 'profit': 5123, 'age': 18, 'number': 4564 },
              { 'date': '01/06', 'profit': 3843, 'age': 30, 'number': 4850 }
            ]
          }
        }
      }
    }
  }
</script>
</script>

#### set data type

<vuep template="#set-data-type-1"></vuep>

<script v-pre type="text/x-template" id="set-data-type-1">
<template>
  <ve-scatter :data="chartData" :settings="chartSettings"></ve-scatter>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dataType: {
          'profit': 'KMB',
          'age': 'percent',
          'number': 'normal'
        }
      }
      return {
        chartData: {
          columns: ['date', 'profit', 'number', 'age'],
          rows: {
            'China': [
              { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 7123, 'age': 9, 'number': 3245 },
              { 'date': '01/04', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/05', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/06', 'profit': 2323, 'age': 20, 'number': 6537 }
            ],
            'America': [
              { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1273, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/04', 'profit': 2123, 'age': 9, 'number': 3245 },
              { 'date': '01/05', 'profit': 4103, 'age': 12, 'number': 4355 },
              { 'date': '01/06', 'profit': 7123, 'age': 10, 'number': 3567 }
            ],
            'Japan': [
              { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 2123, 'age': 30, 'number': 3245 },
              { 'date': '01/05', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/04', 'profit': 5123, 'age': 18, 'number': 4564 },
              { 'date': '01/06', 'profit': 3843, 'age': 30, 'number': 4850 }
            ]
          }
        }
      }
    }
  }
</script>
</script>

#### set style

<vuep template="#set-style-1"></vuep>

<script v-pre type="text/x-template" id="set-style-1">
<template>
  <ve-scatter :data="chartData" :settings="chartSettings"></ve-scatter>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        label: {
          emphasis: {
            show: true,
            position: 'top',
            formatter (param) {
              return param.data.value[0]
            }
          }
        },
        itemStyle: {
          normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0
          }
        }
      }
      return {
        chartData: {
          columns: ['date', 'profit', 'number', 'age'],
          rows: {
            'China': [
              { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 7123, 'age': 9, 'number': 3245 },
              { 'date': '01/04', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/05', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/06', 'profit': 2323, 'age': 20, 'number': 6537 }
            ],
            'America': [
              { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1273, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/04', 'profit': 2123, 'age': 9, 'number': 3245 },
              { 'date': '01/05', 'profit': 4103, 'age': 12, 'number': 4355 },
              { 'date': '01/06', 'profit': 7123, 'age': 10, 'number': 3567 }
            ],
            'Japan': [
              { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 2123, 'age': 30, 'number': 3245 },
              { 'date': '01/05', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/04', 'profit': 5123, 'age': 18, 'number': 4564 },
              { 'date': '01/06', 'profit': 3843, 'age': 30, 'number': 4850 }
            ]
          }
        }
      }
    }
  }
</script>
</script>

#### alias

<vuep template="#set-label"></vuep>

<script v-pre type="text/x-template" id="set-label">
<template>
  <ve-scatter :data="chartData" :settings="chartSettings"></ve-scatter>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        legendName: {
          'China': 'China1'
        },
        labelMap: {
          'profit': 'balance'
        }
      }
      return {
        chartData: {
          columns: ['date', 'profit', 'number', 'age'],
          rows: {
            'China': [
              { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 7123, 'age': 9, 'number': 3245 },
              { 'date': '01/04', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/05', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/06', 'profit': 2323, 'age': 20, 'number': 6537 }
            ],
            'America': [
              { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1273, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/04', 'profit': 2123, 'age': 9, 'number': 3245 },
              { 'date': '01/05', 'profit': 4103, 'age': 12, 'number': 4355 },
              { 'date': '01/06', 'profit': 7123, 'age': 10, 'number': 3567 }
            ],
            'Japan': [
              { 'date': '01/01', 'profit': 123, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 2123, 'age': 30, 'number': 3245 },
              { 'date': '01/05', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/04', 'profit': 5123, 'age': 18, 'number': 4564 },
              { 'date': '01/06', 'profit': 3843, 'age': 30, 'number': 4850 }
            ]
          }
        }
      }
    }
  }
</script>
</script>

#### set scale

<vuep template="#set-scale-1"></vuep>

<script v-pre type="text/x-template" id="set-scale-1">
<template>
  <ve-scatter :data="chartData" :settings="chartSettings"></ve-scatter>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        scale: true,
        max: 10000
      }
      return {
        chartData: {
          columns: ['date', 'profit', 'number', 'age'],
          rows: {
            'China': [
              { 'date': '01/01', 'profit': 1230, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 7123, 'age': 9, 'number': 3245 },
              { 'date': '01/04', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/05', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/06', 'profit': 2323, 'age': 20, 'number': 6537 }
            ],
            'America': [
              { 'date': '01/01', 'profit': 1230, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1273, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/04', 'profit': 2123, 'age': 9, 'number': 3245 },
              { 'date': '01/05', 'profit': 4103, 'age': 12, 'number': 4355 },
              { 'date': '01/06', 'profit': 7123, 'age': 10, 'number': 3567 }
            ],
            'Japan': [
              { 'date': '01/01', 'profit': 1230, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 2123, 'age': 30, 'number': 3245 },
              { 'date': '01/05', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/04', 'profit': 5123, 'age': 18, 'number': 4564 },
              { 'date': '01/06', 'profit': 3843, 'age': 30, 'number': 4850 }
            ]
          }
        }
      }
    }
  }
</script>
</script>

#### set style of symbol

<vuep template="#set-symbol"></vuep>

<script v-pre type="text/x-template" id="set-symbol">
<template>
  <ve-scatter :data="chartData" :settings="chartSettings"></ve-scatter>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        symbol: 'rect',
        symbolSizeMax: 30,
        symbolRotate: 45,
        symbolOffset: [10, 10]
      }
      return {
        chartData: {
          columns: ['date', 'profit', 'number', 'age'],
          rows: {
            'China': [
              { 'date': '01/01', 'profit': 1230, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 7123, 'age': 9, 'number': 3245 },
              { 'date': '01/04', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/05', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/06', 'profit': 2323, 'age': 20, 'number': 6537 }
            ],
            'America': [
              { 'date': '01/01', 'profit': 1230, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1273, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/04', 'profit': 2123, 'age': 9, 'number': 3245 },
              { 'date': '01/05', 'profit': 4103, 'age': 12, 'number': 4355 },
              { 'date': '01/06', 'profit': 7123, 'age': 10, 'number': 3567 }
            ],
            'Japan': [
              { 'date': '01/01', 'profit': 1230, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 2123, 'age': 30, 'number': 3245 },
              { 'date': '01/05', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/04', 'profit': 5123, 'age': 18, 'number': 4564 },
              { 'date': '01/06', 'profit': 3843, 'age': 30, 'number': 4850 }
            ]
          }
        }
      }
    }
  }
</script>
</script>

#### set tooltip trigger while point overlap

<vuep template="#set-trigger"></vuep>

<script v-pre type="text/x-template" id="set-trigger">
<template>
  <ve-scatter :data="chartData" :settings="chartSettings"></ve-scatter>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        tooltipTrigger: 'axis'
      }
      return {
        chartData: {
          columns: ['date', 'profit', 'number', 'age'],
          rows: {
            'China': [
              { 'date': '01/01', 'profit': 1230, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1223, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 7123, 'age': 9, 'number': 3245 },
              { 'date': '01/04', 'profit': 4123, 'age': 12, 'number': 4355 },
              { 'date': '01/05', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/06', 'profit': 2323, 'age': 20, 'number': 6537 }
            ],
            'America': [
              { 'date': '01/01', 'profit': 1230, 'age': 3, 'number': 1244 },
              { 'date': '01/02', 'profit': 1273, 'age': 6, 'number': 2344 },
              { 'date': '01/03', 'profit': 3123, 'age': 15, 'number': 4564 },
              { 'date': '01/04', 'profit': 2123, 'age': 9, 'number': 3245 },
              { 'date': '01/05', 'profit': 4103, 'age': 12, 'number': 4355 },
              { 'date': '01/06', 'profit': 7123, 'age': 10, 'number': 3567 }
            ]
          }
        }
      }
    }
  }
</script>
</script>


#### settings

| attribute | description | type | remark |
| --- | --- | --- | --- |
| dimension | dimension of chart | string | default `columns[0]` |
| metrics | metrics of chart | array | default `[columns[0], columns[1]]` |
| dataType | data type of metrics | object | - |
| xAxisType | type of x-axis | string | `'category'`, `'value'`, `'time'`, `'log'` |
| xAxisName | title of x-axis | string | - |
| yAxisName | title of y-axis | string | - |
| digit | digit of percent type data | number | default `2` |
| labelMap | metrics alias | object | - |
| legendName | legend alias | object | - |
| tooltipTrigger | trigger type of tooltip | string | `'item'`, `'axis'` |
| axisVisible | whether display axis | boolean | - |
| symbolSizeMax | max size of symbol | number | default 50 |
| symbol | symbol option | string | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.symbol) |
| symbolSize | symbol size | number, array, Function | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.symbolSize) |
| symbolRotate | symbol rotate angle | number | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.symbolRotate) |
| symbolOffset | symbol offset relative to the previous position | array | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.symbolOffset) |
| cursor | style of the mouse when the mouse is over the graphic element | string | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.cursor) |
| scale | whether not to contain zero position of axis | boolean | - |
| min | min value of y-axis | number | - |
| max | max value of y-axis | number | - |
| label | label of chart | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.label) |
| itemStyle | style of point | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.itemStyle) |
