const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mermaid.core-MFPtsXVX.js","./index-CySfgEHw.js","./index-BUILuLAv.css","./owner-Cs-ztUND.js","./StyledButton-0-JUJ9lO.js","./proxy-sxV_SSC0.js","./isEmpty-DrOE0CRk.js","./line-Ci9EUk7u.js","./array-BKyUJesY.js","./path-CbwjOpE9.js"])))=>i.map(i=>d[i]);
import{r as t,_ as g,j as s}from"./index-CySfgEHw.js";import{u as b}from"./use-is-dark-ByCc-u3_.js";import{u as w,F as y}from"./Gallery-BMZODlAJ.js";import{B as L}from"./alert-CX5KGFec.js";import"./StyledButton-0-JUJ9lO.js";import"./proxy-sxV_SSC0.js";import"./image-DetLiy-c.js";import"./use-ref-value-DdHjTcMk.js";import"./owner-Cs-ztUND.js";import"./index-D9_7C8oq.js";import"./viewport-CMyC4XGs.js";import"./use-is-unmounted-BCPLwOcf.js";import"./index-SCgj-9wi.js";import"./dom-BowoBODo.js";import"./Shiki-xdlJpHFZ.js";import"./spring-C80N1tKa.js";import"./use-event-callback-C2f3IDCO.js";import"./index-CRPHWyf-.js";import"./FloatPopover-u_3zTku3.js";import"./index-BtZRbbNR.js";import"./visual-element-DriKXtmY.js";import"./provider-CVQJX8ms.js";import"./use-drag-controls-DQT2ktvp.js";import"./SocialSourceLink-CuitYpB5.js";import"./LinkCard-0MaMkq7v.js";import"./use-motion-template-BBUoNIuT.js";import"./Collapse-D7HlHTgZ.js";import"./useQuery-CifvemzQ.js";const it=m=>{const[h,d]=t.useState(!0),[E,n]=t.useState(""),[c,p]=t.useState(""),[x,u]=t.useState(),[v,l]=t.useState(),f=b();t.useEffect(()=>{g(()=>import("./mermaid.core-MFPtsXVX.js").then(r=>r.af),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(async r=>{r.default.initialize({theme:f?"dark":"default"})})},[f]);const a=t.useId().split(":").join("");t.useEffect(()=>{if(!m.content)return;n(""),d(!0);let r=!1;g(()=>import("./mermaid.core-MFPtsXVX.js").then(o=>o.af),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(async o=>{const I=o.default;let i;try{i=await I.render(`mermaid-${a}`,m.content)}catch(e){document.getElementById(`dmermaid-${a}`)?.remove(),e instanceof Error&&n(e.message),p(""),u(void 0),l(void 0)}if(!r){if(i){p(i.svg);const e=i.svg.match(/viewBox="[^"]*\s([\d.]+)\s([\d.]+)"/);e?.[1]&&e?.[2]&&(u(Number.parseInt(e?.[1])),l(Number.parseInt(e?.[2]))),n("")}return d(!1),()=>{r=!0}}})},[a,m.content]);const{w:_}=w(),S=new TextEncoder().encode(c),j=`data:image/svg+xml;base64,${btoa(String.fromCharCode(...new Uint8Array(S)))}`;return h?s.jsx(L,{children:"Mermaid Loading..."}):c?s.jsx("div",{children:s.jsx(y,{containerWidth:_,src:j,width:x,height:v})}):s.jsx("div",{className:"flex min-h-[50px] items-center justify-center rounded-lg bg-red-100 text-sm",children:E||"Error"})};export{it as Mermaid};