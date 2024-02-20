import{a as m,j as o}from"./jsx-runtime-2xDJh5tt.js";import{a as p}from"./chunk-WFFRPTHA-B5TewAtn.js";import{r as n}from"./index-CBqU2yxZ.js";import{B as d}from"./Box-DhaIz1PF.js";import{B as u}from"./Button-BI_lgJDg.js";import{C}from"./Container-Dy2bq8B4.js";import{F as f}from"./Flex-BpqBfZhV.js";import{M as l}from"./Modal-yeluAMEU.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./styled-components.browser.esm-CR6IM2JB.js";import"./index-D-6ZqYjS.js";import"./iconBase-BoWdmG68.js";import"./IconButton-sMgWn8Ej.js";const _={title:"Components/Modal",component:l,tags:["autodocs"]},t=()=>{const[i,e]=n.useState(!1),c=n.useCallback(()=>{e(!1),p("Clicked")},[]);return m(C,{children:[o(f,{alignItems:"center",children:o(u,{onClick:()=>e(!0),children:" Show Modal "})}),o(l,{show:i,onHideClick:c,children:o(d,{p:3,children:"Modal Content"})})]})};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(false);
  const onClose = useCallback(() => {
    setShow(false);
    action('Clicked');
  }, []);
  return <Container>
      <Flex alignItems="center">
        <Button onClick={() => setShow(true)}> Show Modal </Button>
      </Flex>
      <Modal show={show} onHideClick={onClose}>
        <Box p={3}>Modal Content</Box>
      </Modal>
    </Container>;
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,_ as default};
