# Tree

#### Example

<vuep template="#simple-tree"></vuep>

<script v-pre type="text/x-template" id="simple-tree">
<template>
  <ve-tree :data="chartData"></ve-tree>
</template>

<script>
  const treeData = {
    name: 'f',
    value: 1,
    link: 'https://ele.me',
    children: [
      {
        name: 'a',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'a-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'a-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'b',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'b-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'b-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'c',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'c-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'c-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'd',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'd-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'd-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      }
    ]
  }
  export default {
    data () {
      return {
        chartData: {
          columns: ['name', 'value'],
          rows: [
            {
              name: 'tree',
              value: [treeData]
            }
          ]
        }
      }
    }
  }
</script>
</script>

#### multi tree

<vuep template="#more-tree"></vuep>

<script v-pre type="text/x-template" id="more-tree">
<template>
  <ve-tree :data="chartData" :settings="chartSettings"></ve-tree>
</template>

<script>
  const treeData = {
    name: 'f',
    value: 1,
    link: 'https://ele.me',
    children: [
      {
        name: 'a',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'a-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'a-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'b',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'b-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'b-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'c',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'c-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'c-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'd',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'd-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'd-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      }
    ]
  }
  export default {
    data () {
      this.chartSettings = {
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
      return {
        chartData: {
          columns: ['name', 'value'],
          rows: [
            {
              name: 'tree1',
              value: [treeData]
            },
            {
              name: 'tree2',
              value: [treeData]
            }
          ]
        }
      }
    }
  }
</script>
</script>

#### radial tree

<vuep template="#radial-tree-1"></vuep>

<script v-pre type="text/x-template" id="radial-tree-1">
<template>
  <ve-tree :data="chartData" :settings="chartSettings"></ve-tree>
</template>

<script>
  const treeData = {
    name: 'f',
    value: 1,
    link: 'https://ele.me',
    children: [
      {
        name: 'a',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'a-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'a-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'b',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'b-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'b-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'c',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'c-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'c-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'd',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'd-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'd-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      }
    ]
  }
  export default {
    data () {
      this.chartSettings = {
        seriesMap: {
          tree1: {
            layout: 'radial'
          }
        }
      }
      return {
        chartData: {
          columns: ['name', 'value'],
          rows: [
            {
              name: 'tree1',
              value: [treeData]
            }
          ]
        }
      }
    }
  }
</script>
</script>

#### vertical tree

<vuep template="#vertical-tree-1"></vuep>

<script v-pre type="text/x-template" id="vertical-tree-1">
<template>
  <ve-tree :data="chartData" :settings="chartSettings"></ve-tree>
</template>

<script>
  const treeData = {
    name: 'f',
    value: 1,
    link: 'https://ele.me',
    children: [
      {
        name: 'a',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'a-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'a-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'b',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'b-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'b-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'c',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'c-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'c-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'd',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'd-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'd-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      }
    ]
  }
  export default {
    data () {
      this.chartSettings = {
        seriesMap: {
          tree1: {
            orient: 'vertical'
          }
        }
      }
      return {
        chartData: {
          columns: ['name', 'value'],
          rows: [
            {
              name: 'tree1',
              value: [treeData]
            }
          ]
        }
      }
    }
  }
</script>
</script>

#### custom tooltip of tree

<vuep template="#custom-tooltip-tree"></vuep>

<script v-pre type="text/x-template" id="custom-tooltip-tree">
<template>
  <ve-tree :data="chartData" :extend="chartExtend" :tooltip-formatter="tooltipFormatter" :settings="chartSettings"></ve-tree>
</template>

<script>
  const treeData = {
    name: 'f',
    value: 1,
    link: 'https://ele.me',
    children: [
      {
        name: 'a',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'a-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'a-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'b',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'b-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'b-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'c',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'c-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'c-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'd',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'd-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'd-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      }
    ]
  }
  export default {
    data () {
      this.chartExtend = {
        tooltip: {
          alwaysShowContent: true
        }
      }
      this.chartSettings = {}
      return {
        chartData: {
          columns: ['name', 'value'],
          rows: [
            {
              name: 'tree1',
              value: [treeData]
            }
          ]
        }
      }
    },
    methods: {
      tooltipFormatter (v) {
        console.log(v)
        return [
          `${v.seriesName}: ${v.data.value}`,
          `<a target="_blank" href="${v.data.link}">${v.data.link}</a>`
        ].join('<br>')
      }
    }
  }
</script>
</script>

#### settings

| attribute | description | type | remark |
| --- | --- | --- | --- |
| dimension | dimension of chart | string | default `columns[0]` |
| metrics | metrics of chart | string | defaut `columns[1]` |
| seriesMap | series of each gauge | object | - |

> 备注1:  by set `seriesMap`, you can set style for every tree, content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree)
