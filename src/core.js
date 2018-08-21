import echartsLib from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import numerify from 'numerify'
import {
  getType,
  debounce,
  camelToKebab,
  isArray,
  isObject,
  cloneDeep,
  isEqual
} from 'utils-lite'

import Loading from './components/loading'
import DataEmpty from './components/data-empty'
import {
  DEFAULT_COLORS,
  DEFAULT_THEME,
  STATIC_PROPS,
  ECHARTS_SETTINGS
} from './constants'
import setExtend from './modules/extend'
import setMark from './modules/mark'
import setAnimation from './modules/animation'

export default {
  render (h) {
    return h('div', {
      class: [camelToKebab(this.$options.name || this.$options._componentTag)],
      style: this.canvasStyle
    }, [
      h('div', {
        style: this.canvasStyle,
        class: { 'v-charts-mask-status': this.dataEmpty || this.loading },
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
    setOptionOpts: { type: [Boolean, Object], default: true },
    cancelResizeCheck: Boolean,
    notSetUnchange: Array,
    log: Boolean
  },

  watch: {
    data: {
      deep: true,
      handler (v) { if (v) { this.changeHandler() } }
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
      handler: 'createEventProxy'
    },

    theme: {
      deep: true,
      handler: 'themeChange'
    },

    themeName: 'themeChange',

    resizeable: 'resizeableHandler'
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

    nextTickResize () { this.$nextTick(this.resize) },

    resize () {
      if (!this.cancelResizeCheck) {
        if (this.$el &&
          this.$el.clientWidth &&
          this.$el.clientHeight) {
          this.echartsResize()
        }
      } else {
        this.echartsResize()
      }
    },

    echartsResize () { this.echarts && this.echarts.resize() },

    optionsHandler (options) {
      // legend
      if (this.legendPosition && options.legend) {
        options.legend[this.legendPosition] = 10
        if (~['left', 'right'].indexOf(this.legendPosition)) {
          options.legend.top = 'middle'
          options.legend.orient = 'vertical'
        }
      }
      // color
      options.color = this.chartColor
      // echarts self settings
      ECHARTS_SETTINGS.forEach(setting => {
        if (this[setting]) options[setting] = this[setting]
      })
      // animation
      if (this.animation) setAnimation(options, this.animation)
      // marks
      if (this.markArea || this.markLine || this.markPoint) {
        const marks = {
          markArea: this.markArea,
          markLine: this.markLine,
          markPoint: this.markPoint
        }
        const series = options.series
        if (isArray(series)) {
          series.forEach(item => { setMark(item, marks) })
        } else if (isObject(series)) {
          setMark(series, marks)
        }
      }
      // change inited echarts settings
      if (this.extend) setExtend(options, this.extend)
      if (this.afterConfig) options = this.afterConfig(options)
      let setOptionOpts = this.setOptionOpts
      // map chart not merge
      if ((this.settings.bmap || this.settings.amap) &&
        !isObject(setOptionOpts)) {
        setOptionOpts = false
      }
      // exclude unchange options
      if (this.notSetUnchange && this.notSetUnchange.length) {
        this.notSetUnchange.forEach(item => {
          const value = options[item]
          if (value) {
            if (isEqual(value, this._store[item])) {
              options[item] = undefined
            } else {
              this._store[item] = cloneDeep(value)
            }
          }
        })
        if (isObject(setOptionOpts)) {
          setOptionOpts.notMerge = false
        } else {
          setOptionOpts = false
        }
      }
      if (this._isDestroyed) return
      if (this.log) console.log(options)
      this.echarts.setOption(options, setOptionOpts)
      this.$emit('ready', this.echarts, options, echartsLib)
      if (!this._once['ready-once']) {
        this._once['ready-once'] = true
        this.$emit('ready-once', this.echarts, options, echartsLib)
      }
      if (this.judgeWidth) this.judgeWidthHandler(options)
      if (this.afterSetOption) this.afterSetOption(this.echarts, options, echartsLib)
      if (this.afterSetOptionOnce && !this._once['afterSetOptionOnce']) {
        this._once['afterSetOptionOnce'] = true
        this.afterSetOptionOnce(this.echarts, options, echartsLib)
      }
    },

    judgeWidthHandler (options) {
      const { widthChangeDelay, resize } = this
      if (this.$el.clientWidth || this.$el.clientHeight) {
        resize()
      } else {
        this.$nextTick(_ => {
          if (this.$el.clientWidth || this.$el.clientHeight) {
            resize()
          } else {
            setTimeout(_ => {
              resize()
              if (!this.$el.clientWidth || !this.$el.clientHeight) {
                console.warn(' Can\'t get dom width or height ')
              }
            }, widthChangeDelay)
          }
        })
      }
    },

    resizeableHandler (resizeable) {
      if (resizeable && !this._once.onresize) this.addResizeListener()
      if (!resizeable && this._once.onresize) this.removeResizeListener()
    },

    init () {
      if (this.echarts) return
      const themeName = this.themeName || this.theme || DEFAULT_THEME
      this.echarts = echartsLib.init(this.$refs.canvas, themeName, this.initOptions)
      if (this.data) this.changeHandler()
      this.createEventProxy()
      if (this.resizeable) this.addResizeListener()
    },

    addResizeListener () {
      window.addEventListener('resize', this.resizeHandler)
      this._once.onresize = true
    },

    removeResizeListener () {
      window.removeEventListener('resize', this.resizeHandler)
      this._once.onresize = false
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
      if (this.resizeable) this.removeResizeListener()
      this.echarts.dispose()
    }
  },

  created () {
    this.echarts = null
    this.registeredEvents = []
    this._once = {}
    this._store = {}
    this.resizeHandler = debounce(this.resize, this.resizeDelay)
    this.changeHandler = debounce(this.dataHandler, this.changeDelay)
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
