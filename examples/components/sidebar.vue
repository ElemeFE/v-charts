<template>
  <div class="component-sidebar">
    <ul>
      <li>
        <router-link exact to="/">首页</router-link>
      </li>
      <li v-for="(menu, key) in menus" :key="key">
        <router-link exact :to="`/item/${menu.type}`">
          {{ menu.name }}
        </router-link>
      </li>
      <li>
        <router-link exact to="/test">切换实例</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',

  data () {
    return {
      menus: []
    }
  },

  created () {
    this.menus = this.$chartData
  }
}
</script>

<style lang="less">
.component-sidebar {
  height: 100%;
  background-color: #eee;

  ul {
    padding: 0;
    margin: 0;

    a {
      text-decoration: none;
      color: #000;
      display: inline-block;
      width: 100%;
      height: 100%;

      &:hover,
      &.router-link-active {
        color: #19d4ae;
      }
    }

    li {
      list-style: none;
      height: 30px;
      line-height: 30px;
      text-align: center;

      &:not(:last-child) {
        border-bottom: 1px solid cornflowerblue;
      }
    }
  }
}
</style>
