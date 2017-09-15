
export const camelToDashCase = s => s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

export const stylesToCss = stylesFunc => props => {
  const styleObj = stylesFunc(props)
  if (styleObj === null) return null
  return Object.keys(styleObj)
          .map(x => `${camelToDashCase(x)}: ${styleObj[x]};`)
          .join('\n')
}

export const styleMult = (stylesFunc, k) => props => {
  const styleObj = stylesFunc(props)
  const value = styleObj[Object.keys(styleObj)[0]]
  const m = /(\d+)px/g.exec(value)
  if (m.length !== 2) {
    throw Error('Invalid pixel definition')
  }
  return `${parseInt(m[1])*k}px`
}
