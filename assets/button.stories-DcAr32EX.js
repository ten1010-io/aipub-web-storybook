import{j as e,L as ve}from"./iframe-D1zcNpR6.js";import{B as r}from"./button-CqDsn7PQ.js";import{P as ge}from"./plus-Ck7a8p7l.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";const ye={title:"Atoms/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","destructive-outline","outline","secondary","ghost","link"]},size:{control:"select",options:["default","sm","lg","icon"]},children:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean"}}},n={args:{children:"Button",variant:"default",size:"default"}},t={args:{children:"Delete",variant:"destructive"}},a={args:{children:"Delete",variant:"destructive-outline"}},s={args:{children:"Outline",variant:"outline"}},o={args:{children:"Secondary",variant:"secondary"}},i={args:{children:"Ghost",variant:"ghost"}},c={args:{children:"Link Button",variant:"link"}},l={args:{children:"Small",size:"sm"}},d={args:{children:"Large",size:"lg"}},u={args:{children:"Disabled",disabled:!0}},m={args:{children:"Loading",loading:!0}},p={render:()=>e.jsx(r,{asChild:!0,children:e.jsx(ve,{to:"/somewhere",children:"Link as Button"})})},g={args:{size:"icon","aria-label":"Add",children:e.jsx(ge,{})}},v={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{children:"Default"}),e.jsx(r,{variant:"destructive",children:"Destructive"}),e.jsx(r,{variant:"destructive-outline",children:"Destructive Outline"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"link",children:"Link"})]})},h={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"default",children:"Default"}),e.jsx(r,{size:"lg",children:"Large"}),e.jsx(r,{size:"icon","aria-label":"Add",children:e.jsx(ge,{})})]})},B={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{loading:!0,children:"Default"}),e.jsx(r,{variant:"destructive",loading:!0,children:"Destructive"}),e.jsx(r,{variant:"outline",loading:!0,children:"Outline"}),e.jsx(r,{variant:"secondary",loading:!0,children:"Secondary"})]})};var x,S,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default'
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var D,j,L;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'destructive'
  }
}`,...(L=(j=t.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var z,y,k,b,O;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'destructive-outline'
  }
}`,...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.source},description:{story:"삭제·제거 등 되돌릴 수 없는 액션의 트리거. 최종 확인은 confirm 의 solid destructive 몫.",...(O=(b=a.parameters)==null?void 0:b.docs)==null?void 0:O.description}}};var A,w,G;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Outline',
    variant: 'outline'
  }
}`,...(G=(w=s.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var N,C,P;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...(P=(C=o.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var V,R,E;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Ghost',
    variant: 'ghost'
  }
}`,...(E=(R=i.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var I,_,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Link Button',
    variant: 'link'
  }
}`,...(T=(_=c.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var $,q,F;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: 'Small',
    size: 'sm'
  }
}`,...(F=(q=l.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var H,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Large',
    size: 'lg'
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Loading',
    loading: true
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Button asChild>
      <RouterLink to="/somewhere">Link as Button</RouterLink>
    </Button>
}`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,te;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    size: 'icon',
    'aria-label': 'Add',
    children: <Plus />
  }
}`,...(te=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,oe,ie;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="destructive-outline">Destructive Outline</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...(ie=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,le,de;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Add">
        <Plus />
      </Button>
    </div>
}`,...(de=(le=h.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,pe;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Button loading>Default</Button>
      <Button variant="destructive" loading>
        Destructive
      </Button>
      <Button variant="outline" loading>
        Outline
      </Button>
      <Button variant="secondary" loading>
        Secondary
      </Button>
    </div>
}`,...(pe=(me=B.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const ke=["Default","Destructive","DestructiveOutline","Outline","Secondary","Ghost","Link","Small","Large","Disabled","Loading","AsChild","Icon","AllVariants","AllSizes","LoadingVariants"];export{h as AllSizes,v as AllVariants,p as AsChild,n as Default,t as Destructive,a as DestructiveOutline,u as Disabled,i as Ghost,g as Icon,d as Large,c as Link,m as Loading,B as LoadingVariants,s as Outline,o as Secondary,l as Small,ke as __namedExportsOrder,ye as default};
