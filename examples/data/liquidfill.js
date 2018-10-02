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
          percent: 0.6
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
        seriesMap: {
          '上海': {
            wave: [0.5, 0.3, 0.1],
            color: ['red', 'green', 'yellow']
          }
        }
      }
    },
    {
      name: '多个水球图(默认横向排列)',
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
          percent: 0.7
        }]
      },
      settings: {
        seriesMap: {
          '上海': {
            wave: [0.5, 0.3, 0.1],
            color: ['red', 'green', 'yellow'],
            label: {
              formatter (options) {
                return options.seriesName + ': ' + options.value
              },
              fontSize: 30
            }
          }
        }
      }
    },
    {
      name: '多个水球图(纵向排列)',
      data: {
        columns: ['city', 'percent'],
        rows: [{
          city: '上海',
          percent: 0.6
        }, {
          city: '广州',
          percent: 0.4
        }]
      },
      settings: {
        direction: 'column',
        seriesMap: {
          '上海': {
            wave: [0.5, 0.3, 0.1],
            color: ['red', 'green', 'yellow'],
            radius: '40%'
          },
          '广州': {
            radius: '40%'
          }
        }
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
          percent: 0.6
        }]
      },
      settings: {
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
