import{j as d}from"./jsx-runtime-2xDJh5tt.js";import{r as l,R as m}from"./index-CBqU2yxZ.js";import{F as c}from"./Flex-BpqBfZhV.js";const t=({children:a,name:f,value:s,onChange:r,direction:i="column",...u})=>{const n=o=>l.Children.map(o,e=>m.isValidElement(e)?l.cloneElement(e,{...e.props,checked:e.props.value===s,onChange:p=>r&&r(p.target.value),children:n(e.props.children)}):null);return d(c,{flexDirection:i,...u,children:n(a)})};try{t.displayName="RadioGroup",t.__docgenInfo={description:"",displayName:"RadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"column"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ResponsiveValue<string, Required<Theme<TLengthStyledSystem>>>"}},tx:{defaultValue:null,description:"",name:"tx",required:!1,type:{name:"string"}},__css:{defaultValue:null,description:"",name:"__css",required:!1,type:{name:"SxStyleProp"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}},sx:{defaultValue:null,description:"The sx prop lets you style elements inline, using values from your theme.",name:"sx",required:!1,type:{name:"SxStyleProp"}}}}}catch{}export{t as R};
