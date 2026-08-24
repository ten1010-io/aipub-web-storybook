import{r as d,j as m}from"./iframe-D1zcNpR6.js";import{G as O}from"./gauge-chart-Zm62lPo0.js";import"./preload-helper-Dp1pzeXC.js";import"./generateCategoricalChart-BJUcEAIy.js";import"./clsx-B-dksMZM.js";import"./tiny-invariant-BaFNuDhB.js";import"./PieChart-z-K4dIWI.js";const X={title:"Charts/GaugeChart",component:O,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{currentValue:{control:{type:"range",min:0,max:100,step:1}},maxValue:{control:{type:"range",min:1,max:200,step:1}},backgroundColor:{control:{type:"color"}},forgroundColor:{control:{type:"color"}},borderColor:{control:{type:"color"}}},decorators:[l=>m.jsx("div",{className:"h-48 w-48",children:m.jsx(l,{})})]},r={args:{currentValue:75,maxValue:100}},e={args:{currentValue:0,maxValue:100}},a={args:{currentValue:100,maxValue:100}},o={args:{currentValue:50,maxValue:100}},t={args:{currentValue:60,maxValue:100,backgroundColor:"#E5E7EB",forgroundColor:"#FDE68A",borderColor:"#F59E0B"}},s={args:{currentValue:150,maxValue:200}},n={args:{currentValue:15,maxValue:100}},u={args:{currentValue:90,maxValue:100}},c={render:()=>{const[l,T]=d.useState(0);return d.useEffect(()=>{const q=setInterval(()=>{T(p=>p>=100?0:p+5)},200);return()=>{clearInterval(q)}},[]),m.jsx(O,{currentValue:l,maxValue:100,backgroundColor:"#F1F2F6",forgroundColor:"#B8E3BE",borderColor:"#4DB95D"})}};var V,g,i;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    currentValue: 75,
    maxValue: 100
  }
}`,...(i=(g=r.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var x,C,E;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    currentValue: 0,
    maxValue: 100
  }
}`,...(E=(C=e.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var f,F,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentValue: 100,
    maxValue: 100
  }
}`,...(S=(F=a.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var b,B,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    currentValue: 50,
    maxValue: 100
  }
}`,...(y=(B=o.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var h,D,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    currentValue: 60,
    maxValue: 100,
    backgroundColor: '#E5E7EB',
    forgroundColor: '#FDE68A',
    borderColor: '#F59E0B'
  }
}`,...(v=(D=t.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var j,k,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    currentValue: 150,
    maxValue: 200
  }
}`,...(A=(k=s.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var G,H,I;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    currentValue: 15,
    maxValue: 100
  }
}`,...(I=(H=n.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var w,R,L;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    currentValue: 90,
    maxValue: 100
  }
}`,...(L=(R=u.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var M,_,N;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [currentValue, setCurrentValue] = React.useState(0);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentValue(prevValue => prevValue >= 100 ? 0 : prevValue + 5);
      }, 200);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return <GaugeChart currentValue={currentValue} maxValue={100} backgroundColor="#F1F2F6" forgroundColor="#B8E3BE" borderColor="#4DB95D" />;
  }
}`,...(N=(_=c.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const Y=["Default","Empty","Full","Half","CustomColors","CustomMaxValue","LowValue","HighValue","Animated"];export{c as Animated,t as CustomColors,s as CustomMaxValue,r as Default,e as Empty,a as Full,o as Half,u as HighValue,n as LowValue,Y as __namedExportsOrder,X as default};
