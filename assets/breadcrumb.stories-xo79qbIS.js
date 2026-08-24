import{j as e,L as h,r as T}from"./iframe-D1zcNpR6.js";import{S as O}from"./index-1Mm1CGHb.js";import{c as t}from"./common-DbPgu20d.js";import{C as D}from"./chevron-right-D02Vcqhr.js";import{E as F}from"./ellipsis-OFYUPl8t.js";import{T as G}from"./truncated-text-DY6emO6I.js";import{H as z}from"./house-DqamOg-E.js";import{c as q}from"./createLucideIcon-CNO9LAd6.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],V=q("folder",U);function d({...r}){return e.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...r})}function o({className:r,...a}){return e.jsx("ol",{"data-slot":"breadcrumb-list",className:t("text-muted-foreground flex min-w-0 flex-nowrap items-center gap-1.5 text-sm sm:gap-2.5",r),...a})}function s({className:r,...a}){return e.jsx("li",{"data-slot":"breadcrumb-item",className:t("inline-flex min-w-0 items-center gap-1.5",r),...a})}function c({asChild:r,className:a,...m}){const R=r?O:"a";return e.jsx(R,{"data-slot":"breadcrumb-link",className:t("hover:text-foreground transition-colors",a),...m})}function i({className:r,...a}){return e.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:t("text-foreground font-normal",r),...a})}function n({children:r,className:a,...m}){return e.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:t("shrink-0 [&>svg]:size-3.5",a),...m,children:r??e.jsx(D,{})})}function M({className:r,...a}){return e.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:t("flex size-9 items-center justify-center",r),...a,children:[e.jsx(F,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"More"})]})}d.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};o.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};n.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};M.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const je={title:"Molecules/Breadcrumb",component:d,parameters:{layout:"centered"},tags:["autodocs"]},l={render:()=>e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(s,{children:e.jsx(c,{href:"/",children:"Home"})}),e.jsx(n,{}),e.jsx(s,{children:e.jsx(c,{href:"/components",children:"Components"})}),e.jsx(n,{}),e.jsx(s,{children:e.jsx(i,{children:"Breadcrumb"})})]})})},u={render:()=>e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(s,{children:e.jsxs(c,{href:"/",className:"flex items-center gap-2",children:[e.jsx(z,{className:"size-4"}),"Home"]})}),e.jsx(n,{}),e.jsx(s,{children:e.jsxs(c,{href:"/components",className:"flex items-center gap-2",children:[e.jsx(V,{className:"size-4"}),"Components"]})}),e.jsx(n,{}),e.jsx(s,{children:e.jsx(i,{children:"Breadcrumb"})})]})})},b={render:()=>e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(s,{children:e.jsx(c,{href:"/",children:"Home"})}),e.jsx(n,{}),e.jsx(s,{children:e.jsx(M,{})}),e.jsx(n,{}),e.jsx(s,{children:e.jsx(c,{href:"/components",children:"Components"})}),e.jsx(n,{}),e.jsx(s,{children:e.jsx(c,{href:"/components/navigation",children:"Navigation"})}),e.jsx(n,{}),e.jsx(s,{children:e.jsx(i,{children:"Breadcrumb"})})]})})},x="This resource name is long enough to overflow the breadcrumb area and must be truncated with an ellipsis",X=50;function j({label:r}){return e.jsx(G,{maxChars:X,children:r})}function f({crumbs:r}){return e.jsx("div",{className:"flex w-full min-w-0 items-center",children:e.jsx(d,{className:"min-w-0",children:e.jsxs(o,{children:[e.jsx(s,{className:"shrink-0",children:e.jsx(c,{href:"/",children:e.jsx(z,{className:"size-4"})})}),r.length>0&&e.jsx(n,{}),r.map((a,m)=>e.jsxs(T.Fragment,{children:[e.jsx(s,{children:a.href?e.jsx(c,{href:a.href,className:"block",children:e.jsx(j,{label:a.label})}):e.jsx(i,{className:"block min-w-0",children:e.jsx(j,{label:a.label})})}),m<r.length-1&&e.jsx(n,{})]},m))]})})})}function g({title:r,description:a,children:m}){return e.jsxs("div",{className:"flex w-[600px] flex-col items-start gap-4",children:[e.jsxs("div",{className:"bg-muted flex w-full flex-col gap-0.5 rounded-md px-3 py-2",children:[e.jsx("span",{className:"text-foreground text-sm font-semibold",children:r}),e.jsx("span",{className:"text-muted-foreground text-xs",children:a})]}),m]})}const p={render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-8",children:[e.jsx(g,{title:"긴 라벨이 중간",description:"뒤따르는 Edit 이 다음 줄로 밀리지 않는다",children:e.jsx(f,{crumbs:[{label:"Workloads",href:"/workloads"},{label:x,href:"/workloads/1"},{label:"Edit"}]})}),e.jsx(g,{title:"긴 라벨이 마지막",description:"현재 페이지가 긴 이름 — 남은 폭을 모두 쓴다",children:e.jsx(f,{crumbs:[{label:"Workloads",href:"/workloads"},{label:x}]})})]})},B={render:()=>e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(s,{children:e.jsx(c,{asChild:!0,children:e.jsx(h,{to:"/",children:"Home"})})}),e.jsx(n,{}),e.jsx(s,{children:e.jsx(c,{asChild:!0,children:e.jsx(h,{to:"/components",children:"Components"})})}),e.jsx(n,{}),e.jsx(s,{children:e.jsx(i,{children:"Breadcrumb"})})]})})};var k,L,N;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(N=(L=l.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var I,C,_;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center gap-2">
            <HomeIcon className="size-4" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components" className="flex items-center gap-2">
            <FolderIcon className="size-4" />
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(_=(C=u.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var S,E,w;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components/navigation">
            Navigation
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(w=(E=b.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var v,H,y;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-8">
      <BreadcrumbCaseBlock title="긴 라벨이 중간" description="뒤따르는 Edit 이 다음 줄로 밀리지 않는다">
        <HeaderBreadcrumb crumbs={[{
        label: 'Workloads',
        href: '/workloads'
      }, {
        label: LONG_NAME,
        href: '/workloads/1'
      }, {
        label: 'Edit'
      }]} />
      </BreadcrumbCaseBlock>

      <BreadcrumbCaseBlock title="긴 라벨이 마지막" description="현재 페이지가 긴 이름 — 남은 폭을 모두 쓴다">
        <HeaderBreadcrumb crumbs={[{
        label: 'Workloads',
        href: '/workloads'
      }, {
        label: LONG_NAME
      }]} />
      </BreadcrumbCaseBlock>
    </div>
}`,...(y=(H=p.parameters)==null?void 0:H.docs)==null?void 0:y.source}}};var W,P,A;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/components">Components</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(A=(P=B.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const fe=["Default","WithIcons","WithEllipsis","WithLongLabel","WithAsChild"];export{l as Default,B as WithAsChild,b as WithEllipsis,u as WithIcons,p as WithLongLabel,fe as __namedExportsOrder,je as default};
