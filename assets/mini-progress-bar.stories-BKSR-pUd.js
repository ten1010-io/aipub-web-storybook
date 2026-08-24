import{r as B,j as r}from"./iframe-D1zcNpR6.js";import{M as e}from"./mini-progress-bar-bIut60_z.js";import"./preload-helper-Dp1pzeXC.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";const Lr={title:"Charts/MiniProgressBar",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1}},shape:{control:{type:"select"},options:["rounded","square"]},size:{control:{type:"select"},options:["md","lg"]},backgroundColor:{control:{type:"color"}},foregroundColor:{control:{type:"color"}},borderColor:{control:{type:"color"}},animationDuration:{control:{type:"range",min:0,max:2e3,step:100}}},decorators:[j=>r.jsx("div",{className:"w-96",children:r.jsx(j,{})})]},s={args:{progress:60}},o={args:{progress:0}},a={args:{progress:100}},n={args:{progress:50}},t={args:{progress:15}},c={args:{progress:85}},d={args:{progress:60,shape:"rounded"}},i={args:{progress:60,shape:"square"}},m={args:{progress:60,size:"md"}},p={args:{progress:60,size:"lg"}},g={args:{progress:60,backgroundColor:"#E5E7EB",foregroundColor:"#FDE68A",borderColor:"#F59E0B"}},l={args:{progress:60,backgroundColor:"#F1F2F6",foregroundColor:"#B8E3BE",borderColor:"#4DB95D"}},u={args:{progress:60,backgroundColor:"#F1F2F6",foregroundColor:"#FECACA",borderColor:"#EF4444"}},F={args:{progress:60,backgroundColor:"#F1F2F6",foregroundColor:"#E9D5FF",borderColor:"#8B5CF6"}},C={args:{progress:60,animationDuration:100}},x={args:{progress:60,animationDuration:1e3}},b={args:{progress:60,animationDuration:0}},f={render:()=>{const[j,Nr]=B.useState(0);return B.useEffect(()=>{const kr=setInterval(()=>{Nr(E=>E>=100?0:E+5)},200);return()=>{clearInterval(kr)}},[]),r.jsx(e,{progress:j,shape:"rounded",size:"md",backgroundColor:"#F1F2F6",foregroundColor:"#C9DAFF",borderColor:"#4B82FF",animationDuration:300})}},h={render:()=>r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"mb-1 flex justify-between text-sm",children:[r.jsx("span",{children:"CPU 사용률"}),r.jsx("span",{children:"75%"})]}),r.jsx(e,{progress:75,backgroundColor:"#F1F2F6",foregroundColor:"#FECACA",borderColor:"#EF4444"})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"mb-1 flex justify-between text-sm",children:[r.jsx("span",{children:"메모리 사용률"}),r.jsx("span",{children:"45%"})]}),r.jsx(e,{progress:45,backgroundColor:"#F1F2F6",foregroundColor:"#FDE68A",borderColor:"#F59E0B"})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"mb-1 flex justify-between text-sm",children:[r.jsx("span",{children:"디스크 사용률"}),r.jsx("span",{children:"90%"})]}),r.jsx(e,{progress:90,backgroundColor:"#F1F2F6",foregroundColor:"#B8E3BE",borderColor:"#4DB95D"})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"mb-1 flex justify-between text-sm",children:[r.jsx("span",{children:"네트워크 사용률"}),r.jsx("span",{children:"30%"})]}),r.jsx(e,{progress:30,backgroundColor:"#F1F2F6",foregroundColor:"#C9DAFF",borderColor:"#4B82FF"})]})]})},v={render:()=>r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"mb-2 text-sm font-medium",children:"Medium Size (md)"}),r.jsx(e,{progress:60,size:"md"})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"mb-2 text-sm font-medium",children:"Large Size (lg)"}),r.jsx(e,{progress:60,size:"lg"})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"mb-2 text-sm font-medium",children:"Custom Height"}),r.jsx(e,{progress:60,className:"h-2",size:"md"})]})]})};var S,D,P;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    progress: 60
  }
}`,...(P=(D=s.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var A,y,z;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    progress: 0
  }
}`,...(z=(y=o.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var N,k,M;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    progress: 100
  }
}`,...(M=(k=a.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var w,R,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    progress: 50
  }
}`,...(T=(R=n.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var H,L,q;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    progress: 15
  }
}`,...(q=(L=t.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var I,G,U;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    progress: 85
  }
}`,...(U=(G=c.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var _,O,J;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    progress: 60,
    shape: 'rounded'
  }
}`,...(J=(O=d.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var K,Q,V;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    progress: 60,
    shape: 'square'
  }
}`,...(V=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var W,X,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    progress: 60,
    size: 'md'
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    progress: 60,
    size: 'lg'
  }
}`,...(rr=($=p.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,sr,or;g.parameters={...g.parameters,docs:{...(er=g.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    progress: 60,
    backgroundColor: '#E5E7EB',
    foregroundColor: '#FDE68A',
    borderColor: '#F59E0B'
  }
}`,...(or=(sr=g.parameters)==null?void 0:sr.docs)==null?void 0:or.source}}};var ar,nr,tr;l.parameters={...l.parameters,docs:{...(ar=l.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    progress: 60,
    backgroundColor: '#F1F2F6',
    foregroundColor: '#B8E3BE',
    borderColor: '#4DB95D'
  }
}`,...(tr=(nr=l.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var cr,dr,ir;u.parameters={...u.parameters,docs:{...(cr=u.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    progress: 60,
    backgroundColor: '#F1F2F6',
    foregroundColor: '#FECACA',
    borderColor: '#EF4444'
  }
}`,...(ir=(dr=u.parameters)==null?void 0:dr.docs)==null?void 0:ir.source}}};var mr,pr,gr;F.parameters={...F.parameters,docs:{...(mr=F.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    progress: 60,
    backgroundColor: '#F1F2F6',
    foregroundColor: '#E9D5FF',
    borderColor: '#8B5CF6'
  }
}`,...(gr=(pr=F.parameters)==null?void 0:pr.docs)==null?void 0:gr.source}}};var lr,ur,Fr;C.parameters={...C.parameters,docs:{...(lr=C.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    progress: 60,
    animationDuration: 100
  }
}`,...(Fr=(ur=C.parameters)==null?void 0:ur.docs)==null?void 0:Fr.source}}};var Cr,xr,br;x.parameters={...x.parameters,docs:{...(Cr=x.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  args: {
    progress: 60,
    animationDuration: 1000
  }
}`,...(br=(xr=x.parameters)==null?void 0:xr.docs)==null?void 0:br.source}}};var fr,hr,vr;b.parameters={...b.parameters,docs:{...(fr=b.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    progress: 60,
    animationDuration: 0
  }
}`,...(vr=(hr=b.parameters)==null?void 0:hr.docs)==null?void 0:vr.source}}};var jr,Er,Br;f.parameters={...f.parameters,docs:{...(jr=f.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prevProgress => prevProgress >= 100 ? 0 : prevProgress + 5);
      }, 200);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return <MiniProgressBar progress={progress} shape="rounded" size="md" backgroundColor="#F1F2F6" foregroundColor="#C9DAFF" borderColor="#4B82FF" animationDuration={300} />;
  }
}`,...(Br=(Er=f.parameters)==null?void 0:Er.docs)==null?void 0:Br.source}}};var Sr,Dr,Pr;h.parameters={...h.parameters,docs:{...(Sr=h.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <div className="mb-1 flex justify-between text-sm">
          <span>CPU 사용률</span>
          <span>75%</span>
        </div>
        <MiniProgressBar progress={75} backgroundColor="#F1F2F6" foregroundColor="#FECACA" borderColor="#EF4444" />
      </div>
      <div>
        <div className="mb-1 flex justify-between text-sm">
          <span>메모리 사용률</span>
          <span>45%</span>
        </div>
        <MiniProgressBar progress={45} backgroundColor="#F1F2F6" foregroundColor="#FDE68A" borderColor="#F59E0B" />
      </div>
      <div>
        <div className="mb-1 flex justify-between text-sm">
          <span>디스크 사용률</span>
          <span>90%</span>
        </div>
        <MiniProgressBar progress={90} backgroundColor="#F1F2F6" foregroundColor="#B8E3BE" borderColor="#4DB95D" />
      </div>
      <div>
        <div className="mb-1 flex justify-between text-sm">
          <span>네트워크 사용률</span>
          <span>30%</span>
        </div>
        <MiniProgressBar progress={30} backgroundColor="#F1F2F6" foregroundColor="#C9DAFF" borderColor="#4B82FF" />
      </div>
    </div>
}`,...(Pr=(Dr=h.parameters)==null?void 0:Dr.docs)==null?void 0:Pr.source}}};var Ar,yr,zr;v.parameters={...v.parameters,docs:{...(Ar=v.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-medium">Medium Size (md)</h3>
        <MiniProgressBar progress={60} size="md" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Large Size (lg)</h3>
        <MiniProgressBar progress={60} size="lg" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Custom Height</h3>
        <MiniProgressBar progress={60} className="h-2" size="md" />
      </div>
    </div>
}`,...(zr=(yr=v.parameters)==null?void 0:yr.docs)==null?void 0:zr.source}}};const qr=["Default","Empty","Full","Half","LowProgress","HighProgress","Rounded","Square","MediumSize","LargeSize","CustomColors","GreenTheme","RedTheme","PurpleTheme","FastAnimation","SlowAnimation","NoAnimation","Animated","MultipleProgressBars","DifferentSizes"];export{f as Animated,g as CustomColors,s as Default,v as DifferentSizes,o as Empty,C as FastAnimation,a as Full,l as GreenTheme,n as Half,c as HighProgress,p as LargeSize,t as LowProgress,m as MediumSize,h as MultipleProgressBars,b as NoAnimation,F as PurpleTheme,u as RedTheme,d as Rounded,x as SlowAnimation,i as Square,qr as __namedExportsOrder,Lr as default};
