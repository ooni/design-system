import{j as r,a as d,F as s}from"./jsx-runtime-2xDJh5tt.js";import{t as l}from"./index-BKVyID-M.js";import{B as a}from"./Box-DhaIz1PF.js";import{F as c}from"./Flex-BpqBfZhV.js";import"./Container-Dy2bq8B4.js";import"./Heading-77GdP6ZW.js";import"./IconButton-DDhH-O7u.js";import"./Input-DDurd7C8.js";import"./RadioButton-DaPhWPZw.js";import"./RadioGroup-DeI5hiHT.js";import"./FacebookShareButton-BtM7WCdS.js";import"./TwitterShareButton-BSlIhdpE.js";import{T as h}from"./Text-BhBHMpTl.js";import"./InputWithIconButton-Ci_XMO1k.js";import"./LogoOONIRun-Cy8cgqS4.js";import"./HeroLead-DFi5OCEi.js";import"./Modal-BTzA0B7u.js";import"./Button-B0jNirWl.js";import"./Textarea-DHEbSlXO.js";import"./Link--npN_Dr9.js";import"./Select-DPH_f1n6.js";import"./Checkbox-POzrWX1G.js";import"./MultiSelectCreatable-CO2YEzxU.js";import"./MultiSelect-BSfdBqAT.js";import{useMDXComponents as p}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./colors-CIdWY9_P.js";import"./styled-components.browser.esm-CR6IM2JB.js";import"./index-VdX8XDJn.js";import"./ErrorMessage-6K3cCZRc.js";import"./index-B-rNFlrj.js";import"./iconBase-BoWdmG68.js";import"./index-D-6ZqYjS.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D7dHzidL.js";import"./useStateManager-7e1e8489.esm-DeCQwdSw.js";import"./index-BtM5VmRH.js";const i=({color:t,name:n})=>r("div",{children:d(a,{px:1,py:3,children:[r(a,{px:3,py:3,bg:t}),r(h,{fontWeight:"bold",children:n}),r(h,{children:t})]})});try{i.displayName="ColorPalette",i.__docgenInfo={description:"",displayName:"ColorPalette",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}function m(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",strong:"strong",h3:"h3"},p(),t.components);return d(s,{children:[r(n.h1,{id:"colors",children:"Colors"}),`
`,r(n.h2,{id:"brand-colors",children:"Brand colors"}),`
`,d(c,{flexWrap:"wrap",children:[r(a,{width:1/2,children:r(i,{color:l.colors.blue5,name:"OONI Blue (blue5)"})}),r(a,{width:1/2,children:r(i,{color:l.colors.blue3,name:"Light Blue (blue3)"})})]}),`
`,r(n.h2,{id:"palette",children:"Palette"}),`
`,d(n.p,{children:["Our color palette is adapted from ",r(n.a,{href:"https://yeun.github.io/open-color/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Open Color"}),", an open-source color scheme. All hues apart from ",r(n.code,{children:"blue"})," are taken as-is from Open Color. The blue shades are adapted to include OONI's primary (",r(n.code,{children:"#0588CB"}),") and secondary (",r(n.code,{children:"#5DB8FE"}),") color."]}),`
`,r(n.p,{children:"Keep in mind when you are combining colors from different hues (for example for a data visualisation) be sure to pick ones that have some brightness variation (luminance)."}),`
`,d(n.p,{children:[`As a concrete example if you wanted to create a categorical data visualisation,
you would want to pick `,r(n.code,{children:"indigo5"}),", ",r(n.code,{children:"yellow6"}),", ",r(n.code,{children:"cyan7"}),` (they have different number
so different brightnesses too!) and should `,r(n.strong,{children:"not"})," pick ",r(n.code,{children:"indigo5"}),", ",r(n.code,{children:"yellow5"}),`
and `,r(n.code,{children:"cyan5"}),` (which all have the same brightness value and can appear very
similar to color blind people). Keep it accessible.`]}),`
`,r(n.h3,{id:"gray",children:"Gray"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="gray";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})}),`
`,r(n.h3,{id:"blue",children:"Blue"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="blue";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})}),`
`,r(n.h3,{id:"indigo",children:"Indigo"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="indigo";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})}),`
`,r(n.h3,{id:"violet",children:"Violet"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="violet";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})}),`
`,r(n.h3,{id:"fuchsia",children:"Fuchsia"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="fuchsia";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})}),`
`,r(n.h3,{id:"pink",children:"Pink"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="pink";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})}),`
`,r(n.h3,{id:"red",children:"Red"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="red";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})}),`
`,r(n.h3,{id:"orange",children:"Orange"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="orange";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})}),`
`,r(n.h3,{id:"yellow",children:"Yellow"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="yellow";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})}),`
`,r(n.h3,{id:"lime",children:"Lime"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="lime";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})}),`
`,r(n.h3,{id:"green",children:"Green"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="green";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})}),`
`,r(n.h3,{id:"teal",children:"Teal"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="teal";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})}),`
`,r(n.h3,{id:"cyan",children:"Cyan"}),`
`,r(c,{flexWrap:"wrap",children:Array.from(Array(10).keys()).map(e=>{const o="cyan";return r(a,{width:1/2,children:r(i,{color:l.colors[`${o}${e}`],name:`${o} ${e}`})})})})]})}function S(t={}){const{wrapper:n}=Object.assign({},p(),t.components);return n?r(n,Object.assign({},t,{children:r(m,t)})):m(t)}export{S as default};
