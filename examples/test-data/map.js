export default {
  name: '地图',
  type: 'map',
  data: [
    {
      name: '地图',
      data: {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '吉林', 'GDP': 123 },
          { '位置': '北京', 'GDP': 1223 },
          { '位置': '上海', 'GDP': 2123 },
          { '位置': '浙江', 'GDP': 4123 }
        ]
      },
      settings: {
        position: 'china'
      }
    },
    {
      name: '设置数据标示',
      data: {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '吉林', 'GDP': 123 },
          { '位置': '北京', 'GDP': 1223 },
          { '位置': '上海', 'GDP': 2123 },
          { '位置': '浙江', 'GDP': 4123 }
        ]
      },
      settings: {
        position: 'china',
        selectData: true
      }
    },
    {
      name: '设置位置可选',
      data: {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '吉林', 'GDP': 123 },
          { '位置': '北京', 'GDP': 1223 },
          { '位置': '上海', 'GDP': 2123 },
          { '位置': '浙江', 'GDP': 4123 }
        ]
      },
      settings: {
        position: 'china',
        selectedMode: 'multiple'
      }
    },
    {
      name: '显示省份的地图',
      data: {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '长春市', 'GDP': 123 },
          { '位置': '松原市', 'GDP': 1223 },
          { '位置': '辽源市', 'GDP': 2123 },
          { '位置': '白山市', 'GDP': 4123 }
        ]
      },
      settings: {
        position: 'province/jilin',
        selectData: true
      }
    }
  ]
}
