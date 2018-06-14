# 常见问题示例

#### 容器的初始宽度未知

在一个初始宽度未知的容器内绘制图表时，因为无法获取宽度，所以图表会绘制失败，解决的办法是在容器宽度已知后，
调用echarts的resize方法。

<vuep template="#container-width"></vuep>

<script v-pre type="text/x-template" id="container-width">
<template> <!-- [_ https://cdn.jsdelivr.net/npm/element-ui@1.4.0/lib/index.js,https://cdn.jsdelivr.net/npm/element-ui@1.4.0/lib/theme-default/index.css _] -->
  <el-tabs type="border-card" v-model="activeName">
    <el-tab-pane label="用户管理" name="1"> <!-- name 中的数字对应chart的ref -->
      <ve-line :data="chartData" ref="chart1"></ve-line>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="2">
      <ve-line :data="chartData" ref="chart2"></ve-line>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="3">
      <ve-line :data="chartData" ref="chart3"></ve-line>
    </el-tab-pane>
    <el-tab-pane label="定时任务" name="4">
      <ve-line :data="chartData" ref="chart4"></ve-line>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data () {
      return {
        activeName: '1',
        chartData: {
          columns: ['日期', '销售额-1季度'],
          rows: [
            { '日期': '1月1日', '销售额-1季度': 1523 },
            { '日期': '1月2日', '销售额-1季度': 1223 },
            { '日期': '1月3日', '销售额-1季度': 2123 },
            { '日期': '1月4日', '销售额-1季度': 4123 },
            { '日期': '1月5日', '销售额-1季度': 3123 },
            { '日期': '1月6日', '销售额-1季度': 7123 }
          ]
        }
      }
    },
    watch: {
      activeName (v) {
        this.$nextTick(_ => {
          this.$refs[`chart${v}`].echarts.resize()
        })
      }
    }
  }
</script>
</script>

#### 小数显示精度

v-charts处理数据类型时默认保留两位有效数字，但是当数字较小并设置为百分比类型时，这种方式会导致显示上的问题，例如

<vuep template="#error-digit"></vuep>

<script v-pre type="text/x-template" id="error-digit">
<template>
  <ve-line :data="chartData" :settings="chartSettings">
  </ve-line>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        yAxisType: ['percent']
      }
      return {
        chartData: {
          columns: ['日期', 'value'],
          rows: [
            { '日期': '1月1日', 'value': 0.00001 },
            { '日期': '1月2日', 'value': 0.00002 },
            { '日期': '1月3日', 'value': 0.00003 },
            { '日期': '1月4日', 'value': 0.00004 },
            { '日期': '1月5日', 'value': 0.00005 },
            { '日期': '1月6日', 'value': 0.00006 }
          ]
        }
      }
    }
  }
</script>
</script>

每个图表内都有digit配置项，设置此属性，保证设置类型后，数值较小也能够正常显示

<vuep template="#true-digit"></vuep>

<script v-pre type="text/x-template" id="true-digit">
<template>
  <ve-line :data="chartData" :settings="chartSettings">
  </ve-line>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        yAxisType: ['percent'],
        digit: 3
      }
      return {
        chartData: {
          columns: ['日期', 'value'],
          rows: [
            { '日期': '1月1日', 'value': 0.00001 },
            { '日期': '1月2日', 'value': 0.00002 },
            { '日期': '1月3日', 'value': 0.00003 },
            { '日期': '1月4日', 'value': 0.00004 },
            { '日期': '1月5日', 'value': 0.00005 },
            { '日期': '1月6日', 'value': 0.00006 }
          ]
        }
      }
    }
  }
</script>
</script>
