import{k as z,l as ie,q as ue}from"./element-plus.a21bd6a8.js";import{i as G,a as le,n as q,U as K,H as ae,B as re}from"./browseHistory.aae88421.js";import{r as E,a4 as W,C as N,I as ce,o as a,c as f,a as i,Y as me,ak as de,u as t,S as pe,x as fe,M as w,a6 as D,V as g,Q as F,L as k,au as U,av as j,w as V,n as ve,U as $,T as P,q as T,H as O,s as ye,as as X,J as he,P as Y}from"./@vue.f13b1cd7.js";import{P as _e}from"./vue3-emoji-picker.442af551.js";import{b as x,u as R,e as A,I as ge,w as L,s as Z,f as Ie,E as Ce,i as ke}from"./index.24ca6f8e.js";import{e as ee}from"./@vueuse.3289c222.js";import{_ as M,V as $e}from"./vue-markdown-menu-bar.c0aaf2d4.js";import{s as te,c as oe}from"./index.430ce383.js";import{b as be}from"./vue-router.dfb22bb7.js";import{b as Ee,l as Fe}from"./community.416fdbf5.js";/* empty css                  */import"./lodash-es.32a32d0b.js";import"./async-validator.fb49d0f5.js";import"./@element-plus.b086eeac.js";import"./dayjs.f53c2448.js";import"./aos.e37f4dc9.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./jspdf.0b42b4d1.js";import"./@babel.e46629ed.js";import"./fflate.fca59393.js";import"./pinia.0e09823a.js";import"./picture-verification-code.e81ffd11.js";import"./axios.05d3747b.js";import"./nprogress.8e3ae131.js";import"./config.31c7f7f6.js";import"./html2canvas.4d0ab5af.js";function Ae(e){return x("/communityComment/publish",e)}function Be(e){return x("/communityComment/reply",e)}function Te(e){return x("/communityComment/remove",e)}function we(e){return x("/communityComment/queryCommentsByArticleId",e)}function De(e){return x("/communityComment/queryCommentPosition",e)}function Ne(e){const n=E(!1);function s(){n.value=!n.value}function l(d){s(),e.value+=d.i}return{picker:n,togglePicker:s,setEmoji:l}}function xe(e,n,s,l,d,u,r,h,v){const p=E(""),{loginState:y,loginModelToggle:I,userInfo:c}=R();async function o(){if(!y.logined){I();return}if(!p.value.trim()){L("\u4F60\u53D1\u4E2A\u7A7A\u5185\u5BB9\u662F\u60F3\u5E72\u561B\u5462\uFF1F\uFF1F\uFF1F");return}if(p.value.length>200){L("\u592A\u591A\u4E86\u5B58\u4E0D\u4E0B, \u5220\u5230200\u5B57\u4EE5\u5185\u5427");return}const _=n.value==1?Ae:Be,m={content:p.value.replace(/</g,"&lt;").replace(/>/g,"&gt;"),authorId:c.uid,images:v.value.join("~$^$~"),level:n.value,articleId:e.value,posterCommentId:s.value,replyAuthorId:l.value,replyArticleAuthorId:d.value,replyCommentId:u.value,replyCommentLevel:r.value},C=await _(m);C.code==200&&(p.value="",v.value.length=0,h("reQueryComments")),C.code==200?Z(C.msg):A(C.msg)}return W(()=>{p.value="",v.value.length=0}),{shareMainContent:p,publish:ee(o,1e3)}}function Me(){const e=E([]);async function n(){if(e.value.length>=2)return A("\u6700\u591A\u53EA\u80FD\u4E0A\u4F202\u5F20\u56FE\u7247\uFF01");const l=document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept",".png,.jpg,.gif,.jpeg,.webp"),l.click(),l.onchange=async function(){const d=Array.from(l.files);for(const u of d){const r=await ge(u);e.value.push(r)}l.remove()}}function s(l){e.value.splice(l,1)}return{images:e,pickerImage:n,deleteImage:s}}const ne=e=>(U("data-v-aeb132b8"),e=e(),j(),e),Se={class:"community-publish content-card"},Qe={class:"community-content-edit"},Pe={key:0,class:"covers-container community-comment-cover"},Re=["onClick"],qe={class:"community-operator-group flex community-content-edit-publish"},Le={class:"community-edit-picker"},ze=ne(()=>i("i",{class:"iconfont icon-emoji font-25 mr-10"},null,-1)),Ue=[ze],je=ne(()=>i("i",{class:"iconfont icon-image font-25"},null,-1)),Ve=[je],He=N({__name:"publish",props:{articleId:null,level:null,replyCommentLevel:{default:1},posterCommentId:{default:0},replyCommentId:{default:0},replyAuthorId:{default:0},replyArticleAuthorId:{default:0},background:{default:"#f8f8f8"}},emits:["reQueryComments"],setup(e,{emit:n}){const s=e,{pickerImage:l,images:d,deleteImage:u}=Me(),r=ce(s),{shareMainContent:h,publish:v}=xe(r.articleId,r.level,r.posterCommentId,r.replyAuthorId,r.replyArticleAuthorId,r.replyCommentId,r.replyCommentLevel,n,d),{picker:p,setEmoji:y,togglePicker:I}=Ne(h);return(c,o)=>{const _=z;return a(),f("div",Se,[i("div",Qe,[me(i("textarea",{style:pe({background:e.background}),class:"content-edit main-content","onUpdate:modelValue":o[0]||(o[0]=m=>fe(h)?h.value=m:null),placeholder:"\u5185\u5BB9\u63A7\u5236\u5728200\u5B57\u4EE5\u5185\uFF5E"},null,4),[[de,t(h)]])]),t(d).length?(a(),f("div",Pe,[(a(!0),f(w,null,D(t(d),(m,C)=>(a(),f("div",{class:"mr-10 cover-item-container",key:C},[k(_,{loading:"lazy",src:m,fit:"cover",class:"cover-item","initial-index":C,"preview-src-list":t(d),"preview-teleported":!0,"hide-on-click-modal":!0},null,8,["src","initial-index","preview-src-list"]),i("i",{onClick:Q=>t(u)(C),class:"iconfont icon-delete pointer hover cover-item-close"},null,8,Re)]))),128))])):g("",!0),i("div",qe,[i("div",Le,[i("span",{class:"emoji pointer hover",onClick:o[1]||(o[1]=(...m)=>t(I)&&t(I)(...m))},Ue),i("span",{class:"emoji pointer hover",onClick:o[2]||(o[2]=(...m)=>t(l)&&t(l)(...m))},Ve),t(p)?(a(),F(t(_e),{key:0,class:"picker",native:!0,"hide-search":!0,"hide-group-names":!0,onSelect:t(y),"static-texts":{skinTone:"\u6362\u80A4"}},null,8,["onSelect"])):g("",!0)]),i("button",{class:"btn primary",onClick:o[3]||(o[3]=(...m)=>t(v)&&t(v)(...m))},"\u53D1\u8868")])])}}});const H=M(He,[["__scopeId","data-v-aeb132b8"]]);function se(e){const{userInfo:n}=R(),s=E(-1);let l=-1;function d(r){if(l===r){s.value=-1,l=-1;return}l=r,s.value=r}async function u(r,h,v){if(!G()){A("\u8BF7\u5148\u767B\u5F55\uFF01"),window.location.reload();return}const p=await Te({commentId:r,articleId:h,level:v});if(p.code==200){Z(p.msg),e("reQueryComments");return}A(p.msg)}return{userInfo:n,reply:d,remove:u,currenId:s}}function Je(e){const n=E(e>1);function s(){n.value=!1}return{more:n,setMore:s}}function Oe(e){const n=E();return V(()=>e.value,()=>{try{ve(()=>{const s=n.value.children[e.value];te(oe(s)-65),s.classList.add("notice"),setTimeout(()=>{s.classList.remove("notice")},1e3)})}catch(s){console.log(s),A("\u51FA\u4E86\u70B9\u9519\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u65B0\u5C1D\u8BD5\uFF5E")}}),{comments:n}}const Ye=e=>(U("data-v-128fa26e"),e=e(),j(),e),Ge={class:"user-head"},Ke=["src"],We={class:"user-info"},Xe={class:"user-name"},Ze={class:"date-school"},et={key:0,class:"datetime mr-20"},tt={class:"school"},ot=Ye(()=>i("i",{class:"iconfont icon-school"},null,-1)),nt=N({__name:"UserInfo",props:{userInfo:null,publishTime:null},setup(e){return(n,s)=>{var l,d,u,r;return a(),f("div",Ge,[i("img",{class:"pointer mr-10",src:(l=e.userInfo)==null?void 0:l.avatar},null,8,Ke),k(le,{class:"user-tooltip",userInfo:e.userInfo},null,8,["userInfo"]),i("div",We,[i("span",Xe,$((d=e.userInfo)==null?void 0:d.nickName),1),i("div",Ze,[e.publishTime?(a(),f("span",et,$(t(Ie)(e.publishTime))+"\u53D1\u5E03",1)):g("",!0),i("span",tt,[ot,P(" "+$((u=e.userInfo)==null?void 0:u.school)+" - "+$((r=e.userInfo)==null?void 0:r.graduation)+"\u5C4A ",1)])])])])}}});const st=M(nt,[["__scopeId","data-v-128fa26e"]]),it={class:"comments-list mt-20 content-card"},ut={class:"comment-content line-4"},lt={class:"reply-text pointer"},at={key:0,class:"covers-container"},rt={class:"list-style-init flex operator"},ct=["onClick"],mt=["onClick"],dt=N({__name:"reply",props:{data:null,commentId:null,articleId:null},emits:["reQueryComments"],setup(e,{emit:n}){const s=e,{currenId:l,reply:d,userInfo:u,remove:r}=se(n),{more:h,setMore:v}=Je(s.data.length);return(p,y)=>{const I=z;return a(),f("div",it,[(a(!0),f(w,null,D(t(h)?e.data.slice(0,1):e.data,(c,o)=>(a(),f("div",{class:"comment-item",key:o},[k(st,{"user-info":c.authorInfo,"publish-time":c.createTime},null,8,["user-info","publish-time"]),i("p",ut,[i("span",lt,"@"+$(c.replyNickName)+"\uFF1A",1),P(" "+$(c.content),1)]),c.images?(a(),f("div",at,[(a(!0),f(w,null,D(c.images.split("~$^$~"),(_,m)=>(a(),F(I,{key:m,src:_,"preview-src-list":c.images.split("~$^$~"),"initial-index":m,fit:"cover",loading:"lazy",lazy:!0,class:"mr-10 cover-item","preview-teleported":!0,"hide-on-click-modal":!0},null,8,["src","preview-src-list","initial-index"]))),128))])):g("",!0),i("ul",rt,[i("li",{class:"mr-10",onClick:_=>t(d)(c.commentId)},"\u56DE\u590D",8,ct),t(u).uid===c.authorId?(a(),f("li",{key:0,onClick:_=>t(r)(c.commentId,e.articleId,2)}," \u5220\u9664 ",8,mt)):g("",!0)]),t(l)===c.commentId?(a(),F(H,{key:1,"article-id":e.articleId,level:2,"reply-comment-level":c.level,"poster-comment-id":e.commentId,"reply-comment-id":c.commentId,"reply-author-id":c.authorId,background:"white",onReQueryComments:y[0]||(y[0]=_=>p.$emit("reQueryComments"))},null,8,["article-id","reply-comment-level","poster-comment-id","reply-comment-id","reply-author-id"])):g("",!0)]))),128)),t(h)?(a(),f("span",{key:0,onClick:y[1]||(y[1]=(...c)=>t(v)&&t(v)(...c)),class:"pointer showMore"},"\u663E\u793A\u5168\u90E8...")):g("",!0)])}}});const pt=M(dt,[["__scopeId","data-v-01b27f81"]]),ft={class:"comments-container content-card"},vt={class:"tip"},yt={class:"comment-content line-4"},ht={key:0,class:"covers-container"},_t={class:"list-style-init flex operator"},gt=["onClick"],It=["onClick"],Ct=N({__name:"comments",props:{data:null,articleId:null,pageNum:null,scrollTo:null,total:null,articleAuthorId:null,commentsTotal:null},emits:["pageNumChange","reQueryComments"],setup(e,{emit:n}){const s=e,l=T(()=>s.scrollTo),{currenId:d,reply:u,userInfo:r,remove:h}=se(n),{comments:v}=Oe(l);return(p,y)=>{const I=z,c=ie;return a(),f("div",ft,[i("span",vt,"\u672C\u9875\u8BC4\u8BBA/\u56DE\u590D\u5171 "+$(t(q)(e.total))+" \u6761",1),e.data.length?(a(),f("div",{key:0,class:"comments-list mt-20 content-card",ref_key:"comments",ref:v},[(a(!0),f(w,null,D(e.data,(o,_)=>(a(),f("div",{class:"comment-item",key:_},[k(K,{"user-info":o.authorInfo,"publish-time":o.createTime},null,8,["user-info","publish-time"]),i("p",yt,$(o.content),1),o.images?(a(),f("div",ht,[(a(!0),f(w,null,D(o.images.split("~$^$~"),(m,C)=>(a(),F(I,{src:m,"preview-src-list":o.images.split("~$^$~"),key:C,"initial-index":C,fit:"cover",lazy:!0,loading:"lazy",class:"mr-10 cover-item","preview-teleported":!0,"hide-on-click-modal":!0},null,8,["src","preview-src-list","initial-index"]))),128))])):g("",!0),i("ul",_t,[i("li",{class:"mr-10",onClick:m=>t(u)(o.commentId)},"\u56DE\u590D",8,gt),t(r).uid===o.authorId?(a(),f("li",{key:0,onClick:m=>t(h)(o.commentId,e.articleId,1)}," \u5220\u9664 ",8,It)):g("",!0)]),t(d)===o.commentId?(a(),F(H,{key:1,"article-id":e.articleId,level:2,"poster-comment-id":o.commentId,"reply-comment-id":o.commentId,"reply-comment-level":o.level,"reply-author-id":o.authorId,"reply-article-author-id":e.articleAuthorId,onReQueryComments:y[0]||(y[0]=m=>p.$emit("reQueryComments"))},null,8,["article-id","poster-comment-id","reply-comment-id","reply-comment-level","reply-author-id","reply-article-author-id"])):g("",!0),o.children.length?(a(),F(pt,{key:2,data:o.children,"comment-id":o.commentId,"article-id":e.articleId,onReQueryComments:y[1]||(y[1]=m=>p.$emit("reQueryComments"))},null,8,["data","comment-id","article-id"])):g("",!0)]))),128))],512)):g("",!0),e.data.length?(a(),F(c,{key:1,background:"",layout:"prev, pager, next",total:e.commentsTotal,class:"mt-4 mt-20","current-page":e.pageNum,onCurrentChange:y[2]||(y[2]=o=>p.$emit("pageNumChange",o))},null,8,["total","current-page"])):g("",!0),e.data.length?g("",!0):(a(),F(Ce,{key:2,title:"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u8868\u8BC4\u8BBA..."}))])}}});const kt=M(Ct,[["__scopeId","data-v-59df0f3a"]]);function $t(e,n){const s=O({title:"",content:"",professional:"",authorId:0,likes:[],commentTotal:0,hot:0,createTime:"",updateTime:"",articleId:e.value,introduce:"",authorInfo:ke,comments:[]}),l=E(0),d=E(0),u=O({pageNum:1,pageSize:10,articleId:e.value}),r=E();async function h(){if(!e.value){A("\u51FA\u9519\u4E86");return}const o=await Ee({articleId:e.value});o.code==200&&bt(s,o.data)}async function v(){u.articleId=e.value;const o=await we(u);o.code==200&&(s.comments=o.data,l.value=o.total,d.value=o.commentsTotal)}function p(){const o=document.querySelector(".anchor");te(oe(o)-65)}function y(o){u.pageNum=o,v(),p()}async function I(o){if(!G())return A("\u8BF7\u5148\u767B\u5F55");if(o){L("\u70B9\u8FC7\u8D5E\u4E86, \u4E0D\u7528\u518D\u70B9\u4E86\uFF5E");return}const{userInfo:_}=R(),{code:m}=await Fe({articleId:e.value,userId:_.uid});m==200&&s.likes.push(_.uid)}const c=ee(function(){isNaN(e.value)||(v(),h())});return V(()=>e.value,()=>{c()}),ye(async()=>{if(isNaN(n.value))return;const{data:o,code:_,msg:m}=await De({commentId:n.value,pageSize:u.pageSize,articleId:e.value});_===200?(u.pageNum=o.pageNum,s.comments=o.data,r.value=o.position):A(m)}),X(c),W(()=>s.content=""),{commentsConditions:u,total:l,position:r,commentsTotal:d,article:s,like:I,queryArticle:h,pageNumChange:y,queryComments:v,toCommentFieldTop:p}}function bt(e,n){e.articleId=n.articleId,e.title=n.title,e.content=n.content,e.commentTotal=n.commentTotal,e.professional=n.professional,e.authorId=n.authorId,e.likes=n.likes,e.createTime=n.createTime,e.updateTime=n.updateTime,e.introduce=n.introduce,e.authorInfo=n.authorInfo}function Et(e){const n=E(!1);function s(){n.value=!1,setTimeout(()=>n.value=!0,200)}return X(()=>{s()}),V(()=>e.value,()=>{s()}),{delay:n}}const S=e=>(U("data-v-125c19bd"),e=e(),j(),e),Ft={class:"community-detail flex"},At={class:"main-content mr-20"},Bt={class:"main content-card"},Tt=["innerHTML"],wt={class:"supports mb-20"},Dt=S(()=>i("i",{class:"iconfont icon-like font-20"},null,-1)),Nt=S(()=>i("i",{class:"iconfont icon-comment font-20"},null,-1)),xt=S(()=>i("i",{class:"iconfont icon-share font-20"},null,-1)),Mt=S(()=>i("i",{class:"iconfont icon-edit font-20"},null,-1)),St={class:"pointer tag mr-20"},Qt=S(()=>i("i",{class:"anchor"},null,-1)),Pt={class:"slide-content"},Rt=N({__name:"communityDetail",setup(e){const n=be(),s=T(()=>parseInt(n.query.articleId)),l=T(()=>parseInt(n.query.posterCommentId)),{userInfo:d}=R(),{article:u,total:r,position:h,commentsTotal:v,like:p,pageNumChange:y,toCommentFieldTop:I,queryComments:c,commentsConditions:o}=$t(s,l),{delay:_}=Et(s),m=T(()=>u.likes.includes(d.uid)),C=T(()=>u.authorId==d.uid);return(Q,b)=>{const J=ue;return a(),f("div",Ft,[i("div",At,[i("div",Bt,[k(K,{class:"user-info","user-info":t(u).authorInfo,"publish-time":t(u).createTime},null,8,["user-info","publish-time"]),i("article",{class:"content",innerHTML:t(u).content},null,8,Tt),i("div",wt,[i("span",{onClick:b[0]||(b[0]=B=>t(p)(t(m))),class:he({clicked:t(m)})},[Dt,P(" "+$(t(q)(t(u).likes.length)),1)],2),i("span",{onClick:b[1]||(b[1]=(...B)=>t(I)&&t(I)(...B))},[Nt,P(" "+$(t(q)(t(u).comments.length)),1)]),i("span",null,[k(J,{placement:"bottom",content:"\u5206\u4EAB\u7ED9\u670B\u53CB"},{default:Y(()=>[xt]),_:1})]),t(C)?(a(),f("span",{key:0,onClick:b[2]||(b[2]=B=>Q.$router.push(`/community/editor?articleId=${t(s)}`))},[k(J,{placement:"bottom",content:"\u7F16\u8F91"},{default:Y(()=>[Mt]),_:1})])):g("",!0)]),i("span",St,"#"+$(t(u).professional),1),i("span",{class:"pointer hover",onClick:b[3]||(b[3]=B=>Q.$router.back())},"\u8FD4\u56DE\u4E0A\u4E00\u9875"),i("span",{class:"pointer hover back absolute",onClick:b[4]||(b[4]=B=>Q.$router.back())},"\u8FD4\u56DE\u4E0A\u4E00\u9875")]),k(H,{"article-id":t(s),level:1,"reply-article-author-id":t(u).authorId,onReQueryComments:t(c)},null,8,["article-id","reply-article-author-id","onReQueryComments"]),Qt,k(kt,{data:t(u).comments,"article-id":t(s),total:t(r),"page-num":t(o).pageNum,"scroll-to":t(h),"comments-total":t(v),"article-author-id":t(u).authorId,onPageNumChange:t(y),onReQueryComments:t(c)},null,8,["data","article-id","total","page-num","scroll-to","comments-total","article-author-id","onPageNumChange","onReQueryComments"])]),i("div",Pt,[k(ae,{class:"slide-item"}),k(re),t(_)?(a(),F(t($e),{key:0,class:"slide-item menu-bar content-card",body:".content",width:"300px"})):g("",!0)])])}}});const po=M(Rt,[["__scopeId","data-v-125c19bd"]]);export{po as default};