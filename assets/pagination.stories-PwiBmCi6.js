import{j as n}from"./iframe-D1zcNpR6.js";import{c as o}from"./common-DbPgu20d.js";import{b as _}from"./button-CqDsn7PQ.js";import{C as b}from"./chevron-left-C_tAKXAe.js";import{C as y}from"./chevron-right-D02Vcqhr.js";import{E as C}from"./ellipsis-OFYUPl8t.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./createLucideIcon-CNO9LAd6.js";function s({className:e,...t}){return n.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:o("mx-auto flex w-full justify-center",e),...t})}function c({className:e,...t}){return n.jsx("ul",{"data-slot":"pagination-content",className:o("flex flex-row items-center gap-1",e),...t})}function i({...e}){return n.jsx("li",{"data-slot":"pagination-item",...e})}function a({className:e,isActive:t,size:N="icon",...v}){return n.jsx("a",{"aria-current":t?"page":void 0,"data-slot":"pagination-link","data-active":t,className:o(_({variant:t?"outline":"ghost",size:N}),e),...v})}function d({className:e,...t}){return n.jsxs(a,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 px-2.5 sm:pl-2.5",e),...t,children:[n.jsx(b,{}),n.jsx("span",{className:"hidden sm:block",children:"Previous"})]})}function m({className:e,...t}){return n.jsxs(a,{"aria-label":"Go to next page",size:"default",className:o("gap-1 px-2.5 sm:pr-2.5",e),...t,children:[n.jsx("span",{className:"hidden sm:block",children:"Next"}),n.jsx(y,{})]})}function P({className:e,...t}){return n.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o("flex size-9 items-center justify-center",e),...t,children:[n.jsx(C,{className:"size-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]})}s.__docgenInfo={description:"",methods:[],displayName:"Pagination"};c.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};a.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:"'icon'",computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};d.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};P.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};const W={title:"Organisms/Pagination",component:s,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>n.jsx(s,{children:n.jsxs(c,{children:[n.jsx(i,{children:n.jsx(d,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",isActive:!0,children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(m,{href:"#"})})]})})},g={render:()=>n.jsx(s,{children:n.jsxs(c,{children:[n.jsx(i,{children:n.jsx(d,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",isActive:!0,children:"1"})}),n.jsx(i,{children:n.jsx(P,{})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"10"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"11"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"12"})}),n.jsx(i,{children:n.jsx(P,{})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"100"})}),n.jsx(i,{children:n.jsx(m,{href:"#"})})]})})},l={render:()=>n.jsx(s,{children:n.jsxs(c,{children:[n.jsx(i,{children:n.jsx(d,{href:"#","aria-disabled":"true"})}),n.jsx(i,{children:n.jsx(a,{href:"#",isActive:!0,children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(m,{href:"#"})})]})})};var h,p,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,j,u;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">11</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">12</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">100</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(u=(j=g.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};var I,k,L;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" aria-disabled="true" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(L=(k=l.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const M=["Default","WithEllipsis","Disabled"];export{r as Default,l as Disabled,g as WithEllipsis,M as __namedExportsOrder,W as default};
