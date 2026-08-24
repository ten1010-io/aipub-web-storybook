import{r as Z,j as e}from"./iframe-D1zcNpR6.js";import{c as x}from"./common-DbPgu20d.js";import{C as ee}from"./checkbox-CS_7gjC8.js";import{L as ae}from"./label-63cY3faU.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./index-1Mm1CGHb.js";import"./index--CsRPePo.js";import"./index-DW48STyt.js";import"./index-BWesfKH1.js";import"./index-CI7ycuOB.js";import"./index-BsiW0TuZ.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./check-Bu0SrguS.js";import"./createLucideIcon-CNO9LAd6.js";function o({className:a,checkboxClassName:M,id:P,label:Q,description:m,"aria-describedby":U,"aria-labelledby":V,...X}){const Y=Z.useId(),t=P??Y,b=`${t}-label`,u=m!=null,h=u?`${t}-description`:void 0;return e.jsxs(ae,{"data-slot":"checkbox-card",className:x("border-input has-[[data-slot=checkbox][data-state=checked]]:border-primary has-[[data-slot=checkbox][data-state=checked]]:bg-primary/10 has-[[data-slot=checkbox][data-state=indeterminate]]:border-primary has-[[data-slot=checkbox][data-state=indeterminate]]:bg-primary/10 has-[[data-slot=checkbox]:focus-visible]:border-ring has-[[data-slot=checkbox]:focus-visible]:ring-ring/50 flex cursor-pointer items-start gap-2.5 rounded-lg border p-3 font-normal transition-[color,background-color,box-shadow] has-[[data-slot=checkbox]:disabled]:cursor-not-allowed has-[[data-slot=checkbox]:disabled]:opacity-50 has-[[data-slot=checkbox]:focus-visible]:ring-[3px] dark:has-[[data-slot=checkbox]:disabled]:opacity-40",a),htmlFor:t,children:[e.jsx(ee,{id:t,className:x("focus-visible:border-input focus-visible:ring-0 disabled:opacity-100 dark:disabled:opacity-100",M),"aria-labelledby":g(V,b),"aria-describedby":g(U,h),...X}),e.jsxs("span",{className:"flex min-w-0 flex-1 flex-col gap-1.5",children:[e.jsx("span",{id:b,className:"text-sm leading-none font-medium",children:Q}),u&&e.jsx("span",{id:h,className:"text-muted-foreground text-sm",children:m})]})]})}function g(...a){return a.filter(Boolean).join(" ")||void 0}o.__docgenInfo={description:"박스 전체가 클릭 대상인 체크박스 (Figma `Type=Box`).\n\n선택 상태는 Radix 의 `data-state` 를 CSS `:has()` 로 읽어 외곽에 반영한다.\n별도 `selected` prop 을 두지 않아 controlled/uncontrolled 가 어긋나지 않는다.\n박스 폭·높이는 `className` 으로 조절한다.\n\n`label` / `description` 에 버튼·링크 등 인터랙티브 요소를 넣지 않는다 —\n`<label>` 내부 클릭이 체크 토글로 전달돼 두 인터랙션이 충돌한다.",methods:[],displayName:"CheckboxCard",props:{checkboxClassName:{required:!1,tsType:{name:"string"},description:"내부 체크박스에 적용할 클래스 (외곽 박스는 className)"},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ye={title:"Atoms/CheckboxCard",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}},args:{label:"Checkbox Text",description:"This is a checkbox description."}},c={args:{}},d={args:{checked:!0}},i={args:{checked:"indeterminate"}},n={args:{description:void 0}},l={args:{disabled:!0}},p={args:{disabled:!0,checked:!0}},r={args:{className:"w-80",description:"박스 크기는 사용하는 레이아웃에 따라 길이 및 높이 조절이 가능합니다. 긴 설명은 자동으로 줄바꿈됩니다."}},s={args:{},render:a=>e.jsxs("div",{className:"flex w-80 flex-col gap-3",children:[e.jsx(o,{...a,defaultChecked:!0,label:"선택된 항목"}),e.jsx(o,{...a,label:"선택되지 않은 항목"}),e.jsx(o,{...a,disabled:!0,label:"비활성 항목"})]})};var k,f,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {}
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,N,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var v,R,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    checked: 'indeterminate'
  }
}`,...(S=(R=i.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var w,D,I;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    description: undefined
  }
}`,...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,F,W;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(W=(F=l.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var _,q,E;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...(E=(q=p.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var B,G,L,$,A;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    className: 'w-80',
    description: '박스 크기는 사용하는 레이아웃에 따라 길이 및 높이 조절이 가능합니다. 긴 설명은 자동으로 줄바꿈됩니다.'
  }
}`,...(L=(G=r.parameters)==null?void 0:G.docs)==null?void 0:L.source},description:{story:"박스 폭·높이는 className 으로 조절한다 (Figma: 레이아웃에 따라 조절 가능).",...(A=($=r.parameters)==null?void 0:$.docs)==null?void 0:A.description}}};var O,z,H,J,K;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex w-80 flex-col gap-3">
      <CheckboxCard {...args} defaultChecked label="선택된 항목" />
      <CheckboxCard {...args} label="선택되지 않은 항목" />
      <CheckboxCard {...args} disabled label="비활성 항목" />
    </div>
}`,...(H=(z=s.parameters)==null?void 0:z.docs)==null?void 0:H.source},description:{story:"여러 장을 나란히 놓았을 때의 선택 상태 대비.",...(K=(J=s.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};const Ne=["Default","Checked","Indeterminate","WithoutDescription","Disabled","DisabledChecked","FixedWidth","Group"];export{d as Checked,c as Default,l as Disabled,p as DisabledChecked,r as FixedWidth,s as Group,i as Indeterminate,n as WithoutDescription,Ne as __namedExportsOrder,ye as default};
