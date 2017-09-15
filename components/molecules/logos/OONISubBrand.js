import React from 'react'

import styled from 'styled-components'

import OONIRunHorizontalWhite from '../../svgs/logos/OONIRun-HorizontalWhite.svg'

const StyledSubBrand = styled.div`
  padding: 20px;
`

const StyledBrandName = styled.span`
  font-size: 36px;
  margin-left: 20px;
  display: inline;
`

export const OONISubBrandRun = (props) => {
  return (
    <StyledSubBrand>
      <OONIRunHorizontalWhite style={{height: '70px', display: 'inline' }} />
    </StyledSubBrand>
  )
}
