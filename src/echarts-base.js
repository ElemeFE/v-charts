import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import './object-assign.js'

echarts.registerTheme('ve-chart', {
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
  grid: {
    containLabel: true,
    left: 10,
    right: 10
  }
})

export const itemPoint = (color) => {
  return [
    '<span style="',
    `background-color:${color};`,
    'display: inline-block;',
    'width: 10px;',
    'height: 10px;',
    'border-radius: 50%;',
    'margin-right:2px;',
    '"></span>'
  ].join('')
}

export const color = [
  '#19d4ae', '#5ab1ef', '#fa6e86',
  '#ffb980', '#0067a6', '#c4b4e4',
  '#d87a80', '#9cbbff', '#d9d0c7',
  '#87a997', '#d49ea2', '#5b4947',
  '#7ba3a8'
]

export default echarts
