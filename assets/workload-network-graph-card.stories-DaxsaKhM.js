var ue=Object.defineProperty;var he=(e,n,r)=>n in e?ue(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var W=(e,n,r)=>he(e,typeof n!="symbol"?n+"":n,r);import{r as M,j as t}from"./iframe-D1zcNpR6.js";import{Q as fe,a as ge}from"./QueryClientProvider-jDBHSCoQ.js";import{e as ye,u as xe}from"./use-translation-DtBcGNwE.js";import{u as we}from"./useQuery-BYObVghW.js";import{B as be,L as ke}from"./button-CqDsn7PQ.js";import{S as je}from"./special-card-frame-CV-VveFr.js";import{G as $e}from"./globe-DcvDwvHy.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index-1Mm1CGHb.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./createLucideIcon-CNO9LAd6.js";import"./copy-Dx3dUlfF.js";import"./index-Dp3B9jqt.js";import"./progress-vlrO5Gts.js";import"./select-sNpWBML0.js";import"./index-DwS2aoMe.js";import"./index-BsiW0TuZ.js";import"./layout-DJYywupw.js";import"./translation-DqiiAkod.js";import"./react-Ivnay8U8.js";import"./truncated-text-DY6emO6I.js";import"./chevron-down-DTDP-A0u.js";import"./chevron-up-DHHewRAk.js";import"./confirm-DJKcmVmi.js";import"./popover-CIjp3jnJ.js";import"./monitoring-format-Dy56Avfc.js";import"./dayjs.min-hbvf79Sy.js";import"./utc-WU5VmP44.js";import"./layers-B7x-9tQB.js";import"./generateCategoricalChart-BJUcEAIy.js";import"./tiny-invariant-BaFNuDhB.js";import"./AreaChart-CsJAfy96.js";import"./YAxis-Cfv-7WJ8.js";import"./info-12y5e0Rs.js";import"./grip-vertical-DLaozehc.js";const ve=ye.MONITORING_API_URL;class Ne extends Error{constructor(r,a,u){super(u??`Monitoring API error: ${r} ${a}`);W(this,"status");W(this,"statusText");this.name="MonitoringApiError",this.status=r,this.statusText=a}}async function Re(e){const n=await fetch(`${ve}${e}`);if(!n.ok)throw new Ne(n.status,n.statusText);return n.json()}function Te({namespace:e,kind:n,name:r,start:a,end:u}){const f=new URLSearchParams({start:a,end:u});return Re(`/api/v1/workloads/${encodeURIComponent(e)}/${encodeURIComponent(n)}/${encodeURIComponent(r)}/network-map?${f}`)}const Se={WORKLOAD_NETWORK_MAP:"domains/workload_network_map"};function Ee(e,n){return we({queryKey:[Se.WORKLOAD_NETWORK_MAP,e],queryFn:()=>Te(e),...n})}const ae=1e3,Me=640,I=48,k=200,Q=64,Ce=80,Oe=160,Ae=840,j=18,$=13;function Pe(e,n,r){const a=r-2*I;return I+a*(e+.5)/Math.max(n,1)}function We(e,n){const r=e/Math.max(n,1);return 2+Math.min(4,Math.max(1,Math.ceil(r*4)))}function Le(e,n,r,a){const u=(r-e)/2;return`M ${e} ${n} C ${e+u} ${n}, ${r-u} ${a}, ${r} ${a}`}function v(e,n){const r=e/Math.max(1,n);return r>=10?Math.round(r).toLocaleString():e>0&&r<.005?"< 0.01":String(parseFloat(r.toFixed(2)))}function C(e){if(e==null)return"-";const n=e/1e6;return n<1?"< 1ms":n>=1e3?`${parseFloat((n/1e3).toFixed(1))}s`:`${Math.round(n)}ms`}const L=ae/2,N=210,J=88;function qe(e,n,r,a){return{x:r==="ingress"?Oe:Ae,y:Pe(e,n,a)}}function Fe(e){const n=e.http_responses??0;return n?`${parseFloat(((e.http_errors??0)/n*100).toFixed(2))}%`:"-"}const Ie=1,De=5,Ue=100;function Ge(e){const n=e.http_responses??0;if(n<Ue)return;const r=(e.http_errors??0)/n*100;if(r>=De)return"text-destructive font-medium";if(r>=Ie)return"text-amber-500 font-medium"}function U(e){return e.endpoints!=null}function D(e,n){return U(e)?n("monitoring.workload_panel.network_map_world"):e.name}function Ke(e,n){const r=e.http_responses??0;return D(e,n)+(e.namespace?` (${e.namespace})`:"")+(U(e)?`
${n("monitoring.workload_panel.network_map_world_endpoints",{count:e.endpoints})}`:"")+`
flows: ${e.flows.toLocaleString()}`+(e.ports.length?`
ports: ${e.ports.join(", ")}`:"")+(r?`
errors: ${(e.http_errors??0).toLocaleString()}/${r.toLocaleString()}`:"")+(e.latency_ns_p95!=null?`
latency: ${C(e.latency_ns_p50)} / ${C(e.latency_ns_p95)} / ${C(e.latency_ns_p99)} (p50/p95/p99)`:"")}function ie({namespace:e,kind:n,name:r,open:a,tsStart:u,tsEnd:f,description:pe,dragHandleProps:le,t:i}){const{data:p,isFetching:G,isError:ce,refetch:de}=Ee({namespace:e,kind:n,name:r,start:u,end:f},{enabled:a,placeholderData:s=>s}),K=M.useRef(null),[g,A]=M.useState(null);function H(s,m){const _=K.current;if(!_)return;const l=_.getBoundingClientRect();A({x:s.clientX-l.left+_.scrollLeft,y:s.clientY-l.top,text:m})}const c=M.useMemo(()=>{if(!p)return null;const s=p.peers.filter(o=>o.direction==="ingress").sort((o,d)=>d.flows-o.flows),m=p.peers.filter(o=>o.direction==="egress").sort((o,d)=>d.flows-o.flows),_=Math.max(1,...p.peers.map(o=>o.flows)),l=Math.max(Me,Math.max(s.length,m.length)*Ce+2*I),h=(o,d)=>o.map((P,b)=>({peer:P,...qe(b,o.length,d,l)}));return{nodes:[...h(s,"ingress"),...h(m,"egress")],maxFlows:_,vh:l,cy:l/2,ingressFlows:s.reduce((o,d)=>o+d.flows,0),egressFlows:m.reduce((o,d)=>o+d.flows,0)}},[p]),y=(p==null?void 0:p.other_ingress_flows)??0,x=(p==null?void 0:p.other_egress_flows)??0,w=(Date.parse(f)-Date.parse(u))/1e3||0;return t.jsx(je,{title:i("monitoring.workload_panel.network_map"),description:pe,dragHandleProps:le,children:ce&&!p?t.jsxs("div",{className:"flex h-64 flex-col items-center justify-center gap-3",children:[t.jsx("span",{className:"text-muted-foreground text-sm",children:i("monitoring.workload_panel.network_map_error")}),t.jsx(be,{type:"button",variant:"outline",size:"sm",disabled:G,onClick:()=>de(),children:i("monitoring.workload_panel.network_map_retry")})]}):!p&&G?t.jsx("div",{className:"flex h-64 items-center justify-center",children:t.jsx(ke,{className:"text-muted-foreground size-6 animate-spin"})}):!c||c.nodes.length===0&&y===0&&x===0?t.jsx("div",{className:"text-muted-foreground flex h-64 items-center justify-center px-4 text-center text-sm",children:i("monitoring.workload_panel.network_map_empty")}):t.jsxs("div",{ref:K,className:"relative w-full overflow-x-auto",children:[g&&t.jsx("div",{className:"bg-popover text-popover-foreground pointer-events-none absolute z-10 rounded-md border px-2 py-1 text-xs whitespace-pre shadow-md",style:{left:g.x+12,top:g.y+12},children:g.text}),t.jsxs("svg",{viewBox:`0 0 ${ae} ${c.vh}`,className:"h-auto w-full min-w-[640px]",role:"img","aria-label":`${r} network connection map`,children:[c.nodes.map(({peer:s,x:m,y:_})=>{const l=s.direction==="ingress",[h,o,d,P]=l?[m+k/2,_,L-N/2-j,c.cy]:[L+N/2,c.cy,m-k/2-j,_],b=Le(h,o,d,P),me=`${D(s,i)} · ${s.flows.toLocaleString()} flows (${v(s.flows,w)} req/s)`;return t.jsxs("g",{children:[t.jsx("path",{d:b,fill:"none",className:"stroke-border",strokeWidth:We(s.flows,c.maxFlows),markerEnd:"url(#arrow-ok)"}),t.jsx("path",{d:b,fill:"none",stroke:"transparent",strokeWidth:14,onMouseMove:_e=>H(_e,me),onMouseLeave:()=>A(null)})]},`edge-${s.direction}-${s.namespace??"ext"}-${s.name}`)}),c.nodes.map(({peer:s,x:m,y:_})=>{const l=U(s);return t.jsx("foreignObject",{x:m-k/2,y:_-Q/2,width:k,height:Q,children:t.jsxs("div",{"data-direction":s.direction,"data-world":l||void 0,onMouseMove:h=>H(h,Ke(s,i)),onMouseLeave:()=>A(null),className:`bg-card flex h-full flex-col justify-center rounded-md border px-2.5 shadow-sm ${l?"border-dashed border-sky-500":"border-border"}`,children:[t.jsxs("div",{className:"text-foreground flex items-center gap-1 truncate text-[13px] leading-tight font-medium",children:[l&&t.jsx($e,{className:"size-3.5 shrink-0 text-sky-500"}),t.jsx("span",{className:"truncate",children:D(s,i)})]}),l?t.jsx("div",{className:"text-muted-foreground truncate text-[10px] leading-tight",children:i("monitoring.workload_panel.network_map_world_endpoints",{count:s.endpoints})}):s.namespace&&t.jsx("div",{className:"text-muted-foreground truncate text-[10px] leading-tight",children:s.namespace}),t.jsxs("div",{className:"text-muted-foreground truncate text-[11px] leading-tight",children:[`${v(s.flows,w)} req/s · `,t.jsx("span",{className:Ge(s),children:`${Fe(s)} err`})]}),t.jsx("div",{className:"text-muted-foreground text-[11px] leading-tight",children:`p95 ${C(s.latency_ns_p95)}`})]})},`node-${s.direction}-${s.namespace??"ext"}-${s.name}`)}),t.jsx("foreignObject",{x:L-N/2,y:c.cy-J/2,width:N,height:J,children:t.jsxs("div",{className:"bg-card flex h-full flex-col justify-center gap-0.5 rounded-lg border-2 border-amber-500 px-3 shadow-md",children:[t.jsx("div",{className:"text-foreground truncate text-[14px] leading-tight font-bold",children:r}),t.jsx("div",{className:"text-muted-foreground text-[11px] leading-tight",children:i("monitoring.workload_panel.network_map_incoming",{rate:v(c.ingressFlows+y,w)})}),t.jsx("div",{className:"text-muted-foreground text-[11px] leading-tight",children:i("monitoring.workload_panel.network_map_outgoing",{rate:v(c.egressFlows+x,w)})})]})}),t.jsx("defs",{children:t.jsx("marker",{id:"arrow-ok",markerWidth:j,markerHeight:$,refX:0,refY:$/2,orient:"auto",markerUnits:"userSpaceOnUse",children:t.jsx("path",{d:`M0,0L${j},${$/2}L0,${$}Z`,className:"fill-muted-foreground"})})})]}),t.jsxs("div",{className:"text-muted-foreground mt-1 flex flex-wrap gap-4 px-2 text-xs",children:[t.jsx("span",{children:i("monitoring.workload_panel.network_map_legend_thickness")}),y>0&&t.jsx("span",{children:i("monitoring.workload_panel.network_map_other_ingress",{count:y})}),x>0&&t.jsx("span",{children:i("monitoring.workload_panel.network_map_other_egress",{count:x})})]})]})})}ie.__docgenInfo={description:"",methods:[],displayName:"WorkloadNetworkGraphCard",props:{namespace:{required:!0,tsType:{name:"string"},description:""},kind:{required:!0,tsType:{name:"union",raw:`| 'Workspace'
| 'Operation'
| 'SFTPServer'
| 'AIPubVolume'
| 'Job'
| 'CronJob'
| 'ChainJob'`,elements:[{name:"literal",value:"'Workspace'"},{name:"literal",value:"'Operation'"},{name:"literal",value:"'SFTPServer'"},{name:"literal",value:"'AIPubVolume'"},{name:"literal",value:"'Job'"},{name:"literal",value:"'CronJob'"},{name:"literal",value:"'ChainJob'"}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},tsStart:{required:!0,tsType:{name:"string"},description:""},tsEnd:{required:!0,tsType:{name:"string"},description:""},rangeKey:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},dragHandleProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  attributes: DraggableAttributes
  listeners: ReturnType<typeof useSortable>['listeners']
}`,signature:{properties:[{key:"attributes",value:{name:"DraggableAttributes",required:!0}},{key:"listeners",value:{name:"ReturnType['listeners']",raw:"ReturnType<typeof useSortable>['listeners']",required:!0}}]}},description:""},t:{required:!0,tsType:{name:"ReturnType['t']",raw:"ReturnType<typeof useTranslation>['t']"},description:""}}};const q="2026-07-01T00:00:00Z",F="2026-07-02T00:00:00Z";function O({response:e}){const{t:n}=xe(),[r]=M.useState(()=>{const a=new fe({defaultOptions:{queries:{retry:!1,staleTime:1/0}}});return a.setQueryData(["domains/workload_network_map",{namespace:e.namespace,kind:e.kind,name:e.name,start:q,end:F}],e),a});return t.jsx(ge,{client:r,children:t.jsx(ie,{namespace:e.namespace,kind:e.kind,name:e.name,open:!0,tsStart:q,tsEnd:F,rangeKey:`${q}_${F}`,t:n})})}const Xn={title:"Monitoring/WorkloadNetworkGraphCard",parameters:{layout:"padded"},tags:["autodocs"]},He={namespace:"aipub",kind:"Operation",name:"aipub-backend-api",peers:[{name:"world",namespace:null,direction:"ingress",flows:14620,ports:[8080,443],http_responses:14380,http_errors:96,latency_ns_p50:6e7,latency_ns_p95:8e8,latency_ns_p99:21e8,endpoints:289},{name:"aipub-frontend",namespace:"aipub",direction:"ingress",flows:8420,ports:[8080],http_responses:8415,http_errors:0,latency_ns_p50:4e5,latency_ns_p95:9e5,latency_ns_p99:2e6},{name:"aipub-backend-gateway",namespace:"aipub",direction:"ingress",flows:9298,ports:[8080],http_responses:9290,http_errors:612,latency_ns_p50:45e6,latency_ns_p95:12e8,latency_ns_p99:45e8},{name:"aipub-backend-batch",namespace:"aipub",direction:"ingress",flows:1820,ports:[8080],http_responses:1818,http_errors:3,latency_ns_p50:8e6,latency_ns_p95:25e6,latency_ns_p99:6e7},{name:"harbor-core",namespace:"aipub",direction:"egress",flows:10841,ports:[8080,443],http_responses:10836,http_errors:0,latency_ns_p50:5e6,latency_ns_p95:18e6,latency_ns_p99:5e7},{name:"opensearch-cluster-master",namespace:"aipub",direction:"egress",flows:25974,ports:[9200],http_responses:25970,http_errors:44,latency_ns_p50:3e6,latency_ns_p95:12e6,latency_ns_p99:4e7},{name:"coredns",namespace:"kube-system",direction:"egress",flows:640,ports:[53],http_responses:0,http_errors:0,latency_ns_p50:null,latency_ns_p95:null,latency_ns_p99:null},{name:"aipub-harbor.cluster10.idc1.ten1010.io",namespace:null,direction:"egress",flows:120,ports:[443],http_responses:118,http_errors:19,latency_ns_p50:12e7,latency_ns_p95:24e8,latency_ns_p99:8e9}],other_ingress_flows:210,other_egress_flows:87},R={render:()=>t.jsx(O,{response:He})},T={render:()=>t.jsx(O,{response:{namespace:"aipub",kind:"Operation",name:"quiet-workload",peers:[],other_ingress_flows:0,other_egress_flows:0}})},S={render:()=>t.jsx(O,{response:{namespace:"aipub",kind:"Operation",name:"opensearch-cluster-master",peers:[{name:"aipub-backend-api",namespace:"aipub",direction:"ingress",flows:24238,ports:[9200],http_responses:24230,http_errors:0,latency_ns_p50:4e6,latency_ns_p95:15e6,latency_ns_p99:45e6},{name:"fluent-bit",namespace:"aipub",direction:"ingress",flows:22734,ports:[9200],http_responses:22730,http_errors:105,latency_ns_p50:6e6,latency_ns_p95:3e7,latency_ns_p99:95e6},{name:"opensearch-dashboards",namespace:"aipub",direction:"ingress",flows:1441,ports:[9200],http_responses:1440,http_errors:0,latency_ns_p50:2e7,latency_ns_p95:18e7,latency_ns_p99:5e8}],other_ingress_flows:0,other_egress_flows:0}})},E={render:()=>t.jsx(O,{response:{namespace:"aipub",kind:"Operation",name:"busy-workload",peers:[...Array.from({length:20},(e,n)=>({name:`client-svc-${n+1}`,namespace:"aipub",direction:"ingress",flows:5e3-n*230,ports:[8080],http_responses:5e3-n*230,http_errors:n%3===0?n*2:0,latency_ns_p50:5e6+n*1e6,latency_ns_p95:4e7+n*15e6,latency_ns_p99:12e7+n*4e7})),...Array.from({length:8},(e,n)=>({name:`upstream-${n+1}`,namespace:n<6?"aipub":null,direction:"egress",flows:3e3-n*350,ports:[443],http_responses:3e3-n*350,http_errors:0}))],other_ingress_flows:1234,other_egress_flows:0}})};var Y,B,X;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <SeededCard response={backendApi} />
}`,...(X=(B=R.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};var z,V,Z;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <SeededCard response={{
    namespace: 'aipub',
    kind: 'Operation',
    name: 'quiet-workload',
    peers: [],
    other_ingress_flows: 0,
    other_egress_flows: 0
  }} />
}`,...(Z=(V=T.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var ee,ne,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <SeededCard response={{
    namespace: 'aipub',
    kind: 'Operation',
    name: 'opensearch-cluster-master',
    peers: [{
      name: 'aipub-backend-api',
      namespace: 'aipub',
      direction: 'ingress',
      flows: 24238,
      ports: [9200],
      http_responses: 24230,
      http_errors: 0,
      latency_ns_p50: 4_000_000,
      latency_ns_p95: 15_000_000,
      latency_ns_p99: 45_000_000
    }, {
      name: 'fluent-bit',
      namespace: 'aipub',
      direction: 'ingress',
      flows: 22734,
      ports: [9200],
      http_responses: 22730,
      http_errors: 105,
      latency_ns_p50: 6_000_000,
      latency_ns_p95: 30_000_000,
      latency_ns_p99: 95_000_000
    }, {
      name: 'opensearch-dashboards',
      namespace: 'aipub',
      direction: 'ingress',
      flows: 1441,
      ports: [9200],
      http_responses: 1440,
      http_errors: 0,
      latency_ns_p50: 20_000_000,
      latency_ns_p95: 180_000_000,
      latency_ns_p99: 500_000_000
    }],
    other_ingress_flows: 0,
    other_egress_flows: 0
  }} />
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,oe;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <SeededCard response={{
    namespace: 'aipub',
    kind: 'Operation',
    name: 'busy-workload',
    peers: [...Array.from({
      length: 20
    }, (_, i) => ({
      name: \`client-svc-\${i + 1}\`,
      namespace: 'aipub',
      direction: 'ingress' as const,
      flows: 5000 - i * 230,
      ports: [8080],
      http_responses: 5000 - i * 230,
      http_errors: i % 3 === 0 ? i * 2 : 0,
      latency_ns_p50: 5_000_000 + i * 1_000_000,
      latency_ns_p95: 40_000_000 + i * 15_000_000,
      latency_ns_p99: 120_000_000 + i * 40_000_000
    })),
    // egress 쪽은 지연 필드 미포함(구버전 백엔드 additive 호환) — 'p95 -' 렌더
    ...Array.from({
      length: 8
    }, (_, i) => ({
      name: \`upstream-\${i + 1}\`,
      namespace: i < 6 ? 'aipub' : null,
      direction: 'egress' as const,
      flows: 3000 - i * 350,
      ports: [443],
      http_responses: 3000 - i * 350,
      http_errors: 0
    }))],
    other_ingress_flows: 1234,
    other_egress_flows: 0
  }} />
}`,...(oe=(se=E.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const zn=["Default","Empty","IngressOnly","ManyPeers"];export{R as Default,T as Empty,S as IngressOnly,E as ManyPeers,zn as __namedExportsOrder,Xn as default};
