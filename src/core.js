import { color } from './echarts-base'
import { getType, toKebab, isArray, isObject } from './utils'
import Loading from './components/loading'
import DataEmpty from './components/data-empty'

export default {
  render (h) {
    return h('div', {
      class: [toKebab(this.$options.name || this.$options._componentTag)],
      style: this.canvasStyle
    }, [
      h('div', {
        style: this.canvasStyle,
        ref: 'canvas'
      }),
      h(Loading, {
        style: { display: this.loading ? '' : 'none' }
      }),
      h(DataEmpty, {
        style: { display: this.dataEmpty ? '' : 'none' }
      }),
      this.$slots.default
    ])
  },

  props: {
    data: { type: [Object, Array], default () { return {} } },
    settings: { type: Object, default () { return {} } },
    width: { type: String, default: 'auto' },
    height: { type: String, default: '400px' },
    beforeConfig: { type: Function },
    afterConfig: { type: Function },
    afterSetOption: { type: Function },
    afterSetOptionOnce: { type: Function },
    events: { type: Object },
    grid: { type: [Object, Array] },
    colors: { type: Array },
    tooltipVisible: { type: Boolean, default: true },
    legendVisible: { type: Boolean, default: true },
    legendPosition: { type: String },
    markLine: { type: Object },
    markArea: { type: Object },
    markPoint: { type: Object },
    visualMap: { type: [Object, Array] },
    dataZoom: { type: [Object, Array] },
    toolbox: { type: [Object, Array] },
    initOptions: { type: Object, default () { return {} } },
    title: Object,
    legend: [Object, Array],
    xAxis: [Object, Array],
    yAxis: [Object, Array],
    radar: Object,
    tooltip: Object,
    axisPointer: Object,
    brush: [Object, Array],
    geo: Object,
    timeline: [Object, Array],
    graphic: [Object, Array],
    series: [Object, Array],
    backgroundColor: [Object, String],
    textStyle: Object,
    animation: Object,
    theme: Object,
    themeName: String,
    loading: Boolean,
    dataEmpty: Boolean,
    extend: Object,
    judgeWidth: { type: Boolean, default: true },
    widthChangeDelay: { type: Number, default: 300 },
    tooltipFormatter: { type: Function }
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
    },

    events: {
      deep: true,
      handler () {
        this.createEventProxy()
      }
    },

    theme: {
      deep: true,
      handler (v) {
        this.themeChange(v)
      }
    },

    themeName (v) {
      this.themeChange(v)
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
      const { columns = [], rows = [] } = data
      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        echarts: this.echarts,
        color: this.chartColor,
        tooltipFormatter: this.tooltipFormatter
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

    resize () {
      this.echarts.resize()
    },

    optionsHandler (options) {
      if (this.legendPosition && options.legend) {
        options.legend[this.legendPosition] = 10
        if (~['left', 'right'].indexOf(this.legendPosition)) {
          options.legend.top = 'middle'
          options.legend.orient = 'vertical'
        }
      }
      if (!this.themeName) options.color = this.chartColor
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
        if (getType(series) === '[object Array]') {
          series.forEach(item => {
            this.addMark(item, marks)
          })
        } else if (getType(series) === '[object Object]') {
          this.addMark(series, marks)
        }
      }

      // extend sub attribute
      if (this.extend) {
        Object.keys(this.extend).forEach(attr => {
          if (typeof this.extend[attr] === 'function') {
            // get callback value
            options[attr] = this.extend[attr](options[attr])
          } else {
            // mixin extend value
            if (isArray(options[attr]) && isObject(options[attr][0])) {
              // eg: [{ xx: 1 }, { xx: 2 }]
              options[attr].forEach((option, index) => {
                options[attr][index] = Object.assign({}, option, this.extend[attr])
              })
            } else if (isObject(options[attr])) {
              // eg: { xx: 1, yy: 2 }
              options[attr] = Object.assign({}, options[attr], this.extend[attr])
            } else {
              options[attr] = this.extend[attr]
            }
          }
        })
      }

      if (this.afterConfig) options = this.afterConfig(options)
      this.echarts.setOption(options, true)
      this.$emit('ready', this.echarts)
      if (!this._once['ready-once']) {
        this._once['ready-once'] = true
        this.$emit('ready-once', this.echarts)
      }
      if (this.judgeWidth) this.judgeWidthHandler(options)
      if (this.afterSetOption) this.afterSetOption(this.echarts)
      if (this.afterSetOptionOnce && !this._once['afterSetOptionOnce']) {
        this._once['afterSetOptionOnce'] = this.afterSetOptionOnce(this.echarts)
      }
    },

    judgeWidthHandler (options) {
      const { echarts, widthChangeDelay } = this
      if (this.$el.clientWidth) {
        echarts && echarts.resize()
      } else {
        this.$nextTick(_ => {
          if (this.$el.clientWidth) {
            echarts && echarts.resize()
          } else {
            setTimeout(_ => {
              echarts && echarts.resize()
              if (!this.$el.clientWidth) {
                console.warn(' Can\'t get dom width or height ')
              }
            }, widthChangeDelay)
          }
        })
      }
    },

    addMark (seriesItem, marks) {
      Object.keys(marks).forEach(key => {
        if (marks[key]) {
          seriesItem[key] = marks[key]
        }
      })
    },

    init () {
      if (this.echarts) return
      const themeName = this.themeName || this.theme || 've-chart'
      this.echarts = this.echartsLib.init(this.$refs.canvas, themeName, this.initOptions)
      if (this.data) this.dataHandler(this.data)
      this.createEventProxy()
      window.addEventListener('resize', this.echarts.resize)
    },

    addWatchToProps () {
      const watchedVariable = this._watchers.map(watcher => watcher.expression)
      Object.keys(this.$props).forEach(prop => {
        if (!~watchedVariable.indexOf(prop)) {
          const opts = {}
          if (~['[object Object]', '[object Array]'].indexOf(getType(this.$props[prop]))) {
            opts.deep = true
          }
          this.$watch(prop, () => {
            this.dataHandler(this.data)
          }, opts)
        }
      })
    },

    createEventProxy () {
      // 只要用户使用 on 方法绑定的事件都做一层代理，
      // 是否真正执行相应的事件方法取决于该方法是否仍然存在 events 中
      // 实现 events 的动态响应
      const self = this
      const keys = Object.keys(this.events || {})
      keys.length && keys.forEach(ev => {
        if (this.registeredEvents.indexOf(ev) === -1) {
          this.registeredEvents.push(ev)
          this.echarts.on(ev, (function (ev) {
            return function (...args) {
              if (ev in self.events) {
                self.events[ev].apply(null, args)
              }
            }
          })(ev))
        }
      })
    },

    themeChange (theme) {
      this.clean()
      this.echarts = null
      this.init()
    },

    clean () {
      window.removeEventListener('resize', this.echarts.resize)
      this.echarts.dispose()
    }
  },

  created () {
    this.echarts = null
    this.registeredEvents = []
    this._once = {}
    this.addWatchToProps()
  },

  mounted () {
    this.init()
  },

  beforeDestroy () {
    this.clean()
  }
}
