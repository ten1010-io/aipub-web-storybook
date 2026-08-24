import{j as o}from"./iframe-D1zcNpR6.js";import{C as g}from"./checkbox-CS_7gjC8.js";import{D as n}from"./data-table-Y8dFEveE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index--CsRPePo.js";import"./index-DW48STyt.js";import"./index-BWesfKH1.js";import"./index-CI7ycuOB.js";import"./index-BsiW0TuZ.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./check-Bu0SrguS.js";import"./createLucideIcon-CNO9LAd6.js";import"./data-table-Cn1IBcx3.js";import"./data-table-Bw91YHdX.js";import"./use-mobile-CftkTFxc.js";import"./table-BU5Rx0fk.js";import"./spinner-glfWPPex.js";import"./no-data-NbT5p0HK.js";import"./button-CqDsn7PQ.js";import"./index-Dp3B9jqt.js";import"./use-translation-DtBcGNwE.js";import"./tooltip-TWwZSAUh.js";import"./index-CPSRtOzn.js";import"./index-CZXvctcB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./copy-Dx3dUlfF.js";import"./select-sNpWBML0.js";import"./index-DwS2aoMe.js";import"./layout-DJYywupw.js";import"./translation-DqiiAkod.js";import"./react-Ivnay8U8.js";import"./truncated-text-DY6emO6I.js";import"./chevron-down-DTDP-A0u.js";import"./chevron-up-DHHewRAk.js";import"./chevron-left-C_tAKXAe.js";import"./chevron-right-D02Vcqhr.js";function i({table:c,row:e,...a}){if(c){const t=c.getIsAllPageRowsSelected()||c.getIsSomePageRowsSelected()&&"indeterminate",r=u=>{c.getRowModel().rows.forEach(h=>{h.getCanSelect()&&h.toggleSelected(!!u)})};return o.jsx(g,{"aria-label":"Select all",checked:t,onCheckedChange:r,...a})}if(e){const t=e.getIsSelected(),r=a.disabled!==void 0?a.disabled:!e.getCanSelect(),u=h=>e.toggleSelected(!!h);return o.jsx(g,{"aria-label":"Select row",checked:t,onCheckedChange:u,disabled:r,...a})}return o.jsx(g,{...a})}i.__docgenInfo={description:"",methods:[],displayName:"DataTableCheckbox",props:{className:{required:!1,tsType:{name:"string"},description:""},table:{required:!1,tsType:{name:"Table",elements:[{name:"T"}],raw:"Table<T>"},description:""},row:{required:!1,tsType:{name:"Row",elements:[{name:"T"}],raw:"Row<T>"},description:""}}};const{expect:s,userEvent:l,within:d}=__STORYBOOK_MODULE_TEST__,m=[{id:"1",name:"John Doe",email:"john@example.com"},{id:"2",name:"Jane Smith",email:"jane@example.com"},{id:"3",name:"Bob Johnson",email:"bob@example.com"},{id:"4",name:"Alice Brown",email:"alice@example.com"},{id:"5",name:"Charlie Davis",email:"charlie@example.com"}],je={title:"Atoms/DataTableCheckbox",component:i,parameters:{layout:"centered"},tags:["autodocs"]},b={render:()=>{const c=[{id:"select",size:40,header:({table:e})=>o.jsx(i,{table:e}),cell:({row:e})=>o.jsx(i,{row:e})},{accessorKey:"name",header:"Name",cell:({row:e})=>e.original.name},{accessorKey:"email",header:"Email",size:260,cell:({row:e})=>e.original.email}];return o.jsx("div",{className:"w-[560px]",children:o.jsx(n,{columns:c,data:m,rowKeyField:"id",hidePagination:!0})})},play:async({canvasElement:c})=>{const a=d(c).getAllByRole("checkbox");s(a.length).toBe(6);const t=a[1];await l.click(t),s(t).toBeChecked(),await l.click(t),s(t).not.toBeChecked()}},x={render:()=>{const c=[{id:"select",size:40,header:({table:e})=>o.jsx(i,{table:e}),cell:({row:e})=>o.jsx(i,{row:e})},{accessorKey:"name",header:"Name",cell:({row:e})=>e.original.name},{accessorKey:"email",header:"Email",size:260,cell:({row:e})=>e.original.email}];return o.jsx("div",{className:"w-[560px]",children:o.jsx(n,{columns:c,data:m,rowKeyField:"id",hidePagination:!0})})},play:async({canvasElement:c})=>{const a=d(c).getAllByRole("checkbox"),t=a[0];await l.click(t),a.slice(1).forEach(r=>{s(r).toBeChecked()}),await l.click(t),a.slice(1).forEach(r=>{s(r).not.toBeChecked()})}},p={render:()=>{const c=[{id:"select",size:40,header:({table:e})=>o.jsx(i,{table:e}),cell:({row:e})=>o.jsx(i,{row:e})},{accessorKey:"name",header:"Name",cell:({row:e})=>e.original.name},{accessorKey:"email",header:"Email",size:260,cell:({row:e})=>e.original.email}];return o.jsx("div",{className:"w-[560px]",children:o.jsx(n,{columns:c,data:m,rowKeyField:"id",hidePagination:!0})})},play:async({canvasElement:c})=>{const a=d(c).getAllByRole("checkbox"),t=a[0];await l.click(a[1]),await l.click(a[2]),s(t).toHaveAttribute("data-state","indeterminate")}},k={render:()=>{const c=[{id:"select",size:40,header:({table:e})=>o.jsx(i,{table:e}),cell:({row:e})=>o.jsx(i,{row:e})},{accessorKey:"name",header:"Name",cell:({row:e})=>e.original.name},{accessorKey:"email",header:"Email",size:260,cell:({row:e})=>e.original.email}];return o.jsx("div",{className:"w-[560px]",children:o.jsx(n,{columns:c,data:m,rowKeyField:"id",disabledRowKeys:["2","3"],hidePagination:!0})})},play:async({canvasElement:c})=>{const a=d(c).getAllByRole("checkbox");s(a[2]).toBeDisabled(),s(a[3]).toBeDisabled(),s(a[1]).not.toBeDisabled(),await l.click(a[1]),s(a[1]).toBeChecked();const t=a[0];await l.click(t),s(a[2]).not.toBeChecked(),s(a[3]).not.toBeChecked()}},w={render:()=>{const c=[{id:"select",size:40,header:({table:e})=>o.jsx(i,{table:e}),cell:({row:e})=>o.jsx(i,{row:e,disabled:!0})},{accessorKey:"name",header:"Name",cell:({row:e})=>e.original.name},{accessorKey:"email",header:"Email",size:260,cell:({row:e})=>e.original.email}];return o.jsx("div",{className:"w-[560px]",children:o.jsx(n,{columns:c,data:m,rowKeyField:"id",hidePagination:!0})})},play:async({canvasElement:c})=>{d(c).getAllByRole("checkbox").slice(1).forEach(t=>{s(t).toBeDisabled()})}};var y,C,v;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const columns: ColumnDef<Person>[] = [{
      id: 'select',
      size: 40,
      header: ({
        table
      }) => <DataTableCheckbox table={table} />,
      cell: ({
        row
      }) => <DataTableCheckbox row={row} />
    }, {
      accessorKey: 'name',
      header: 'Name',
      cell: ({
        row
      }) => row.original.name
    }, {
      accessorKey: 'email',
      header: 'Email',
      size: 260,
      cell: ({
        row
      }) => row.original.email
    }];
    return <div className="w-[560px]">
        <DataTable columns={columns} data={data} rowKeyField="id" hidePagination />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 모든 체크박스 확인
    const checkboxes = canvas.getAllByRole('checkbox');
    expect(checkboxes.length).toBe(6); // 1 header + 5 rows

    // 개별 행 체크박스 클릭 테스트 (row.toggleSelected 호출)
    const firstRowCheckbox = checkboxes[1];
    await userEvent.click(firstRowCheckbox);
    expect(firstRowCheckbox).toBeChecked();

    // 다시 클릭하여 해제
    await userEvent.click(firstRowCheckbox);
    expect(firstRowCheckbox).not.toBeChecked();
  }
}`,...(v=(C=b.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var E,D,B;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const columns: ColumnDef<Person>[] = [{
      id: 'select',
      size: 40,
      header: ({
        table
      }) => <DataTableCheckbox table={table} />,
      cell: ({
        row
      }) => <DataTableCheckbox row={row} />
    }, {
      accessorKey: 'name',
      header: 'Name',
      cell: ({
        row
      }) => row.original.name
    }, {
      accessorKey: 'email',
      header: 'Email',
      size: 260,
      cell: ({
        row
      }) => row.original.email
    }];
    return <div className="w-[560px]">
        <DataTable columns={columns} data={data} rowKeyField="id" hidePagination />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkbox');
    const headerCheckbox = checkboxes[0]; // Select all 체크박스

    // 전체 선택 클릭 (table.getRowModel().rows.forEach 호출)
    await userEvent.click(headerCheckbox);

    // 모든 행이 선택되었는지 확인
    checkboxes.slice(1).forEach(checkbox => {
      expect(checkbox).toBeChecked();
    });

    // 전체 선택 해제
    await userEvent.click(headerCheckbox);

    // 모든 행이 해제되었는지 확인
    checkboxes.slice(1).forEach(checkbox => {
      expect(checkbox).not.toBeChecked();
    });
  }
}`,...(B=(D=x.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var T,K,f;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const columns: ColumnDef<Person>[] = [{
      id: 'select',
      size: 40,
      header: ({
        table
      }) => <DataTableCheckbox table={table} />,
      cell: ({
        row
      }) => <DataTableCheckbox row={row} />
    }, {
      accessorKey: 'name',
      header: 'Name',
      cell: ({
        row
      }) => row.original.name
    }, {
      accessorKey: 'email',
      header: 'Email',
      size: 260,
      cell: ({
        row
      }) => row.original.email
    }];
    return <div className="w-[560px]">
        <DataTable columns={columns} data={data} rowKeyField="id" hidePagination />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkbox');
    const headerCheckbox = checkboxes[0];

    // 일부 행만 선택하여 indeterminate 상태 만들기
    await userEvent.click(checkboxes[1]); // 첫 번째 행 선택
    await userEvent.click(checkboxes[2]); // 두 번째 행 선택

    // header checkbox가 indeterminate 상태인지 확인
    expect(headerCheckbox).toHaveAttribute('data-state', 'indeterminate');
  }
}`,...(f=(K=p.parameters)==null?void 0:K.docs)==null?void 0:f.source}}};var R,j,S;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const columns: ColumnDef<Person>[] = [{
      id: 'select',
      size: 40,
      header: ({
        table
      }) => <DataTableCheckbox table={table} />,
      cell: ({
        row
      }) => <DataTableCheckbox row={row} />
    }, {
      accessorKey: 'name',
      header: 'Name',
      cell: ({
        row
      }) => row.original.name
    }, {
      accessorKey: 'email',
      header: 'Email',
      size: 260,
      cell: ({
        row
      }) => row.original.email
    }];
    return <div className="w-[560px]">
        <DataTable columns={columns} data={data} rowKeyField="id" disabledRowKeys={['2', '3']} hidePagination />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkbox');

    // disabled 행의 체크박스가 비활성화되었는지 확인
    expect(checkboxes[2]).toBeDisabled(); // id='2'
    expect(checkboxes[3]).toBeDisabled(); // id='3'

    // 활성화된 행은 선택 가능
    expect(checkboxes[1]).not.toBeDisabled();
    await userEvent.click(checkboxes[1]);
    expect(checkboxes[1]).toBeChecked();

    // 전체 선택 시 disabled 행은 선택되지 않음
    const headerCheckbox = checkboxes[0];
    await userEvent.click(headerCheckbox);

    // disabled 행은 여전히 체크되지 않음
    expect(checkboxes[2]).not.toBeChecked();
    expect(checkboxes[3]).not.toBeChecked();
  }
}`,...(S=(j=k.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var N,z,A;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const columns: ColumnDef<Person>[] = [{
      id: 'select',
      size: 40,
      header: ({
        table
      }) => <DataTableCheckbox table={table} />,
      // disabled를 명시적으로 true로 설정
      cell: ({
        row
      }) => <DataTableCheckbox row={row} disabled={true} />
    }, {
      accessorKey: 'name',
      header: 'Name',
      cell: ({
        row
      }) => row.original.name
    }, {
      accessorKey: 'email',
      header: 'Email',
      size: 260,
      cell: ({
        row
      }) => row.original.email
    }];
    return <div className="w-[560px]">
        <DataTable columns={columns} data={data} rowKeyField="id" hidePagination />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkbox');

    // 모든 행 체크박스가 disabled인지 확인 (props.disabled !== undefined 브랜치)
    checkboxes.slice(1).forEach(checkbox => {
      expect(checkbox).toBeDisabled();
    });
  }
}`,...(A=(z=w.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const Se=["InTable","SelectAll","IndeterminateState","InTableWithDisabledRows","WithExplicitDisabled"];export{b as InTable,k as InTableWithDisabledRows,p as IndeterminateState,x as SelectAll,w as WithExplicitDisabled,Se as __namedExportsOrder,je as default};
