# v-charts 贡献指南

v-charts 是一套基于 Vue2.x 封装的 Echarts 图表组件，用于为开发者提供快速生成图表的服务。
v-charts 的成长离不开大家的支持，如果你愿意为 v-charts 贡献代码，请阅读以下内容:

## 开发原则

v-charts 的核心原则是**为开发者简化配置项**，基于此原则，v-charts 有如下约定：

1. 数据需要*尽量*使用指标维度的形式，具体可以参考[文档](https://v-charts.js.org/#/data)。
2. 指标维度的设置、数据类型、简化的配置项、数据别名 等通过在 settings 中增加的属性实现。
3. 组件除引入相应模块的依赖(eg: line)外，*尽量*不引入插件的依赖(eg: visualMap)。

## 环境搭建

- 安装依赖 `npm install`
- 运行开发 `npm run dev`
- 生成组件 `npm run build`
- 运行文档 `npm run docs`
- 运行测试 `npm run test`

## 组件开发

开发新的图表组件，需要首先在 `src/packages` 下增加对应图表，然后在 `examples/data`
下增加对应数据并在 `index.js` 中引入，最后在 `src/component-list`、`src/index.es.js`、
`src/index/index.js` 中增加对应的组件即可。开发完成后，需要在 `docs` 文件夹下，
增加相应文档，并将文档加到侧边栏中。

## 代码规范

遵循 [standard](https://standardjs.com/) 即可。
