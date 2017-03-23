export default {
  name: '环图',
  type: 'ring',
  data: [
    {
      name: '环图',
      data: {
        '直接访问': 111,
        '邮件营销': 222,
        '联盟广告': 333
      },
      settings: {}
    },
    {
      name: '直接显示比例环图',
      data: {
        '直接访问': 111,
        '邮件营销': 222,
        '联盟广告': 333
      },
      settings: {
        percentShow: true
      }
    },
    {
      name: '百分比类型数据环图',
      data: {
        '直接访问': 0.211,
        '邮件营销': 0.42,
        '联盟广告': 0.333
      },
      settings: {
        dataType: 'percent'
      }
    }
  ]
}
