import{e as i,j as e,r as $}from"./iframe-D1zcNpR6.js";import{c as te}from"./index--CsRPePo.js";import{P as C}from"./index-2Le0S55P.js";import{I as le,c as U,R as se}from"./index-ChlC6ciw.js";import{a as ae,t as ne}from"./toggle-7vjCMJiE.js";import{u as q}from"./index-BWesfKH1.js";import{u as ue}from"./index-D2RyObxg.js";import{c as J}from"./common-DbPgu20d.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-1Mm1CGHb.js";import"./index-DW48STyt.js";import"./index-DwS2aoMe.js";import"./index-kJD_jmLN.js";import"./index-CI7ycuOB.js";import"./index-CZXvctcB.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";var p="ToggleGroup",[K]=te(p,[U]),Q=U(),w=i.forwardRef((r,o)=>{const{type:t,...l}=r;if(t==="single"){const a=l;return e.jsx(ge,{...a,ref:o})}if(t==="multiple"){const a=l;return e.jsx(ie,{...a,ref:o})}throw new Error(`Missing prop \`type\` expected on \`${p}\``)});w.displayName=p;var[X,Y]=K(p),ge=i.forwardRef((r,o)=>{const{value:t,defaultValue:l,onValueChange:a=()=>{},...n}=r,[g,u]=q({prop:t,defaultProp:l??"",onChange:a,caller:p});return e.jsx(X,{scope:r.__scopeToggleGroup,type:"single",value:i.useMemo(()=>g?[g]:[],[g]),onItemActivate:u,onItemDeactivate:i.useCallback(()=>u(""),[u]),children:e.jsx(Z,{...n,ref:o})})}),ie=i.forwardRef((r,o)=>{const{value:t,defaultValue:l,onValueChange:a=()=>{},...n}=r,[g,u]=q({prop:t,defaultProp:l??[],onChange:a,caller:p}),d=i.useCallback(m=>u((v=[])=>[...v,m]),[u]),y=i.useCallback(m=>u((v=[])=>v.filter(oe=>oe!==m)),[u]);return e.jsx(X,{scope:r.__scopeToggleGroup,type:"multiple",value:g,onItemActivate:d,onItemDeactivate:y,children:e.jsx(Z,{...n,ref:o})})});w.displayName=p;var[pe,ce]=K(p),Z=i.forwardRef((r,o)=>{const{__scopeToggleGroup:t,disabled:l=!1,rovingFocus:a=!0,orientation:n,dir:g,loop:u=!0,...d}=r,y=Q(t),m=ue(g),v={role:"group",dir:m,...d};return e.jsx(pe,{scope:t,rovingFocus:a,disabled:l,children:a?e.jsx(se,{asChild:!0,...y,orientation:n,dir:m,loop:u,children:e.jsx(C.div,{...v,ref:o})}):e.jsx(C.div,{...v,ref:o})})}),I="ToggleGroupItem",ee=i.forwardRef((r,o)=>{const t=Y(I,r.__scopeToggleGroup),l=ce(I,r.__scopeToggleGroup),a=Q(r.__scopeToggleGroup),n=t.value.includes(r.value),g=l.disabled||r.disabled,u={...r,pressed:n,disabled:g},d=i.useRef(null);return l.rovingFocus?e.jsx(le,{asChild:!0,...a,focusable:!g,active:n,ref:d,children:e.jsx(k,{...u,ref:o})}):e.jsx(k,{...u,ref:o})});ee.displayName=I;var k=i.forwardRef((r,o)=>{const{__scopeToggleGroup:t,value:l,...a}=r,n=Y(I,t),g={role:"radio","aria-checked":r.pressed,"aria-pressed":void 0},u=n.type==="single"?g:void 0;return e.jsx(ae,{...u,...a,ref:o,onPressedChange:d=>{d?n.onItemActivate(l):n.onItemDeactivate(l)}})}),de=w,me=ee;const re=$.createContext({size:"default",variant:"default"});function c({className:r,variant:o,size:t,children:l,...a}){return e.jsx(de,{"data-slot":"toggle-group","data-variant":o,"data-size":t,className:J("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",r),...a,children:e.jsx(re.Provider,{value:{variant:o,size:t},children:l})})}function s({className:r,children:o,variant:t,size:l,...a}){const n=$.useContext(re);return e.jsx(me,{"data-slot":"toggle-group-item","data-variant":n.variant||t,"data-size":n.size||l,className:J(ne({variant:n.variant||t,size:n.size||l}),"min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",r),...a,children:o})}c.__docgenInfo={description:"",methods:[],displayName:"ToggleGroup"};s.__docgenInfo={description:"",methods:[],displayName:"ToggleGroupItem"};const Me={title:"Molecules/ToggleGroup",component:c,parameters:{layout:"centered"},tags:["autodocs"]},x={args:{type:"single",defaultValue:"center"},render:r=>e.jsxs(c,{...r,children:[e.jsx(s,{value:"left",children:"Left"}),e.jsx(s,{value:"center",children:"Center"}),e.jsx(s,{value:"right",children:"Right"})]})},h={args:{type:"multiple",defaultValue:["bold"]},render:r=>e.jsxs(c,{...r,children:[e.jsx(s,{value:"bold",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"size-4",children:[e.jsx("path",{d:"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}),e.jsx("path",{d:"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"})]})}),e.jsx(s,{value:"italic",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"size-4",children:[e.jsx("line",{x1:"19",x2:"10",y1:"4",y2:"4"}),e.jsx("line",{x1:"14",x2:"5",y1:"20",y2:"20"}),e.jsx("line",{x1:"15",x2:"9",y1:"4",y2:"20"})]})}),e.jsx(s,{value:"underline",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"size-4",children:[e.jsx("path",{d:"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"}),e.jsx("line",{x1:"4",x2:"20",y1:"21",y2:"21"})]})})]})},f={args:{type:"single",variant:"outline",defaultValue:"center"},render:r=>e.jsxs(c,{...r,children:[e.jsx(s,{value:"left",children:"Left"}),e.jsx(s,{value:"center",children:"Center"}),e.jsx(s,{value:"right",children:"Right"})]})},G={args:{type:"single",size:"sm",defaultValue:"center"},render:r=>e.jsxs(c,{...r,children:[e.jsx(s,{value:"left",children:"Left"}),e.jsx(s,{value:"center",children:"Center"}),e.jsx(s,{value:"right",children:"Right"})]})},T={args:{type:"single",size:"lg",defaultValue:"center"},render:r=>e.jsxs(c,{...r,children:[e.jsx(s,{value:"left",children:"Left"}),e.jsx(s,{value:"center",children:"Center"}),e.jsx(s,{value:"right",children:"Right"})]})},j={args:{type:"single",defaultValue:"center"},render:r=>e.jsxs(c,{...r,children:[e.jsx(s,{value:"left",children:"Left"}),e.jsx(s,{value:"center",children:"Center"}),e.jsx(s,{value:"right",disabled:!0,children:"Right"})]})};var L,V,_;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'single',
    defaultValue: 'center'
  },
  render: args => <ToggleGroup {...args}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
}`,...(_=(V=x.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var P,R,b;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    defaultValue: ['bold']
  },
  render: args => <ToggleGroup {...args}>
      <ToggleGroupItem value="bold">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
          <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
          <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
          <line x1="19" x2="10" y1="4" y2="4" />
          <line x1="14" x2="5" y1="20" y2="20" />
          <line x1="15" x2="9" y1="4" y2="20" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
          <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
          <line x1="4" x2="20" y1="21" y2="21" />
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(b=(R=h.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var z,M,S;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'single',
    variant: 'outline',
    defaultValue: 'center'
  },
  render: args => <ToggleGroup {...args}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
}`,...(S=(M=f.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var N,D,B;G.parameters={...G.parameters,docs:{...(N=G.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'single',
    size: 'sm',
    defaultValue: 'center'
  },
  render: args => <ToggleGroup {...args}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
}`,...(B=(D=G.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var E,A,F;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'single',
    size: 'lg',
    defaultValue: 'center'
  },
  render: args => <ToggleGroup {...args}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
}`,...(F=(A=T.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var W,O,H;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'single',
    defaultValue: 'center'
  },
  render: args => <ToggleGroup {...args}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right" disabled>
        Right
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(H=(O=j.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};const Se=["Default","Multiple","Outline","Small","Large","Disabled"];export{x as Default,j as Disabled,T as Large,h as Multiple,f as Outline,G as Small,Se as __namedExportsOrder,Me as default};
