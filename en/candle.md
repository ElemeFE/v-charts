# Candle

#### Example

<vuep template="#simple-candle"></vuep>

<script v-pre type="text/x-template" id="simple-candle">
<template>
  <ve-candle :data="chartData"></ve-candle>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
          rows: [
            { 'date': '2004-01-05', open: 10411.85, close: 10544.07, lowest: 10411.85, highest: 10575.92, vol: 221290000 },
            { 'date': '2004-01-06', open: 10543.85, close: 10538.66, lowest: 10454.37, highest: 10584.07, vol: 191460000 },
            { 'date': '2004-01-07', open: 10535.46, close: 10529.03, lowest: 10432.12, highest: 10587.55, vol: 225490000 },
            { 'date': '2004-01-08', open: 10530.07, close: 10592.44, lowest: 10480.59, highest: 10651.99, vol: 237770000 },
            { 'date': '2004-01-09', open: 10589.25, close: 10458.89, lowest: 10420.52, highest: 10603.48, vol: 223250000 },
            { 'date': '2004-01-12', open: 10461.55, close: 10485.18, lowest: 10389.85, highest: 10543.03, vol: 197960000 },
            { 'date': '2004-01-13', open: 10485.18, close: 10427.18, lowest: 10341.19, highest: 10539.25, vol: 197310000 },
            { 'date': '2004-01-14', open: 10428.67, close: 10538.37, lowest: 10426.89, highest: 10573.85, vol: 186280000 },
            { 'date': '2004-01-15', open: 10534.52, close: 10553.85, lowest: 10454.52, highest: 10639.03, vol: 260090000 },
            { 'date': '2004-01-16', open: 10556.37, close: 10600.51, lowest: 10503.71, highest: 10666.88, vol: 254170000 },
            { 'date': '2004-01-20', open: 10601.42, close: 10528.66, lowest: 10447.92, highest: 10676.96, vol: 224300000 },
            { 'date': '2004-01-21', open: 10522.77, close: 10623.62, lowest: 10453.11, highest: 10665.72, vol: 214920000 },
            { 'date': '2004-01-22', open: 10624.22, close: 10623.18, lowest: 10545.03, highest: 10717.41, vol: 219720000 },
            { 'date': '2004-01-23', open: 10625.25, close: 10568.29, lowest: 10490.14, highest: 10691.77, vol: 234260000 },
            { 'date': '2004-01-26', open: 10568.12, close: 10702.51, lowest: 10510.44, highest: 10725.18, vol: 186170000 },
            { 'date': '2004-01-27', open: 10701.11, close: 10609.92, lowest: 10579.33, highest: 10748.81, vol: 206560000 },
            { 'date': '2004-01-28', open: 10610.07, close: 10468.37, lowest: 10412.44, highest: 10703.25, vol: 247660000 },
            { 'date': '2004-01-29', open: 10467.41, close: 10510.29, lowest: 10369.92, highest: 10611.56, vol: 273970000 },
            { 'date': '2004-01-30', open: 10510.22, close: 10488.07, lowest: 10385.56, highest: 10551.03, vol: 208990000 },
            { 'date': '2004-02-02', open: 10487.78, close: 10499.18, lowest: 10395.55, highest: 10614.44, vol: 224800000 },
            { 'date': '2004-02-03', open: 10499.48, close: 10505.18, lowest: 10414.15, highest: 10571.48, vol: 183810000 },
            { 'date': '2004-02-04', open: 10503.11, close: 10470.74, lowest: 10394.81, highest: 10567.85, vol: 227760000 },
            { 'date': '2004-02-05', open: 10469.33, close: 10495.55, lowest: 10399.92, highest: 10566.37, vol: 187810000 },
            { 'date': '2004-02-06', open: 10494.89, close: 10593.03, lowest: 10433.74, highest: 10634.81, vol: 182880000 },
            { 'date': '2004-02-09', open: 10592.41, close: 10579.03, lowest: 10433.72, highest: 10634.81, vol: 160720000 },
            { 'date': '2004-02-10', open: 10578.74, close: 10613.85, lowest: 10511.18, highest: 10667.03, vol: 160590000 },
            { 'date': '2004-02-11', open: 10605.48, close: 10737.72, lowest: 10561.55, highest: 10779.41, vol: 277850000 },
            { 'date': '2004-02-12', open: 10735.18, close: 10694.07, lowest: 10636.44, highest: 10775.03, vol: 197560000 },
            { 'date': '2004-02-13', open: 10696.22, close: 10627.85, lowest: 10578.66, highest: 10755.47, vol: 208340000 },
            { 'date': '2004-02-17', open: 10628.88, close: 10714.88, lowest: 10628.88, highest: 10762.07, vol: 169730000 },
            { 'date': '2004-02-18', open: 10706.68, close: 10671.99, lowest: 10623.62, highest: 10764.36, vol: 164370000 },
            { 'date': '2004-02-19', open: 10674.59, close: 10664.73, lowest: 10626.44, highest: 10794.95, vol: 219890000 },
            { 'date': '2004-02-20', open: 10666.29, close: 10619.03, lowest: 10559.11, highest: 10722.77, vol: 220560000 },
            { 'date': '2004-02-23', open: 10619.55, close: 10609.62, lowest: 10508.89, highest: 10711.84, vol: 229950000 },
            { 'date': '2004-02-24', open: 10609.55, close: 10566.37, lowest: 10479.33, highest: 10681.41, vol: 225670000 },
            { 'date': '2004-02-25', open: 10566.59, close: 10601.62, lowest: 10509.42, highest: 10660.73, vol: 192420000 },
            { 'date': '2004-02-26', open: 10598.14, close: 10580.14, lowest: 10493.71, highest: 10652.96, vol: 223230000 },
            { 'date': '2004-02-27', open: 10581.55, close: 10583.92, lowest: 10519.03, highest: 10689.55, vol: 200050000 }
          ]
        }
      }
    }
  }
</script>
</script>

#### use simple data format

<vuep template="#simple-data"></vuep>

<script v-pre type="text/x-template" id="simple-data">
<template>
  <ve-candle :data="chartData"></ve-candle>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
          rows: [
            ['2004-01-05', 10411.85, 10544.07, 10411.85, 10575.92, 221290000],
            ['2004-01-06', 10543.85, 10538.66, 10454.37, 10584.07, 191460000],
            ['2004-01-07', 10535.46, 10529.03, 10432, 10587.55, 225490000],
            ['2004-01-08', 10530.07, 10592.44, 10480.59, 10651.99, 237770000],
            ['2004-01-09', 10589.25, 10458.89, 10420.52, 10603.48, 223250000],
            ['2004-01-12', 10461.55, 10485.18, 10389.85, 10543.03, 197960000],
            ['2004-01-13', 10485.18, 10427.18, 10341.19, 10539.25, 197310000],
            ['2004-01-14', 10428.67, 10538.37, 10426.89, 10573.85, 186280000],
            ['2004-01-15', 10534.52, 10553.85, 10454.52, 10639.03, 260090000],
            ['2004-01-16', 10556.37, 10600.51, 10503.7, 10666.88, 254170000],
            ['2004-01-20', 10601.4, 10528.66, 10447.92, 10676.96, 224300000],
            ['2004-01-21', 10522.77, 10623.62, 10453.11, 10665.7, 214920000],
            ['2004-01-22', 10624.22, 10623.18, 10545.03, 10717.4, 219720000],
            ['2004-01-23', 10625.25, 10568.29, 10490.14, 10691.77, 234260000],
            ['2004-01-26', 10568, 10702.51, 10510.44, 10725.18, 186170000],
            ['2004-01-27', 10701.1, 10609.92, 10579.33, 10748.81, 206560000],
            ['2004-01-28', 10610.07, 10468.37, 10412.44, 10703.25, 247660000],
            ['2004-01-29', 10467.41, 10510.29, 10369.92, 10611.56, 273970000],
            ['2004-01-30', 10510.22, 10488.07, 10385.56, 10551.03, 208990000],
            ['2004-02-02', 10487.78, 10499.18, 10395.55, 10614.44, 224800000],
            ['2004-02-03', 10499.48, 10505.18, 10414.15, 10571.48, 183810000],
            ['2004-02-04', 10503.11, 10470.74, 10394.81, 10567.85, 227760000],
            ['2004-02-05', 10469.33, 10495.55, 10399.92, 10566.37, 187810000],
            ['2004-02-06', 10494.89, 10593.03, 10433.7, 10634.81, 182880000],
            ['2004-02-09', 10592, 10579.03, 10433.7, 10634.81, 160720000],
            ['2004-02-10', 10578.74, 10613.85, 10511.18, 10667.03, 160590000],
            ['2004-02-11', 10605.48, 10737.7, 10561.55, 10779.4, 277850000],
            ['2004-02-12', 10735.18, 10694.07, 10636.44, 10775.03, 197560000],
            ['2004-02-13', 10696.22, 10627.85, 10578.66, 10755.47, 208340000],
            ['2004-02-17', 10628.88, 10714.88, 10628.88, 10762.07, 169730000],
            ['2004-02-18', 10706.68, 10671.99, 10623.62, 10764.36, 164370000],
            ['2004-02-19', 10674.59, 10664.73, 10626.44, 10794.95, 219890000],
            ['2004-02-20', 10666.29, 10619.03, 10559.11, 10722.77, 220560000],
            ['2004-02-23', 10619.55, 10609.62, 10508.89, 10711.84, 229950000],
            ['2004-02-24', 10609.55, 10566.37, 10479.33, 10681.4, 225670000],
            ['2004-02-25', 10566.59, 10601.62, 10509.4, 10660.73, 192420000],
            ['2004-02-26', 10598.14, 10580.14, 10493.7, 10652.96, 223230000],
            ['2004-02-27', 10581.55, 10583.92, 10519.03, 10689.55, 200050000]
          ]
        }
      }
    }
  }
</script>
</script>

#### set data type

<vuep template="#set-dataType"></vuep>

<script v-pre type="text/x-template" id="set-dataType">
<template>
  <ve-candle :data="chartData" :settings="chartSettings"></ve-candle>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dataType: 'KMB'
      }
      return {
        chartData: {
          columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
          rows: [
            { 'date': '2004-01-05', open: 10411.85, close: 10544.07, lowest: 10411.85, highest: 10575.92, vol: 221290000 },
            { 'date': '2004-01-06', open: 10543.85, close: 10538.66, lowest: 10454.37, highest: 10584.07, vol: 191460000 },
            { 'date': '2004-01-07', open: 10535.46, close: 10529.03, lowest: 10432.12, highest: 10587.55, vol: 225490000 },
            { 'date': '2004-01-08', open: 10530.07, close: 10592.44, lowest: 10480.59, highest: 10651.99, vol: 237770000 },
            { 'date': '2004-01-09', open: 10589.25, close: 10458.89, lowest: 10420.52, highest: 10603.48, vol: 223250000 },
            { 'date': '2004-01-12', open: 10461.55, close: 10485.18, lowest: 10389.85, highest: 10543.03, vol: 197960000 },
            { 'date': '2004-01-13', open: 10485.18, close: 10427.18, lowest: 10341.19, highest: 10539.25, vol: 197310000 },
            { 'date': '2004-01-14', open: 10428.67, close: 10538.37, lowest: 10426.89, highest: 10573.85, vol: 186280000 },
            { 'date': '2004-01-15', open: 10534.52, close: 10553.85, lowest: 10454.52, highest: 10639.03, vol: 260090000 },
            { 'date': '2004-01-16', open: 10556.37, close: 10600.51, lowest: 10503.71, highest: 10666.88, vol: 254170000 },
            { 'date': '2004-01-20', open: 10601.42, close: 10528.66, lowest: 10447.92, highest: 10676.96, vol: 224300000 },
            { 'date': '2004-01-21', open: 10522.77, close: 10623.62, lowest: 10453.11, highest: 10665.72, vol: 214920000 },
            { 'date': '2004-01-22', open: 10624.22, close: 10623.18, lowest: 10545.03, highest: 10717.41, vol: 219720000 },
            { 'date': '2004-01-23', open: 10625.25, close: 10568.29, lowest: 10490.14, highest: 10691.77, vol: 234260000 },
            { 'date': '2004-01-26', open: 10568.12, close: 10702.51, lowest: 10510.44, highest: 10725.18, vol: 186170000 },
            { 'date': '2004-01-27', open: 10701.11, close: 10609.92, lowest: 10579.33, highest: 10748.81, vol: 206560000 },
            { 'date': '2004-01-28', open: 10610.07, close: 10468.37, lowest: 10412.44, highest: 10703.25, vol: 247660000 },
            { 'date': '2004-01-29', open: 10467.41, close: 10510.29, lowest: 10369.92, highest: 10611.56, vol: 273970000 },
            { 'date': '2004-01-30', open: 10510.22, close: 10488.07, lowest: 10385.56, highest: 10551.03, vol: 208990000 },
            { 'date': '2004-02-02', open: 10487.78, close: 10499.18, lowest: 10395.55, highest: 10614.44, vol: 224800000 },
            { 'date': '2004-02-03', open: 10499.48, close: 10505.18, lowest: 10414.15, highest: 10571.48, vol: 183810000 },
            { 'date': '2004-02-04', open: 10503.11, close: 10470.74, lowest: 10394.81, highest: 10567.85, vol: 227760000 },
            { 'date': '2004-02-05', open: 10469.33, close: 10495.55, lowest: 10399.92, highest: 10566.37, vol: 187810000 },
            { 'date': '2004-02-06', open: 10494.89, close: 10593.03, lowest: 10433.74, highest: 10634.81, vol: 182880000 },
            { 'date': '2004-02-09', open: 10592.41, close: 10579.03, lowest: 10433.72, highest: 10634.81, vol: 160720000 },
            { 'date': '2004-02-10', open: 10578.74, close: 10613.85, lowest: 10511.18, highest: 10667.03, vol: 160590000 },
            { 'date': '2004-02-11', open: 10605.48, close: 10737.72, lowest: 10561.55, highest: 10779.41, vol: 277850000 },
            { 'date': '2004-02-12', open: 10735.18, close: 10694.07, lowest: 10636.44, highest: 10775.03, vol: 197560000 },
            { 'date': '2004-02-13', open: 10696.22, close: 10627.85, lowest: 10578.66, highest: 10755.47, vol: 208340000 },
            { 'date': '2004-02-17', open: 10628.88, close: 10714.88, lowest: 10628.88, highest: 10762.07, vol: 169730000 },
            { 'date': '2004-02-18', open: 10706.68, close: 10671.99, lowest: 10623.62, highest: 10764.36, vol: 164370000 },
            { 'date': '2004-02-19', open: 10674.59, close: 10664.73, lowest: 10626.44, highest: 10794.95, vol: 219890000 },
            { 'date': '2004-02-20', open: 10666.29, close: 10619.03, lowest: 10559.11, highest: 10722.77, vol: 220560000 },
            { 'date': '2004-02-23', open: 10619.55, close: 10609.62, lowest: 10508.89, highest: 10711.84, vol: 229950000 },
            { 'date': '2004-02-24', open: 10609.55, close: 10566.37, lowest: 10479.33, highest: 10681.41, vol: 225670000 },
            { 'date': '2004-02-25', open: 10566.59, close: 10601.62, lowest: 10509.42, highest: 10660.73, vol: 192420000 },
            { 'date': '2004-02-26', open: 10598.14, close: 10580.14, lowest: 10493.71, highest: 10652.96, vol: 223230000 },
            { 'date': '2004-02-27', open: 10581.55, close: 10583.92, lowest: 10519.03, highest: 10689.55, vol: 200050000 }
          ]
        }
      }
    }
  }
</script>
</script>

#### display MA, VOL

<vuep template="#show-ma-vol"></vuep>

<script v-pre type="text/x-template" id="show-ma-vol">
<template>
  <ve-candle :data="chartData" :settings="chartSettings"></ve-candle>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        showMA: true,
        showVol: true
      }
      return {
        chartData: {
          columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
          rows: [
            { 'date': '2004-01-05', open: 10411.85, close: 10544.07, lowest: 10411.85, highest: 10575.92, vol: 221290000 },
            { 'date': '2004-01-06', open: 10543.85, close: 10538.66, lowest: 10454.37, highest: 10584.07, vol: 191460000 },
            { 'date': '2004-01-07', open: 10535.46, close: 10529.03, lowest: 10432.12, highest: 10587.55, vol: 225490000 },
            { 'date': '2004-01-08', open: 10530.07, close: 10592.44, lowest: 10480.59, highest: 10651.99, vol: 237770000 },
            { 'date': '2004-01-09', open: 10589.25, close: 10458.89, lowest: 10420.52, highest: 10603.48, vol: 223250000 },
            { 'date': '2004-01-12', open: 10461.55, close: 10485.18, lowest: 10389.85, highest: 10543.03, vol: 197960000 },
            { 'date': '2004-01-13', open: 10485.18, close: 10427.18, lowest: 10341.19, highest: 10539.25, vol: 197310000 },
            { 'date': '2004-01-14', open: 10428.67, close: 10538.37, lowest: 10426.89, highest: 10573.85, vol: 186280000 },
            { 'date': '2004-01-15', open: 10534.52, close: 10553.85, lowest: 10454.52, highest: 10639.03, vol: 260090000 },
            { 'date': '2004-01-16', open: 10556.37, close: 10600.51, lowest: 10503.71, highest: 10666.88, vol: 254170000 },
            { 'date': '2004-01-20', open: 10601.42, close: 10528.66, lowest: 10447.92, highest: 10676.96, vol: 224300000 },
            { 'date': '2004-01-21', open: 10522.77, close: 10623.62, lowest: 10453.11, highest: 10665.72, vol: 214920000 },
            { 'date': '2004-01-22', open: 10624.22, close: 10623.18, lowest: 10545.03, highest: 10717.41, vol: 219720000 },
            { 'date': '2004-01-23', open: 10625.25, close: 10568.29, lowest: 10490.14, highest: 10691.77, vol: 234260000 },
            { 'date': '2004-01-26', open: 10568.12, close: 10702.51, lowest: 10510.44, highest: 10725.18, vol: 186170000 },
            { 'date': '2004-01-27', open: 10701.11, close: 10609.92, lowest: 10579.33, highest: 10748.81, vol: 206560000 },
            { 'date': '2004-01-28', open: 10610.07, close: 10468.37, lowest: 10412.44, highest: 10703.25, vol: 247660000 },
            { 'date': '2004-01-29', open: 10467.41, close: 10510.29, lowest: 10369.92, highest: 10611.56, vol: 273970000 },
            { 'date': '2004-01-30', open: 10510.22, close: 10488.07, lowest: 10385.56, highest: 10551.03, vol: 208990000 },
            { 'date': '2004-02-02', open: 10487.78, close: 10499.18, lowest: 10395.55, highest: 10614.44, vol: 224800000 },
            { 'date': '2004-02-03', open: 10499.48, close: 10505.18, lowest: 10414.15, highest: 10571.48, vol: 183810000 },
            { 'date': '2004-02-04', open: 10503.11, close: 10470.74, lowest: 10394.81, highest: 10567.85, vol: 227760000 },
            { 'date': '2004-02-05', open: 10469.33, close: 10495.55, lowest: 10399.92, highest: 10566.37, vol: 187810000 },
            { 'date': '2004-02-06', open: 10494.89, close: 10593.03, lowest: 10433.74, highest: 10634.81, vol: 182880000 },
            { 'date': '2004-02-09', open: 10592.41, close: 10579.03, lowest: 10433.72, highest: 10634.81, vol: 160720000 },
            { 'date': '2004-02-10', open: 10578.74, close: 10613.85, lowest: 10511.18, highest: 10667.03, vol: 160590000 },
            { 'date': '2004-02-11', open: 10605.48, close: 10737.72, lowest: 10561.55, highest: 10779.41, vol: 277850000 },
            { 'date': '2004-02-12', open: 10735.18, close: 10694.07, lowest: 10636.44, highest: 10775.03, vol: 197560000 },
            { 'date': '2004-02-13', open: 10696.22, close: 10627.85, lowest: 10578.66, highest: 10755.47, vol: 208340000 },
            { 'date': '2004-02-17', open: 10628.88, close: 10714.88, lowest: 10628.88, highest: 10762.07, vol: 169730000 },
            { 'date': '2004-02-18', open: 10706.68, close: 10671.99, lowest: 10623.62, highest: 10764.36, vol: 164370000 },
            { 'date': '2004-02-19', open: 10674.59, close: 10664.73, lowest: 10626.44, highest: 10794.95, vol: 219890000 },
            { 'date': '2004-02-20', open: 10666.29, close: 10619.03, lowest: 10559.11, highest: 10722.77, vol: 220560000 },
            { 'date': '2004-02-23', open: 10619.55, close: 10609.62, lowest: 10508.89, highest: 10711.84, vol: 229950000 },
            { 'date': '2004-02-24', open: 10609.55, close: 10566.37, lowest: 10479.33, highest: 10681.41, vol: 225670000 },
            { 'date': '2004-02-25', open: 10566.59, close: 10601.62, lowest: 10509.42, highest: 10660.73, vol: 192420000 },
            { 'date': '2004-02-26', open: 10598.14, close: 10580.14, lowest: 10493.71, highest: 10652.96, vol: 223230000 },
            { 'date': '2004-02-27', open: 10581.55, close: 10583.92, lowest: 10519.03, highest: 10689.55, vol: 200050000 }
          ]
        }
      }
    }
  }
</script>
</script>

#### alias

<vuep template="#set-label-legend"></vuep>

<script v-pre type="text/x-template" id="set-label-legend">
<template>
  <ve-candle :data="chartData" :settings="chartSettings"></ve-candle>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        showMA: true,
        showVol: true,
        labelMap: {
          MA5: 'ma5'
        },
        legendName: {
          '日K': 'day k'
        },
        showDataZoom: true
      }
      return {
        chartData: {
          columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
          rows: [
            { 'date': '2004-01-05', open: 10411.85, close: 10544.07, lowest: 10411.85, highest: 10575.92, vol: 221290000 },
            { 'date': '2004-01-06', open: 10543.85, close: 10538.66, lowest: 10454.37, highest: 10584.07, vol: 191460000 },
            { 'date': '2004-01-07', open: 10535.46, close: 10529.03, lowest: 10432.12, highest: 10587.55, vol: 225490000 },
            { 'date': '2004-01-08', open: 10530.07, close: 10592.44, lowest: 10480.59, highest: 10651.99, vol: 237770000 },
            { 'date': '2004-01-09', open: 10589.25, close: 10458.89, lowest: 10420.52, highest: 10603.48, vol: 223250000 },
            { 'date': '2004-01-12', open: 10461.55, close: 10485.18, lowest: 10389.85, highest: 10543.03, vol: 197960000 },
            { 'date': '2004-01-13', open: 10485.18, close: 10427.18, lowest: 10341.19, highest: 10539.25, vol: 197310000 },
            { 'date': '2004-01-14', open: 10428.67, close: 10538.37, lowest: 10426.89, highest: 10573.85, vol: 186280000 },
            { 'date': '2004-01-15', open: 10534.52, close: 10553.85, lowest: 10454.52, highest: 10639.03, vol: 260090000 },
            { 'date': '2004-01-16', open: 10556.37, close: 10600.51, lowest: 10503.71, highest: 10666.88, vol: 254170000 },
            { 'date': '2004-01-20', open: 10601.42, close: 10528.66, lowest: 10447.92, highest: 10676.96, vol: 224300000 },
            { 'date': '2004-01-21', open: 10522.77, close: 10623.62, lowest: 10453.11, highest: 10665.72, vol: 214920000 },
            { 'date': '2004-01-22', open: 10624.22, close: 10623.18, lowest: 10545.03, highest: 10717.41, vol: 219720000 },
            { 'date': '2004-01-23', open: 10625.25, close: 10568.29, lowest: 10490.14, highest: 10691.77, vol: 234260000 },
            { 'date': '2004-01-26', open: 10568.12, close: 10702.51, lowest: 10510.44, highest: 10725.18, vol: 186170000 },
            { 'date': '2004-01-27', open: 10701.11, close: 10609.92, lowest: 10579.33, highest: 10748.81, vol: 206560000 },
            { 'date': '2004-01-28', open: 10610.07, close: 10468.37, lowest: 10412.44, highest: 10703.25, vol: 247660000 },
            { 'date': '2004-01-29', open: 10467.41, close: 10510.29, lowest: 10369.92, highest: 10611.56, vol: 273970000 },
            { 'date': '2004-01-30', open: 10510.22, close: 10488.07, lowest: 10385.56, highest: 10551.03, vol: 208990000 },
            { 'date': '2004-02-02', open: 10487.78, close: 10499.18, lowest: 10395.55, highest: 10614.44, vol: 224800000 },
            { 'date': '2004-02-03', open: 10499.48, close: 10505.18, lowest: 10414.15, highest: 10571.48, vol: 183810000 },
            { 'date': '2004-02-04', open: 10503.11, close: 10470.74, lowest: 10394.81, highest: 10567.85, vol: 227760000 },
            { 'date': '2004-02-05', open: 10469.33, close: 10495.55, lowest: 10399.92, highest: 10566.37, vol: 187810000 },
            { 'date': '2004-02-06', open: 10494.89, close: 10593.03, lowest: 10433.74, highest: 10634.81, vol: 182880000 },
            { 'date': '2004-02-09', open: 10592.41, close: 10579.03, lowest: 10433.72, highest: 10634.81, vol: 160720000 },
            { 'date': '2004-02-10', open: 10578.74, close: 10613.85, lowest: 10511.18, highest: 10667.03, vol: 160590000 },
            { 'date': '2004-02-11', open: 10605.48, close: 10737.72, lowest: 10561.55, highest: 10779.41, vol: 277850000 },
            { 'date': '2004-02-12', open: 10735.18, close: 10694.07, lowest: 10636.44, highest: 10775.03, vol: 197560000 },
            { 'date': '2004-02-13', open: 10696.22, close: 10627.85, lowest: 10578.66, highest: 10755.47, vol: 208340000 },
            { 'date': '2004-02-17', open: 10628.88, close: 10714.88, lowest: 10628.88, highest: 10762.07, vol: 169730000 },
            { 'date': '2004-02-18', open: 10706.68, close: 10671.99, lowest: 10623.62, highest: 10764.36, vol: 164370000 },
            { 'date': '2004-02-19', open: 10674.59, close: 10664.73, lowest: 10626.44, highest: 10794.95, vol: 219890000 },
            { 'date': '2004-02-20', open: 10666.29, close: 10619.03, lowest: 10559.11, highest: 10722.77, vol: 220560000 },
            { 'date': '2004-02-23', open: 10619.55, close: 10609.62, lowest: 10508.89, highest: 10711.84, vol: 229950000 },
            { 'date': '2004-02-24', open: 10609.55, close: 10566.37, lowest: 10479.33, highest: 10681.41, vol: 225670000 },
            { 'date': '2004-02-25', open: 10566.59, close: 10601.62, lowest: 10509.42, highest: 10660.73, vol: 192420000 },
            { 'date': '2004-02-26', open: 10598.14, close: 10580.14, lowest: 10493.71, highest: 10652.96, vol: 223230000 },
            { 'date': '2004-02-27', open: 10581.55, close: 10583.92, lowest: 10519.03, highest: 10689.55, vol: 200050000 }
          ]
        }
      }
    }
  }
</script>
</script>

#### change MA value

<vuep template="#set-ma-list"></vuep>

<script v-pre type="text/x-template" id="set-ma-list">
<template>
  <ve-candle :data="chartData" :settings="chartSettings"></ve-candle>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        showMA: true,
        MA: [1, 2, 3, 4]
      }
      return {
        chartData: {
          columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
          rows: [
            { 'date': '2004-01-05', open: 10411.85, close: 10544.07, lowest: 10411.85, highest: 10575.92, vol: 221290000 },
            { 'date': '2004-01-06', open: 10543.85, close: 10538.66, lowest: 10454.37, highest: 10584.07, vol: 191460000 },
            { 'date': '2004-01-07', open: 10535.46, close: 10529.03, lowest: 10432.12, highest: 10587.55, vol: 225490000 },
            { 'date': '2004-01-08', open: 10530.07, close: 10592.44, lowest: 10480.59, highest: 10651.99, vol: 237770000 },
            { 'date': '2004-01-09', open: 10589.25, close: 10458.89, lowest: 10420.52, highest: 10603.48, vol: 223250000 },
            { 'date': '2004-01-12', open: 10461.55, close: 10485.18, lowest: 10389.85, highest: 10543.03, vol: 197960000 },
            { 'date': '2004-01-13', open: 10485.18, close: 10427.18, lowest: 10341.19, highest: 10539.25, vol: 197310000 },
            { 'date': '2004-01-14', open: 10428.67, close: 10538.37, lowest: 10426.89, highest: 10573.85, vol: 186280000 },
            { 'date': '2004-01-15', open: 10534.52, close: 10553.85, lowest: 10454.52, highest: 10639.03, vol: 260090000 },
            { 'date': '2004-01-16', open: 10556.37, close: 10600.51, lowest: 10503.71, highest: 10666.88, vol: 254170000 },
            { 'date': '2004-01-20', open: 10601.42, close: 10528.66, lowest: 10447.92, highest: 10676.96, vol: 224300000 },
            { 'date': '2004-01-21', open: 10522.77, close: 10623.62, lowest: 10453.11, highest: 10665.72, vol: 214920000 },
            { 'date': '2004-01-22', open: 10624.22, close: 10623.18, lowest: 10545.03, highest: 10717.41, vol: 219720000 },
            { 'date': '2004-01-23', open: 10625.25, close: 10568.29, lowest: 10490.14, highest: 10691.77, vol: 234260000 },
            { 'date': '2004-01-26', open: 10568.12, close: 10702.51, lowest: 10510.44, highest: 10725.18, vol: 186170000 },
            { 'date': '2004-01-27', open: 10701.11, close: 10609.92, lowest: 10579.33, highest: 10748.81, vol: 206560000 },
            { 'date': '2004-01-28', open: 10610.07, close: 10468.37, lowest: 10412.44, highest: 10703.25, vol: 247660000 },
            { 'date': '2004-01-29', open: 10467.41, close: 10510.29, lowest: 10369.92, highest: 10611.56, vol: 273970000 },
            { 'date': '2004-01-30', open: 10510.22, close: 10488.07, lowest: 10385.56, highest: 10551.03, vol: 208990000 },
            { 'date': '2004-02-02', open: 10487.78, close: 10499.18, lowest: 10395.55, highest: 10614.44, vol: 224800000 },
            { 'date': '2004-02-03', open: 10499.48, close: 10505.18, lowest: 10414.15, highest: 10571.48, vol: 183810000 },
            { 'date': '2004-02-04', open: 10503.11, close: 10470.74, lowest: 10394.81, highest: 10567.85, vol: 227760000 },
            { 'date': '2004-02-05', open: 10469.33, close: 10495.55, lowest: 10399.92, highest: 10566.37, vol: 187810000 },
            { 'date': '2004-02-06', open: 10494.89, close: 10593.03, lowest: 10433.74, highest: 10634.81, vol: 182880000 },
            { 'date': '2004-02-09', open: 10592.41, close: 10579.03, lowest: 10433.72, highest: 10634.81, vol: 160720000 },
            { 'date': '2004-02-10', open: 10578.74, close: 10613.85, lowest: 10511.18, highest: 10667.03, vol: 160590000 },
            { 'date': '2004-02-11', open: 10605.48, close: 10737.72, lowest: 10561.55, highest: 10779.41, vol: 277850000 },
            { 'date': '2004-02-12', open: 10735.18, close: 10694.07, lowest: 10636.44, highest: 10775.03, vol: 197560000 },
            { 'date': '2004-02-13', open: 10696.22, close: 10627.85, lowest: 10578.66, highest: 10755.47, vol: 208340000 },
            { 'date': '2004-02-17', open: 10628.88, close: 10714.88, lowest: 10628.88, highest: 10762.07, vol: 169730000 },
            { 'date': '2004-02-18', open: 10706.68, close: 10671.99, lowest: 10623.62, highest: 10764.36, vol: 164370000 },
            { 'date': '2004-02-19', open: 10674.59, close: 10664.73, lowest: 10626.44, highest: 10794.95, vol: 219890000 },
            { 'date': '2004-02-20', open: 10666.29, close: 10619.03, lowest: 10559.11, highest: 10722.77, vol: 220560000 },
            { 'date': '2004-02-23', open: 10619.55, close: 10609.62, lowest: 10508.89, highest: 10711.84, vol: 229950000 },
            { 'date': '2004-02-24', open: 10609.55, close: 10566.37, lowest: 10479.33, highest: 10681.41, vol: 225670000 },
            { 'date': '2004-02-25', open: 10566.59, close: 10601.62, lowest: 10509.42, highest: 10660.73, vol: 192420000 },
            { 'date': '2004-02-26', open: 10598.14, close: 10580.14, lowest: 10493.71, highest: 10652.96, vol: 223230000 },
            { 'date': '2004-02-27', open: 10581.55, close: 10583.92, lowest: 10519.03, highest: 10689.55, vol: 200050000 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set dataZoom

<vuep template="#set-dataZoom-1"></vuep>

<script v-pre type="text/x-template" id="set-dataZoom-1">
<template>
  <ve-candle :data="chartData" :settings="chartSettings"></ve-candle>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        showDataZoom: true,
        start: 20,
        end: 100
      }
      return {
        chartData: {
          columns: ['date', 'open', 'close', 'lowest', 'highest', 'vol'],
          rows: [
            { 'date': '2004-01-05', open: 10411.85, close: 10544.07, lowest: 10411.85, highest: 10575.92, vol: 221290000 },
            { 'date': '2004-01-06', open: 10543.85, close: 10538.66, lowest: 10454.37, highest: 10584.07, vol: 191460000 },
            { 'date': '2004-01-07', open: 10535.46, close: 10529.03, lowest: 10432.12, highest: 10587.55, vol: 225490000 },
            { 'date': '2004-01-08', open: 10530.07, close: 10592.44, lowest: 10480.59, highest: 10651.99, vol: 237770000 },
            { 'date': '2004-01-09', open: 10589.25, close: 10458.89, lowest: 10420.52, highest: 10603.48, vol: 223250000 },
            { 'date': '2004-01-12', open: 10461.55, close: 10485.18, lowest: 10389.85, highest: 10543.03, vol: 197960000 },
            { 'date': '2004-01-13', open: 10485.18, close: 10427.18, lowest: 10341.19, highest: 10539.25, vol: 197310000 },
            { 'date': '2004-01-14', open: 10428.67, close: 10538.37, lowest: 10426.89, highest: 10573.85, vol: 186280000 },
            { 'date': '2004-01-15', open: 10534.52, close: 10553.85, lowest: 10454.52, highest: 10639.03, vol: 260090000 },
            { 'date': '2004-01-16', open: 10556.37, close: 10600.51, lowest: 10503.71, highest: 10666.88, vol: 254170000 },
            { 'date': '2004-01-20', open: 10601.42, close: 10528.66, lowest: 10447.92, highest: 10676.96, vol: 224300000 },
            { 'date': '2004-01-21', open: 10522.77, close: 10623.62, lowest: 10453.11, highest: 10665.72, vol: 214920000 },
            { 'date': '2004-01-22', open: 10624.22, close: 10623.18, lowest: 10545.03, highest: 10717.41, vol: 219720000 },
            { 'date': '2004-01-23', open: 10625.25, close: 10568.29, lowest: 10490.14, highest: 10691.77, vol: 234260000 },
            { 'date': '2004-01-26', open: 10568.12, close: 10702.51, lowest: 10510.44, highest: 10725.18, vol: 186170000 },
            { 'date': '2004-01-27', open: 10701.11, close: 10609.92, lowest: 10579.33, highest: 10748.81, vol: 206560000 },
            { 'date': '2004-01-28', open: 10610.07, close: 10468.37, lowest: 10412.44, highest: 10703.25, vol: 247660000 },
            { 'date': '2004-01-29', open: 10467.41, close: 10510.29, lowest: 10369.92, highest: 10611.56, vol: 273970000 },
            { 'date': '2004-01-30', open: 10510.22, close: 10488.07, lowest: 10385.56, highest: 10551.03, vol: 208990000 },
            { 'date': '2004-02-02', open: 10487.78, close: 10499.18, lowest: 10395.55, highest: 10614.44, vol: 224800000 },
            { 'date': '2004-02-03', open: 10499.48, close: 10505.18, lowest: 10414.15, highest: 10571.48, vol: 183810000 },
            { 'date': '2004-02-04', open: 10503.11, close: 10470.74, lowest: 10394.81, highest: 10567.85, vol: 227760000 },
            { 'date': '2004-02-05', open: 10469.33, close: 10495.55, lowest: 10399.92, highest: 10566.37, vol: 187810000 },
            { 'date': '2004-02-06', open: 10494.89, close: 10593.03, lowest: 10433.74, highest: 10634.81, vol: 182880000 },
            { 'date': '2004-02-09', open: 10592.41, close: 10579.03, lowest: 10433.72, highest: 10634.81, vol: 160720000 },
            { 'date': '2004-02-10', open: 10578.74, close: 10613.85, lowest: 10511.18, highest: 10667.03, vol: 160590000 },
            { 'date': '2004-02-11', open: 10605.48, close: 10737.72, lowest: 10561.55, highest: 10779.41, vol: 277850000 },
            { 'date': '2004-02-12', open: 10735.18, close: 10694.07, lowest: 10636.44, highest: 10775.03, vol: 197560000 },
            { 'date': '2004-02-13', open: 10696.22, close: 10627.85, lowest: 10578.66, highest: 10755.47, vol: 208340000 },
            { 'date': '2004-02-17', open: 10628.88, close: 10714.88, lowest: 10628.88, highest: 10762.07, vol: 169730000 },
            { 'date': '2004-02-18', open: 10706.68, close: 10671.99, lowest: 10623.62, highest: 10764.36, vol: 164370000 },
            { 'date': '2004-02-19', open: 10674.59, close: 10664.73, lowest: 10626.44, highest: 10794.95, vol: 219890000 },
            { 'date': '2004-02-20', open: 10666.29, close: 10619.03, lowest: 10559.11, highest: 10722.77, vol: 220560000 },
            { 'date': '2004-02-23', open: 10619.55, close: 10609.62, lowest: 10508.89, highest: 10711.84, vol: 229950000 },
            { 'date': '2004-02-24', open: 10609.55, close: 10566.37, lowest: 10479.33, highest: 10681.41, vol: 225670000 },
            { 'date': '2004-02-25', open: 10566.59, close: 10601.62, lowest: 10509.42, highest: 10660.73, vol: 192420000 },
            { 'date': '2004-02-26', open: 10598.14, close: 10580.14, lowest: 10493.71, highest: 10652.96, vol: 223230000 },
            { 'date': '2004-02-27', open: 10581.55, close: 10583.92, lowest: 10519.03, highest: 10689.55, vol: 200050000 }
          ]
        }
      }
    }
  }
</script>
</script>

#### settings

| attribute | description | type | remark |
| --- | --- | --- | --- |
| dimension | dimension of chart | string | default columns[0] |
| metrics | metrics of chart | array | default [columns[1] ~ columns[5]] |
| digit | digit of percent type data | number | default `2` |
| itemStyle | style of candle item | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.itemStyle) |
| labelMap | metrics alias | object | - |
| legendName | legend alias | object | - |
| showMA | whether display MA | boolean | 默认 为 false |
| MA | MA option |  array | default `[5, 10, 20, 30]` |
| showVol | whether display Vol | boolean |  default `false` |
| downColor | rise color | string | default `#ec0000` |
| upColor | fall color | string | default `#00da3c` |
| showDataZoom | whether display dataRoom | boolean | default `false` |
| start | start of dataZoom | number | default `50` |
| end | end of dataZoom | number | default `100` |
| dataType | type of data display | string | `'KMB'`, `'normal'`, `'percent'` |

> Remark 1: The values of metrics represent `['open', 'close', 'lowest', 'highest', 'vol']`, Where vol is an optional value.

> Remark 2: When the value on the left of the k-line graph is occluded, you can increase the amount of space available by setting the grid property to avoid occlusion.
