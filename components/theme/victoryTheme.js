import colors from './colors'

// Color scale
const colorScale = [
  colors.palette.yellow2,
  colors.palette.lime3,
  colors.palette.fuchsia4,
  colors.palette.blue5,
  colors.palette.grey6,
  colors.palette.grey7,
  colors.palette.green8
]

const primaryColor = colors.palette.base

// Typography
export const sansSerif = '"Fira Sans", sans-serif'
const letterSpacing = 'normal'
const fontSize = 10

// Layout
const baseProps = {
  width: 450,
  height: 300,
  colorScale: colorScale,
  padding: 50,
  domainPadding: 25,
  overflow: 'visible'
}

// Labels
export const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: colors.palette.black,
  stroke: 'transparent',
  border: '1px solid black'
}

const centeredLabelStyles = Object.assign({}, { textAnchor: 'middle' }, baseLabelStyles)

// Strokes
const strokeDasharray = '1, 3'
const strokeLinecap = 'round'
const strokeLinejoin = 'round'

export const axisYStyle = {
  grid: {
    stroke: colors.palette.black,
    strokeOpacity: '0.5',
    strokeDasharray,
    strokeLinecap,
    strokeLinejoin
  },
  axis: {
    fill: 'transparent',
    stroke: 'transparent'
  },
  axisLabel: Object.assign({}, centeredLabelStyles, {padding: 25}),
  ticks: {
    fill: 'transparent',
    stroke: 'transparent'
  },
}

const victoryTheme = {
  area: Object.assign({
    style: {
      data: {
        fill: primaryColor
      },
      labels: centeredLabelStyles
    }
  }, baseProps),

  axis: Object.assign({}, baseProps, {
    style: {
      axis: {
        fill: 'transparent',
        stroke: colors.palette.black,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: Object.assign({}, centeredLabelStyles, {padding: 25}),
      grid: {
        fill: 'transparent',
        stroke: 'transparent',
        pointerEvents: 'none'
      },
      ticks: {
        fill: 'transparent',
        size: 5,
        stroke: colors.palette.black
      },
      tickLabels: baseLabelStyles
    }
  }),

  bar: Object.assign({
    style: {
      data: {
        fill: primaryColor,
        padding: 8,
        strokeWidth: 0,
        width: 20
      },
      labels: baseLabelStyles,
    }
  }, baseProps),

  candlestick: Object.assign({
    style: {
      data: {
        stroke: primaryColor,
        strokeWidth: 1
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: '#ffffff',
      negative: primaryColor
    },
  }, baseProps),

  chart: baseProps,

  errorbar: Object.assign({
    style: {
      data: {
        fill: 'transparent',
        stroke: primaryColor,
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    },
  }, baseProps),

  group: Object.assign({
    colorScale: colorScale,
  }, baseProps),

  line: Object.assign({
    style: {
      data: {
        fill: 'transparent',
        stroke: primaryColor,
        strokeWidth: 2
      },
      labels: centeredLabelStyles}
  }, baseProps),

  pie: {
    style: {
      data: {
        padding: 10,
        stroke: 'transparent',
        strokeWidth: 1
      },
      labels: Object.assign({padding: 20}, baseLabelStyles)
    },
    colorScale: colorScale,
    width: 400,
    height: 400,
    padding: 50
  },

  scatter: Object.assign({
    style: {
      data: {
        fill: primaryColor,
        stroke: 'transparent',
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    },
  }, baseProps),

  stack: Object.assign({colorScale: colorScale}, baseProps),

  tooltip: {
    style: Object.assign({padding: 5, pointerEvents: 'none'}, centeredLabelStyles),
    flyoutStyle: {
      stroke: primaryColor,
      strokeWidth: 1,
      fill: 'red',
      pointerEvents: 'none'
    },
    cornerRadius: 0,
    pointerLength: 0
  },

  voronoi: {
    style: Object.assign({
      data: {
        fill: 'transparent',
        stroke: 'transparent',
        strokeWidth: 0
      },
      labels: Object.assign({padding: 5, pointerEvents: 'none'}, centeredLabelStyles),
      flyout: {
        stroke: primaryColor,
        strokeWidth: 1,
        fill: '#f0f0f0',
        pointerEvents: 'none'
      }
    }, baseProps),
  },

  legend: {
    colorScale: colorScale,
    gutter: 10,
    orientation: 'vertical',
    style: {
      data: {
        type: 'circle'
      },
      labels: baseLabelStyles
    },
    symbolSpacer: 8
  }
}
export default victoryTheme
