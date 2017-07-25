### 环图

#### 示例

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/a0pep942/5/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | String | 默认columns第一项为维度 |
| metrics | 指标 | String | 默认columns第二项为指标 |
| dataType | 数据类型 | String | 可选值: KMB, normal, percent |
| legendLimit | legend显示数量限制 | Number | legend数量过多会导致环图样式错误，限制legend最大值并且当超过此值时隐藏legend可以解决这个问题 |
| selectedMode | 	选中模式 | String | 可选值：single, multiple，默认为false |
| hoverAnimation | 是否开启 hover 在扇区上的放大动画效果 | Boolean | 默认值为true |
| radius | 环图外半径与内半径 | Array | - |
| offsetY | 	纵向偏移量 | Number | - |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
