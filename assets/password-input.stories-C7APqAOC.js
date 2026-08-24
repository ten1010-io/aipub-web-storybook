import{P}from"./password-input-CVFh5fvh.js";import"./iframe-D1zcNpR6.js";import"./preload-helper-Dp1pzeXC.js";import"./button-CqDsn7PQ.js";import"./index-1Mm1CGHb.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./common-DbPgu20d.js";import"./createLucideIcon-CNO9LAd6.js";import"./input-BdLAhE0_.js";import"./translation-DqiiAkod.js";import"./use-translation-DtBcGNwE.js";import"./tooltip-TWwZSAUh.js";import"./index-DW48STyt.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./scroll-area-Bq2697E3.js";import"./index-D2RyObxg.js";import"./index-BdQq_4o_.js";import"./dialog-DRp0rKUJ.js";import"./index-Ds-udM4m.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";const{expect:c,userEvent:T,waitFor:W,within:q}=__STORYBOOK_MODULE_TEST__,yr={title:"Atoms/PasswordInput",component:P,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},className:{control:"text"}}},e={args:{placeholder:"Enter your password"}},t={args:{placeholder:"Enter your password",defaultValue:"mypassword123"}},a={args:{placeholder:"Enter your password",disabled:!0}},o={args:{placeholder:"Enter your password","aria-invalid":!0}},s={args:{placeholder:"Enter your password",defaultValue:"readonly-secret",readOnly:!0}},r={args:{placeholder:"Enter your password",defaultValue:"mypassword123"},play:async({canvasElement:n})=>{const D=q(n),p=n.querySelector("input");c(p).toHaveAttribute("type","password");const H=D.getByRole("button");await T.click(H),await W(()=>c(p).toHaveAttribute("type","text"))}};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your password'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,m,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your password',
    defaultValue: 'mypassword123'
  }
}`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var w,g,E;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your password',
    disabled: true
  }
}`,...(E=(g=a.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var h,v,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your password',
    'aria-invalid': true
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,x,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your password',
    defaultValue: 'readonly-secret',
    readOnly: true
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var O,V,_,R,A;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your password',
    defaultValue: 'mypassword123'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvasElement.querySelector('input') as HTMLInputElement;

    // 초기 상태: 마스킹(type=password)
    expect(input).toHaveAttribute('type', 'password');

    // 토글 버튼 클릭
    const toggle = canvas.getByRole('button');
    await userEvent.click(toggle);

    // 클릭 후: 평문 노출(type=text)
    await waitFor(() => expect(input).toHaveAttribute('type', 'text'));
  }
}`,...(_=(V=r.parameters)==null?void 0:V.docs)==null?void 0:_.source},description:{story:`토글 버튼을 클릭하면 마스킹된 값이 평문으로 드러난다 —
컴포넌트의 유일한 부가 기능이라 play 함수로 인터랙션을 재현한다.`,...(A=(R=r.parameters)==null?void 0:R.docs)==null?void 0:A.description}}};const wr=["Default","WithValue","Disabled","WithError","ReadOnly","RevealPassword"];export{e as Default,a as Disabled,s as ReadOnly,r as RevealPassword,o as WithError,t as WithValue,wr as __namedExportsOrder,yr as default};
