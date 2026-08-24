import{j as d}from"./iframe-D1zcNpR6.js";import{S as T}from"./switch-BoXXRfUv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DW48STyt.js";import"./index-1Mm1CGHb.js";import"./index--CsRPePo.js";import"./index-BWesfKH1.js";import"./index-CI7ycuOB.js";import"./index-BsiW0TuZ.js";import"./index-ypquQVYa.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";const V={title:"Atoms/Switch",component:T,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}},decorators:[n=>d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(n,{}),d.jsx("label",{children:"Toggle Switch"})]})]},r={args:{}},s={args:{checked:!0}},a={args:{disabled:!0}},o={args:{disabled:!0,checked:!0}},t={args:{onCheckedChange:n=>{console.log("Switch toggled:",n)}}},c={args:{size:"sm",checked:!0}},e={args:{label:"Notifications",checked:!0}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,u,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,k,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(b=(k=a.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var S,C,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...(f=(C=o.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var x,w,D;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    onCheckedChange: (checked: boolean) => {
      console.log('Switch toggled:', checked);
    }
  }
}`,...(D=(w=t.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var j,y,W;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    checked: true
  }
}`,...(W=(y=c.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var N,O,z,E,L;e.parameters={...e.parameters,docs:{...(N=e.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    checked: true
  }
}`,...(z=(O=e.parameters)==null?void 0:O.docs)==null?void 0:z.source},description:{story:"`label` prop 을 넘기면 Switch 자체가 라벨을 렌더하고,\nchecked/unchecked 상태에 따라 라벨 색이 바뀐다\n(peer-data-[state=checked] → primary, unchecked → muted).",...(L=(E=e.parameters)==null?void 0:E.docs)==null?void 0:L.description}}};const X=["Default","Checked","Disabled","DisabledChecked","WithOnChange","Small","WithLabel"];export{s as Checked,r as Default,a as Disabled,o as DisabledChecked,c as Small,e as WithLabel,t as WithOnChange,X as __namedExportsOrder,V as default};
