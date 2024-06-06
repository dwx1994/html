import{d as H,a as v,c as _,b as e,o as m,p as b,e as h,_ as p,f as k,t as r,w as $,g as D,r as d,h as g,v as y,u as S,i as w,j as Y}from"./index-DLGLJZ27.js";const I=H("login",{state:()=>({isLogin:!1,isDelete:!1}),actions:{},getters:{}}),C=t=>(b("data-v-afb28d66"),t=t(),h(),t),V={class:"login-container"},T=C(()=>e("div",{class:"title"},"Login",-1)),N=C(()=>e("div",{class:"line"},null,-1)),j=C(()=>e("div",{class:"content"},[e("div",{class:"img"})],-1)),q=C(()=>e("div",{class:"tips"}," By continuing, you agree to the User Agreement and Privacy Policy ",-1)),M=v({__name:"Login",props:{display:{type:Boolean,default:!1}},emits:["close"],setup(t,{emit:o}){const i=I(),s=o,c=()=>{s("close")},a=()=>{i.isLogin=!0,s("close")};return(l,f)=>(m(),_("div",V,[e("div",{class:"header"},[e("div",{class:"back-btn",onClick:c}),T]),N,j,e("div",{class:"btns-group"},[e("div",{class:"google-btn",onClick:a},"Login with Google"),e("div",{class:"apple-btn",onClick:a},"Login with Apple")]),q]))}}),P=p(M,[["__scopeId","data-v-afb28d66"]]),E=t=>(b("data-v-c5493d7d"),t=t(),h(),t),G={class:"recover-container"},U=E(()=>e("div",{class:"title"},"Recover",-1)),O=k('<div class="line" data-v-c5493d7d></div><div class="content" data-v-c5493d7d><div class="ok-img" data-v-c5493d7d></div><div class="title" data-v-c5493d7d>Your account has been deleted</div><div class="subtitle" data-v-c5493d7d> Account deletion can be reversed within 30 days </div></div>',2),J=v({__name:"Recover",props:{display:{type:Boolean,default:!1}},emits:["close","recover"],setup(t,{emit:o}){const i=o,s=()=>{i("close")},c=()=>{i("recover")};return(a,l)=>(m(),_("div",G,[e("div",{class:"header"},[e("div",{class:"back-btn",onClick:s}),U]),O,e("div",{class:"btns-group"},[e("div",{class:"recover-btn",onClick:c},"Recover your account")])]))}}),Q=p(J,[["__scopeId","data-v-c5493d7d"]]),L=t=>(b("data-v-2471cd49"),t=t(),h(),t),W={class:"title"},X={class:"subtitle"},z=L(()=>e("div",{class:"line"},null,-1)),F={class:"modal-actions"},K=L(()=>e("div",{class:"line"},null,-1)),Z=v({__name:"ConfiromDialog",props:{show:{type:Boolean,required:!0},title:{type:String,default:"Deletion cannot be reversed after 30 days"},message:{type:String,default:"Double confirm here"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"}},emits:["close","confirm"],setup(t,{emit:o}){const i=o,s=()=>{i("close")},c=()=>{i("confirm"),i("close")};return(a,l)=>t.show?(m(),_("div",{key:0,class:"modal-overlay",onClick:s},[e("div",{class:"modal-content",onClick:l[0]||(l[0]=$(()=>{},["stop"]))},[e("div",W,r(t.title),1),e("div",X,r(t.message),1),z,e("div",F,[e("div",{onClick:c,class:"confirm-button"},r(t.confirmText),1),K,e("div",{onClick:s,class:"cancel-button"},r(t.cancelText),1)])])])):D("",!0)}}),ee=p(Z,[["__scopeId","data-v-2471cd49"]]),te=t=>(b("data-v-aa6bcd2f"),t=t(),h(),t),oe=te(()=>e("div",{class:"modal-icon"},null,-1)),se=v({__name:"RecoverSucc",props:{show:{type:Boolean,required:!0},message:{type:String,default:"Your account has been restored"},buttonText:{type:String,default:"Continue"}},emits:["close"],setup(t,{emit:o}){const i=o,s=()=>{i("close")};return(c,a)=>t.show?(m(),_("div",{key:0,class:"modal-overlay",onClick:s},[e("div",{class:"modal-content",onClick:a[0]||(a[0]=$(()=>{},["stop"]))},[oe,e("h2",null,r(t.message),1),e("button",{onClick:s,class:"modal-button"},r(t.buttonText),1)])])):D("",!0)}}),ie=p(se,[["__scopeId","data-v-aa6bcd2f"]]),u=t=>(b("data-v-09b9727d"),t=t(),h(),t),ae={class:"login-view"},ce=u(()=>e("div",{class:"title"},"Delete account",-1)),ne=u(()=>e("div",{class:"line"},null,-1)),le={class:"content"},de={class:"unlogin-box"},re=u(()=>e("div",{class:"logo"},null,-1)),ue=u(()=>e("div",{class:"title"},"Login to continue",-1)),ve={class:"login-box"},_e=u(()=>e("img",{class:"avatar",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ585lq0bShRxaVR0Pga8cjNticS1YEod7XqJouvWEa6gUwtj1yL9Y6&s"},null,-1)),me=u(()=>e("div",{class:"userinfo"},[e("div",{class:"name"},"David"),e("div",{class:"uid"},"UID 2320043439")],-1)),be=[_e,me],he=k('<div class="word" data-v-09b9727d><div class="title" data-v-09b9727d>Attention of Hey AI account deletion</div><div class="subtitle" data-v-09b9727d> You are about to begin the deletion process for your account. Your nickname and public profile on Hey Al </div><div class="subtitle" data-v-09b9727d> It will no longer be visible on the iOS and Android versions. </div><div class="title" data-v-09b9727d>Other information</div><div class="subtitle" data-v-09b9727d> If your Hey Al account is accidentally or mistakenly deactivated, you have up to 30 days after deactivation to reinstate your Hey Al account. </div><div class="subtitle" data-v-09b9727d> If you have any active paid subscriptions (e.g., Premium) purchased through the Hey Al app, they will remain active. You can manage it through the platform you originally subscribed to these subscription services. </div><div class="subtitle" data-v-09b9727d> Subscriptions purchased on Hey Al will be automatically canceled when you deactivate your account. </div><div class="subtitle" data-v-09b9727d> Some account information may still be visible in search engines such as Google or Bing. </div><div class="subtitle" data-v-09b9727d> If you just want to change your user profile, you don&#39;t need to delete your account, just edit it in your </div><div class="subtitle" data-v-09b9727d> If you want to download your Hey Al data, you need to complete the application and download process before deleting your account. Data download links cannot be sent to deleted accounts. </div></div>',1),pe={class:"login-comp"},fe={class:"recover-comp"},ge=v({__name:"LoginView",setup(t){const o=I(),i=d(!1),s=d(!1),c=d("Deletion cannot be reversed after 30 days"),a=d("Double confirm here"),l=d(!1),f=d(!1),x=()=>{Y.push("/")},A=()=>{o.isLogin&&!o.isDelete?(o.isDelete=!0,s.value=!0):o.isLogin&&o.isDelete&&(o.isDelete=!1,s.value=!1,f.value=!0)},B=()=>{c.value="Recover your account",a.value="Your Hey AI account will be recovered",l.value=!0},R=()=>{o.isLogin&&(l.value=!0,c.value="Deletion cannot be reversed after 30 days",a.value="Double confirm here")};return(ye,n)=>(m(),_("div",ae,[e("div",{class:"header"},[e("div",{class:"back-btn",onClick:x}),ce]),ne,e("div",le,[g(e("div",de,[re,ue,e("div",{class:"arrow",onClick:n[0]||(n[0]=()=>{i.value=!0})})],512),[[y,!S(o).isLogin]]),g(e("div",ve,be,512),[[y,S(o).isLogin]]),he]),e("div",{class:"footer"},[e("div",{class:"delete-btn",onClick:R},"Delete account")]),g(e("div",pe,[w(P,{onClose:n[1]||(n[1]=()=>{i.value=!1})})],512),[[y,i.value]]),g(e("div",fe,[w(Q,{onClose:n[2]||(n[2]=()=>{s.value=!1}),onRecover:B})],512),[[y,s.value]]),w(ee,{show:l.value,title:c.value,message:a.value,onClose:n[3]||(n[3]=we=>l.value=!1),onConfirm:A},null,8,["show","title","message"]),w(ie,{show:f.value,onClose:n[4]||(n[4]=()=>{f.value=!1,S(o).isDelete=!1}),message:"Your account has been restored",buttonText:"Continue"},null,8,["show"])]))}}),Se=p(ge,[["__scopeId","data-v-09b9727d"]]);export{Se as default};