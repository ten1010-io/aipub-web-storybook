import{r as ee,j as re}from"./iframe-D1zcNpR6.js";import{t as ae}from"./translation-DqiiAkod.js";import{I as g}from"./input-BdLAhE0_.js";import"./preload-helper-Dp1pzeXC.js";import"./use-translation-DtBcGNwE.js";import"./button-CqDsn7PQ.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";const ze={title:"Atoms/Input",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","password","email","number","search","tel","url"]},placeholder:{control:"text"},disabled:{control:"boolean"},"aria-invalid":{control:"boolean"}}},r={args:{placeholder:"Enter text...",type:"text"}},a={args:{type:"password",placeholder:"Enter password..."}},t={args:{type:"email",placeholder:"Enter email..."}},o={args:{type:"number",placeholder:"Enter number..."}},s={args:{disabled:!0,placeholder:"Disabled input"}},n={args:{"aria-invalid":!0,placeholder:"Invalid input",value:"Invalid value"}},l={args:{value:"Hello World",placeholder:"Enter text..."}},p={args:{type:"search",placeholder:"Search..."}},c={args:{disabled:!0,"aria-invalid":!0,value:"Invalid and disabled",placeholder:"Disabled input"}},e={args:{placeholder:ae("workspace.form.basic.workspace_name.placeholder")}},d={render:()=>{const[u,m]=ee.useState("Hello");return re.jsx(g,{showTextCount:!0,maxLength:20,value:u,placeholder:"Type to see count...",onChange:h=>m(h.target.value)})}},i={render:()=>{const[u,m]=ee.useState("clearable text");return re.jsx(g,{hasClear:!0,value:u,placeholder:"Type something...",onChange:h=>m(h.target.value)})}};var v,b,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    type: 'text'
  }
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,y,I;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password...'
  }
}`,...(I=(y=a.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var E,w,C;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter email...'
  }
}`,...(C=(w=t.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var D,T,f;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: 'Enter number...'
  }
}`,...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var V,W,j;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled input'
  }
}`,...(j=(W=s.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var k,H,P;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    placeholder: 'Invalid input',
    value: 'Invalid value'
  }
}`,...(P=(H=n.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var _,z,B;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 'Hello World',
    placeholder: 'Enter text...'
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var L,N,A;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'search',
    placeholder: 'Search...'
  }
}`,...(A=(N=p.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var O,R,q;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true,
    'aria-invalid': true,
    value: 'Invalid and disabled',
    placeholder: 'Disabled input'
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var F,G,J,K,M;e.parameters={...e.parameters,docs:{...(F=e.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placeholder: tz('workspace.form.basic.workspace_name.placeholder')
  }
}`,...(J=(G=e.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"placeholder 에 i18n 토큰(`tz(...)`)을 넘기면 alternate 렌더 경로를 타서\n`<T>` 로 감싸고 `t()` 로 번역된 문자열을 placeholder 로 표시한다.",...(M=(K=e.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};var Q,U,X;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Hello');
    return <Input showTextCount maxLength={20} value={value} placeholder="Type to see count..." onChange={e => setValue(e.target.value)} />;
  }
}`,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('clearable text');
    return <Input hasClear value={value} placeholder="Type something..." onChange={e => setValue(e.target.value)} />;
  }
}`,...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const Be=["Default","Password","Email","Number","Disabled","Invalid","WithValue","Search","InvalidDisabled","I18nPlaceholder","WithTextCount","WithClearButton"];export{r as Default,s as Disabled,t as Email,e as I18nPlaceholder,n as Invalid,c as InvalidDisabled,o as Number,a as Password,p as Search,i as WithClearButton,d as WithTextCount,l as WithValue,Be as __namedExportsOrder,ze as default};
