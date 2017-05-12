<template>
  <div>
    <h3 class="content-title">安装</h3>
    <code-section :content="installCode"></code-section>
  </div>
</template>

<script>
const INSTALL_CODE = 'npm install vue-echarts-components --save'

export default {
  name: 'Install',

  data () {
    this.installCode = INSTALL_CODE

    return {}
  }
}
</script>
