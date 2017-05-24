### 折线图

#### 示例

<iframe width="100%" height="415" src="//jsfiddle.net/vue_echarts/jepw6dy2/4/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | Array | 默认columns第一项为维度 |
| metrics | 指标 | Array | 默认columns第二项为指标 |
| yAxisType | 左右坐标轴数据类型 | Array | 可选值: KMB, normal, percent |
| yAxisName | 左右坐标轴标题 | Array | - |
| axisSite | 指标所在的轴 | Object | 默认不在right轴的指标都在left轴 |
| stack | 堆叠选项 | Object | - |
| area | 是否展示为面积图 | Boolean | 默认为false |

> 备注1. axisSite 可以设置 left 和 right，例如示例所示 `axisSite: { right: ['占比'] }` 即将占比的数据置于右轴上。

> 备注2. stack 用于将两数据堆叠起来，例如实例中所示`stack: { '销售额': ['销售额-1季度', '销售额-2季度'] }` 即将'销售额-1季度', '销售额-2季度'相应的数据堆叠在一起。
