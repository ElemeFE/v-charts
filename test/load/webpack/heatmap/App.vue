<template>
  <div id="app">
    <ve-heatmap :data="chartData" :settings="chartSettings"></ve-heatmap>
  </div>
</template>

<script>
import VeHeatmap from '../../../../lib/heatmap'

export default {
  created: function () {
    this.chartData = {
      columns: ['lat', 'lng'],
      rows: [
        { 'lat': 120.14322240845, 'lng': 30.236064370321 },
        { 'lat': 120.14301682797, 'lng': 30.236035316745 },
        { 'lat': 120.14138577045, 'lng': 30.236113748704 },
        { 'lat': 120.1400398833, 'lng': 30.235973050702 },
        { 'lat': 120.13893453465, 'lng': 30.23517220446 },
        { 'lat': 120.1382899739, 'lng': 30.234062922977 },
        { 'lat': 120.13265960629, 'lng': 30.231641351722 },
        { 'lat': 120.13170681763, 'lng': 30.229925745619 },
        { 'lat': 120.13119614803, 'lng': 30.228996846637 },
        { 'lat': 120.13023980134, 'lng': 30.228226570416 }
      ]
    }
    this.chartSettings = {
      key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
      bmap: {
        center: [120.14322240845, 30.236064370321],
        zoom: 14,
        roam: true
      },
      type: 'bmap'
    }
  },
  components: { VeHeatmap }
}
</script>
