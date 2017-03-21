export default {
  name: '雷达图',
  type: 'radar',
  data: [
    {
      name: '雷达图',
      data: [
        { d1: 0.1000, d2: 2000, d3: 3000, name: '北京' },
        { d1: 0.100, d2: 200, d3: 300, name: '北京' },
        { d1: 0.300, d2: 400, d3: 500, name: '上海' },
        { d1: 0.30, d2: 40, d3: 50, name: '上海' },
        { d1: 0.200, d2: 200, d3: 30, name: '广州' },
        { d1: 0.400, d2: 600, d3: 80, name: '广州' }
      ],
      settings: {
        dataType: {
          d1: 'percent'
        }
      }
    }
  ]
}
