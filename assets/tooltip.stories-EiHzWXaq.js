import{j as o}from"./iframe-D1zcNpR6.js";import{B as n}from"./button-CqDsn7PQ.js";import{a as t,b as e,c as i}from"./tooltip-TWwZSAUh.js";import{P as f}from"./plus-Ck7a8p7l.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";const K={title:"Overlays/Tooltip",component:t,parameters:{layout:"centered"}},r={render:()=>o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(n,{variant:"outline",children:"Hover me"})}),o.jsx(i,{children:o.jsx("p",{children:"Add to library"})})]})},l={render:()=>o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(n,{variant:"outline",size:"icon",children:o.jsx(f,{className:"size-4"})})}),o.jsx(i,{children:o.jsx("p",{children:"Add new item"})})]})},s={render:()=>o.jsxs("div",{className:"flex items-center justify-center gap-4",children:[o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(n,{variant:"outline",children:"Top"})}),o.jsx(i,{children:o.jsx("p",{children:"Tooltip on top"})})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(n,{variant:"outline",children:"Right"})}),o.jsx(i,{side:"right",children:o.jsx("p",{children:"Tooltip on right"})})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(n,{variant:"outline",children:"Bottom"})}),o.jsx(i,{side:"bottom",children:o.jsx("p",{children:"Tooltip on bottom"})})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(n,{variant:"outline",children:"Left"})}),o.jsx(i,{side:"left",children:o.jsx("p",{children:"Tooltip on left"})})]})]})},p={render:()=>o.jsxs(t,{delayDuration:500,children:[o.jsx(e,{asChild:!0,children:o.jsx(n,{variant:"outline",children:"Hover with delay"})}),o.jsx(i,{children:o.jsx("p",{children:"Tooltip appears after 500ms"})})]})};var a,d,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var T,m,h;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <PlusIcon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add new item</p>
      </TooltipContent>
    </Tooltip>
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,x,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,C,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Tooltip delayDuration={500}>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover with delay</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip appears after 500ms</p>
      </TooltipContent>
    </Tooltip>
}`,...(v=(C=p.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const M=["Default","WithIcon","Placement","WithDelay"];export{r as Default,s as Placement,p as WithDelay,l as WithIcon,M as __namedExportsOrder,K as default};
