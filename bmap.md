### 百度/高德地图

为了使在echarts上更简单的使用百度/高德地图，v-charts封装了一个百度/高德地图的‘壳子’，在settings中添加关于图表的配置（key,bmap,amap），在组件上直接设置 series, tooltip 等，便可生成以百度/高德地图为坐标系的 Echarts 图表。

#### 示例

##### 百度地图

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/tvtbz29c/77/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

##### 高德地图

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/tvtbz29c/75/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### 获取地图实例

<iframe width="100%" height="450" src="//jsfiddle.net/vue_echarts/tvtbz29c/78/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| key | 百度/高德地图 access_key | String | 可[由此](http://lbsyun.baidu.com/apiconsole/key)获取 |
| v | 百度/高德地图版本 | String | 默认2.0(百度)/1.4.3(高德) |
| bmap | 百度地图配置项 | Object | 参考[文档](https://github.com/ecomfe/echarts/tree/master/extension/bmap#使用)配置 |
| amap | 高德地图配置项 | Object | 参考高德地图文档配置 |
| useOuterMap | 使用全局的地图依赖 | Boolean | - |

> 1. 百度/高德地图在与其他地图搭配使用时，需要额外引入相应的 echarts 模块，例如使用热力图，则需要`import 'echarts/lib/chart/heatmap'`。
> 2. 使用 script 引入百度地图或高德地图后，配置 useOuterMap 可以阻止组件对地图资源的引用<br>
> 百度地图 `<script src="https://api.map.baidu.com/api?v=2.0&ak=key"></script>`<br>
> 高德地图 `<script src="https://webapi.amap.com/maps?v=1.4.3&key=key"></script>`
