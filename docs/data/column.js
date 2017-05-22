export default {
  name: '柱状图',
  type: 'column',
  data: {
    base: {
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 9 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
      },
      settings: {
        yAxisType: ['KMB', 'normal'],
        yAxisName: ['余额', '年龄'],
        axisSite: {
          right: ['年龄']
        }
      }
    },
    properties: [
      {
        name: 'dimension',
        intro: '维度',
        type: 'array',
        example: '[\'余额\']',
        remark: '默认columns第一项为维度'
      },
      {
        name: 'metrics',
        intro: '指标',
        type: 'array',
        example: '[\'年龄\']',
        remark: '默认columns第二项为指标'
      },
      {
        name: 'yAxisType',
        intro: '上下坐标轴数据类型',
        type: 'array',
        example: '[\'KMB\', \'normal\']',
        remark: '可选值: KMB, normal, percent'
      },
      {
        name: 'yAxisName',
        intro: '上下坐标轴标题',
        type: 'array',
        example: '[\'余额\', \'年龄\']',
        remark: '-'
      },
      {
        name: 'axisSite',
        intro: '指标所在的轴',
        type: 'object',
        example: 'right: [\'年龄\']',
        remark: '默认不在top轴的指标都在bottom轴'
      },
      {
        name: 'stack',
        intro: '堆叠选项',
        type: 'object',
        example: '\'数字属性\': [\'年龄\', \'余额\']',
        remark: '默认不在top轴的指标都在bottom轴'
      }
    ]
  }
}
