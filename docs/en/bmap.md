# Bmap/Amap

To make it easier to use the Baidu / Gauteng maps on echarts, v-charts package a 'shell' of a Baidu / Gauteng map, add settings about the chart's settings (key, bmap, amap) Set directly on the series, tooltip, etc., can be generated to Baidu / Germany map as the coordinate system Echarts chart.

#### Example

##### Bmap

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/tvtbz29c/1/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

##### Amap

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/tvtbz29c/7/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### get map instance

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/tvtbz29c/2/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


#### settings

| attribute | description | type | remark |
| --- | --- | --- | --- |
| key | Bmap/Amap access_key | string | get key [here](http://lbsyun.baidu.com/apiconsole/key) |
| v | Bmap/Amap version | string | default 2.0(Bmap)/1.4.3(Amap) |
| bmap | Bmap settings | object | content reference [docs](https://github.com/ecomfe/echarts/tree/master/extension/bmap#使用) |
| amap | Amap settings | object | reference amap doc |
| useOuterMap | 使用全局的地图依赖 | boolean | 默认为 `false` |

> 1. Bmap / Amap Maps When used in conjunction with other maps, additional echarts modules are required, such as heatmap, to be used `import 'echarts/lib/chart/heatmap'`.
> 2. if import bmap or amap source by use script tag, set useOuterMap `true`.<br>
> bmap `<script src="https://api.map.baidu.com/api?v=2.0&ak=key"></script>`<br>
> amap `<script src="https://webapi.amap.com/maps?v=1.4.3&key=key"></script>`
