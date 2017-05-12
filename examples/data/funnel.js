export default {
  name: '漏斗图',
  type: 'funnel',
  data: {
    base: {
      data: {
        columns: ['状态', '数值'],
        rows: [
          { '状态': '展示', '数值': 900 },
          { '状态': '访问', '数值': 600 },
          { '状态': '点击', '数值': 300 },
          { '状态': '订单', '数值': 100 }
        ]
      },
      settings: {}
    },
    properties: [
      {
        name: 'dimension',
        intro: '维度',
        type: 'string',
        example: '\'活动\'',
        remark: '默认columns第一项为维度'
      },
      {
        name: 'measure',
        intro: '指标',
        type: 'string',
        example: '\'时间\'',
        remark: '默认columns第二项为指标'
      },
      {
        name: 'sequence',
        intro: '数据显示顺序',
        type: 'array',
        example: '[\'订单\', \'点击\', \'访问\', \'展示\']',
        remark: '默认按照数据大小顺序'
      },
      {
        name: 'dataType',
        intro: '数据格式',
        type: 'string',
        example: 'percent',
        remark: '可选值: KMB, normal, percent'
      },
      {
        name: 'ascending',
        intro: '是否显示为金字塔',
        type: 'boolean',
        example: 'true',
        remark: ''
      }
    ]
  }
}
