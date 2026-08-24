import{j as e}from"./iframe-D1zcNpR6.js";import{c as x}from"./common-DbPgu20d.js";import{c as G}from"./createLucideIcon-CNO9LAd6.js";import{S as T}from"./sliders-horizontal-DEnnT710.js";import{B as H}from"./box-BuDmH90e.js";import{S as V}from"./settings-ByzoFsiR.js";import{C as L}from"./cpu-D9GHsdqb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],B=G("file-text",F);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],A=G("pencil",O);function s({className:a,icon:_,title:R,items:d,onEdit:m}){const p=!m,u=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"bg-muted flex size-9 shrink-0 items-center justify-center rounded-md shadow-xs",children:_}),e.jsx("span",{className:"text-card-foreground flex-1 text-base font-semibold",children:R}),!p&&e.jsx(A,{className:"text-secondary-foreground size-4 shrink-0"})]}),d.length>0&&e.jsx("dl",{className:"mt-4 flex flex-col gap-1 text-sm",children:d.map(o=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("dt",{className:"text-muted-foreground w-18 shrink-0",children:o.label}),e.jsx("dd",{className:"text-accent-foreground min-w-0 wrap-break-word",children:o.value||"-"})]},String(o.label)))})]});return p?e.jsx("div",{className:x("bg-muted/30 rounded-xl border px-7 py-5",a),children:u}):e.jsx("button",{className:x("bg-muted/30 hover:bg-muted/50 cursor-pointer rounded-xl border px-7 py-5 text-left transition-colors",a),type:"button","aria-label":"Edit",onClick:m,children:u})}s.__docgenInfo={description:"",methods:[],displayName:"StepSummaryCard",props:{className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: ReactNode
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"ReactNode",required:!0}}]}}],raw:"StepSummaryItem[]"},description:""},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"미전달 시 읽기 전용 모드"}}};const ae={title:"Molecules/StepSummaryCard",component:s,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{icon:e.jsx(H,{className:"size-4"}),title:"컨테이너",items:[{label:"이미지",value:"nginx:latest"},{label:"GPU",value:"gpu-large"},{label:"컨테이너 수",value:"3"}],onEdit:()=>{}},render:a=>e.jsx("div",{className:"w-160",children:e.jsx(s,{...a})})},l={args:{icon:e.jsx(V,{className:"size-4"}),title:"설정",items:[],onEdit:()=>{}},render:a=>e.jsx("div",{className:"w-160",children:e.jsx(s,{...a})})},n={args:{icon:e.jsx(L,{className:"size-4"}),title:"리소스",items:[{label:"CPU",value:""},{label:"Memory",value:""},{label:"GPU",value:""}],onEdit:()=>{}},render:a=>e.jsx("div",{className:"w-160",children:e.jsx(s,{...a})})},i={args:{icon:e.jsx(B,{className:"size-4"}),title:"설명",items:[{label:"Description",value:e.jsx("span",{className:"line-clamp-1 wrap-break-word",children:"이 템플릿은 GPU 기반 분산 학습 워크로드를 위한 것으로, 데이터 전처리부터 모델 학습, 평가, 체크포인트 저장까지의 전체 파이프라인을 포함하며 영역을 초과하면 한 줄로 말줄임 처리됩니다"})}],onEdit:()=>{}},render:a=>e.jsx("div",{className:"w-160",children:e.jsx(s,{...a})})},r={args:{icon:e.jsx(H,{className:"size-4"}),title:"컨테이너",items:[{label:"이미지",value:"nginx:latest"},{label:"GPU",value:"gpu-large"},{label:"컨테이너 수",value:"3"}]},render:a=>e.jsx("div",{className:"w-160",children:e.jsx(s,{...a})})},c={args:{icon:e.jsx(T,{className:"size-4"}),title:"고급",items:[{label:"Advanced",value:e.jsxs("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-1",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"text-muted-foreground",children:"History Limit"}),e.jsx("span",{children:"성공 3 / 실패 1"})]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"text-muted-foreground",children:"Concurrency policy"}),e.jsx("span",{children:"Forbid"})]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"text-muted-foreground",children:"Starting Deadline Seconds"}),e.jsx("span",{children:"120"})]})]})}],onEdit:()=>{}},render:a=>e.jsx("div",{className:"w-160",children:e.jsx(s,{...a})})};var g,v,N;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: <BoxIcon className="size-4" />,
    title: '컨테이너',
    items: [{
      label: '이미지',
      value: 'nginx:latest'
    }, {
      label: 'GPU',
      value: 'gpu-large'
    }, {
      label: '컨테이너 수',
      value: '3'
    }],
    onEdit: () => {}
  },
  render: args => <div className="w-160">
      <StepSummaryCard {...args} />
    </div>
}`,...(N=(v=t.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var y,h,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: <SettingsIcon className="size-4" />,
    title: '설정',
    items: [],
    onEdit: () => {}
  },
  render: args => <div className="w-160">
      <StepSummaryCard {...args} />
    </div>
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,j,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: <CpuIcon className="size-4" />,
    title: '리소스',
    items: [{
      label: 'CPU',
      value: ''
    }, {
      label: 'Memory',
      value: ''
    }, {
      label: 'GPU',
      value: ''
    }],
    onEdit: () => {}
  },
  render: args => <div className="w-160">
      <StepSummaryCard {...args} />
    </div>
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,z,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    icon: <FileTextIcon className="size-4" />,
    title: '설명',
    items: [{
      label: 'Description',
      // 말줄임은 호출처에서 value 에 직접 적용한다 (컴포넌트는 데이터만 렌더).
      value: <span className="line-clamp-1 wrap-break-word">
            이 템플릿은 GPU 기반 분산 학습 워크로드를 위한 것으로, 데이터
            전처리부터 모델 학습, 평가, 체크포인트 저장까지의 전체 파이프라인을
            포함하며 영역을 초과하면 한 줄로 말줄임 처리됩니다
          </span>
    }],
    onEdit: () => {}
  },
  render: args => <div className="w-160">
      <StepSummaryCard {...args} />
    </div>
}`,...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var k,E,I,P,U;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    icon: <BoxIcon className="size-4" />,
    title: '컨테이너',
    items: [{
      label: '이미지',
      value: 'nginx:latest'
    }, {
      label: 'GPU',
      value: 'gpu-large'
    }, {
      label: '컨테이너 수',
      value: '3'
    }]
  },
  render: args => <div className="w-160">
      <StepSummaryCard {...args} />
    </div>
}`,...(I=(E=r.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:"onEdit 미전달 → 읽기 전용 모드 (연필 아이콘/버튼/hover 없이 plain div)",...(U=(P=r.parameters)==null?void 0:P.docs)==null?void 0:U.description}}};var q,M,D;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    icon: <SlidersHorizontalIcon className="size-4" />,
    title: '고급',
    items: [{
      label: 'Advanced',
      // 복합 JSX 는 말줄임을 적용하지 않으므로 그대로 줄바꿈된다.
      value: <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5">
              <span className="text-muted-foreground">History Limit</span>
              <span>성공 3 / 실패 1</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-muted-foreground">Concurrency policy</span>
              <span>Forbid</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-muted-foreground">
                Starting Deadline Seconds
              </span>
              <span>120</span>
            </span>
          </div>
    }],
    onEdit: () => {}
  },
  render: args => <div className="w-160">
      <StepSummaryCard {...args} />
    </div>
}`,...(D=(M=c.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const se=["Default","EmptyItems","WithDashValues","LongValue","ReadOnly","ComplexValue"];export{c as ComplexValue,t as Default,l as EmptyItems,i as LongValue,r as ReadOnly,n as WithDashValues,se as __namedExportsOrder,ae as default};
