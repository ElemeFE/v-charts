### v-charts属性

##### v-charts 的属性分为两种，一种是全部图表都具有的属性，例如 `colors`, `grid` 等

`<ve-line :data="chartData" :colors="chartColors" :grid="chartGrid"></ve-line>`

这样的属性有

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data | 图表数据 | Object | columns 代表指标和维度名称，<br>rows 为数据内容 |
| width | 图表宽度 | String | 默认 auto |
| height | 图表高度 | String | 默认 400px |
| settings | 图表配置项 | Object | 内容参考图表具体的配置 |
| colors | 颜色列表 | Array | 默认<br>`['#19d4ae', '#5ab1ef', '#fa6e86',`<br>` '#ffb980', '#0067a6', '#c4b4e4',`<br>` '#d87a80', '#9cbbff', '#d9d0c7',`<br>` '#87a997', '#d49ea2', '#5b4947']` |
| tooltip-visible | 是否显示提示框 | Boolean | 默认为 true |
| legend-visible | 是否显示图例 | Boolean | 默认为 true |
| legend-position | 图例显示位置 | String | 可选`'left', 'top', 'right', 'bottom'` |
| grid | 网格配置 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#grid) |
| events | 为图表绑定事件 | Object | 内容为包含事件名-事件处理函数的对象 |
| before-config | 对数据提前进行额外的处理 | Function | 在数据转化为配置项开始前触发<br>参数为 data，返回值为表格数据 |
| after-config | 对生成好的echarts配置<br>进行额外的处理 | Function | 在数据转化为配置项结束后触发<br>参数为 options，返回值为 echarts 配置 |
| after-set-option | 生成图后获取echarts实例 | Function | 参数为echarts实例 |
| after-set-option-once | 生成图后获取echarts实例（只执行一次） | Function | 参数为echarts实例 |
| mark-line | 图表标线 | Object | 配置项内容对应echarts中<br>关于markLine的部分<br>使用时需额外引入对应模块<br>`'echarts/lib/component/markLine'` |
| mark-point | 图表标点 | Object | 配置项内容对应echarts中<br>关于markPoint的部分<br>使用时需额外引入对应模块<br>`'echarts/lib/component/markPoint'` |
| mark-area | 图表标志区域 | Object | 配置项内容对应echarts中<br>关于markArea的部分<br>使用时需额外引入对应模块<br>`'echarts/lib/component/markAreae'` |
| visual-map | 视觉映射组件 | Array, Object | 内容参考[文档](http://echarts.baidu.com/option.html#visualMap)<br>使用时需额外引入对应模块<br>`'echarts/lib/component/visualMap'` |
| data-zoom | 区域缩放组件 | Array, Object | 内容参考[文档](http://echarts.baidu.com/option.html#dataZoom)<br>使用时需额外引入对应模块<br>`'echarts/lib/component/dataZoom'` |
| toolbox | 工具箱 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#toolbox)<br>使用时需额外引入对应模块<br>`'echarts/lib/component/toolbox'` |
| title | 图表标题 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#title)<br>使用时需额外引入对应模块<br>`'echarts/lib/component/title'` |
| init-options | init 附加参数 | Object | 内容参考[文档](http://echarts.baidu.com/api.html#echarts.init) |
| theme | 自定义主题 | Object | 内容为自定义主题参数 |
| theme-name | 自定义主题名称 | String | 内容为全局注册的自定义主题名称 |
| loading | 加载状态 | Boolean | 默认为false |
| data-empty | 暂无数据状态 | Boolean | 默认为false |
| judge-width | 是否处理生成图表时的宽度问题 |  Boolean | 默认为 false |
| width-change-delay | 容器宽度变化的延迟 | Number | 默认为300 |
| resizeable | 是否处理窗口 resize 事件 |  Boolean | 默认为 true |
| resizeDelay | 窗口 resize 事件回调的延迟 | Number | 默认为200 |
| changeDelay | 属性修改触发图表重绘回调的延迟 |  Number | 默认为0 |
| setOptionOpts | echarts setOption 的第二个参数 | Boolean, Object | 默认为true，内容参考[文档](http://echarts.baidu.com/api.html#echartsInstance.setOption) |

> 备注：使用loading和dataEmpty属性前需引入css `import 'v-charts/lib/style.css'`

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
