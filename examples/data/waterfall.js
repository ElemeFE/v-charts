export default {
  name: '瀑布图',
  type: 'waterfall',
  data: {
    base: {
      data: {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 4 },
          { '活动': '睡觉', '时间': 10 },
          { '活动': '打豆豆', '时间': 5 }
        ]
      },
      settings: {
        totalNum: 24
      }
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
        name: 'totalNum',
        intro: '总量',
        type: 'number',
        example: '24',
        remark: '默认瀑布图总量为所有数据的和'
      },
      {
        name: 'dataType',
        intro: '数据格式',
        type: 'string',
        example: 'percent',
        remark: '可选值: KMB, normal, percent'
      },
      {
        name: 'totalName',
        intro: '总量的显示文案',
        type: 'string',
        example: '总时间',
        remark: '默认显示总计'
      },
      {
        name: 'remainName',
        intro: '剩余的显示文案',
        type: 'string',
        example: '剩余时间',
        remark: '默认显示其他'
      }
    ]
  }
}
