export default {
  name: '水球图',
  type: 'liquidfill',
  data: [
    {
      name: '简单水球图',
      data: {
        columns: ['city', 'percent'],
        rows: [{
          city: '上海',
          percent: 0.633333
        }]
      },
      settings: {}
    },
    {
      name: '分层水球图',
      data: {
        columns: ['city', 'percent'],
        rows: [{
          city: '上海',
          percent: 0.7
        }]
      },
      settings: {
        wave: [0.5, 0.3, 0.1],
        seriesMap: {
          '上海': {
            color: ['red', 'green', 'yellow']
          }
        }
      }
    },
    {
      name: '多个水球图',
      data: {
        columns: ['city', 'percent'],
        rows: [{
          city: '上海',
          percent: 0.6
        }, {
          city: '广州',
          percent: 0.4
        }, {
          city: '成都',
          percent: 0.9
        }]
      },
      settings: {
        wave: [[0.5, 0.3, 0.1], [0.3, 0.2], []],
        seriesMap: [
          {
            color: ['red', 'green', 'yellow'],
            label: {
              formatter (options) {
                const {
                  seriesName,
                  data: {
                    value
                  }
                } = options
                return `${seriesName}\n${value}`
              },
              fontSize: 30
            },
            center: ['18%', '50%'],
            radius: '50%'
          },
          {
            label: {
              formatter (options) {
                return `${options.seriesName}\n${options.data.value}`
              },
              fontSize: 30
            },
            center: ['50%', '50%'],
            radius: '50%'
          },
          {
            label: {
              fontSize: 30
            },
            center: ['80%', '50%'],
            radius: '50%'
          }
        ]
      }
    },
    {
      name: '水球图的形状',
      data: {
        columns: ['city', 'percent'],
        rows: [{
          city: '上海',
          percent: 0.6
        }]
      },
      settings: {
        seriesMap: {
          '上海': {
            shape: 'rect'
          }
        }
      }
    },
    {
      name: '水球图文字标签及样式设置',
      data: {
        columns: ['city', 'percent'],
        rows: [{
          city: '上海',
          percent: 0.6,
          val: 0.8
        }]
      },
      settings: {
        dimension: 'city',
        metrics: 'val',
        seriesMap: {
          '上海': {
            color: ['red'],
            itemStyle: {
              opacity: 0.2
            },
            emphasis: {
              itemStyle: {
                opacity: 0.8
              }
            },
            backgroundStyle: {
              color: 'yellow'
            },
            label: {
              formatter (options) {
                const {
                  seriesName,
                  value
                } = options
                return `${seriesName}\n${value * 100}%`
              },
              fontSize: 40,
              color: 'green',
              insideColor: 'red'
            }
          }
        }
      }
    }
  ]
}
