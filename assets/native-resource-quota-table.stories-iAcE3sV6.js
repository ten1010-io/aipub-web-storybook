import{j as e}from"./iframe-D1zcNpR6.js";import{f as L}from"./native-quota-DuJmM1F_.js";import{R as S}from"./resource-unavailable-badge-Dpic9BLF.js";import{T as U}from"./use-translation-DtBcGNwE.js";import{M as G}from"./mini-progress-bar-bIut60_z.js";import"./preload-helper-Dp1pzeXC.js";import"./resource-BIps32rQ.js";import"./string-RVkVVQ4x.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./badge-DKZ-o_cJ.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./button-CqDsn7PQ.js";import"./createLucideIcon-CNO9LAd6.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";const I={amber:{fg:"#FEF3C7",border:"#D97706"},blue:{fg:"#E1F5FF",border:"#0EA5E9"}};function j({rows:v,tone:R="amber"}){const{fg:B,border:C}=I[R];return e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-muted-foreground border-b text-left font-medium",children:[e.jsx("th",{className:"w-10 py-2 pr-2 font-medium",children:"No"}),e.jsx("th",{className:"py-2 pr-2 font-medium",children:"Resource name"}),e.jsx("th",{className:"w-[240px] py-2 font-medium",children:"Used / Limit"})]})}),e.jsx("tbody",{children:v.map((r,w)=>{const{usedStr:E,limitStr:F,unit:T}=L(r.resourceName,r.used,r.limit,r.limitRaw),q=r.limit>0?r.used/r.limit*100:r.used>0?101:0;return e.jsxs("tr",{className:"border-b",children:[e.jsx("td",{className:"text-muted-foreground py-2.5 pr-2",children:w+1}),e.jsx("td",{className:"text-foreground py-2.5 pr-2 font-normal break-all",children:r.resourceName}),e.jsx("td",{className:"py-2.5",children:e.jsxs("div",{className:"flex items-center gap-2 whitespace-nowrap",children:[e.jsx(G,{className:"h-[14px] w-[60px] shrink-0",shape:"square",size:"lg",progress:q,backgroundColor:"var(--quota-bar-track)",foregroundColor:B,borderColor:C,showOverLimit:!0,overLimitForegroundColor:"#FECACA",overLimitBorderColor:"#DC2626"}),e.jsxs("div",{className:"text-foreground flex items-center",children:[e.jsx("span",{className:"font-semibold",children:E})," / ",e.jsxs("span",{className:"text-muted-foreground",children:[F," ",T||e.jsx(U,{i18nKey:"common.count"})]})]}),r.limit===0&&e.jsx(S,{})]})})]},r.resourceName)})})]})}j.__docgenInfo={description:`네이티브 quota 테이블 — Project·User 상세 공용(읽기 전용).
컬럼: No / Resource name / Used / Limit. Resource name 은 네이티브 키 그대로 표기하며
used/limit 사용률 바는 이내=tone(User amber·Project blue), 초과(used>limit)=red(Node 컬럼 없음).

limit 0 = "사용 금지" 도 quota 설정의 한 상태라 행을 숨기지 않는다. 숨기면 사용 금지 하나만
설정한 사용자는 표가 통째로 비어 "quota 미설정" 처럼 보인다. 다른 행과 같은 바 + used/limit
표기에 '사용 불가' 배지를 덧붙인다(Figma Common 2313-117702).`,methods:[],displayName:"NativeResourceQuotaTable",props:{rows:{required:!0,tsType:{name:"Array",elements:[{name:"NativeQuotaRow"}],raw:"NativeQuotaRow[]"},description:""},tone:{required:!1,tsType:{name:"union",raw:"keyof typeof TONE",elements:[{name:"literal",value:"amber"},{name:"literal",value:"blue"}]},description:"",defaultValue:{value:"'amber'",computed:!1}}}};const be={title:"Molecules/NativeResourceQuotaTable",component:j,parameters:{layout:"padded"},tags:["autodocs"]},m=1024**3,o={args:{rows:[{resourceName:"cpu",used:3829,limit:5e3},{resourceName:"memory",used:4*m,limit:5*m},{resourceName:"ten1010.io/gpu-normal-16106mb-t4",used:1050,limit:1e3}]}},s={args:{rows:[{resourceName:"cpu",used:200,limit:500},{resourceName:"memory",used:480*1024**2,limit:500*1024**2}]}},t={args:{rows:[{resourceName:"cpu",used:6e3,limit:5e3},{resourceName:"memory",used:7.16*m,limit:5*m}]}};var i,a,n,u,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    rows: [{
      resourceName: 'cpu',
      used: 3829,
      limit: 5000
    }, {
      resourceName: 'memory',
      used: 4 * GIB,
      limit: 5 * GIB
    }, {
      resourceName: 'ten1010.io/gpu-normal-16106mb-t4',
      used: 1050,
      limit: 1000
    }]
  }
}`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source},description:{story:"cpu(core)·memory(GiB)·gpu(count) 정상 범위 — 캐노니컬 입력, amber 사용률 바",...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.description}}};var l,d,p,N,f;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    rows: [{
      resourceName: 'cpu',
      used: 200,
      limit: 500
    }, {
      resourceName: 'memory',
      used: 480 * 1024 ** 2,
      limit: 500 * 1024 ** 2
    }]
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:"작은 단위 — memory 500MiB, cpu 200millicore(동적 스케일)",...(f=(N=s.parameters)==null?void 0:N.docs)==null?void 0:f.description}}};var x,g,b,y,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    rows: [{
      resourceName: 'cpu',
      used: 6000,
      limit: 5000
    }, {
      resourceName: 'memory',
      used: 7.16 * GIB,
      limit: 5 * GIB
    }]
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source},description:{story:"초과(used > limit) — red 사용률 바, 숫자는 그대로 표기",...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};const ye=["Default","SmallUnits","OverLimit"];export{o as Default,t as OverLimit,s as SmallUnits,ye as __namedExportsOrder,be as default};
