export default {
  name: '漏斗图',
  type: 'funnel',
  data: [
    {
      name: '漏斗图',
      data: {
        'd-1': 100,
        'd-2': 200,
        'd-3': 500,
        'd-4': 300
      },
      settings: {}
    },
    {
      name: '定制顺序漏斗图',
      data: {
        'd-1': 100,
        'd-2': 200,
        'd-3': 500,
        'd-4': 300
      },
      settings: {
        sequence: ['d-1', 'd-2', 'd-3', 'd-4']
      }
    },
    {
      name: '设置数据类型漏斗图',
      data: {
        'd-1': 0.100,
        'd-2': 0.200,
        'd-3': 0.500,
        'd-4': 0.300
      },
      settings: {
        dataType: 'percent'
      }
    },
    {
      name: '金字塔图',
      data: {
        'd-1': 100,
        'd-2': 200,
        'd-3': 500,
        'd-4': 300
      },
      settings: {
        ascending: true
      }
    }
  ]
}
