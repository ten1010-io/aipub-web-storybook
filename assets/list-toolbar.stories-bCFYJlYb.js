import{j as e}from"./iframe-D1zcNpR6.js";import{B as t}from"./button-CqDsn7PQ.js";import{C as V}from"./client-search-form-76JfZ2q1.js";import{c as h}from"./common-DbPgu20d.js";import{S as X}from"./sliders-horizontal-DEnnT710.js";import{P as J}from"./plus-Ck7a8p7l.js";import{T as Y}from"./trash-2-CGSyIgUH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-CNO9LAd6.js";import"./input-BdLAhE0_.js";import"./translation-DqiiAkod.js";import"./use-translation-DtBcGNwE.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";function K({className:Q,header:u,actions:x,controls:d}){const m=!!x;return e.jsxs("div",{className:h("flex w-full flex-col pt-6 lg:px-6",u&&"gap-9",Q),children:[u,(m||d)&&e.jsx("div",{className:"-mx-4 -my-1.5 overflow-x-auto overflow-y-hidden px-4 py-1.5 lg:-mx-1.5 lg:px-1.5",children:e.jsxs("div",{className:"flex min-w-max items-center justify-between gap-3",children:[m&&e.jsx("div",{className:"flex items-center gap-3",children:x}),d&&e.jsx("div",{className:h("flex items-center gap-3",!m&&"ml-auto"),children:d})]})})]})}K.__docgenInfo={description:`목록 화면 상단 툴바. 슬롯 3개를 두 행에 배치한다.

\`\`\`
┌─────────────────────────────────────────────────┐
│ header                                          │
│                                        ↕ 36px   │
│ actions          ·················   controls   │
└─────────────────────────────────────────────────┘
\`\`\`

- 컨트롤 행은 폭이 좁아져도 한 줄을 유지하고 **가로 스크롤**로 넘긴다.
  (적층하면 화면마다 높이가 달라지고, 잘린 채 스크롤도 없으면 접근 자체가 막힌다.)
- \`actions\` 가 권한 등으로 없어도 \`controls\` 는 우측에 남는다.`,methods:[],displayName:"ListToolbar",props:{className:{required:!1,tsType:{name:"string"},description:""},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`1행 — BookmarkToggle + 제목 + count, 필요하면 그 아래 Badge 까지.
탭 콘텐츠처럼 제목이 이미 바깥에 있는 자리에서는 생략한다.`},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"2행 좌측 — 주요 명령(생성·일괄작업 등). 없으면 생략한다."},controls:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"2행 우측 — 보조 컨트롤(필터·정렬·검색 등)."}}};const Ce={title:"Molecules/ListToolbar",component:K,parameters:{layout:"padded"},tags:["autodocs"],args:{header:e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("h2",{className:"text-foreground text-xl leading-7 font-semibold",children:"Workspaces"}),e.jsx("span",{className:"text-primary text-base font-semibold",children:"999"})]})}},p=e.jsxs(t,{children:[e.jsx(J,{className:"size-4"}),"Create"]}),c=e.jsxs(t,{variant:"outline",disabled:!0,children:[e.jsx(Y,{className:"size-4"}),"Delete"]}),l=e.jsx(V,{onSearch:()=>{}}),r={args:{actions:e.jsxs(e.Fragment,{children:[p,c]}),controls:l}},s={args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Set admin"}),e.jsx(t,{variant:"outline",children:"Resource quota"}),e.jsx(t,{variant:"outline",children:"Workspace reclaim"}),c]}),controls:l}},o={args:{actions:e.jsxs(e.Fragment,{children:[p,c]}),controls:e.jsxs(e.Fragment,{children:[e.jsxs(t,{variant:"outline",children:[e.jsx(X,{className:"size-4"}),"Filter"]}),l]})}},n={args:{actions:void 0,controls:l}},a={args:{actions:e.jsxs(e.Fragment,{children:[p,c]}),controls:void 0}},i={args:{header:void 0,actions:e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(J,{className:"size-4"}),"Add user"]}),c]}),controls:l}};var g,f,j,B,N;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    actions: <>
        {createButton}
        {deleteButton}
      </>,
    controls: search
  }
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source},description:{story:"목록 화면 기본형 — 생성·일괄작업 좌측, 검색 우측",...(N=(B=r.parameters)==null?void 0:B.docs)==null?void 0:N.description}}};var y,v,R,S,F;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    actions: <>
        <Button>Set admin</Button>
        <Button variant="outline">Resource quota</Button>
        <Button variant="outline">Workspace reclaim</Button>
        {deleteButton}
      </>,
    controls: search
  }
}`,...(R=(v=s.parameters)==null?void 0:v.docs)==null?void 0:R.source},description:{story:"일괄 액션이 여러 개인 경우 (Users)",...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.description}}};var T,b,w,z,A;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    actions: <>
        {createButton}
        {deleteButton}
      </>,
    controls: <>
        <Button variant="outline">
          <SlidersHorizontal className="size-4" />
          Filter
        </Button>
        {search}
      </>
  }
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source},description:{story:"필터가 검색 앞에 붙는 경우 (Templates / Nodes)",...(A=(z=o.parameters)==null?void 0:z.docs)==null?void 0:A.description}}};var W,q,k,C,H;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    actions: undefined,
    controls: search
  }
}`,...(k=(q=n.parameters)==null?void 0:q.docs)==null?void 0:k.source},description:{story:"액션이 권한으로 숨겨진 경우 — controls 가 우측에 남는다",...(H=(C=n.parameters)==null?void 0:C.docs)==null?void 0:H.description}}};var O,_,D,L,M;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    actions: <>
        {createButton}
        {deleteButton}
      </>,
    controls: undefined
  }
}`,...(D=(_=a.parameters)==null?void 0:_.docs)==null?void 0:D.source},description:{story:"controls 가 없는 경우 — actions 만 좌측에 남는다",...(M=(L=a.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var P,E,I,U,G;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    header: undefined,
    actions: <>
        <Button>
          <Plus className="size-4" />
          Add user
        </Button>
        {deleteButton}
      </>,
    controls: search
  }
}`,...(I=(E=i.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:"header 없이 컨트롤 행만 (ImageHub 상세 탭).\n제목이 이미 탭 바깥에 있는 자리에서는 `header` 를 생략한다 — 위쪽 간격도 함께 사라진다.",...(G=(U=i.parameters)==null?void 0:U.docs)==null?void 0:G.description}}};const He=["Default","MultipleActions","WithFilter","ControlsOnly","ActionsOnly","WithoutHeader"];export{a as ActionsOnly,n as ControlsOnly,r as Default,s as MultipleActions,o as WithFilter,i as WithoutHeader,He as __namedExportsOrder,Ce as default};
