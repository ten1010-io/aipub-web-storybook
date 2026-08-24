import{T as S}from"./truncated-text-DY6emO6I.js";import"./iframe-D1zcNpR6.js";import"./preload-helper-Dp1pzeXC.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index-1Mm1CGHb.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";const Q={title:"Molecules/TruncatedText",component:S,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{children:"This is a short text that does not need truncation"}},s={args:{children:"This is a very long text that will definitely need truncation because it exceeds the available space and should show an ellipsis at the end. When you hover over this text, you should see a tooltip with the full content.",className:"w-[200px]"}},a={args:{children:"This text is limited by its character count",maxChars:24}},o={args:{children:"This is a very long text that will be truncated but will not show a tooltip when hovered because showTooltip is set to false.",showTooltip:!1,className:"w-[200px]"}},r={args:{children:"ThisIsAVeryLongWordWithoutSpacesThatShouldBreakAndWrapToTheNextLine",className:"w-[200px]"}},e={args:{children:"This is a fairly long paragraph of text that spans several lines. With maxLines set to 2, it should clamp to exactly two lines and show an ellipsis once the content overflows the available height.",maxLines:2,className:"w-[200px]"}};var i,n,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'This is a short text that does not need truncation'
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,h,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is a very long text that will definitely need truncation because it exceeds the available space and should show an ellipsis at the end. When you hover over this text, you should see a tooltip with the full content.',
    className: 'w-[200px]'
  }
}`,...(p=(h=s.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'This text is limited by its character count',
    maxChars: 24
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,g,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'This is a very long text that will be truncated but will not show a tooltip when hovered because showTooltip is set to false.',
    showTooltip: false,
    className: 'w-[200px]'
  }
}`,...(T=(g=o.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var w,y,W;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'ThisIsAVeryLongWordWithoutSpacesThatShouldBreakAndWrapToTheNextLine',
    className: 'w-[200px]'
  }
}`,...(W=(y=r.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var f,v,b,L,N;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'This is a fairly long paragraph of text that spans several lines. With maxLines set to 2, it should clamp to exactly two lines and show an ellipsis once the content overflows the available height.',
    maxLines: 2,
    className: 'w-[200px]'
  }
}`,...(b=(v=e.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"maxLines=2 — 두 줄까지 표시 후 말줄임 (기본 1줄이 아닌 다중 줄 클램프)",...(N=(L=e.parameters)==null?void 0:L.docs)==null?void 0:N.description}}};const R=["Default","LongTextWithTruncation","WithMaxChars","WithoutTooltip","WithBreakWords","MultiLine"];export{t as Default,s as LongTextWithTruncation,e as MultiLine,r as WithBreakWords,a as WithMaxChars,o as WithoutTooltip,R as __namedExportsOrder,Q as default};
