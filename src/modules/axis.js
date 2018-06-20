export default function (options, config) {
  const {
    v_axis: {
      show
    }
  } = options
  const {
    visible: {
      x: xVisible,
      y: yVisible
    }
  } = config
  options.xAxis = show && !(xVisible === false) && { type: 'category' }
  options.yAxis = show && !(yVisible === false) && { type: 'value' }
}
