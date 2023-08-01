import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
} from 'styled-system'
import React from 'react'
import { styled } from 'styled-components'
import css, { get } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { BoxProps } from 'types'

const sx = (props: any) => css(props.sx)(props.theme)
const base = (props: any) => css(props.__css)(props.theme)
const variant = ({ theme, variant, tx = 'variants' }: any) =>
  css(get(theme, `${tx}.${variant}`, get(theme, variant)))(theme)

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
