# 词云图

#### 示例

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

#### 设置词云图的颜色
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

#### 设置词云图的形状

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

#### 设置词云图的字体大小范围

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

#### settings 配置项
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | String | 默认 `columns[0]` |
| metrics | 指标 | String | 默认 `columns[1]` |
| sizeMin | 最小字体大小 | Number | 默认为 `12` |
| sizeMax | 最大字体大小 | Number | 默认为 `60` |
| shape | 词云图的形状 | String | 默认为 `circle`，可选值见备注 |
| color | 词云图字体颜色 | Array[String], String, Function | 默认为 `"rgb(Math.round(Math.random * 160), Math.round(Math.random * 160), Math.round(Math.random * 160))"` |

> 备注1: shape 可选值有cardioid、 diamond、triangle-forward、triangle、pentagon、star等。如果最终的形状不是理想的形状（都为矩形），可能是画布高度或者宽度不够以及数据过多导致的。可通过设置画布或容器的width或height，通过extend设置series的drawOutOfBound尝试解决。

> 备注2: 详细配置详见[echarts-wordcloud文档](https://github.com/ecomfe/echarts-wordcloud)。更多个性化配置可以结合wordcloud文档在extend的series配置项中设置。