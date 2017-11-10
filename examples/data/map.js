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
        position: 'china',
        dataType: {
          'GDP': 'KMB'
        }
      }
    },
    {
      name: '自定义 JSON 地图',
      data: {
        columns: ['位置', ' 人口'],
        rows: [
          { '位置': 'North', ' 人口': 123 }
        ]
      },
      settings: {
        positionJsonLink: 'https://dn-quietcoder.qbox.me/HK_geo.json',
        position: 'HK',
        beforeRegisterMap (json) {
          // edit data here such as:
          // json.features[0].properties.cp = [121.509062, 26.044332]
          return json
        }
      }
    },
    {
      name: '设置数据标示',
      data: {
        columns: ['位置', 'GDP', '人口'],
        rows: [
          { '位置': '吉林', 'GDP': 123, '人口': 234 },
          { '位置': '北京', 'GDP': 1223, '人口': 1234 },
          { '位置': '上海', 'GDP': 2123, '人口': 3234 },
          { '位置': '浙江', 'GDP': 4123, '人口': 4234 }
        ]
      },
      settings: {
        position: 'china',
        selectData: true,
        label: false
      }
    },
    {
      name: '设置位置选择模式',
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
      name: '设置省份显示',
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
    },
    {
      name: '设置数据别名',
      data: {
        columns: ['位置', 'GDP', '人口'],
        rows: [
          { '位置': '吉林', 'GDP': 123, '人口': 234 },
          { '位置': '北京', 'GDP': 1223, '人口': 1234 },
          { '位置': '上海', 'GDP': 2123, '人口': 3234 },
          { '位置': '浙江', 'GDP': 4123, '人口': 4234 }
        ]
      },
      settings: {
        labelMap: {
          '人口': '人口密度'
        }
      }
    },
    {
      name: '设置legendName别名地图',
      data: {
        columns: ['位置', 'GDP', '人口'],
        rows: [
          { '位置': '吉林', 'GDP': 123, '人口': 234 },
          { '位置': '北京', 'GDP': 1223, '人口': 1234 },
          { '位置': '上海', 'GDP': 2123, '人口': 3234 },
          { '位置': '浙江', 'GDP': 4123, '人口': 4234 }
        ]
      },
      settings: {
        legendName: {
          '人口': '人口密度'
        }
      }
    }
  ]
}
