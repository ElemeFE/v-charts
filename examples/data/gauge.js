export default {
  name: '仪表盘',
  type: 'gauge',
  data: [
    {
      name: '简单仪表盘',
      data: {
        columns: ['type', 'value'],
        rows: [
          { type: '油量', value: 123 }
        ]
      },
      settings: {}
    },
    {
      name: '设置指标维度',
      data: {
        columns: ['a', 'b', 'type', 'value'],
        rows: [
          { type: '油量', value: 123, a: 1, b: 2 }
        ]
      },
      settings: {
        dimension: 'type',
        metrics: 'value'
      }
    },
    {
      name: '设置数据类型',
      data: {
        columns: ['type', 'value'],
        rows: [
          { type: '油量', value: 0.12 }
        ]
      },
      settings: {
        dataType: {
          '油量': 'percent'
        },
        seriesMap: {
          '油量': {
            min: 0,
            max: 1
          }
        }
      }
    },
    {
      name: '设置别名',
      data: {
        columns: ['type', 'value'],
        rows: [
          { type: 'speed', value: 123 }
        ]
      },
      settings: {
        labelMap: {
          speed: '速度'
        },
        dataName: {
          speed: 'km/h'
        }
      }
    },
    {
      name: '多个仪表盘',
      data: {
        columns: ['type', 'value'],
        rows: [
          { type: '油量', value: 2343 },
          { type: '速度', value: 123 }
        ]
      },
      settings: {
        seriesMap: {
          '油量': {
            radius: 90,
            center: ['25%', '55%'],
            min: 0,
            max: 10000
          },
          '速度': {
            radius: 90,
            center: ['75%', '55%']
          }
        }
      }
    }
  ]
}
