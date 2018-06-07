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
* {
  padding: 0;
  margin: 0;
}
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

  .multi-tip {
    color: #ccc;
  }

  .multi-title {
    color: #888;
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
button {
  display: inline-block;
  box-sizing: border-box;
  padding: 6px 10px;
  margin: 0;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  background-color: #409eff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}
</style>
