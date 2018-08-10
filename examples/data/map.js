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
      name: '设置地图的特殊位置',
      data: {
        columns: ['name', 'value'],
        rows: [
          { name: 'Alabama', value: 4822023 },
          { name: 'Alaska', value: 731449 },
          { name: 'Arizona', value: 6553255 },
          { name: 'Arkansas', value: 2949131 },
          { name: 'California', value: 38041430 },
          { name: 'Colorado', value: 5187582 },
          { name: 'Connecticut', value: 3590347 },
          { name: 'Delaware', value: 917092 },
          { name: 'District of Columbia', value: 632323 },
          { name: 'Florida', value: 19317568 },
          { name: 'Georgia', value: 9919945 },
          { name: 'Hawaii', value: 1392313 },
          { name: 'Idaho', value: 1595728 },
          { name: 'Illinois', value: 12875255 },
          { name: 'Indiana', value: 6537334 },
          { name: 'Iowa', value: 3074186 },
          { name: 'Kansas', value: 2885905 },
          { name: 'Kentucky', value: 4380415 },
          { name: 'Louisiana', value: 4601893 },
          { name: 'Maine', value: 1329192 },
          { name: 'Maryland', value: 5884563 },
          { name: 'Massachusetts', value: 6646144 },
          { name: 'Michigan', value: 9883360 },
          { name: 'Minnesota', value: 5379139 },
          { name: 'Mississippi', value: 2984926 },
          { name: 'Missouri', value: 6021988 },
          { name: 'Montana', value: 1005141 },
          { name: 'Nebraska', value: 1855525 },
          { name: 'Nevada', value: 2758931 },
          { name: 'New Hampshire', value: 1320718 },
          { name: 'New Jersey', value: 8864590 },
          { name: 'New Mexico', value: 2085538 },
          { name: 'New York', value: 19570261 },
          { name: 'North Carolina', value: 9752073 },
          { name: 'North Dakota', value: 699628 },
          { name: 'Ohio', value: 11544225 },
          { name: 'Oklahoma', value: 3814820 },
          { name: 'Oregon', value: 3899353 },
          { name: 'Pennsylvania', value: 12763536 },
          { name: 'Rhode Island', value: 1050292 },
          { name: 'South Carolina', value: 4723723 },
          { name: 'South Dakota', value: 833354 },
          { name: 'Tennessee', value: 6456243 },
          { name: 'Texas', value: 26059203 },
          { name: 'Utah', value: 2855287 },
          { name: 'Vermont', value: 626011 },
          { name: 'Virginia', value: 8185867 },
          { name: 'Washington', value: 6897012 },
          { name: 'West Virginia', value: 1855413 },
          { name: 'Wisconsin', value: 5726398 },
          { name: 'Wyoming', value: 576412 },
          { name: 'Puerto Rico', value: 3667084 }
        ]
      },
      settings: {
        position: 'USA',
        positionJsonLink: 'https://unpkg.com/v-charts-custom-maps@0.2.1/usa.json',
        specialAreas: {
          Alaska: {
            left: -131,
            top: 25,
            width: 15
          },
          Hawaii: {
            left: -110,
            top: 28,
            width: 5
          },
          'Puerto Rico': {
            left: -76,
            top: 26,
            width: 2
          }
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
        positionJsonLink: 'https://unpkg.com/v-charts-custom-maps@0.2.1/hk-geo.json',
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
