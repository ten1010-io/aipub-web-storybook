import{j as e}from"./iframe-D1zcNpR6.js";import{c as p}from"./common-DbPgu20d.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";const u={title:"Design System/Spacing",parameters:{layout:"centered"}},s=({size:a,label:n})=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"w-32",children:[e.jsx("div",{className:"text-sm font-medium",children:n}),e.jsx("div",{className:"text-muted-foreground text-sm",children:a})]}),e.jsx("div",{className:p("bg-primary/20 rounded-sm",a)})]}),l={render:()=>e.jsx("div",{className:"flex flex-col gap-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Spacing Scale"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{size:"w-4 h-4",label:"spacing-1"}),e.jsx(s,{size:"w-8 h-8",label:"spacing-2"}),e.jsx(s,{size:"w-12 h-12",label:"spacing-3"}),e.jsx(s,{size:"w-16 h-16",label:"spacing-4"}),e.jsx(s,{size:"w-20 h-20",label:"spacing-5"}),e.jsx(s,{size:"w-24 h-24",label:"spacing-6"})]})]})})},i=({children:a,className:n})=>e.jsx("div",{className:p("${className} border-muted-foreground/50 bg-muted/30 rounded-lg border border-dashed",n),children:a}),d={render:()=>e.jsxs("div",{className:"flex w-[800px] flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Container Sizes"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{children:e.jsx(i,{className:"h-24 w-full max-w-sm",children:e.jsx("p",{className:"text-muted-foreground p-4 text-sm",children:"max-w-sm"})})}),e.jsx("div",{children:e.jsx(i,{className:"h-24 w-full max-w-md",children:e.jsx("p",{className:"text-muted-foreground p-4 text-sm",children:"max-w-md"})})}),e.jsx("div",{children:e.jsx(i,{className:"h-24 w-full max-w-lg",children:e.jsx("p",{className:"text-muted-foreground p-4 text-sm",children:"max-w-lg"})})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Grid System"}),e.jsx(i,{children:e.jsx("div",{className:"grid grid-cols-4 gap-4 p-4",children:Array.from({length:8}).map((a,n)=>e.jsx("div",{className:"bg-primary/20 h-12 rounded-md"},n))})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Flex Layout"}),e.jsx(i,{children:e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsx("div",{className:"bg-primary/20 h-12 w-24 rounded-md"}),e.jsx("div",{className:"bg-primary/20 h-12 w-24 rounded-md"}),e.jsx("div",{className:"bg-primary/20 h-12 w-24 rounded-md"})]})})]})]})};var r,m,c;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Spacing Scale</h3>
        <div className="flex flex-col gap-4">
          <SpacingBox size="w-4 h-4" label="spacing-1" />
          <SpacingBox size="w-8 h-8" label="spacing-2" />
          <SpacingBox size="w-12 h-12" label="spacing-3" />
          <SpacingBox size="w-16 h-16" label="spacing-4" />
          <SpacingBox size="w-20 h-20" label="spacing-5" />
          <SpacingBox size="w-24 h-24" label="spacing-6" />
        </div>
      </div>
    </div>
}`,...(c=(m=l.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var t,o,x;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div className="flex w-[800px] flex-col gap-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Container Sizes</h3>
        <div className="flex flex-col gap-4">
          <div>
            <Container className="h-24 w-full max-w-sm">
              <p className="text-muted-foreground p-4 text-sm">max-w-sm</p>
            </Container>
          </div>
          <div>
            <Container className="h-24 w-full max-w-md">
              <p className="text-muted-foreground p-4 text-sm">max-w-md</p>
            </Container>
          </div>
          <div>
            <Container className="h-24 w-full max-w-lg">
              <p className="text-muted-foreground p-4 text-sm">max-w-lg</p>
            </Container>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Grid System</h3>
        <Container>
          <div className="grid grid-cols-4 gap-4 p-4">
            {Array.from({
            length: 8
          }).map((_, i) => <div key={i} className="bg-primary/20 h-12 rounded-md" />)}
          </div>
        </Container>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Flex Layout</h3>
        <Container>
          <div className="flex items-center justify-between p-4">
            <div className="bg-primary/20 h-12 w-24 rounded-md" />
            <div className="bg-primary/20 h-12 w-24 rounded-md" />
            <div className="bg-primary/20 h-12 w-24 rounded-md" />
          </div>
        </Container>
      </div>
    </div>
}`,...(x=(o=d.parameters)==null?void 0:o.docs)==null?void 0:x.source}}};const N=["Spacing","Layout"];export{d as Layout,l as Spacing,N as __namedExportsOrder,u as default};
