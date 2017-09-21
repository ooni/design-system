import React from 'react'

import styled from 'styled-components'

import RunHorizontalMonochrome from '../../svgs/logos/Run-HorizontalMonochrome.svg'
import RunHorizontalMonochromeInverted from '../../svgs/logos/Run-HorizontalMonochromeInverted.svg'

const StyledSubBrand = styled.div`
  padding: 20px;
`

const StyledBrandName = styled.span`
  font-size: 36px;
  margin-left: 20px;
  display: inline;
`

export const LogoOONIRun = (props) => {
  return (
    <StyledSubBrand>
      <RunHorizontalMonochromeInverted style={{height: '70px', display: 'inline' }} />
    </StyledSubBrand>
  )
}
