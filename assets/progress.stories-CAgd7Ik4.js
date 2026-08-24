import{r as p,j as c}from"./iframe-D1zcNpR6.js";import{P as C}from"./progress-vlrO5Gts.js";import"./preload-helper-Dp1pzeXC.js";import"./index--CsRPePo.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-1Mm1CGHb.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";const H={title:"Atoms/Progress",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}}},decorators:[n=>c.jsx("div",{className:"w-sm space-y-1",children:c.jsx(n,{})})]},e={args:{value:40}},r={args:{value:0}},s={args:{value:100}},a={args:{value:60,className:"h-4"}},t={args:{indeterminate:!0}},o={render:()=>{const[n,D]=p.useState(13);return p.useEffect(()=>{const F=setInterval(()=>{D(m=>m>=100?0:m+1)},100);return()=>{clearInterval(F)}},[]),c.jsx(C,{value:n})}};var u,l,i;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 40
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,g,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,f,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var P,y,E;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 60,
    className: 'h-4'
  }
}`,...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var I,j,h;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(h=(j=t.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var A,N,R;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = React.useState(13);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prevProgress => prevProgress >= 100 ? 0 : prevProgress + 1);
      }, 100);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return <Progress value={progress} />;
  }
}`,...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const J=["Default","Empty","Full","CustomStyle","Indeterminate","Animated"];export{o as Animated,a as CustomStyle,e as Default,r as Empty,s as Full,t as Indeterminate,J as __namedExportsOrder,H as default};
