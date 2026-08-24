import{a as ta,r as p,j as e}from"./iframe-D1zcNpR6.js";import{c as na}from"./index--CsRPePo.js";import{u as sa}from"./index-CZXvctcB.js";import{u as C}from"./index-CI7ycuOB.js";import{P as L}from"./index-2Le0S55P.js";import{c as _}from"./common-DbPgu20d.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-1Mm1CGHb.js";import"./clsx-B-dksMZM.js";var I={exports:{}},F={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R;function oa(){if(R)return F;R=1;var a=ta();function r(n,o){return n===o&&(n!==0||1/n===1/o)||n!==n&&o!==o}var c=typeof Object.is=="function"?Object.is:r,s=a.useState,i=a.useEffect,t=a.useLayoutEffect,f=a.useDebugValue;function d(n,o){var h=o(),y=s({inst:{value:h,getSnapshot:o}}),m=y[0].inst,E=y[1];return t(function(){m.value=h,m.getSnapshot=o,u(m)&&E({inst:m})},[n,h,o]),i(function(){return u(m)&&E({inst:m}),n(function(){u(m)&&E({inst:m})})},[n]),f(h),h}function u(n){var o=n.getSnapshot;n=n.value;try{var h=o();return!c(n,h)}catch{return!0}}function g(n,o){return o()}var b=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?g:d;return F.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:b,F}var z;function ca(){return z||(z=1,I.exports=oa()),I.exports}var ia=ca();function da(){return ia.useSyncExternalStore(ua,()=>!0,()=>!1)}function ua(){return()=>{}}var w="Avatar",[la]=na(w),[ma,X]=la(w),Y=p.forwardRef((a,r)=>{const{__scopeAvatar:c,...s}=a,[i,t]=p.useState("idle");return e.jsx(ma,{scope:c,imageLoadingStatus:i,onImageLoadingStatusChange:t,children:e.jsx(L.span,{...s,ref:r})})});Y.displayName=w;var Z="AvatarImage",aa=p.forwardRef((a,r)=>{const{__scopeAvatar:c,src:s,onLoadingStatusChange:i=()=>{},...t}=a,f=X(Z,c),d=pa(s,t),u=sa(g=>{i(g),f.onImageLoadingStatusChange(g)});return C(()=>{d!=="idle"&&u(d)},[d,u]),d==="loaded"?e.jsx(L.img,{...t,ref:r,src:s}):null});aa.displayName=Z;var ea="AvatarFallback",ra=p.forwardRef((a,r)=>{const{__scopeAvatar:c,delayMs:s,...i}=a,t=X(ea,c),[f,d]=p.useState(s===void 0);return p.useEffect(()=>{if(s!==void 0){const u=window.setTimeout(()=>d(!0),s);return()=>window.clearTimeout(u)}},[s]),f&&t.imageLoadingStatus!=="loaded"?e.jsx(L.span,{...i,ref:r}):null});ra.displayName=ea;function W(a,r){return a?r?(a.src!==r&&(a.src=r),a.complete&&a.naturalWidth>0?"loaded":"loading"):"error":"idle"}function pa(a,{referrerPolicy:r,crossOrigin:c}){const s=da(),i=p.useRef(null),t=s?(i.current||(i.current=new window.Image),i.current):null,[f,d]=p.useState(()=>W(t,a));return C(()=>{d(W(t,a))},[t,a]),C(()=>{const u=n=>()=>{d(n)};if(!t)return;const g=u("loaded"),b=u("error");return t.addEventListener("load",g),t.addEventListener("error",b),r&&(t.referrerPolicy=r),typeof c=="string"&&(t.crossOrigin=c),()=>{t.removeEventListener("load",g),t.removeEventListener("error",b)}},[t,c,r]),f}var va=Y,fa=aa,ga=ra;function l({className:a,...r}){return e.jsx(va,{"data-slot":"avatar",className:_("relative flex size-8 shrink-0 overflow-hidden rounded-full",a),...r})}function A({className:a,...r}){return e.jsx(fa,{"data-slot":"avatar-image",className:_("aspect-square size-full",a),...r})}function v({className:a,...r}){return e.jsx(ga,{"data-slot":"avatar-fallback",className:_("bg-muted flex size-full items-center justify-center rounded-full",a),...r})}l.__docgenInfo={description:"",methods:[],displayName:"Avatar"};A.__docgenInfo={description:"",methods:[],displayName:"AvatarImage"};v.__docgenInfo={description:"",methods:[],displayName:"AvatarFallback"};const Fa={title:"Atoms/Avatar",component:l,parameters:{layout:"centered"},tags:["autodocs"]},x={render:()=>e.jsxs(l,{children:[e.jsx(A,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),e.jsx(v,{children:"CN"})]})},S={render:()=>e.jsxs(l,{children:[e.jsx(A,{src:"broken-image.jpg",alt:"@broken"}),e.jsx(v,{children:"JD"})]})},k={render:()=>e.jsxs(l,{className:"size-16",children:[e.jsx(A,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),e.jsx(v,{children:"CN"})]})},j={render:()=>e.jsxs(l,{children:[e.jsx(A,{src:"broken-image.jpg",alt:"@custom"}),e.jsx(v,{className:"bg-primary text-primary-foreground",children:"AI"})]})},N={render:()=>e.jsxs("div",{className:"flex -space-x-2",children:[e.jsxs(l,{className:"border-background border-2",children:[e.jsx(A,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),e.jsx(v,{children:"CN"})]}),e.jsx(l,{className:"border-background border-2",children:e.jsx(v,{children:"JD"})}),e.jsx(l,{className:"border-background border-2",children:e.jsx(v,{children:"AI"})})]})};var q,D,M;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...(M=(D=x.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var P,$,G;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="broken-image.jpg" alt="@broken" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
}`,...(G=($=S.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,T,U;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Avatar className="size-16">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...(U=(T=k.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var V,H,O;j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="broken-image.jpg" alt="@custom" />
      <AvatarFallback className="bg-primary text-primary-foreground">
        AI
      </AvatarFallback>
    </Avatar>
}`,...(O=(H=j.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var B,K,Q;N.parameters={...N.parameters,docs:{...(B=N.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex -space-x-2">
      <Avatar className="border-background border-2">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="border-background border-2">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="border-background border-2">
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
    </div>
}`,...(Q=(K=N.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ca=["WithImage","WithFallback","CustomSize","WithCustomFallback","Group"];export{k as CustomSize,N as Group,j as WithCustomFallback,S as WithFallback,x as WithImage,Ca as __namedExportsOrder,Fa as default};
