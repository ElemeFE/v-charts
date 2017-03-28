### 安装
---

```
npm i vue-echarts-components -S
```

### 引入方式
---

1. `import { chart } from 'vue-echarts-components'`
 
此方式需要额外配置一个babel的插件
```
npm i babel-plugin-component -D
```
并在.babelrc中增加

```
"plugins": [["component", [
    {
      "libraryName": "vue-echarts-components",
      "style": false
    }
]]]
```
2. `import VeChart from 'vue-echarts-components/lib/chart'`

> 目前支持的图表有 chart, line, bar, column, waterfall, pie, ring, funnel, scatter, radar

### 使用方式
---

`<ve-chart :data="chartData" :settings="chartSettings"></ve-chart> `

每一个组件都提供了`data`和`settings`配置项

#### 1. `data`的形式有两种，一种是图表的特殊data格式

- 折线图（line）
```
{
    key: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6'],
    a: [20, 50, 30, 1, 50, 60],
    b: [7, 3, 4, 2, 5, 3]
}
```
> key 代表维度
- 柱状图，条形图，雷达图，气泡图（bar，column, radar，scatter）
```
[
    { '201603': 100, '201604': 150, 'name': '上海' },
    { '201603': 110, '201604': 200, 'name': '北京' }
]
```
> name 代表维度
- 饼图，环图，漏斗图，瀑布图（pie，ring）
```
{
    '直接访问': 111,
    '邮件营销': 222,
    '联盟广告': 333
}
```

第二种是通用数据格式，例如
```
{
    columns: ['日期', '余额', '年龄'],
    rows: [
        { '日期': 1, '余额': 123, '年龄': 3 },
        { '日期': 2, '余额': 1223, '年龄': 6 },
        { '日期': 3, '余额': 2123, '年龄': 9 },
        { '日期': 4, '余额': 4123, '年龄': 12 },
        { '日期': 5, '余额': 3123, '年龄': 15 },
        { '日期': 6, '余额': 7123, '年龄': 20 }
    ]
}
```
> 注意：使用通用数据格式，需要在`settings`配置项内增加`tableData: true`

#### 2. `settings`配置项决定了表格的表现，例如一个典型的折线图配置项
```
settings = {
    axisOption: {
        right: ['a']
    },
    axisType: ['KMB', 'percent'],
    axisName: ['收入', '支出']
}
```
表示将数据`a`放到右轴上，同时设置了左轴的名称为‘收入’，该轴上显示的数据类型为`KMB`,右轴的名称为‘支出’，该轴上显示的数据类型为`percent`

对于不同图表的,`settings`略有不同，但大部分属性都是通用的


属性 |含义 |例子 |适用图 | 可选项
---|---|---|---|---
axisOption | 设置数据显示在哪一个纵轴上 | `{ left: ['a'] }` | line,bar,column | `left,right,top,bottom`
axisName | 设置纵轴的名称 | `['左轴', '右轴']` | line,bar,column |
axisType | 设置纵轴的类型 | `['KMB', 'percent']` | line,bar,column | `KMB, percent, normal`
stack | 设置数据堆叠 | `{ '年份': ['2016', '2017'] }` | bar,column | 
dataType | 设置数据格式 | `'percent'` | funnel,pie,ring,waterfall | `KMB, percent, normal`
sequence | 设置漏斗图数据显示顺序 | `['name1', 'name2', 'name3']` | funnel |
ascending | 设置漏斗图是否为金字塔形 | `true` | funnel | `true,false`
percentShow | 是否将百分比信息直接显示在图表上 | `true` | pie,ring | `true,false`
type | 设置显示的图表类型 | `line` | chart | `line,pie,ring,bar,column`
tableData | 传递的数据类型是否为`tableData` | `true` | line,pie,ring,bar,column | `true,false`
dimName | 维度名称(仅适用于tableData) | `'a'` | line,pie,ring,bar,column |
meaName | 指标名称(仅适用于tableData) | `'b'` | pie,ring |

#### 3. 提供`beforeConfig`和`afterConfig`属性, 用于在图标信息生成前的data和生成后的options做一些修改

#### 4. 提供了`events`属性，用于绑定echarts事件
