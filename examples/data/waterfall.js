export default {
  name: '瀑布图',
  type: 'waterfall',
  data: [
    {
      name: '瀑布图',
      data: { '吃饭': 4, '睡觉': 8, '工作': 12 },
      settings: {}
    },
    {
      name: '带轴类型瀑布图',
      data: { '吃饭': 0.2, '睡觉': 0.4, '工作': 0.4 },
      settings: {
        dataType: 'percent'
      }
    }
  ]
}
