export default {
  name: '漏斗图',
  type: 'funnel',
  data: [
    {
      name: '漏斗图',
      data: {
        '展示': 900,
        '访问': 600,
        '点击': 300,
        '订单': 100
      },
      settings: {}
    },
    {
      name: '定制顺序漏斗图',
      data: {
        '展示': 900,
        '访问': 600,
        '点击': 300,
        '订单': 100
      },
      settings: {
        sequence: ['展示', '点击', '访问', '订单']
      }
    },
    {
      name: '设置数据类型漏斗图',
      data: {
        '展示': 1,
        '访问': 0.8,
        '点击': 0.5,
        '订单': 0.3
      },
      settings: {
        dataType: 'percent'
      }
    },
    {
      name: '金字塔图',
      data: {
        '展示': 900,
        '访问': 600,
        '点击': 300,
        '订单': 100
      },
      settings: {
        ascending: true
      }
    }
  ]
}
