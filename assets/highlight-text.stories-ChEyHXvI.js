import{r as w,j as e}from"./iframe-D1zcNpR6.js";import{H as o}from"./highlight-text-Oyrg7M21.js";import{D as j}from"./data-table-Y8dFEveE.js";import"./preload-helper-Dp1pzeXC.js";import"./data-table-Cn1IBcx3.js";import"./data-table-Bw91YHdX.js";import"./createLucideIcon-CNO9LAd6.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./use-mobile-CftkTFxc.js";import"./table-BU5Rx0fk.js";import"./spinner-glfWPPex.js";import"./no-data-NbT5p0HK.js";import"./button-CqDsn7PQ.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./use-translation-DtBcGNwE.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";import"./select-sNpWBML0.js";import"./index-DwS2aoMe.js";import"./index-BsiW0TuZ.js";import"./layout-DJYywupw.js";import"./translation-DqiiAkod.js";import"./react-Ivnay8U8.js";import"./truncated-text-DY6emO6I.js";import"./chevron-down-DTDP-A0u.js";import"./chevron-up-DHHewRAk.js";import"./chevron-left-C_tAKXAe.js";import"./chevron-right-D02Vcqhr.js";const Te={title:"Atoms/HighlightText",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{text:{control:"text"},searchValue:{control:"text"},className:{control:"text"}}},l={args:{text:"Hello, World!",searchValue:"World"}},t={args:{text:1234567,searchValue:"345"}},i={args:{text:"",searchValue:""},render:()=>{const[r,s]=w.useState("");return e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsxs("div",{className:"flex items-center gap-x-2",children:["검색어:",e.jsx("input",{className:"focus:ring-foreground/30 h-9 w-80 rounded border px-3 text-sm outline-none focus:ring-2",placeholder:"Type to highlight...",value:r,onChange:m=>s(m.target.value)})]}),e.jsx(o,{text:"Storybook makes it easy to develop UI components and pages in isolation.",searchValue:r})]})}},c={args:{text:"",searchValue:""},render:()=>{const[r,s]=w.useState(""),n=[{accessorKey:"name",header:"이름",cell:({row:a})=>e.jsx(o,{text:a.getValue("name"),searchValue:r})},{accessorKey:"email",header:"이메일",cell:({row:a})=>e.jsx(o,{text:a.getValue("email"),searchValue:r})},{accessorKey:"role",header:"역할",cell:({row:a})=>e.jsx(o,{text:a.getValue("role"),searchValue:r})}],m=[{id:1,name:"홍길동",email:"hong@example.com",role:"관리자"},{id:2,name:"김철수",email:"kim@example.com",role:"사용자"},{id:3,name:"이영희",email:"lee@example.com",role:"사용자"},{id:4,name:"박영수",email:"park@example.com",role:"운영자"}];return e.jsxs("div",{className:"flex w-[900px] flex-col gap-y-3",children:[e.jsxs("div",{className:"flex items-center gap-x-2",children:["검색어:",e.jsx("input",{className:"focus:ring-foreground/30 h-9 w-80 rounded border px-3 text-sm outline-none focus:ring-2",placeholder:"Type to search...",value:r,onChange:a=>s(a.target.value)})]}),e.jsx(j,{columns:n,data:m,rowKeyField:"id",globalFilter:r,onGlobalFilterChange:s,hidePagination:!0,fixedHeight:320})]})}};var p,u,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'Hello, World!',
    searchValue: 'World'
  }
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,x,g,f,V;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: 1234567,
    searchValue: '345'
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source},description:{story:"`text` 는 number 도 허용한다 — 내부에서 `toString()` 후 하이라이트한다.",...(V=(f=t.parameters)==null?void 0:f.docs)==null?void 0:V.description}}};var v,y,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: '',
    searchValue: ''
  },
  render: () => {
    const [value, setValue] = useState('');
    const text = 'Storybook makes it easy to develop UI components and pages in isolation.';
    return <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          검색어:
          <input className="focus:ring-foreground/30 h-9 w-80 rounded border px-3 text-sm outline-none focus:ring-2" placeholder="Type to highlight..." value={value} onChange={e => setValue(e.target.value)} />
        </div>
        <HighlightText text={text} searchValue={value} />
      </div>;
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var T,b,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: '',
    searchValue: ''
  },
  render: () => {
    type Person = {
      id: number;
      name: string;
      email: string;
      role: string;
    };
    const [search, setSearch] = useState('');
    const columns: ColumnDef<Person>[] = [{
      accessorKey: 'name',
      header: '이름',
      cell: ({
        row
      }) => <HighlightText text={row.getValue('name')} searchValue={search} />
    }, {
      accessorKey: 'email',
      header: '이메일',
      cell: ({
        row
      }) => <HighlightText text={row.getValue('email')} searchValue={search} />
    }, {
      accessorKey: 'role',
      header: '역할',
      cell: ({
        row
      }) => <HighlightText text={row.getValue('role')} searchValue={search} />
    }];
    const data: Person[] = [{
      id: 1,
      name: '홍길동',
      email: 'hong@example.com',
      role: '관리자'
    }, {
      id: 2,
      name: '김철수',
      email: 'kim@example.com',
      role: '사용자'
    }, {
      id: 3,
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자'
    }, {
      id: 4,
      name: '박영수',
      email: 'park@example.com',
      role: '운영자'
    }];
    return <div className="flex w-[900px] flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          검색어:
          <input className="focus:ring-foreground/30 h-9 w-80 rounded border px-3 text-sm outline-none focus:ring-2" placeholder="Type to search..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <DataTable<Person> columns={columns} data={data} rowKeyField="id" globalFilter={search} onGlobalFilterChange={setSearch} hidePagination fixedHeight={320} />
      </div>;
  }
}`,...(N=(b=c.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};const be=["Default","NumericText","WithSearchInput","WithDataTableSearch"];export{l as Default,t as NumericText,c as WithDataTableSearch,i as WithSearchInput,be as __namedExportsOrder,Te as default};
