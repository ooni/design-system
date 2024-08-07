import React from 'react'
import OONIRunLogo from '../../svgs/logos/Run-HorizontalMonochromeInverted.svg'

const LogoOONIRun = ({ ...props }) => (
  // biome-ignore lint/a11y/useAltText: <explanation>
  <img
    src={OONIRunLogo}
    style={{ display: 'inline', maxWidth: '100%', height: 'auto' }}
    {...props}
  />
)

export default LogoOONIRun
