import { BASIC_DATA, SIMPLE_DATA } from './tree-data'

export default {
  name: '树图',
  type: 'tree',
  data: [
    {
      name: '简单树图',
      data: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [SIMPLE_DATA]
          }
        ]
      }
    },
    {
      name: '多树图',
      data: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [BASIC_DATA]
          },
          {
            name: 'tree2',
            value: [BASIC_DATA]
          }
        ]
      },
      settings: {
        seriesMap: {
          tree1: {
            top: '5%',
            left: '7%',
            bottom: '2%',
            right: '60%'
          },
          tree2: {
            top: '20%',
            left: '60%',
            bottom: '22%',
            right: '18%'
          }
        }
      }
    },
    {
      name: '径向树图',
      data: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [BASIC_DATA]
          }
        ]
      },
      settings: {
        seriesMap: {
          tree1: {
            layout: 'radial'
          }
        }
      }
    },
    {
      name: '纵向树图',
      data: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [BASIC_DATA]
          }
        ]
      },
      settings: {
        seriesMap: {
          tree1: {
            orient: 'vertical'
          }
        }
      }
    }
  ]
}
