"use strict";(self.webpackChunkooni_components=self.webpackChunkooni_components||[]).push([[32],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./stories/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_src_components_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Box.tsx"),_src_components_Flex__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Flex.tsx"),_src_components_Modal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Modal.tsx"),_src_components_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Container.tsx"),_src_components_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal",component:_src_components_Modal__WEBPACK_IMPORTED_MODULE_4__.Z,tags:["autodocs"]},Default=()=>{const[show,setShow]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),onClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setShow(!1),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Clicked")}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_src_components_Container__WEBPACK_IMPORTED_MODULE_5__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_src_components_Flex__WEBPACK_IMPORTED_MODULE_3__.Z,{alignItems:"center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_src_components_Button__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:()=>setShow(!0),children:" Show Modal "})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_src_components_Modal__WEBPACK_IMPORTED_MODULE_4__.Z,{show,onHideClick:onClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.Z,{p:3,children:"Modal Content"})})]})};Default.displayName="Default",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => {\n  const [show, setShow] = useState(false);\n  const onClose = useCallback(() => {\n    setShow(false);\n    action('Clicked');\n  }, []);\n  return <Container>\n      <Flex alignItems=\"center\">\n        <Button onClick={() => setShow(true)}> Show Modal </Button>\n      </Flex>\n      <Modal show={show} onHideClick={onClose}>\n        <Box p={3}>Modal Content</Box>\n      </Modal>\n    </Container>;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js");const Box=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.zo)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__.ZP,displayName:"Box",componentId:"sc-15yt1e6-0"})({boxSizing:"border-box",margin:0,minWidth:0},(props=>(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.ZP)(props.__css)(props.theme)),(({theme,variant,tx="variants"})=>{let styles={};return Array.isArray(variant)?variant.forEach((v=>{styles={...styles,...(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.ZP)((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.U2)(theme,`${tx}.${v}`,(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.U2)(theme,v)))(theme)}})):styles={...styles,...(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.ZP)((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.U2)(theme,`${tx}.${variant}`,(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.U2)(theme,variant)))(theme)},styles}),(props=>(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.ZP)(props?.sx)(props?.theme)),(props=>props.css),(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.cp,styled_system__WEBPACK_IMPORTED_MODULE_0__.$_,styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ)),__WEBPACK_DEFAULT_EXPORT__=Box},"./src/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box.tsx"),_Flex__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Flex.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({hollow=!1,inverted=!1,disabled=!1,variant="primary",size="medium",color="default",type="button",loading=!1,spinner,children,startIcon,endIcon,...rest},ref)=>{let btnSize=size,componentVariant=["base",variant];return componentVariant.push(size),disabled&&componentVariant.push("disabled"),color&&componentVariant.push(`${color}${hollow?"-hollow":""}`),hollow&&componentVariant.push("hollow"),inverted&&componentVariant.push("inverted"),"link"!==variant&&"iconButton"!==variant||(btnSize=null,componentVariant=[variant]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{ref,type,as:"button",tx:"buttons",variant:componentVariant,...rest,__css:{appearance:"none",display:"inline-block",textAlign:"center",textDecoration:"none",fontWeight:"body",fontSize:"inherit",border:0,background:"none",padding:0,"&:enabled":{cursor:"pointer"}},disabled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_2__.Z,{sx:loading?{visibility:"hidden",height:"0"}:void 0,alignItems:"center",justifyContent:"center",children:[startIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_2__.Z,{className:"icon",as:"span",mr:1,children:startIcon}),children,endIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_2__.Z,{className:"icon",as:"span",ml:1,children:endIcon})]}),loading&&spinner]})})),__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"Variant"}},tx:{defaultValue:null,description:"",name:"tx",required:!1,type:{name:"string"}},__css:{defaultValue:null,description:"",name:"__css",required:!1,type:{name:"SxStyleProp"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"Size"}},color:{defaultValue:{value:"default"},description:"The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.\nBy default the raw value of the prop is returned.\n\nColor palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.\nArray values are converted into responsive values.\n\n[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"dark"'}]}},sx:{defaultValue:null,description:"The sx prop lets you style elements inline, using values from your theme.",name:"sx",required:!1,type:{name:"SxStyleProp"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},inverted:{defaultValue:{value:"false"},description:"",name:"inverted",required:!1,type:{name:"boolean"}},hollow:{defaultValue:{value:"false"},description:"",name:"hollow",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},spinner:{defaultValue:null,description:"",name:"spinner",required:!1,type:{name:"ReactNode"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{...props,variant:"container"});Container.displayName="Container";const __WEBPACK_DEFAULT_EXPORT__=Container;try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ResponsiveValue<string, Required<Theme<TLengthStyledSystem>>>"}},tx:{defaultValue:null,description:"",name:"tx",required:!1,type:{name:"string"}},__css:{defaultValue:null,description:"",name:"__css",required:!1,type:{name:"SxStyleProp"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}},sx:{defaultValue:null,description:"The sx prop lets you style elements inline, using values from your theme.",name:"sx",required:!1,type:{name:"SxStyleProp"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Box.tsx");const Flex=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.zo)(_Box__WEBPACK_IMPORTED_MODULE_0__.Z).withConfig({displayName:"Flex",componentId:"sc-jcxmdp-0"})({display:"flex"}),__WEBPACK_DEFAULT_EXPORT__=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=({icon,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.Z,{variant:"iconButton",...rest,children:icon});IconButton.displayName="IconButton";const __WEBPACK_DEFAULT_EXPORT__=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},inverted:{defaultValue:null,description:"",name:"inverted",required:!1,type:{name:"boolean"}},hollow:{defaultValue:null,description:"",name:"hollow",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},spinner:{defaultValue:null,description:"",name:"spinner",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"Variant"}},color:{defaultValue:null,description:"The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.\nBy default the raw value of the prop is returned.\n\nColor palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.\nArray values are converted into responsive values.\n\n[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"dark"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"Size"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},tx:{defaultValue:null,description:"",name:"tx",required:!1,type:{name:"string"}},__css:{defaultValue:null,description:"",name:"__css",required:!1,type:{name:"SxStyleProp"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}},sx:{defaultValue:null,description:"The sx prop lets you style elements inline, using values from your theme.",name:"sx",required:!1,type:{name:"SxStyleProp"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_icons_md__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-icons/md/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box.tsx"),_IconButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/IconButton.tsx"),_Flex__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Flex.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalCloseButton=({icon,onClick})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_3__.Z,{justifyContent:"end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_2__.Z,{sx:{position:"absolute",top:0,height:"28px",padding:0,marginRight:2,marginLeft:2,marginTop:1},icon,onClick,type:"button"})});ModalCloseButton.displayName="ModalCloseButton";const Modal=({show=!1,onHideClick,children,sx,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{sx:{position:"relative",display:show?"inherit":"none"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{...rest,sx:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:"100vw",maxHeight:"100vh",overflow:"auto",zIndex:1050,bg:"white",borderRadius:"4px",...sx},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ModalCloseButton,{onClick:onHideClick,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.FU5,{size:20})}),children]}),show&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:onHideClick,sx:{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:1040,bg:"black",transition:"opacity 5s linear",opacity:.5}})]});Modal.displayName="Modal";const __WEBPACK_DEFAULT_EXPORT__=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean"}},onHideClick:{defaultValue:null,description:"",name:"onHideClick",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ResponsiveValue<string, Required<Theme<TLengthStyledSystem>>>"}},tx:{defaultValue:null,description:"",name:"tx",required:!1,type:{name:"string"}},__css:{defaultValue:null,description:"",name:"__css",required:!1,type:{name:"SxStyleProp"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}},sx:{defaultValue:null,description:"The sx prop lets you style elements inline, using values from your theme.",name:"sx",required:!1,type:{name:"SxStyleProp"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,A0:()=>IconBase});var react=__webpack_require__("./node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}}}]);