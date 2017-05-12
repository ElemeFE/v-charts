<template>
  <div id="app">
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
import Sidebar from './components/sidebar'
export default {
  name: 'App',

  created () {
  },

  components: {
    Sidebar
  }
}
</script>

<style lang="less">
html, body {
  height: 100%;
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
      overflow: auto;
      background-color: #f8f8f8;
      border-right: 1px solid #f2f2f2;
    }

    .right-section {
      flex: 1;
      overflow: auto;
      padding: 20px;
      font-size: 14px;
      p {
        line-height: 22px;
      }
    }
  }
}
</style>
