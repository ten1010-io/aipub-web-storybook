import{j as e}from"./iframe-D1zcNpR6.js";import{B as t}from"./button-CqDsn7PQ.js";import{I as m}from"./input-BdLAhE0_.js";import{L as p}from"./label-63cY3faU.js";import{S as r,a as o,b as l,c as h,d as c,e as d,f as D}from"./sheet-qGPcpcbg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";import"./translation-DqiiAkod.js";import"./use-translation-DtBcGNwE.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";import"./x-BOsrJgOo.js";const le={title:"Overlays/Sheet",component:r,parameters:{layout:"centered"}},s={render:()=>e.jsxs(r,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Sheet"})}),e.jsxs(l,{children:[e.jsxs(h,{children:[e.jsx(c,{children:"Edit profile"}),e.jsx(d,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 p-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(p,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(m,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(p,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(m,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(D,{children:e.jsx(t,{type:"submit",children:"Save changes"})})]})]})},n={render:()=>e.jsxs(r,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Left Sheet"})}),e.jsxs(l,{side:"left",children:[e.jsxs(h,{children:[e.jsx(c,{children:"Navigation"}),e.jsx(d,{children:"Browse through different sections of the application."})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{variant:"ghost",className:"justify-start",children:"Dashboard"}),e.jsx(t,{variant:"ghost",className:"justify-start",children:"Settings"}),e.jsx(t,{variant:"ghost",className:"justify-start",children:"Messages"}),e.jsx(t,{variant:"ghost",className:"justify-start",children:"Profile"})]})]})]})},a={render:()=>e.jsxs(r,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Top Sheet"})}),e.jsxs(l,{side:"top",children:[e.jsxs(h,{children:[e.jsx(c,{children:"Quick Actions"}),e.jsx(d,{children:"Access frequently used actions."})]}),e.jsxs("div",{className:"flex gap-4 p-4",children:[e.jsx(t,{children:"Create"}),e.jsx(t,{variant:"outline",children:"Import"}),e.jsx(t,{variant:"outline",children:"Export"})]})]})]})},i={render:()=>e.jsxs(r,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Bottom Sheet"})}),e.jsxs(l,{side:"bottom",children:[e.jsxs(h,{children:[e.jsx(c,{children:"Share"}),e.jsx(d,{children:"Share this content with others."})]}),e.jsxs("div",{className:"flex gap-4 p-4",children:[e.jsx(t,{className:"flex-1",children:"Copy Link"}),e.jsx(t,{className:"flex-1",variant:"outline",children:"Email"}),e.jsx(t,{className:"flex-1",variant:"outline",children:"Message"})]})]})]})};var u,S,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var g,j,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Browse through different sections of the application.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="justify-start">
            Settings
          </Button>
          <Button variant="ghost" className="justify-start">
            Messages
          </Button>
          <Button variant="ghost" className="justify-start">
            Profile
          </Button>
        </div>
      </SheetContent>
    </Sheet>
}`,...(f=(j=n.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var v,B,N;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Quick Actions</SheetTitle>
          <SheetDescription>Access frequently used actions.</SheetDescription>
        </SheetHeader>
        <div className="flex gap-4 p-4">
          <Button>Create</Button>
          <Button variant="outline">Import</Button>
          <Button variant="outline">Export</Button>
        </div>
      </SheetContent>
    </Sheet>
}`,...(N=(B=a.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var C,T,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Share</SheetTitle>
          <SheetDescription>Share this content with others.</SheetDescription>
        </SheetHeader>
        <div className="flex gap-4 p-4">
          <Button className="flex-1">Copy Link</Button>
          <Button className="flex-1" variant="outline">
            Email
          </Button>
          <Button className="flex-1" variant="outline">
            Message
          </Button>
        </div>
      </SheetContent>
    </Sheet>
}`,...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const he=["Right","Left","Top","Bottom"];export{i as Bottom,n as Left,s as Right,a as Top,he as __namedExportsOrder,le as default};
