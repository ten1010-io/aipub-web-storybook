import{j as e}from"./iframe-D1zcNpR6.js";import{T as u}from"./use-translation-DtBcGNwE.js";import"./preload-helper-Dp1pzeXC.js";import"./button-CqDsn7PQ.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";function I({results:c}){const i=c.filter(s=>s.statusCode===200).map(s=>s.name),p=c.filter(s=>s.statusCode!==200).map(s=>s.name),n=i.length,m=p.length,w=n>0?i.join(", "):"-",K=m>0?p.join(", "):"-";return e.jsxs("div",{children:[e.jsxs("p",{children:["Success ",n," ",e.jsx(u,{i18nKey:"common.count"})," / Fail ",m," ",e.jsx(u,{i18nKey:"common.count"})]}),n>0&&e.jsxs("p",{children:["Success: ",w]}),m>0&&e.jsxs("p",{children:["Fail: ",K]})]})}I.__docgenInfo={description:`ShowAlert에서 사용하는 description 반환
@param results FetchResult[]
@returns description string`,methods:[],displayName:"FetchResultDescription",props:{results:{required:!0,tsType:{name:"Array",elements:[{name:"FetchResult"}],raw:"FetchResult[]"},description:""}}};const is={title:"Molecules/FetchResultDescription",component:I,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{results:[{name:"alpha",statusCode:200},{name:"beta",statusCode:404},{name:"gamma",statusCode:200},{name:"delta",statusCode:500}]}},t={args:{results:[{name:"alpha",statusCode:200},{name:"beta",statusCode:200},{name:"gamma",statusCode:200}]}},a={args:{results:[{name:"alpha",statusCode:404},{name:"beta",statusCode:500},{name:"gamma",statusCode:403}]}},r={args:{results:[]}};var d,l,C;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    results: [{
      name: 'alpha',
      statusCode: 200
    }, {
      name: 'beta',
      statusCode: 404
    }, {
      name: 'gamma',
      statusCode: 200
    }, {
      name: 'delta',
      statusCode: 500
    }]
  }
}`,...(C=(l=o.parameters)==null?void 0:l.docs)==null?void 0:C.source}}};var g,h,f,x,F;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    results: [{
      name: 'alpha',
      statusCode: 200
    }, {
      name: 'beta',
      statusCode: 200
    }, {
      name: 'gamma',
      statusCode: 200
    }]
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:"모두 성공 — Fail 상세 줄은 숨겨지고 Success 상세 줄만 노출된다",...(F=(x=t.parameters)==null?void 0:x.docs)==null?void 0:F.description}}};var y,S,j,R,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    results: [{
      name: 'alpha',
      statusCode: 404
    }, {
      name: 'beta',
      statusCode: 500
    }, {
      name: 'gamma',
      statusCode: 403
    }]
  }
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:"모두 실패 — Success 상세 줄은 숨겨지고 Fail 상세 줄만 노출된다",...(b=(R=a.parameters)==null?void 0:R.docs)==null?void 0:b.description}}};var A,D,E,T,_;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    results: []
  }
}`,...(E=(D=r.parameters)==null?void 0:D.docs)==null?void 0:E.source},description:{story:"빈 결과 — 카운트는 0/0, 두 상세 줄 모두 숨겨진다",...(_=(T=r.parameters)==null?void 0:T.docs)==null?void 0:_.description}}};const ps=["Default","AllSuccess","AllFailure","Empty"];export{a as AllFailure,t as AllSuccess,o as Default,r as Empty,ps as __namedExportsOrder,is as default};
