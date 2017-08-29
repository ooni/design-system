import palx from 'palx'

let colors = {
  BLACK: '#000000',
  WHITE: '#ffffff',
  LIGHT_BLUE: '#5DB8FE',
  OONI_BLUE: '#0588CB',
  DARK_BLUE: '#005B9A',
  SUNFLOWER: '#F39C12',
  ALIZARIN: '#E74C3C',
  BLUE_GREY: '#37474F',
  BLUE_GREY_LIGHT: '#62727B',
  BLUE_GREY_DARK: '#102027'
}

const palette = palx(colors.OONI_BLUE)

const flattened = Object.keys(palette)
  .reduce((a, key) => {
    const value = palette[key]
    if (Array.isArray(value)) {
      a[key] = value[5]
      value.forEach((val, i) => {
        a[key + i] = val
      })
    } else {
      a[key] = value
    }
    return a
  }, {})

colors.palx = flattened
export default colors
