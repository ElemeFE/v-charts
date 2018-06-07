<template>
  <div>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
import { VeLine } from '../../src/index.es'
import { LINE_DATA } from '../test/data'
export default {
  data () {
    return {
      chartData: LINE_DATA
    }
  },
  components: { VeLine }
}
</script>
