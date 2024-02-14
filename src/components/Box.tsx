// @ts-nocheck
import css, { get } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { styled } from 'styled-components'
import {
  color,
  compose,
  flexbox,
  layout,
  space,
  typography,
} from 'styled-system'
import { BoxProps } from 'types'

const sx = (props: any) => css(props?.sx)(props?.theme)
const base = (props: any) => css(props?.__css)(props?.theme)
const variant = ({ theme, variant, tx = 'variants' }: any) => {
  let styles = {}
  if (Array.isArray(variant)) {
    variant.forEach((v) => {
      styles = {
        ...styles,
        ...css(get(theme, `${tx}.${v}`, get(theme, v)))(theme),
      }
    })
  } else {
    styles = {
      ...styles,
      ...css(get(theme, `${tx}.${variant}`, get(theme, variant)))(theme),
    }
  }
  return styles
}

const Box = styled('div').withConfig({ shouldForwardProp })<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
  (props) => props.css,
  compose(space, layout, typography, color, flexbox),
)

export default Box
