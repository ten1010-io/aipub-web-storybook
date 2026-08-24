import{C as R}from"./copy-button-CD5rdIOb.js";import"./iframe-D1zcNpR6.js";import"./preload-helper-Dp1pzeXC.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";import"./popover-CIjp3jnJ.js";import"./index-DW48STyt.js";import"./index-1Mm1CGHb.js";import"./index--CsRPePo.js";import"./index-CPSRtOzn.js";import"./index-2Le0S55P.js";import"./index-BKTwx-x6.js";import"./index-DZ_8RjGI.js";import"./index-CZXvctcB.js";import"./index-CI7ycuOB.js";import"./index-Ds-udM4m.js";import"./index-kJD_jmLN.js";import"./index-B00a84uN.js";import"./index-ypquQVYa.js";import"./index-D0pAv75W.js";import"./index-BWesfKH1.js";import"./layout-DJYywupw.js";import"./button-CqDsn7PQ.js";import"./index-Dp3B9jqt.js";import"./createLucideIcon-CNO9LAd6.js";import"./check-Bu0SrguS.js";import"./copy-Dx3dUlfF.js";const{expect:e,userEvent:x,waitFor:w,within:i}=__STORYBOOK_MODULE_TEST__,Z={title:"Atoms/CopyButton",component:R,parameters:{layout:"centered",a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}}},tags:["autodocs"],argTypes:{value:{control:"text"},className:{control:"text"}}},a={args:{value:"Hello, World!"},play:async({canvasElement:o})=>{const t=i(o).getByRole("button",{name:/copy to clipboard/i});e(t).toBeInTheDocument()}},c={args:{value:"Copied text example"},play:async({canvasElement:o})=>{const n=i(o),t=n.getByRole("button",{name:/copy to clipboard/i});e(t).toBeInTheDocument(),await x.click(t);const p=await n.findByRole("button",{name:/copied!/i});e(p).toBeInTheDocument()}},s={args:{className:"bg-blue-500 hover:bg-blue-600",value:"Custom styled"},play:async({canvasElement:o})=>{const t=i(o).getByRole("button",{name:/copy to clipboard/i});e(t).toBeInTheDocument(),e(t).toHaveClass("bg-blue-500"),e(t).toHaveClass("hover:bg-blue-600")}},r={args:{value:"State reset test"},play:async({canvasElement:o})=>{const n=i(o),t=n.getByRole("button",{name:/copy to clipboard/i});e(t).toBeInTheDocument(),await x.click(t);const p=await n.findByRole("button",{name:/copied!/i});e(p).toBeInTheDocument(),await w(()=>{e(n.getByRole("button",{name:/copy to clipboard/i})).toBeInTheDocument()},{timeout:2e3})}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: 'Hello, World!'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 버튼이 렌더링되었는지 확인
    const button = canvas.getByRole('button', {
      name: /copy to clipboard/i
    });
    expect(button).toBeInTheDocument();
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,d,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 'Copied text example'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 초기 상태: Copy 아이콘과 aria-label 확인
    const button = canvas.getByRole('button', {
      name: /copy to clipboard/i
    });
    expect(button).toBeInTheDocument();

    // 버튼 클릭
    await userEvent.click(button);

    // 클릭 후: aria-label이 'Copied!'로 변경되었는지 확인 (async이므로 findByRole 사용)
    const copiedButton = await canvas.findByRole('button', {
      name: /copied!/i
    });
    expect(copiedButton).toBeInTheDocument();
  }
}`,...(y=(d=c.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var v,B,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    className: 'bg-blue-500 hover:bg-blue-600',
    value: 'Custom styled'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /copy to clipboard/i
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-500');
    expect(button).toHaveClass('hover:bg-blue-600');
  }
}`,...(g=(B=s.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var h,C,T;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 'State reset test'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 초기 상태 확인
    const button = canvas.getByRole('button', {
      name: /copy to clipboard/i
    });
    expect(button).toBeInTheDocument();

    // 버튼 클릭
    await userEvent.click(button);

    // 클릭 직후: aria-label이 'Copied!'로 변경됨
    const copiedButton = await canvas.findByRole('button', {
      name: /copied!/i
    });
    expect(copiedButton).toBeInTheDocument();

    // 1500ms 후 상태가 리셋되어 aria-label이 다시 'Copy to clipboard'로 변경됨
    await waitFor(() => {
      expect(canvas.getByRole('button', {
        name: /copy to clipboard/i
      })).toBeInTheDocument();
    }, {
      timeout: 2000
    });
  }
}`,...(T=(C=r.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const $=["Default","ClickToCopy","WithCustomClassName","StateResetAfterTimeout"];export{c as ClickToCopy,a as Default,r as StateResetAfterTimeout,s as WithCustomClassName,$ as __namedExportsOrder,Z as default};
