import numerify from 'numerify'
import { isFunction, isObject, isArray, clone, arrDelArrItem } from 'utils-lite'

export const getFormated = (val, type, digit, defaultVal = '-') => {
  if (isNaN(val)) return defaultVal
  if (!type) return val
  if (isFunction(type)) return type(val, numerify)

  digit = isNaN(digit) ? 0 : ++digit
  const digitStr = `.[${new Array(digit).join(0)}]`
  let formatter = type
  switch (type) {
    case 'KMB':
      formatter = digit ? `0,0${digitStr}a` : '0,0a'
      break
    case 'normal':
      formatter = digit ? `0,0${digitStr}` : '0,0'
      break
    case 'percent':
      formatter = digit ? `0,0${digitStr}%` : '0,0.[00]%'
      break
  }
  return numerify(val, formatter)
}

export const getStackMap = (stack) => {
  const stackMap = {}
  Object.keys(stack).forEach(item => {
    stack[item].forEach(name => {
      stackMap[name] = item
    })
  })
  return stackMap
}

export const $get = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send(null)
    xhr.onload = () => {
      resolve(JSON.parse(xhr.responseText))
    }
    xhr.onerror = () => {
      reject(JSON.parse(xhr.responseText))
    }
  })
}

const mapPromise = {}

export const getMapJSON = ({
  position,
  positionJsonLink,
  beforeRegisterMapOnce,
  mapURLProfix
}) => {
  const link = positionJsonLink || `${mapURLProfix}${position}.json`
  if (!mapPromise[link]) {
    mapPromise[link] = $get(link).then(res => {
      if (beforeRegisterMapOnce) res = beforeRegisterMapOnce(res)
      return res
    })
  }
  return mapPromise[link]
}

let bmapPromise = null
let amapPromise = null

export const getBmap = (key, v) => {
  if (!bmapPromise) {
    bmapPromise = new Promise((resolve, reject) => {
      const callbackName = `bmap${Date.now()}`
      window[callbackName] = resolve
      const script = document.createElement('script')
      script.src = [
        `https://api.map.baidu.com/api?v=${v || '2.0'}`,
        `ak=${key}`,
        `callback=${callbackName}`
      ].join('&')

      document.body.appendChild(script)
    })
  }
  return bmapPromise
}

export const getAmap = (key, v) => {
  if (!amapPromise) {
    amapPromise = new Promise((resolve, reject) => {
      const callbackName = `amap${Date.now()}`
      window[callbackName] = resolve
      const script = document.createElement('script')
      script.src = [
        `https://webapi.amap.com/maps?v=${v || '1.4.3'}`,
        `key=${key}`,
        `callback=${callbackName}`
      ].join('&')

      document.body.appendChild(script)
    })
  }
  return amapPromise
}

export function axisSiteHandler (axisSite, axisGroup, metrics) {
  axisSite = clone(axisSite)
  if (!isArray(metrics)) metrics = [metrics]
  const {
    rightSide,
    leftSide,
    topSide,
    bottomSide
  } = axisGroup
  ;[rightSide, topSide].forEach(side => {
    side && side.forEach(name => {
      if (axisSite[name]) {
        metrics = arrDelArrItem(metrics, axisSite[name])
      } else {
        axisSite[name] = []
      }
    })
  })
  ;[leftSide, bottomSide].forEach(side => {
    side && side.forEach(name => {
      if (!axisSite[name]) {
        axisSite[name] = metrics
        metrics = []
      } else {
        axisSite[name] = axisSite[name].filter(item => ~metrics.indexOf(item))
      }
    })
  })
  return axisSite
}

export function optionsAddAttr (obj, target, item) {
  if (!target) return
  if (isObject(target)) {
    Object.keys(target).forEach(key => {
      optionsAddAttr(obj, key, target[key])
    })
    return
  }
  if (obj[target] && isArray(obj[target])) {
    if (isArray(item)) {
      obj[target] = obj[target].concat(item)
    } else {
      obj[target].push(item)
    }
  } else {
    if (isArray(item)) {
      obj[target] = item
    } else {
      obj[target] = [item]
    }
  }
}
