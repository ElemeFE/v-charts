export default {
  name: '散点图',
  type: 'scatter',
  data: [
    {
      data: [
        { d1: 1000, d2: 2000, d3: 3000, name: '1991' },
        { d1: 2000, d2: 3000, d3: 4000, name: '1991' },
        { d1: 3000, d2: 5000, d3: 8000, name: '1991' },
        { d1: 300, d2: 400, d3: 500, name: '1992' },
        { d1: 330, d2: 500, d3: 200, name: '1992' },
        { d1: 30, d2: 40, d3: 50, name: '1992' },
        { d1: 100, d2: 200, d3: 30, name: '1993' },
        { d1: 150, d2: 250, d3: 60, name: '1993' },
        { d1: 200, d2: 200, d3: 30, name: '1993' }
      ],
      settings: {
        dataType: ['normal', 'normal', 'KMB'],
        axisNames: ['d1', 'd2', 'd3']
      }
    }
  ]
}
