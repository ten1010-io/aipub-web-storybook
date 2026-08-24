import{j as e}from"./iframe-D1zcNpR6.js";import{T as g}from"./use-translation-DtBcGNwE.js";import"./preload-helper-Dp1pzeXC.js";import"./button-CqDsn7PQ.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";function s({name:t,statusCode:p,reason:n,message:m}){return e.jsxs("div",{children:[t&&e.jsxs("p",{children:[e.jsx("span",{className:"text-primary",children:"Name:"})," ",t]}),p&&n&&e.jsxs("p",{children:[e.jsx("span",{className:"text-primary",children:"Reason:"})," [",p,"] ",n]}),m&&e.jsxs("p",{children:[e.jsx("span",{className:"text-primary",children:"Message:"})," ",m]})]})}function l({results:t}){const p=t.filter(r=>r.statusCode===200).length,n=t.filter(r=>r.statusCode!==200),m=n.length;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{children:["Success ",p," ",e.jsx(g,{i18nKey:"common.count"})," / Fail"," ",m," ",e.jsx(g,{i18nKey:"common.count"})]}),e.jsx("div",{className:"space-y-3",children:n.map(r=>e.jsx(s,{...r},r.name))})]})}s.__docgenInfo={description:"",methods:[],displayName:"K8sResultDescription",props:{name:{required:!1,tsType:{name:"string"},description:""},statusCode:{required:!1,tsType:{name:"number"},description:""},reason:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"K8sResultDescriptionList",props:{results:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name?: string
  statusCode?: number
  reason?: string
  message?: string
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"statusCode",value:{name:"number",required:!1}},{key:"reason",value:{name:"string",required:!1}},{key:"message",value:{name:"string",required:!1}}]}}],raw:"K8sResultDescriptionProps[]"},description:""}}};const xe={title:"Molecules/K8sResultDescription",component:s,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>e.jsx(s,{name:"pod-1",statusCode:404,reason:"NotFound",message:"The specified pod was not found."})},o={render:()=>e.jsx(s,{name:"pod-1"})},a={render:()=>e.jsx(s,{message:"The specified pod was not found."})},i={render:()=>e.jsx(s,{name:"pod-1",statusCode:500})},d={render:()=>e.jsx(l,{results:[{name:"pod-a",statusCode:200,reason:"OK",message:"Deleted"},{name:"pod-b",statusCode:403,reason:"Forbidden",message:"Insufficient permissions"},{name:"pod-c",statusCode:200,reason:"OK",message:"Deleted"}]})},u={render:()=>e.jsx(l,{results:[{name:"pod-a",statusCode:200,reason:"OK",message:"Deleted"},{name:"pod-b",statusCode:500,reason:"InternalError",message:"Unexpected error"},{name:"pod-c",statusCode:200,reason:"OK",message:"Deleted"}]})};var f,y,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <K8sResultDescription name="pod-1" statusCode={404} reason="NotFound" message="The specified pod was not found." />
}`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,j,D,K,h;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <K8sResultDescription name="pod-1" />
}`,...(D=(j=o.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:"name 만 전달 — Reason/Message 줄은 렌더되지 않는다",...(h=(K=o.parameters)==null?void 0:K.docs)==null?void 0:h.description}}};var R,S,N,O,b;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <K8sResultDescription message="The specified pod was not found." />
}`,...(N=(S=a.parameters)==null?void 0:S.docs)==null?void 0:N.source},description:{story:"message 만 전달 — Name/Reason 줄은 렌더되지 않는다",...(b=(O=a.parameters)==null?void 0:O.docs)==null?void 0:b.description}}};var T,q,L,v,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <K8sResultDescription name="pod-1" statusCode={500} />
}`,...(L=(q=i.parameters)==null?void 0:q.docs)==null?void 0:L.source},description:{story:"statusCode 는 있으나 reason 이 없으면 Reason 줄은 렌더되지 않는다 (statusCode && reason 조건)",...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var F,I,_,M,k;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <K8sResultDescriptionList results={[{
    name: 'pod-a',
    statusCode: 200,
    reason: 'OK',
    message: 'Deleted'
  }, {
    name: 'pod-b',
    statusCode: 403,
    reason: 'Forbidden',
    message: 'Insufficient permissions'
  }, {
    name: 'pod-c',
    statusCode: 200,
    reason: 'OK',
    message: 'Deleted'
  }]} />
}`,...(_=(I=d.parameters)==null?void 0:I.docs)==null?void 0:_.source},description:{story:"성공+실패 혼합 입력 — 요약줄은 Success/Fail 개수를, 항목 목록은 실패 항목만 렌더한다",...(k=(M=d.parameters)==null?void 0:M.docs)==null?void 0:k.description}}};var E,U,W;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <K8sResultDescriptionList results={[{
    name: 'pod-a',
    statusCode: 200,
    reason: 'OK',
    message: 'Deleted'
  }, {
    name: 'pod-b',
    statusCode: 500,
    reason: 'InternalError',
    message: 'Unexpected error'
  }, {
    name: 'pod-c',
    statusCode: 200,
    reason: 'OK',
    message: 'Deleted'
  }]} />
}`,...(W=(U=u.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const Ce=["Single","NameOnly","MessageOnly","StatusCodeWithoutReason","List","DeleteListSummary"];export{u as DeleteListSummary,d as List,a as MessageOnly,o as NameOnly,c as Single,i as StatusCodeWithoutReason,Ce as __namedExportsOrder,xe as default};
