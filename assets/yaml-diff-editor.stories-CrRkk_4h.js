import{r as h,j as a}from"./iframe-D1zcNpR6.js";import{w as y,p as x}from"./monaco-yaml-CClZO1WS.js";import{u as v}from"./use-theme-CdRakLb0.js";import{S as k}from"./spinner-glfWPPex.js";import"./preload-helper-Dp1pzeXC.js";import"./common-DbPgu20d.js";import"./clsx-B-dksMZM.js";const n="custom-dark-theme",S=300,T=364;function m({original:o,modified:p,autoHeight:r,heightOffset:f}){const{resolvedTheme:i}=v(),[u]=h.useState(()=>{const e=T+(f??0),g=window.innerHeight-e;return r?Math.max(S,g):void 0}),c=e=>{x(e),e.editor.defineTheme(n,{base:"vs-dark",inherit:!0,rules:[{token:"type",foreground:"#3B83D3"}],colors:{"editor.background":"#171717"}})};return a.jsx(y,{theme:i==="dark"?n:"light",height:r?u:"100%",language:"yaml",original:o,modified:p,loading:a.jsx(k,{}),beforeMount:c,options:{readOnly:!0,renderSideBySide:!0,minimap:{enabled:!1},wordWrap:"on",stopRenderingLineAfter:-1,fontSize:14,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always",foldingImportsByDefault:!0}},i)}m.__docgenInfo={description:"",methods:[],displayName:"YamlDiffEditor",props:{original:{required:!0,tsType:{name:"string"},description:""},modified:{required:!0,tsType:{name:"string"},description:""},autoHeight:{required:!1,tsType:{name:"boolean"},description:""},heightOffset:{required:!1,tsType:{name:"number"},description:""}}};const B={title:"Organisms/YamlDiffEditor",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[o=>a.jsx("div",{className:"h-[600px] w-full",children:a.jsx(o,{})})]},E=`apiVersion: v1
kind: ConfigMap
metadata:
  name: example-config
  namespace: default
  labels:
    app: example
    env: dev
data:
  key1: value1
  key2: value2`,H=`apiVersion: v1
kind: ConfigMap
metadata:
  name: example-config
  namespace: default
  labels:
    app: example
    env: prod
data:
  key1: value1
  key2: updated`,t={args:{original:E,modified:H,autoHeight:!1,heightOffset:200}};var s,d,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    original,
    modified,
    autoHeight: false,
    heightOffset: 200
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const I=["Default"];export{t as Default,I as __namedExportsOrder,B as default};
