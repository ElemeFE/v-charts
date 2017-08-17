### 柱状图

#### 示例

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/1Le0wps5/24/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | Array | 默认columns第一项为维度 |
| metrics | 指标 | Array | 默认columns第二项为指标 |
| yAxisType | 左右坐标轴数据类型 | Array | 可选值: KMB, normal, percent |
| yAxisName | 左右坐标轴标题 | Array | - |
| axisSite | 指标所在的轴 | Object | 默认不在right轴的指标都在left轴 |
| stack | 堆叠选项 | Object | - |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
| dataOrder | 设置数据排序方式 | Boolean, Object | 默认为false |
| scale | 是否是脱离 0 值比例 | Array | 默认为[false, false]，表示左右<br>两个轴都不会脱离0值比例。<br>设置成 true 后坐标刻度不会<br>强制包含零刻度<br> |
| min | 左右坐标轴最小值 | Array | - |
| max | 左右坐标轴最大值 | Array | - |
| labelMap | 设置指标的别名，同时作用于提示框和图例| Object | - |
| legendName | 设置图表上方图例的别名 | Object | - |
| label | 设置图形上的文本标签 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-bar.label) |
| itemStyle | 图形样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-bar.itemStyle) |
| showLine | 展示为折线图的指标 | Array | - |


> 备注1. axisSite 可以设置 left 和 right，例如示例所示 `axisSite: { right: ['占比'] }` 即将占比的数据置于右轴上。

> 备注2. stack 用于将两数据堆叠起来，例如实例中所示`stack: { '销售额': ['销售额-1季度', '销售额-2季度'] }` 即将'销售额-1季度', '销售额-2季度'相应的数据堆叠在一起。

> 备注3. dataOrder 用于设置数据的排序方式，用于更加清晰的展示数据的升降。例如： `{ label: '余额', order: 'asc }` 表示数据按照余额指标升序展示，降序为`desc`。

> 备注4. min和max的值可以直接设置为数字，例如：`[100, 300]`；也可以设置为`['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`，此时表示使用该坐标轴上的最小值或最大值为最小或最大刻度。

> 备注5. 有时我们需要将折线图与柱状图展示在同一个图上，利用showLine属性可以设置需要展示为折线图的指标，其他的指标则使用柱状图展示。
