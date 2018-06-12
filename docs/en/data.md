# Data

### Metrics ans Dimension

The v-charts data consists of Metrics and dimension. Take a set of common data as an example:

| date | PV | Order |
| :--: | --: | --: |
| 2018-05-22 | 32371 | 29810 |
| 2018-05-23 | 12328 | 11398 |
| 2018-05-24 | 92381 | 82910 |

"Dimension" refers to the attributes of the data, such as the "date" dimension in the table, which represents the date of each set of data generated.

“Metrics” are quantitative metrics, such as “PV” and “Order” in the table.

Next, take the above set of data as an example to draw a line chart:

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

### Set metrics or dimension

A typical v-charts `data` attribute data format is as follows:

```js
{
  columns: ['date', 'PV', 'Order'],
  rows: [
    { 'date': '2018-05-22', 'PV': 32371, 'Order': 19810 },
    { 'date': '2018-05-23', 'PV': 12328, 'Order': 4398 },
    { 'date': '2018-05-24', 'PV': 92381, 'Order': 52910 }
  ]
}
```

- columns: Columns are a collection of dimension name and metrics name. Most of the charts in v-charts are single-dimension and multi-metrics, so by default the first is dimension, and the remaining values are metrics.
- rows: A collection of data in rows.

There are two configurations in the setting property of the chart:

- dimension: for specifying dimensions
- metrics: for specifying indicators

<vuep template="#set-metrics-dimension"></vuep>

<script v-pre type="text/x-template" id="set-metrics-dimension">
<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        metrics: ['Order']
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

# Set metrics alias

In some cases, the name of the indicator in the data is not what we want to show, and most charts have a uniform configuration in the setting attribute to solve this problem.

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
          PV: 'pageView',
          Order: 'orderPerson'
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


### Data Format

In most cases, we need to do some formatting of the data. Each chart component has a slightly different way of setting the data format. For example, a line chart uses yAxisType and a pie chart uses dataType. The basic data formats are 'normal' (thousands), 'KMB' (kmb format), percent (percentage format); if the above format does not meet the requirements, you can also use [numerify](http://daxigua.me/numerify/) format to configure the display. Specific format support and plug-in extensions can be referenced to the numerify document; and, in order to support more unknown situations, the format setting also supports the use of the callback function. The use of the above three methods can refer to the following example.

#### basic data formats

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
          'PV': 'KMB',
          'age': 'percent',
          'order': 'normal'
        }
      }
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

#### numerify format

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

#### callback function

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
          columns: ['date', 'PV'],
          rows: [
            { 'date': '1/1', 'PV': 1393 },
            { 'date': '1/2', 'PV': 3530 },
            { 'date': '1/3', 'PV': 2923 },
            { 'date': '1/4', 'PV': 1723 },
            { 'date': '1/5', 'PV': 3792 },
            { 'date': '1/6', 'PV': 4593 }
          ]
        }
      }
    }
  }
</script>
</script>

### get data example

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
