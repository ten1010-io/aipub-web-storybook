import{j as h}from"./iframe-D1zcNpR6.js";import{C as S}from"./checkbox-CS_7gjC8.js";import{D as le}from"./data-table-Y8dFEveE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Mm1CGHb.js";import"./index--CsRPePo.js";import"./index-DW48STyt.js";import"./index-BWesfKH1.js";import"./index-CI7ycuOB.js";import"./index-BsiW0TuZ.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./check-Bu0SrguS.js";import"./createLucideIcon-CNO9LAd6.js";import"./data-table-Cn1IBcx3.js";import"./data-table-Bw91YHdX.js";import"./use-mobile-CftkTFxc.js";import"./table-BU5Rx0fk.js";import"./spinner-glfWPPex.js";import"./no-data-NbT5p0HK.js";import"./button-CqDsn7PQ.js";import"./index-Dp3B9jqt.js";import"./use-translation-DtBcGNwE.js";import"./tooltip-TWwZSAUh.js";import"./index-CPSRtOzn.js";import"./index-CZXvctcB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./copy-Dx3dUlfF.js";import"./select-sNpWBML0.js";import"./index-DwS2aoMe.js";import"./layout-DJYywupw.js";import"./translation-DqiiAkod.js";import"./react-Ivnay8U8.js";import"./truncated-text-DY6emO6I.js";import"./chevron-down-DTDP-A0u.js";import"./chevron-up-DHHewRAk.js";import"./chevron-left-C_tAKXAe.js";import"./chevron-right-D02Vcqhr.js";const r=[{id:"select",size:40,header:({table:o})=>h.jsx(S,{checked:o.getIsAllPageRowsSelected(),onCheckedChange:e=>o.toggleAllPageRowsSelected(!!e),"aria-label":"전체 선택"}),cell:({row:o})=>h.jsx(S,{checked:o.getIsSelected(),onCheckedChange:e=>o.toggleSelected(!!e),"aria-label":"행 선택"}),enableSorting:!1,enableGlobalFilter:!1},{accessorKey:"name",header:"이름"},{accessorKey:"email",header:"이메일"},{accessorKey:"role",header:"역할"}],a=[{id:1,name:"홍길동",email:"hong@example.com",role:"관리자"},{id:2,name:"김철수",email:"kim@example.com",role:"사용자"},{id:3,name:"이영희",email:"lee@example.com",role:"사용자"}],so={title:"Organisms/DataTable",component:le,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{columns:r,data:a,rowKeyField:"id"}},n={args:{columns:r,data:Array.from({length:100},(o,e)=>({id:e+1,name:`사용자 ${e+1}`,email:`user${e+1}@example.com`,role:e%5===0?"관리자":"사용자"})),rowKeyField:"id"}},t={args:{columns:r,data:a,rowKeyField:"id",selectedRowKeys:[1]}},i={args:{columns:r,data:Array.from({length:10},(o,e)=>({id:e+1,name:`사용자 ${e+1}`,email:`user${e+1}@example.com`,role:e%3===0?"관리자":"사용자"})),rowKeyField:"id",selectedRowKeys:[1,3,5],disabledRowKeys:[2,4],onChangeRowSelection:o=>{console.log("Selected data:",o)}}},l={args:{columns:r,data:a,rowKeyField:"id",loading:!0}},d={args:{columns:r,data:Array.from({length:10},(o,e)=>({id:e+1,name:`사용자 ${e+1}`,email:`user${e+1}@example.com`,role:e%3===0?"관리자":"사용자"})),rowKeyField:"id",onChangeRowSelection:o=>{console.log("Selected data:",o)}}},c={name:"Empty (NoData)",args:{columns:r,data:[],rowKeyField:"id"}},m={args:{columns:r,data:a,rowKeyField:"id",disabledRowKeys:[2]}},p={args:{columns:r,data:a,rowKeyField:"id",onRowClick:o=>console.log("row clicked",o)}},u={args:{columns:r,data:a,rowKeyField:"id",hideColumnBorders:!0}},g={args:{columns:r,data:a,rowKeyField:"id",globalFilter:"김"}},w={args:{columns:r,data:a,rowKeyField:"id",globalFilter:"zzz-no-match"}},y={args:{columns:r,data:a,rowKeyField:"id",hidePagination:!0}},K={args:{columns:r,data:a,rowKeyField:"id",selectedRowKeys:[1,3],hideSelectedRowCount:!0}};var F,R,b;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKeyField: 'id'
  }
}`,...(b=(R=s.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var C,x,f;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    columns,
    data: Array.from({
      length: 100
    }, (_, i) => ({
      id: i + 1,
      name: \`사용자 \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: i % 5 === 0 ? '관리자' : '사용자'
    })),
    rowKeyField: 'id'
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,D,$;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKeyField: 'id',
    selectedRowKeys: [1]
  }
}`,...($=(D=t.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var A,P,_;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    columns,
    data: Array.from({
      length: 10
    }, (_, i) => ({
      id: i + 1,
      name: \`사용자 \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: i % 3 === 0 ? '관리자' : '사용자'
    })),
    rowKeyField: 'id',
    selectedRowKeys: [1, 3, 5],
    disabledRowKeys: [2, 4],
    // Some rows are disabled for selection
    onChangeRowSelection: selectedData => {
      console.log('Selected data:', selectedData);
    }
  }
}`,...(_=(P=i.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var z,E,H;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKeyField: 'id',
    loading: true
  }
}`,...(H=(E=l.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var W,G,j;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    columns,
    data: Array.from({
      length: 10
    }, (_, i) => ({
      id: i + 1,
      name: \`사용자 \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: i % 3 === 0 ? '관리자' : '사용자'
    })),
    rowKeyField: 'id',
    onChangeRowSelection: selectedData => {
      console.log('Selected data:', selectedData);
    }
  }
}`,...(j=(G=d.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var B,N,I;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Empty (NoData)',
  args: {
    columns,
    data: [],
    rowKeyField: 'id'
  }
}`,...(I=(N=c.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var L,M,O;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKeyField: 'id',
    disabledRowKeys: [2]
  }
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var T,q,v;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKeyField: 'id',
    onRowClick: row => console.log('row clicked', row)
  }
}`,...(v=(q=p.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var J,Q,U;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKeyField: 'id',
    hideColumnBorders: true
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKeyField: 'id',
    globalFilter: '김'
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,oe;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKeyField: 'id',
    globalFilter: 'zzz-no-match'
  }
}`,...(oe=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,ae,se;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKeyField: 'id',
    hidePagination: true
  }
}`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,te,ie;K.parameters={...K.parameters,docs:{...(ne=K.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKeyField: 'id',
    selectedRowKeys: [1, 3],
    hideSelectedRowCount: true
  }
}`,...(ie=(te=K.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};const no=["Default","WithPagination","WithSelection","MultipleSelection","Loading","WithCheckboxSelection","Empty","DisabledRows","RowClick","HideColumnBorders","GlobalFilter","GlobalFilterNoResult","HidePagination","HideSelectedRowCount"];export{s as Default,m as DisabledRows,c as Empty,g as GlobalFilter,w as GlobalFilterNoResult,u as HideColumnBorders,y as HidePagination,K as HideSelectedRowCount,l as Loading,i as MultipleSelection,p as RowClick,d as WithCheckboxSelection,n as WithPagination,t as WithSelection,no as __namedExportsOrder,so as default};
