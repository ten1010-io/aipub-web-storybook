import{j as n}from"./iframe-D1zcNpR6.js";import{useMDXComponents as i}from"./index-3OC-FOPv.js";import{M as c,C as r}from"./blocks-9_Uf7bwX.js";import{I as d,M as t,G as l,a as h,b as x,S as j}from"./Icons.stories-DMpZCOWt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./custom-resource-icon-Bih8OfhB.js";import"./exclude-icon-DOqtOo4f.js";import"./info-circle-icon-ChAGqvpJ.js";import"./bullhorn-icon-CjwRuu-e.js";import"./workspace-icon-wXNivQsr.js";import"./sort-DqiwD7g5.js";import"./chevron-up-DHHewRAk.js";import"./createLucideIcon-CNO9LAd6.js";import"./chevron-down-DTDP-A0u.js";function o(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:d}),`
`,n.jsx(e.h1,{id:"icons",children:"Icons"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"src/components/icons/"}),` 의 인라인 SVG 아이콘 모음. 서비스에서 반복 노출되는
아이콘은 여기에 컴포넌트로 등록해 쓰고, 일회성 장식 아이콘은
`,n.jsx(e.a,{href:"https://lucide.dev",rel:"nofollow",children:"lucide-react"})," 를 직접 쓴다."]}),`
`,n.jsx(e.h2,{id:"사용법",children:"사용법"}),`
`,n.jsxs(e.p,{children:["모든 아이콘은 ",n.jsx(e.code,{children:"React.SVGProps<SVGSVGElement>"})," 를 그대로 받는다."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { JobIcon } from '@/components/icons/menu/job-icon'

function Row() {
  return <JobIcon className="text-muted-foreground size-5" />
}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"색"}),": ",n.jsx(e.code,{children:"fill-current"})," 이므로 ",n.jsx(e.code,{children:"text-*"})," 토큰으로 지정한다. hex 를 직접 넣지 않는다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"크기"}),": 기본 18×18. ",n.jsx(e.code,{children:"size-*"})," 로 덮어쓴다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"접근성"}),": 의미를 전달하는 아이콘이면 감싸는 요소에 ",n.jsx(e.code,{children:"aria-label"}),` 을 주고,
장식용이면 `,n.jsx(e.code,{children:"aria-hidden"})," 을 준다."]}),`
`]}),`
`,n.jsx(e.h2,{id:"menu",children:"Menu"}),`
`,n.jsx(e.p,{children:"GNB 좌측 사이드바 메뉴에 대응한다. 새 메뉴를 추가하면 이 그룹에 아이콘을 함께 등록한다."}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(e.h2,{id:"gnb",children:"GNB"}),`
`,n.jsx(e.p,{children:"상단 글로벌 내비게이션 바 전용."}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(e.h2,{id:"general",children:"General"}),`
`,n.jsx(e.p,{children:"본문 어디서나 쓰이는 범용 아이콘."}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"misc",children:"Misc"}),`
`,n.jsx(e.p,{children:"방향 표시·커스텀 리소스 등 그룹에 속하지 않는 아이콘."}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h2,{id:"sort-indicator",children:"Sort indicator"}),`
`,n.jsxs(e.p,{children:["테이블 헤더의 정렬 상태(",n.jsx(e.code,{children:"false"})," / ",n.jsx(e.code,{children:"asc"})," / ",n.jsx(e.code,{children:"desc"}),")를 나타낸다."]}),`
`,n.jsx(r,{of:j})]})}function v(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{v as default};
