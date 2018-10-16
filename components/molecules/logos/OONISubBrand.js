import React from 'react'

import styled from 'styled-components'

import RunHorizontalMonochromeInverted from '../../svgs/logos/Run-HorizontalMonochromeInverted.svg'

const StyledSubBrand = styled.div`
  padding: 20px;
`

export const LogoOONIRun = () => {
  return (
    <StyledSubBrand>
      <RunHorizontalMonochromeInverted style={{height: '70px', display: 'inline' }} />
    </StyledSubBrand>
  )
}
