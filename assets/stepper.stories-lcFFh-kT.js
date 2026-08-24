import{j as r}from"./iframe-D1zcNpR6.js";import{c}from"./common-DbPgu20d.js";import{C as b}from"./chevron-right-D02Vcqhr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-CNO9LAd6.js";function F({currentStep:z,steps:i,size:e="md"}){return r.jsx("div",{className:"flex items-center",children:i.map((N,m)=>{const p=m+1,o=z+1===p;return r.jsxs("div",{className:"flex items-center",children:[r.jsx("div",{className:c("bg-muted text-muted-foreground flex items-center justify-center rounded-full",o&&"bg-primary text-primary-foreground",e==="md"&&"size-6 text-sm",e==="sm"&&"size-4 text-xs"),children:p}),r.jsx("span",{className:c("text-muted-foreground font-normal",o&&"text-foreground font-semibold",e==="md"&&"ml-2 text-base",e==="sm"&&"ml-1.5 text-sm"),children:N}),m!==i.length-1&&r.jsx(b,{className:c("size-4 opacity-30",o&&"opacity-100",e==="md"&&"mx-4",e==="sm"&&"mx-2")})]},m)})})}F.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{currentStep:{required:!0,tsType:{name:"number"},description:""},steps:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const C={title:"Molecules/Stepper",component:F,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{currentStep:1,steps:["First","Second","Third"],size:"md"}},t={args:{currentStep:0,steps:["Alpha","Beta","Gamma","Delta"],size:"sm"}},a={args:{currentStep:0,steps:["First","Second","Third"],size:"md"}},n={args:{currentStep:2,steps:["First","Second","Third"],size:"md"}};var d,u,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    currentStep: 1,
    steps: ['First', 'Second', 'Third'],
    size: 'md'
  }
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var S,g,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    currentStep: 0,
    steps: ['Alpha', 'Beta', 'Gamma', 'Delta'],
    size: 'sm'
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,h,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentStep: 0,
    steps: ['First', 'Second', 'Third'],
    size: 'md'
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,j,v;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    currentStep: 2,
    steps: ['First', 'Second', 'Third'],
    size: 'md'
  }
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const D=["Medium","Small","FirstStep","LastStep"];export{a as FirstStep,n as LastStep,s as Medium,t as Small,D as __namedExportsOrder,C as default};
