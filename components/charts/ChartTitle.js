import React from 'react'

import PropTypes from 'prop-types'

import { VictoryLabel } from 'victory'

import { baseLabelStyles } from '../theme/victoryTheme'

class ChartTitle extends React.Component {
  render() {
    const {
      text,
      subtitle
    } = this.props
    let style = Object.assign({}, baseLabelStyles, {fontWeight: 'bold'})
    let yValue = 24
    style.fontSize = '24px'
    if (subtitle === true) {
      style.fontSize = '18px'
      style.fontWeight = 'regular'
      yValue = 50
    }
    return (
      <VictoryLabel x={25} y={yValue} style={style} text={text} />
    )
  }
}

ChartTitle.propTypes = {
  text: PropTypes.string,
  subtitle: PropTypes.bool,
}

export default ChartTitle
