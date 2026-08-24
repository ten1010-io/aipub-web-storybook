import{j as e}from"./iframe-D1zcNpR6.js";import{B as x}from"./button-CqDsn7PQ.js";import{C as o,a as d,b as c}from"./collapsible-DBx1SMnC.js";import{C as p}from"./chevron-down-DTDP-A0u.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";import"./index-BQ5baEsh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-BWesfKH1.js";import"./index-CI7ycuOB.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-D0pAv75W.js";import"./index-kJD_jmLN.js";const _={title:"Molecules/Collapsible",component:o,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(o,{className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@peduarte starred 3 repositories"}),e.jsx(d,{asChild:!0,children:e.jsxs(x,{variant:"ghost",size:"sm",children:[e.jsx(p,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm",children:"@radix-ui/primitives"}),e.jsxs(c,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm",children:"@stitches/react"})]})]})},r={render:()=>e.jsxs(o,{className:"w-[350px] space-y-2",children:[e.jsx(d,{className:"w-full",children:e.jsxs("div",{className:"hover:bg-muted/50 flex items-center justify-between rounded-lg border p-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Click to expand"}),e.jsx(p,{className:"size-4"})]})}),e.jsx(c,{className:"rounded-lg border p-4",children:e.jsx("p",{className:"text-sm",children:"This is the collapsible content. It can contain any elements."})})]})};var a,t,n;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronDownIcon className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
}`,...(n=(t=s.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var l,i,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="w-full">
        <div className="hover:bg-muted/50 flex items-center justify-between rounded-lg border p-4">
          <h4 className="text-sm font-semibold">Click to expand</h4>
          <ChevronDownIcon className="size-4" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-lg border p-4">
        <p className="text-sm">
          This is the collapsible content. It can contain any elements.
        </p>
      </CollapsibleContent>
    </Collapsible>
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const M=["Default","WithCustomTrigger"];export{s as Default,r as WithCustomTrigger,M as __namedExportsOrder,_ as default};
