import React from 'react'
import OONIRunLogo from '../../svgs/logos/Run-HorizontalMonochromeInverted.svg'
import Image from './Image'

const LogoOONIRun = ({ ...props }) => (
  <Image src={OONIRunLogo} css={{ display: 'inline' }} {...props} />
)

export default LogoOONIRun
