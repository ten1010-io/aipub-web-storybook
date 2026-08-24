import{j as e,r as u}from"./iframe-D1zcNpR6.js";import{s as Q,a as c}from"./alert-BChbSDkJ.js";import{B as m}from"./button-CqDsn7PQ.js";import{D as X,a as Z,b as $,c as ee,d as te,e as re}from"./dialog-DRp0rKUJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-kJD_jmLN.js";import"./index-CI7ycuOB.js";import"./index-BWesfKH1.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-Ds-udM4m.js";import"./index-D0pAv75W.js";function y({isOpen:r,onClose:a,onOk:n,title:g,description:p,okText:i="OK",okType:f="default",isLoading:O=!1}){return e.jsx(X,{open:r,onOpenChange:a,children:e.jsxs(Z,{children:[e.jsxs($,{children:[e.jsx(ee,{className:"leading-normal break-all whitespace-pre-line",children:g}),p&&e.jsx(te,{className:"text-muted-foreground max-h-96 overflow-y-auto break-all whitespace-pre-wrap lg:border-l lg:pl-3",children:p})]}),e.jsx(re,{children:e.jsx(m,{variant:f,loading:O,onClick:n,children:i})})]})})}y.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOk:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},okText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'OK'",computed:!1}},okType:{required:!1,tsType:{name:"union",raw:"'default' | 'secondary' | 'destructive' | 'outline'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ne=u.createContext(null);function J({children:r}){const[a,n]=u.useState([]),g=u.useCallback(t=>new Promise(s=>{const l=crypto.randomUUID();n(d=>[...d,{id:l,isOpen:!0,isLoading:!1,resolve:s,options:t}])}),[]),p=u.useCallback(t=>{n(s=>{if(!s.find(o=>o.id===t))return s;const d=s.map(o=>o.id===t?{...o,isOpen:!1,isLoading:!1}:o);return setTimeout(()=>{n(o=>{const k=o.find(h=>h.id===t);return k&&k.resolve(!0),o.filter(h=>h.id!==t)})},200),d})},[]),i=u.useCallback((t,s)=>{n(l=>l.map(d=>d.id===t?{...d,isLoading:s}:d))},[]),f=u.useCallback(t=>{const s=a.find(l=>l.id===t);!s||s.isLoading||p(t)},[a,p]),O=u.useCallback(async t=>{const s=a.find(o=>o.id===t);if(!s||s.isLoading)return;let l=!1;const d=()=>{l||(l=!0,p(t))};if(!s.options.onOk){d();return}try{const o={close:d,loading:()=>{l||i(t,!0)}},k=s.options.onOk(o);if(k instanceof Promise)try{await k}catch(h){console.error("Error in onOk callback:",h),l||i(t,!1)}}catch(o){console.error("Error in onOk callback:",o)}},[a,p,i]);return u.useEffect(()=>{Q(g)},[g]),e.jsxs(ne.Provider,{value:{alert:g},children:[r,a.map(t=>e.jsx(y,{...t.options,isOpen:t.isOpen,isLoading:t.isLoading,onClose:()=>f(t.id),onOk:()=>O(t.id)},t.id))]})}J.__docgenInfo={description:"",methods:[],displayName:"AlertProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const we={title:"Overlays/Alert",component:y,parameters:{layout:"centered"}},A={args:{isOpen:!1,onClose:()=>{},onOk:()=>{},title:"Are you sure?",description:"This action cannot be undone."},render:r=>{const[a,n]=u.useState(r.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:()=>n(!0),children:"Open Alert"}),e.jsx(y,{isOpen:a,onClose:()=>n(!1),onOk:()=>n(!1),title:"Are you sure?",description:"This action cannot be undone."})]})}};function x(r){const[a,n]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:()=>n(!0),children:"Open Alert"}),e.jsx(y,{...r,isOpen:a,onClose:()=>n(!1),onOk:()=>n(!1)})]})}const v={args:{isOpen:!0,onClose:()=>{},onOk:()=>{},title:"Save as draft?",description:"This alert uses a secondary confirm button.",okType:"secondary"},render:r=>e.jsx(x,{...r})},C={args:{isOpen:!0,onClose:()=>{},onOk:()=>{},title:"Delete this resource?",description:"This action cannot be undone.",okText:"Delete",okType:"destructive"},render:r=>e.jsx(x,{...r})},T={args:{isOpen:!0,onClose:()=>{},onOk:()=>{},title:"Continue?",description:"This alert uses an outline confirm button.",okType:"outline"},render:r=>e.jsx(x,{...r})},j={args:{isOpen:!0,onClose:()=>{},onOk:()=>{},title:"Processing your request",description:"The confirm button stays disabled while loading.",isLoading:!0},render:r=>e.jsx(x,{...r})},b={args:{isOpen:!0,onClose:()=>{},onOk:()=>{},title:"Your changes have been saved.",okText:"Got it"},render:r=>e.jsx(x,{...r})};function se(){const r=async()=>{await c({title:"단일 Alert",description:"이것은 단일 alert입니다."}),console.log("단일 alert 닫힘")},a=async()=>{c({title:"첫 번째 Alert",description:"이것은 첫 번째 alert입니다. OK를 누르면 두 번째 alert가 나타납니다.",onOk:async({close:i})=>{i(),await c({title:"두 번째 Alert",description:"이것은 두 번째 alert입니다."}),console.log("두 번째 alert 닫힘")}})},n=async()=>{c({title:"Alert 1",description:"첫 번째 alert입니다."}),setTimeout(()=>{c({title:"Alert 2",description:"두 번째 alert입니다."})},100),setTimeout(()=>{c({title:"Alert 3",description:"세 번째 alert입니다."})},200)},g=async()=>{c({title:"비동기 작업 Alert",description:"OK를 누르면 비동기 작업이 실행됩니다.",onOk:async({close:i,loading:f})=>{f(),await new Promise(O=>setTimeout(O,2e3)),i(),await c({title:"작업 완료",description:"비동기 작업이 완료되었습니다."})}})},p=async()=>{c({title:"Level 1",description:"첫 번째 레벨입니다.",onOk:async({close:i})=>{i(),await c({title:"Level 2",description:"두 번째 레벨입니다.",onOk:async({close:f})=>{f(),await c({title:"Level 3",description:"세 번째 레벨입니다."})}})}})};return e.jsxs("div",{className:"flex flex-col gap-4 p-8",children:[e.jsx("h2",{className:"mb-4 text-2xl font-bold",children:"Alert 중첩 테스트"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(m,{onClick:r,children:"단일 Alert"}),e.jsx(m,{onClick:a,children:"연속 Alert (첫 번째 닫으면 두 번째 표시)"}),e.jsx(m,{onClick:n,children:"빠른 연속 Alert (3개 동시)"}),e.jsx(m,{onClick:g,children:"비동기 작업 Alert"}),e.jsx(m,{onClick:p,children:"중첩 Alert 체인 (3단계)"})]})]})}const w={render:()=>e.jsx(J,{children:e.jsx(se,{})})};var D,S,R;A.parameters={...A.parameters,docs:{...(D=A.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    onOk: () => {},
    title: 'Are you sure?',
    description: 'This action cannot be undone.'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Alert</Button>
        <Alert isOpen={isOpen} onClose={() => setIsOpen(false)} onOk={() => setIsOpen(false)} title="Are you sure?" description="This action cannot be undone." />
      </>;
  }
}`,...(R=(S=A.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var L,N,P;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onOk: () => {},
    title: 'Save as draft?',
    description: 'This alert uses a secondary confirm button.',
    okType: 'secondary'
  },
  render: args => <AlertPreview {...args} />
}`,...(P=(N=v.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var q,I,E;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onOk: () => {},
    title: 'Delete this resource?',
    description: 'This action cannot be undone.',
    okText: 'Delete',
    okType: 'destructive'
  },
  render: args => <AlertPreview {...args} />
}`,...(E=(I=C.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var _,B,F;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onOk: () => {},
    title: 'Continue?',
    description: 'This alert uses an outline confirm button.',
    okType: 'outline'
  },
  render: args => <AlertPreview {...args} />
}`,...(F=(B=T.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var K,V,G;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onOk: () => {},
    title: 'Processing your request',
    description: 'The confirm button stays disabled while loading.',
    isLoading: true
  },
  render: args => <AlertPreview {...args} />
}`,...(G=(V=j.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var U,W,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onOk: () => {},
    title: 'Your changes have been saved.',
    okText: 'Got it'
  },
  render: args => <AlertPreview {...args} />
}`,...(Y=(W=b.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var H,M,z;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <AlertProvider>
      <AlertStackDemo />
    </AlertProvider>
}`,...(z=(M=w.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const De=["Default","SecondaryOk","DestructiveOk","OutlineOk","Loading","WithoutDescription","StackTest"];export{A as Default,C as DestructiveOk,j as Loading,T as OutlineOk,v as SecondaryOk,w as StackTest,b as WithoutDescription,De as __namedExportsOrder,we as default};
