const A=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function I(f){return typeof f=="string"&&A.test(f)}const o=[];for(let f=0;f<256;++f)o.push((f+256).toString(16).slice(1));function w(f,t=0){return o[f[t+0]]+o[f[t+1]]+o[f[t+2]]+o[f[t+3]]+"-"+o[f[t+4]]+o[f[t+5]]+"-"+o[f[t+6]]+o[f[t+7]]+"-"+o[f[t+8]]+o[f[t+9]]+"-"+o[f[t+10]]+o[f[t+11]]+o[f[t+12]]+o[f[t+13]]+o[f[t+14]]+o[f[t+15]]}function v(f){if(!I(f))throw TypeError("Invalid UUID");let t;const n=new Uint8Array(16);return n[0]=(t=parseInt(f.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=t&255,n[4]=(t=parseInt(f.slice(9,13),16))>>>8,n[5]=t&255,n[6]=(t=parseInt(f.slice(14,18),16))>>>8,n[7]=t&255,n[8]=(t=parseInt(f.slice(19,23),16))>>>8,n[9]=t&255,n[10]=(t=parseInt(f.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=t&255,n}function R(f){f=unescape(encodeURIComponent(f));const t=[];for(let n=0;n<f.length;++n)t.push(f.charCodeAt(n));return t}const T="6ba7b810-9dad-11d1-80b4-00c04fd430c8",M="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function y(f,t,n){function s(l,a,e,r){var i;if(typeof l=="string"&&(l=R(l)),typeof a=="string"&&(a=v(a)),((i=a)===null||i===void 0?void 0:i.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let x=new Uint8Array(16+l.length);if(x.set(a),x.set(l,a.length),x=n(x),x[6]=x[6]&15|t,x[8]=x[8]&63|128,e){r=r||0;for(let h=0;h<16;++h)e[r+h]=x[h];return e}return w(x)}try{s.name=f}catch{}return s.DNS=T,s.URL=M,s}function C(f,t,n,s){switch(f){case 0:return t&n^~t&s;case 1:return t^n^s;case 2:return t&n^t&s^n&s;case 3:return t^n^s}}function d(f,t){return f<<t|f>>>32-t}function D(f){const t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof f=="string"){const e=unescape(encodeURIComponent(f));f=[];for(let r=0;r<e.length;++r)f.push(e.charCodeAt(r))}else Array.isArray(f)||(f=Array.prototype.slice.call(f));f.push(128);const s=f.length/4+2,l=Math.ceil(s/16),a=new Array(l);for(let e=0;e<l;++e){const r=new Uint32Array(16);for(let i=0;i<16;++i)r[i]=f[e*64+i*4]<<24|f[e*64+i*4+1]<<16|f[e*64+i*4+2]<<8|f[e*64+i*4+3];a[e]=r}a[l-1][14]=(f.length-1)*8/Math.pow(2,32),a[l-1][14]=Math.floor(a[l-1][14]),a[l-1][15]=(f.length-1)*8&4294967295;for(let e=0;e<l;++e){const r=new Uint32Array(80);for(let c=0;c<16;++c)r[c]=a[e][c];for(let c=16;c<80;++c)r[c]=d(r[c-3]^r[c-8]^r[c-14]^r[c-16],1);let i=n[0],x=n[1],h=n[2],p=n[3],g=n[4];for(let c=0;c<80;++c){const u=Math.floor(c/20),U=d(i,5)+C(u,x,h,p)+g+t[u]+r[c]>>>0;g=p,p=h,h=d(x,30)>>>0,x=i,i=U}n[0]=n[0]+i>>>0,n[1]=n[1]+x>>>0,n[2]=n[2]+h>>>0,n[3]=n[3]+p>>>0,n[4]=n[4]+g>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,n[0]&255,n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,n[1]&255,n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,n[2]&255,n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,n[3]&255,n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,n[4]&255]}const E=y("v5",80,D);export{E as v};
