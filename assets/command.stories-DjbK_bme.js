import{r as N,j as n}from"./iframe-D1zcNpR6.js";import{C as j,a as d,b as s,c as p,d as o,e as m,f as t,g as I,h as O}from"./command-DyRBN-2B.js";import"./preload-helper-Dp1pzeXC.js";import"./dialog-DRp0rKUJ.js";import"./index-DW48STyt.js";import"./index-1Mm1CGHb.js";import"./index--CsRPePo.js";import"./index-kJD_jmLN.js";import"./index-CI7ycuOB.js";import"./index-BWesfKH1.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-Ds-udM4m.js";import"./index-D0pAv75W.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./translation-DqiiAkod.js";import"./use-translation-DtBcGNwE.js";import"./button-CqDsn7PQ.js";import"./index-Dp3B9jqt.js";import"./createLucideIcon-CNO9LAd6.js";import"./tooltip-TWwZSAUh.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";import"./x-BOsrJgOo.js";const an={title:"Organisms/Command",component:j,parameters:{layout:"centered"},tags:["autodocs"]},e={render:()=>{const[G,y]=N.useState(!0);return n.jsxs(j,{open:G,onOpenChange:y,children:[n.jsx(d,{placeholder:"Type a command or search..."}),n.jsxs(s,{children:[n.jsx(p,{children:"No results found."}),n.jsxs(o,{heading:"Suggestions",children:[n.jsxs(m,{children:["Open File",n.jsx(t,{children:"Ctrl+O"})]}),n.jsxs(m,{children:["Save",n.jsx(t,{children:"Ctrl+S"})]})]}),n.jsx(I,{}),n.jsxs(o,{heading:"Navigation",children:[n.jsx(m,{children:"Go to Dashboard"}),n.jsx(m,{children:"Open Settings"})]})]})]})}},a={render:()=>n.jsxs(O,{className:"w-[420px] rounded-lg border shadow-md",children:[n.jsx(d,{placeholder:"Type a command or search..."}),n.jsxs(s,{children:[n.jsx(p,{children:"No results found."}),n.jsxs(o,{heading:"Suggestions",children:[n.jsxs(m,{children:["Open File",n.jsx(t,{children:"Ctrl+O"})]}),n.jsxs(m,{children:["Save",n.jsx(t,{children:"Ctrl+S"})]})]}),n.jsx(I,{}),n.jsxs(o,{heading:"Navigation",children:[n.jsx(m,{children:"Go to Dashboard"}),n.jsx(m,{children:"Open Settings"})]})]})]})},r={render:()=>n.jsxs(O,{className:"w-[420px] rounded-lg border shadow-md",children:[n.jsx(d,{value:"zzz-no-match",onValueChange:()=>{},placeholder:"Type a command or search..."}),n.jsxs(s,{children:[n.jsx(p,{children:"No results found."}),n.jsxs(o,{heading:"Suggestions",children:[n.jsx(m,{children:"Open File"}),n.jsx(m,{children:"Save"})]})]})]})};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    return <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              Open File
              <CommandShortcut>Ctrl+O</CommandShortcut>
            </CommandItem>
            <CommandItem>
              Save
              <CommandShortcut>Ctrl+S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem>Go to Dashboard</CommandItem>
            <CommandItem>Open Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>;
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var C,u,h;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Command className="w-[420px] rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            Open File
            <CommandShortcut>Ctrl+O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Save
            <CommandShortcut>Ctrl+S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Navigation">
          <CommandItem>Go to Dashboard</CommandItem>
          <CommandItem>Open Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,x,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Command className="w-[420px] rounded-lg border shadow-md">
      <CommandInput value="zzz-no-match" onValueChange={() => {}} placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Open File</CommandItem>
          <CommandItem>Save</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const rn=["Default","Grouped","EmptyResult"];export{e as Default,r as EmptyResult,a as Grouped,rn as __namedExportsOrder,an as default};
