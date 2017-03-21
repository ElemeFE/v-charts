import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

echarts.registerTheme('ve-chart', {
  color: [
    '#19d4ae', '#5ab1ef', '#fa6e86',
    '#ffb980', '#0067a6', '#c4b4e4',
    '#d87a80', '#9cbbff', '#d9d0c7',
    '#87a997', '#d49ea2', '#5b4947',
    '#7ba3a8'
  ],
  categoryAxis: {
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { show: false }
  },
  valueAxis: {
    axisLine: { show: false }
  },
  line: {
    smooth: true
  },
  bar: {
    label: {
      normal: { show: true, position: 'top' }
    }
  },
  pie: {
    radius: ['55%', '70%'],
    hoverAnimation: false
  },
  radar: {
    shape: 'circle',
    splitArea: { show: false }
  }
})

const SIGN = '@_@'
const getLabelName = (item) => item.split(SIGN)[0]
const tipPointStyle = [
  'display: inline-block;',
  'width: 10px;',
  'height: 10px;',
  'border-radius: 50%;',
  'margin-right:2px;'
].join('')

export { SIGN, getLabelName, tipPointStyle }
export default echarts
