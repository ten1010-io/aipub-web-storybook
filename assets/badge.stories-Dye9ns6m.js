import{j as e}from"./iframe-D1zcNpR6.js";import{B as a}from"./badge-DKZ-o_cJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";const H=[{label:"blue",className:"border-transparent bg-blue-50 text-blue-700 dark:bg-blue-200/30 dark:text-blue-200"},{label:"red",className:"border-transparent bg-red-100 text-red-600 dark:bg-red-500/30 dark:text-red-500"},{label:"orange",className:"border-transparent bg-orange-100 text-orange-600 dark:bg-orange-400/30 dark:text-orange-400"},{label:"yellow",className:"border-transparent bg-amber-100 text-amber-600 dark:bg-amber-200/30 dark:text-amber-200"},{label:"green",className:"border-transparent bg-emerald-50 text-emerald-700 dark:bg-green-300/24 dark:text-green-400"},{label:"violet",className:"border-transparent bg-violet-100 text-violet-600 dark:bg-violet-300/28 dark:text-violet-300"}],J=[{label:"orange",className:"border-transparent bg-orange-500 text-white [a&]:hover:bg-orange-500/90"},{label:"yellow",className:"border-transparent bg-amber-300 text-black [a&]:hover:bg-amber-300/90"},{label:"green",className:"border-transparent bg-green-600 text-white [a&]:hover:bg-green-600/90"},{label:"violet",className:"border-transparent bg-violet-600 text-white [a&]:hover:bg-violet-600/90 dark:bg-violet-500 dark:[a&]:hover:bg-violet-500/90"}],ee={title:"Atoms/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","secondary","destructive","outline"]},children:{control:"text"}}},s={args:{children:"Badge"}},o={args:{variant:"primary",children:"Primary"}},i={args:{variant:"secondary",children:"Secondary"}},l={args:{variant:"destructive",children:"Destructive"}},d={args:{variant:"outline",children:"Outline"}},t={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"default",children:"default"}),e.jsx(a,{variant:"primary",children:"primary"}),e.jsx(a,{variant:"secondary",children:"secondary"}),e.jsx(a,{variant:"destructive",children:"destructive"}),e.jsx(a,{variant:"outline",children:"outline"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-muted-foreground w-14 text-xs",children:"Tint"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:H.map(r=>e.jsx(a,{className:r.className,children:r.label},r.label))})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-muted-foreground w-14 text-xs",children:"Solid"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:J.map(r=>e.jsx(a,{className:r.className,children:r.label},r.label))})]})]})},c={args:{variant:"primary",children:e.jsxs(e.Fragment,{children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20"}),e.jsx("path",{d:"M2 12h20"})]}),"New"]})}},m={args:{asChild:!0,variant:"primary",children:e.jsx("a",{href:"#",children:"Link Badge"})}};var p,g,u,v,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:"기본값 — variant 미지정 시 default.",...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var h,b,N;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...(N=(b=o.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var f,y,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var w,j,B;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
}`,...(B=(j=l.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,O,T;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var L,C,D,E,I;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="default">default</Badge>
      <Badge variant="primary">primary</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="outline">outline</Badge>
    </div>
}`,...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:"variant 5종.",...(I=(E=t.parameters)==null?void 0:E.docs)==null?void 0:I.description}}};var _,M,P,W,A;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-start gap-2">
        <span className="text-muted-foreground w-14 text-xs">Tint</span>
        <div className="flex flex-wrap gap-2">
          {TINT_TONES.map(tone => <Badge key={tone.label} className={tone.className}>
              {tone.label}
            </Badge>)}
        </div>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-muted-foreground w-14 text-xs">Solid</span>
        <div className="flex flex-wrap gap-2">
          {SOLID_TONES.map(tone => <Badge key={tone.label} className={tone.className}>
              {tone.label}
            </Badge>)}
        </div>
      </div>
    </div>
}`,...(P=(M=n.parameters)==null?void 0:M.docs)==null?void 0:P.source},description:{story:"유색 배지 — className 으로 직접 주입 (tint / solid).",...(A=(W=n.parameters)==null?void 0:W.docs)==null?void 0:A.description}}};var V,F,R;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: <>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20" />
          <path d="M2 12h20" />
        </svg>
        New
      </>
  }
}`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var q,z,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    asChild: true,
    variant: 'primary',
    children: <a href="#">Link Badge</a>
  }
}`,...(G=(z=m.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const ae=["Default","Primary","Secondary","Destructive","Outline","Variants","CustomColors","WithIcon","AsLink"];export{m as AsLink,n as CustomColors,s as Default,l as Destructive,d as Outline,o as Primary,i as Secondary,t as Variants,c as WithIcon,ae as __namedExportsOrder,ee as default};
