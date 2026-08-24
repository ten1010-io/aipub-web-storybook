import{j as e}from"./iframe-D1zcNpR6.js";import{I as r}from"./info-popover-9O-Heqam.js";import"./preload-helper-Dp1pzeXC.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./info-circle-icon-ChAGqvpJ.js";import"./scroll-area-Bq2697E3.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-1Mm1CGHb.js";import"./index-D0pAv75W.js";import"./index-CI7ycuOB.js";import"./index--CsRPePo.js";import"./index-CZXvctcB.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./popover-CIjp3jnJ.js";import"./index-CPSRtOzn.js";import"./index-Ds-udM4m.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-BWesfKH1.js";import"./layout-DJYywupw.js";const U={title:"Molecules/Popovers/InfoPopover",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{align:{control:"select",options:["start","center","end"]},side:{control:"select",options:["top","right","bottom","left"]}},args:{children:"추가 설명을 보여주는 정보 팝오버입니다."}},s={},i={args:{title:"안내",children:"제목과 본문을 함께 노출할 수 있습니다."}},o={render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(r,{children:"기본"}),e.jsx(r,{iconClassName:"text-primary",children:"primary"}),e.jsx(r,{iconClassName:"text-green-600",children:"green"}),e.jsx(r,{iconClassName:"text-orange-500",children:"warning"}),e.jsx(r,{iconClassName:"text-destructive",children:"destructive"}),e.jsx(r,{iconClassName:"text-muted-foreground",children:"muted"})]})},t={args:{align:"start",side:"right",title:"배치",children:'align="start" · side="right" 로 고정된 팝오버입니다.'}};var a,n,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,m,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: '안내',
    children: '제목과 본문을 함께 노출할 수 있습니다.'
  }
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,g,u,f,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <InfoPopover>기본</InfoPopover>
      <InfoPopover iconClassName="text-primary">primary</InfoPopover>
      <InfoPopover iconClassName="text-green-600">green</InfoPopover>
      <InfoPopover iconClassName="text-orange-500">warning</InfoPopover>
      <InfoPopover iconClassName="text-destructive">destructive</InfoPopover>
      <InfoPopover iconClassName="text-muted-foreground">muted</InfoPopover>
    </div>
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:"아이콘 색은 iconClassName 에 Tailwind fill 클래스를 넘겨 지정한다.",...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var v,h,I,P,C;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    align: 'start',
    side: 'right',
    title: '배치',
    children: 'align="start" · side="right" 로 고정된 팝오버입니다.'
  }
}`,...(I=(h=t.parameters)==null?void 0:h.docs)==null?void 0:I.source},description:{story:`align/side 로 팝오버 배치를 고정한 케이스.
(기본값 align="center" side="top" 이 아닌 비기본 배치를 확인)`,...(C=(P=t.parameters)==null?void 0:P.docs)==null?void 0:C.description}}};const V=["Default","WithTitle","IconColors","Placement"];export{s as Default,o as IconColors,t as Placement,i as WithTitle,V as __namedExportsOrder,U as default};
