import { color, default as echarts } from './echarts-base'
const chartMixin = {
  props: {
    data: { type: [Object, Array], default: null },
    settings: { type: Object, default () { return {} } },
    width: { type: String, default: 'auto' },
    height: { type: String, default: '400px' },
    beforeConfig: { type: Function },
    afterConfig: { type: Function },
    events: { type: Object },
    grid: { type: Object },
    colors: { type: Array },
    tooltipVisible: { type: Boolean, default: true },
    legendVisible: { type: Boolean, default: true },
    legendPosition: { type: String },
    markLine: { type: Object },
    markArea: { type: Object },
    markPoint: { type: Object },
    visualMap: { type: [Object, Array] },
    dataZoom: { type: [Object, Array] },
    toolbox: { type: Object },
    initOptions: { type: Object, default () { return {} } },
    title: Object,
    legend: Object,
    xAxis: Object,
    yAxis: Object,
    radar: Object,
    tooltip: Object,
    axisPointer: Object,
    brush: Object,
    geo: Object,
    timeline: Object,
    graphic: Object,
    series: Object,
    backgroundColor: [Object, String],
    textStyle: Object,
    animation: Object,
    theme: Object
  },

  watch: {
    data: {
      deep: true,
      handler (v) {
        if (v) { this.dataHandler(v) }
      }
    },

    settings: {
      deep: true,
      handler (v) {
        if (v.type && this.chartLib) this.chartHandler = this.chartLib[v.type]
        this.dataHandler(this.data)
      }
    }
  },

  computed: {
    canvasStyle () {
      return {
        width: this.width,
        height: this.height,
        position: 'relative'
      }
    },

    chartColor () {
      return this.colors || (this.theme && this.theme.color) || color
    }
  },

  methods: {
    dataHandler (data) {
      if (!this.chartHandler) return
      if (!data ||
        !Array.isArray(data.columns) ||
        !Array.isArray(data.rows)) {
        return false
      }
      const { columns, rows } = data
      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        echarts: this.echarts,
        color: this.chartColor
      }
      if (this.beforeConfig) data = this.beforeConfig(data)

      let options = this.chartHandler(columns, rows, this.settings, extra)
      if (options) {
        if (typeof options.then === 'function') {
          options.then(this.optionsHandler)
        } else {
          this.optionsHandler(options)
        }
      }
    },

    optionsHandler (options) {
      if (this.legendPosition && options.legend) {
        options.legend[this.legendPosition] = 10
        if (~['left', 'right'].indexOf(this.legendPosition)) {
          options.legend.top = 'middle'
          options.legend.orient = 'vertical'
        }
      }
      options.color = this.chartColor
      const echartsSettings = [
        'grid', 'dataZoom', 'visualMap', 'toolbox', 'title', 'legend',
        'xAxis', 'yAxis', 'radar', 'tooltip', 'axisPointer', 'brush',
        'geo', 'timeline', 'graphic', 'series', 'backgroundColor',
        'textStyle'
      ]
      echartsSettings.forEach(setting => {
        if (this[setting]) options[setting] = this[setting]
      })
      if (this.animation) {
        Object.keys(this.animation).forEach(key => {
          options[key] = this.animation[key]
        })
      }
      if (this.markArea || this.markLine || this.markPoint) {
        const marks = {
          markArea: this.markArea,
          markLine: this.markLine,
          markPoint: this.markPoint
        }
        const series = options.series
        if (this.getType(series) === '[object Array]') {
          series.forEach(item => {
            this.addMark(item, marks)
          })
        } else if (this.getType(series) === '[object Object]') {
          this.addMark(series, marks)
        }
      }
      if (this.afterConfig) options = this.afterConfig(options)
      this.echarts.setOption(options, true)
    },

    addMark (seriesItem, marks) {
      Object.keys(marks).forEach(key => {
        if (marks[key]) {
          seriesItem[key] = marks[key]
        }
      })
    },

    getType (v) {
      return Object.prototype.toString.call(v)
    },

    init () {
      if (this.echarts) return
      const themeName = this.theme ? 'outer-theme' : 've-chart'
      this.echarts = this.echartsLib.init(this.$refs.canvas, themeName, this.initOptions)
      if (this.data) this.dataHandler(this.data)
      if (this.events) this.bindEvents()
    },

    bindEvents () {
      Object.keys(this.events).forEach(event => {
        this.echarts.on(event, this.events[event])
      })
    },

    addWatchToProps () {
      const watchedVariable = this._watchers.map(watcher => watcher.expression)
      Object.keys(this.$props).forEach(prop => {
        if (!~watchedVariable.indexOf(prop)) {
          const opts = {}
          if (Object.prototype.toString.call(prop) === '[object Object]') {
            opts.deep = true
          }
          this.$watch(prop, () => {
            this.dataHandler(this.data)
          }, opts)
        }
      })
    },

    registerTheme () {
      echarts.registerTheme('outer-theme', this.theme)
    }
  },

  created () {
    this.addWatchToProps()
    if (this.theme) this.registerTheme()
  },

  mounted () {
    this.init()
    window.addEventListener('resize', this.echarts.resize)
  },

  beforeDestory () {
    window.removeEventListener('resize', this.echarts.resize)
    this.echarts.dispose()
  }
}

export default chartMixin
