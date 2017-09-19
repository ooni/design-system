import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { space, fontSize, fontSizeMult, color, width } from '../util'

import { Heading, Container } from 'rebass'
import { Flex, Box } from 'grid-styled'

const StyledHero = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}

  width: 100%;
  background-color: ${props => props.theme.colors.base};
  color: ${props => props.theme.colors.white};
  text-align: center;
`

export const HeroLead = styled.p`
`

export const Hero = (props) => {
  return (
    <StyledHero {...props}>
      <Container>
        {React.Children.map(props.children, child => React.cloneElement(child), props)}
      </Container>
    </StyledHero>
  )
}

Hero.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.number
}

Hero.defaultProps = {
  fontSize: 3
}

export default Hero
