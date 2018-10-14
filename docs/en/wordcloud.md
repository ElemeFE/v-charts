# wordcloud

#### demo

<vuep template="#simple-wordcloud"></vuep>

<script v-pre type="text/x-template" id="simple-wordcloud">
<template>
  <ve-wordcloud :data="chartData"></ve-wordcloud>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['word', 'count'],
          rows: getRows()
        }
      }
    }
  }

  function getRows () {
    return [{
      'word': 'visualMap',
      'count': 22199
    }, {
      'word': 'continuous',
      'count': 10288
    }, {
      'word': 'contoller',
      'count': 620
    }, {
      'word': 'series',
      'count': 274470
    }, {
      'word': 'gauge',
      'count': 12311
    }, {
      'word': 'detail',
      'count': 1206
    }, {
      'word': 'piecewise',
      'count': 4885
    }, {
      'word': 'textStyle',
      'count': 32294
    }, {
      'word': 'markPoint',
      'count': 18574
    }, {
      'word': 'pie',
      'count': 38929
    }, {
      'word': 'roseType',
      'count': 969
    }, {
      'word': 'label',
      'count': 37517
    }, {
      'word': 'emphasis',
      'count': 12053
    }, {
      'word': 'yAxis',
      'count': 57299
    }, {
      'word': 'name',
      'count': 15418
    }, {
      'word': 'type',
      'count': 22905
    }, {
      'word': 'gridIndex',
      'count': 5146
    }, {
      'word': 'normal',
      'count': 49487
    }, {
      'word': 'itemStyle',
      'count': 33837
    }, {
      'word': 'min',
      'count': 4500
    }, {
      'word': 'silent',
      'count': 5744
    }, {
      'word': 'animation',
      'count': 4840
    }, {
      'word': 'offsetCenter',
      'count': 232
    }, {
      'word': 'inverse',
      'count': 3706
    }, {
      'word': 'borderColor',
      'count': 4812
    }, {
      'word': 'markLine',
      'count': 16578
    }, {
      'word': 'line',
      'count': 76970
    }, {
      'word': 'radiusAxis',
      'count': 6704
    }, {
      'word': 'radar',
      'count': 15964
    }, {
      'word': 'data',
      'count': 60679
    }, {
      'word': 'dataZoom',
      'count': 24347
    }, {
      'word': 'tooltip',
      'count': 43420
    }, {
      'word': 'toolbox',
      'count': 25222
    }, {
      'word': 'geo',
      'count': 16904
    }, {
      'word': 'parallelAxis',
      'count': 4029
    }]
  }
</script>
</script>

#### Set the color of the wordcloud
<vuep template="#set-color"></vuep>

<script v-pre type="text/x-template" id="set-color">
<template>
  <ve-wordcloud :data="chartData" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        color: ['#ff0', '#00f', '#f00', '#0ff']
      }
      return {
        chartData: {
          columns: ['word', 'count'],
          rows: getRows()
        }
      }
    }
  }

  function getRows () {
    return [{
      'word': 'visualMap',
      'count': 22199
    }, {
      'word': 'continuous',
      'count': 10288
    }, {
      'word': 'contoller',
      'count': 620
    }, {
      'word': 'series',
      'count': 274470
    }, {
      'word': 'gauge',
      'count': 12311
    }, {
      'word': 'detail',
      'count': 1206
    }, {
      'word': 'piecewise',
      'count': 4885
    }, {
      'word': 'textStyle',
      'count': 32294
    }, {
      'word': 'markPoint',
      'count': 18574
    }, {
      'word': 'pie',
      'count': 38929
    }, {
      'word': 'roseType',
      'count': 969
    }, {
      'word': 'label',
      'count': 37517
    }, {
      'word': 'emphasis',
      'count': 12053
    }, {
      'word': 'yAxis',
      'count': 57299
    }, {
      'word': 'name',
      'count': 15418
    }, {
      'word': 'type',
      'count': 22905
    }, {
      'word': 'gridIndex',
      'count': 5146
    }, {
      'word': 'normal',
      'count': 49487
    }, {
      'word': 'itemStyle',
      'count': 33837
    }, {
      'word': 'min',
      'count': 4500
    }, {
      'word': 'silent',
      'count': 5744
    }, {
      'word': 'animation',
      'count': 4840
    }, {
      'word': 'offsetCenter',
      'count': 232
    }, {
      'word': 'inverse',
      'count': 3706
    }, {
      'word': 'borderColor',
      'count': 4812
    }, {
      'word': 'markLine',
      'count': 16578
    }, {
      'word': 'line',
      'count': 76970
    }, {
      'word': 'radiusAxis',
      'count': 6704
    }, {
      'word': 'radar',
      'count': 15964
    }, {
      'word': 'data',
      'count': 60679
    }, {
      'word': 'dataZoom',
      'count': 24347
    }, {
      'word': 'tooltip',
      'count': 43420
    }, {
      'word': 'toolbox',
      'count': 25222
    }, {
      'word': 'geo',
      'count': 16904
    }, {
      'word': 'parallelAxis',
      'count': 4029
    }]
  }
</script>
</script>

#### Set the shape of the wordcloud

<vuep template="#set-shape"></vuep>

<script v-pre type="text/x-template" id="set-shape">
<template>
  <ve-wordcloud :data="chartData" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        shape: 'diamond'
      }
      return {
        chartData: {
          columns: ['word', 'count'],
          rows: getRows()
        }
      }
    }
  }

  function getRows () {
    return [{
      'word': 'visualMap',
      'count': 22199
    }, {
      'word': 'continuous',
      'count': 10288
    }, {
      'word': 'contoller',
      'count': 620
    }, {
      'word': 'series',
      'count': 274470
    }, {
      'word': 'gauge',
      'count': 12311
    }, {
      'word': 'detail',
      'count': 1206
    }, {
      'word': 'piecewise',
      'count': 4885
    }, {
      'word': 'textStyle',
      'count': 32294
    }, {
      'word': 'markPoint',
      'count': 18574
    }, {
      'word': 'pie',
      'count': 38929
    }, {
      'word': 'roseType',
      'count': 969
    }, {
      'word': 'label',
      'count': 37517
    }, {
      'word': 'emphasis',
      'count': 12053
    }, {
      'word': 'yAxis',
      'count': 57299
    }, {
      'word': 'name',
      'count': 15418
    }, {
      'word': 'type',
      'count': 22905
    }, {
      'word': 'gridIndex',
      'count': 5146
    }, {
      'word': 'normal',
      'count': 49487
    }, {
      'word': 'itemStyle',
      'count': 33837
    }, {
      'word': 'min',
      'count': 4500
    }, {
      'word': 'silent',
      'count': 5744
    }, {
      'word': 'animation',
      'count': 4840
    }, {
      'word': 'offsetCenter',
      'count': 232
    }, {
      'word': 'inverse',
      'count': 3706
    }, {
      'word': 'borderColor',
      'count': 4812
    }, {
      'word': 'markLine',
      'count': 16578
    }, {
      'word': 'line',
      'count': 76970
    }, {
      'word': 'radiusAxis',
      'count': 6704
    }, {
      'word': 'radar',
      'count': 15964
    }, {
      'word': 'data',
      'count': 60679
    }, {
      'word': 'dataZoom',
      'count': 24347
    }, {
      'word': 'tooltip',
      'count': 43420
    }, {
      'word': 'toolbox',
      'count': 25222
    }, {
      'word': 'geo',
      'count': 16904
    }, {
      'word': 'parallelAxis',
      'count': 4029
    }]
  }
</script>
</script>

#### Set the range of fontSize about the wordcloud

<vuep template="#set-sizeRange"></vuep>

<script v-pre type="text/x-template" id="set-sizeRange">
<template>
  <ve-wordcloud :data="chartData" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        sizeMin: 30,
        sizeMax: 60
      }
      return {
        chartData: {
          columns: ['word', 'count'],
          rows: getRows()
        }
      }
    }
  }

  function getRows () {
    return [{
      'word': 'visualMap',
      'count': 22199
    }, {
      'word': 'continuous',
      'count': 10288
    }, {
      'word': 'contoller',
      'count': 620
    }, {
      'word': 'series',
      'count': 274470
    }, {
      'word': 'gauge',
      'count': 12311
    }, {
      'word': 'detail',
      'count': 1206
    }, {
      'word': 'piecewise',
      'count': 4885
    }, {
      'word': 'textStyle',
      'count': 32294
    }, {
      'word': 'markPoint',
      'count': 18574
    }, {
      'word': 'pie',
      'count': 38929
    }, {
      'word': 'roseType',
      'count': 969
    }, {
      'word': 'label',
      'count': 37517
    }, {
      'word': 'emphasis',
      'count': 12053
    }, {
      'word': 'yAxis',
      'count': 57299
    }, {
      'word': 'name',
      'count': 15418
    }, {
      'word': 'type',
      'count': 22905
    }, {
      'word': 'gridIndex',
      'count': 5146
    }, {
      'word': 'normal',
      'count': 49487
    }, {
      'word': 'itemStyle',
      'count': 33837
    }, {
      'word': 'min',
      'count': 4500
    }, {
      'word': 'silent',
      'count': 5744
    }, {
      'word': 'animation',
      'count': 4840
    }, {
      'word': 'offsetCenter',
      'count': 232
    }, {
      'word': 'inverse',
      'count': 3706
    }, {
      'word': 'borderColor',
      'count': 4812
    }, {
      'word': 'markLine',
      'count': 16578
    }, {
      'word': 'line',
      'count': 76970
    }, {
      'word': 'radiusAxis',
      'count': 6704
    }, {
      'word': 'radar',
      'count': 15964
    }, {
      'word': 'data',
      'count': 60679
    }, {
      'word': 'dataZoom',
      'count': 24347
    }, {
      'word': 'tooltip',
      'count': 43420
    }, {
      'word': 'toolbox',
      'count': 25222
    }, {
      'word': 'geo',
      'count': 16904
    }, {
      'word': 'parallelAxis',
      'count': 4029
    }]
  }
</script>
</script>

#### settings configuration
| attribute | description | type | remark |
| --- | --- | --- | --- |
| dimension | dimension of chart data | String | default `columns[0]` |
| metrics | metrics of chart data | String | default `columns[1]` |
| sizeMin | minimum fontSize | Number | default `12` |
| sizeMax | maximum fontSize | Number | default `60` |
| shape | shape of wordcloud | String | default `circle`，optional value can been seen on Remark1 |
| color | color of wordcloud's char | Array[String], String, Function | default `"rgb(Math.round(Math.random * 160), Math.round(Math.random * 160), Math.round(Math.random * 160))"` |

> Remark1: shape: cardioid、 diamond、triangle-forward、triangle、pentagon and star are optional values. If the final shape isn't what you expected(present like rect), It may be the lack of the canvas's width(or height) or the container's width(or height) or too many data. You can try to solve the problem by settings the width(or height) of the canvas or the container.And it also may be helpful to set the drawOutOfBound of series by extend settings.

> Remark2: Defail configuration can be found at [echarts-wordcloud Document](https://github.com/ecomfe/echarts-wordcloud). More personalise configurations can be set on extend's series by reference the Document of wordcloud.