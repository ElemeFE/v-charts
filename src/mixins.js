const chartMixin = {
  props: {
    data: { type: [Object, Array], default: null },
    settings: { type: Object, default () { return {} } },
    width: { type: String, default: 'auto' },
    height: { type: String, default: '400px' }
  },

  watch: {
    data (v) {
      const dataKeys = Object.keys(v)
      const dataKeyProp = v.key
      if ((dataKeyProp && Array.isArray(dataKeyProp) && dataKeyProp.length) || dataKeys.length) {
        this.processData(v)
      } else {
        this.showLoading('data-empty')
      }
    }
  },

  computed: {
    canvasStyle () {
      return { width: this.width, height: this.height }
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
