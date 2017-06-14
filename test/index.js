import Vue from 'vue'
import chartData from '../examples/data/index.js'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/funnel'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/radar'
import { VeLine, VeBar, VeHistogram, VePie, VeRing, VeFunnel, VeRadar, VeWaterfall } from '../lib/index.esm'

const comps = {
  line: VeLine,
  bar: VeBar,
  histogram: VeHistogram,
  pie: VePie,
  ring: VeRing,
  funnel: VeFunnel,
  radar: VeRadar,
  waterfall: VeWaterfall
}
let box
let vm = {}
createBox()

afterEach(() => {
  if (vm.$el) document.body.removeChild(vm.$el)
  createBox()
})

function createBox () {
  box = document.createElement('div')
  box.id = 'app'
  document.body.appendChild(box)
}

Object.keys(comps).forEach(type => {
  testMount(type, comps[type])
})

function testMount (type, comp) {
  describe(type + ': ', () => {
    it('should mount right', () => {
      const Ctor = Vue.extend(comp)
      const vm = new Ctor({
        propsData: {
          data: chartData[type].data.base.data
        }
      }).$mount(box)

      expect(vm.$el.classList.contains('ve-' + type)).toEqual(true)
    })
  })
}

