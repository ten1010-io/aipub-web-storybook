import{r as d,j as e}from"./iframe-D1zcNpR6.js";import{L as R}from"./label-63cY3faU.js";import{c as _}from"./index-DW48STyt.js";import{u as C}from"./index-1Mm1CGHb.js";import{c as q}from"./index--CsRPePo.js";import{P as y}from"./index-2Le0S55P.js";import{R as re,I as ae,c as B}from"./index-ChlC6ciw.js";import{u as ie}from"./index-BWesfKH1.js";import{u as te}from"./index-D2RyObxg.js";import{u as se}from"./index-ypquQVYa.js";import{u as ne}from"./index-BsiW0TuZ.js";import{P as de}from"./index-D0pAv75W.js";import{c as z}from"./common-DbPgu20d.js";import{C as le}from"./circle-Cpi6shKA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-DwS2aoMe.js";import"./index-kJD_jmLN.js";import"./index-CI7ycuOB.js";import"./index-CZXvctcB.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-CNO9LAd6.js";var E="Radio",[ce,K]=q(E),[pe,ue]=ce(E),T=d.forwardRef((a,i)=>{const{__scopeRadio:r,name:l,checked:o=!1,required:t,disabled:n,value:m="on",onCheck:c,form:v,...f}=a,[u,x]=d.useState(null),s=C(i,g=>x(g)),p=d.useRef(!1),b=u?v||!!u.closest("form"):!0;return e.jsxs(pe,{scope:r,checked:o,disabled:n,children:[e.jsx(y.button,{type:"button",role:"radio","aria-checked":o,"data-state":W(o),"data-disabled":n?"":void 0,disabled:n,value:m,...f,ref:s,onClick:_(a.onClick,g=>{o||c==null||c(),b&&(p.current=g.isPropagationStopped(),p.current||g.stopPropagation())})}),b&&e.jsx($,{control:u,bubbles:!p.current,name:l,value:m,checked:o,required:t,disabled:n,form:v,style:{transform:"translateX(-100%)"}})]})});T.displayName=E;var U="RadioIndicator",H=d.forwardRef((a,i)=>{const{__scopeRadio:r,forceMount:l,...o}=a,t=ue(U,r);return e.jsx(de,{present:l||t.checked,children:e.jsx(y.span,{"data-state":W(t.checked),"data-disabled":t.disabled?"":void 0,...o,ref:i})})});H.displayName=U;var me="RadioBubbleInput",$=d.forwardRef(({__scopeRadio:a,control:i,checked:r,bubbles:l=!0,...o},t)=>{const n=d.useRef(null),m=C(n,t),c=ne(r),v=se(i);return d.useEffect(()=>{const f=n.current;if(!f)return;const u=window.HTMLInputElement.prototype,s=Object.getOwnPropertyDescriptor(u,"checked").set;if(c!==r&&s){const p=new Event("click",{bubbles:l});s.call(f,r),f.dispatchEvent(p)}},[c,r,l]),e.jsx(y.input,{type:"radio","aria-hidden":!0,defaultChecked:r,...o,tabIndex:-1,ref:m,style:{...o.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});$.displayName=me;function W(a){return a?"checked":"unchecked"}var ve=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],G="RadioGroup",[fe]=q(G,[B,K]),X=B(),Y=K(),[xe,he]=fe(G),J=d.forwardRef((a,i)=>{const{__scopeRadioGroup:r,name:l,defaultValue:o,value:t,required:n=!1,disabled:m=!1,orientation:c,dir:v,loop:f=!0,onValueChange:u,...x}=a,s=X(r),p=te(v),[b,g]=ie({prop:t,defaultProp:o??null,onChange:u,caller:G});return e.jsx(xe,{scope:r,name:l,required:n,disabled:m,value:b,onValueChange:g,children:e.jsx(re,{asChild:!0,...s,orientation:c,dir:p,loop:f,children:e.jsx(y.div,{role:"radiogroup","aria-required":n,"aria-orientation":c,"data-disabled":m?"":void 0,dir:p,...x,ref:i})})})});J.displayName=G;var Q="RadioGroupItem",Z=d.forwardRef((a,i)=>{const{__scopeRadioGroup:r,disabled:l,...o}=a,t=he(Q,r),n=t.disabled||l,m=X(r),c=Y(r),v=d.useRef(null),f=C(i,v),u=t.value===o.value,x=d.useRef(!1);return d.useEffect(()=>{const s=b=>{ve.includes(b.key)&&(x.current=!0)},p=()=>x.current=!1;return document.addEventListener("keydown",s),document.addEventListener("keyup",p),()=>{document.removeEventListener("keydown",s),document.removeEventListener("keyup",p)}},[]),e.jsx(ae,{asChild:!0,...m,focusable:!n,active:u,children:e.jsx(T,{disabled:n,required:t.required,checked:u,...c,...o,name:t.name,ref:f,onCheck:()=>t.onValueChange(o.value),onKeyDown:_(s=>{s.key==="Enter"&&s.preventDefault()}),onFocus:_(o.onFocus,()=>{var s;x.current&&((s=v.current)==null||s.click())})})})});Z.displayName=Q;var Re="RadioGroupIndicator",ee=d.forwardRef((a,i)=>{const{__scopeRadioGroup:r,...l}=a,o=Y(r);return e.jsx(H,{...o,...l,ref:i})});ee.displayName=Re;var be=J,ge=Z,je=ee;function oe({className:a,...i}){return e.jsx(be,{"data-slot":"radio-group",className:z("grid gap-3",a),...i})}function h({className:a,...i}){return e.jsx(ge,{"data-slot":"radio-group-item",className:z("aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 dark:disabled:opacity-40",a),...i,children:e.jsx(je,{"data-slot":"radio-group-indicator",className:"relative flex size-3.5 items-center justify-center",children:e.jsx(le,{className:"fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"})})})}oe.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};h.__docgenInfo={description:"",methods:[],displayName:"RadioGroupItem"};const Ue={title:"Atoms/RadioGroup",component:oe,parameters:{layout:"centered"},tags:["autodocs"]},I={args:{defaultValue:"option1",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(h,{value:"option1",id:"option1"}),e.jsx(R,{htmlFor:"option1",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(h,{value:"option2",id:"option2"}),e.jsx(R,{htmlFor:"option2",children:"Option 2"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(h,{value:"option3",id:"option3"}),e.jsx(R,{htmlFor:"option3",children:"Option 3"})]})]})}},N={args:{defaultValue:"option1",disabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(h,{value:"option1",id:"disabled1"}),e.jsx(R,{htmlFor:"disabled1",children:"Disabled Option 1"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(h,{value:"option2",id:"disabled2"}),e.jsx(R,{htmlFor:"disabled2",children:"Disabled Option 2"})]})]})}},j={args:{defaultValue:"option1",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(h,{value:"option1",id:"invalid1","aria-invalid":!0}),e.jsx(R,{htmlFor:"invalid1",children:"Invalid Option"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(h,{value:"option2",id:"invalid2"}),e.jsx(R,{htmlFor:"invalid2",children:"Valid Option"})]})]})}};var F,w,L;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultValue: 'option1',
    children: <>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option3" id="option3" />
          <Label htmlFor="option3">Option 3</Label>
        </div>
      </>
  }
}`,...(L=(w=I.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var O,P,k;N.parameters={...N.parameters,docs:{...(O=N.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    defaultValue: 'option1',
    disabled: true,
    children: <>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="disabled1" />
          <Label htmlFor="disabled1">Disabled Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="disabled2" />
          <Label htmlFor="disabled2">Disabled Option 2</Label>
        </div>
      </>
  }
}`,...(k=(P=N.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var S,D,A,V,M;j.parameters={...j.parameters,docs:{...(S=j.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    defaultValue: 'option1',
    children: <>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="invalid1" aria-invalid />
          <Label htmlFor="invalid1">Invalid Option</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="invalid2" />
          <Label htmlFor="invalid2">Valid Option</Label>
        </div>
      </>
  }
}`,...(A=(D=j.parameters)==null?void 0:D.docs)==null?void 0:A.source},description:{story:"`aria-invalid` 를 넘긴 항목은 destructive 테두리·링으로 오류 상태를 표시한다.",...(M=(V=j.parameters)==null?void 0:V.docs)==null?void 0:M.description}}};const He=["Default","Disabled","Invalid"];export{I as Default,N as Disabled,j as Invalid,He as __namedExportsOrder,Ue as default};
