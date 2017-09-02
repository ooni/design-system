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
  'fuschia',  // 300
  'pink',     // 330
  'red',      // 360
]

const hueName = h => {
  const i = Math.round((h - 2) / 30)
  const name = hueNames[i]
  return name
}

const lums = [
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  0
]
  .map(n => n + 0.5)
  .map(n => n / 10)

const createHues = (length = 12) => {
  const hueLength = length
  const hueStep = 360 / hueLength
  return base => {
    const hues = Array.from({ length: hueLength })
      .map((n, i) => {
        return Math.floor((base + (i * hueStep)) % 360)
      })

    return hues
  }
}

const spreadLum = hex => {
  const baselum = chroma(hex).luminance()
  const upperstep = (1 - baselum) / 6
  const lowerstep = baselum / 5
  const lower = [
    3, 2, 1, 0
  ].map(step => {
    return chroma(hex).luminance((step + 1) * lowerstep).hex()
  })
  const upper = [
    5, 4, 3, 2, 1, 0
  ].map(step => {
    return chroma(hex).luminance(baselum + step * upperstep).hex()
  })
  return [
    ...upper,
    ...lower,
  ]
}

const desat = n => hex => {
  const [ h, s, l ] = chroma(hex).hsl()
  return chroma.hsl(h, n, l).hex()
}

const createBlack = hex => {
  const d = desat(1/8)(hex)
  return chroma(d).luminance(.05).hex()
}

const createShades = hex => {
  return lums.map(lum => {
    return chroma(hex).luminance(lum).hex()
  })
}

// Mappers
const toHex = ({ key, value }) => ({ key, value: value.hex() })

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
    // Need to figure out a better name for this option
    luminance = 'split' // 'scale'
  } = options

  const color = chroma(hex)
  const colors = []
  const [ hue, sat, lte ] = color.hsl()

  const hues = createHues(12)(hue)

  colors.push({
    key: 'black',
    value: createBlack('' + color.hex())
  })

  //let value = createShades(desat(1/8)('' + color.hex()))
  let value = spreadLum(desat(1/8)('' + color.hex()))
  colors.push({
    key: 'gray',
    value
  })

  hues.forEach(h => {
    const c = chroma.hsl(h, sat, lte)
    const key = keyword(c)
    const value = luminance === 'scale'
      ? createShades('' + c.hex())
      : spreadLum('' + c.hex())
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
