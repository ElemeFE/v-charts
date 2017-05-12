### 安装
---

```
npm i vue-echarts-components -S
```

### 引入方式
---

`import VeChart from 'vue-echarts-components/lib/chart'`

> 目前支持的图表有 chart, line, bar, column, waterfall, pie, ring, funnel, radar,
其中chart为所有图表的合集

### 使用方式
---

`<ve-chart :data="chartData" :settings="chartSettings"></ve-chart> `

`<ve-line :data="chartData" :settings="chartSettings"></ve-line>`

每一个组件都提供了`data`和`settings`配置项

#### 1. `data` 由`columns`和`rows`组成

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

#### 2. `settings`配置项决定了表格的表现，例如一个典型的折线图配置项
```
settings = {
    axisSite: {
        right: ['比率']
    },
    yAxisType: ['KMB', 'percent']
}
```
表示将数据`a`放到右轴上，同时设置了左轴的类型为`KMB`,右轴的类型为`percent`

对于不同图表的,`settings`略有不同，但大部分属性都是通用的, 具体属性可参考demo页中的配置

#### 3. 提供`beforeConfig`和`afterConfig`属性, 用于在图标信息生成前的data和生成后的options做一些修改

#### 4. 提供了`events`属性，用于绑定echarts事件
