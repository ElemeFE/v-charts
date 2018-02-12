### Scatter


There are two kinds of scatter: one dimension with multiple metrics scatter, two dimension with multiple metrics scatter.

#### one dimension with multiple metrics scatter demo: 
<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/1xjfgz25/3/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

x-axis is dimension（date）, y-axis is metrics（profit, number, age）.

#### two dimension with multiple metrics scatter demo: 
<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/e0hbk316/5/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        dimension: 'date',
        metrics: ['age', 'number']
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        dataType: {
          'profit': 'KMB',
          'age': 'percent',
          'number': 'normal'
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
  module.exports = {
    created: function () {
      this.chartData = {
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        legendName: {
          'China': 'China1'
        },
        labelMap: {
          'profit': 'balance'
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        scale: true,
        max: 10000
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        symbol: 'rect',
        symbolSizeMax: 30,
        symbolRotate: 45,
        symbolOffset: [10, 10]
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
  module.exports = {
    created: function () {
      this.chartData = {
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
      this.chartSettings = {
        tooltipTrigger: 'axis'
      }
    }
  }
</script>
</script>


#### settings

| attribute | description | type | remark |
| --- | --- | --- | --- |
| dimension | dimension of chart | String | default `columns[0]` |
| metrics | metrics of chart | Array | default `[columns[0], columns[1]]` |
| dataType | data type of metrics | Object | - |
| xAxisType | type of x-axis | String | `'category'`, `'value'`, `'time'`, `'log'` |
| xAxisName | title of x-axis | String | - |
| yAxisName | title of y-axis | String | - |
| digit | digit of percent type data | Number | default `2` |
| labelMap | metrics alias | Object | - |
| legendName | legend alias | Object | - |
| tooltipTrigger | trigger type of tooltip | String | `'item'`, `'axis'` |
| axisVisible | whether display axis | Boolean | - |
| symbolSizeMax | max size of symbol | Number | default 50 |
| symbol | symbol option | String | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.symbol) |
| symbolSize | symbol size | number, Array, Function | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.symbolSize) |
| symbolRotate | symbol rotate angle | number | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.symbolRotate) |
| symbolOffset | symbol offset relative to the previous position | Array | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.symbolOffset) |
| cursor | style of the mouse when the mouse is over the graphic element | string | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.cursor) |
| scale | whether not to contain zero position of axis | Boolean | - |
| min | min value of y-axis | Number | - |
| max | max value of y-axis | Number | - |
| label | label of chart | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.label) |
| itemStyle | style of point | Object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.itemStyle) |
