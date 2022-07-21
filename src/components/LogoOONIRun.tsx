import React, { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as RunHorizontalMonochromeInverted } from '../../svgs/logos/Run-HorizontalMonochromeInverted.svg'

const StyledSubBrand = styled.div`
  padding: 20px;
`

const LogoOONIRun: FC = () => {
  return (
    <StyledSubBrand>
      <RunHorizontalMonochromeInverted
        style={{ height: '70px', display: 'inline' }}
      />
    </StyledSubBrand>
  )
}

export default LogoOONIRun
