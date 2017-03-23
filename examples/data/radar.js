export default {
  name: '雷达图',
  type: 'radar',
  data: [
    {
      name: '雷达图',
      data: [
        { '房价': 10000, '收入': 4000, '人口比例': 0.4, name: '北京' },
        { '房价': 20000, '收入': 6000, '人口比例': 0.6, name: '上海' },
        { '房价': 30000, '收入': 8000, '人口比例': 0.2, name: '广州' }
      ],
      settings: {
        dataType: {
          '人口比例': 'percent'
        }
      }
    }
  ]
}
