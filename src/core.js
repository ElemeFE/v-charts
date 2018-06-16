import echartsLib from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

import { DEFAULT_COLORS, DEFAULT_THEME } from './constants'
import Loading from './components/loading'
import DataEmpty from './components/data-empty'
import { getType, debounce, isArray, isObject, camelToKebab, set } from 'utils-lite'
import numerify from 'numerify'

const STATIC_PROPS = ['initOptions', 'loading', 'dataEmpty', 'judgeWidth', 'widthChangeDelay']

export default {
  render (h) {
    return h('div', {
      class: [camelToKebab(this.$options.name || this.$options._componentTag)],
      style: this.canvasStyle
    }, [
      h('div', {
        style: this.canvasStyle,
        ref: 'canvas'
      }),
      h(DataEmpty, {
        style: { display: this.dataEmpty ? '' : 'none' }
      }),
      h(Loading, {
        style: { display: this.loading ? '' : 'none' }
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
    title: [Object, Array],
    legend: [Object, Array],
    xAxis: [Object, Array],
    yAxis: [Object, Array],
    radar: Object,
    tooltip: Object,
    axisPointer: [Object, Array],
    brush: [Object, Array],
    geo: [Object, Array],
    timeline: [Object, Array],
    graphic: [Object, Array],
    series: [Object, Array],
    backgroundColor: [Object, String],
    textStyle: [Object, Array],
    animation: Object,
    theme: Object,
    themeName: String,
    loading: Boolean,
    dataEmpty: Boolean,
    extend: Object,
    judgeWidth: { type: Boolean, default: false },
    widthChangeDelay: { type: Number, default: 300 },
    tooltipFormatter: { type: Function },
    resizeable: { type: Boolean, default: true },
    resizeDelay: { type: Number, default: 200 },
    changeDelay: { type: Number, default: 0 },
    setOptionOpts: { type: [Boolean, Object], default: true }
  },

  watch: {
    data: {
      deep: true,
      handler (v) {
        if (v) { this.changeHandler() }
      }
    },

    settings: {
      deep: true,
      handler (v) {
        if (v.type && this.chartLib) this.chartHandler = this.chartLib[v.type]
        this.changeHandler()
      }
    },

    width: 'nextTickResize',
    height: 'nextTickResize',

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
      return this.colors || (this.theme && this.theme.color) || DEFAULT_COLORS
    }
  },

  methods: {
    dataHandler () {
      if (!this.chartHandler) return
      let data = this.data
      const { columns = [], rows = [] } = data
      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        echarts: this.echarts,
        color: this.chartColor,
        tooltipFormatter: this.tooltipFormatter,
        _once: this._once
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

    nextTickResize () {
      this.$nextTick(_ => { this.echarts.resize() })
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
          const value = this.extend[attr]
          if (~attr.indexOf('.')) {
            // eg: a.b.c a.1.b
            set(options, attr, value)
          } else if (typeof value === 'function') {
            // get callback value
            options[attr] = value(options[attr])
          } else {
            // mixin extend value
            if (isArray(options[attr]) && isObject(options[attr][0])) {
              // eg: [{ xx: 1 }, { xx: 2 }]
              options[attr].forEach((option, index) => {
                options[attr][index] = Object.assign({}, option, value)
              })
            } else if (isObject(options[attr])) {
              // eg: { xx: 1, yy: 2 }
              options[attr] = Object.assign({}, options[attr], value)
            } else {
              options[attr] = value
            }
          }
        })
      }

      if (this.afterConfig) options = this.afterConfig(options)
      let setOptionOpts = this.setOptionOpts
      if (this.settings.bmap || this.settings.amap) setOptionOpts = false
      this.echarts.setOption(options, setOptionOpts)
      this.$emit('ready', this.echarts)
      if (!this._once['ready-once']) {
        this._once['ready-once'] = true
        this.$emit('ready-once', this.echarts)
      }
      if (this.judgeWidth) this.judgeWidthHandler(options)
      if (this.afterSetOption) this.afterSetOption(this.echarts)
      if (this.afterSetOptionOnce && !this._once['afterSetOptionOnce']) {
        this._once['afterSetOptionOnce'] = true
        this.afterSetOptionOnce(this.echarts)
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
      const themeName = this.themeName || this.theme || DEFAULT_THEME
      this.echarts = echartsLib.init(this.$refs.canvas, themeName, this.initOptions)
      if (this.data) this.changeHandler()
      this.createEventProxy()
      if (this.resizeable) window.addEventListener('resize', this.resizeHandler)
    },

    addWatchToProps () {
      const watchedVariable = this._watchers.map(watcher => watcher.expression)
      Object.keys(this.$props).forEach(prop => {
        if (!~watchedVariable.indexOf(prop) && !~STATIC_PROPS.indexOf(prop)) {
          const opts = {}
          if (~['[object Object]', '[object Array]'].indexOf(getType(this.$props[prop]))) {
            opts.deep = true
          }
          this.$watch(prop, () => {
            this.changeHandler()
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
      if (this.resizeable) window.removeEventListener('resize', this.resizeHandler)
      this.echarts.dispose()
    }
  },

  created () {
    this.echarts = null
    this.registeredEvents = []
    this._once = {}
    this.resizeHandler = debounce(_ => {
      this.echarts && this.echarts.resize()
    }, this.resizeDelay)
    this.changeHandler = debounce(_ => {
      this.dataHandler()
    }, this.changeDelay)
    this.addWatchToProps()
  },

  mounted () {
    this.init()
  },

  beforeDestroy () {
    this.clean()
  },

  _numerify: numerify
}
