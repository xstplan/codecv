var f=Object.defineProperty;var d=(e,t,o)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var p=(e,t,o)=>(d(e,typeof t!="symbol"?t+"":t,o),o);import{_ as l,E}from"./jspdf.93f2685e.js";import y from"./html2canvas.4d0ab5af.js";import{t as P}from"./config.4458ead9.js";import{r as T}from"./element-plus.2a6d07e1.js";import{s as w,e as D}from"./index.6492ea38.js";const v=(e,t)=>{const o=e[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((i,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function V(e){return(await v(Object.assign({"../../templates/business/style.scss":()=>l(()=>Promise.resolve({}),["./style.95edfe08.css"],import.meta.url),"../../templates/concise/style.scss":()=>l(()=>Promise.resolve({}),["./style.f861cd93.css"],import.meta.url),"../../templates/front_end/style.scss":()=>l(()=>Promise.resolve({}),["./style.ba19834f.css"],import.meta.url),"../../templates/general/style.scss":()=>l(()=>Promise.resolve({}),["./style.f243b46e.css"],import.meta.url),"../../templates/graduation_reexam/style.scss":()=>l(()=>Promise.resolve({}),["./style.6816843f.css"],import.meta.url),"../../templates/internet/style.scss":()=>l(()=>Promise.resolve({}),["./style.507da3a6.css"],import.meta.url),"../../templates/internet_avatar/style.scss":()=>l(()=>Promise.resolve({}),["./style.4be609ac.css"],import.meta.url),"../../templates/internet_social/style.scss":()=>l(()=>Promise.resolve({}),["./style.6fe30e14.css"],import.meta.url),"../../templates/operation/style.scss":()=>l(()=>Promise.resolve({}),["./style.71590ef2.css"],import.meta.url),"../../templates/operation_avatar/style.scss":()=>l(()=>Promise.resolve({}),["./style.d9f3588f.css"],import.meta.url),"../../templates/simple_avatar/style.scss":()=>l(()=>Promise.resolve({}),["./style.a230f111.css"],import.meta.url)}),`../../templates/${e}/style.scss`)).default}const C=e=>{for(let t of P)if(e===t.type)return t.content;return""},S={h1:{max:30,min:-15,top:0,tag:"",optimal:0},h2:{max:30,min:-15,top:0,tag:"",optimal:0},h3:{max:20,min:-15,top:0,tag:"",optimal:0},h4:{max:20,min:-15,top:0,tag:"",optimal:0},h5:{max:20,min:-15,top:0,tag:"",optimal:0},h6:{max:20,min:-15,top:0,tag:"",optimal:0},li:{max:10,min:-15,top:0,tag:"",optimal:0},p:{max:10,min:-15,top:0,tag:"",optimal:0}},L=(e,t)=>e.optimal>t.optimal,_=(e,t,o)=>[e[t],e[o]]=[e[o],e[t]];class B{constructor(t){p(this,"container",[]);p(this,"cmp",L);this.cmp=t}push(t){const{container:o,cmp:i}=this;o.push(t);let n=o.length-1;for(;n;){let r=Math.floor((n-1)/2);if(!i(o[n],o[r]))return;_(o,n,r),n=r}}pop(){const{container:t,cmp:o}=this;if(!t.length)return null;_(t,0,t.length-1);const i=t.pop(),n=t.length;let r=0,s=r*2+1;for(;s<n;){let a=r*2+2;if(a<n&&o(t[a],t[s])&&(s=a),!o(t[s],t[r]))break;_(t,s,r),r=s,s=r*2+1}return i}top(){return this.container.length?this.container[0]:null}isEmpty(){return this.container.length===0}}function H(){return document.createElement("style")}function k(){return document.createElement("div")}function A(e){return document.head.querySelector(`style[${e}]`)}function q(e){var t;(t=A(e))==null||t.remove()}function G(e,t){const{showLoading:o,closeLoading:i}=I();o("\u6B63\u5728\u5BFC\u51FAPDF \u8BF7\u8010\u5FC3\u7B49\u5F85..."),y(t,{allowTaint:!1,logging:!1,useCORS:!0,scale:4}).then(n=>{var g;const r=new E("p","mm","a4"),s=n.getContext("2d"),a=210,h=297,c=Math.floor(h*n.width/a);let m=0;for(;m<n.height;){const u=document.createElement("canvas");u.width=n.width,u.height=Math.min(c,n.height-m),(g=u.getContext("2d"))==null||g.putImageData(s==null?void 0:s.getImageData(0,m,n.width,Math.min(c,n.height-m)),0,0),r.addImage(u.toDataURL("image/jpeg",1),"JPEG",0,0,a,Math.min(h,a*u.height/u.width)),m+=c,n.height-m>1&&r.addPage()}r.save(`${e}.pdf`),w("PDF\u5BFC\u51FA\u6210\u529F")}).catch(n=>{D("\u5BFC\u51FA\u5931\u8D25, "+n)}).finally(i)}function I(){let e=null;function t(i){e=T.service({lock:!0,text:i,background:"rgba(0, 0, 0, 0.7)"})}function o(){e&&e.close()}return{showLoading:t,closeLoading:o}}function $(e=0){const t=document.documentElement||document.body;let o=Math.abs(t.scrollTop-e)/20,i=0,n=o,r=-1;function s(){i=t.scrollTop;let a=i-e;r==i||a==0||(r=i,window.requestAnimationFrame(function(){if(o=a>0?n:-n,i-=o,Math.abs(a)<n){t.scrollTop=e;return}t.scrollTop=i,Math.abs(a)>0&&s()}))}s()}function U(e){let t=e==null?void 0:e.offsetTop,o=e==null?void 0:e.offsetParent;for(;o!==null;)t+=o.offsetTop,o=o.offsetParent;return t}export{B as H,H as a,k as b,U as c,G as d,C as g,V as i,S as o,A as q,q as r,$ as s};