### 地图

#### 示例

<iframe width="100%" height="415" src="//jsfiddle.net/vue_echarts/1fwe4tt7/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | Array | 默认columns第一项为维度 |
| metrics | 指标 | Array | 默认columns第二项为指标 |
| position | 地图类型 | String | 默认为 `'china'` |
| selectData | 是否高亮显示数据对应位置 | Boolean | 默认为 `false` |
| selectedMode | 地图选中模式 | Boolean，String | 默认为 `false`, 可选值有<br>`'single', 'multiple'` |
| label | 文本标签 | Boolean, Object | 默认为`true`, 也可以参考文档设置<br> http://t.cn/RKEEUS6 |
| dataType | 指标数据类型 | Object | 内容为 指标-指标数据类型 <br>的键值对，支持`'normal', 'KMB', 'percent'` |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
| zoom | 视角的缩放比例 | Number | 默认为1 |
| center | 当前视角的中心点 | Array | - |
| aspectScale | 用于 scale 地图的长宽比 | Number | 默认为0.75 |
| boundingCoords | 左上角以及右下角分别所对应的经纬度 | Array | 默认为null |
| roam | 是否开启鼠标缩放和平移漫游 | Boolean, String | 默认为false, 可选值有<br>`false, true, 'scale', 'move'` |
| scaleLimit | 滚轮缩放的极限控制 | Object | 默认`{ min: 1, max: 1 }` |
| mapGrid | 地图距离容器的边距 | Object | 默认值为<br>`{`<br>` left: auto,`<br>` right: auto,`<br>` top: auto,`<br>` bottom: auto`<br>` }` |
| itemStyle | 地图区域的多边形 图形样式 | Boolean | 默认为true, 也可以参考文档设置<br>http://t.cn/RKEEc73 |
