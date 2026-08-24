import{j as e}from"./iframe-D1zcNpR6.js";import{B as i}from"./button-CqDsn7PQ.js";import{I as m}from"./input-BdLAhE0_.js";import{L as p}from"./label-63cY3faU.js";import{D as o,i as l,a as s,b as c,c as d,d as g,e as u,j as h}from"./dialog-DRp0rKUJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";import"./translation-DqiiAkod.js";import"./use-translation-DtBcGNwE.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";import"./index-Ds-udM4m.js";const le={title:"Overlays/Dialog",component:o,parameters:{layout:"centered"}},r={render:()=>e.jsxs(o,{children:[e.jsx(l,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Edit profile"}),e.jsx(g,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(p,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(m,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(p,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(m,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(u,{children:e.jsx(i,{type:"submit",children:"Save changes"})})]})]})},a={render:()=>e.jsxs(o,{children:[e.jsx(l,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Open Dialog"})}),e.jsxs(s,{hideOverlay:!0,children:[e.jsxs(c,{children:[e.jsx(d,{children:"Without Overlay"}),e.jsx(g,{children:"This dialog appears without a background overlay."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Dialog content goes here."})}),e.jsx(u,{children:e.jsx(i,{type:"submit",children:"OK"})})]})]})},t={render:()=>e.jsxs(o,{children:[e.jsx(l,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Save changes?"}),e.jsx(g,{children:"Both footer buttons use DialogClose, so clicking either one closes the dialog."})]}),e.jsxs(u,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Cancel"})}),e.jsx(h,{asChild:!0,children:e.jsx(i,{children:"Confirm"})})]})]})]})},n={render:()=>e.jsxs(o,{children:[e.jsx(l,{asChild:!0,children:e.jsx(i,{variant:"destructive",children:"Delete Account"})}),e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Are you absolutely sure?"}),e.jsx(g,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(u,{children:[e.jsx(i,{variant:"outline",children:"Cancel"}),e.jsx(i,{variant:"destructive",children:"Delete Account"})]})]})]})};var D,x,j;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var v,C,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent hideOverlay>
        <DialogHeader>
          <DialogTitle>Without Overlay</DialogTitle>
          <DialogDescription>
            This dialog appears without a background overlay.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Dialog content goes here.</p>
        </div>
        <DialogFooter>
          <Button type="submit">OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var B,T,f;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save changes?</DialogTitle>
          <DialogDescription>
            Both footer buttons use DialogClose, so clicking either one closes
            the dialog.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Confirm</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(f=(T=t.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var b,N,O;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(O=(N=n.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const se=["Default","WithoutOverlay","WithCloseButton","Destructive"];export{r as Default,n as Destructive,t as WithCloseButton,a as WithoutOverlay,se as __namedExportsOrder,le as default};
