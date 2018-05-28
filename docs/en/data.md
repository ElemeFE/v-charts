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
