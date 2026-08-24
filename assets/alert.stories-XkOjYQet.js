import{j as e}from"./iframe-D1zcNpR6.js";import{c as Y}from"./index-Dp3B9jqt.js";import{c as u}from"./common-DbPgu20d.js";import{I as m}from"./info-12y5e0Rs.js";import{T as O}from"./triangle-alert-BbIsjEYl.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-CNO9LAd6.js";const C=Y("relative w-full rounded-lg border px-4 py-3 text-sm grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function r({className:n,variant:a,...W}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:u(C({variant:a}),n),...W})}function t({className:n,...a}){return e.jsx("div",{"data-slot":"alert-title",className:u("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",n),...a})}function s({className:n,...a}){return e.jsx("div",{"data-slot":"alert-description",className:u("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",n),...a})}r.__docgenInfo={description:"",methods:[],displayName:"Alert"};t.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};s.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const q={title:"Molecules/Alert",component:r,parameters:{layout:"centered"},tags:["autodocs"]},i={render:()=>e.jsxs(r,{className:"w-[400px]",children:[e.jsx(m,{}),e.jsx(t,{children:"Heads up!"}),e.jsx(s,{children:"You can add components and dependencies to your app using the cli."})]})},o={render:()=>e.jsxs(r,{variant:"destructive",className:"w-[400px]",children:[e.jsx(O,{}),e.jsx(t,{children:"Error"}),e.jsx(s,{children:"Your session has expired. Please log in again."})]})},l={render:()=>e.jsxs(r,{className:"w-[400px]",children:[e.jsx(t,{children:"Note"}),e.jsx(s,{children:"This is a simple alert without an icon."})]})},c={render:()=>e.jsxs(r,{className:"w-[400px]",children:[e.jsx(m,{}),e.jsx(t,{children:"Updates Available"}),e.jsxs(s,{children:[e.jsx("p",{children:"A new version of the application is available."}),e.jsx("p",{children:"This update includes important security fixes and performance improvements. We recommend updating as soon as possible."})]})]})},d={render:()=>e.jsxs(r,{className:"w-[400px]",children:[e.jsx(m,{}),e.jsx(t,{children:"설명 없이 제목만 있는 알림"})]})},p={render:()=>e.jsxs(r,{className:"w-[400px]",children:[e.jsx(m,{}),e.jsx(t,{children:"매우 긴 제목입니다 — 한 줄을 넘어가면 말줄임으로 잘려야 합니다 어쩌고 저쩌고 길게 이어지는 제목"}),e.jsx(s,{children:"제목이 잘려도 설명은 그대로 보입니다."})]})};var x,A,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <InfoIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
}`,...(g=(A=i.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var h,f,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[400px]">
      <AlertTriangleIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var v,T,N;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        This is a simple alert without an icon.
      </AlertDescription>
    </Alert>
}`,...(N=(T=l.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var w,D,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <InfoIcon />
      <AlertTitle>Updates Available</AlertTitle>
      <AlertDescription>
        <p>A new version of the application is available.</p>
        <p>
          This update includes important security fixes and performance
          improvements. We recommend updating as soon as possible.
        </p>
      </AlertDescription>
    </Alert>
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var y,_,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <InfoIcon />
      <AlertTitle>설명 없이 제목만 있는 알림</AlertTitle>
    </Alert>
}`,...(b=(_=d.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var S,E,L;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <InfoIcon />
      <AlertTitle>
        매우 긴 제목입니다 — 한 줄을 넘어가면 말줄임으로 잘려야 합니다 어쩌고
        저쩌고 길게 이어지는 제목
      </AlertTitle>
      <AlertDescription>제목이 잘려도 설명은 그대로 보입니다.</AlertDescription>
    </Alert>
}`,...(L=(E=p.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const B=["Default","Destructive","WithoutIcon","LongContent","TitleOnly","LongTitle"];export{i as Default,o as Destructive,c as LongContent,p as LongTitle,d as TitleOnly,l as WithoutIcon,B as __namedExportsOrder,q as default};
