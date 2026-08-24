import{j as e}from"./iframe-D1zcNpR6.js";import{B as m}from"./button-CqDsn7PQ.js";import{c as n}from"./common-DbPgu20d.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-CNO9LAd6.js";function s({className:a,...r}){return e.jsx("div",{"data-slot":"card",className:n("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...r})}function i({className:a,...r}){return e.jsx("div",{"data-slot":"card-header",className:n("grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 [.border-b]:pb-6",a),...r})}function u({className:a,...r}){return e.jsx("div",{"data-slot":"card-title",className:n("leading-none font-semibold",a),...r})}function p({className:a,...r}){return e.jsx("div",{"data-slot":"card-description",className:n("text-muted-foreground text-sm",a),...r})}function b({className:a,...r}){return e.jsx("div",{"data-slot":"card-action",className:n("col-start-2 row-span-2 row-start-1 self-start justify-self-end",a),...r})}function c({className:a,...r}){return e.jsx("div",{"data-slot":"card-content",className:n("px-6",a),...r})}function l({className:a,...r}){return e.jsx("div",{"data-slot":"card-footer",className:n("flex items-center px-6 [.border-t]:pt-6",a),...r})}s.__docgenInfo={description:"",methods:[],displayName:"Card"};i.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};l.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};u.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};b.__docgenInfo={description:"",methods:[],displayName:"CardAction"};p.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};c.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const A={title:"Molecules/Card",component:s,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>e.jsxs(s,{className:"w-[350px]",children:[e.jsxs(i,{children:[e.jsx(u,{children:"Card Title"}),e.jsx(p,{children:"Card Description"})]}),e.jsx(c,{children:e.jsx("p",{children:"Card Content"})}),e.jsx(l,{children:e.jsx("p",{children:"Card Footer"})})]})},t={render:()=>e.jsxs(s,{className:"w-[350px]",children:[e.jsxs(i,{children:[e.jsx(u,{children:"Notifications"}),e.jsx(p,{children:"You have 3 unread messages."}),e.jsx(b,{children:e.jsx(m,{variant:"ghost",size:"icon",children:"×"})})]}),e.jsx(c,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"Your team has been upgraded to the pro plan."}),e.jsx("p",{children:"New feature: Dark mode is now available."}),e.jsx("p",{children:"Your subscription will renew in 5 days."})]})}),e.jsxs(l,{className:"justify-between",children:[e.jsx(m,{variant:"outline",children:"Mark all as read"}),e.jsx(m,{children:"View all"})]})]})},o={render:()=>e.jsxs(s,{className:"w-[350px]",children:[e.jsxs(i,{children:[e.jsx("div",{className:"bg-muted h-5 w-1/2 animate-pulse rounded"}),e.jsx("div",{className:"bg-muted h-4 w-3/4 animate-pulse rounded"})]}),e.jsx(c,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"bg-muted h-4 w-full animate-pulse rounded"}),e.jsx("div",{className:"bg-muted h-4 w-[90%] animate-pulse rounded"}),e.jsx("div",{className:"bg-muted h-4 w-[80%] animate-pulse rounded"})]})}),e.jsx(l,{children:e.jsx("div",{className:"bg-muted h-9 w-full animate-pulse rounded"})})]})};var C,x,h;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
}`,...(h=(x=d.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,N,f;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            ×
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>Your team has been upgraded to the pro plan.</p>
          <p>New feature: Dark mode is now available.</p>
          <p>Your subscription will renew in 5 days.</p>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">Mark all as read</Button>
        <Button>View all</Button>
      </CardFooter>
    </Card>
}`,...(f=(N=t.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var g,w,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <div className="bg-muted h-5 w-1/2 animate-pulse rounded" />
        <div className="bg-muted h-4 w-3/4 animate-pulse rounded" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="bg-muted h-4 w-full animate-pulse rounded" />
          <div className="bg-muted h-4 w-[90%] animate-pulse rounded" />
          <div className="bg-muted h-4 w-[80%] animate-pulse rounded" />
        </div>
      </CardContent>
      <CardFooter>
        <div className="bg-muted h-9 w-full animate-pulse rounded" />
      </CardFooter>
    </Card>
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const Y=["Default","WithAction","Loading"];export{d as Default,o as Loading,t as WithAction,Y as __namedExportsOrder,A as default};
