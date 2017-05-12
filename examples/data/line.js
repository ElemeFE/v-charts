export default {
  name: '折线图',
  type: 'line',
  data: {
    base: {
      data: {
        columns: ['日期', '余额', '比率'],
        rows: [
          { '日期': '1-1', '余额': 123, '比率': 0.1 },
          { '日期': '1-2', '余额': 1223, '比率': 0.2 },
          { '日期': '1-3', '余额': 2123, '比率': 0.3 },
          { '日期': '1-4', '余额': 4123, '比率': 0.4 },
          { '日期': '1-5', '余额': 3123, '比率': 0.5 },
          { '日期': '1-6', '余额': 7123, '比率': 0.6 }
        ]
      },
      settings: {
        axisSite: {
          right: ['比率']
        },
        yAxisType: ['KMB', 'percent']
      }
    },
    properties: [
      {
        name: 'dimensions',
        intro: '维度',
        type: 'array',
        example: '[\'余额\']',
        remark: '默认columns第一项为维度'
      },
      {
        name: 'measures',
        intro: '指标',
        type: 'array',
        example: '[\'年龄\']',
        remark: '默认columns第二项为指标'
      },
      {
        name: 'xAxisType',
        intro: '上下坐标轴数据类型',
        type: 'array',
        example: '[\'KMB\', \'normal\']',
        remark: '可选值: KMB, normal, percent'
      },
      {
        name: 'xAxisName',
        intro: '上下坐标轴标题',
        type: 'array',
        example: '[\'余额\', \'年龄\']',
        remark: '-'
      },
      {
        name: 'axisSite',
        intro: '指标所在的轴',
        type: 'object',
        example: 'top: [\'年龄\']',
        remark: '默认不在top轴的指标都在bottom轴'
      },
      {
        name: 'stack',
        intro: '堆叠选项',
        type: 'object',
        example: '\'数字属性\': [\'年龄\', \'余额\']',
        remark: '默认不在top轴的指标都在bottom轴'
      },
      {
        name: 'area',
        intro: '是否展示为面积图',
        type: 'boolean',
        example: 'true',
        remark: ''
      }
    ]
  }
}
