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
    scale: { type: Object },
    tooltipVisible: { type: Boolean, default: false },
    legendVisible: { type: Boolean, default: false },
    axisVisible: { type: Boolean, default: true }
  },

  watch: {
    data (v) {
      const dataKeys = Object.keys(v)
      const dataKeyProp = v.key
      if ((dataKeyProp && Array.isArray(dataKeyProp) && dataKeyProp.length) || dataKeys.length) {
        this.dataHandler(v)
      }
    },
    settings: {
      deep: true,
      handler (v) {
        this.chartHandler = this.chartLib[v.type]
        this.dataHandler(this.data)
      }
    }
  },

  computed: {
    canvasStyle () {
      return { width: this.width, height: this.height }
    }
  },

  methods: {
    dataHandler (data) {
      if (!this.chartHandler) return
      if (!data || !Array.isArray(data.columns) || !Array.isArray(data.rows)) return false
      const { columns, rows } = data
      const status = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        axisVisible: this.axisVisible
      }
      if (this.beforeConfig) data = this.beforeConfig(data)

      let options = this.chartHandler(columns, rows, this.settings, status)

      if (this.colors) options.color = this.colors
      if (this.grid) options.grid = this.grid
      if (this.scale) {
        options.xAxis.scale = this.scale.x
        options.yAxis.scale = this.scale.y
      }
      if (this.afterConfig) options = this.afterConfig(options)
      if (options) this.echarts.setOption(options, true)
    },

    init () {
      if (this.echarts) return
      this.echarts = this.echartsLib.init(this.$refs.canvas, 've-chart')
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
