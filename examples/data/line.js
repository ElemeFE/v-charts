export default {
  name: '折线图',
  type: 'line',
  data: [
    {
      name: '折线图',
      data: {
        key: ['1', '2', '3', '4', '5', '6'],
        a: [20, 50, 30, 1, 50, 60],
        b: [7, 3, 4, 2, 5, 3]
      },
      settings: {}
    },
    {
      name: '双轴折线图',
      data: {
        key: ['1', '2', '3', '4', '5', '6'],
        a: [20, 50, 30, 1, 50, 60],
        b: [7, 3, 4, 2, 5, 3]
      },
      settings: {
        axisOption: {
          right: ['a']
        }
      }
    },
    {
      name: '带轴标题折线图',
      data: {
        key: ['1', '2', '3', '4', '5', '6'],
        a: [0.20, 0.50, 0.30, 0.1, 0.50, 0.60],
        b: [7, 3, 4, 2, 5, 3]
      },
      settings: {
        axisOption: {
          right: ['a']
        },
        axisName: ['title1', 'title2']
      }
    },
    {
      name: '带轴类型折线图',
      data: {
        key: ['1', '2', '3', '4', '5', '6'],
        a: [0.20, 0.50, 0.30, 0.1, 0.50, 0.60],
        b: [7, 3, 4, 2, 5, 3]
      },
      settings: {
        axisOption: {
          right: ['a']
        },
        axisType: ['KMB', 'percent'],
        axisName: ['title1', 'title2']
      }
    }
  ]
}
