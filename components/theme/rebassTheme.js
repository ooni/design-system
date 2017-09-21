import colors from './colors'

export const rebassTheme = {
  font: '"Fira Sans", sans-serif',
  monospace: '"Source Code Pro", monospace',
  maxWidth: 800,
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
  ],
  breakpoints: [
    32,
    48,
    64,
    80
  ],
  fontSizes: [
    12,
    16,
    22,
    28,
    36,
    48
  ],
  weights: [400, 600],
  radius: 2,
  colors: Object.assign({}, colors.palette)
}
export default rebassTheme
