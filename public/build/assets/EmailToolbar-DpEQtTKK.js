import{u as qe,c as De,a as Fe,r as c,j as e,R as He}from"./app-DAEZisrD.js";import{c as C}from"./ThemeProvider-DpO2Fe9x.js";import{d as Re,C as Pe}from"./ckeditor-Y6k6nbAc.js";import{F as ze}from"./index-CiIEPrCJ.js";import{D as Ke}from"./DeleteModal-BcwwfHtF.js";import{S as le}from"./index-DKL1jx0G.js";import{P as Je}from"./index-DQXccSga.js";/* empty css               */import{a as Oe}from"./avatar-1-PHP4S1R6.js";import{i as Ue}from"./img-2-BKxLD3CN.js";import{s as We}from"./img-6-B4dmEj4y.js";import{a as H}from"./avatar-2-B-1-S_lh.js";import{a as Ge}from"./avatar-4-BkrIkC6X.js";import{a as $e}from"./avatar-3-CSm6kh8B.js";import{a as Qe}from"./avatar-5-D7m8bZ3v.js";import{Q as Ye,B as Ve}from"./ReactToastify-Dfu59Ofk.js";import"./calender-yWVPQvD3.js";import{o as Xe,a as R,b as Ze,c as _e,d as te,e as es}from"./thunk-CTyYHgNq.js";import{B as n}from"./Button-BSuMOxsW.js";import{P as ss}from"./ProgressBar-BZ9cJ2Gv.js";import{R as E}from"./Row-DP2h-Y3A.js";import{C as b}from"./Col-B8aG_WSb.js";import{F as x}from"./Form-CUYJsc4D.js";import{O as N,T as v}from"./OverlayTrigger-ygeTP4Db.js";import{D as t}from"./Dropdown-tOcdJjvK.js";import{A as as}from"./Alert-Dcx0WIWA.js";import{N as y}from"./Nav-C8G_Q6eL.js";import{A as f}from"./Accordion-CEM09Hy3.js";import{C as P}from"./Card-BqoKCbez.js";import{M as z}from"./Modal-B3Mr3uMa.js";import"./index-7MB6meGS.js";import"./isObject-D7bzW4Uf.js";import"./_baseClone-1g4bW0SP.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-3-B4j7qXDU.js";import"./avatar-6-DJX3lkeY.js";import"./avatar-7-ChzoTmzs.js";import"./avatar-8-BaCFiEfo.js";import"./avatar-9-iQiecx18.js";import"./avatar-10-BcqtGVJW.js";import"./user-dummy-img-Dka7rpSK.js";import"./Button-a_Mq9XKy.js";import"./ElementChildren-C5X_W_ol.js";import"./useWindow-C_R7bMWe.js";import"./listen-DOhMskc_.js";import"./useTimeout-DLGG2QX6.js";import"./useMounted-BJIR85-y.js";import"./useWillUnmount-DpS6NFwO.js";import"./hook-BF0Uv_rT.js";import"./extends-CF3RwP-h.js";import"./useMergedRefs-DWL3_gRO.js";import"./useCallbackRef-B6c-Je3E.js";import"./mergeOptionsWithPopperConfig-Cih7uyRc.js";import"./useEventCallback-Dcr8lMky.js";import"./hasClass-ChvUM52G.js";import"./NoopTransition-BVps1reF.js";import"./Fade-BnOsT5Gr.js";import"./TransitionWrapper-C_dyntM9.js";import"./setPrototypeOf-DgZC2w_0.js";import"./querySelectorAll-Cwpyv69p.js";import"./SSRProvider-E5dZEr-W.js";import"./usePrevious-CP___m-f.js";import"./useForceUpdate-BGliwYZ3.js";import"./NavContext-DMVl8V9Z.js";import"./DataKey-DjdvojM5.js";import"./Anchor-DRcRLFUD.js";import"./InputGroupContext-Dyo0o_3A.js";import"./NavbarContext-BLsiMOqp.js";import"./divWithClassName-DBqZ_0ZL.js";import"./CloseButton-CCRA29A_.js";import"./Nav-DV0jA3KM.js";import"./NavItem-BQDXY8NH.js";import"./CardHeaderContext-BqF8ZhAg.js";import"./NavLink-CItIyBRJ.js";import"./Collapse-D87sd4B3.js";import"./AbstractModalHeader-Cppe7zbO.js";const Ea=()=>{const u=qe(),ie=De(s=>s.Mailbox,s=>({mailDetails:s.mailDetails,isLoader:s.isLoader})),{mailDetails:B,isLoader:ce}=Fe(ie);c.useEffect(()=>{u(Xe())},[u]);const[ne,re]=c.useState([]),[j,oe]=c.useState("all"),[k,me]=c.useState(""),[L,de]=c.useState("primary"),[M,he]=c.useState("all"),[K,xe]=c.useState("all"),[J,ue]=c.useState("all"),[O,U]=c.useState(!1),[d,pe]=c.useState({});c.useEffect(()=>{re(B)},[B]);const W=c.useCallback(()=>{const s={all:0,inbox:0,starred:0,friend:0,family:0,social:0,support:0,freelance:0};return B.forEach(a=>{a.unread&&a.category!=="trash"&&(s.all++,a.category==="inbox"&&s.inbox++,a.category==="starred"&&s.starred++,a.label==="friend"&&s.friend++,a.label==="family"&&s.family++,a.label==="social"&&s.social++,a.label==="support"&&s.support++,a.label==="freelance"&&s.freelance++)}),s},[B]);c.useEffect(()=>{const s=W();pe(s)},[W]),c.useEffect(()=>{document.getElementsByTagName("body")[0].classList.remove("email-detail-show")},[]);const m=(s,a,l)=>{var i=document.getElementById("mail-filter-navlist");s==="all"||s==="inbox"?i.style.display="block":i.style.display="none",j!==s&&oe(s),k!==l&&me(l),L!==a&&de(a),he(s),xe(a),ue(l);const r=document.querySelectorAll(".message-list li"),o=document.getElementById("email-topbar-actions"),h=document.getElementById("checkall");r.forEach(g=>{g.classList.contains("active")&&(g.classList.remove("active"),g.querySelector(".form-check-input").checked=!1)}),h.checked=!1,o.style.display="none"};function q(s){var l,i;s.category!=="starred"&&((i=(l=document.querySelector(".email-detail-content"))==null?void 0:l.querySelector(".favourite-btn"))==null||i.classList.remove("active"));const a=document.getElementsByTagName("body")[0];a.classList.contains("email-detail-show")?a.classList.remove("email-detail-show"):a.classList.add("email-detail-show"),V(s),s.unread&&u(R(s.forId))}const G=(s,a)=>{const l=document.getElementById("emailchat-detailElem");l.style.display=s,ve(a)},[$,w]=c.useState(!1),fe=()=>{w(!$)},je=(s,a)=>{const l=document.getElementById("email-topbar-actions"),i=document.querySelectorAll(".checkbox-wrapper-mail input:checked").length,r=document.getElementById(s);i>=1?l.style.display="block":l.style.display="none",a?r.classList.add("active"):r.classList.remove("active")},be=()=>{const s=document.getElementById("checkall"),a=document.querySelectorAll(".message-list li"),l=document.getElementById("email-topbar-actions");l.style.display="block",s.checked?a.forEach(i=>{i.classList.add("active"),i.firstChild.firstChild.firstChild.checked=!0}):(l.style.display="none",a.forEach(i=>{i.classList.remove("active"),i.firstChild.firstChild.firstChild.checked=!1}))},ge=()=>{var i;const s=document.querySelectorAll(".message-list li"),a=document.getElementById("email-topbar-actions"),l=document.getElementById("checkall");document.getElementsByTagName("body")[0].classList.remove("email-detail-show"),O&&((i=document.getElementById(p.forId))==null||i.classList.add("active")),s.forEach(r=>{if(r.classList.contains("active")){var o=r.querySelector(".form-check-input").value;u(M==="trash"?Ze(o):_e(o))}r.classList.remove("active"),r.querySelector(".form-check-input").checked=!1}),setTimeout(()=>{Ve.clearWaitingQueue()},3e3),l.checked=!1,a.style.display="none",U(!1),V([])},Q=s=>{if(s==="unread")document.querySelectorAll(".message-list li.active:not(.unread)").forEach(function(o){const h=o.querySelector(".form-check-input").value;u(R(h))});else{var a=document.getElementById("unreadConversations");document.querySelectorAll(".message-list li.unread").length===0&&(a.style.display="block",setTimeout(function(){a.style.display="none"},1e3)),document.querySelectorAll(".message-list li.unread").forEach(function(o){const h=o.querySelector(".form-check-input").value;u(R(h))})}const l=document.querySelectorAll(".message-list li"),i=document.getElementById("email-topbar-actions"),r=document.getElementById("checkall");l.forEach(o=>{o.classList.remove("active"),o.querySelector(".form-check-input").checked=!1}),r.checked=!1,i.style.display="none"},D=s=>{var r,o;s?(p.forId===s.forId&&((o=(r=document.querySelector(".email-detail-content"))==null?void 0:r.querySelector(".favourite-btn"))==null||o.classList.toggle("active")),u(te(s.forId))):document.querySelectorAll(".message-list li.active:not(:has(button.active))").forEach(function(h){const g=h.querySelector(".form-check-input").value;u(te(g))});const a=document.querySelectorAll(".message-list li"),l=document.getElementById("email-topbar-actions"),i=document.getElementById("checkall");a.forEach(h=>{h.classList.remove("active"),h.querySelector(".form-check-input").checked=!1}),i.checked=!1,l.style.display="none"},Ne=[{id:1,img:H,name:"Scott Median",caption:"Hello ! are you there?"},{id:2,img:Ge,name:"Julian Rosa",caption:"What about our next.."},{id:3,img:$e,name:"David Medina",caption:"Yeah everything is fine"},{id:4,img:Qe,name:"Jay Baker",caption:"Wow that's great"}],[Y,ve]=c.useState([]),[p,V]=c.useState([]),[ye,T]=c.useState(!1),S=s=>{var r;const a=document.querySelectorAll(".message-list li"),l=document.getElementById("email-topbar-actions"),i=document.getElementById("checkall");document.getElementsByTagName("body")[0].classList.remove("email-detail-show"),O&&((r=document.getElementById(p.forId))==null||r.classList.add("active")),a.forEach(o=>{if(o.classList.contains("active")){var h=o.querySelector(".form-check-input").value;u(es({forId:h,e:s}))}o.classList.remove("active"),o.querySelector(".form-check-input").checked=!1}),i.checked=!1,l.style.display="none"},ke=[{id:1,isSender:!0,img:H,message:"Good morning 😊",time:"09:07 am"},{id:2,isSender:!1,message:"Good morning, How are you? What about our next meeting?",time:"09:08 am"},{id:3,isSender:!0,img:H,message:"Yeah everything is fine. Our next meeting tomorrow at 10.00 AM",time:"09:10 am"},{id:4,isSender:!1,message:"Wow that's great",time:"09:12 am"}],[F,X]=c.useState(""),[I,Z]=c.useState([...ke]),[A,Ce]=c.useState(null),_=c.useCallback(()=>{A&&(A.scrollTop=A.scrollHeight+1e3)},[A]);c.useEffect(()=>{(I||[]).length>1&&_()},[I,_]);const ee=()=>{var s=[...I];const a=s.length?s[s.length-1]:{id:1},l=new Date,i=l.getHours(),r=l.getMinutes(),o=i>=12?"pm":"am",h=i%12||12,g=r<10?`0${r}`:r,Te=`${h}:${g} ${o}`,Ae={id:a.id+1,message:F,time:Te,isSender:!1};F&&s.push({...Ae}),Z(s),X("")},we=s=>{const{key:a}=s;a==="Enter"&&(s.preventDefault(),ee())},Se=s=>{const a=I.filter(l=>l.id!==s.id);Z(a)},Ie=s=>{var l,i;const a=(i=(l=s.closest(".chat-list"))==null?void 0:l.querySelector(".ctext-content"))==null?void 0:i.innerHTML;a&&navigator.clipboard.writeText(a)},Ee=({category:s,type:a,label:l})=>M==="all"&&s==="trash"?!1:(M==="all"||M===s)&&(K==="all"||K===a)&&(J==="all"||J===l),[Be,se]=c.useState(!1),Le=()=>{se(!0),setTimeout(()=>{se(!1)},3e3)},ae=ne.filter(({category:s,type:a,label:l})=>Ee({category:s,type:a,label:l}));function Me(s){var i;const a=document.querySelector(".email-menu-sidebar"),l=document.querySelector(".email-menu-btn");l&&!l.contains(s.target)?a==null||a.classList.remove("menubar-show"):(i=document.querySelector(".email-menu-sidebar"))==null||i.classList.add("menubar-show")}return document.addEventListener("click",Me),e.jsxs(He.Fragment,{children:[e.jsx(Ye,{closeButton:!1,limit:1}),e.jsx(Ke,{show:ye,onDeleteClick:()=>{ge(),T(!1)},onCloseClick:()=>T(!1)}),e.jsx("div",{className:"email-menu-sidebar",children:e.jsxs("div",{className:"p-4 d-flex flex-column h-100",children:[e.jsx("div",{className:"pb-4 border-bottom border-bottom-dashed",children:e.jsxs("button",{type:"button",className:"btn btn-danger w-100",onClick:()=>{w(!0)},children:[e.jsx(ze,{icon:"plus-circle",className:"icon-xs me-1 icon-dual-light"}),"Compose"]})}),e.jsxs(le,{className:"mx-n4 px-4 email-menu-sidebar-scroll","data-simplebar":!0,children:[e.jsxs("div",{className:"mail-list mt-3",children:[e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("all","all","all")},className:C({active:j==="all"}),children:[e.jsx("i",{className:"ri-mail-fill me-3 align-middle fw-medium"})," ",e.jsxs("span",{className:"mail-list-link",children:["All"," "]}),d.all?e.jsx("span",{className:"badge bg-success-subtle text-success ms-auto",children:d.all}):""]}),e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("inbox","all","all")},className:C({active:j==="inbox"}),children:[e.jsx("i",{className:"ri-inbox-archive-fill me-3 align-middle fw-medium"})," ",e.jsxs("span",{className:"mail-list-link",children:["Inbox"," "]}),d.inbox?e.jsx("span",{className:"badge bg-success-subtle text-success ms-auto",children:d.inbox}):""]}),e.jsx("div",{children:e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("sent","all","all")},className:j==="sent"?"active":"",children:[e.jsx("i",{className:"ri-send-plane-2-fill me-3 align-middle fw-medium"})," ",e.jsx("span",{className:"mail-list-link",children:"Sent"})]})}),e.jsx("div",{children:e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("draft","all","all")},className:j==="draft"?"active":"",children:[e.jsx("i",{className:"ri-edit-2-fill me-3 align-middle fw-medium"}),e.jsx("span",{className:"mail-list-link",children:"Draft"})]})}),e.jsx("div",{children:e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("spam","all","all")},className:j==="spam"?"active":"",children:[e.jsx("i",{className:"ri-error-warning-fill me-3 align-middle fw-medium"}),e.jsx("span",{className:"mail-list-link",children:"Spam"})]})}),e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("trash","all","all")},className:j==="trash"?"active":"",children:[e.jsx("i",{className:"ri-delete-bin-5-fill me-3 align-middle fw-medium"}),e.jsx("span",{className:"mail-list-link",children:"Trash"})]}),e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("starred","all","all")},className:j==="starred"?"active":"",children:[e.jsx("i",{className:"ri-star-fill me-3 align-middle fw-medium"}),e.jsx("span",{className:"mail-list-link",children:"Starred"})]}),e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("important","all","all")},className:j==="important"?"active":"",children:[e.jsx("i",{className:"ri-price-tag-3-fill me-3 align-middle fw-medium"}),e.jsx("span",{className:"mail-list-link",children:"Important"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"fs-12 text-uppercase text-muted mt-4",children:"Labels"}),e.jsxs("div",{className:"mail-list mt-1",children:[e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("all","all","support")},className:k==="support"?"active":"",children:[e.jsx("span",{className:"ri-checkbox-blank-circle-line me-2 text-info"})," ",e.jsxs("span",{className:"mail-list-link",children:["Support"," "," "]}),d.support?e.jsx("span",{className:"badge bg-success-subtle text-success ms-auto",children:d.support}):""]}),e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("all","all","freelance")},className:k==="freelance"?"active":"",children:[e.jsx("span",{className:"ri-checkbox-blank-circle-line me-2 text-warning"})," ",e.jsx("span",{className:"mail-list-link",children:"Freelance"}),d.freelance?e.jsx("span",{className:"badge bg-success-subtle text-success ms-auto",children:d.freelance}):""]}),e.jsx("div",{children:e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("all","all","social")},className:k==="social"?"active":"",children:[e.jsx("span",{className:"ri-checkbox-blank-circle-line me-2 text-primary"})," ",e.jsx("span",{className:"mail-list-link",children:"Social"}),d.social?e.jsx("span",{className:"badge bg-success-subtle text-success ms-auto",children:d.social}):""]})}),e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("all","all","friend")},className:k==="friend"?"active":"",children:[e.jsx("span",{className:"ri-checkbox-blank-circle-line me-2 text-danger"})," ",e.jsx("span",{className:"mail-list-link",children:"Friends"}),d.friend?e.jsx("span",{className:"badge bg-success-subtle text-success ms-auto",children:d.friend}):""]}),e.jsxs(n,{as:"a",variant:"link",onClick:()=>{m("all","all","family")},className:k==="family"?"active":"",children:[e.jsx("span",{className:"ri-checkbox-blank-circle-line me-2 text-success"})," ",e.jsx("span",{className:"mail-list-link",children:"Family"}),d.family?e.jsx("span",{className:"badge bg-success-subtle text-success ms-auto",children:d.family}):""]})]})]}),e.jsxs("div",{className:"border-top border-top-dashed pt-3 mt-3",children:[e.jsx(n,{as:"a",variant:"link",className:"p-0 btn btn-icon btn-sm btn-soft-info rounded-pill float-end",children:e.jsx("i",{className:"bx bx-plus fs-16"})}),e.jsx("h5",{className:"fs-12 text-uppercase text-muted mb-3",children:"Chat"}),e.jsx("div",{className:"mt-2 vstack email-chat-list mx-n4",children:Ne.map((s,a)=>e.jsxs("a",{href:"#",className:"d-flex align-items-center",children:[e.jsx("div",{className:"flex-shrink-0 me-2 avatar-xxs chatlist-user-image",children:e.jsx("img",{className:"img-fluid rounded-circle",src:s.img,alt:""})}),e.jsxs("div",{className:"flex-grow-1 chat-user-box overflow-hidden",onClick:()=>G("block",s),children:[e.jsx("h5",{className:"fs-13 text-truncate mb-0 chatlist-user-name",children:s.name}),e.jsx("small",{className:"text-muted text-truncate mb-0",children:s.caption})]})]},a))})]})]}),e.jsxs("div",{className:"mt-auto",children:[e.jsx("h5",{className:"fs-13",children:"1.75 GB of 10 GB used"}),e.jsx(ss,{variant:"success",className:"progress-sm",now:25})]})]})}),e.jsx("div",{className:"email-content",children:e.jsxs("div",{className:"p-4 pb-0",children:[e.jsxs("div",{className:"border-bottom border-bottom-dashed",children:[e.jsxs(E,{className:"mt-n2 mb-3 mb-sm-0",children:[e.jsx(b,{className:"col-sm-auto order-1 d-block d-lg-none",children:e.jsx("button",{type:"button",className:"btn btn-soft-success btn-icon btn-sm fs-16 email-menu-btn",children:e.jsx("i",{className:"ri-menu-2-fill align-bottom"})})}),e.jsx("div",{className:"col-sm order-3 order-sm-2",children:e.jsxs("div",{className:"hstack gap-sm-1 align-items-center flex-wrap email-topbar-link",children:[e.jsxs("div",{className:"form-check fs-14 m-0",children:[e.jsx(x.Check.Input,{className:"form-check-input",type:"checkbox",value:"",id:"checkall",onChange:()=>{be()}}),e.jsx(x.Check.Label,{className:"form-check-label",htmlFor:"checkall"})]}),e.jsx("div",{id:"email-topbar-actions",style:{display:"none"},children:e.jsxs("div",{className:"hstack gap-sm-1 align-items-center flex-wrap",children:[e.jsx(N,{placement:"top",overlay:e.jsx(v,{id:"Tooltip1",children:"Archive"}),children:e.jsx(n,{as:"a",variant:"link",size:"sm",className:"fs-16",children:e.jsx("i",{className:"ri-inbox-archive-fill align-bottom"})})},"tooltip-1"),e.jsx(N,{placement:"top",overlay:e.jsx(v,{id:"Tooltip2",children:"Report Spam"}),children:e.jsx(n,{as:"a",variant:"link",size:"sm",className:"fs-16",children:e.jsx("i",{className:"ri-error-warning-fill align-bottom"})})},"tooltip-2"),e.jsx(N,{placement:"top",overlay:e.jsx(v,{id:"Tooltip3",children:"Trash"}),children:e.jsx(n,{as:"a",variant:"link",size:"sm",className:"fs-16",onClick:()=>T(!0),children:e.jsx("i",{className:"ri-delete-bin-5-fill align-bottom"})})},"tooltip-3")]})}),e.jsx("div",{className:"vr align-self-center mx-2"}),e.jsxs(t,{children:[e.jsx(t.Toggle,{as:"button",className:"btn btn-ghost-secondary btn-icon btn-sm fs-16 arrow-none",children:e.jsx("i",{className:"ri-price-tag-3-fill align-bottom"})}),e.jsxs(t.Menu,{className:"dropdown-menu-end",children:[e.jsx(t.Item,{onClick:()=>S("support"),children:"Support"}),e.jsx(t.Item,{onClick:()=>S("freelance"),children:"Freelance"}),e.jsx(t.Item,{onClick:()=>S("social"),children:"Social"}),e.jsx(t.Item,{onClick:()=>S("friends"),children:"Friends"}),e.jsx(t.Item,{onClick:()=>S("family"),children:"Family"})]})]}),e.jsxs(t,{children:[e.jsx(t.Toggle,{as:"button",className:"btn btn-ghost-secondary btn-icon btn-sm fs-16 arrow-none",children:e.jsx("i",{className:"ri-more-2-fill align-bottom"})}),e.jsx(t.Menu,{className:"dropdown-menu-end",children:e.jsx(t.Item,{onClick:()=>Q("read"),children:"Mark all as Read"})})]}),e.jsx(as,{variant:"warning",style:{display:"none"},className:"unreadConversations-alert px-4 fade",id:"unreadConversations",children:"No Unread Conversations"})]})}),e.jsx("div",{className:"col-auto order-2 order-sm-3",children:e.jsxs("div",{className:"d-flex gap-sm-1 email-topbar-link",children:[e.jsx("button",{type:"button",className:"btn btn-ghost-secondary btn-icon btn-sm fs-16",onClick:()=>Le(),children:e.jsx("i",{className:"ri-refresh-line align-bottom"})}),e.jsxs(t,{children:[e.jsx(t.Toggle,{as:"button",className:"btn btn-ghost-secondary btn-icon btn-sm fs-16 arrow-none",children:e.jsx("i",{className:"ri-more-2-fill align-bottom"})}),e.jsxs(t.Menu,{className:"dropdown-menu-end",children:[e.jsx(t.Item,{onClick:()=>Q("unread"),children:"Mark as Unread"}),e.jsx(t.Item,{children:"Mark as Important"}),e.jsx(t.Item,{children:"Add to Tasks"}),e.jsx(t.Item,{onClick:()=>D(""),children:"Add Star"}),e.jsx(t.Item,{children:"Mute"})]})]})]})})]}),e.jsxs(E,{className:"row align-items-end mt-3",children:[e.jsx(b,{children:e.jsx("div",{id:"mail-filter-navlist",children:e.jsxs(y,{className:"nav nav-tabs nav-tabs-custom nav-primary gap-1 text-center border-bottom-0",role:"tablist",children:[e.jsx(y.Item,{children:e.jsxs(y.Link,{className:C({active:L==="primary"},"fw-semibold text-primary"),onClick:()=>{m("all","primary","all")},children:[e.jsx("i",{className:"ri-inbox-fill align-bottom d-inline-block"}),e.jsx("span",{className:"ms-1 d-none d-sm-inline-block",children:"Primary"})]})}),e.jsx(y.Item,{children:e.jsxs(y.Link,{className:C({active:L==="social"},"fw-semibold text-primary"),onClick:()=>{m("all","social","all")},children:[e.jsx("i",{className:"ri-group-fill align-bottom d-inline-block"}),e.jsx("span",{className:"ms-1 d-none d-sm-inline-block",children:"Social"})]})}),e.jsx(y.Item,{children:e.jsxs(y.Link,{className:C({active:L==="promotions"},"fw-semibold text-primary"),onClick:()=>{m("all","promotions","all")},children:[e.jsx("i",{className:"ri-price-tag-3-fill align-bottom d-inline-block"}),e.jsx("span",{className:"ms-1 d-none d-sm-inline-block",children:"Promotions"})]})})]})})}),e.jsx("div",{className:"col-auto",children:e.jsx("div",{className:"text-muted mb-2",children:"1-50 of 154"})})]})]}),e.jsx("div",{className:"message-list-content mx-n4 px-4 message-list-scroll",children:ce||Be?e.jsx("div",{id:"elmLoader",children:e.jsx("div",{className:"spinner-border text-primary avatar-sm",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):e.jsx("ul",{className:"message-list",id:"mail-list",children:ae.length===0?e.jsx("li",{className:"text-center",children:"No Messages Available."}):ae.map((s,a)=>e.jsxs("li",{className:C({unread:s.unread}),id:s.forId,children:[e.jsxs("div",{className:"col-mail col-mail-1",children:[e.jsxs("div",{className:"form-check checkbox-wrapper-mail fs-14",children:[e.jsx(x.Check.Input,{onChange:l=>je(l.target.value,l.target.checked),className:"form-check-input",type:"checkbox",value:s.forId,id:s.forId}),e.jsx(x.Check.Label,{className:"form-check-label",htmlFor:s.forId})]}),e.jsx("button",{type:"button",className:s.category==="starred"?"btn avatar-xs p-0 favourite-btn fs-15 active":"btn avatar-xs p-0 favourite-btn fs-15",onClick:()=>D(s),children:e.jsx("i",{className:"ri-star-fill"})}),e.jsxs("a",{className:"text-start title",onClick:()=>q(s),children:[s.name," "," "," ",s.number," "]})]}),e.jsxs("div",{className:"col-mail col-mail-2",onClick:()=>q(s),children:[e.jsxs("a",{href:"#",className:"text-start subject",children:[" ",s.badge?e.jsx("span",{className:"badge me-2 bg-"+s.badgeClass,children:s.badge}):null," ",s.subject," - ",e.jsx("span",{className:"teaser",children:s.teaser})]}),e.jsx("div",{className:"date",children:s.date})]})]},a))})})]})}),e.jsx("div",{className:"email-detail-content",children:e.jsxs("div",{className:"p-4 d-flex flex-column h-100",children:[e.jsx("div",{className:"pb-4 border-bottom border-bottom-dashed",children:e.jsxs(E,{children:[e.jsx(b,{className:"col",children:e.jsx("div",{className:"",children:e.jsx("button",{type:"button",className:"btn btn-soft-danger btn-icon btn-sm fs-16 close-btn-email",onClick:()=>q(""),children:e.jsx("i",{className:"ri-close-fill align-bottom"})})})}),e.jsx(b,{className:"col-auto",children:e.jsxs("div",{className:"hstack gap-sm-1 align-items-center flex-wrap email-topbar-link",children:[e.jsx("button",{type:"button",className:p.category==="starred"?"btn btn-ghost-secondary btn-icon btn-sm fs-16 favourite-btn active":"btn btn-ghost-secondary btn-icon btn-sm fs-16 favourite-btn",onClick:()=>D(p),children:e.jsx("i",{className:"ri-star-fill"})}),e.jsx("button",{className:"btn btn-ghost-secondary btn-icon btn-sm fs-16",children:e.jsx("i",{className:"ri-printer-fill align-bottom"})}),e.jsx("button",{className:"btn btn-ghost-secondary btn-icon btn-sm fs-16",onClick:()=>{T(!0),U(!0)},children:e.jsx("i",{className:"ri-delete-bin-5-fill align-bottom"})}),e.jsxs(t,{children:[e.jsx(t.Toggle,{as:"button",className:"btn btn-ghost-secondary btn-icon btn-sm fs-16 arrow-none",children:e.jsx("i",{className:"ri-more-2-fill align-bottom"})}),e.jsxs(t.Menu,{className:"dropdown-menu-end",children:[e.jsx(t.Item,{children:"Mark as Unread"}),e.jsx(t.Item,{children:"Mark as Important"}),e.jsx(t.Item,{children:"Add to Tasks"}),e.jsx(t.Item,{children:"Add Star"}),e.jsx(t.Item,{children:"Mute"})]})]})]})})]})}),e.jsxs(le,{className:"mx-n4 px-4 email-detail-content-scroll",children:[e.jsx("div",{className:"mt-4 mb-3",children:e.jsx("h5",{className:"fw-bold email-subject-title",children:p.subject})}),e.jsxs(f,{defaultActiveKey:"3",flush:!0,children:[e.jsxs(f.Item,{className:"border-dashed left",eventKey:"1",children:[e.jsx(f.Header,{children:e.jsx("a",{role:"button",href:"/#",className:"btn w-100 text-start px-0 bg-transparent shadow-none collapsed ",id:"email-collapseOne",children:e.jsxs("div",{className:"d-flex align-items-center text-muted",children:[e.jsx("div",{className:"flex-shrink-0 avatar-xs me-3",children:e.jsx("img",{src:p.img,alt:"",className:"img-fluid rounded-circle"})}),e.jsxs("div",{className:"flex-grow-1 overflow-hidden",children:[e.jsx("h5",{className:"fs-14 text-truncate mb-0 email-user-name",children:p.name}),e.jsx("div",{className:"text-truncate fs-12",children:"to: me"})]}),e.jsx("div",{className:"flex-shrink-0 align-self-start",children:e.jsx("div",{className:"text-muted fs-12",children:"09 Jan 2022, 11:12 AM"})})]})})}),e.jsx(f.Body,{className:"text-body px-0",children:e.jsxs("div",{children:[e.jsx("p",{children:"Hi,"}),e.jsx("p",{children:"Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor."}),e.jsx("p",{children:"Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices."}),e.jsx("p",{children:"Sincerly,"}),e.jsxs("div",{className:"d-flex gap-3",children:[e.jsxs("div",{className:"border rounded avatar-xl h-auto",children:[e.jsx("img",{src:Ue,alt:"",className:"img-fluid rouned-top"}),e.jsx("div",{className:"py-2 text-center",children:e.jsx("a",{href:"/#",className:"d-block fw-semibold",children:"Download"})})]}),e.jsxs("div",{className:"border rounded avatar-xl h-auto",children:[e.jsx("img",{src:We,alt:"",className:"img-fluid rouned-top"}),e.jsx("div",{className:"py-2 text-center",children:e.jsx("a",{href:"/#",className:"d-block fw-semibold",children:"Download"})})]})]})]})})]}),e.jsxs(f.Item,{eventKey:"2",className:"border-dashed right",children:[e.jsx(f.Header,{children:e.jsx("a",{href:"/#",role:"button",className:"btn w-100 text-start px-0 bg-transparent shadow-none collapsed","data-bs-toggle":"collapse",id:"email-collapseTwo","aria-expanded":"true","aria-controls":"email-collapseTwo",children:e.jsxs("div",{className:"d-flex align-items-center text-muted",children:[e.jsx("div",{className:"flex-shrink-0 avatar-xs me-3",children:e.jsx("img",{src:Oe,alt:"",className:"img-fluid rounded-circle"})}),e.jsxs("div",{className:"flex-grow-1 overflow-hidden",children:[e.jsx("h5",{className:"fs-14 text-truncate email-user-name-right mb-0",children:"Anna Adame"}),e.jsx("div",{className:"text-truncate fs-12",children:"to: jackdavis@email.com"})]}),e.jsx("div",{className:"flex-shrink-0 align-self-start",children:e.jsx("div",{className:"text-muted fs-12",children:"09 Jan 2022, 02:15 PM"})})]})})}),e.jsx(f.Body,{className:"text-body px-0",children:e.jsxs("div",{children:[e.jsx("p",{children:"Hi,"}),e.jsx("p",{children:"If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual."}),e.jsx("p",{children:"Thank you"})]})})]}),e.jsxs(f.Item,{eventKey:"3",className:"border-dashed left",children:[e.jsx(f.Header,{children:e.jsx("a",{href:"/#",className:"btn w-100 text-start px-0 bg-transparent shadow-none","data-bs-toggle":"collapse",id:"email-collapseThree","aria-expanded":"true","aria-controls":"email-collapseThree",children:e.jsxs("div",{className:"d-flex align-items-center text-muted",children:[e.jsx("div",{className:"flex-shrink-0 avatar-xs me-3",children:e.jsx("img",{src:p.img,alt:"",className:"img-fluid rounded-circle"})}),e.jsxs("div",{className:"flex-grow-1 overflow-hidden",children:[e.jsx("h5",{className:"fs-14 text-truncate email-user-name mb-0",children:p.name}),e.jsx("div",{className:"text-truncate fs-12",children:"to: me"})]}),e.jsx("div",{className:"flex-shrink-0 align-self-start",children:e.jsx("div",{className:"text-muted fs-12",children:"10 Jan 2022, 10:08 AM"})})]})})}),e.jsx(f.Body,{className:"text-body px-0",children:e.jsxs("div",{children:[e.jsx("p",{children:"Hi,"}),e.jsx("p",{children:"Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar pronunciation."}),e.jsx("p",{children:"Thank you"})]})})]})]})]}),e.jsx("div",{className:"mt-auto",children:e.jsx("form",{className:"mt-2",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Reply :"}),e.jsx("textarea",{className:"form-control border-bottom-0 rounded-top rounded-0 border",id:"exampleFormControlTextarea1",rows:3,placeholder:"Enter message"}),e.jsx("div",{className:"bg-light px-2 py-1 rouned-bottom border",children:e.jsxs(E,{children:[e.jsxs(b,{children:[e.jsx(N,{placement:"top",overlay:e.jsx(v,{placement:"top",children:"Bold"}),rootClose:!0,children:e.jsx(n,{size:"sm",variant:"light",className:"py-0 fs-15",id:"Bold1",children:e.jsx("i",{className:"ri-bold align-bottom"})})}),e.jsx(N,{placement:"top",overlay:e.jsx(v,{placement:"top",children:"Italic"}),rootClose:!0,children:e.jsx(n,{size:"sm",variant:"light",className:"py-0 fs-15",id:"Italic1",children:e.jsx("i",{className:"ri-italic align-bottom"})})}),e.jsx(N,{placement:"top",overlay:e.jsx(v,{placement:"top",children:"Link"}),rootClose:!0,children:e.jsx(n,{size:"sm",variant:"light",className:"py-0 fs-15",id:"Link1",children:e.jsx("i",{className:"ri-link align-bottom"})})}),e.jsx(N,{placement:"top",overlay:e.jsx(v,{placement:"top",children:"Image"}),rootClose:!0,children:e.jsx(n,{size:"sm",variant:"light",className:"py-0 fs-15",id:"Image1",children:e.jsx("i",{className:"ri-image-2-line align-bottom"})})})]}),e.jsx(b,{className:"col-auto",children:e.jsxs(t,{children:[e.jsx(n,{variant:"success",className:"btn-sm",onClick:s=>s.preventDefault(),children:e.jsx("i",{className:"ri-send-plane-2-fill align-bottom"})}),e.jsx(t.Toggle,{as:"button",className:"btn btn-success btn-sm",split:!0,onClick:s=>s.preventDefault()}),e.jsx(t.Menu,{children:e.jsx("li",{children:e.jsxs(t.Item,{href:"#",children:[e.jsx("i",{className:"ri-timer-line text-muted me-1 align-bottom"})," ","Schedule Send"]})})})]})})]})})]})})})]})}),e.jsx("div",{className:"email-chat-detail",id:"emailchat-detailElem",style:{display:"block"},children:e.jsxs(P,{className:"mb-0 card-bg-fill",children:[e.jsxs(P.Header,{className:"align-items-center d-flex bg-primary text-white-50",children:[e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("h5",{className:"fs-13 text-white mb-1 profile-username",children:Y.name||"Scott Median"}),e.jsx("p",{className:"mb-0 fs-12 lh-1",children:"Active"})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"mt-n3 me-n3",children:e.jsx("button",{type:"button",className:"btn btn-link text-white fs-16 text-decoration-none",id:"emailchat-btn-close",onClick:()=>G("none","admin"),children:e.jsx("i",{className:"ri-close-fill"})})})})]}),e.jsxs(P.Body,{className:"p-0",children:[e.jsx("div",{id:"users-chat",children:e.jsx(Je,{className:"chat-conversation chatwidgets p-3",id:"chat-conversation",style:{height:"250px"},containerRef:s=>Ce(s),children:e.jsx("ul",{className:"list-unstyled chat-conversation-list chat-sm",id:"users-conversation",children:(I||[]).map((s,a)=>e.jsx("li",{className:s.isSender?"chat-list left":"chat-list right",children:e.jsxs("div",{className:"conversation-list",children:[s.img?e.jsx("div",{className:"chat-avatar",children:e.jsx("img",{src:Y.img||s.img,alt:""})}):null,e.jsxs("div",{className:"user-chat-content",children:[e.jsxs("div",{className:"ctext-wrap",children:[e.jsx("div",{className:"ctext-wrap-content",children:e.jsx("p",{className:"mb-0 ctext-content",children:s.message})}),e.jsxs(t,{className:"align-self-start message-box-drop",children:[e.jsx(t.Toggle,{as:"a",role:"button",className:"arrow-none",children:e.jsx("i",{className:"ri-more-2-fill"})}),e.jsxs(t.Menu,{children:[e.jsxs(t.Item,{children:[e.jsx("i",{className:"ri-reply-line me-2 text-muted align-bottom"}),"Reply"]}),e.jsxs(t.Item,{onClick:l=>Ie(l.target),children:[e.jsx("i",{className:"ri-file-copy-line me-2 text-muted align-bottom"}),"Copy"]}),e.jsxs(t.Item,{onClick:()=>Se(s),children:[e.jsx("i",{className:"ri-delete-bin-5-line me-2 text-muted align-bottom"}),"Delete"]})]})]})]}),e.jsxs("div",{className:"conversation-name",children:[e.jsx("small",{className:"text-muted time",children:s.time})," ",e.jsx("span",{className:"text-success check-message-icon",children:e.jsx("i",{className:"ri-check-double-line align-bottom"})})]})]})]})},a))})})}),e.jsx("div",{className:"border-top border-top-dashed",children:e.jsxs(E,{className:"g-2 mx-3 mt-2 mb-3",children:[e.jsx(b,{className:"col",children:e.jsx("div",{className:"position-relative",children:e.jsx(x.Control,{type:"text",className:"form-control border-light bg-light",placeholder:"Enter Message...",value:F,onKeyDown:we,onChange:s=>X(s.target.value)})})}),e.jsx(b,{className:"col-auto",children:e.jsx("button",{type:"submit",className:"btn btn-info",onClick:()=>ee(),children:e.jsx("i",{className:"mdi mdi-send"})})})]})})]})]})}),e.jsxs(z,{id:"composemodal",className:"modal-lg",show:$,onHide:fe,centered:!0,children:[e.jsx(z.Header,{className:"p-3 bg-light",closeButton:!0,children:e.jsx("h5",{className:"modal-title",children:"New Message"})}),e.jsx(z.Body,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3 position-relative",children:[e.jsx(x.Control,{type:"text",className:"form-control email-compose-input",defaultValue:"support@themesbrand.com"}),e.jsx("div",{className:"position-absolute top-0 end-0",children:e.jsxs("div",{className:"d-flex",children:[e.jsx("button",{className:"btn btn-link text-reset fw-semibold px-2",type:"button",children:"Cc"}),e.jsx("button",{className:"btn btn-link text-reset fw-semibold px-2",type:"button",children:"Bcc"})]})})]}),e.jsx("div",{className:"collapse",id:"CcRecipientsCollapse",children:e.jsxs("div",{className:"mb-3",children:[e.jsx(x.Label,{children:"Cc:"}),e.jsx(x.Control,{type:"text",className:"form-control",placeholder:"Cc recipients"})]})}),e.jsx("div",{className:"collapse",id:"BccRecipientsCollapse",children:e.jsxs("div",{className:"mb-3",children:[e.jsx(x.Label,{children:"Bcc:"}),e.jsx(x.Control,{type:"text",className:"form-control",placeholder:"Bcc recipients"})]})}),e.jsx("div",{className:"mb-3",children:e.jsx(x.Control,{type:"text",className:"form-control",placeholder:"Subject"})}),e.jsx("div",{className:"ck-editor-reverse",children:e.jsx(Re.CKEditor,{editor:Pe,onReady:s=>{},onChange:(s,a)=>{a.getData()}})})]})}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-ghost-danger",onClick:()=>{w(!1)},children:"Discard"}),e.jsxs(t,{className:"btn-group",children:[e.jsx("button",{type:"button",className:"btn btn-success",onClick:()=>{w(!1)},children:"Send"}),e.jsx(t.Toggle,{as:"button",type:"button",className:"btn btn-success arrow-none",split:!0,children:e.jsx("span",{className:"visually-hidden",children:"Toggle Dropdown"})}),e.jsx(t.Menu,{className:"dropdown-menu-end",children:e.jsx("li",{children:e.jsxs(t.Item,{children:[e.jsx("i",{className:"ri-timer-line text-muted me-1 align-bottom"})," ","Schedule Send"]})})})]})]})]})]})};export{Ea as default};