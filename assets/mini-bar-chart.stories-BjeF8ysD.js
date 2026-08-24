import{r as v,j as a}from"./iframe-D1zcNpR6.js";import{M as r}from"./mini-bar-chart-Cc_Beod8.js";import"./preload-helper-Dp1pzeXC.js";import"./dayjs.min-hbvf79Sy.js";import"./generateCategoricalChart-BJUcEAIy.js";import"./clsx-B-dksMZM.js";import"./tiny-invariant-BaFNuDhB.js";import"./BarChart-DOWwPuRQ.js";import"./YAxis-Cfv-7WJ8.js";const da={title:"Charts/MiniBarChart",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:{type:"text"}},fillColor:{control:{type:"color"}},strokeColor:{control:{type:"color"}}},decorators:[t=>a.jsx("div",{className:"h-20 w-96",children:a.jsx(t,{})})]},e=[{date:17040672e5,value:20},{date:17041536e5,value:35},{date:170424e7,value:15},{date:17043264e5,value:60},{date:17044128e5,value:45},{date:17044992e5,value:80},{date:17045856e5,value:25}],X=[{date:17040672e5,value:5},{date:17041536e5,value:8},{date:170424e7,value:3},{date:17043264e5,value:12},{date:17044128e5,value:7},{date:17044992e5,value:15},{date:17045856e5,value:9}],Y=[{date:17040672e5,value:85},{date:17041536e5,value:92},{date:170424e7,value:78},{date:17043264e5,value:95},{date:17044128e5,value:88},{date:17044992e5,value:98},{date:17045856e5,value:90}],Z=[{date:17040672e5,value:45},{date:17041536e5,value:67},{date:170424e7,value:23},{date:17043264e5,value:89},{date:17044128e5,value:12},{date:17044992e5,value:76},{date:17045856e5,value:34}],s={args:{data:e,label:"사용률"}},l={args:{data:X,label:"CPU 사용률"}},o={args:{data:Y,label:"메모리 사용률"}},n={args:{data:Z,label:"네트워크 사용률"}},d={args:{data:e,label:"GPU 사용률",fillColor:"#FDE68A",strokeColor:"#F59E0B"}},m={args:{data:e,label:"성공률",fillColor:"#B8E3BE",strokeColor:"#4DB95D"}},c={args:{data:e,label:"에러율",fillColor:"#FECACA",strokeColor:"#EF4444"}},i={args:{data:e,label:"응답시간",fillColor:"#E9D5FF",strokeColor:"#8B5CF6"}},u={args:{data:e,label:"실시간 데이터",fillColor:"#C9DAFF",strokeColor:"#4B82FF"},render:t=>{const[q,J]=v.useState(t.data);return v.useEffect(()=>{const K=setInterval(()=>{J(Q=>Q.map(W=>({...W,value:Math.floor(Math.random()*100)})))},2e3);return()=>{clearInterval(K)}},[]),a.jsx(r,{...t,data:q})}},p={args:{data:e,label:"차트"},render:()=>a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-sm font-medium",children:"Small (w-64)"}),a.jsx("div",{className:"h-16 w-64",children:a.jsx(r,{data:e,label:"작은 차트"})})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-sm font-medium",children:"Medium (w-96)"}),a.jsx("div",{className:"h-20 w-96",children:a.jsx(r,{data:e,label:"중간 차트"})})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-sm font-medium",children:"Large (w-full)"}),a.jsx("div",{className:"h-24 w-full",children:a.jsx(r,{data:e,label:"큰 차트"})})]})]})};var h,C,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    label: '사용률'
  }
}`,...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var D,f,b;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: lowValuesData,
    label: 'CPU 사용률'
  }
}`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,F,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: highValuesData,
    label: '메모리 사용률'
  }
}`,...(E=(F=o.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var j,B,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data: randomData,
    label: '네트워크 사용률'
  }
}`,...(w=(B=n.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var S,N,M;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    label: 'GPU 사용률',
    fillColor: '#FDE68A',
    strokeColor: '#F59E0B'
  }
}`,...(M=(N=d.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var k,A,V;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    label: '성공률',
    fillColor: '#B8E3BE',
    strokeColor: '#4DB95D'
  }
}`,...(V=(A=m.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var y,R,T;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    label: '에러율',
    fillColor: '#FECACA',
    strokeColor: '#EF4444'
  }
}`,...(T=(R=c.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var P,G,I;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    label: '응답시간',
    fillColor: '#E9D5FF',
    strokeColor: '#8B5CF6'
  }
}`,...(I=(G=i.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var L,U,z;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    label: '실시간 데이터',
    fillColor: '#C9DAFF',
    strokeColor: '#4B82FF'
  },
  render: args => {
    const [data, setData] = React.useState(args.data);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setData(prevData => prevData.map(item => ({
          ...item,
          value: Math.floor(Math.random() * 100)
        })));
      }, 2000);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return <MiniBarChart {...args} data={data} />;
  }
}`,...(z=(U=u.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var H,_,O;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    label: '차트'
  },
  render: () => <div className="space-y-8">
      <div>
        <h3 className="mb-2 text-sm font-medium">Small (w-64)</h3>
        <div className="h-16 w-64">
          <MiniBarChart data={sampleData} label="작은 차트" />
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Medium (w-96)</h3>
        <div className="h-20 w-96">
          <MiniBarChart data={sampleData} label="중간 차트" />
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Large (w-full)</h3>
        <div className="h-24 w-full">
          <MiniBarChart data={sampleData} label="큰 차트" />
        </div>
      </div>
    </div>
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const ma=["Default","LowValues","HighValues","RandomData","CustomColors","GreenTheme","RedTheme","PurpleTheme","AnimatedData","DifferentSizes"];export{u as AnimatedData,d as CustomColors,s as Default,p as DifferentSizes,m as GreenTheme,o as HighValues,l as LowValues,i as PurpleTheme,n as RandomData,c as RedTheme,ma as __namedExportsOrder,da as default};
