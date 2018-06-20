export default {
  name: '关系图',
  type: 'graph',
  data: [
    {
      name: '简单关系图',
      data: {
        columns: ['name', 'value', '额外', '额外1', '隐藏', '合并'],
        rows: [
          { id: 0, name: 'node-0', cat: '1', value: 1, '额外': 123, '额外1': 234, '隐藏': 345, '合并': { symbolSize: 10 } },
          { id: 1, name: 'node-1', cat: '2', value: 1, '额外': 123, '额外1': 234, '隐藏': 345, '合并': { symbolSize: 20 } },
          { id: 2, name: 'node-2', cat: '3', value: 2, '额外': 123, '额外1': 234, '隐藏': 345, '合并': { symbolSize: 30 } },
          { id: 3, name: 'node-3', cat: '1', value: 3, '额外': 123, '额外1': 234, '隐藏': 345, '合并': { symbolSize: 40 } },
          { id: 4, name: 'node-4', cat: '4', value: 4, '额外': 123, '额外1': 234, '隐藏': 345, '合并': { symbolSize: 50 } },
          { id: 5, name: 'node-5', cat: '2', value: 5, '额外': 123, '额外1': 234, '隐藏': 345, '合并': { symbolSize: 60 } }
        ]
      },
      settings: {
        links: [
          { source: 1, target: 0 },
          { source: 2, target: 1 },
          { source: 1, target: 2 },
          { source: 1, target: 3 },
          { source: 1, target: 4 },
          { source: 1, target: 5 },
          { source: 1, target: 6 }
        ],
        idMetrics: 'id',
        extraMetrics: ['额外', '额外1'],
        silentMetrics: ['隐藏'],
        // mixinMetrics: ['合并'],
        // categoryMetrics: ['cat'],
        showSize: true,
        // sizeMin: 10,
        showCartesian2d: true
      }
    }
  ]
}
