<template>
  <div class="page-item">
    <h3>{{ pageInfo.name }}</h3>
    <p>{{ pageInfo.desc }}</p>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>简介</th>
          <th>触发时间</th>
          <th>参数</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="property in pageInfo.settings" :key="property">
          <td>{{ property.name }}</td>
          <td>{{ property.intro }}</td>
          <td>{{ property.time }}</td>
          <td>{{ property.props }}</td>
          <td>{{ property.return }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const PAGE_INFO = {
  name: '生命周期钩子',
  desc: '对于生成的图表，可能有一些需要额外定制的东西，对于这类需求，组件提供两个钩子进行相关操作',
  settings: [
    {
      name: 'beforeEach',
      intro: '对数据提前进行额外的处理',
      time: '在数据转化为配置项开始前',
      props: 'data(预先传入的数据)',
      return: '返回处理好的数据'
    },
    {
      name: 'afterEach',
      intro: '对生成好的echarts配置进行额外的处理',
      time: '在数据转化为配置项结束后',
      props: 'options(echarts配置)',
      return: '返回处理好的echarts配置'
    }
  ]
}
export default {
  data () {
    this.pageInfo = PAGE_INFO
    return {}
  }
}
</script>
