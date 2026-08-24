import{r as u,j as o}from"./iframe-D1zcNpR6.js";import{C as $}from"./confirm-DJKcmVmi.js";import{B as l}from"./button-CqDsn7PQ.js";import"./preload-helper-Dp1pzeXC.js";import"./dialog-DRp0rKUJ.js";import"./index-DW48STyt.js";import"./index-1Mm1CGHb.js";import"./index--CsRPePo.js";import"./index-kJD_jmLN.js";import"./index-CI7ycuOB.js";import"./index-BWesfKH1.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-Ds-udM4m.js";import"./index-D0pAv75W.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./index-Dp3B9jqt.js";import"./createLucideIcon-CNO9LAd6.js";let P=null;function oe(s){P=s}async function i(s){if(!P)throw new Error("Confirm function is not initialized. Make sure ConfirmProvider is mounted.");return P(s)}const ne=u.createContext(null);function ee({children:s}){const[m,d]=u.useState([]),C=u.useCallback(e=>new Promise(n=>{const c=crypto.randomUUID();d(t=>[...t,{id:c,isOpen:!0,isLoading:!1,resolve:n,options:e}])}),[]),f=u.useCallback(e=>{d(n=>{if(!n.find(r=>r.id===e))return n;const t=n.map(r=>r.id===e?{...r,isOpen:!1,isLoading:!1}:r);return setTimeout(()=>{d(r=>{const g=r.find(k=>k.id===e);return g&&g.resolve(!0),r.filter(k=>k.id!==e)})},200),t})},[]),a=u.useCallback((e,n)=>{d(c=>c.map(t=>t.id===e?{...t,isLoading:n}:t))},[]),p=u.useCallback(e=>{var c,t;const n=m.find(r=>r.id===e);!n||n.isLoading||((t=(c=n.options).onCancel)==null||t.call(c),f(e))},[f,m]),D=u.useCallback(async e=>{const n=m.find(r=>r.id===e);if(!n||n.isLoading)return;let c=!1;const t=()=>{c||(c=!0,f(e))};if(!n.options.onOk){t();return}try{const r={close:t,loading:()=>{c||a(e,!0)}},g=n.options.onOk(r);if(g instanceof Promise)try{await g}catch(k){console.error("Error in onOk callback:",k),c||a(e,!1)}}catch(r){console.error("Error in onOk callback:",r)}},[m,f,a]);return u.useEffect(()=>{oe(C)},[C]),o.jsxs(ne.Provider,{value:{confirm:C},children:[s,m.map(e=>o.jsx($,{...e.options,isOpen:e.isOpen,isLoading:e.isLoading,onClose:()=>p(e.id),onOk:()=>D(e.id)},e.id))]})}ee.__docgenInfo={description:"",methods:[],displayName:"ConfirmProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const je={title:"Overlays/Confirm",component:l,parameters:{layout:"centered"}},h={render:()=>o.jsx(l,{onClick:async()=>{await i({title:"Delete Account",description:"Are you sure you want to delete your account? This action cannot be undone."})&&console.log("User confirmed")},children:"Delete Account"})},y={render:()=>o.jsx(l,{variant:"destructive",onClick:async()=>{await i({title:"Dangerous Action",description:"This action is very dangerous and cannot be undone.",okText:"Yes, I understand",cancelText:"No, take me back"})&&console.log("User confirmed dangerous action")},children:"Dangerous Action"})},x={render:()=>o.jsx(l,{onClick:async()=>{await i({title:"Terms and Conditions",description:"By clicking confirm, you agree to our terms and conditions. This includes but is not limited to: data processing, cookie usage, and privacy policy. Please read carefully before proceeding.",okText:"I Agree",cancelText:"Cancel"})&&console.log("User agreed to terms")},children:"Accept Terms"})};function j(s){const[m,d]=u.useState(!0);return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:()=>d(!0),children:"Open Confirm"}),o.jsx($,{...s,isOpen:m,onClose:()=>d(!1),onOk:()=>d(!1)})]})}const O={render:()=>o.jsx(j,{isOpen:!0,onClose:()=>{},onOk:()=>{},title:"Publish changes?",description:"This confirm uses a secondary confirm button.",okType:"secondary"})},T={render:()=>o.jsx(j,{isOpen:!0,onClose:()=>{},onOk:()=>{},title:"Delete Account",description:"This action cannot be undone.",okText:"Delete",okType:"destructive"})},b={render:()=>o.jsx(j,{isOpen:!0,onClose:()=>{},onOk:()=>{},title:"Continue?",description:"This confirm uses an outline confirm button.",okType:"outline"})},w={render:()=>o.jsx(j,{isOpen:!0,onClose:()=>{},onOk:()=>{},title:"Processing your request",description:"Both buttons stay disabled while loading.",isLoading:!0})};function re(){const s=async()=>{const a=await i({title:"단일 Confirm",description:"이것은 단일 confirm입니다."});console.log("단일 confirm 결과:",a)},m=()=>{i({title:"첫 번째 Confirm",description:"첫 번째 확인입니다. OK를 선택하면 두 번째 confirm이 표시됩니다.",onOk:async({close:a})=>{a();const p=await i({title:"두 번째 Confirm",description:"두 번째 확인입니다."});console.log("두 번째 confirm 결과:",p)}})},d=()=>{i({title:"Confirm 1",description:"첫 번째 confirm입니다."}),setTimeout(()=>{i({title:"Confirm 2",description:"두 번째 confirm입니다."})},150),setTimeout(()=>{i({title:"Confirm 3",description:"세 번째 confirm입니다."})},300)},C=()=>{i({title:"비동기 Confirm",description:"OK를 누르면 2초 후 완료됩니다.",okText:"2초 기다리기",onOk:async({loading:a,close:p})=>{a(),await new Promise(D=>setTimeout(D,2e3)),p()}})},f=()=>{i({title:"Level 1",description:"첫 번째 레벨입니다.",onOk:async({close:a})=>{a(),await i({title:"Level 2",description:"두 번째 레벨입니다.",onOk:async({close:p})=>{p(),await i({title:"Level 3",description:"세 번째 레벨입니다."})}})}})};return o.jsxs("div",{className:"flex flex-col gap-4 p-8",children:[o.jsx("h2",{className:"mb-4 text-2xl font-bold",children:"Confirm 스택 테스트"}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx(l,{onClick:s,children:"단일 Confirm"}),o.jsx(l,{onClick:m,children:"순차 Confirm (2단계)"}),o.jsx(l,{onClick:d,children:"빠른 연속 Confirm"}),o.jsx(l,{onClick:C,children:"비동기 Confirm (로딩 사용)"}),o.jsx(l,{onClick:f,children:"중첩 Confirm 체인 (3단계)"})]})]})}const v={render:()=>o.jsx(ee,{children:o.jsx(re,{})})};var S,A,L;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Button onClick={async () => {
    const confirmed = await showConfirm({
      title: 'Delete Account',
      description: 'Are you sure you want to delete your account? This action cannot be undone.'
    });
    if (confirmed) {
      console.log('User confirmed');
    }
  }}>
      Delete Account
    </Button>
}`,...(L=(A=h.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var B,N,U;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Button variant="destructive" onClick={async () => {
    const confirmed = await showConfirm({
      title: 'Dangerous Action',
      description: 'This action is very dangerous and cannot be undone.',
      okText: 'Yes, I understand',
      cancelText: 'No, take me back'
    });
    if (confirmed) {
      console.log('User confirmed dangerous action');
    }
  }}>
      Dangerous Action
    </Button>
}`,...(U=(N=y.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var E,R,q;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Button onClick={async () => {
    const confirmed = await showConfirm({
      title: 'Terms and Conditions',
      description: 'By clicking confirm, you agree to our terms and conditions. This includes but is not limited to: data processing, cookie usage, and privacy policy. Please read carefully before proceeding.',
      okText: 'I Agree',
      cancelText: 'Cancel'
    });
    if (confirmed) {
      console.log('User agreed to terms');
    }
  }}>
      Accept Terms
    </Button>
}`,...(q=(R=x.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var W,_,F;O.parameters={...O.parameters,docs:{...(W=O.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ConfirmPreview isOpen onClose={() => {}} onOk={() => {}} title="Publish changes?" description="This confirm uses a secondary confirm button." okType="secondary" />
}`,...(F=(_=O.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var I,K,Y;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <ConfirmPreview isOpen onClose={() => {}} onOk={() => {}} title="Delete Account" description="This action cannot be undone." okText="Delete" okType="destructive" />
}`,...(Y=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var z,M,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ConfirmPreview isOpen onClose={() => {}} onOk={() => {}} title="Continue?" description="This confirm uses an outline confirm button." okType="outline" />
}`,...(G=(M=b.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var H,J,Q;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <ConfirmPreview isOpen onClose={() => {}} onOk={() => {}} title="Processing your request" description="Both buttons stay disabled while loading." isLoading />
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,X,Z;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ConfirmProvider>
      <ConfirmStackDemo />
    </ConfirmProvider>
}`,...(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const De=["Default","WithCustomButtons","WithLongDescription","ComponentSecondary","ComponentDestructive","ComponentOutline","ComponentLoading","StackTest"];export{T as ComponentDestructive,w as ComponentLoading,b as ComponentOutline,O as ComponentSecondary,h as Default,v as StackTest,y as WithCustomButtons,x as WithLongDescription,De as __namedExportsOrder,je as default};
