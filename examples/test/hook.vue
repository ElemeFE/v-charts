<template>
  <!-- 测试属性
    beforeConfig: Function,
    afterConfig: Function,
    afterSetOption: Function,
    afterSetOptionOnce: Function,
    @ready
    @ready-once
  -->
  <div>
    <ve-line
      :before-config="beforeConfig"
      :after-config="afterConfig"
      :after-set-option="afterSetOption"
      :after-set-option-once="afterSetOptionOnce"
      @ready="ready"
      @ready-once="readyOnve"
      :data="chartData"
      :settings="chartSettings">
    </ve-line>
    <button @click="chartSettings = {}">trigger change</button>
  </div>
</template>

<script>
import { VeLine } from '../../src/index.es'
import { LINE_DATA } from './data'
export default {
  data () {
    return {
      chartData: LINE_DATA,
      chartSettings: {}
    }
  },
  methods: {
    beforeConfig () {
      console.log('beforeConfig', arguments)
      return arguments[0]
    },
    afterConfig () {
      console.log('afterConfig', arguments)
      return arguments[0]
    },
    afterSetOption () {
      console.log('afterSetOption', arguments)
    },
    afterSetOptionOnce () {
      console.log('afterSetOptionOnce', arguments)
    },
    ready () {
      console.log('ready', arguments)
    },
    readyOnve () {
      console.log('readyOnve', arguments)
    }
  },
  components: { VeLine }
}
</script>
