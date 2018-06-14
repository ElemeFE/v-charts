<template>
  <div>
    <ve-line :settings="chartSettings" :data="chartData"></ve-line>
  </div>
</template>

<script>
import { VeLine } from '../../src/index.es'
import { LINE_DATA } from '../test/data'
VeLine._numerify.setOptions({
  abbrLabel: {
    th: 'K',
    mi: 'M',
    bi: 'G',
    tr: 'T'
  }
})
export default {
  data () {
    this.chartSettings = {
      yAxisType: ['0.0a']
    }
    return {
      chartData: LINE_DATA
    }
  },
  components: { VeLine }
}
</script>
