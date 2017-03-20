<template>
  <div class="page-app">
    <ve-bar :data="barData" :settings="barSettings"></ve-bar>
  </div>
</template>

<script>
import VeBar from '../src/bar'

export default {
  name: 'App',

  data () {
    this.barData = [
      { '201603': 2.95, '201604': 2.1, 'name': '上海' },
      { '201603': 1.95, '201604': 2.15, 'name': '北京' },
      { '201603': 3.15, '201604': 2.4, 'name': '杭州' },
      { '201603': 3.15, '201604': 2.4, 'name': '广州' },
      { '201603': 3.15, '201604': 2.4, 'name': '深圳' }
    ]
    this.barSettings = {}
    return {}
  },

  components: {
    VeBar
  }
}
</script>

<style lang="less">
.page-app {
  .ve-bar {
    width: 100%;
    height: 300px;
    transform: translateX(50%);
  }
}
</style>
