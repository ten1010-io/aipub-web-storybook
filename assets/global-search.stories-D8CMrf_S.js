import{j as o}from"./iframe-D1zcNpR6.js";import{Q as D,a as N}from"./QueryClientProvider-jDBHSCoQ.js";import{G as m,A as O}from"./global-search-0hMgvYW8.js";import{A as _}from"./query-ByMW_kTe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dwl9X6j1.js";import"./workspace-icon-wXNivQsr.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./use-translation-DtBcGNwE.js";import"./button-CqDsn7PQ.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./createLucideIcon-CNO9LAd6.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";import"./scroll-text-XRL4yLbe.js";import"./useQuery-BYObVghW.js";import"./browser-BjpQP-nW.js";import"./backend-client-Ct8fSSX6.js";import"./highlight-text-Oyrg7M21.js";import"./custom-resource-icon-Bih8OfhB.js";import"./command-DyRBN-2B.js";import"./translation-DqiiAkod.js";import"./x-BOsrJgOo.js";import"./toast-Deldctki.js";const{expect:l,userEvent:p,within:t}=__STORYBOOK_MODULE_TEST__,A={username:"gildong",fullName:"홍길동",department:"AI 플랫폼팀",email:"gildong@ten1010.io"},G="k8s/custom-resource/discovery",T=[{group:"cilium.io",version:"v2",kind:"CiliumNetworkPolicy",plural:"ciliumnetworkpolicies",scope:"Namespaced"},{group:"ray.io",version:"v1",kind:"RayCluster",plural:"rayclusters",scope:"Namespaced"}];function u({isAdmin:i=!0,bookmarks:c=["app:projects","k8s:k8sNodes","k8s:k8sNetworkPolicies"],children:e}){const r=new D({defaultOptions:{queries:{retry:!1}}});return r.setQueryData([O.WHOAMI],{user:{attributes:{bookmarks:c}}}),r.setQueryData([G],T),o.jsx(N,{client:r,children:o.jsx(_.Provider,{value:{user:A,isLoading:!1,isAuthenticated:!0,isAdmin:i,logout:()=>{}},children:e})})}const Ee={title:"Organisms/GlobalSearch",component:m,parameters:{layout:"centered"}},n={render:()=>o.jsx(u,{children:o.jsx(m,{})})},a={render:()=>o.jsx(u,{children:o.jsx(m,{})}),play:async({canvasElement:i})=>{const e=t(i).getAllByRole("button")[0];await p.click(e);const r=t(document.body).getByRole("dialog");await l(r).toBeInTheDocument()}},s={render:()=>o.jsx(u,{children:o.jsx(m,{})}),play:async({canvasElement:i})=>{const c=t(i);await p.click(c.getAllByRole("button")[0]);const e=t(document.body).getByRole("dialog");await l(t(e).getByText("Definitions")).toBeInTheDocument(),await l(t(e).queryByText("CiliumNetworkPolicy")).toBeNull(),await p.type(t(e).getByRole("combobox"),"CiliumNetworkPolicy"),await l(t(e).getAllByRole("option").some(r=>r.textContent==="CiliumNetworkPolicy")).toBe(!0)}};var d,y,g,w,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <GlobalSearchMock>
      <GlobalSearch />
    </GlobalSearchMock>
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source},description:{story:"검색 트리거 버튼(⌘K). 클릭하거나 ⌘/Ctrl+K 로 다이얼로그를 연다.",...(h=(w=n.parameters)==null?void 0:w.docs)==null?void 0:h.description}}};var k,x,b,B,v;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <GlobalSearchMock>
      <GlobalSearch />
    </GlobalSearchMock>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getAllByRole('button')[0];
    await userEvent.click(trigger);

    // 다이얼로그가 열리고 그룹·항목이 렌더된다.
    const dialog = within(document.body).getByRole('dialog');
    await expect(dialog).toBeInTheDocument();
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source},description:{story:"다이얼로그가 열린 상태 — 섹션 그룹·북마크 아이콘이 함께 보인다.",...(v=(B=a.parameters)==null?void 0:B.docs)==null?void 0:v.description}}};var C,R,S,E,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <GlobalSearchMock>
      <GlobalSearch />
    </GlobalSearchMock>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole('button')[0]);
    const dialog = within(document.body).getByRole('dialog');

    // 빈 검색어: Definitions 만 보이고 동적 kind 는 숨겨진 상태.
    await expect(within(dialog).getByText('Definitions')).toBeInTheDocument();
    await expect(within(dialog).queryByText('CiliumNetworkPolicy')).toBeNull();

    // 검색하면 매칭되는 동적 kind 가 노출된다.
    await userEvent.type(within(dialog).getByRole('combobox'), 'CiliumNetworkPolicy');
    await expect(within(dialog).getAllByRole('option').some(option => option.textContent === 'CiliumNetworkPolicy')).toBe(true);
  }
}`,...(S=(R=s.parameters)==null?void 0:R.docs)==null?void 0:S.source},description:{story:`CustomResource 검색 — 처음엔 Definitions 만, 검색어를 입력하면 클러스터에 설치된
동적 kind(CiliumNetworkPolicy 등)가 함께 걸린다.`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.description}}};const fe=["Default","Open","SearchCustomResource"];export{n as Default,a as Open,s as SearchCustomResource,fe as __namedExportsOrder,Ee as default};
