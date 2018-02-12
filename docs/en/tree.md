### 树图

#### 示例

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/u1L4kxas/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### 多树图

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
  module.exports = {
    created: function () {
      this.chartData = {
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
    }
  }
</script>
</script>

#### 径向树图

<vuep template="#radial-tree"></vuep>

<script v-pre type="text/x-template" id="radial-tree">
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
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [treeData]
          }
        ]
      }
      this.chartSettings = {
        seriesMap: {
          tree1: {
            layout: 'radial'
          }
        }
      }
    }
  }
</script>
</script>

#### 纵向树图

<vuep template="#vertical-tree"></vuep>

<script v-pre type="text/x-template" id="vertical-tree">
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
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [treeData]
          }
        ]
      }
      this.chartSettings = {
        seriesMap: {
          tree1: {
            orient: 'vertical'
          }
        }
      }
    }
  }
</script>
</script>

#### 自定义提示框内容

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
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [treeData]
          }
        ]
      }
      this.chartSettings = {}
      this.chartExtend = {
        tooltip: {
          alwaysShowContent: true
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

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | String | 默认columns第一项为维度 |
| metrics | 指标 | String | 默认columns第二项为指标 |
| seriesMap | 附加到 series 中的设置 | Object | - |

> 备注1： 通过 seriesMap，可以为每一个树设置样式，具体样式的配置可以参考[文档](http://echarts.baidu.com/option.html#series-tree)
