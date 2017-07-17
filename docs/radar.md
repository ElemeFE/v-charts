### 雷达图

#### 示例

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/jww5fqs8/3/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | String | 默认columns第一项为维度 |
| metrics | 指标 | String | 默认columns第二项为指标 |
| dataType | 数据类型 | Object | 可选值: KMB, normal, percent |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |

> 备注：dataType中直接设置对应维度的数据类型，例如示例的`{ '占比': 'percent' }`，即将占比数据设置为百分比类型
