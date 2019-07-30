# 事件监听

绑定事件通过传递一个事件名称和对应回调函数的对象实现，回调函数内的参数是 echarts 模块，可以据此做相应的处理。

#### 示例

<vuep template="#simple-event"></vuep>

<script v-pre type="text/x-template" id="simple-event">
<template>
  <div>
    <p>被点击日期：{{ name }}</p>
    <ve-pie
      :data="chartData"
      :settings="chartSettings"
      :events="chartEvents">
    </ve-pie>
  </div>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        selectedMode: 'single',
        hoverAnimation: false
      }
      var self = this
      this.chartEvents = {
        click: function (e) {
          self.name = e.name
          console.log(e)
          // 打印出图表原始数据中的剩余属性，比如 id 之类的属性
          console.log(e.data.rest)
        }
      }
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, id:'111', uid:'k-1' },
            { '日期': '1/2', '访问用户': 3530, id:'222', uid:'k-2' },
            { '日期': '1/4', '访问用户': 1723, id:'444', uid:'k-4' },
            { '日期': '1/3', '访问用户': 2923, id:'333', uid:'k-3' },
            { '日期': '1/5', '访问用户': 3792, id:'555', uid:'k-5' },
            { '日期': '1/6', '访问用户': 4593, id:'666', uid:'k-6' }
          ]
        },
        name: ''
      }
    }
  }
</script>
</script>
