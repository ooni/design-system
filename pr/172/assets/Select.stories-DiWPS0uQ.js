import{j as n}from"./jsx-runtime-2xDJh5tt.js";import{a as s}from"./chunk-WFFRPTHA-B5TewAtn.js";import{B as l}from"./Box-DhaIz1PF.js";import{S as a}from"./Select-DPH_f1n6.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-CR6IM2JB.js";import"./index-VdX8XDJn.js";import"./Text-BhBHMpTl.js";const C={title:"Components/Select",component:a},e=()=>{const i=[{id:1,name:"Australia"},{id:2,name:"Albania"},{id:3,name:"Algeria"}];return n(l,{children:n(a,{id:"country",name:"country",label:"Country",defaultValue:"Australia",onChange:s("selected"),mt:3,children:Object.entries(i).map(([m,c])=>n("option",{children:c.name},m))})})};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const countries = [{
    id: 1,
    name: 'Australia'
  }, {
    id: 2,
    name: 'Albania'
  }, {
    id: 3,
    name: 'Algeria'
  }];
  return <Box>
      <Select id="country" name="country" label="Country" defaultValue="Australia" onChange={action('selected')} mt={3}>
        {Object.entries(countries).map(([key, country]) => <option key={key}>{country.name}</option>)}
      </Select>
    </Box>;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,C as default};
