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
| before-config | additional processing of data in advance | Function | trigger bofore create echarts settings, parameter is data, and need to return chart data |
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
| judge-width | whether to deal with chart width |  Boolean | default `false` |
| width-change-delay | container width change delay | Number | default `300` |
| resizeable | whether to deal with window resize |  Boolean | default `true` |
| resizeDelay | time delay of window resize handler | Number | default `200` |
| changeDelay | delay of chart redraw callback while props change |  Number | default `0` |
| setOptionOpts | the second parameter of echarts setOption | Boolean, Object | default `true`, content reference [docs](http://echarts.baidu.com/api.html#echartsInstance.setOption) |

> Remark: before use `loading` and `data-empty` attributes, you need to import css by `import 'v-charts/lib/style.css'`

At the same time, in order to be more convenient to set the configuration items, you can change echarts setting after configuration by using `extend` attribute, `extend` is object, object properties can be a function, object, or other types of values
  - When the property is a function, set the return value of the function
  - When the attribute is an object, the corresponding configuration is merged if the corresponding attribute in the options is an object (eg: tooltip) or an array containing an object (eg: series), otherwise the corresponding configuration will be overwritten directly

For details about how to use it, refer to the following configuration [examples](/#/en/props-demo2)

Finally, the following attributes corresponding to the echarts configuration items have also been added to the component, the settings will be directly overwritten the original corresponding options, use [doc](https://ecomfe.github.io/echarts-doc/public/en/option.html)

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

> Remark: If an attribute does not take effect after adding, it is likely not to introduce the corresponding module, the location of the module can refer to this [file](https://github.com/ecomfe/echarts/blob/master/index.js)


##### another attribute belongs to chart self, such as `dataType`, these attributes are placed in the `settings`, every chart has own settings. For the specific settings, refer to the following configuration items in the chart document

### Example

<iframe width="100%" height="415" src="//jsfiddle.net/vue_echarts/he1u3j75/54/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
