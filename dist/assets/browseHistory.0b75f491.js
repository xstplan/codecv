import{_ as p,f as D,a as H,g as b,e as A,E as g}from"./index.ecb826b0.js";import{E as m,o as n,c,a as s,W as e,V as d,at as I,au as y,P as R,u as r,X as L,r as k,av as T,b as N,F as C,a7 as B,M as $,S as w}from"./@vue.c38ebe97.js";import{u as E}from"./vue-router.49a2110c.js";import{a as V}from"./community.27dad364.js";const v=t=>(I("data-v-21a8259d"),t=t(),y(),t),O={class:"user-tooltip flex content-card"},q={class:"head flex"},M=["src"],U={class:"nick-name"},W=v(()=>s("strong",null,"\u6027\u522B\uFF1A",-1)),Y=v(()=>s("strong",null,"\u9662\u6821\uFF1A",-1)),z=v(()=>s("strong",null,"\u6C42\u804C\u610F\u5411\uFF1A",-1)),P=v(()=>s("strong",null,"\u6240\u5728\u5730\u533A\uFF1A",-1)),X=m({__name:"userTooltip",props:{userInfo:null},setup(t){return(i,l)=>(n(),c("div",O,[s("div",q,[s("img",{class:"mr-10",src:t.userInfo.avatar,alt:"\u5934\u50CF"},null,8,M),s("strong",U,e(t.userInfo.nickName),1)]),s("p",null,[W,d(" "+e(t.userInfo.sex)+"\u751F ",1)]),s("p",null,[Y,s("span",null,e(t.userInfo.school)+" -",1),s("span",null,e(t.userInfo.graduation)+"\u5C4A",1)]),s("p",null,[z,d(" "+e(t.userInfo.professional),1)]),s("p",null,[P,d(" "+e(t.userInfo.origin),1)])]))}});const j=p(X,[["__scopeId","data-v-21a8259d"]]),G=t=>(I("data-v-1a33f154"),t=t(),y(),t),J={class:"user-head"},K=["src"],Q={class:"user-info"},Z={class:"user-name"},tt={class:"date-school"},st={key:0,class:"datetime mr-20"},et={class:"school"},ot=G(()=>s("i",{class:"iconfont icon-school"},null,-1)),nt=m({__name:"userInfo",props:{userInfo:null,publishTime:null},setup(t){return(i,l)=>{var _,a,o,u;return n(),c("div",J,[s("img",{class:"pointer mr-10",src:(_=t.userInfo)==null?void 0:_.avatar},null,8,K),R(j,{class:"user-tooltip",userInfo:t.userInfo},null,8,["userInfo"]),s("div",Q,[s("span",Z,e((a=t.userInfo)==null?void 0:a.nickName),1),s("div",tt,[t.publishTime?(n(),c("span",st,e(r(D)(t.publishTime))+"\u53D1\u5E03",1)):L("",!0),s("span",et,[ot,d(" "+e((o=t.userInfo)==null?void 0:o.school)+" - "+e((u=t.userInfo)==null?void 0:u.graduation)+"\u5C4A ",1)])])])])}}});const kt=p(nt,[["__scopeId","data-v-1a33f154"]]);function at(){const t="__BROWSE_HISTORY__",l=k([]),_=E();function a(f){const h=o();h.length>=10&&h.pop(),h.unshift(f),H(t,h,60*60*1e3*24*365)}function o(){return b(t)||[]}function u(f){l.value=f}function F(f){_.push(`/community/detail?articleId=${f}`)}return T(()=>{u(o()||[])}),{data:l,useDetail:F,setBrowseHistory:a,getBrowseHistory:o}}function S(t){return t>=1e3?(t/1e3).toFixed(1)+"k":t}function ut(){const t=k([]),i=E();async function l(){const a=await V({requireCount:10});if(a.code===200){t.value=a.data;return}A(a.msg)}function _(a){i.push(`/community/detail?articleId=${a}`)}return N(()=>l()),{useDetail:_,hotList:t}}const ct=t=>(I("data-v-46bd230f"),t=t(),y(),t),it={class:"hot-list content-card"},lt=ct(()=>s("p",{class:"hot-title slide-title"},"\u70ED\u95E8\u9762\u7ECF",-1)),rt={key:0,class:"list-style-init"},_t=["onClick"],dt=m({__name:"hotList",setup(t){const{hotList:i,useDetail:l}=ut();return(_,a)=>(n(),c("div",it,[lt,r(i).length?(n(),c("ul",rt,[(n(!0),c(C,null,B(r(i),(o,u)=>(n(),c("li",{key:u,class:"line-2",onClick:F=>r(l)(o.articleId)},[s("span",{class:$(["rank",{topRank:u<3}])},e(u+1),3),d(" "+e(o.title)+" ",1),s("i",{class:$(["iconfont icon-hot font-20",{topRank:u<3}])},null,2),s("span",{class:$({topRank:u<3})},e(r(S)(o.hot)),3)],8,_t))),128))])):(n(),w(g,{key:1,title:"\u8FD8\u6CA1\u6709\u9762\u7ECF\uFF0C\u5FEB\u53BB\u62A2\u6C99\u53D1\u5427."}))]))}});const Ct=p(dt,[["__scopeId","data-v-46bd230f"]]),x=t=>(I("data-v-8e2d1706"),t=t(),y(),t),ft={class:"browse-history-list mt-20 content-card"},ht=x(()=>s("p",{class:"browse-history-title slide-title"},"\u6D4F\u89C8\u5386\u53F2",-1)),pt={key:0,class:"list-style-init history-list"},mt=["onClick"],It=x(()=>s("i",{class:"iconfont icon-browse font-20"},null,-1)),yt=m({__name:"browseHistory",setup(t){const{data:i,useDetail:l}=at();return(_,a)=>(n(),c("div",ft,[ht,r(i).length?(n(),c("ul",pt,[(n(!0),c(C,null,B(r(i),(o,u)=>(n(),c("li",{key:u,class:"line-2",onClick:F=>r(l)(o.articleId)},[d(e(o.title)+" ",1),s("span",null,[It,d(" "+e(r(S)(o.hot)),1)])],8,mt))),128))])):(n(),w(g,{key:1,title:"\u4F60\u8FD8\u6CA1\u6D4F\u89C8\u8FC7\u4EFB\u4F55\u6587\u7AE0"}))]))}});const Bt=p(yt,[["__scopeId","data-v-8e2d1706"]]);export{Bt as B,Ct as H,kt as U,S as n,at as u};
