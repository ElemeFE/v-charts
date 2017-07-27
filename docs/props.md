### V-Charts属性

V-Charts 的属性分为两种，一种是全部图表都具有的属性，例如 `colors`, `grid` 等

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
| grid | 网格配置 | Object | 内容参考<br>http://echarts.baidu.com/option.html#grid |
| events | 为图表绑定事件 | Object | 内容为包含事件名-事件处理函数的对象，例如<br>`{  click: function (e) { console.log(e) }}` |
| before-config | 对数据提前进行额外的处理 | Function | 在数据转化为配置项开始前触发<br>参数为 data，返回值为表格数据 |
| after-config | 对生成好的echarts配置<br>进行额外的处理 | Function | 在数据转化为配置项结束后触发<br>参数为 options，返回值为 echarts 配置 |
| mark-line | 图表标线 | Object | 配置项内容对应echarts中关于markLine的部分<br>使用时需额外引入对应模块<br>`import 'echarts/lib/component/markLine'` | 
| mark-point | 图表标线 | Object | 配置项内容对应echarts中关于markPoint的部分<br>使用时需额外引入对应模块<br>`import 'echarts/lib/component/markPoint'` | 
| mark-area | 图表标线 | Object | 配置项内容对应echarts中关于markArea的部分<br>使用时需额外引入对应模块<br>`import 'echarts/lib/component/markAreae'` | 
| visual-map | 视觉映射组件 | Array, Object | 内容参考<br>http://echarts.baidu.com/option.html#visualMap<br>使用时需额外引入对应模块<br>`import 'echarts/lib/component/visualMap'` | 
| data-zoom | 视觉映射组件 | Array, Object | 内容参考<br>http://echarts.baidu.com/option.html#dataZoom<br>使用时需额外引入对应模块<br>`import 'echarts/lib/component/dataZoom'` |
| toolbox | 工具箱 | Object | 内容参考<br>http://echarts.baidu.com/option.html#toolbox<br>使用时需额外引入对应模块<br>`import 'echarts/lib/component/toolbox'` |
| init-options | init 附加参数 | Object | 内容参考<br>http://echarts.baidu.com/api.html#echarts.init |
| theme | 自定义主题 | Object | 内容为自定义主题参数 |
| theme-name | 自定义主题名称 | String | 内容为全局注册的自定义主题名称 |

另外一种是图表自身的属性，比如用户设置数据类型的`dataType`，这样的属性被置于settings内，每种图表的配置项不完全相同，具体参数参考下述图表文档中的配置项

> 

### 示例

<iframe width="100%" height="415" src="//jsfiddle.net/vue_echarts/he1u3j75/24/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
