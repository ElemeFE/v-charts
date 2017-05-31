### 条形图

#### 示例

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/m1hdcmf4/5/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | Array | 默认columns第一项为维度 |
| metrics | 指标 | Array | 默认columns第二项为指标 |
| xAxisType | 上下坐标轴数据类型 | Array | 可选值: KMB, normal, percent |
| xAxisName | 上下坐标轴标题 | Array | - |
| axisSite | 指标所在的轴 | Object | 默认不在top轴的指标都在bottom轴 |
| stack | 堆叠选项 | Object | - |

> 备注1. axisSite 可以设置 top 和 bottom，例如示例所示 `axisSite: { top: ['占比'] }` 即将占比的数据置于上轴上。

> 备注2. stack 用于将两数据堆叠起来，例如实例中所示`stack: { '销售额': ['销售额-1季度', '销售额-2季度'] }` 即将'销售额-1季度', '销售额-2季度'相应的数据堆叠在一起。
