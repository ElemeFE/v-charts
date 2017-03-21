export default {
  name: '瀑布图',
  type: 'waterfall',
  data: [
    {
      name: '瀑布图',
      data: { d1: 100, d2: 200, d3: 300 },
      settings: {}
    },
    {
      name: '带轴类型瀑布图',
      data: { d1: 0.1, d2: 0.2, d3: 0.3 },
      settings: {
        axisType: 'percent'
      }
    }
  ]
}
