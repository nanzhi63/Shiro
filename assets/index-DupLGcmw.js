import{b as xe,d as Ae,l as Ee,M as B,u as A,a as lt,f as x,L as Et,i as j,e as _t,c as q,g as Me,n as Ut,h as Mt,j as $t,t as Ce,o as Ie,k as be,p as Ve,s as Oe,q as Te}from"./proxy-sxV_SSC0.js";import{A as xr,P as Ar,S as Er,x as Mr,y as Cr,w as Ir,D as br,C as Vr,E as Or,v as Tr,m as Lr,B as Rr,z as Pr,r as Fr}from"./proxy-sxV_SSC0.js";import{a as Xt,g as Le,b as Re,l as Pe,c as Yt,h as Fe,i as ze,p as De,V as Kt,e as Nt,f as We,S as He,H as Be,v as N,j as je,k as Ge,r as U}from"./framer-lazy-feature-H6-ORfoh.js";import{F as Dr,x as Wr,y as Hr,t as Br,o as jr,q as Gr,s as kr,m as _r,d as Ur,w as $r,u as Xr,n as Yr}from"./framer-lazy-feature-H6-ORfoh.js";import{A as Nr}from"./index-CRPHWyf-.js";import{r as d,j as R}from"./index-CySfgEHw.js";import{L as Jr}from"./index-CySfgEHw.js";import{b as qt,u as P}from"./use-motion-template-BBUoNIuT.js";import{a as Zr}from"./use-motion-template-BBUoNIuT.js";import{i as Jt,c as tt,b as ke,d as Qt,p as Zt,v as _e,e as te,f as Ue,w as $e,m as k,M as Xe,g as Ye,h as Ke,j as Ne,k as st,l as qe,n as ee,r as Je,o as ne,q as Qe,t as G,u as Ze,x as tn,G as se,y as en,z as nn,A as sn,B as rt,C as Ct,D as rn,E as on,F as it,H as an,a as un,I as cn,J as ln}from"./visual-element-DriKXtmY.js";import{N as ei,T as ni,U as si,V as ri,W as ii,X as oi,Y as ai,Z as ui,K as ci,L as li,a1 as fi,_ as di,$ as mi,a0 as pi,O as hi,P as gi,Q as yi,a2 as wi,R as vi,S as Si,a3 as xi}from"./visual-element-DriKXtmY.js";import{D as Ei,b as Mi,c as Ci,u as Ii,a as bi}from"./use-drag-controls-DQT2ktvp.js";const fn=xe({...Xt,...Le,...Re,...Pe},Yt),re=Ae(fn);function Us({children:t,isValidProp:e,...n}){e&&Ee(e),n={...d.useContext(B),...n},n.isStatic=A(()=>n.isStatic);const s=d.useMemo(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return R.jsx(B.Provider,{value:s,children:t})}const dn=d.createContext(null);function mn(){const t=d.useRef(!1);return lt(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function ie(){const t=mn(),[e,n]=d.useState(0),s=d.useCallback(()=>{t.current&&n(e+1)},[e]);return[d.useCallback(()=>x.postRender(s),[s]),e]}const pn=t=>!t.isLayoutDirty&&t.willUpdate(!1);function It(){const t=new Set,e=new WeakMap,n=()=>t.forEach(pn);return{add:s=>{t.add(s),e.set(s,s.addEventListener("willUpdate",n))},remove:s=>{t.delete(s);const r=e.get(s);r&&(r(),e.delete(s)),n()},dirty:n}}const oe=t=>t===!0,hn=t=>oe(t===!0)||t==="id",gn=({children:t,id:e,inherit:n=!0})=>{const s=d.useContext(Et),r=d.useContext(dn),[i,o]=ie(),c=d.useRef(null),a=s.id||r;c.current===null&&(hn(n)&&a&&(e=e?a+"-"+e:a),c.current={id:e,group:oe(n)&&s.group||It()});const u=d.useMemo(()=>({...c.current,forceRender:i}),[o]);return R.jsx(Et.Provider,{value:u,children:t})},$s={renderer:Yt,...Xt},yn=t=>t&&typeof t=="object"&&t.mix,wn=t=>yn(t)?t.mix:void 0;function vn(...t){const e=!Array.isArray(t[0]),n=e?0:-1,s=t[0+n],r=t[1+n],i=t[2+n],o=t[3+n],c=Jt(r,i,{mixer:wn(i[0]),...o});return e?c(s):c}function Sn(t){tt.current=[],t();const e=qt(tt.current,t);return tt.current=void 0,e}function ot(t,e,n,s){if(typeof t=="function")return Sn(t);const r=typeof e=="function"?e:vn(e,n,s);return Array.isArray(t)?bt(t,r):bt([t],([i])=>r(i))}function bt(t,e){const n=A(()=>[]);return qt(t,()=>{n.length=0;const s=t.length;for(let r=0;r<s;r++)n[r]=t[r].get();return e(n)})}function Vt(t){return typeof t=="number"?t:parseFloat(t)}function Xs(t,e={}){const{isStatic:n}=d.useContext(B),s=d.useRef(null),r=P(j(t)?Vt(t.get()):t),i=d.useRef(r.get()),o=d.useRef(()=>{}),c=()=>{const u=s.current;u&&u.time===0&&u.sample(_t.delta),a(),s.current=ke({keyframes:[r.get(),i.current],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:o.current})},a=()=>{s.current&&s.current.stop()};return d.useInsertionEffect(()=>r.attach((u,l)=>n?l(u):(i.current=u,o.current=l,x.update(c),r.get()),a),[JSON.stringify(e)]),lt(()=>{if(j(t))return t.on("change",u=>r.set(Vt(u)))},[r]),r}function xn(t,e,n){d.useInsertionEffect(()=>t.on(e,n),[t,e,n])}function Ys(t){const e=P(t.getVelocity()),n=()=>{const s=t.getVelocity();e.set(s),s&&x.update(n)};return xn(t,"change",()=>{x.update(n,!1,!0)}),e}function J(t,e,n){var s;if(typeof t=="string"){let r=document;e&&(Qt(!!e.current),r=e.current),n?((s=n[t])!==null&&s!==void 0||(n[t]=r.querySelectorAll(t)),t=n[t]):t=r.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}const $=new WeakMap;let b;function An(t,e){if(e){const{inlineSize:n,blockSize:s}=e[0];return{width:n,height:s}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function En({target:t,contentRect:e,borderBoxSize:n}){var s;(s=$.get(t))===null||s===void 0||s.forEach(r=>{r({target:t,contentSize:e,get size(){return An(t,n)}})})}function Mn(t){t.forEach(En)}function Cn(){typeof ResizeObserver>"u"||(b=new ResizeObserver(Mn))}function In(t,e){b||Cn();const n=J(t);return n.forEach(s=>{let r=$.get(s);r||(r=new Set,$.set(s,r)),r.add(e),b?.observe(s)}),()=>{n.forEach(s=>{const r=$.get(s);r?.delete(e),r?.size||b?.unobserve(s)})}}const X=new Set;let H;function bn(){H=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};X.forEach(n=>n(e))},window.addEventListener("resize",H)}function Vn(t){return X.add(t),H||bn(),()=>{X.delete(t),!X.size&&H&&(H=void 0)}}function On(t,e){return typeof t=="function"?Vn(t):In(t,e)}const Tn=50,Ot=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Ln=()=>({time:0,x:Ot(),y:Ot()}),Rn={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Tt(t,e,n,s){const r=n[e],{length:i,position:o}=Rn[e],c=r.current,a=n.time;r.current=t[`scroll${o}`],r.scrollLength=t[`scroll${i}`]-t[`client${i}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=Zt(0,r.scrollLength,r.current);const u=s-a;r.velocity=u>Tn?0:_e(r.current-c,u)}function Pn(t,e,n){Tt(t,"x",e,n),Tt(t,"y",e,n),e.time=n}function Fn(t,e){const n={x:0,y:0};let s=t;for(;s&&s!==e;)if(s instanceof HTMLElement)n.x+=s.offsetLeft,n.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const r=s.getBoundingClientRect();s=s.parentElement;const i=s.getBoundingClientRect();n.x+=r.left-i.left,n.y+=r.top-i.top}else if(s instanceof SVGGraphicsElement){const{x:r,y:i}=s.getBBox();n.x+=r,n.y+=i;let o=null,c=s.parentNode;for(;!o;)c.tagName==="svg"&&(o=c),c=s.parentNode;s=o}else break;return n}const zn={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},at={start:0,center:.5,end:1};function Lt(t,e,n=0){let s=0;if(t in at&&(t=at[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?s=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?s=r/100*document.documentElement.clientWidth:t.endsWith("vh")?s=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(s=e*t),n+s}const Dn=[0,0];function Wn(t,e,n,s){let r=Array.isArray(t)?t:Dn,i=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,at[t]?t:"0"]),i=Lt(r[0],n,s),o=Lt(r[1],e),i-o}const Hn={x:0,y:0};function Bn(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function jn(t,e,n){const{offset:s=zn.All}=n,{target:r=t,axis:i="y"}=n,o=i==="y"?"height":"width",c=r!==t?Fn(r,t):Hn,a=r===t?{width:t.scrollWidth,height:t.scrollHeight}:Bn(r),u={width:t.clientWidth,height:t.clientHeight};e[i].offset.length=0;let l=!e[i].interpolate;const m=s.length;for(let f=0;f<m;f++){const p=Wn(s[f],u[o],a[o],c[i]);!l&&p!==e[i].interpolatorOffsets[f]&&(l=!0),e[i].offset[f]=p}l&&(e[i].interpolate=Jt(e[i].offset,te(s)),e[i].interpolatorOffsets=[...e[i].offset]),e[i].progress=e[i].interpolate(e[i].current)}function Gn(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let s=e;for(;s&&s!==t;)n.x.targetOffset+=s.offsetLeft,n.y.targetOffset+=s.offsetTop,s=s.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function kn(t,e,n,s={}){return{measure:()=>Gn(t,s.target,n),update:r=>{Pn(t,n,r),(s.offset||s.target)&&jn(t,n,s)},notify:()=>e(n)}}const D=new WeakMap,Rt=new WeakMap,et=new WeakMap,Pt=t=>t===document.documentElement?window:t;function ft(t,{container:e=document.documentElement,...n}={}){let s=et.get(e);s||(s=new Set,et.set(e,s));const r=Ln(),i=kn(e,t,r,n);if(s.add(i),!D.has(e)){const c=()=>{for(const f of s)f.measure()},a=()=>{for(const f of s)f.update(_t.timestamp)},u=()=>{for(const f of s)f.notify()},l=()=>{x.read(c,!1,!0),x.read(a,!1,!0),x.update(u,!1,!0)};D.set(e,l);const m=Pt(e);window.addEventListener("resize",l,{passive:!0}),e!==document.documentElement&&Rt.set(e,On(e,l)),m.addEventListener("scroll",l,{passive:!0})}const o=D.get(e);return x.read(o,!1,!0),()=>{var c;q(o);const a=et.get(e);if(!a||(a.delete(i),a.size))return;const u=D.get(e);D.delete(e),u&&(Pt(e).removeEventListener("scroll",u),(c=Rt.get(e))===null||c===void 0||c(),window.removeEventListener("resize",u))}}function ae(t,e){let n;const s=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return x.update(s,!0),()=>q(s)}function _n({source:t,container:e,axis:n="y"}){t&&(e=t);const s={value:0},r=ft(i=>{s.value=i[n].progress*100},{container:e,axis:n});return{currentTime:s,cancel:r}}const nt=new Map;function ue({source:t,container:e=document.documentElement,axis:n="y"}={}){t&&(e=t),nt.has(e)||nt.set(e,{});const s=nt.get(e);return s[n]||(s[n]=Ue()?new ScrollTimeline({source:e,axis:n}):_n({source:e,axis:n})),s[n]}function Un(t){return t.length===2}function ce(t){return t&&(t.target||t.offset)}function $n(t,e){return Un(t)||ce(e)?ft(n=>{t(n[e.axis].progress,n)},e):ae(t,ue(e))}function Xn(t,e){if(ce(e))return t.pause(),ft(n=>{t.time=t.duration*n[e.axis].progress},e);{const n=ue(e);return t.attachTimeline(n,s=>(s.pause(),ae(r=>{s.time=s.duration*r},n)))}}function Yn(t,{axis:e="y",...n}={}){const s={axis:e,...n};return typeof t=="function"?$n(t,s):Xn(t,s)}function Ft(t,e){$e(!!(!e||e.current))}const Kn=()=>({scrollX:k(0),scrollY:k(0),scrollXProgress:k(0),scrollYProgress:k(0)});function le({container:t,target:e,layoutEffect:n=!0,...s}={}){const r=A(Kn);return(n?lt:d.useEffect)(()=>(Ft("target",e),Ft("container",t),Yn((o,{x:c,y:a})=>{r.scrollX.set(c.current),r.scrollXProgress.set(c.progress),r.scrollY.set(a.current),r.scrollYProgress.set(a.progress)},{...s,container:t?.current||void 0,target:e?.current||void 0})),[t,e,JSON.stringify(s.offset)]),r}function Ks(t){return le({container:t})}function Ns(){return le()}function Nn(t){const e=d.useRef(0),{isStatic:n}=d.useContext(B);d.useEffect(()=>{if(n)return;const s=({timestamp:r,delta:i})=>{e.current||(e.current=r),t(r-e.current,i)};return x.update(s,!0),()=>q(s)},[t])}function qs(){const t=P(0);return Nn(e=>t.set(e)),t}class qn extends Xe{constructor(){super(...arguments),this.values=[]}add(e){const n=Me(e);n&&(Ye(this.values,n),this.update())}update(){this.set(this.values.length?this.values.join(", "):"auto")}}function Js(){return A(()=>new qn("auto"))}function Jn(){!Fe.current&&ze();const[t]=d.useState(De.current);return t}function Qs(){const t=Jn(),{reducedMotion:e}=d.useContext(B);return e==="never"?!1:e==="always"?!0:t}function fe(t){return d.useEffect(()=>()=>t(),[])}function de(t,e=100,n){const s=n({...t,keyframes:[0,e]}),r=Math.min(Ke(s),Ne);return{type:"keyframes",ease:i=>s.next(r*i).value/e,duration:st(r)}}function dt(t){return typeof t=="object"&&!Array.isArray(t)}function me(t,e,n,s){return typeof t=="string"&&dt(e)?J(t,n,s):t instanceof NodeList?Array.from(t):Array.isArray(t)?t:[t]}function zt(t,e,n,s){var r;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(r=s.get(e))!==null&&r!==void 0?r:t}const pe=(t,e,n)=>{const s=e-t;return((n-t)%s+s)%s+t};function Qn(t,e){return qe(t)?t[pe(0,t.length,e)]:t}function Zn(t,e,n){for(let s=0;s<t.length;s++){const r=t[s];r.at>e&&r.at<n&&(Je(t,r),s--)}}function ts(t,e,n,s,r,i){Zn(t,r,i);for(let o=0;o<e.length;o++)t.push({value:e[o],at:ee(r,i,s[o]),easing:Qn(n,o)})}function es(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const ns="easeInOut";function ss(t,{defaultTransition:e={},...n}={},s,r){const i=e.duration||.3,o=new Map,c=new Map,a={},u=new Map;let l=0,m=0,f=0;for(let p=0;p<t.length;p++){const h=t[p];if(typeof h=="string"){u.set(h,m);continue}else if(!Array.isArray(h)){u.set(h.name,zt(m,h.at,l,u));continue}let[g,y,w={}]=h;w.at!==void 0&&(m=zt(m,w.at,l,u));let v=0;const O=(E,M,I,F=0,z=0)=>{const S=rs(E),{delay:Q=0,times:T=te(S),type:Z="keyframes",...ve}=M;let{ease:mt=e.ease||"easeOut",duration:C}=M;const pt=typeof Q=="function"?Q(F,z):Q,ht=S.length,gt=ne(Z)?Z:r?.[Z];if(ht<=2&&gt){let St=100;if(ht===2&&as(S)){const Se=S[1]-S[0];St=Math.abs(Se)}const xt={...ve};C!==void 0&&(xt.duration=G(C));const At=de(xt,St,gt);mt=At.ease,C=At.duration}C??(C=i);const yt=m+pt,wt=yt+C;T.length===1&&T[0]===0&&(T[1]=1);const vt=T.length-S.length;vt>0&&Qe(T,vt),S.length===1&&S.unshift(null),ts(I,S,mt,T,yt,wt),v=Math.max(pt+C,v),f=Math.max(wt,f)};if(j(g)){const E=Dt(g,c);O(y,w,Wt("default",E))}else{const E=me(g,y,s,a),M=E.length;for(let I=0;I<M;I++){y=y,w=w;const F=E[I],z=Dt(F,c);for(const S in y)O(y[S],is(w,S),Wt(S,z),I,M)}}l=m,m+=v}return c.forEach((p,h)=>{for(const g in p){const y=p[g];y.sort(es);const w=[],v=[],O=[];for(let M=0;M<y.length;M++){const{at:I,value:F,easing:z}=y[M];w.push(F),v.push(Zt(0,f,I)),O.push(z||"easeOut")}v[0]!==0&&(v.unshift(0),w.unshift(w[0]),O.unshift(ns)),v[v.length-1]!==1&&(v.push(1),w.push(null)),o.has(h)||o.set(h,{keyframes:{},transition:{}});const E=o.get(h);E.keyframes[g]=w,E.transition[g]={...e,duration:f,ease:O,times:v,...n}}}),o}function Dt(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function Wt(t,e){return e[t]||(e[t]=[]),e[t]}function rs(t){return Array.isArray(t)?t:[t]}function is(t,e){return t[e]?{...t,...t[e]}:{...t}}const os=t=>typeof t=="number",as=t=>t.every(os);function us(t,e){return t in e}class cs extends Kt{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,n){if(us(n,e)){const s=e[n];if(typeof s=="string"||typeof s=="number")return s}}getBaseTargetFromProps(){}removeValueFromRenderState(e,n){delete n.output[e]}measureInstanceViewportBox(){return Nt()}build(e,n){Object.assign(e.output,n)}renderInstance(e,{output:n}){Object.assign(e,n)}sortInstanceNodePosition(){return 0}}function ls(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=We(t)?new He(e):new Be(e);n.mount(t),N.set(t,n)}function fs(t){const e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new cs(e);n.mount(t),N.set(t,n)}function ds(t,e){return j(t)||typeof t=="number"||typeof t=="string"&&!dt(e)}function he(t,e,n,s){const r=[];if(ds(t,e))r.push(je(t,dt(e)&&e.default||e,n&&(n.default||n)));else{const i=me(t,e,s),o=i.length;for(let c=0;c<o;c++){const a=i[c],u=a instanceof Element?ls:fs;N.has(a)||u(a);const l=N.get(a),m={...n};"delay"in m&&typeof m.delay=="function"&&(m.delay=m.delay(c,o)),r.push(...Ze(l,{...e,transition:m},{}))}}return r}function ms(t,e,n){const s=[];return ss(t,e,n,{spring:tn}).forEach(({keyframes:i,transition:o},c)=>{s.push(...he(c,i,o))}),s}function ps(t){return Array.isArray(t)&&Array.isArray(t[0])}function ge(t){function e(n,s,r){let i=[];ps(n)?i=ms(n,s,t):i=he(n,s,r,t);const o=new se(i);return t&&t.animations.push(o),o}return e}const Zs=ge();function tr(){const t=A(()=>({current:null,animations:[]})),e=A(()=>ge(t));return fe(()=>{t.animations.forEach(n=>n.stop())}),[t,e]}function hs(t,e,n){t.style.setProperty(`--${e}`,n)}function gs(t,e,n){t.style[e]=n}const ys=en(()=>{try{document.createElement("div").animate({opacity:[1]})}catch{return!1}return!0}),Y=new WeakMap;function ws(t,e,n){for(let s=0;s<e.length;s++)e[s]===null&&(e[s]=s===0?n():e[s-1]),typeof e[s]=="number"&&Mt[t]&&(e[s]=Mt[t].transform(e[s]));!ys()&&e.length<2&&e.unshift(n())}const Ht="easeOut";function Bt(t){const e=Y.get(t)||new Map;return Y.set(t,e),Y.get(t)}class vs{constructor(e,n,s,r){const i=n.startsWith("--");this.setValue=i?hs:gs,this.options=r,this.updateFinishedPromise(),Qt(typeof r.type!="string");const o=Bt(e).get(n);o&&o.stop();const c=()=>n.startsWith("--")?e.style.getPropertyValue(n):window.getComputedStyle(e)[n];if(Array.isArray(s)||(s=[s]),ws(n,s,c),ne(r.type)){const u=de(r,100,r.type);r.ease=nn()?u.ease:Ht,r.duration=G(u.duration),r.type="keyframes"}else r.ease=r.ease||Ht;this.removeAnimation=()=>{var u;return(u=Y.get(e))===null||u===void 0?void 0:u.delete(n)};const a=()=>{this.setValue(e,n,rn(s,this.options)),this.cancel(),this.resolveFinishedPromise()};sn()?(this.animation=rt(e,n,s,r),r.autoplay===!1&&this.animation.pause(),this.animation.onfinish=a,this.pendingTimeline&&Ct(this.animation,this.pendingTimeline),Bt(e).set(n,this)):a()}get duration(){return st(this.options.duration||300)}get time(){var e;return this.animation?st(((e=this.animation)===null||e===void 0?void 0:e.currentTime)||0):0}set time(e){this.animation&&(this.animation.currentTime=G(e))}get speed(){return this.animation?this.animation.playbackRate:1}set speed(e){this.animation&&(this.animation.playbackRate=e)}get state(){return this.animation?this.animation.playState:"finished"}get startTime(){return this.animation?this.animation.startTime:null}play(){this.state==="finished"&&this.updateFinishedPromise(),this.animation&&this.animation.play()}pause(){this.animation&&this.animation.pause()}stop(){!this.animation||this.state==="idle"||this.state==="finished"||(this.animation.commitStyles&&this.animation.commitStyles(),this.cancel())}complete(){this.animation&&this.animation.finish()}cancel(){this.removeAnimation();try{this.animation&&this.animation.cancel()}catch{}}then(e,n){return this.currentFinishedPromise.then(e,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}attachTimeline(e){return this.animation?Ct(this.animation,e):this.pendingTimeline=e,Ut}}function Ss(t,e,n,s){const r=J(t,s),i=r.length,o=[];for(let c=0;c<i;c++){const a=r[c],u={...n};typeof u.delay=="function"&&(u.delay=u.delay(c,i));for(const l in e){const m=e[l],f={...on(n,l)};f.duration=f.duration?G(f.duration):f.duration,f.delay=G(f.delay||0),o.push(new vs(a,l,m,f))}}return o}const ye=t=>{function e(n,s,r){return new se(Ss(n,s,r,t))}return e},er=ye();function nr(){const t=A(()=>({current:null,animations:[]})),e=A(()=>ye(t));return fe(()=>{t.animations.forEach(n=>n.stop())}),[t,e]}function sr(...t){const e=d.useRef(0),[n,s]=d.useState(t[e.current]),r=d.useCallback(i=>{e.current=typeof i!="number"?pe(0,t.length,e.current+1):i,s(t[e.current])},[t.length,...t]);return[n,r]}const xs={some:0,all:1};function As(t,e,{root:n,margin:s,amount:r="some"}={}){const i=J(t),o=new WeakMap,c=u=>{u.forEach(l=>{const m=o.get(l.target);if(l.isIntersecting!==!!m)if(l.isIntersecting){const f=e(l);typeof f=="function"?o.set(l.target,f):a.unobserve(l.target)}else m&&(m(l),o.delete(l.target))})},a=new IntersectionObserver(c,{root:n,rootMargin:s,threshold:typeof r=="number"?r:xs[r]});return i.forEach(u=>a.observe(u)),()=>a.disconnect()}function rr(t,{root:e,margin:n,amount:s,once:r=!1}={}){const[i,o]=d.useState(!1);return d.useEffect(()=>{if(!t.current||r&&i)return;const c=()=>(o(!0),r?void 0:()=>o(!1)),a={root:e&&e.current||void 0,margin:n,amount:s};return As(t.current,c,a)},[e,t,n,r,s]),i}function ir(t,e,n,s){d.useEffect(()=>{const r=t.current;if(n&&r)return Ge(r,e,n,s)},[t,e,n,s])}function Es(t){return t!==null&&typeof t=="object"&&$t in t}function or(t){if(Es(t))return t[$t]}function Ms(){return Cs}function Cs(t){U.current&&(U.current.isUpdating=!1,U.current.blockUpdate(),t&&t())}function ar(){const[t,e]=ie(),n=Ms(),s=d.useRef();return d.useEffect(()=>{x.postRender(()=>x.postRender(()=>{e===s.current&&(it.current=!1)}))},[e]),r=>{n(()=>{it.current=!0,t(),r(),s.current=e+1})}}function ur(){it.current=!1}function cr(){return d.useCallback(()=>{const e=U.current;e&&e.resetTree()},[])}const K=(t,e)=>{const n=Ce.has(e)?"transform":e;return`${t}: ${n}`},V=new Map,W=new Map;function jt(t,e,n){var s;const r=K(t,e),i=V.get(r);if(!i)return null;const{animation:o,startTime:c}=i;function a(){var u;(u=window.MotionCancelOptimisedAnimation)===null||u===void 0||u.call(window,t,e,n)}return o.onfinish=a,c===null||!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,t)?(a(),null):c}let _,L;const ut=new Set;function Is(){ut.forEach(t=>{t.animation.play(),t.animation.startTime=t.startTime}),ut.clear()}function lr(t,e,n,s,r){if(window.MotionIsMounted)return;const i=t.dataset[Ie];if(!i)return;window.MotionHandoffAnimation=jt;const o=K(i,e);L||(L=rt(t,e,[n[0],n[0]],{duration:1e4,ease:"linear"}),V.set(o,{animation:L,startTime:null}),window.MotionHandoffAnimation=jt,window.MotionHasOptimisedAnimation=(a,u)=>{if(!a)return!1;if(!u)return W.has(a);const l=K(a,u);return!!V.get(l)},window.MotionHandoffMarkAsComplete=a=>{W.has(a)&&W.set(a,!0)},window.MotionHandoffIsComplete=a=>W.get(a)===!0,window.MotionCancelOptimisedAnimation=(a,u,l,m)=>{const f=K(a,u),p=V.get(f);p&&(l&&m===void 0?l.postRender(()=>{l.postRender(()=>{p.animation.cancel()})}):p.animation.cancel(),l&&m?(ut.add(p),l.render(Is)):(V.delete(f),V.size||(window.MotionCancelOptimisedAnimation=void 0)))},window.MotionCheckAppearSync=(a,u,l)=>{var m,f;const p=an(a);if(!p)return;const h=(m=window.MotionHasOptimisedAnimation)===null||m===void 0?void 0:m.call(window,p,u),g=(f=a.props.values)===null||f===void 0?void 0:f[u];if(!h||!g)return;const y=l.on("change",w=>{var v;g.get()!==w&&((v=window.MotionCancelOptimisedAnimation)===null||v===void 0||v.call(window,p,u),y())});return y});const c=()=>{L.cancel();const a=rt(t,e,n,s);_===void 0&&(_=performance.now()),a.startTime=_,V.set(o,{animation:a,startTime:_}),r&&r(a)};W.set(i,!1),L.ready?L.ready.then(c).catch(Ut):c()}const ct=()=>({});class bs extends Kt{constructor(){super(...arguments),this.measureInstanceViewportBox=Nt}build(){}resetTransform(){}restoreTransform(){}removeValueFromRenderState(){}renderInstance(){}scrapeMotionValuesFromProps(){return ct()}getBaseTargetFromProps(){}readValueFromInstance(e,n,s){return s.initialState[n]||0}sortInstanceNodePosition(){return 0}}const Vs=be({scrapeMotionValuesFromProps:ct,createRenderState:ct});function fr(t){const[e,n]=d.useState(t),s=Vs({},!1),r=A(()=>new bs({props:{onUpdate:o=>{n({...o})}},visualState:s,presenceContext:null},{initialState:t}));d.useLayoutEffect(()=>(r.mount({}),()=>r.unmount()),[r]);const i=A(()=>o=>un(r,o));return[e,i]}const Os=1e5,Gt=t=>t>.001?1/t:Os;function dr(t){let e=P(1),n=P(1);const{visualElement:s}=d.useContext(Ve);t?(e=t.scaleX||e,n=t.scaleY||n):s&&(e=s.getValue("scaleX",1),n=s.getValue("scaleY",1));const r=ot(e,Gt),i=ot(n,Gt);return{scaleX:r,scaleY:i}}let Ts=0;const mr=({children:t})=>(d.useEffect(()=>{},[]),R.jsx(gn,{id:A(()=>`asl-${Ts++}`),children:t})),we=d.createContext(null);function Ls(t,e,n,s){if(!s)return t;const r=t.findIndex(l=>l.value===e);if(r===-1)return t;const i=s>0?1:-1,o=t[r+i];if(!o)return t;const c=t[r],a=o.layout,u=ee(a.min,a.max,.5);return i===1&&c.layout.max+n>u||i===-1&&c.layout.min+n<u?cn(t,r,r+i):t}function Rs({children:t,as:e="ul",axis:n="y",onReorder:s,values:r,...i},o){const c=A(()=>re[e]),a=[],u=d.useRef(!1),l={axis:n,registerItem:(m,f)=>{const p=a.findIndex(h=>m===h.value);p!==-1?a[p].layout=f[n]:a.push({value:m,layout:f[n]}),a.sort(zs)},updateOrder:(m,f,p)=>{if(u.current)return;const h=Ls(a,m,f,p);a!==h&&(u.current=!0,s(h.map(Fs).filter(g=>r.indexOf(g)!==-1)))}};return d.useEffect(()=>{u.current=!1}),R.jsx(c,{...i,ref:o,ignoreStrict:!0,children:R.jsx(we.Provider,{value:l,children:t})})}const Ps=d.forwardRef(Rs);function Fs(t){return t.value}function zs(t,e){return t.layout.min-e.layout.min}function kt(t,e=0){return j(t)?t:P(e)}function Ds({children:t,style:e={},value:n,as:s="li",onDrag:r,layout:i=!0,...o},c){const a=A(()=>re[s]),u=d.useContext(we),l={x:kt(e.x),y:kt(e.y)},m=ot([l.x,l.y],([g,y])=>g||y?1:"unset"),{axis:f,registerItem:p,updateOrder:h}=u;return R.jsx(a,{drag:f,...o,dragSnapToOrigin:!0,style:{...e,x:l.x,y:l.y,zIndex:m},layout:i,onDrag:(g,y)=>{const{velocity:w}=y;w[f]&&h(n,l[f].get(),w[f]),r&&r(g,y)},onLayoutMeasure:g=>p(n,g),ref:c,ignoreStrict:!0,children:t})}const Ws=d.forwardRef(Ds),pr=Object.freeze(Object.defineProperty({__proto__:null,Group:Ps,Item:Ws},Symbol.toStringTag,{value:"Module"}));function Hs(t,e){if(t==="first")return 0;{const n=e-1;return t==="last"?n:n/2}}function hr(t=.1,{startDelay:e=0,from:n=0,ease:s}={}){return(r,i)=>{const o=typeof n=="number"?n:Hs(n,i),c=Math.abs(o-r);let a=t*c;if(s){const u=i*t;a=ln(s)(a/u)*u}return e+a}}const gr=x,yr=Oe.reduce((t,e)=>(t[e]=n=>q(n),t),{});function wr(t,e="end"){return n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const s=n*t,r=e==="end"?Math.floor(s):Math.ceil(s);return Te(0,1,r/t)}}export{ei as AcceleratedAnimation,Nr as AnimatePresence,mr as AnimateSharedLayout,dn as DeprecatedLayoutGroupContext,Ei as DragControls,Dr as FlatTree,gn as LayoutGroup,Et as LayoutGroupContext,Jr as LazyMotion,Us as MotionConfig,B as MotionConfigContext,Ve as MotionContext,xr as MotionGlobalConfig,Xe as MotionValue,Ar as PresenceContext,pr as Reorder,Er as SwitchLayoutGroupContext,Kt as VisualElement,Wr as addPointerEvent,Hr as addPointerInfo,Mr as addScaleCorrector,Zs as animate,er as animateMini,ke as animateValue,un as animateVisualElement,Mi as animationControls,Xt as animations,ni as anticipate,si as backIn,ri as backInOut,ii as backOut,Cr as buildTransform,Br as calcLength,q as cancelFrame,yr as cancelSync,oi as circIn,ai as circInOut,ui as circOut,Te as clamp,ci as color,li as complex,Nt as createBox,Ir as createRendererMotionComponent,ge as createScopedAnimate,fi as cubicBezier,jr as delay,ur as disableInstantTransitions,Gr as distance,kr as distance2D,_r as domAnimation,Ur as domMax,$s as domMin,di as easeIn,mi as easeInOut,pi as easeOut,br as filterProps,hi as findSpring,x as frame,_t as frameData,Vr as frameSteps,As as inView,gi as inertia,Jt as interpolate,Qt as invariant,Or as isBrowser,$r as isDragActive,Es as isMotionComponent,j as isMotionValue,Tr as isValidMotionProp,yi as keyframes,Lr as m,be as makeUseVisualState,wi as mirrorEasing,vi as mix,re as motion,k as motionValue,Rr as optimizedAppearDataAttribute,Si as pipe,Zt as progress,Pr as px,Fr as resolveMotionValue,xi as reverseEasing,Yn as scroll,ft as scrollInfo,tn as spring,hr as stagger,lr as startOptimizedAppearAnimation,wr as steps,gr as sync,vn as transform,or as unwrapMotionComponent,tr as useAnimate,nr as useAnimateMini,Ci as useAnimation,Ii as useAnimationControls,Nn as useAnimationFrame,sr as useCycle,fr as useDeprecatedAnimatedState,dr as useDeprecatedInvertedScale,ir as useDomEvent,bi as useDragControls,Ks as useElementScroll,ie as useForceUpdate,rr as useInView,Ms as useInstantLayoutTransition,ar as useInstantTransition,Xr as useIsPresent,lt as useIsomorphicLayoutEffect,Zr as useMotionTemplate,P as useMotionValue,xn as useMotionValueEvent,Yr as usePresence,Jn as useReducedMotion,Qs as useReducedMotionConfig,cr as useResetProjection,le as useScroll,Xs as useSpring,qs as useTime,ot as useTransform,fe as useUnmountEffect,Ys as useVelocity,Ns as useViewportScroll,Js as useWillChange,N as visualElementStore,$e as warning,pe as wrap};
