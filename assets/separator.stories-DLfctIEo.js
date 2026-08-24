import{j as e}from"./iframe-D1zcNpR6.js";import{S as r}from"./separator-DSxnaNcC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-1Mm1CGHb.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";const z={title:"Atoms/Separator",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},decorative:{control:"boolean"}}},a={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:"Content Above"}),e.jsx(r,{}),e.jsx("div",{children:"Content Below"})]})},t={render:()=>e.jsxs("div",{className:"flex h-20 items-center space-x-4",children:[e.jsx("div",{children:"Left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("div",{children:"Right"})]})},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:"Content Above"}),e.jsx(r,{className:"bg-primary"}),e.jsx("div",{children:"Content Below"})]})},s={args:{decorative:!1,"aria-label":"Content separator"},render:C=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:"Content Above"}),e.jsx(r,{...C}),e.jsx("div",{children:"Content Below"})]})};var i,n,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>Content Above</div>
      <Separator />
      <div>Content Below</div>
    </div>
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex h-20 items-center space-x-4">
      <div>Left</div>
      <Separator orientation="vertical" />
      <div>Right</div>
    </div>
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var v,m,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>Content Above</div>
      <Separator className="bg-primary" />
      <div>Content Below</div>
    </div>
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,j,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    decorative: false,
    'aria-label': 'Content separator'
  },
  render: args => <div className="space-y-4">
      <div>Content Above</div>
      <Separator {...args} />
      <div>Content Below</div>
    </div>
}`,...(u=(j=s.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};const R=["Horizontal","Vertical","CustomStyle","WithDecorative"];export{o as CustomStyle,a as Horizontal,t as Vertical,s as WithDecorative,R as __namedExportsOrder,z as default};
