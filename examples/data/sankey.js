export default {
  name: '桑基图',
  type: 'sankey',
  data: [
    {
      name: '简单桑基图',
      data: {
        columns: ['页面', '访问量'],
        rows: [
          { '页面': '首页', '访问量': 1000 },
          { '页面': '列表页a', '访问量': 200 },
          { '页面': '列表页b', '访问量': 800 },
          { '页面': '内容页a-1', '访问量': 100 },
          { '页面': '内容页a-2', '访问量': 100 },
          { '页面': '内容页b-1', '访问量': 600 },
          { '页面': '内容页b-2', '访问量': 200 }
        ]
      },
      settings: {
        links: [
          { source: '首页', target: '列表页a' },
          { source: '首页', target: '列表页b' },
          { source: '列表页a', target: '内容页a-1' },
          { source: '列表页a', target: '内容页a-2' },
          { source: '列表页b', target: '内容页b-1' },
          { source: '列表页b', target: '内容页b-2' }
        ]
      }
    },
    {
      name: '强制设置使用 rows 中的数据',
      data: {
        columns: ['页面', '访问量'],
        rows: [
          { '页面': '首页', '访问量': 1000 },
          { '页面': '列表页a', '访问量': 200 },
          { '页面': '列表页b', '访问量': 800 },
          { '页面': '内容页a-1', '访问量': 100 },
          { '页面': '内容页a-2', '访问量': 100 },
          { '页面': '内容页b-1', '访问量': 600 },
          { '页面': '内容页b-2', '访问量': 200 }
        ]
      },
      settings: {
        links: [
          { source: '首页', target: '列表页a', value: '' },
          { source: '首页', target: '列表页b', value: '' },
          { source: '列表页a', target: '内容页a-1', value: '' },
          { source: '列表页a', target: '内容页a-2', value: '' },
          { source: '列表页b', target: '内容页b-1', value: '' },
          { source: '列表页b', target: '内容页b-2', value: '' }
        ],
        useDataValue: true
      }
    },
    {
      name: '设置数据类型',
      data: {
        columns: ['页面', '访问量'],
        rows: [
          { '页面': '首页', '访问量': 100000 },
          { '页面': '列表页a', '访问量': 20000 },
          { '页面': '列表页b', '访问量': 80000 },
          { '页面': '内容页a-1', '访问量': 10000 },
          { '页面': '内容页a-2', '访问量': 10000 },
          { '页面': '内容页b-1', '访问量': 60000 },
          { '页面': '内容页b-2', '访问量': 20000 }
        ]
      },
      settings: {
        links: [
          { source: '首页', target: '列表页a', value: 0.1 },
          { source: '首页', target: '列表页b', value: 0.1 },
          { source: '列表页a', target: '内容页a-1', value: 0.1 },
          { source: '列表页a', target: '内容页a-2', value: 0.1 },
          { source: '列表页b', target: '内容页b-1', value: 0.1 },
          { source: '列表页b', target: '内容页b-2', value: 0.1 }
        ],
        dataType: ['KMB', 'percent']
      }
    },
    {
      name: '样式设置',
      data: {
        columns: ['页面', '访问量'],
        rows: [
          { '页面': '首页', '访问量': 100000 },
          { '页面': '列表页a', '访问量': 20000 },
          { '页面': '列表页b', '访问量': 80000 },
          { '页面': '内容页a-1', '访问量': 10000 },
          { '页面': '内容页a-2', '访问量': 10000 },
          { '页面': '内容页b-1', '访问量': 60000 },
          { '页面': '内容页b-2', '访问量': 20000 }
        ]
      },
      settings: {
        links: [
          { source: '首页', target: '列表页a', value: 0.1 },
          { source: '首页', target: '列表页b', value: 0.1 },
          { source: '列表页a', target: '内容页a-1', value: 0.1 },
          { source: '列表页a', target: '内容页a-2', value: 0.1 },
          { source: '列表页b', target: '内容页b-1', value: 0.1 },
          { source: '列表页b', target: '内容页b-2', value: 0.1 }
        ],
        label: {
          normal: {
            show: true,
            color: '#00f'
          }
        }
      }
    }
  ]
}
