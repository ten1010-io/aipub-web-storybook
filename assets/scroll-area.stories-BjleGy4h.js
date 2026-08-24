import{j as e}from"./iframe-D1zcNpR6.js";import{S as o,a as N}from"./scroll-area-Bq2697E3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-1Mm1CGHb.js";import"./index-D0pAv75W.js";import"./index-CI7ycuOB.js";import"./index--CsRPePo.js";import"./index-CZXvctcB.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";const E={title:"Organisms/ScrollArea",component:o,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsx(o,{className:"h-[200px] w-[350px] rounded-md border p-4",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm leading-none font-medium",children:"제목"}),Array.from({length:50},(m,r)=>e.jsxs("div",{className:"text-sm",children:["Row ",r+1]},r))]})})},a={render:()=>e.jsx(o,{className:"h-[300px] w-[400px] rounded-md border p-4",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"mb-4 text-sm leading-none font-medium",children:"공지사항"}),Array.from({length:20},(m,r)=>e.jsxs("div",{className:"text-sm",children:[e.jsxs("h5",{className:"mb-1 font-medium",children:["공지사항 ",r+1]}),e.jsxs("p",{className:"text-muted-foreground",children:["이것은 공지사항 ",r+1,"의 내용입니다. 스크롤 영역을 테스트하기 위한 긴 텍스트를 포함하고 있습니다."]})]},r))]})})},n={render:()=>e.jsxs(o,{className:"h-[100px] w-[400px] rounded-md border p-4",children:[e.jsx("div",{className:"flex space-x-4",children:Array.from({length:50},(m,r)=>e.jsx("div",{className:"h-[60px] w-[60px] shrink-0 rounded-md border",children:r+1},r))}),e.jsx(N,{orientation:"horizontal"})]})};var d,t,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm leading-none font-medium">제목</h4>
        {Array.from({
        length: 50
      }, (_, i) => <div key={i} className="text-sm">
            Row {i + 1}
          </div>)}
      </div>
    </ScrollArea>
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-[300px] w-[400px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="mb-4 text-sm leading-none font-medium">공지사항</h4>
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="text-sm">
            <h5 className="mb-1 font-medium">공지사항 {i + 1}</h5>
            <p className="text-muted-foreground">
              이것은 공지사항 {i + 1}의 내용입니다. 스크롤 영역을 테스트하기
              위한 긴 텍스트를 포함하고 있습니다.
            </p>
          </div>)}
      </div>
    </ScrollArea>
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var x,h,u;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-[100px] w-[400px] rounded-md border p-4">
      <div className="flex space-x-4">
        {Array.from({
        length: 50
      }, (_, i) => <div key={i} className="h-[60px] w-[60px] shrink-0 rounded-md border">
            {i + 1}
          </div>)}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const H=["Default","WithContent","Horizontal"];export{s as Default,n as Horizontal,a as WithContent,H as __namedExportsOrder,E as default};
