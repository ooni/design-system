import React from 'react'

import {
  VictoryPie,
} from 'victory'

import { baseLabelStyles } from '../theme/victoryTheme'

import OONILogoWordmarkHoriz from '../svgs/ooni-logo-wordmark-horiz.svg'
import colors from '../theme/colors'

import ChartTitle from './ChartTitle'

const colorScale = [
  colors.palette.blue5,
  colors.palette.pink6,
  colors.palette.orange4,
  colors.palette.lime3,
  colors.palette.violet8
]

const width = 400
const height = 400

const padding = {
  top: 80,
  bottom: 80,
  right: 80,
  left: 80,
}

const radiansToDegrees = (radians) => {
  return radians * (180 / Math.PI)
}

const radius = Math.min(
  width - padding.left - padding.right,
  height - padding.top - padding.bottom
) / 2

const offsetWidth = ((radius + padding.left) + (width - radius - padding.right)) / 2
const offsetHeight = ((radius + padding.top) + (height - radius - padding.bottom)) / 2
const origin = { x: offsetWidth, y: offsetHeight }


const centroidOffset = (x1, y1, d) => {
/*
We take the line going from the center of the pie and the coordinates x1 and y1.

We then solve the second degree equantion system by x and y in order to
determine which point is on that line and at distance d from (x1, y1).

Based on the result we then figure out which solution is the correct one we
need, based on whether or not it falls inside of the pie chart or not.
*/
  const m = (y1 - origin.y) / (x1 - origin.x)
  const q = -1 * m * origin.x + origin.y
  const a = 1 + m * m
  const b = (2 * m * q) - (2 * x1) - (2 * y1 * m)
  const c = Math.pow(q - y1, 2) + x1 * x1 - d * d

  let solution = {
    x1: (-1 * b + Math.sqrt(b*b - 4*a*c))/(2*a),
    x2: (-1 * b - Math.sqrt(b*b - 4*a*c))/(2*a),
  }
  solution.y1 = m * solution.x1 + q
  solution.y2 = m * solution.x2 + q

  if (radius*radius > (Math.pow((solution.x1 - origin.x), 2) + Math.pow(solution.y1 - origin.y, 2))) {
    solution.x = solution.x2
    solution.y = solution.y2
    solution.direction = 'left'
  } else {
    solution.x = solution.x1
    solution.y = solution.y1
    solution.direction = 'right'
  }
  return solution
}

const PieLabelComponent = (props) => {
  const {
    x, y,
    slice
  } = props

  const startAngle = radiansToDegrees(slice.startAngle)
  const endAngle = radiansToDegrees(slice.endAngle)

  let dotX = x,
    dotY = y,
    textX = x,
    textY = y,
    textDY = 0

  // const centerAngle = startAngle + (endAngle - startAngle) / 2

  let sol = centroidOffset(x, y, 60)
  textX = sol.x - 30
  textY = sol.y
  let lineX = sol.x - 100, lineY = sol.y
  if (sol.direction === 'right') {
    lineX = sol.x + 100
  }

  let path = `M ${x} ${y} L ${sol.x} ${sol.y} L ${lineX} ${lineY}`
  let textStyle = Object.assign({}, baseLabelStyles, {fontSize: '14px'})
  // Get the percentage by converting the angles from radiants to a percentage
  let percentage = Math.round((endAngle - startAngle)/360 * 100)
  return <g>
    <path
      stroke='black'
      fill='none'
      d={path}/>
    <text
      style={textStyle}
      textAnchor={props.textAnchor}
      x={textX}
      y={textY}
      dy={textDY}>{props.text}</text>
    <text
      style={textStyle}
      textAnchor={props.textAnchor}
      x={textX}
      y={textY}
      dy={textDY + 20}>{percentage}%</text>
    <circle cx={dotX} cy={dotY} r='2'/>
  </g>
}

class PieChart extends React.Component {

  render () {
    const {
      data,
      title,
      subtitle
    } = this.props

    return (
      <svg width={400} height={400}>
        <ChartTitle text={title} />
        <ChartTitle subtitle text={subtitle} />

        <g transform="translate(50, 0)">
          <VictoryPie
            padding={padding}
            width={width}
            height={width}
            innerRadius={50}
            colorScale={colorScale}
            labelRadius={80}
            labelComponent={<PieLabelComponent />}
            data={data}
          />
        </g>

        <g transform="translate(25, 250)">
          <OONILogoWordmarkHoriz width={100} />
        </g>
      </svg>
    )
  }
}

export default PieChart
