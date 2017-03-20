import { getFormated } from '../util'

const dataHandler = {
  getRadarLegend (data) {
    let legendData = []
    data.forEach(val => {
      if (legendData.indexOf(val.name) === -1) legendData.push(val.name)
    })

    return { data: legendData }
  },

  getRadarTooltip (dataType, radar) {
    const typeTemp = []
    const nameTemp = []
    radar.indicator.map((item, index) => {
      typeTemp[index] = dataType[item.name]
      nameTemp[index] = item.name
    })
    return {
      formatter (item) {
        const tpl = []
        tpl.push(`<span class="chart-point" style="background-color:${item.color}"></span>`)
        tpl.push(`${item.seriesName}<br />`)
        item.data.forEach((val, index) => {
          tpl.push(`${nameTemp[index]}: ${getFormated(val, typeTemp[index])}<br />`)
        })
        return tpl.join('')
      }
    }
  },

  getRadarSetting (data) {
    const settingBase = {
      indicator: [],
      shape: 'circle',
      splitNumber: 5
    }
    let indicatorTemp = {}
    data.forEach(items => {
      Object.keys(items).forEach(key => {
        if (key !== 'name') {
          if (!indicatorTemp[key]) {
            indicatorTemp[key] = [items[key]]
          } else {
            indicatorTemp[key].push(items[key])
          }
        }
      })
    })
    settingBase.indicator = Object.keys(indicatorTemp).map(key => {
      return {
        name: key,
        max: Math.max.apply(null, indicatorTemp[key])
      }
    })
    return settingBase
  },

  getRadarSeries (data, legend, radar) {
    let radarIndexObj = {}
    radar.indicator.forEach((item, index) => {
      radarIndexObj[item.name] = index
    })
    let dataStore = {}
    data.forEach(items => {
      const name = items.name
      delete items.name
      if (!dataStore[name]) {
        dataStore[name] = [items]
      } else {
        dataStore[name].push(items)
      }
    })
    const series = legend.data.map((name, index) => {
      const seriesBase = {
        name,
        type: 'radar',
        data: []
      }
      dataStore[name].forEach(items => {
        let dataArr = []
        Object.keys(items).forEach(key => {
          dataArr[radarIndexObj[key]] = items[key]
        })
        seriesBase.data.push(dataArr)
      })
      return seriesBase
    })
    return series
  }
}

const radar = (data, settings) => {
  const { dataType = {} } = settings
  const legend = dataHandler.getRadarLegend(data)
  const radar = dataHandler.getRadarSetting(data)
  const tooltip = dataHandler.getRadarTooltip(dataType, radar)
  const series = dataHandler.getRadarSeries(data, legend, radar)
  const options = { legend, tooltip, radar, series }
  return options
}

export { radar }
