# Getting Started

## Developers

The OONI design system is based on selection of carefully tuned
[React.js](https://facebook.github.io/react/) components.

If you want to start using the components inside of your design all you need to
do is run:

```
npm install --save ooni-components
```

To use the ooni theme you will need to wrap the root of your application with
the `<Provider />` by applying the OONI theme like this:

```jsx
import {
  Provider,
  Heading,
  theme
} from 'ooni-components'

const App = props => (
  <Provider theme={theme}>
    <Heading>Hello world!</Heading>
  </Provider>
)
```

## Designers

If you are designer you can download the OONI Design Kit for [Sketch here](XXX)
or for [Adobe Experience Design here](XXX).

## Technological stack

> Standing on the shoulders of giants

These are some of the awesome libraries we use:

* [Rebass](http://jxnblk.com/rebass)

* [Styled Components](https://www.styled-components.com/)

* [Styled System](http://jxnblk.com/styled-system/)

* [Grid Styled](http://jxnblk.com/grid-styled/)

* [Victory](http://formidable.com/open-source/victory/)
