import React from 'react'

import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTooltip,
  VictoryLabel,
  VictoryContainer
} from 'victory'

import OONILogoWordmarkHoriz from '../svgs/ooni-logo-wordmark-horiz.svg'
import victoryTheme from '../theme/victoryTheme'
import { axisYStyle, baseLabelStyles } from '../theme/victoryTheme'
import colors from '../theme/colors'

class ChartTitle extends React.Component {
  render() {
    const { text } = this.props
    let style = Object.assign({}, baseLabelStyles, {fontWeight: 'bold'})
    style.fontSize = '24px'
    return (
      <VictoryLabel x={25} y={24} style={style} text={text} />
    )
  }
}

class ChartSubtitle extends React.Component {
  render() {
    const { text } = this.props
    let style = Object.assign({}, baseLabelStyles)
    style.fontSize = '18px'
    return (
      <VictoryLabel x={25} y={50} style={style} text={text} />
    )
  }
}

export default class extends React.Component {

  render () {
    const { data, title, subtitle } = this.props

    return (
      <VictoryChart
        style={{parent: { overflow: 'visible', paddingBottom: '60px' }}}
        theme={victoryTheme}
      >

        <ChartTitle text={title} />
        <ChartSubtitle text={subtitle} />

        <VictoryAxis
          tickLabelComponent={
            <VictoryLabel verticalAnchor='start' textAnchor='end' angle='-45' />
          } />
        <VictoryAxis dependentAxis orientation='right' style={axisYStyle}/>
        <VictoryBar
            labels={(d) => d.y}
            data={data}
            events={[{
              target: "data",
              eventHandlers: {
                onMouseOver: () => null,
                onMouseOut: () => null
              }
            }]}
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                pointerLength={0}
                height={15}
                width={20}
                active={true}
                flyoutStyle={{stroke: colors.palette.base, fill: colors.palette.white}}
              />
            }/>
          <g transform="translate(330, 240)">
            <OONILogoWordmarkHoriz width={100} />
          </g>
      </VictoryChart>
    )
  }
}
