import{r as m,j as e}from"./iframe-D1zcNpR6.js";import{B as M}from"./button-CqDsn7PQ.js";import{I as V}from"./input-BdLAhE0_.js";import{L as h}from"./label-63cY3faU.js";import{P}from"./password-input-CVFh5fvh.js";import{c as I}from"./index-DW48STyt.js";import{c as se}from"./index--CsRPePo.js";import{R as ne,I as re,c as U}from"./index-ChlC6ciw.js";import{P as oe}from"./index-D0pAv75W.js";import{P as C}from"./index-2Le0S55P.js";import{u as ie}from"./index-D2RyObxg.js";import{u as ce}from"./index-BWesfKH1.js";import{u as le}from"./index-kJD_jmLN.js";import{c as K}from"./index-Dp3B9jqt.js";import{c as y}from"./common-DbPgu20d.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./createLucideIcon-CNO9LAd6.js";import"./translation-DqiiAkod.js";import"./use-translation-DtBcGNwE.js";import"./tooltip-TWwZSAUh.js";import"./index-CPSRtOzn.js";import"./index-CZXvctcB.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CI7ycuOB.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./scroll-area-Bq2697E3.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";import"./index-DwS2aoMe.js";import"./clsx-B-dksMZM.js";var L="Tabs",[de]=se(L,[U]),q=U(),[ue,k]=de(L),O=m.forwardRef((a,t)=>{const{__scopeTabs:r,value:s,onValueChange:n,defaultValue:u,orientation:o="horizontal",dir:p,activationMode:g="automatic",...x}=a,c=ie(p),[i,v]=ce({prop:s,onChange:n,defaultProp:u??"",caller:L});return e.jsx(ue,{scope:r,baseId:le(),value:i,onValueChange:v,orientation:o,dir:c,activationMode:g,children:e.jsx(C.div,{dir:c,"data-orientation":o,...x,ref:t})})});O.displayName=L;var Z="TabsList",J=m.forwardRef((a,t)=>{const{__scopeTabs:r,loop:s=!0,...n}=a,u=k(Z,r),o=q(r);return e.jsx(ne,{asChild:!0,...o,orientation:u.orientation,dir:u.dir,loop:s,children:e.jsx(C.div,{role:"tablist","aria-orientation":u.orientation,...n,ref:t})})});J.displayName=Z;var Q="TabsTrigger",X=m.forwardRef((a,t)=>{const{__scopeTabs:r,value:s,disabled:n=!1,...u}=a,o=k(Q,r),p=q(r),g=ae(o.baseId,s),x=te(o.baseId,s),c=s===o.value;return e.jsx(re,{asChild:!0,...p,focusable:!n,active:c,children:e.jsx(C.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":x,"data-state":c?"active":"inactive","data-disabled":n?"":void 0,disabled:n,id:g,...u,ref:t,onMouseDown:I(a.onMouseDown,i=>{!n&&i.button===0&&i.ctrlKey===!1?o.onValueChange(s):i.preventDefault()}),onKeyDown:I(a.onKeyDown,i=>{[" ","Enter"].includes(i.key)&&o.onValueChange(s)}),onFocus:I(a.onFocus,()=>{const i=o.activationMode!=="manual";!c&&!n&&i&&o.onValueChange(s)})})})});X.displayName=Q;var Y="TabsContent",ee=m.forwardRef((a,t)=>{const{__scopeTabs:r,value:s,forceMount:n,children:u,...o}=a,p=k(Y,r),g=ae(p.baseId,s),x=te(p.baseId,s),c=s===p.value,i=m.useRef(c);return m.useEffect(()=>{const v=requestAnimationFrame(()=>i.current=!1);return()=>cancelAnimationFrame(v)},[]),e.jsx(oe,{present:n||c,children:({present:v})=>e.jsx(C.div,{"data-state":c?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":g,hidden:!v,id:x,tabIndex:0,...o,ref:t,style:{...a.style,animationDuration:i.current?"0s":void 0},children:v&&u})})});ee.displayName=Y;function ae(a,t){return`${a}-trigger-${t}`}function te(a,t){return`${a}-content-${t}`}var me=O,pe=J,ve=X,be=ee;const _=m.createContext("segmented"),ge=K("inline-flex items-center",{variants:{variant:{segmented:"bg-muted text-muted-foreground h-9 w-fit justify-center rounded-lg p-[3px]",underline:"text-muted-foreground h-auto w-full justify-start gap-1 rounded-none border-b bg-transparent p-0"}},defaultVariants:{variant:"segmented"}}),xe=K("focus-visible:border-ring focus-visible:outline-ring focus-visible:ring-ring/50 inline-flex items-center justify-center gap-1.5 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 dark:disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",{variants:{variant:{segmented:"text-foreground data-[state=active]:bg-background dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-card dark:data-[state=active]:text-foreground h-[calc(100%-1px)] flex-1 rounded-md border border-transparent px-2 py-1 data-[state=active]:shadow-sm",underline:"text-muted-foreground hover:text-foreground hover:bg-muted/50 data-[state=active]:border-primary data-[state=active]:text-foreground -mb-px rounded-none border-b-2 border-transparent bg-transparent px-3 py-2"}},defaultVariants:{variant:"segmented"}});function b({className:a,variant:t="segmented",...r}){return e.jsx(_.Provider,{value:t,children:e.jsx(me,{"data-slot":"tabs",className:y("flex flex-col gap-6",a),...r})})}function T({className:a,variant:t,...r}){const s=m.useContext(_),n=t??s;return e.jsx(pe,{"data-slot":"tabs-list","data-variant":n,className:y(ge({variant:n}),a),...r})}function l({className:a,variant:t,...r}){const s=m.useContext(_),n=t??s;return e.jsx(ve,{"data-slot":"tabs-trigger",className:y(xe({variant:n}),a),...r})}function d({className:a,...t}){return e.jsx(be,{"data-slot":"tabs-content",className:y("flex flex-1 outline-none data-[state=inactive]:hidden!",a),...t})}b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{variant:{required:!1,tsType:{name:"union",raw:"'segmented' | 'underline'",elements:[{name:"literal",value:"'segmented'"},{name:"literal",value:"'underline'"}]},description:"",defaultValue:{value:"'segmented'",computed:!1}}}};T.__docgenInfo={description:"",methods:[],displayName:"TabsList"};l.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};d.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const ea={title:"Molecules/Tabs",component:b,parameters:{layout:"centered"},tags:["autodocs"]},f={render:()=>e.jsxs(b,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(T,{className:"grid w-full grid-cols-2",children:[e.jsx(l,{value:"account",children:"Account"}),e.jsx(l,{value:"password",children:"Password"})]}),e.jsxs(d,{value:"account",className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(V,{id:"email",type:"email",placeholder:"m@example.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(h,{htmlFor:"username",children:"Username"}),e.jsx(V,{id:"username",placeholder:"@username"})]}),e.jsx(M,{className:"w-full",children:"Save changes"})]}),e.jsxs(d,{value:"password",className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(h,{htmlFor:"current",children:"Current password"}),e.jsx(P,{id:"current"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(h,{htmlFor:"new",children:"New password"}),e.jsx(P,{id:"new"})]}),e.jsx(M,{className:"w-full",children:"Change password"})]})]})},j={render:()=>e.jsxs(b,{defaultValue:"music",className:"w-[400px]",children:[e.jsxs(T,{className:"grid w-full grid-cols-3",children:[e.jsxs(l,{value:"music",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"size-4",children:[e.jsx("path",{d:"M9 18V5l12-2v13"}),e.jsx("circle",{cx:"6",cy:"18",r:"3"}),e.jsx("circle",{cx:"18",cy:"16",r:"3"})]}),"Music"]}),e.jsxs(l,{value:"podcasts",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"size-4",children:[e.jsx("circle",{cx:"12",cy:"11",r:"1"}),e.jsx("path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"}),e.jsx("path",{d:"M8 14a5 5 0 1 1 8 0"}),e.jsx("path",{d:"M17 18.5a9 9 0 1 0-10 0"})]}),"Podcasts"]}),e.jsxs(l,{value:"live",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"size-4",children:[e.jsx("path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}),e.jsx("path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"})]}),"Live"]})]}),e.jsx(d,{value:"music",className:"mt-6",children:e.jsx("div",{className:"text-muted-foreground text-center text-sm",children:"Music content"})}),e.jsx(d,{value:"podcasts",className:"mt-6",children:e.jsx("div",{className:"text-muted-foreground text-center text-sm",children:"Podcasts content"})}),e.jsx(d,{value:"live",className:"mt-6",children:e.jsx("div",{className:"text-muted-foreground text-center text-sm",children:"Live content"})})]})},w={render:()=>e.jsxs(b,{variant:"underline",defaultValue:"catalog",className:"w-[400px]",children:[e.jsxs(T,{children:[e.jsx(l,{value:"catalog",children:"ImageCatalog"}),e.jsx(l,{value:"hub",children:"ImageHub"})]}),e.jsx(d,{value:"catalog",className:"mt-6",children:e.jsx("div",{className:"text-muted-foreground text-sm",children:"ImageCatalog content"})}),e.jsx(d,{value:"hub",className:"mt-6",children:e.jsx("div",{className:"text-muted-foreground text-sm",children:"ImageHub content"})})]})},N={render:()=>e.jsxs(b,{defaultValue:"tab1",className:"w-[400px]",children:[e.jsxs(T,{children:[e.jsx(l,{value:"tab1",children:"Tab 1"}),e.jsx(l,{value:"tab2",children:"Tab 2"}),e.jsx(l,{value:"tab3",disabled:!0,children:"Disabled"})]}),e.jsx(d,{value:"tab1",className:"mt-6",children:"Tab 1 content"}),e.jsx(d,{value:"tab2",className:"mt-6",children:"Tab 2 content"}),e.jsx(d,{value:"tab3",className:"mt-6",children:"Tab 3 content"})]})};var F,A,S;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="@username" />
        </div>
        <Button className="w-full">Save changes</Button>
      </TabsContent>
      <TabsContent value="password" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current">Current password</Label>
          <PasswordInput id="current" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new">New password</Label>
          <PasswordInput id="new" />
        </div>
        <Button className="w-full">Change password</Button>
      </TabsContent>
    </Tabs>
}`,...(S=(A=f.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var B,E,R;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="music" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="music">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          Music
        </TabsTrigger>
        <TabsTrigger value="podcasts">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
            <circle cx="12" cy="11" r="1" />
            <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z" />
            <path d="M8 14a5 5 0 1 1 8 0" />
            <path d="M17 18.5a9 9 0 1 0-10 0" />
          </svg>
          Podcasts
        </TabsTrigger>
        <TabsTrigger value="live">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          </svg>
          Live
        </TabsTrigger>
      </TabsList>
      <TabsContent value="music" className="mt-6">
        <div className="text-muted-foreground text-center text-sm">
          Music content
        </div>
      </TabsContent>
      <TabsContent value="podcasts" className="mt-6">
        <div className="text-muted-foreground text-center text-sm">
          Podcasts content
        </div>
      </TabsContent>
      <TabsContent value="live" className="mt-6">
        <div className="text-muted-foreground text-center text-sm">
          Live content
        </div>
      </TabsContent>
    </Tabs>
}`,...(R=(E=j.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var z,D,W;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Tabs variant="underline" defaultValue="catalog" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="catalog">ImageCatalog</TabsTrigger>
        <TabsTrigger value="hub">ImageHub</TabsTrigger>
      </TabsList>
      <TabsContent value="catalog" className="mt-6">
        <div className="text-muted-foreground text-sm">
          ImageCatalog content
        </div>
      </TabsContent>
      <TabsContent value="hub" className="mt-6">
        <div className="text-muted-foreground text-sm">ImageHub content</div>
      </TabsContent>
    </Tabs>
}`,...(W=(D=w.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var $,G,H;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-6">
        Tab 1 content
      </TabsContent>
      <TabsContent value="tab2" className="mt-6">
        Tab 2 content
      </TabsContent>
      <TabsContent value="tab3" className="mt-6">
        Tab 3 content
      </TabsContent>
    </Tabs>
}`,...(H=(G=N.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const aa=["Default","WithIcons","Underline","Disabled"];export{f as Default,N as Disabled,w as Underline,j as WithIcons,aa as __namedExportsOrder,ea as default};
