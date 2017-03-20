<template>
  <div id="app">
    <div class="top-container">
      <topbar></topbar>
    </div>
    <div class="main-container">
      <div class="left-section">
        <sidebar></sidebar>
      </div>
      <div class="right-section">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from './components/topbar'
import Sidebar from './components/sidebar'
export default {
  name: 'App',

  created () {
  },

  components: {
    Topbar,
    Sidebar
  }
}
</script>

<style lang="less">
html, body {
  height: 100%;
}
pre[class*="language-"] {
  padding: 5px !important;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;

  .top-container {
    height: 60px;
    border-bottom: 1px solid #ccc;
  }

  .main-container {
    flex: 1;
    display: flex;

    .left-section {
      width: 150px;
      height: 100%;
      border-right: 1px solid #ccc;
    }

    .right-section {
      flex: 1;
      overflow: auto;
    }
  }
}
</style>
