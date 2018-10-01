# 图表属性

## 自有属性

图表自身的属性，例如用于设置数据类型的 `yAxisType`, 是否展示为面积图的 `area`，这样的属性被置于
 `settings` 内，每种图表的自有属性不完全相同，具体参数请参考下述图表文档中的配置项。

## 公有属性

所有图表都具有的属性，例如 `width`, `events` 等。

```vue
<ve-line :data="chartData" width="100px" :events="chartEvents"></ve-line>
```

#### 基本属性
| 配置项 | 简介 | 类型 | 默认值 |
| ----- | --- |:----:| --- |
| data | 数据，[参考文档](/data) | object | - |
| settings | 配置项 | object | - |
| width | 宽度 | string | auto |
| height | 高度 | string | 400px |
| events | 事件绑定，[参考文档](/event) | object | - |
| init-options | init 附加参数，[参考文档](http://echarts.baidu.com/api.html#echarts.init) | object | - |
| tooltip-visible | 是否显示提示框 | boolean | true |
| legend-visible | 是否显示图例 | boolean | true |
| theme | 自定义主题 | object | - |
| theme-name | 自定义主题名称 | string | - |
| judge-width | 是否处理生成图表时的宽度问题 | boolean | false |
| width-change-delay | 容器宽度变化的延迟 | number | 300 |
| resizeable | 是否处理窗口 resize 事件 | boolean | true |
| cancel-resize-check | 是否禁用 resize 时的容器检测 | boolean | false |
| resize-delay | 窗口 resize 事件回调的延迟 | number | 200 |
| change-delay | 属性修改触发图表重绘回调的延迟 | number | 0 |
| set-option-opts | echarts setOption 的第二个参数, [参考文档](http://echarts.baidu.com/api.html#echartsInstance.setOption) | boolean<br>object | true |
| not-set-unchange | 未发生变化时不参加 setOption 的属性 | array | - |
| log | 在控制台打印内部生成的echarts options | boolean | false |

?> 在使用 dataZoom 组件时，数据发生改变会引起 dataZoom 的重置，在组件上设置 `:not-set-unchange="['dataZoom']"` 即可解决这个问题。

#### 增加标识元素的属性

标识元素包括：markLine、markArea、markPoint，每个种类的图对应的使用方式略有不同，
可以参考 echarts 文档中实现。需要注意的是，设置的标识元素会被增加到每一个指标上，例如一个
单维度多指标折线图，两条线都会显示对应的标识元素，如果设置只在一个指标线上显示，可以使用 `extend`
属性，直接为 series 设置 mark* 来自由配置。 

| 配置项 | 简介 | 类型 |
| ----- | --- |:----:|
| mark-line | 标线 | object |
| mark-area | 标点 | object |
| mark-point | 标志区域 | object |

?> **使用时需先引入对应的组件**
<br>markLine -> `echarts/lib/component/markLine`
<br>markPoint -> `echarts/lib/component/markPoint`
<br>markArea -> `echarts/lib/component/markArea`


#### 状态属性

加载状态和暂无数据状态可以在父组件中通过切换下面两种属性实现。

| 配置项 | 简介 | 类型 | 默认值 |
| ----- | --- |:----:| --- |
| loading | 加载状态 | boolean | false |
| data-empty | 暂无数据状态 | boolean | false |
?> **使用时需先引入样式**
<br>`import 'v-charts/lib/style.css'`


#### 钩子函数

共有属性中的钩子函数用于在配置项生成过程中进行调整以及获取实例。

| 配置项 | 说明 | 参数 |
| ----- | --- | --- |
| before-config | 对数据提前进行额外的处理，<br>在数据转化为配置项开始前触发 | 参数为 data，返回值为表格数据 |
| after-config | 对生成好的echarts配置进行额外的处理，<br>在数据转化为配置项结束后触发 | 参数为 options，返回值为 echarts 配置 |
| after-set-option | 生成图之后获取echarts实例 | 参数为echarts实例 |
| after-set-option-once | 生成图后获取echarts实例<br>（只执行一次） | 参数为echarts实例 |

#### extend 属性

为了能够更方便的设置属性配置项等，可以通过extend属性实现对已配置好的内部属性进行单独的设置，
extend为对象类型，对象内的属性可以是函数，也可以对象，也可以是其他类型的值

- 当属性为函数时，设置的是函数的返回值
- 当属性为对象时，如果在options中对应的属性为对象(eg: tooltip)或包含对象的数组(eg: series)，
对应的配置会被合并，否则将直接覆盖对应的配置

具体使用方法可以参考属性配置[示例](/props-demo2)

#### echarts options 属性

与echarts配置项对应的属性也被加到了组件上，用于直接**覆盖**options原有的对应属性，使用方式可参考[文档](http://echarts.baidu.com/option.html)

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

!> 如果某属性加上去之后没有生效，很可能是没有引入相应的模块，模块的位置可以参考此[文件](https://github.com/ecomfe/echarts/blob/master/index.js)

## 事件

渲染成功后会通过事件传递给父组件。

| 方法名 | 说明 |
| ----- | --- |
| ready | 图表渲染完成后触发，每次渲染都会触发一次 |
| ready-once | 只会在首次渲染完成后触发 |
