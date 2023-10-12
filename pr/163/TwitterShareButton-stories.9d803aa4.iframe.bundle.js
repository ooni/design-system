"use strict";(self.webpackChunkooni_components=self.webpackChunkooni_components||[]).push([[635],{"./stories/TwitterShareButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TwitterShareButton_stories});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),Link=__webpack_require__("./src/components/Link.tsx"),Button=__webpack_require__("./src/components/Button.tsx"),Text=__webpack_require__("./src/components/Text.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TwitterShareButton=props=>{const{message="",url="",hashtags="",via="",inReplyTo="",...rest}=props,twitterLinkGenerated=(0,react.useMemo)((()=>{let href="https://twitter.com/intent/tweet?";return href+=`text=${encodeURIComponent(message)}`,""!==url&&(href+=`&url=${encodeURIComponent(url)}`),""!==hashtags&&(href+=`&hashtags=${encodeURIComponent(hashtags)}`),""!==via&&(href+=`&hashtags=${encodeURIComponent(via)}`),""!==inReplyTo&&(href+=`&in-reply-to=${encodeURIComponent(inReplyTo)}`),href}),[message,url,hashtags,via,inReplyTo]);return(0,jsx_runtime.jsx)(Link.Z,{href:twitterLinkGenerated,children:(0,jsx_runtime.jsxs)(Button.Z,{...rest,variant:"twitterShare",display:"flex",alignItems:"center",children:[(0,jsx_runtime.jsx)(index_esm.fWC,{size:14}),(0,jsx_runtime.jsx)(Text.Z,{as:"span",pl:2,children:"Tweet"})]})})};TwitterShareButton.displayName="TwitterShareButton";const components_TwitterShareButton=TwitterShareButton;try{TwitterShareButton.displayName="TwitterShareButton",TwitterShareButton.__docgenInfo={description:"",displayName:"TwitterShareButton",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!1,type:{name:"string"}},hashtags:{defaultValue:null,description:"",name:"hashtags",required:!1,type:{name:"string"}},via:{defaultValue:null,description:"",name:"via",required:!1,type:{name:"string"}},inReplyTo:{defaultValue:null,description:"",name:"inReplyTo",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},inverted:{defaultValue:null,description:"",name:"inverted",required:!1,type:{name:"boolean"}},hollow:{defaultValue:null,description:"",name:"hollow",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},spinner:{defaultValue:null,description:"",name:"spinner",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"Variant"}},color:{defaultValue:null,description:"The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.\nBy default the raw value of the prop is returned.\n\nColor palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.\nArray values are converted into responsive values.\n\n[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"dark"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"Size"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},tx:{defaultValue:null,description:"",name:"tx",required:!1,type:{name:"string"}},__css:{defaultValue:null,description:"",name:"__css",required:!1,type:{name:"SxStyleProp"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}},sx:{defaultValue:null,description:"The sx prop lets you style elements inline, using values from your theme.",name:"sx",required:!1,type:{name:"SxStyleProp"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TwitterShareButton.tsx#TwitterShareButton"]={docgenInfo:TwitterShareButton.__docgenInfo,name:"TwitterShareButton",path:"src/components/TwitterShareButton.tsx#TwitterShareButton"})}catch(__react_docgen_typescript_loader_error){}const TwitterShareButton_stories={title:"Components/TwitterShareButton",component:components_TwitterShareButton,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},Default={args:{url:"https://twitter.com/OpenObservatory/status/1537764247442268161",message:"Run OONI Probe to test for censorship!",hashtags:"test,test2"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    url: 'https://twitter.com/OpenObservatory/status/1537764247442268161',\n    message: 'Run OONI Probe to test for censorship!',\n    hashtags: 'test,test2'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js");const Box=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.zo)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__.ZP,displayName:"Box",componentId:"sc-15yt1e6-0"})({boxSizing:"border-box",margin:0,minWidth:0},(props=>(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.ZP)(props.__css)(props.theme)),(({theme,variant,tx="variants"})=>{let styles={};return Array.isArray(variant)?variant.forEach((v=>{styles={...styles,...(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.ZP)((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.U2)(theme,`${tx}.${v}`,(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.U2)(theme,v)))(theme)}})):styles={...styles,...(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.ZP)((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.U2)(theme,`${tx}.${variant}`,(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.U2)(theme,variant)))(theme)},styles}),(props=>(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.ZP)(props?.sx)(props?.theme)),(props=>props.css),(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.cp,styled_system__WEBPACK_IMPORTED_MODULE_0__.$_,styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ)),__WEBPACK_DEFAULT_EXPORT__=Box},"./src/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box.tsx"),_Flex__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Flex.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({hollow=!1,inverted=!1,disabled=!1,variant="primary",size="medium",color="default",type="button",loading=!1,spinner,children,startIcon,endIcon,...rest},ref)=>{let btnSize=size,componentVariant=["base",variant];return componentVariant.push(size),disabled&&componentVariant.push("disabled"),color&&componentVariant.push(`${color}${hollow?"-hollow":""}`),hollow&&componentVariant.push("hollow"),inverted&&componentVariant.push("inverted"),"link"!==variant&&"iconButton"!==variant||(btnSize=null,componentVariant=[variant]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{ref,type,as:"button",tx:"buttons",variant:componentVariant,...rest,__css:{appearance:"none",display:"inline-block",textAlign:"center",lineHeight:"inherit",textDecoration:"none",fontWeight:"body",fontSize:"inherit",border:0,background:"none",padding:0,"&:enabled":{cursor:"pointer"}},disabled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_2__.Z,{sx:loading?{visibility:"hidden",height:"0"}:void 0,alignItems:"center",justifyContent:"center",children:[startIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_2__.Z,{className:"icon",as:"span",mr:1,children:startIcon}),children,endIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_2__.Z,{className:"icon",as:"span",ml:1,children:endIcon})]}),loading&&spinner]})})),__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"Variant"}},tx:{defaultValue:null,description:"",name:"tx",required:!1,type:{name:"string"}},__css:{defaultValue:null,description:"",name:"__css",required:!1,type:{name:"SxStyleProp"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"Size"}},color:{defaultValue:{value:"default"},description:"The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.\nBy default the raw value of the prop is returned.\n\nColor palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.\nArray values are converted into responsive values.\n\n[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"dark"'}]}},sx:{defaultValue:null,description:"The sx prop lets you style elements inline, using values from your theme.",name:"sx",required:!1,type:{name:"SxStyleProp"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},inverted:{defaultValue:{value:"false"},description:"",name:"inverted",required:!1,type:{name:"boolean"}},hollow:{defaultValue:{value:"false"},description:"",name:"hollow",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},spinner:{defaultValue:null,description:"",name:"spinner",required:!1,type:{name:"ReactNode"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Box.tsx");const Flex=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.zo)(_Box__WEBPACK_IMPORTED_MODULE_0__.Z).withConfig({displayName:"Flex",componentId:"sc-jcxmdp-0"})({display:"flex"}),__WEBPACK_DEFAULT_EXPORT__=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Link=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{ref,as:"a",variant:"link",...props}))),__WEBPACK_DEFAULT_EXPORT__=Link;try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ResponsiveValue<string, Required<Theme<TLengthStyledSystem>>>"}},tx:{defaultValue:null,description:"",name:"tx",required:!1,type:{name:"string"}},__css:{defaultValue:null,description:"",name:"__css",required:!1,type:{name:"SxStyleProp"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}},sx:{defaultValue:null,description:"The sx prop lets you style elements inline, using values from your theme.",name:"sx",required:!1,type:{name:"SxStyleProp"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{ref,tx:"text",...props}))),__WEBPACK_DEFAULT_EXPORT__=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ResponsiveValue<string, Required<Theme<TLengthStyledSystem>>>"}},tx:{defaultValue:null,description:"",name:"tx",required:!1,type:{name:"string"}},__css:{defaultValue:null,description:"",name:"__css",required:!1,type:{name:"SxStyleProp"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}},sx:{defaultValue:null,description:"The sx prop lets you style elements inline, using values from your theme.",name:"sx",required:!1,type:{name:"SxStyleProp"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);