import { BoxKnownProps } from 'types'

// const dsProps = [...systemProps, 'sx', 'variant']
// const PRE = new RegExp(`^(${dsProps.join('|')})$`)

const MRE = /^m[trblxy]?$/

const getProps =
  (test: (a: string) => boolean) => (props: { [key: string]: any }) => {
    const next: { [key: string]: any } = {}
    Object.keys(props).forEach((key) => {
      if (test(key || '')) next[key] = props[key]
    })
    return next as BoxKnownProps
  }

export const getMarginProps = getProps((k) => MRE.test(k))
export const omitMarginProps = getProps((k) => !MRE.test(k))
