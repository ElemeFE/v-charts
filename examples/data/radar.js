export default {
  name: '雷达图',
  type: 'radar',
  data: [
    {
      name: '简单雷达图',
      data: {
        columns: ['城市', '房价', '收入', '人口比例'],
        rows: [
          { '房价': 10000, '收入': 4000, '人口比例': 0.4, '城市': '北京' },
          { '房价': 20000, '收入': 6000, '人口比例': 0.6, '城市': '上海' },
          { '房价': 30000, '收入': 8000, '人口比例': 0.2, '城市': '广州' }
        ]
      },
      settings: {
        dataType: {
          '人口比例': 'percent'
        }
      }
    },
    {
      name: '指标维度配置',
      data: {
        columns: ['城市', '房价', '收入', '人口比例'],
        rows: [
          { '房价': 10000, '收入': 4000, '人口比例': 0.4, '城市': '北京' },
          { '房价': 20000, '收入': 6000, '人口比例': 0.6, '城市': '上海' },
          { '房价': 30000, '收入': 8000, '人口比例': 0.2, '城市': '广州' }
        ]
      },
      settings: {
        dataType: {
          '人口比例': 'percent'
        },
        dimension: '城市',
        metrics: ['收入', '人口比例', '房价']
      }
    },
    {
      name: '样式配置',
      data: {
        columns: ['城市', '房价', '收入', '人口比例'],
        rows: [
          { '房价': 10000, '收入': 4000, '人口比例': 0.4, '城市': '北京' },
          { '房价': 20000, '收入': 6000, '人口比例': 0.6, '城市': '上海' },
          { '房价': 30000, '收入': 8000, '人口比例': 0.2, '城市': '广州' }
        ]
      },
      settings: {
        label: {
          normal: {
            color: 'red',
            show: true
          }
        }
      }
    },
    {
      name: '雷达图配置labelMap',
      data: {
        columns: ['city', 'housePrices', 'income', 'proportion'],
        rows: [
          { 'housePrices': 10000, 'income': 4000, 'proportion': 0.4, 'city': '北京' },
          { 'housePrices': 20000, 'income': 6000, 'proportion': 0.6, 'city': '上海' },
          { 'housePrices': 30000, 'income': 8000, 'proportion': 0.2, 'city': '广州' }
        ]
      },
      settings: {
        labelMap: {
          'city': '城市',
          'housePrices': '房价',
          'income': '收入',
          'proportion': '人口比例'
        }
      }
    },
    {
      name: '雷达图配置legendName',
      data: {
        columns: ['城市', '房价', '收入', '人口比例'],
        rows: [
          { '房价': 10000, '收入': 4000, '人口比例': 0.4, '城市': '北京' },
          { '房价': 20000, '收入': 6000, '人口比例': 0.6, '城市': '上海' },
          { '房价': 30000, '收入': 8000, '人口比例': 0.2, '城市': '广州' }
        ]
      },
      settings: {
        legendName: {
          '北京': 'BeiJing'
        }
      }
    }
  ]
}
