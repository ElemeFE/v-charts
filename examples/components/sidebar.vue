<template>
  <div class="component-sidebar">
    <div
      class="main-section"
      v-for="(menu, title) in menus"
      :key="title">
      <span class="main-title">{{ title }}</span>
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <router-link exact :to="item.url">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import chartData from '../data/index'

const routerInfo = {
  '图表': Object.keys(chartData).map(key => {
    return {
      name: chartData[key].name,
      url: `/chart/${chartData[key].type}`
    }
  }),
  '其他': [
    { name: '事件监听', url: '/eventer' },
    { name: '图表切换', url: '/toggle' },
    { name: '百度地图', url: '/bmap' },
    { name: '高德地图', url: '/amap' }
  ]
}

export default {
  name: 'Sidebar',

  created () {
    this.menus = routerInfo
  }
}
</script>

<style lang="less">
.component-sidebar {
  height: 100%;

  .main-section {
    padding-left: 20px;
    padding-top: 35px;
    color: #5e6d82;

    .main-title {
      display: inline-block;
      width: 100px;
      font-size: 16px;
      padding-bottom: 10px;
      padding-left: 10px;
      border-bottom: 1px solid #e8e8e8;
    }

    ul {
      padding: 10px 0 0;
      margin: 0;
      padding-left: 20px;
      font-size: 14px;

      li {
        list-style: none;
        height: 30px;
        line-height: 30px;

        a {
          text-decoration: none;
          display: inline-block;
          width: 100%;
          height: 100%;
          color: inherit;
          font-weight: lighter;

          &:hover,
          &.router-link-active {
            color: #19d4ae;
          }
        }
      }
    }
  }
}
</style>
