import{j as e}from"./iframe-D1zcNpR6.js";import{B as t}from"./button-CqDsn7PQ.js";import{I as u}from"./input-BdLAhE0_.js";import{L as g}from"./label-63cY3faU.js";import{S as q}from"./scroll-area-Bq2697E3.js";import{P as r,a as n,b as o,c as z}from"./popover-CIjp3jnJ.js";import{S as M}from"./settings-ByzoFsiR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";import"./translation-DqiiAkod.js";import"./use-translation-DtBcGNwE.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./layout-DJYywupw.js";const{expect:x,fireEvent:H,userEvent:k,waitFor:P,within:K}=__STORYBOOK_MODULE_TEST__,Ae={title:"Overlays/Popover",component:r,parameters:{layout:"centered"}},s={render:()=>e.jsxs(r,{children:[e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Popover"})}),e.jsx(o,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"leading-none font-medium",children:"Dimensions"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(g,{htmlFor:"width",children:"Width"}),e.jsx(u,{id:"width",defaultValue:"100%",className:"col-span-2 h-8"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(g,{htmlFor:"height",children:"Height"}),e.jsx(u,{id:"height",defaultValue:"25px",className:"col-span-2 h-8"})]})]})]})})]})},i={render:()=>e.jsxs(r,{children:[e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"outline",size:"icon",children:e.jsx(M,{className:"size-4"})})}),e.jsx(o,{children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"leading-none font-medium",children:"Settings"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Manage your application settings."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(t,{variant:"outline",className:"w-full justify-start",children:"Profile"}),e.jsx(t,{variant:"outline",className:"w-full justify-start",children:"Notifications"}),e.jsx(t,{variant:"outline",className:"w-full justify-start",children:"Appearance"})]})]})})]})},a={render:()=>e.jsxs(r,{children:[e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Portaled Popover"})}),e.jsx(o,{portal:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"leading-none font-medium",children:"Portaled content"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"This content is rendered through a portal into document.body."})]})})]})},l={render:()=>e.jsxs(r,{children:[e.jsx(z,{asChild:!0,children:e.jsx("div",{className:"bg-muted text-muted-foreground rounded-md border px-6 py-8 text-sm",children:"Anchor element — the popover positions against this box."})}),e.jsx("div",{className:"mt-4",children:e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Popover"})})}),e.jsx(o,{children:e.jsx("p",{className:"text-sm",children:"Positioned relative to the anchor, not the trigger."})})]})},c={render:()=>e.jsxs("div",{className:"flex items-center justify-center gap-4",children:[e.jsxs(r,{children:[e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Align Start"})}),e.jsx(o,{align:"start",children:e.jsx("p",{className:"text-sm",children:"Aligned to the start edge."})})]}),e.jsxs(r,{children:[e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Align Center"})}),e.jsx(o,{align:"center",children:e.jsx("p",{className:"text-sm",children:"Aligned to the center."})})]}),e.jsxs(r,{children:[e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Align End"})}),e.jsx(o,{align:"end",children:e.jsx("p",{className:"text-sm",children:"Aligned to the end edge."})})]})]})},d={render:()=>e.jsx(q,{className:"h-48 w-72 rounded-md border",children:e.jsxs("div",{className:"p-4",children:[e.jsxs(r,{children:[e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Popover"})}),e.jsx(o,{children:e.jsx("p",{className:"text-sm",children:"Scroll the list to close this popover."})})]}),e.jsx("div",{className:"h-[600px]"})]})}),play:async({canvasElement:h})=>{const m=K(h);await k.click(m.getByRole("button",{name:"Open Popover"})),await P(()=>x(m.getByText("Scroll the list to close this popover.")).toBeVisible());const v=h.querySelector('[data-slot="scroll-area-viewport"]');v.scrollTop=300,H.scroll(v),await P(()=>x(m.queryByText("Scroll the list to close this popover.")).toBeNull())}},p={render:()=>e.jsxs("div",{className:"flex items-center justify-center gap-4",children:[e.jsxs(r,{children:[e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Bottom"})}),e.jsx(o,{children:e.jsx("p",{className:"text-sm",children:"This popover appears at the bottom."})})]}),e.jsxs(r,{children:[e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Right"})}),e.jsx(o,{side:"right",children:e.jsx("p",{className:"text-sm",children:"This popover appears on the right."})})]}),e.jsxs(r,{children:[e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Left"})}),e.jsx(o,{side:"left",children:e.jsx("p",{className:"text-sm",children:"This popover appears on the left."})})]})]})};var j,N,f;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...(f=(N=s.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var C,B,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <SettingsIcon className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Settings</h4>
            <p className="text-muted-foreground text-sm">
              Manage your application settings.
            </p>
          </div>
          <div className="grid gap-2">
            <Button variant="outline" className="w-full justify-start">
              Profile
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Notifications
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Appearance
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var y,S,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Portaled Popover</Button>
      </PopoverTrigger>
      <PopoverContent portal>
        <div className="space-y-2">
          <h4 className="leading-none font-medium">Portaled content</h4>
          <p className="text-muted-foreground text-sm">
            This content is rendered through a portal into document.body.
          </p>
        </div>
      </PopoverContent>
    </Popover>
}`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var A,b,O;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverAnchor asChild>
        <div className="bg-muted text-muted-foreground rounded-md border px-6 py-8 text-sm">
          Anchor element — the popover positions against this box.
        </div>
      </PopoverAnchor>
      <div className="mt-4">
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
      </div>
      <PopoverContent>
        <p className="text-sm">
          Positioned relative to the anchor, not the trigger.
        </p>
      </PopoverContent>
    </Popover>
}`,...(O=(b=l.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var E,L,W;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Align Start</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <p className="text-sm">Aligned to the start edge.</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Align Center</Button>
        </PopoverTrigger>
        <PopoverContent align="center">
          <p className="text-sm">Aligned to the center.</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Align End</Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <p className="text-sm">Aligned to the end edge.</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...(W=(L=c.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,F,I;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-48 w-72 rounded-md border">
      <div className="p-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">Scroll the list to close this popover.</p>
          </PopoverContent>
        </Popover>
        <div className="h-[600px]" />
      </div>
    </ScrollArea>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open Popover'
    }));
    await waitFor(() => expect(canvas.getByText('Scroll the list to close this popover.')).toBeVisible());
    const viewport = canvasElement.querySelector('[data-slot="scroll-area-viewport"]') as HTMLElement;
    viewport.scrollTop = 300;
    fireEvent.scroll(viewport);
    await waitFor(() => expect(canvas.queryByText('Scroll the list to close this popover.')).toBeNull());
  }
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var R,V,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm">This popover appears at the bottom.</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p className="text-sm">This popover appears on the right.</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <p className="text-sm">This popover appears on the left.</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const be=["Default","WithIcon","WithPortal","WithAnchor","Alignment","ClosesOnOutsideScroll","Placement"];export{c as Alignment,d as ClosesOnOutsideScroll,s as Default,p as Placement,l as WithAnchor,i as WithIcon,a as WithPortal,be as __namedExportsOrder,Ae as default};
