# Attributes

## Self attribute

The attributes of the chart itself, such as `yAxisType` used to set the data type, are displayed as an area's `area`. Such attributes are placed in `settings`, and the properties of each chart are not exactly the same. Please refer to the configuration items in the following chart document.

## Common attribute

All charts have properties such as `width`, `events` and so on.

```vue
<ve-line :data="chartData" width="100px" :events="chartEvents"></ve-line>
```

#### Basic attribute
| attribute | intro | type | default |
| ----- | --- |:----:| --- |
| data | chart data，[doc](/en/data) | object | - |
| settings | attribute | object | - |
| width | chart width | string | auto |
| height | chart height | string | 400px |
| events | bind event-handler，[doc](/en/event) | object | - |
| init-options | the third parameter of echarts init，[doc](http://echarts.baidu.com/api.html#echarts.init) | object | - |
| tooltip-visible | whether to display the tooltip | boolean | true |
| legend-visible | whether to display the legend | boolean | true |
| theme | custom theme | object | - |
| theme-name | custom theme name | object | - |
| judge-width | whether to deal with chart width | boolean | false |
| width-change-delay | container width change delay | number | 300 |
| resizeable | whether to deal with window resize | boolean | true |
| cancel-resize-check | whether to cancel container check while resizing | boolean | false |
| resize-delay | time delay of window resize handler | number | 200 |
| change-delay | delay of chart redraw callback while props change | number | 0 |
| set-option-opts | the second parameter of echarts setOption, [doc](http://echarts.baidu.com/api.html#echartsInstance.setOption) | boolean<br>object | true |
| not-set-unchange | Don't participate in setOption if it doesn't change | array | - |
| log | console log echarts options | boolean | false |

?> When using the dataZoom component, changes to the data will cause the dataZoom to be reset. Setting `:not-set-unchange="['dataZoom']"` on the component will solve the problem.

#### mark attribute

The identification elements include: markLine, markArea, and markPoint. The usage of each type of map is slightly different. You can refer to the echarts documentation for implementation.
It should be noted that the set of identity elements will be added to each metrics, such as a single-dimension multi-metrics line chart. The two lines will display the corresponding identification elements. If the settings are displayed on only one indicator line, you can use `extend` and set series.

| attribute | intro | type |
| ----- | --- |:----:|
| mark-line | use a line in a chart | object |
| mark-area | mark point in a chart | object |
| mark-point | mark an area in chart | object |

?> **import the corresponding components first**
<br>markLine -> `echarts/lib/component/markLine`
<br>markPoint -> `echarts/lib/component/markPoint`
<br>markArea -> `echarts/lib/component/markArea`


#### status attribute

Load state and no data state can be achieved in the parent component by switching the following two properties.

| attribute | intro | type | default |
| ----- | --- |:----:| --- |
| loading | loading status | boolean | false |
| data-empty | no data status | boolean | false |
?> **import styles first**
<br>`import 'v-charts/lib/style.css'`


#### hook attribute

Hook functions are used to make adjustments and get instances during configuration item generation.

| attribute | intro | remark |
| ----- | --- | --- |
| before-config | additional processing of data in advance | trigger bofore create echarts settings, parameter is data, and need to return chart data |
| after-config | additional processing of echarts settings | trigger after echarts settings created, parameter is echarts settings, and need to return echarts settings |
| after-set-option | trigger after set option | parameter is echarts instance |
| after-set-option-once | trigger once after set option | parameter is echarts instance |

#### extend attribute

At the same time, in order to be more convenient to set the configuration items, you can change echarts setting after configuration by using extend attribute, extend is object, object properties can be a function, object, or other types of values

- When the property is a function, set the return value of the function
- When the attribute is an object, the corresponding configuration is merged if the corresponding attribute in the options is an object (eg: tooltip) or an array containing an object (eg: series), otherwise the corresponding configuration will be overwritten directly

For details about how to use it, refer to the following configuration [examples](/en/props-demo2)

#### echarts options attribute

The attributes corresponding to the echarts options item are also added to the component, which is used to directly **overwrite** the original corresponding attribute of the options. For usage, refer to [Document](http://echarts.baidu.com/option.html)

```yaml
grid: [object, array],
colors: array,
visualMap: [object, array],
dataZoom: [object, array],
toolbox: [object, array],
title: object,
legend: [object, array],
xAxis: [object, array],
yAxis: [object, array],
radar: object,
tooltip: object,
axisPointer: object,
brush: [object, array],
geo: object,
timeline: [object, array],
graphic: [object, array],
series: [object, array],
backgroundColor: [object, string],
textStyle: object,
animation: object
```

!> If an attribute does not take effect after adding it, it is likely that the corresponding module is not imported. The location of the module can refer to this [file](https://github.com/ecomfe/echarts/blob/master/index.js)

## Events

After successful rendering, it will be passed to the parent component through the event.

| event | remark |
| ----- | --- |
| ready | Triggered after the graph is rendered, firing once per render |
| ready-once | Only fires after the first render completes |
