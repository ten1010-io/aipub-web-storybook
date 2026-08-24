import{j as e}from"./iframe-D1zcNpR6.js";import{I as L}from"./invalid-badge-Dx1TKrS7.js";import{I as v}from"./input-BdLAhE0_.js";import{c}from"./common-DbPgu20d.js";import{A as F,a as k,b as G,c as K}from"./accordion-lwsomGaQ.js";import{B as f}from"./box-BuDmH90e.js";import{S as M}from"./settings-ByzoFsiR.js";import"./preload-helper-Dp1pzeXC.js";import"./badge-DKZ-o_cJ.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./translation-DqiiAkod.js";import"./use-translation-DtBcGNwE.js";import"./button-CqDsn7PQ.js";import"./createLucideIcon-CNO9LAd6.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";import"./index-DwS2aoMe.js";import"./index-BQ5baEsh.js";import"./chevron-down-DTDP-A0u.js";function a({className:n,defaultOpen:s,open:r,children:d,onOpenChange:l}){return e.jsx("div",{"data-slot":"accordion-card",className:c("bg-card text-card-foreground rounded-xl border shadow-sm",n),children:e.jsx(F,{type:"single",collapsible:!0,defaultValue:s?"content":void 0,...r!==void 0&&{value:r?"content":""},onValueChange:l?p=>l(p==="content"):void 0,children:e.jsx(k,{value:"content",className:"border-none",children:d})})})}function i({className:n,icon:s,trailing:r,children:d}){return e.jsx(G,{className:c("group [&>svg:last-child]:text-muted-foreground items-center px-6 py-5 hover:no-underline [&>svg:last-child]:size-5",n),children:e.jsxs("div",{className:"flex flex-1 items-center gap-3",children:[s&&e.jsx("div",{className:"bg-muted text-secondary-foreground group-data-[state=open]:bg-secondary-foreground group-data-[state=open]:text-primary-foreground flex size-9 shrink-0 items-center justify-center rounded-lg shadow-xs",children:s}),e.jsx("span",{className:"flex-1 text-left text-base font-semibold",children:d}),r]})})}function o({className:n,divided:s,children:r}){return e.jsx(K,{className:"border-t pb-0",children:e.jsx("div",{className:c(s&&"divide-y",n),children:r})})}function t({className:n,title:s,description:r,collapsible:d,defaultOpen:l,open:p,visible:j=!0,children:m}){const A=e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("h4",{className:"text-sm font-semibold",children:s}),r&&e.jsx("p",{className:"text-muted-foreground mt-1.5 text-sm font-normal",children:r})]});return d?e.jsx("div",{"data-slot":"accordion-card-section",className:c("px-6 py-6",!j&&"hidden",n),children:e.jsx(F,{type:"single",collapsible:!0,defaultValue:l?"section":void 0,...p!==void 0&&{value:p?"section":""},children:e.jsxs(k,{value:"section",className:"border-none",children:[e.jsx(G,{className:"[&>svg:last-child]:text-muted-foreground p-0 hover:no-underline",children:A}),m&&e.jsx(K,{className:"pt-5 pb-0",children:m})]})})}):e.jsxs("div",{"data-slot":"accordion-card-section",className:c("px-6 py-6",!j&&"hidden",n),children:[A,m&&e.jsx("div",{className:"mt-5",children:m})]})}a.__docgenInfo={description:"",methods:[],displayName:"AccordionCard",props:{className:{required:!1,tsType:{name:"string"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"AccordionCardHeader",props:{className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},trailing:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"AccordionCardContent",props:{className:{required:!1,tsType:{name:"string"},description:""},divided:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"AccordionCardSection",props:{className:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Be={title:"Organisms/AccordionCard",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{children:null}},u={render:()=>e.jsx("div",{className:"w-160",children:e.jsxs(a,{defaultOpen:!0,children:[e.jsx(i,{icon:e.jsx(f,{className:"size-4"}),children:"Container"}),e.jsx(o,{children:e.jsx("div",{className:"px-6 py-6",children:e.jsx("p",{className:"text-sm",children:"Accordion card content goes here."})})})]})})},x={render:()=>e.jsx("div",{className:"w-160",children:e.jsxs(a,{children:[e.jsx(i,{icon:e.jsx(f,{className:"size-4"}),children:"Container"}),e.jsx(o,{children:e.jsx("div",{className:"px-6 py-6",children:e.jsx("p",{className:"text-sm",children:"This content is hidden by default."})})})]})})},h={name:"Trailing: Validation Badge",render:()=>e.jsx("div",{className:"w-160",children:e.jsxs(a,{defaultOpen:!0,children:[e.jsx(i,{icon:e.jsx(f,{className:"size-4"}),trailing:e.jsx(L,{}),children:"Container"}),e.jsx(o,{divided:!0,children:e.jsxs(t,{title:e.jsxs(e.Fragment,{children:["이미지 ",e.jsx("span",{className:"text-destructive",children:"*"})]}),description:"Job 실행에 사용할 컨테이너 이미지를 선택해 주세요.",children:[e.jsx(v,{placeholder:"이미지를 선택해 주세요.",className:"border-destructive"}),e.jsx("p",{className:"text-destructive mt-1.5 text-sm",children:"This is an input description."})]})})]})})},N={name:"Trailing: Text",render:()=>e.jsx("div",{className:"w-160",children:e.jsxs(a,{defaultOpen:!0,children:[e.jsx(i,{icon:e.jsx(M,{className:"size-4"}),trailing:e.jsx("span",{className:"text-muted-foreground text-sm",children:"3 items"}),children:"Settings"}),e.jsx(o,{children:e.jsx("div",{className:"px-6 py-6",children:e.jsx("p",{className:"text-sm",children:"Trailing can be any ReactNode."})})})]})})},C={render:()=>e.jsx("div",{className:"w-160",children:e.jsxs(a,{defaultOpen:!0,children:[e.jsx(i,{icon:e.jsx(f,{className:"size-4"}),children:"Container"}),e.jsxs(o,{divided:!0,children:[e.jsx(t,{title:e.jsxs(e.Fragment,{children:["이미지 ",e.jsx("span",{className:"text-destructive",children:"*"})]}),description:"Job 실행에 사용할 컨테이너 이미지를 선택해 주세요.",children:e.jsx(v,{placeholder:"이미지를 선택해 주세요."})}),e.jsx(t,{title:"실행 명령어",description:"컨테이너 실행에 사용할 Command와 Argument를 입력할 수 있습니다.",collapsible:!0,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(v,{placeholder:"Command를 입력해 주세요."}),e.jsx(v,{placeholder:"Argument를 입력해 주세요."})]})}),e.jsx(t,{title:"환경 변수",description:"환경 변수를 .env 파일로 업로드하거나 직접 입력할 수 있습니다.",collapsible:!0,children:e.jsx("p",{className:"text-muted-foreground text-sm",children:"설정된 환경 변수가 없습니다"})})]})]})})},g={render:()=>e.jsx("div",{className:"w-[640px]",children:e.jsxs(a,{defaultOpen:!0,children:[e.jsx(i,{children:"Simple Card"}),e.jsx(o,{children:e.jsx("div",{className:"px-6 py-6",children:e.jsx("p",{className:"text-sm",children:"Icon is optional. This card has no icon."})})})]})})};var y,T,b;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="w-160">
      <AccordionCard defaultOpen>
        <AccordionCardHeader icon={<BoxIcon className="size-4" />}>
          Container
        </AccordionCardHeader>
        <AccordionCardContent>
          <div className="px-6 py-6">
            <p className="text-sm">Accordion card content goes here.</p>
          </div>
        </AccordionCardContent>
      </AccordionCard>
    </div>
}`,...(b=(T=u.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var S,I,q;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-160">
      <AccordionCard>
        <AccordionCardHeader icon={<BoxIcon className="size-4" />}>
          Container
        </AccordionCardHeader>
        <AccordionCardContent>
          <div className="px-6 py-6">
            <p className="text-sm">This content is hidden by default.</p>
          </div>
        </AccordionCardContent>
      </AccordionCard>
    </div>
}`,...(q=(I=x.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var w,H,O;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Trailing: Validation Badge',
  render: () => <div className="w-160">
      <AccordionCard defaultOpen>
        <AccordionCardHeader icon={<BoxIcon className="size-4" />} trailing={<InvalidBadge />}>
          Container
        </AccordionCardHeader>
        <AccordionCardContent divided>
          <AccordionCardSection title={<>
                이미지 <span className="text-destructive">*</span>
              </>} description="Job 실행에 사용할 컨테이너 이미지를 선택해 주세요.">
            <Input placeholder="이미지를 선택해 주세요." className="border-destructive" />
            <p className="text-destructive mt-1.5 text-sm">
              This is an input description.
            </p>
          </AccordionCardSection>
        </AccordionCardContent>
      </AccordionCard>
    </div>
}`,...(O=(H=h.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var z,B,R;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Trailing: Text',
  render: () => <div className="w-160">
      <AccordionCard defaultOpen>
        <AccordionCardHeader icon={<SettingsIcon className="size-4" />} trailing={<span className="text-muted-foreground text-sm">3 items</span>}>
          Settings
        </AccordionCardHeader>
        <AccordionCardContent>
          <div className="px-6 py-6">
            <p className="text-sm">Trailing can be any ReactNode.</p>
          </div>
        </AccordionCardContent>
      </AccordionCard>
    </div>
}`,...(R=(B=N.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var _,V,W;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="w-160">
      <AccordionCard defaultOpen>
        <AccordionCardHeader icon={<BoxIcon className="size-4" />}>
          Container
        </AccordionCardHeader>
        <AccordionCardContent divided>
          <AccordionCardSection title={<>
                이미지 <span className="text-destructive">*</span>
              </>} description="Job 실행에 사용할 컨테이너 이미지를 선택해 주세요.">
            <Input placeholder="이미지를 선택해 주세요." />
          </AccordionCardSection>
          <AccordionCardSection title="실행 명령어" description="컨테이너 실행에 사용할 Command와 Argument를 입력할 수 있습니다." collapsible>
            <div className="space-y-4">
              <Input placeholder="Command를 입력해 주세요." />
              <Input placeholder="Argument를 입력해 주세요." />
            </div>
          </AccordionCardSection>
          <AccordionCardSection title="환경 변수" description="환경 변수를 .env 파일로 업로드하거나 직접 입력할 수 있습니다." collapsible>
            <p className="text-muted-foreground text-sm">
              설정된 환경 변수가 없습니다
            </p>
          </AccordionCardSection>
        </AccordionCardContent>
      </AccordionCard>
    </div>
}`,...(W=(V=C.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var D,J,E;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="w-[640px]">
      <AccordionCard defaultOpen>
        <AccordionCardHeader>Simple Card</AccordionCardHeader>
        <AccordionCardContent>
          <div className="px-6 py-6">
            <p className="text-sm">Icon is optional. This card has no icon.</p>
          </div>
        </AccordionCardContent>
      </AccordionCard>
    </div>
}`,...(E=(J=g.parameters)==null?void 0:J.docs)==null?void 0:E.source}}};const Re=["Default","Collapsed","WithTrailingBadge","WithTrailingText","DividedSections","WithoutIcon"];export{x as Collapsed,u as Default,C as DividedSections,h as WithTrailingBadge,N as WithTrailingText,g as WithoutIcon,Re as __namedExportsOrder,Be as default};
