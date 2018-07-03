import { isArray } from 'utils-lite'
import { getFormated } from '../utils'

function getExtraMetrics ({ extraMetrics, tpl, marker, metricsType, digit }) {
  if (extraMetrics) {
    Object.keys(extraMetrics).forEach(key => {
      let realData = getFormated(extraMetrics[key], metricsType[key], digit)
      tpl.push(`${marker} ${key}: ${realData}<br>`)
    })
  }
}

function getRealData ({ data, metricsType, digit, seriesName }) {
  let realData = isArray(data.value) ? data.value[1] : data.value
  realData = getFormated(realData, metricsType[seriesName], digit)
  return realData
}

export default function (options, config) {
  const {
    v_tooltip: {
      metricsType = {},
      digit
    }
  } = options
  options.tooltip = {
    show: config.visible,
    trigger: 'axis',
    formatter (chartItems) {
      let tpl = []
      if (isArray(chartItems)) {
        if (!chartItems[0]) return
        let markerItem = null
        tpl.push(`${chartItems[0].name || chartItems[0].axisValueLabel}<br>`)

        chartItems.forEach(({ seriesName, data, marker }) => {
          let realData = getRealData({ data, metricsType, digit, seriesName })
          tpl.push(`${marker} ${seriesName}: ${realData}<br>`)
          markerItem = marker
        })

        getExtraMetrics({
          extraMetrics: chartItems[0].data.v_extra,
          tpl,
          marker: markerItem,
          metricsType,
          digit
        })
      } else {
        const { data, seriesName, marker } = chartItems
        if (data.name === undefined || data.value === undefined) return ''
        let realData = getRealData({ data, metricsType, digit, seriesName })
        tpl.push(`${data.name}<br>`)
        tpl.push(`${marker} ${seriesName}: ${realData}<br>`)
        getExtraMetrics({
          extraMetrics: data.v_extra,
          tpl,
          marker,
          metricsType,
          digit
        })
      }
      return tpl.join('')
    }
  }
}
