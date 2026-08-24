import{j as t}from"./iframe-D1zcNpR6.js";import{s as o}from"./toast-Deldctki.js";import{B as r}from"./button-CqDsn7PQ.js";import{T as s}from"./sonner-lIKrGRJp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";const C={title:"Overlays/Sonner",component:s,parameters:{layout:"centered"},tags:["autodocs"]},e={render:()=>t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(s,{}),t.jsx(r,{onClick:()=>o({title:"저장되었습니다",description:"변경 사항이 반영되었습니다."}),children:"기본 토스트"}),t.jsx(r,{variant:"destructive",onClick:()=>o({title:"오류가 발생했습니다",variant:"error"}),children:"에러 토스트"}),t.jsx(r,{variant:"outline",onClick:()=>o({title:"항목이 삭제되었습니다",action:{label:"실행 취소",onClick:()=>{}}}),children:"액션 토스트"}),t.jsx(r,{variant:"secondary",onClick:()=>o({title:"5초 후 사라집니다",description:"duration 으로 노출 시간을 조절한다.",duration:5e3}),children:"지속시간 토스트"})]})};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Toaster />
      <Button onClick={() => showToast({
      title: '저장되었습니다',
      description: '변경 사항이 반영되었습니다.'
    })}>
        기본 토스트
      </Button>
      <Button variant="destructive" onClick={() => showToast({
      title: '오류가 발생했습니다',
      variant: 'error'
    })}>
        에러 토스트
      </Button>
      <Button variant="outline" onClick={() => showToast({
      title: '항목이 삭제되었습니다',
      action: {
        label: '실행 취소',
        onClick: () => {}
      }
    })}>
        액션 토스트
      </Button>
      <Button variant="secondary" onClick={() => showToast({
      title: '5초 후 사라집니다',
      description: 'duration 으로 노출 시간을 조절한다.',
      duration: 5000
    })}>
        지속시간 토스트
      </Button>
    </div>
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,C as default};
