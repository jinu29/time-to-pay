import{u as V,c as q,a as O,r as l,j as e,R as $,Y as z}from"./app-DAEZisrD.js";import{B as H}from"./BreadCrumb-BejEMmky.js";import{P as J}from"./Pagination-DypRTWkA.js";import{Q}from"./ReactToastify-Dfu59Ofk.js";import{u as U}from"./user-dummy-img-Dka7rpSK.js";import{u as K,c as W,a as p,f as S}from"./index.esm-ntvNJeyT.js";import{L as X}from"./index-B72ceFEm.js";import"./calender-yWVPQvD3.js";import{b as L}from"./appsJobs-BeTZ9ums.js";import{d as Z,e as _}from"./thunk-5Qo4cMmU.js";import{C as ee}from"./Container-DTkvhr_k.js";import{R as I}from"./Row-DP2h-Y3A.js";import{C as b}from"./Col-B8aG_WSb.js";import{F as s}from"./Form-CUYJsc4D.js";import{C as ae,a as te}from"./Card-BqoKCbez.js";import{M as N}from"./Modal-B3Mr3uMa.js";import"./Button-BSuMOxsW.js";import"./ThemeProvider-DpO2Fe9x.js";import"./Button-a_Mq9XKy.js";import"./_baseClone-1g4bW0SP.js";import"./isObject-D7bzW4Uf.js";import"./hoist-non-react-statics.cjs-8wH15O0f.js";import"./index-7MB6meGS.js";import"./logo-sm-DmJR8Lua.js";import"./logo-dark-Dh4DV6bR.js";import"./logo-light-l2wwNDet.js";import"./index-DKL1jx0G.js";import"./avatar-2-B-1-S_lh.js";import"./avatar-3-CSm6kh8B.js";import"./avatar-5-D7m8bZ3v.js";import"./avatar-1-PHP4S1R6.js";import"./Dropdown-tOcdJjvK.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-E5dZEr-W.js";import"./usePrevious-CP___m-f.js";import"./useForceUpdate-BGliwYZ3.js";import"./useEventCallback-Dcr8lMky.js";import"./useCallbackRef-B6c-Je3E.js";import"./mergeOptionsWithPopperConfig-Cih7uyRc.js";import"./useMounted-BJIR85-y.js";import"./useWindow-C_R7bMWe.js";import"./NavContext-DMVl8V9Z.js";import"./DataKey-DjdvojM5.js";import"./hook-BF0Uv_rT.js";import"./extends-CF3RwP-h.js";import"./useMergedRefs-DWL3_gRO.js";import"./Anchor-DRcRLFUD.js";import"./InputGroupContext-Dyo0o_3A.js";import"./NavbarContext-BLsiMOqp.js";import"./Collapse-D87sd4B3.js";import"./TransitionWrapper-C_dyntM9.js";import"./setPrototypeOf-DgZC2w_0.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./img-4-BjZu39fc.js";import"./img-7-CJgpB7jU.js";import"./img-8-CymXe_lN.js";import"./img-5-DJyXW5hw.js";import"./img-2-vFB13_q9.js";import"./img-3-BL14nKmC.js";import"./img-4-CtrsL6tB.js";import"./img-6-_pG5cMGi.js";import"./img-7-BS2xckWT.js";import"./img-8-RHtA4ZFb.js";import"./img-9-DWBFTEwm.js";import"./avatar-4-BkrIkC6X.js";import"./avatar-6-DJX3lkeY.js";import"./avatar-7-ChzoTmzs.js";import"./avatar-8-BaCFiEfo.js";import"./avatar-9-iQiecx18.js";import"./avatar-10-BcqtGVJW.js";import"./slack-CK7S0DPT.js";import"./dropbox-kAuTPoR1.js";import"./bitbucket-C11sTxQc.js";import"./ElementChildren-C5X_W_ol.js";import"./CardHeaderContext-BqF8ZhAg.js";import"./divWithClassName-DBqZ_0ZL.js";import"./useWillUnmount-DpS6NFwO.js";import"./AbstractModalHeader-Cppe7zbO.js";import"./hasClass-ChvUM52G.js";import"./NoopTransition-BVps1reF.js";import"./CloseButton-CCRA29A_.js";import"./Fade-BnOsT5Gr.js";const se=()=>{const o=V(),B=q(t=>t.Jobs,t=>({candidategrid:t.candidategrid})),{candidategrid:n}=O(B);l.useEffect(()=>{o(Z())},[o]);const[h,u]=l.useState(!1),g=l.useCallback(()=>{u(!h),w(null)},[h]),E=()=>u(!0),[r,w]=l.useState();l.useEffect(()=>{d(n)},[o,n]);const[D,d]=l.useState(),[v,P]=l.useState(1),x=20,j=v*x,C=j-x,y=l.useMemo(()=>{var t;return(t=L)==null?void 0:t.slice(C,j)},[C,j]);l.useEffect(()=>{d(y)},[y]);const[R,f]=l.useState(),[T,F]=l.useState(),a=K({enableReinitialize:!0,initialValues:{id:r&&r.id||"",candidateName:r&&r.candidateName||"",designation:r&&r.designation||"",location:r&&r.location||"",rating1:r&&r.rating1||"",rating2:r&&r.rating2||"",userImg:r&&r.userImg||""},validationSchema:W({userImg:p().required("Please Enter Image"),candidateName:p().required("Please Enter Your CandidateName"),designation:p().required("Please Enter Your Designation"),location:p().required("Please Enter Location"),rating1:S().required("Please Enter Stars"),rating2:S().required("Please Enter Rating")}),onSubmit:t=>{const i={id:Math.floor(Math.random()*10)+20,candidateName:t.candidateName,designation:t.designation,location:t.location,rating1:t.rating1,rating2:t.rating2,userImg:t.userImg};o(_(i)),a.resetForm(),t===null?E():(g(),f(""),F(""))}}),Y=t=>{const i=[...R,t];f(i),a.setFieldValue("assignedto",i)};l.useEffect(()=>{f(r&&r.assignedto||[])},[r]);const A=t=>{const i=t.target.files[0],c=new FileReader;c.onload=m=>{a.setFieldValue("userImg",m.target.result),F(m.target.result)},c.readAsDataURL(i)},G=t=>{let i=t.value;i==="All Tasks"?d([...n]):M({data:n,item:i,setState:d})},M=({data:t,item:i,setState:c})=>{c(t.filter(m=>Object.values(m).some(k=>typeof k=="string"&&k.toLowerCase().includes(i==null?void 0:i.toLowerCase()))))};return e.jsxs($.Fragment,{children:[e.jsx(z,{title:"Candidates Grid View | Velzon -  Admin & Dashboard Template"}),e.jsx("div",{className:"page-content",children:e.jsxs(ee,{fluid:!0,className:"container-fluid",children:[e.jsx(H,{title:"Grid View",pageTitle:"Candidates Grid"}),e.jsxs(I,{className:"g-4 mb-4",children:[e.jsx(b,{className:"col-sm-auto",children:e.jsx("div",{children:e.jsxs("a",{className:"btn btn-primary",onClick:g,children:[e.jsx("i",{className:"ri-add-line align-bottom me-1"})," Add Candidate"]})})}),e.jsx(b,{className:"col-sm",children:e.jsxs("div",{className:"d-md-flex justify-content-sm-end gap-2",children:[e.jsxs("div",{className:"search-box ms-md-2 flex-shrink-0 mb-3 mb-md-0",children:[e.jsx(s.Control,{type:"text",className:"form-control",id:"searchJob",placeholder:"Search for candidate name or designation...",autoComplete:"off",onChange:t=>G(t.target)}),e.jsx("i",{className:"ri-search-line search-icon"})]}),e.jsxs("select",{className:"form-control w-md","data-choices":!0,"data-choices-search-false":!0,children:[e.jsx("option",{value:"All",children:"All"}),e.jsx("option",{value:"Today",children:"Today"}),e.jsx("option",{value:"Yesterday",defaultValue:"",children:"Yesterday"}),e.jsx("option",{value:"Last 7 Days",children:"Last 7 Days"}),e.jsx("option",{value:"Last 30 Days",children:"Last 30 Days"}),e.jsx("option",{value:"This Month",children:"This Month"}),e.jsx("option",{value:"Last Year",children:"Last Year"})]})]})})]}),e.jsx(I,{className:"gy-2 mb-2",id:"candidate-list",children:(D||[]).map((t,i)=>e.jsx(b,{className:"col-xxl-3 col-md-6",children:e.jsx(ae,{children:e.jsx(te,{children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"flex-shrink-0",children:t.nickname?e.jsx("div",{className:"avatar-title border bg-light text-primary rounded text-uppercase fs-24 p-4",children:t.nickname}):e.jsx("div",{className:"avatar-lg rounded",children:e.jsx("img",{src:t.userImg,alt:"",className:"member-img img-fluid d-block rounded"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("a",{href:"/pages-profile",children:e.jsx("h5",{className:"fs-16 mb-1",children:t.candidateName})}),e.jsx("p",{className:"text-muted mb-2",children:t.designation}),e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsxs("div",{className:"badge text-bg-success",children:[e.jsx("i",{className:"mdi mdi-star me-1"}),t.rating1]}),e.jsxs("div",{className:"text-muted",children:[t.rating2,"k Ratings"]})]}),e.jsxs("div",{className:"d-flex gap-4 mt-2 text-muted",children:[e.jsxs("div",{children:[e.jsx("i",{className:"ri-map-pin-2-line text-primary me-1 align-bottom"})," ",t.location]}),e.jsxs("div",{children:[e.jsx("i",{className:"ri-time-line text-primary me-1 align-bottom"}),t.type==="Part Time"?e.jsx("span",{className:"badge bg-danger-subtle text-danger",children:t.type}):t.type==="Full Time"?e.jsx("span",{className:"badge bg-success-subtle text-success",children:t.type}):e.jsx("span",{className:"badge bg-secondary-subtle text-secondary",children:t.type})]})]})]})]})})})},i))}),e.jsx(J,{className:"g-0 justify-content-end mb-4",perPageData:x,data:L,currentPage:v,setCurrentPage:P}),e.jsxs(N,{id:"showModal",show:h,onHide:g,centered:!0,children:[e.jsx(N.Header,{className:"bg-light p-3",closeButton:!0,children:e.jsx("h5",{className:"modal-title",children:"Add Candidate"})}),e.jsxs(s,{className:"tablelist-form",onSubmit:t=>(t.preventDefault(),a.handleSubmit(),!1),children:[e.jsxs(N.Body,{children:[e.jsx(s.Control,{type:"hidden",id:"id-field"}),e.jsxs("div",{className:"text-center mb-3",children:[e.jsxs("div",{className:"position-relative d-inline-block",children:[e.jsxs("div",{className:"position-absolute bottom-0 end-0",children:[e.jsx(s.Label,{htmlFor:"customer-image-input",className:"mb-0","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"Select Image",children:e.jsx("div",{className:"avatar-xs cursor-pointer",children:e.jsx("div",{className:"avatar-title bg-light border rounded-circle text-muted",children:e.jsx("i",{className:"ri-image-fill"})})})}),e.jsx(s.Control,{name:"userImg",className:"form-control d-none",value:"",id:"customer-image-input",type:"file",accept:"image/png, image/gif, image/jpeg",onChange:A})]}),e.jsx("div",{className:"avatar-lg p-1",onClick:t=>Y(t),children:e.jsx("div",{className:"avatar-title bg-light rounded-circle",children:e.jsx("img",{src:T||U,alt:"",id:"customer-img",className:"avatar-md rounded-circle object-cover"})})})]}),a.errors.userImg&&a.touched.userImg?e.jsxs(s.Control.Feedback,{type:"invalid",className:"d-block",children:[" ",a.errors.userImg," "]}):null]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(s.Label,{htmlFor:"id-field",className:"form-label",children:"Name"}),e.jsx(s.Control,{name:"candidateName",id:"id-field",className:"form-control",placeholder:"Enter Your CandidateName",type:"text",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.candidateName||""}),a.touched.candidateName&&a.errors.candidateName?e.jsx(s.Control.Feedback,{type:"invalid",children:a.errors.candidateName}):null]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(s.Label,{htmlFor:"id-field",className:"form-label",children:"Designation"}),e.jsx(s.Control,{name:"designation",id:"id-field",className:"form-control",placeholder:"Enter Your Designation",type:"text",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.designation||""}),a.touched.designation&&a.errors.designation?e.jsx(s.Control.Feedback,{type:"invalid",children:a.errors.designation}):null]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(s.Label,{htmlFor:"task-type",children:"Time"}),e.jsxs("select",{className:"form-control",id:"task-status-input",name:"type",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.type||"",children:[e.jsx("option",{value:"all",children:"Part Time"}),e.jsx("option",{defaultValue:"New",children:"Full Time"}),e.jsx("option",{value:"Inprogress",children:"Freelancer"})]}),a.errors.type&&a.touched.type?e.jsx(s.Control.Feedback,{type:"invalid",children:a.errors.type}):null]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(s.Label,{htmlFor:"id-field",className:"form-label",children:"Location"}),e.jsx(s.Control,{name:"location",id:"id-field",className:"form-control",placeholder:"Enter Your Location",type:"text",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.location||""}),a.touched.location&&a.errors.location?e.jsx(s.Control.Feedback,{type:"invalid",children:a.errors.location}):null]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(s.Label,{htmlFor:"id-field",className:"form-label",children:"Stars"}),e.jsx(s.Control,{name:"rating1",id:"id-field",className:"form-control",placeholder:"Enter Your Stars",type:"text",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.rating1||""}),a.touched.rating1&&a.errors.rating1?e.jsx(s.Control.Feedback,{type:"invalid",children:a.errors.rating1}):null]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(s.Label,{htmlFor:"id-field",className:"form-label",children:"Ratings"}),e.jsx(s.Control,{name:"rating2",id:"id-field",className:"form-control",placeholder:"Enter Your Rating",type:"text",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.rating2||""}),a.touched.rating2&&a.errors.rating2?e.jsx(s.Control.Feedback,{type:"invalid",children:a.errors.rating2}):null]})]}),e.jsx("div",{className:"modal-footer",children:e.jsxs("div",{className:"hstack gap-2 justify-content-end",children:[e.jsx("button",{type:"button",className:"btn btn-light",onClick:()=>{u(!1)},children:"Close"}),e.jsx("button",{type:"submit",className:"btn btn-success",children:" Add Candidate"})]})})]})]}),e.jsx(Q,{closeButton:!1,limit:1})]})})]})};se.layout=o=>e.jsx(X,{children:o});export{se as default};