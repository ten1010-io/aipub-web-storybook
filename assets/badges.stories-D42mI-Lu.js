import{j as e}from"./iframe-D1zcNpR6.js";import{c as B}from"./common-DbPgu20d.js";import{T as oe}from"./use-translation-DtBcGNwE.js";import{B as v}from"./badge-DKZ-o_cJ.js";import{C as s,D as c,N as m}from"./not-ready-badge-CWwA2UmN.js";import{I as de}from"./invalid-badge-Dx1TKrS7.js";import{R as me}from"./resource-unavailable-badge-Dpic9BLF.js";import{I as le}from"./info-popover-9O-Heqam.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./button-CqDsn7PQ.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./createLucideIcon-CNO9LAd6.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";import"./info-circle-icon-ChAGqvpJ.js";import"./popover-CIjp3jnJ.js";import"./layout-DJYywupw.js";function p({compact:n=!1,className:a}){return n?e.jsx(v,{variant:"primary",className:B("size-5",a),children:"A"}):e.jsx(v,{variant:"primary",className:a,children:e.jsx(oe,{i18nKey:"component.admin_badge.label"})})}p.__docgenInfo={description:"관리자 배지 — 리스트/상세 등 위치와 무관하게 항상 solid blue.",methods:[],displayName:"AdminBadge",props:{compact:{required:!1,tsType:{name:"boolean"},description:"테이블 등 좁은 공간용 'A' 정사각 칩. 미지정 시 'Admin' 텍스트 배지.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const pe="border-transparent bg-orange-100 text-orange-600 dark:bg-orange-400/30 dark:text-orange-400";function j({className:n,children:a}){return e.jsxs(v,{className:B(pe,"gap-1",n),children:["Quota",a]})}j.__docgenInfo={description:"리소스 Quota 가 걸린 대상에 붙는 배지 — 항상 tint orange 'Quota' 칩.",methods:[],displayName:"QuotaBadge",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`라벨 뒤에 붙일 부가 요소(예: ⓘ InfoPopover).
팝오버 내용은 사용 위치마다 달라 컴포넌트가 소유하지 않고 그대로 렌더한다.`}}};function r({className:n,children:a,fill:ce}){return e.jsxs(v,{className:B("gap-1",n),variant:ce==="tint"?"secondary":"default",children:["Unavailable",e.jsx(le,{className:"w-sm",iconClassName:"size-3 dark:text-current",children:a??e.jsx(oe,{i18nKey:"component.unavailable_badge.description"})})]})}r.__docgenInfo={description:"",methods:[],displayName:"UnavailableBadge",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fill:{required:!1,tsType:{name:"union",raw:"'solid' | 'tint'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'tint'"}]},description:"테이블/리스트에서는 'tint'. 상세 헤더는 미지정(solid)."}}};const Ye={title:"Atoms/Badges",parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(p,{}),e.jsx(p,{compact:!0}),e.jsx(s,{}),e.jsx(c,{}),e.jsx(de,{}),e.jsx(m,{}),e.jsx(j,{}),e.jsx(r,{}),e.jsx(me,{})]})},i={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"grid grid-cols-[6rem_1fr_1fr] items-center gap-3",children:[e.jsx("span",{className:"text-muted-foreground text-xs",children:"배지"}),e.jsx("span",{className:"text-muted-foreground text-xs",children:"solid (상세, 기본)"}),e.jsx("span",{className:"text-muted-foreground text-xs",children:"tint (리스트)"}),e.jsx("span",{className:"text-xs",children:"Cordoned"}),e.jsx(s,{}),e.jsx(s,{fill:"tint"}),e.jsx("span",{className:"text-xs",children:"Deleting"}),e.jsx(c,{}),e.jsx(c,{fill:"tint"}),e.jsx("span",{className:"text-xs",children:"Not ready"}),e.jsx(m,{}),e.jsx(m,{fill:"tint"}),e.jsx("span",{className:"text-xs",children:"Unavailable"}),e.jsx(r,{}),e.jsx(r,{fill:"tint"})]})})},x={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(p,{}),e.jsx(p,{compact:!0})]})},g={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{}),e.jsx(s,{fill:"tint"})]})},u={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(c,{}),e.jsx(c,{fill:"tint"})]})},o={render:()=>e.jsx("div",{className:"flex items-center gap-3",children:e.jsx(de,{})})},f={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(m,{}),e.jsx(m,{fill:"tint"})]})},d={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(j,{}),e.jsx(j,{children:e.jsx(le,{iconClassName:"size-3",children:"Project / User resource quota details."})})]})},N={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{}),e.jsx(r,{fill:"tint"})]})},l={render:()=>e.jsx(s,{children:"This node was manually cordoned by an operator for maintenance."})};var h,y,b,R,I;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <AdminBadge />
      <AdminBadge compact />
      <CordonedBadge />
      <DeletingBadge />
      <InvalidBadge />
      <NotReadyBadge />
      <QuotaBadge />
      <UnavailableBadge />
      <ResourceUnavailableBadge />
    </div>
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:"Kubernetes 리소스 상태 배지 모음. Info 아이콘 클릭 시 설명 팝오버 노출.",...(I=(R=t.parameters)==null?void 0:R.docs)==null?void 0:I.description}}};var C,A,U,T,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="grid grid-cols-[6rem_1fr_1fr] items-center gap-3">
        <span className="text-muted-foreground text-xs">배지</span>
        <span className="text-muted-foreground text-xs">
          solid (상세, 기본)
        </span>
        <span className="text-muted-foreground text-xs">tint (리스트)</span>

        <span className="text-xs">Cordoned</span>
        <CordonedBadge />
        <CordonedBadge fill="tint" />

        <span className="text-xs">Deleting</span>
        <DeletingBadge />
        <DeletingBadge fill="tint" />

        <span className="text-xs">Not ready</span>
        <NotReadyBadge />
        <NotReadyBadge fill="tint" />

        <span className="text-xs">Unavailable</span>
        <UnavailableBadge />
        <UnavailableBadge fill="tint" />
      </div>
    </div>
}`,...(U=(A=i.parameters)==null?void 0:A.docs)==null?void 0:U.source},description:{story:`fill 규칙 비교 — 상세 헤더는 solid(기본), 리스트/테이블/카드는 tint.
AdminBadge 는 항상 solid 라 제외.`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.description}}};var D,Q,S;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <AdminBadge />
      <AdminBadge compact />
    </div>
}`,...(S=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:S.source}}};var q,w,P;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <CordonedBadge />
      <CordonedBadge fill="tint" />
    </div>
}`,...(P=(w=g.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var z,k,E;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <DeletingBadge />
      <DeletingBadge fill="tint" />
    </div>
}`,...(E=(k=u.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var K,V,O,W,G;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <InvalidBadge />
    </div>
}`,...(O=(V=o.parameters)==null?void 0:V.docs)==null?void 0:O.source},description:{story:`Invalid 배지는 위치와 무관하게 항상 solid red — 폼 섹션 헤더의 검증 에러 마커.
⚠ 아이콘 + 'Invalid' 라벨로 고정이라 fill/children 이 없다.`,...(G=(W=o.parameters)==null?void 0:W.docs)==null?void 0:G.description}}};var F,H,J;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <NotReadyBadge />
      <NotReadyBadge fill="tint" />
    </div>
}`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var L,M,X,Y,Z;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <QuotaBadge />
      <QuotaBadge>
        <InfoPopover iconClassName="size-3">
          Project / User resource quota details.
        </InfoPopover>
      </QuotaBadge>
    </div>
}`,...(X=(M=d.parameters)==null?void 0:M.docs)==null?void 0:X.source},description:{story:"Quota 배지는 위치와 무관하게 항상 tint orange 'Quota' 칩.\n팝오버 내용은 위치마다 달라 `children` 으로 그대로 넘긴다.",...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var $,ee,ae;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <UnavailableBadge />
      <UnavailableBadge fill="tint" />
    </div>
}`,...(ae=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,re,ne,te,ie;l.parameters={...l.parameters,docs:{...(se=l.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <CordonedBadge>
      This node was manually cordoned by an operator for maintenance.
    </CordonedBadge>
}`,...(ne=(re=l.parameters)==null?void 0:re.docs)==null?void 0:ne.source},description:{story:"`children` 을 넘기면 기본 `<T>` 팝오버 설명을 덮어써서\n커스텀 설명을 표시한다 (Info 아이콘 클릭 시 노출).",...(ie=(te=l.parameters)==null?void 0:te.docs)==null?void 0:ie.description}}};const Ze=["AllBadges","SolidVsTint","Admin","Cordoned","Deleting","Invalid","NotReady","Quota","Unavailable","WithCustomDescription"];export{x as Admin,t as AllBadges,g as Cordoned,u as Deleting,o as Invalid,f as NotReady,d as Quota,i as SolidVsTint,N as Unavailable,l as WithCustomDescription,Ze as __namedExportsOrder,Ye as default};
