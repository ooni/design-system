import { ResponsiveStyleValue, SystemStyleObject } from '@styled-system/css'
import * as React from 'react'
import * as StyledComponents from 'styled-components'
import * as StyledSystem from 'styled-system'

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export interface BaseProps extends React.RefAttributes<any> {
  as?: React.ElementType | undefined
  css?: StyledComponents.CSSProp | string | undefined
}

/**
 * The `SxStyleProp` extension `SystemStyleObject`
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 */
export type SxStyleProp =
  | SystemStyleObject
  | Record<
      string,
      | SystemStyleObject
      | ResponsiveStyleValue<number | string>
      | Record<
          string,
          SystemStyleObject | ResponsiveStyleValue<number | string>
        >
    >

export interface SxProps {
  /**
   * The sx prop lets you style elements inline, using values from your theme.
   */
  sx?: SxStyleProp | undefined
}

export interface BoxKnownProps
  extends BaseProps,
    StyledSystem.SpaceProps,
    StyledSystem.LayoutProps,
    StyledSystem.TypographyProps,
    StyledSystem.ColorProps,
    StyledSystem.FlexboxProps,
    SxProps {
  variant?: StyledSystem.ResponsiveValue<string> | undefined
  tx?: string | undefined
  __css?: SxStyleProp | undefined
}

export interface BoxProps
  extends BoxKnownProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {}

interface ButtonKnownProps
  extends BoxKnownProps,
    StyledSystem.FontWeightProps,
    StyledSystem.ButtonStyleProps {}

export interface ButtonProps
  extends ButtonKnownProps,
    Omit<React.HTMLProps<HTMLButtonElement>, keyof ButtonKnownProps> {}

type FlexKnownProps = BoxKnownProps
export interface FlexProps
  extends FlexKnownProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof FlexKnownProps> {}

export interface ImageProps
  extends BoxKnownProps,
    Omit<React.HTMLProps<HTMLImageElement>, keyof BoxKnownProps> {}

type LinkKnownProps = BoxKnownProps
export interface LinkProps
  extends LinkKnownProps,
    Omit<React.HTMLProps<HTMLAnchorElement>, keyof LinkKnownProps> {}

type TextKnownProps = BoxKnownProps
export interface TextProps
  extends TextKnownProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof TextKnownProps> {}

export interface HeadingProps
  extends TextKnownProps,
    Omit<React.HTMLProps<HTMLHeadingElement>, keyof TextKnownProps> {}

interface LabelKnownProps
  extends BoxKnownProps,
    StyledSystem.FlexWrapProps,
    StyledSystem.FlexDirectionProps,
    StyledSystem.AlignItemsProps,
    StyledSystem.JustifyContentProps {}

export interface LabelProps
  extends LabelKnownProps,
    Omit<React.LabelHTMLAttributes<HTMLLabelElement>, keyof LabelKnownProps> {}

export interface InputProps
  extends BoxKnownProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BoxKnownProps> {}

export interface SelectProps
  extends BoxKnownProps,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, keyof BoxKnownProps> {}

export interface TextareaProps
  extends BoxKnownProps,
    Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      keyof BoxKnownProps
    > {}

export interface RadioProps
  extends BoxKnownProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BoxKnownProps> {}

export interface CheckboxProps
  extends BoxKnownProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BoxKnownProps> {}
