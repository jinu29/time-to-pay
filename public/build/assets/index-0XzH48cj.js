import{r as n,j as e,R as N,Y as y,a as l}from"./app-CcmPIReT.js";import{B as z}from"./BreadCrumb-CVy8OvG9.js";import{F as S}from"./index-CumyjNMn.js";import{S as B}from"./react-select.esm-DHf-srvq.js";import{d as C,C as F}from"./ckeditor-DrTwDs-q.js";import{D as M}from"./index-BKw2_WiJ.js";import{a as L}from"./avatar-3-CSm6kh8B.js";import{a as w}from"./avatar-4-BkrIkC6X.js";import{L as D}from"./index-DyNFT7ts.js";import{C as P}from"./Container-CbzZz-pG.js";import{R as c}from"./Row-BpZuzSWn.js";import{C as i}from"./Col-BT99caCr.js";import{C as a}from"./Card-yrIYSTOn.js";import{F as t}from"./Form-D5C7AGxv.js";import"./index-E0pRXvh2.js";import"./toConsumableArray-D6TJiZ36.js";import"./setPrototypeOf-DgZC2w_0.js";import"./useMergedRefs-C3j-VvFq.js";import"./extends-BFqQA52f.js";import"./hoist-non-react-statics.cjs-DZsWGJ4k.js";import"./index-B9sCdwnn.js";import"./isObject-U9U2HXiq.js";import"./_baseClone-Dlzh4ArA.js";import"./logo-sm-DmJR8Lua.js";import"./logo-dark-Dh4DV6bR.js";import"./logo-light-l2wwNDet.js";import"./ReactToastify-hOsVGs7O.js";import"./calender-6pYCF-Qi.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./avatar-2-B-1-S_lh.js";import"./avatar-5-D7m8bZ3v.js";import"./avatar-1-PHP4S1R6.js";import"./Dropdown-CZ6gxq-L.js";import"./ThemeProvider-CSTTv7nq.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-DsKskV_g.js";import"./usePrevious-DNpMYT0V.js";import"./useForceUpdate-szFTueT1.js";import"./useEventCallback-BJse7mIf.js";import"./useCallbackRef-DOaTl7z1.js";import"./mergeOptionsWithPopperConfig-CF0vfbBt.js";import"./useMounted-Bja3_6ae.js";import"./useWindow-CvUQe0g5.js";import"./NavContext-DwPeOdq-.js";import"./Button-CAE2U-yP.js";import"./DataKey-DjdvojM5.js";import"./hook-D61oMDbP.js";import"./Anchor-x2SFhHNR.js";import"./InputGroupContext-BY31koS2.js";import"./NavbarContext-CDqv-Zet.js";import"./Button-CjmBuVFy.js";import"./Collapse-BnX8fGdo.js";import"./TransitionWrapper-RT2fFqbB.js";import"./CardHeaderContext-C52wv7vf.js";import"./divWithClassName-CM1F4fkU.js";import"./ElementChildren-BwLiqz1a.js";const E=()=>{const o=[{value:"Watches",label:"Watches"},{value:"Headset",label:"Headset"},{value:"Sweatshirt",label:"Sweatshirt"},{value:"20% off",label:"20% off"},{value:"4 star",label:"4 star"}],[h,p]=n.useState(null),x=s=>{p(s)},[j,u]=n.useState([]),b=s=>{s.map(r=>Object.assign(r,{preview:URL.createObjectURL(r),formattedSize:g(r.size)})),u(s)},g=(s,r=2)=>{if(s===0)return"0 Bytes";const d=1024,v=r<0?0:r,f=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],m=Math.floor(Math.log(s)/Math.log(d));return parseFloat((s/Math.pow(d,m)).toFixed(v))+" "+f[m]};return e.jsxs(N.Fragment,{children:[e.jsx(y,{title:"Create Project | Velzon - React Admin & Dashboard Template"}),e.jsx("div",{className:"page-content",children:e.jsxs(P,{fluid:!0,children:[e.jsx(z,{title:"Create Project",pageTitle:"Projects"}),e.jsxs(c,{children:[e.jsxs(i,{lg:8,children:[e.jsx(a,{children:e.jsxs(a.Body,{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(t.Label,{className:"form-label",htmlFor:"project-title-input",children:"Project Title"}),e.jsx(t.Control,{type:"text",className:"form-control",id:"project-title-input",placeholder:"Enter project title"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(t.Label,{className:"form-label",htmlFor:"project-thumbnail-img",children:"Thumbnail Image"}),e.jsx(t.Control,{className:"form-control",id:"project-thumbnail-img",type:"file",accept:"image/png, image/gif, image/jpeg"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(t.Label,{className:"form-label",children:"Project Description"}),e.jsx(C.CKEditor,{editor:F,data:"<p>Hello from CKEditor 5!</p>",onReady:s=>{}})]}),e.jsxs(c,{children:[e.jsx(i,{lg:4,children:e.jsxs("div",{className:"mb-3 mb-lg-0",children:[e.jsx(t.Label,{htmlFor:"choices-priority-input",className:"form-label",children:"Priority"}),e.jsxs("select",{className:"form-select","data-choices":!0,"data-choices-search-false":!0,id:"choices-priority-input",children:[e.jsx("option",{defaultValue:"High",children:"High"}),e.jsx("option",{value:"Medium",children:"Medium"}),e.jsx("option",{value:"Low",children:"Low"})]})]})}),e.jsx(i,{lg:4,children:e.jsxs("div",{className:"mb-3 mb-lg-0",children:[e.jsx(t.Label,{htmlFor:"choices-status-input",className:"form-label",children:"Status"}),e.jsxs("select",{className:"form-select","data-choices":!0,"data-choices-search-false":!0,id:"choices-status-input",children:[e.jsx("option",{defaultValue:"Inprogress",children:"Inprogress"}),e.jsx("option",{value:"Completed",children:"Completed"})]})]})}),e.jsx(i,{lg:4,children:e.jsxs("div",{children:[e.jsx(t.Label,{htmlFor:"datepicker-deadline-input",className:"form-label",children:"Deadline"}),e.jsx(S,{className:"form-control",options:{dateFormat:"d M, Y"},placeholder:"Enter due date"})]})})]})]})}),e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx("h5",{className:"card-title mb-0",children:"Attached files"})}),e.jsx(a.Body,{children:e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",children:"Add Attached files here."}),e.jsx(M,{onDrop:s=>{b(s)},children:({getRootProps:s,getInputProps:r})=>e.jsx("div",{className:"dropzone dz-clickable",children:e.jsxs("div",{className:"dz-message needsclick",...s(),children:[e.jsx("div",{className:"mb-3",children:e.jsx("i",{className:"display-4 text-muted ri-upload-cloud-2-fill"})}),e.jsx("h4",{children:"Drop files here or click to upload."})]})})}),e.jsx("ul",{className:"list-unstyled mb-0",id:"dropzone-preview",children:j.map((s,r)=>e.jsx(a,{className:"mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete",children:e.jsx("div",{className:"p-2",children:e.jsxs(c,{className:"align-items-center",children:[e.jsx(i,{className:"col-auto",children:e.jsx("img",{"data-dz-thumbnail":"",height:"80",className:"avatar-sm rounded bg-light",alt:s.name,src:s.preview})}),e.jsxs(i,{children:[e.jsx(l,{href:"#",className:"text-muted font-weight-bold",children:s.name}),e.jsx("p",{className:"mb-0",children:e.jsx("strong",{children:s.formattedSize})})]})]})})},r+"-file"))})]})})]}),e.jsxs("div",{className:"text-end mb-4",children:[e.jsx("button",{type:"submit",className:"btn btn-danger w-sm me-1",children:"Delete"}),e.jsx("button",{type:"submit",className:"btn btn-secondary w-sm me-1",children:"Draft"}),e.jsx("button",{type:"submit",className:"btn btn-primary w-sm",children:"Create"})]})]}),e.jsxs(i,{lg:4,children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsx("h5",{className:"card-title mb-0",children:"Privacy"})}),e.jsx(a.Body,{children:e.jsxs("div",{children:[e.jsx(t.Label,{htmlFor:"choices-privacy-status-input",className:"form-label",children:"Status"}),e.jsxs("select",{className:"form-select","data-choices":!0,"data-choices-search-false":!0,id:"choices-privacy-status-input",children:[e.jsx("option",{defaultValue:"Private",children:"Private"}),e.jsx("option",{value:"Team",children:"Team"}),e.jsx("option",{value:"Public",children:"Public"})]})]})})]}),e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx("h5",{className:"card-title mb-0",children:"Tags"})}),e.jsxs(a.Body,{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(t.Label,{htmlFor:"choices-categories-input",className:"form-label",children:"Categories"}),e.jsxs("select",{className:"form-select","data-choices":!0,"data-choices-search-false":!0,id:"choices-categories-input",children:[e.jsx("option",{defaultValue:"Designing",children:"Designing"}),e.jsx("option",{value:"Development",children:"Development"})]})]}),e.jsxs("div",{children:[e.jsx(t.Label,{htmlFor:"choices-text-input",className:"form-label",children:"Skills"}),e.jsx(B,{value:h,isMulti:!0,onChange:s=>{x(s)},options:o})]})]})]}),e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx("h5",{className:"card-title mb-0",children:"Members"})}),e.jsxs(a.Body,{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(t.Label,{htmlFor:"choices-lead-input",className:"form-label",children:"Team Lead"}),e.jsxs("select",{className:"form-select","data-choices":!0,"data-choices-search-false":!0,id:"choices-lead-input",children:[e.jsx("option",{defaultValue:"Brent Gonzalez",children:"Brent Gonzalez"}),e.jsx("option",{value:"Darline Williams",children:"Darline Williams"}),e.jsx("option",{value:"Sylvia Wright",children:"Sylvia Wright"}),e.jsx("option",{value:"Ellen Smith",children:"Ellen Smith"}),e.jsx("option",{value:"Jeffrey Salazar",children:"Jeffrey Salazar"}),e.jsx("option",{value:"Mark Williams",children:"Mark Williams"})]})]}),e.jsxs("div",{children:[e.jsx(t.Label,{className:"form-label",children:"Team Members"}),e.jsxs("div",{className:"avatar-group",children:[e.jsx(l,{href:"#",className:"avatar-group-item","data-bs-toggle":"tooltip","data-bs-trigger":"hover","data-bs-placement":"top",title:"Brent Gonzalez",children:e.jsx("div",{className:"avatar-xs",children:e.jsx("img",{src:L,alt:"",className:"rounded-circle img-fluid"})})}),e.jsx(l,{href:"#",className:"avatar-group-item","data-bs-toggle":"tooltip","data-bs-trigger":"hover","data-bs-placement":"top",title:"Sylvia Wright",children:e.jsx("div",{className:"avatar-xs",children:e.jsx("div",{className:"avatar-title rounded-circle bg-primary",children:"S"})})}),e.jsx(l,{href:"#",className:"avatar-group-item","data-bs-toggle":"tooltip","data-bs-trigger":"hover","data-bs-placement":"top",title:"Ellen Smith",children:e.jsx("div",{className:"avatar-xs",children:e.jsx("img",{src:w,alt:"",className:"rounded-circle img-fluid"})})}),e.jsx(l,{href:"#",className:"avatar-group-item","data-bs-toggle":"tooltip","data-bs-trigger":"hover","data-bs-placement":"top",title:"Add Members",children:e.jsx("div",{className:"avatar-xs","data-bs-toggle":"modal","data-bs-target":"#inviteMembersModal",children:e.jsx("div",{className:"avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary",children:"+"})})})]})]})]})]})]})]})]})})]})};E.layout=o=>e.jsx(D,{children:o});export{E as default};