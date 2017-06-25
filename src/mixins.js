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
    initOptions: { type: Object, default () { return {} } }
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
    }
  },

  methods: {
    dataHandler (data) {
      if (!this.chartHandler) return
      if (!data ||
        !Array.isArray(data.columns) ||
        !Array.isArray(data.rows)) return false
      const { columns, rows } = data
      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible
      }
      if (this.beforeConfig) data = this.beforeConfig(data)

      let options = this.chartHandler(columns, rows, this.settings, extra)

      if (options) {
        if (this.colors) options.color = this.colors
        if (this.grid) options.grid = this.grid
        if (this.legendPosition && options.legend) {
          options.legend[this.legendPosition] = 10
          if (~['left', 'right'].indexOf(this.legendPosition)) {
            options.legend.top = 'middle'
            options.legend.orient = 'vertical'
          }
        }
        if (this.dataZoom) options.dataZoom = this.dataZoom
        if (this.visualMap) options.visualMap = this.visualMap
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
      }
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
      this.echarts = this.echartsLib.init(this.$refs.canvas, 've-chart', this.initOptions)
      if (this.data) this.dataHandler(this.data)
      if (this.events) this.bindEvents()
    },

    bindEvents () {
      Object.keys(this.events).forEach(event => {
        this.echarts.on(event, this.events[event])
      })
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.init()
      window.addEventListener('resize', this.echarts.resize)
    })
  },

  beforeDestory () {
    window.removeEventListener('resize', this.echarts.resize)
    this.echarts.dispose()
  }
}

export default chartMixin
