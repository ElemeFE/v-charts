export const DEFAULT_THEME = {
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
}

export const DEFAULT_COLORS = [
  '#19d4ae', '#5ab1ef', '#fa6e86',
  '#ffb980', '#0067a6', '#c4b4e4',
  '#d87a80', '#9cbbff', '#d9d0c7',
  '#87a997', '#d49ea2', '#5b4947',
  '#7ba3a8'
]

export const HEAT_MAP_COLOR = [
  '#313695', '#4575b4', '#74add1',
  '#abd9e9', '#e0f3f8', '#ffffbf',
  '#fee090', '#fdae61', '#f46d43',
  '#d73027', '#a50026'
]

export const HEAT_BMAP_COLOR = [
  'blue', 'blue', 'green',
  'yellow', 'red'
]

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

export const STATIC_PROPS = [
  'initOptions', 'loading', 'dataEmpty',
  'judgeWidth', 'widthChangeDelay'
]

export const ECHARTS_SETTINGS = [
  'grid', 'dataZoom', 'visualMap',
  'toolbox', 'title', 'legend',
  'xAxis', 'yAxis', 'radar',
  'tooltip', 'axisPointer', 'brush',
  'geo', 'timeline', 'graphic',
  'series', 'backgroundColor', 'textStyle'
]
