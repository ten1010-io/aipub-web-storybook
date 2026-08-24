import{r as t,j as e}from"./iframe-D1zcNpR6.js";import{B as a}from"./button-CqDsn7PQ.js";import{I as u}from"./input-BdLAhE0_.js";import{L as h}from"./label-63cY3faU.js";import{c as F}from"./dialog-DRp0rKUJ.js";import{M as o,a as r}from"./use-translation-DtBcGNwE.js";import{I as E}from"./info-12y5e0Rs.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";import"./translation-DqiiAkod.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-kJD_jmLN.js";import"./index-CI7ycuOB.js";import"./index-BWesfKH1.js";import"./index-CPSRtOzn.js";import"./index-CZXvctcB.js";import"./index-Ds-udM4m.js";import"./index-D0pAv75W.js";import"./tooltip-TWwZSAUh.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";const fe={title:"Overlays/Modal",component:o,parameters:{layout:"centered"}},l={args:{open:!1,onClose:()=>{},children:null},render:()=>{const[s,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{open:s,onClose:()=>n(!1),children:e.jsx(r,{title:"Edit Profile",description:"Make changes to your profile here. Click save when you're done.",onOk:()=>n(!1),onClose:()=>n(!1),children:e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(h,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(u,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(h,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(u,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]})})})]})}},i={args:{open:!1,onClose:()=>{},children:null},render:()=>{const[s,n]=t.useState(!1);return e.jsx(o,{trigger:e.jsx(a,{children:"Open via Trigger"}),open:s,onClose:()=>n(L=>!L),children:e.jsx(r,{title:"Opened from trigger",description:"This modal was opened through the trigger prop (DialogTrigger).",onOk:()=>n(!1),onClose:()=>n(!1),children:e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"The trigger prop renders a DialogTrigger around your element."})})})})}},d={args:{open:!1,onClose:()=>{},children:null},render:()=>{const[s,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal (Loading)"}),e.jsx(o,{open:s,onClose:()=>n(!1),children:e.jsx(r,{title:"Saving changes",description:"The confirm button shows a spinner and is disabled while loading.",loading:!0,onOk:()=>n(!1),onClose:()=>n(!1),children:e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Please wait while your changes are being saved."})})})})]})}},p={args:{open:!1,onClose:()=>{},children:null},render:()=>{const[s,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal (Custom Text)"}),e.jsx(o,{open:s,onClose:()=>n(!1),children:e.jsx(r,{title:"Delete workspace",description:"This action is permanent.",okText:"Yes, delete it",cancelText:"Keep workspace",onOk:()=>n(!1),onClose:()=>n(!1),children:e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Custom okText and cancelText override the defaults."})})})})]})}},c={args:{open:!1,onClose:()=>{},children:null},render:()=>{const[s,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal (Node Title)"}),e.jsx(o,{open:s,onClose:()=>n(!1),children:e.jsx(r,{title:e.jsxs(F,{className:"flex items-center gap-2",children:[e.jsx(E,{className:"size-5"}),"Custom node title"]}),description:"The title is a raw ReactNode, so it is rendered as-is.",onOk:()=>n(!1),onClose:()=>n(!1),children:e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"The title branch renders your node without an extra wrapper."})})})})]})}},m={args:{open:!1,onClose:()=>{},children:null},render:()=>{const[s,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal (No Cancel)"}),e.jsx(o,{open:s,onClose:()=>n(!1),children:e.jsx(r,{title:"Information",description:"This modal only has an OK button.",onOk:()=>n(!1),children:e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"This modal doesn't have a cancel button."})})})})]})}};var g,f,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalContent title="Edit Profile" description="Make changes to your profile here. Click save when you're done." onOk={() => setOpen(false)} onClose={() => setOpen(false)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" defaultValue="@peduarte" className="col-span-3" />
              </div>
            </div>
          </ModalContent>
        </Modal>
      </>;
  }
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,O,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      // Modal 의 onClose 는 사실상 onOpenChange 로, trigger 클릭/닫기 요청마다
      // 호출된다. 토글로 두어 trigger 로 열고 오버레이/Esc 로 닫을 수 있게 한다.
      <Modal trigger={<Button>Open via Trigger</Button>} open={open} onClose={() => setOpen(prev => !prev)}>
        <ModalContent title="Opened from trigger" description="This modal was opened through the trigger prop (DialogTrigger)." onOk={() => setOpen(false)} onClose={() => setOpen(false)}>
          <div className="py-4">
            <p>The trigger prop renders a DialogTrigger around your element.</p>
          </div>
        </ModalContent>
      </Modal>
    );
  }
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var j,M,v;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal (Loading)</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalContent title="Saving changes" description="The confirm button shows a spinner and is disabled while loading." loading onOk={() => setOpen(false)} onClose={() => setOpen(false)}>
            <div className="py-4">
              <p>Please wait while your changes are being saved.</p>
            </div>
          </ModalContent>
        </Modal>
      </>;
  }
}`,...(v=(M=d.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var N,k,y;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal (Custom Text)</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalContent title="Delete workspace" description="This action is permanent." okText="Yes, delete it" cancelText="Keep workspace" onOk={() => setOpen(false)} onClose={() => setOpen(false)}>
            <div className="py-4">
              <p>Custom okText and cancelText override the defaults.</p>
            </div>
          </ModalContent>
        </Modal>
      </>;
  }
}`,...(y=(k=p.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var w,S,b;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal (Node Title)</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalContent
        // 문자열/T 가 아닌 raw ReactNode 를 title 로 넘기면 ModalContent 가
        // DialogTitle 로 감싸지 않고 그대로 렌더한다. a11y 를 위해 노드 안에
        // DialogTitle 을 직접 포함한다.
        title={<DialogTitle className="flex items-center gap-2">
                <InfoIcon className="size-5" />
                Custom node title
              </DialogTitle>} description="The title is a raw ReactNode, so it is rendered as-is." onOk={() => setOpen(false)} onClose={() => setOpen(false)}>
            <div className="py-4">
              <p>
                The title branch renders your node without an extra wrapper.
              </p>
            </div>
          </ModalContent>
        </Modal>
      </>;
  }
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var B,D,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: null
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal (No Cancel)</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalContent title="Information" description="This modal only has an OK button." onOk={() => setOpen(false)}>
            <div className="py-4">
              <p>This modal doesn't have a cancel button.</p>
            </div>
          </ModalContent>
        </Modal>
      </>;
  }
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Ce=["Default","WithTrigger","Loading","CustomButtonText","ReactNodeTitle","WithoutCancel"];export{p as CustomButtonText,l as Default,d as Loading,c as ReactNodeTitle,i as WithTrigger,m as WithoutCancel,Ce as __namedExportsOrder,fe as default};
