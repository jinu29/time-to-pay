import{r as i,j as e,R as v,Y as R,a as h}from"./app-CcmPIReT.js";import{L as B}from"./index-DyNFT7ts.js";import{S as s}from"./sweetalert2.all-CVZi6o1K.js";import{C as F}from"./Container-CbzZz-pG.js";import{R as L}from"./Row-BpZuzSWn.js";import{C as k}from"./Col-BT99caCr.js";import{C as f}from"./Card-yrIYSTOn.js";import{T as P}from"./Table-C4aUjA5f.js";import{M as a}from"./Modal-DnQM4R4H.js";import{F as o}from"./Form-D5C7AGxv.js";import{B as y}from"./Button-CjmBuVFy.js";import"./index-E0pRXvh2.js";import"./logo-sm-DmJR8Lua.js";import"./logo-dark-Dh4DV6bR.js";import"./logo-light-l2wwNDet.js";import"./ReactToastify-hOsVGs7O.js";import"./calender-6pYCF-Qi.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./index-B9sCdwnn.js";import"./isObject-U9U2HXiq.js";import"./avatar-2-B-1-S_lh.js";import"./avatar-3-CSm6kh8B.js";import"./avatar-5-D7m8bZ3v.js";import"./avatar-1-PHP4S1R6.js";import"./Dropdown-CZ6gxq-L.js";import"./ThemeProvider-CSTTv7nq.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-DsKskV_g.js";import"./usePrevious-DNpMYT0V.js";import"./useForceUpdate-szFTueT1.js";import"./useEventCallback-BJse7mIf.js";import"./useCallbackRef-DOaTl7z1.js";import"./mergeOptionsWithPopperConfig-CF0vfbBt.js";import"./useMounted-Bja3_6ae.js";import"./useWindow-CvUQe0g5.js";import"./NavContext-DwPeOdq-.js";import"./Button-CAE2U-yP.js";import"./DataKey-DjdvojM5.js";import"./hook-D61oMDbP.js";import"./extends-BFqQA52f.js";import"./useMergedRefs-C3j-VvFq.js";import"./Anchor-x2SFhHNR.js";import"./InputGroupContext-BY31koS2.js";import"./NavbarContext-CDqv-Zet.js";import"./Collapse-BnX8fGdo.js";import"./TransitionWrapper-RT2fFqbB.js";import"./setPrototypeOf-DgZC2w_0.js";import"./CardHeaderContext-C52wv7vf.js";import"./divWithClassName-CM1F4fkU.js";import"./useWillUnmount-K4WbxWkU.js";import"./AbstractModalHeader-CyAL14sU.js";import"./hasClass-B_-N1DDL.js";import"./NoopTransition-NIwa5DHe.js";import"./CloseButton-Bq4WJIiA.js";import"./Fade-BDvw6Q76.js";import"./ElementChildren-BwLiqz1a.js";const D=({users:n})=>{const[d,p]=i.useState(n||[]),[x,C]=i.useState(null),[g,l]=i.useState(!1),[E,T]=i.useState(null),[m,j]=i.useState({name:"",email:""});i.useEffect(()=>{n||fetch("/user_management/user").then(t=>{const r=t.headers.get("content-type");if(!r||!r.includes("application/json"))throw new TypeError("Expected JSON response but received HTML");return t.json()}).then(t=>{p(t)}).catch(t=>{C(t.message)})},[n]);const N=t=>{s.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!"}).then(r=>{r.isConfirmed&&fetch(`/user_management/user/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")}}).then(c=>{c.ok?(p(d.filter(S=>S.id!==t)),s.fire("Deleted!","The user has been deleted.","success")):s.fire("Error!","There was an error deleting the user.","error")}).catch(c=>{s.fire("Error!","There was an error deleting the user.","error")})})},b=t=>{T(t),j({name:t.name,email:t.email}),l(!0)},u=t=>{const{name:r,value:c}=t.target;j({...m,[r]:c})},w=()=>{fetch(`/user_management/user/${E.id}`,{method:"PUT",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify(m)}).then(t=>t.json()).then(t=>{p(d.map(r=>r.id===t.id?t:r)),l(!1),s.fire("Updated!","The user has been updated.","success")}).catch(t=>{s.fire("Error!","There was an error updating the user.","error")})};return e.jsxs(v.Fragment,{children:[e.jsx(R,{title:"Payment Report | Time To Pay"}),e.jsx("div",{className:"page-content",children:e.jsxs(F,{fluid:!0,children:[e.jsx("h3",{children:"Payment Report"}),e.jsx(L,{children:e.jsx(k,{xl:12,children:e.jsx(f,{children:e.jsx(f.Body,{children:e.jsxs("div",{className:"live-preview",children:[x&&e.jsxs("p",{className:"text-danger",children:["Error: ",x]}),e.jsx("div",{className:"table-responsive",children:e.jsxs(P,{className:"align-middle table-nowrap mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"ID"}),e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Email"}),e.jsx("th",{scope:"col",children:"Payment Mode"}),e.jsx("th",{scope:"col",children:"Payment Status"}),e.jsx("th",{scope:"col",children:"Verfied"}),e.jsx("th",{scope:"col",children:"Action"})]})}),e.jsx("tbody",{children:d.map(t=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:e.jsx(h,{href:"#",className:"fw-medium",children:t.id})}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.email}),e.jsx("td",{children:"Online"}),e.jsx("td",{class:"text-danger",children:"Not Paid"}),e.jsx("td",{class:"text-warning",children:"Failed"}),e.jsxs("td",{children:[e.jsx(h,{href:"#",className:"me-2",onClick:()=>b(t),children:e.jsx("i",{className:"ri-pencil-line"})}),e.jsx(h,{href:"#",onClick:()=>N(t.id),children:e.jsx("i",{className:"ri-delete-bin-line"})})]})]},t.id))})]})})]})})})})})]})}),e.jsxs(a,{show:g,onHide:()=>l(!1),children:[e.jsx(a.Header,{closeButton:!0,children:e.jsx(a.Title,{children:"Edit User"})}),e.jsx(a.Body,{children:e.jsxs(o,{children:[e.jsxs(o.Group,{className:"mb-3",children:[e.jsx(o.Label,{children:"Name"}),e.jsx(o.Control,{type:"text",name:"name",value:m.name,onChange:u})]}),e.jsxs(o.Group,{className:"mb-3",children:[e.jsx(o.Label,{children:"Email"}),e.jsx(o.Control,{type:"email",name:"email",value:m.email,onChange:u})]})]})}),e.jsxs(a.Footer,{children:[e.jsx(y,{variant:"secondary",onClick:()=>l(!1),children:"Close"}),e.jsx(y,{variant:"primary",onClick:w,children:"Save Changes"})]})]})]})};D.layout=n=>e.jsx(B,{children:n});export{D as default};