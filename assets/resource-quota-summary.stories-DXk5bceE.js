import{j as e}from"./iframe-D1zcNpR6.js";import{f as j}from"./native-quota-DuJmM1F_.js";import{T as w}from"./use-translation-DtBcGNwE.js";import{c as R}from"./createLucideIcon-CNO9LAd6.js";import"./preload-helper-Dp1pzeXC.js";import"./resource-BIps32rQ.js";import"./string-RVkVVQ4x.js";import"./button-CqDsn7PQ.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"m15 10 5 5-5 5",key:"qqa56n"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]],S=R("corner-down-right",Q);function v(r){return r==="cpu"?"CPU":r==="memory"?"Memory":r}function N({rows:r}){return r.length?e.jsxs("div",{className:"flex gap-1",children:[e.jsx(S,{className:"text-muted-foreground size-4 min-w-4 shrink-0"}),e.jsx("ul",{className:"flex w-full flex-col gap-0.5 text-sm",children:r.map(o=>{const{usedStr:y,limitStr:g,unit:h}=j(o.resourceName,o.used,o.limit,o.limitRaw);return e.jsxs("li",{className:"flex w-full items-center justify-between gap-2",children:[e.jsx("span",{className:"text-muted-foreground min-w-0 truncate font-medium",children:v(o.resourceName)}),e.jsxs("span",{className:"text-foreground flex shrink-0 items-center gap-1 whitespace-nowrap",children:[e.jsx("span",{className:"font-semibold",children:y}),e.jsx("span",{className:"font-normal",children:"/"}),e.jsx("span",{className:"font-normal",children:g}),e.jsx("span",{className:"font-normal",children:h||e.jsx(w,{i18nKey:"common.count"})})]})]},o.resourceName)})})]}):null}N.__docgenInfo={description:'Quota 뱃지 팝오버의 "Resource quota" 컴팩트 섹션 — Project·User 리스트 공용(읽기 전용).\n제목은 각 팝오버가 소유하고, 이 컴포넌트는 `↳` + 리소스 행(리소스명 좌 / used·limit·단위 우)만 렌더한다.\n값·단위는 상세 테이블과 동일하게 `formatQuotaAmount`(동적 스케일)로 표기한다.',methods:[],displayName:"ResourceQuotaSummary",props:{rows:{required:!0,tsType:{name:"Array",elements:[{name:"NativeQuotaRow"}],raw:"NativeQuotaRow[]"},description:""}}};const m=1024**3,me={title:"Molecules/ResourceQuotaSummary",component:N,parameters:{layout:"padded"},decorators:[r=>e.jsx("div",{className:"w-[300px]",children:e.jsx(r,{})})],tags:["autodocs"]},t={args:{rows:[{resourceName:"cpu",used:3829,limit:5e3},{resourceName:"memory",used:4*m,limit:5*m},{resourceName:"ten1010.io/gpu-normal-16106mb-t4",used:1,limit:2}]}},s={args:{rows:[{resourceName:"cpu",used:200,limit:500},{resourceName:"memory",used:480*1024**2,limit:500*1024**2}]}};var a,i,n,c,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      used: 1,
      limit: 2
    }]
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source},description:{story:'Quota 팝오버의 컴팩트 "Resource quota" 섹션 — cpu(core)·memory(GiB)·gpu(개)',...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.description}}};var p,l,d,f,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"작은 단위 동적 스케일 — cpu millicore, memory MiB",...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};const ae=["Default","SmallUnits"];export{t as Default,s as SmallUnits,ae as __namedExportsOrder,me as default};
