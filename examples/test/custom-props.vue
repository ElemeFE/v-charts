<template>
  <!-- 测试属性
    grid: [Object, Array]
    colors: Array
    visualMap: [Object, Array]
    dataZoom: [Object, Array]
    toolbox: [Object, Array]
    title: Object
    backgroundColor: [Object, String]

    legend: [Object, Array]
    xAxis: [Object, Array]
    yAxis: [Object, Array]
    radar: Object
    tooltip: Object
    axisPointer: Object
    brush: [Object, Array]
    geo: Object
    timeline: [Object, Array]
    graphic: [Object, Array]
    series: [Object, Array]
    textStyle: Object
    animation: Object
  -->
  <div>
    grid backgroundColor
    <ve-line :data="chartData" :grid="chartGrid" background-color="#eee"></ve-line>
    <ve-line :data="chartData" :grid="chartGrid1"></ve-line>
    colors
    <ve-line :data="chartData" :colors="chartColors"></ve-line>
    visualMap
    <ve-line :data="chartData" :visual-map="visualMap"></ve-line>
    dataZoom
    <ve-line :data="chartData" :data-zoom="dataZoom"></ve-line>
    toolbox
    <ve-line :data="chartData" :toolbox="toolbox"></ve-line>
    title
    <ve-line :data="chartData" :title="title"></ve-line>
    others
    <ve-line
      :legend="legend"
      :x-axis="xAxis"
      :y-axis="yAxis"
      :radar="radar"
      :tooltip="tooltip"
      :axis-pointer="axisPointer"
      :brush="brush"
      :geo="geo"
      :timeline="timeline"
      :graphic="graphic"
      :series="series"
      :text-style="textStyle"
      :after-config="afterConfig">
    </ve-line>
  </div>
</template>

<script>
import { VeLine } from '../../src/index.es'
import { LINE_DATA } from './data'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/title'

export default {
  data () {
    this.chartGrid = { right: '50%' }
    this.chartGrid1 = [this.chartGrid]
    this.chartColors = ['red', 'blue']
    this.visualMap = [{ type: 'continuous' }]
    this.dataZoom = [
      {
        id: 'dataZoomX',
        type: 'slider',
        xAxisIndex: [0],
        filterMode: 'filter'
      }
    ]
    this.toolbox = {
      show: true,
      feature: {
        dataZoom: { yAxisIndex: 'none' },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {}
      }
    }
    this.title = {
      textAlign: 'left',
      text: 'chart-title',
      textStyle: {
        fontSize: 12,
        fontWeight: 'normal'
      }
    }
    this.legend = {}
    this.xAxis = {}
    this.yAxis = {}
    this.radar = {}
    this.tooltip = {}
    this.axisPointer = {}
    this.brush = {}
    this.geo = {}
    this.timeline = {}
    this.graphic = {}
    this.series = {}
    this.textStyle = {}
    return {
      chartData: LINE_DATA
    }
  },
  methods: {
    afterConfig (v) {
      console.log(v)
      return v
    }
  },
  components: { VeLine }
}
</script>

