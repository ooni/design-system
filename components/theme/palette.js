/* global require, module */
const chroma = require('chroma-js')

const hueNames = [
  'red',      // 0
  'orange',   // 30
  'yellow',   // 60
  'lime',     // 90
  'green',    // 120
  'teal',     // 150
  'cyan',     // 180
  'blue',     // 210
  'indigo',   // 240
  'violet',   // 270
  'fuchsia',  // 300
  'pink',     // 330
  'red',      // 360
]

const hueName = h => {
  const i = Math.round((h - 2) / 30)
  const name = hueNames[i]
  return name
}

const createHues = (length = 12) => {
  const hueLength = length
  const hueStep = 360 / hueLength
  return base => {
    const hues = Array.from({ length: hueLength })
      .map((n, i) => {
        return (base + (i * hueStep)) % 360
      })

    return hues
  }
}

const spreadLum = (hex, darkest, lightest) => {
  // I want them to be something like
  // [darkest, .., .., baselum]
  // [baselum + step, .., .., .., lightest]
  const baselum = chroma(hex).luminance()

  const lightSteps = [0, 1, 2, 3, 4, 5]
  const lightstep = (baselum - lightest) / (lightSteps.length - 1)

  const darkSteps = [1, 2, 3, 4]
  const darkstep = (baselum - darkest) / darkSteps.length
  const lights = lightSteps.map(step => {
    if (step == 5) {
      return hex
    }
    return chroma(hex).luminance(lightest + step * lightstep, 'hsl').hex()
  })
  const darks = darkSteps.map(step => {
    return chroma(hex).luminance(baselum - step * darkstep, 'hsl').hex()
  })
  return [
    ...lights,
    ...darks,
  ]
}

const desat = n => hex => {
  /* eslint-disable no-unused-vars */
  const [ h, s, l ] = chroma(hex).hsl()
  /* eslint-enable no-unused-vars */
  return chroma.hsl(h, n, l).hex()
}

const createBlack = (hex, darkestGrey) => {
  const d = desat(1/8)(hex)
  return chroma(d).luminance(darkestGrey).hex()
}

// Mappers
const keyword = hex => {
  const [ hue, sat ] = chroma(hex).hsl()
  if (sat < .5) {
    return 'gray'
  }
  const name = hueName(hue)
  return name
}

// Reducer
const toObj = (a = {}, color) => {
  const key = a[color.key] ? color.key + '2' : color.key
  a[key] = color.value
  return a
}

const palette = (hex, options = {}) => {
  const {
    darkestGrey = 0.018,
    lightestGrey = 0.94,
    darkestColor = 0.09,
    lightestColor = 0.89
  } = options

  const color = chroma(hex)
  const colors = []
  const [ hue, sat, lte ] = color.hsl()

  const hues = createHues(12)(hue)

  colors.push({
    key: 'black',
    value: createBlack('' + color.hex(), darkestGrey)
  })

  let value = spreadLum(desat(1/8)('' + color.hex()), darkestGrey, lightestGrey)
  colors.push({
    key: 'gray',
    value
  })

  hues.forEach(h => {
    const c = chroma.hsl(h, sat, lte)
    const key = keyword(c)
    const value = spreadLum('' + c.hex(), darkestColor, lightestColor)
    colors.push({
      key,
      value
    })
  })

  const obj = Object.assign({
    base: hex,
  }, colors.reduce(toObj, {}))

  const flattened = Object.keys(obj)
    .reduce((a, key) => {
      const value = obj[key]
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
  return Object.assign({}, obj, {flattened})
}

module.exports = palette
