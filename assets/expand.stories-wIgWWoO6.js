import{j as e}from"./iframe-D1zcNpR6.js";import{A as S,a as T,b as q,c as A}from"./accordion-lwsomGaQ.js";import{c as D}from"./createLucideIcon-CNO9LAd6.js";import"./preload-helper-Dp1pzeXC.js";import"./index--CsRPePo.js";import"./index-DwS2aoMe.js";import"./index-1Mm1CGHb.js";import"./index-DW48STyt.js";import"./index-BWesfKH1.js";import"./index-CI7ycuOB.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-BQ5baEsh.js";import"./index-D0pAv75W.js";import"./index-kJD_jmLN.js";import"./index-D2RyObxg.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./chevron-down-DTDP-A0u.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]],R=D("square-chevron-down",E);function t({title:r,children:v,titleClassName:b,titleSubContent:w,description:d,defaultOpen:O,isOpen:C}){return e.jsx(S,{type:"single",className:"p-0",collapsible:!0,defaultValue:O?"1":void 0,value:C?"1":void 0,children:e.jsxs(T,{value:"1",children:[e.jsxs("div",{className:"flex flex-col justify-center gap-3",children:[e.jsxs(q,{className:"flex items-center justify-start gap-x-3 p-0 hover:no-underline [&>svg:last-child]:hidden",children:[e.jsx(R,{className:"transition-transform duration-150 group-data-[state=open]:rotate-180"}),e.jsx("h3",{className:b,children:r}),w]}),d&&e.jsx("div",{className:"text-muted-foreground mb-6 text-sm",children:d})]}),e.jsx(A,{children:v})]})})}t.__docgenInfo={description:"",methods:[],displayName:"Expand",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},titleClassName:{required:!1,tsType:{name:"string"},description:""},titleSubContent:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const $={title:"Organisms/Expand",component:t,parameters:{layout:"centered"},tags:["autodocs"]},o=e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm",children:"Here is some content inside the expandable section."}),e.jsx("p",{className:"text-sm",children:"You can put any React nodes here."})]}),s={args:{title:"Details",description:"Additional information can be toggled.",children:o},render:r=>e.jsx("div",{className:"w-lg",children:e.jsx(t,{...r})})},a={args:{title:"Details",defaultOpen:!0,children:o},render:r=>e.jsx("div",{className:"w-lg",children:e.jsx(t,{...r})})},i={args:{title:"Always open",isOpen:!0,children:o},render:r=>e.jsx("div",{className:"w-lg",children:e.jsx(t,{...r})})},n={args:{title:"Metrics",titleSubContent:e.jsx("span",{className:"bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs",children:"Beta"}),children:o},render:r=>e.jsx("div",{className:"w-lg",children:e.jsx(t,{...r})})};var c,l,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Details',
    description: 'Additional information can be toggled.',
    children
  },
  render: args => <div className="w-lg">
      <Expand {...args} />
    </div>
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Details',
    defaultOpen: true,
    children
  },
  render: args => <div className="w-lg">
      <Expand {...args} />
    </div>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,h,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Always open',
    isOpen: true,
    children
  },
  render: args => <div className="w-lg">
      <Expand {...args} />
    </div>
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var N,y,j;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Metrics',
    titleSubContent: <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs">
        Beta
      </span>,
    children
  },
  render: args => <div className="w-lg">
      <Expand {...args} />
    </div>
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const ee=["Default","DefaultOpen","ControlledOpen","WithTitleSubContent"];export{i as ControlledOpen,s as Default,a as DefaultOpen,n as WithTitleSubContent,ee as __namedExportsOrder,$ as default};
