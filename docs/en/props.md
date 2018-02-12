### Attributes

##### There are two kinds of attributes of v-charts, one is common attributes, which can be used by all charts, such as `colors`, `grid` and so on.

`<ve-line :data="chartData" :colors="chartColors" :grid="chartGrid"></ve-line>`

Such attributes have

| attribute | Description | Type | Remark |
| --- | --- | --- | --- |
| data | chart data | Object | Columns represent metrics and dimension names, rows are data contents |
| width | chart width | String | default `auto` |
| height | chart height | String | default `400px` |
| settings | chart settings | Object | content reference chart specific configuration |
| colors | the color list of palette | Array | default <br>`['#19d4ae', '#5ab1ef', '#fa6e86',`<br>` '#ffb980', '#0067a6', '#c4b4e4',`<br>` '#d87a80', '#9cbbff', '#d9d0c7',`<br>` '#87a997', '#d49ea2', '#5b4947']` |
| tooltip-visible | whether to display the tooltip | Boolean | default `true` |
| legend-visible | whether to display the legend | Boolean | default `true` |
| legend-position | position of legend | String | `'left'`/`'top'`/`'right'`/`'bottom'` |
| grid | drawing grid | Object | content reference [docs](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid) |
| events | bind event-handler | Object | object with key is event name and value is event handler  |
| before-config | additional processing of data in advance | Function | trigger bofore create echarts settings, parameter is data，and need to return chart data |
| after-config | additional processing of echarts settings | Function | trigger after echarts settings created, parameter is echarts settings, and need to return echarts settings |
| after-set-option | trigger after set option | Function | parameter is echarts instance |
| after-set-option-once | trigger once after set option | Function | parameter is echarts instance |
| mark-line | use a line in a chart | Object | configuration items correspond to echarts on markLine part, neet to <br>`import 'echarts/lib/component/markLine'` |
| mark-point | mark point in a chart | Object | configuration items correspond to echarts on markPoint part, neet to `import 'echarts/lib/component/markPoint'` |
| mark-area | mark an area in chart | Object | configuration items correspond to echarts on markArea part, neet to `import 'echarts/lib/component/markAreae'` |
| visual-map | echarts visualMap settings | Array, Object | content reference [docs](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap), neet to `import 'echarts/lib/component/visualMap'` |
| data-zoom | zooming a specific area | Array, Object | content reference [docs](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom), neet to `import 'echarts/lib/component/dataZoom'` |
| toolbox | a group of utility tools | Object | content reference [docs](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox), neet to `import 'echarts/lib/component/toolbox'` |
| title | title component | Object | content reference [docs](https://ecomfe.github.io/echarts-doc/public/en/option.html#title), neet to `import 'echarts/lib/component/title'` |
| init-options | the third parameter of echarts init | Object | content reference [docs](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts) |
| theme | custom theme | Object | content is custom theme settings |
| theme-name |  custom theme name | String | content is custom theme name which is registered globally |
| loading | loading status | Boolean | default `false` |
| data-empty | data empty status | Boolean | default `false` |
| judge-width | whether to deal with chart width |  Boolean | default `true` |
| width-change-delay | container width change delay | Number | default `300` |

> Remark: before use `loading` and `data-empty` attributes, you need to import css by `import 'v-charts/lib/style.css'`

同时，为了能够更方便的设置属性配置项等，可以通过`extend`属性实现对已配置好的内部属性进行单独的设置，`extend`为对象类型，对象内的属性可以是函数，也可以对象，也可以是其他类型的值
 - 当属性为函数时，设置的是函数的返回值
 - 当属性为对象时，如果在options中对应的属性为对象(eg: tooltip)或包含对象的数组(eg: series)，对应的配置会被合并，否则将直接覆盖对应的配置

 具体使用方法可以参考下面的属性配置示例

最后，下面这些与echarts配置项对应的属性也被加到了组件上，设置后将会直接覆盖options原有的对应属性，使用方式可参考[文档](http://echarts.baidu.com/option.html)
```
legend: Object
xAxis: Object
yAxis: Object
radar: Object
tooltip: Object
axisPointer: Object
brush: Object
geo: Object
timeline: Object
graphic: Object
series: [Object, Array]
backgroundColor: [Object, String]
textStyle: Object
```

> 备注：如果某属性加上去之后没有生效，很可能是没有引入相应的模块，模块的位置可以参考此[文件](https://github.com/ecomfe/echarts/blob/master/index.js)


##### 另外一种是图表自身的属性，比如用户设置数据类型的`dataType`，这样的属性被置于settings内，每种图表的配置项不完全相同，具体参数参考下述图表文档中的配置项

### 示例

<iframe width="100%" height="415" src="//jsfiddle.net/vue_echarts/he1u3j75/24/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
