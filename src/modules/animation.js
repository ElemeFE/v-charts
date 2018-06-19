export default function (options, animation) {
  Object.keys(animation).forEach(key => {
    options[key] = animation[key]
  })
}
