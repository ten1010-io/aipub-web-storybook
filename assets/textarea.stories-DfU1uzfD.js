import{j as p}from"./iframe-D1zcNpR6.js";import{i as U,t as X}from"./translation-DqiiAkod.js";import{s as Z,c as $}from"./common-DbPgu20d.js";import{u as ee,T as re}from"./use-translation-DtBcGNwE.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./button-CqDsn7PQ.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./createLucideIcon-CNO9LAd6.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";function B({className:m,placeholder:a,isEnterDisabled:F,onKeyDown:u,...G}){const{t:H}=ee();function Q(h){if(F&&h.key==="Enter"){h.preventDefault();return}u==null||u(h)}const e=a&&U(a)?Z(a):void 0,g=p.jsx("textarea",{"data-slot":"textarea",className:$("aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:disabled:opacity-40",m),onKeyDown:Q,placeholder:e?H(e.i18nKey,e.values):a,...G});return e?p.jsx(re,{i18nKey:e.i18nKey,values:e.values,children:g}):g}B.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{isEnterDisabled:{required:!1,tsType:{name:"boolean"},description:""}}};const _e={title:"Atoms/Textarea",component:B,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},"aria-invalid":{control:"boolean"},rows:{control:{type:"number",min:1,max:20}}},decorators:[m=>p.jsx("div",{className:"w-[400px]",children:p.jsx(m,{})})]},s={args:{placeholder:"Type your message here..."}},t={args:{value:`This is a textarea with some content.
It can span multiple lines.`,placeholder:"Type your message here..."}},o={args:{rows:8,placeholder:"This textarea has 8 rows..."}},n={args:{disabled:!0,placeholder:"This textarea is disabled",value:"You cannot edit this content"}},i={args:{"aria-invalid":!0,placeholder:"This textarea has an error",value:"Invalid content"}},c={args:{maxLength:100,placeholder:"Limited to 100 characters..."}},l={args:{readOnly:!0,value:"읽기 전용 — 편집할 수 없지만 텍스트는 선택/복사할 수 있습니다."}},d={args:{isEnterDisabled:!0,placeholder:"Enter 키가 비활성화되어 줄바꿈되지 않습니다"}},r={args:{placeholder:X("workspace.form.basic.project.placeholder")}};var x,b,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here...'
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,f,T;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 'This is a textarea with some content.\\nIt can span multiple lines.',
    placeholder: 'Type your message here...'
  }
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var w,E,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    rows: 8,
    placeholder: 'This textarea has 8 rows...'
  }
}`,...(I=(E=o.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var S,j,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'This textarea is disabled',
    value: 'You cannot edit this content'
  }
}`,...(D=(j=n.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var k,L,O;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    placeholder: 'This textarea has an error',
    value: 'Invalid content'
  }
}`,...(O=(L=i.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var R,W,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    maxLength: 100,
    placeholder: 'Limited to 100 characters...'
  }
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var z,N,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: '읽기 전용 — 편집할 수 없지만 텍스트는 선택/복사할 수 있습니다.'
  }
}`,...(P=(N=l.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var C,M,V;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isEnterDisabled: true,
    placeholder: 'Enter 키가 비활성화되어 줄바꿈되지 않습니다'
  }
}`,...(V=(M=d.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var Y,q,A,J,K;r.parameters={...r.parameters,docs:{...(Y=r.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    placeholder: tz('workspace.form.basic.project.placeholder')
  }
}`,...(A=(q=r.parameters)==null?void 0:q.docs)==null?void 0:A.source},description:{story:"placeholder 에 i18n 토큰(`tz(...)`)을 넘기면 alternate 렌더 경로를 타서\n`<T>` 로 감싸고 `t()` 로 번역된 문자열을 placeholder 로 표시한다.",...(K=(J=r.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};const ze=["Default","WithValue","CustomRows","Disabled","Invalid","WithMaxLength","ReadOnly","EnterDisabled","I18nPlaceholder"];export{o as CustomRows,s as Default,n as Disabled,d as EnterDisabled,r as I18nPlaceholder,i as Invalid,l as ReadOnly,c as WithMaxLength,t as WithValue,ze as __namedExportsOrder,_e as default};
