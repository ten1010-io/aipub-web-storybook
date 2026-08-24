import{j as t}from"./iframe-D1zcNpR6.js";import{T as x,D as h}from"./use-translation-DtBcGNwE.js";import"./preload-helper-Dp1pzeXC.js";import"./button-CqDsn7PQ.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";const Z={title:"Atoms/Translation",component:x,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{i18nKey:"component.cordoned_badge.description"}},r={args:{i18nKey:"component.cordoned_badge.description",children:t.jsx("span",{children:"사용자 정의 텍스트"})}},e={args:{i18nKey:"component.cordoned_badge.description"},decorators:[T=>t.jsx(h.Provider,{value:{isVisible:!0,isI18nEnabled:!0,toggleInspector:()=>{},toggleDevToolbar:()=>{},closeToolbar:()=>{}},children:t.jsx(T,{})})]};var n,i,s,a,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    i18nKey: 'component.cordoned_badge.description'
  }
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source},description:{story:"i18nKey 만 넘기면 현재 언어의 번역 텍스트를 렌더한다.",...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.description}}};var d,c,m,l,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    i18nKey: 'component.cordoned_badge.description',
    children: <span>사용자 정의 텍스트</span>
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:`children 을 넘기면 래핑 모드 — 임의의 노드를 감싸고,
DevToolbar 의 i18n 디버그가 켜졌을 때만 번역 툴팁을 띄운다.`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.description}}};var b,u,v,y,D;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    i18nKey: 'component.cordoned_badge.description'
  },
  decorators: [Story => <DevToolbarContext.Provider value={{
    isVisible: true,
    isI18nEnabled: true,
    toggleInspector: () => {},
    toggleDevToolbar: () => {},
    closeToolbar: () => {}
  }}>
        <Story />
      </DevToolbarContext.Provider>]
}`,...(v=(u=e.parameters)==null?void 0:u.docs)==null?void 0:v.source},description:{story:"DevToolbar 의 i18n 디버그(`isI18nEnabled`)가 켜진 상태.\n텍스트에 점선 밑줄이 생기고, hover 시 언어별 번역·중복 키 검색 버튼이 있는\n디버그 툴팁이 나타난다. `isI18nEnabled` 는 DevToolbarContext 에서 오므로\n컨텍스트를 강제로 주입하는 decorator 로 켠다.",...(D=(y=e.parameters)==null?void 0:y.docs)==null?void 0:D.description}}};const $=["Default","WithChildren","DebugMode"];export{e as DebugMode,o as Default,r as WithChildren,$ as __namedExportsOrder,Z as default};
