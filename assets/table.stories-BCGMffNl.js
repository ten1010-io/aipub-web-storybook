import{j as e}from"./iframe-D1zcNpR6.js";import{T as r,a as d,b as t,c as n,d as c,e as l,f as H,g as v}from"./table-BU5Rx0fk.js";import"./preload-helper-Dp1pzeXC.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";const B={title:"Organisms/Table",component:r,parameters:{layout:"centered"},tags:["autodocs"]},b=[{invoice:"INV001",paymentStatus:"결제 완료",totalAmount:"₩250,000",paymentMethod:"신용카드"},{invoice:"INV002",paymentStatus:"대기중",totalAmount:"₩150,000",paymentMethod:"계좌이체"},{invoice:"INV003",paymentStatus:"결제 완료",totalAmount:"₩350,000",paymentMethod:"신용카드"},{invoice:"INV004",paymentStatus:"취소됨",totalAmount:"₩450,000",paymentMethod:"계좌이체"},{invoice:"INV005",paymentStatus:"결제 완료",totalAmount:"₩550,000",paymentMethod:"신용카드"},{invoice:"INV006",paymentStatus:"결제 완료",totalAmount:"₩650,000",paymentMethod:"신용카드"},{invoice:"INV007",paymentStatus:"결제 완료",totalAmount:"₩750,000",paymentMethod:"신용카드"}],o={render:()=>e.jsxs(r,{children:[e.jsx(d,{children:e.jsxs(t,{children:[e.jsx(n,{children:"송장번호"}),e.jsx(n,{children:"결제상태"}),e.jsx(n,{children:"결제금액"}),e.jsx(n,{children:"결제수단"})]})}),e.jsx(c,{children:b.map(a=>e.jsxs(t,{children:[e.jsx(l,{children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.totalAmount}),e.jsx(l,{children:a.paymentMethod})]},a.invoice))})]})},i={render:()=>e.jsxs(r,{children:[e.jsx(H,{children:"최근 결제 내역 목록입니다."}),e.jsx(d,{children:e.jsxs(t,{children:[e.jsx(n,{children:"송장번호"}),e.jsx(n,{children:"결제상태"}),e.jsx(n,{children:"결제금액"}),e.jsx(n,{children:"결제수단"})]})}),e.jsx(c,{children:b.map(a=>e.jsxs(t,{children:[e.jsx(l,{children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.totalAmount}),e.jsx(l,{children:a.paymentMethod})]},a.invoice))})]})},s={render:()=>e.jsxs(r,{children:[e.jsx(d,{children:e.jsxs(t,{children:[e.jsx(n,{children:"송장번호"}),e.jsx(n,{children:"결제상태"}),e.jsx(n,{children:"결제금액"}),e.jsx(n,{children:"결제수단"})]})}),e.jsx(c,{children:b.map(a=>e.jsxs(t,{children:[e.jsx(l,{children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.totalAmount}),e.jsx(l,{children:a.paymentMethod})]},a.invoice))}),e.jsx(v,{children:e.jsxs(t,{children:[e.jsx(l,{colSpan:2,children:"총계"}),e.jsx(l,{colSpan:2,children:"₩1,750,000"})]})})]})};var T,m,p;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>송장번호</TableHead>
          <TableHead>결제상태</TableHead>
          <TableHead>결제금액</TableHead>
          <TableHead>결제수단</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,x,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>최근 결제 내역 목록입니다.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>송장번호</TableHead>
          <TableHead>결제상태</TableHead>
          <TableHead>결제금액</TableHead>
          <TableHead>결제수단</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var u,y,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>송장번호</TableHead>
          <TableHead>결제상태</TableHead>
          <TableHead>결제금액</TableHead>
          <TableHead>결제수단</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>총계</TableCell>
          <TableCell colSpan={2}>₩1,750,000</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const I=["Default","WithCaption","WithFooter"];export{o as Default,i as WithCaption,s as WithFooter,I as __namedExportsOrder,B as default};
