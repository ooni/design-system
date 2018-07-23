import React from 'react'

import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTooltip,
  VictoryLabel
} from 'victory'

import OONILogoWordmarkHoriz from '../svgs/logos/OONI-HorizontalColor.svg'
import victoryTheme from '../theme/victoryTheme'
import { axisYStyle } from '../theme/victoryTheme'
import colors from '../theme/colors'

import ChartTitle from './ChartTitle'

export default class BarChart extends React.Component {

  render () {
    const {
      data,
      title,
      subtitle
    } = this.props

    return (
      <VictoryChart
        style={{parent: { overflow: 'visible', paddingBottom: '60px' }}}
        theme={victoryTheme}
      >

        <ChartTitle text={title} />
        <ChartTitle subtitle text={subtitle} />

        <VictoryAxis
          tickLabelComponent={
            <VictoryLabel verticalAnchor='start' textAnchor='end' angle='-45' />
          } />
        <VictoryAxis dependentAxis orientation='right' style={axisYStyle}/>
        <VictoryBar
          labels={(d) => d.y}
          data={data}
          events={[{
            target: 'data',
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
