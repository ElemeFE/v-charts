# v-charts Contributing Guide

v-charts is a Vue2.x package-based Echarts chart component that provides developers with services to quickly generate charts.
The growth of v-charts is inseparable from everyone's support. If you would like to contribute code for v-charts, please read the following:

## Development principles

The core principle of v-charts is that developers can **simplify configuration items**. Based on this principle, v-charts has the following conventions:

1. The data needs to use the form of metrics dimension. For details,
please refer to [document](https://v-charts.js.org/#/en/data).
2. The setting of metrics dimensions, data types, simplified configuration items,
data aliases, etc. are achieved through the addition of attributes in settings.
3. In addition to introducing the dependency (eg: line) of the corresponding
module, the component tries not to introduce plug-in dependencies (eg: visualMap).

## Setting up the env

- Installation dependencies `npm install`
- Run development `npm run dev`
- Generate components `npm run build`
- Run the document `npm run docs`
- Run the test `npm run test`

## Component development

To develop a new chart component, first add the corresponding chart under
`src/packages`, then add the corresponding data under `examples/data` and
import it in `index.js`, and finally add corresponding components in
`src/index.es.js`, `src/component-list` and `src/index/index.js`. After development,
you need to add docs in `docs` folder and add it to sidebar.

## Code Style

Follow [standard](https://standardjs.com/).
