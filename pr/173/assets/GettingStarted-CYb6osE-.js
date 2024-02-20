import{j as n,a as t,F as l}from"./jsx-runtime-2xDJh5tt.js";import{useMDXComponents as i}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";function r(o){const e=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},i(),o.components);return t(l,{children:[n(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,n(e.h2,{id:"developers",children:"Developers"}),`
`,t(e.p,{children:["The OONI design system is based on selection of carefully tuned ",n(e.a,{href:"https://facebook.github.io/react/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React.js"})," components."]}),`
`,n(e.p,{children:`If you want to start using the components inside of your design all you need to
do is run:`}),`
`,n(e.pre,{children:n(e.code,{children:`npm install --save ooni-components
`})}),`
`,t(e.p,{children:[`To use the ooni theme you will need to wrap the root of your application with
the `,n(e.code,{children:"<Provider />"})," by applying the OONI theme like this:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`import {
  Provider,
  Heading,
  theme
} from 'ooni-components'

const App = props => (
  <Provider theme={theme}>
    <Heading>Hello world!</Heading>
  </Provider>
)
`})}),`
`,n(e.h2,{id:"technological-stack",children:"Technological stack"}),`
`,n(e.p,{children:"These are some of the awesome libraries we use:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.a,{href:"https://www.styled-components.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Styled Components"})}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.a,{href:"http://jxnblk.com/styled-system/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Styled System"})}),`
`]}),`
`]})]})}function h(o={}){const{wrapper:e}=Object.assign({},i(),o.components);return e?n(e,Object.assign({},o,{children:n(r,o)})):r(o)}export{h as default};
