export default {
  name: '雷达图',
  type: 'radar',
  data: {
    base: {
      data: {
        columns: ['城市', '房价', '收入', '人口比例'],
        rows: [
          { '房价': 10000, '收入': 4000, '人口比例': 0.4, '城市': '北京' },
          { '房价': 20000, '收入': 6000, '人口比例': 0.6, '城市': '上海' },
          { '房价': 30000, '收入': 8000, '人口比例': 0.2, '城市': '广州' }
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
        name: 'dataType',
        intro: '数据格式',
        type: 'string',
        example: 'percent',
        remark: '可选值: KMB, normal, percent'
      }
    ]
  }
}
