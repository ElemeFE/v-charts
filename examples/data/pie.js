export default {
  name: '饼图',
  type: 'pie',
  data: [
    {
      name: '饼图',
      data: {
        a: 1,
        b: 2,
        c: 3
      },
      settings: {}
    },
    {
      name: '直接显示比例饼图',
      data: {
        a: 1,
        b: 2,
        c: 3
      },
      settings: {
        percentShow: true
      }
    },
    {
      name: '百分比类型数据饼图',
      data: {
        a: 0.1,
        b: 0.2,
        c: 0.3
      },
      settings: {
        dataType: 'percent'
      }
    }
  ]
}
