import{u as $,c as O,a as W,r as a,j as e,R as E,Y as X}from"./app-D3qFl5QJ.js";import{F as Z}from"./index-C4YkAIOd.js";import{l as _}from"./lodash-CnkcC27_.js";import{h as S}from"./moment-C5S46NFB.js";import{u as ee,c as te,a as u}from"./index.esm-qsumIu-d.js";import{B as se}from"./BreadCrumb-DKmAk2Ix.js";import{D as F}from"./DeleteModal-B1ewgcTT.js";import{T as le}from"./TableContainer-Cpzu2g2G.js";import{Q as oe,B as ae}from"./ReactToastify-C9Du-IRn.js";import{L as re}from"./Loader-pecC5o0D.js";import{E as ie}from"./ExportCSVModal-5qXYqLxL.js";import{L as ne}from"./index-B9pxTiZq.js";import"./calender-yWVPQvD3.js";import{o as me,a as ce,b as de,c as B}from"./thunk-BayVdJM7.js";import{B as D}from"./Button-8BG1yInr.js";import{C as ue}from"./Container-CWCo5PJe.js";import{R as M}from"./Row-tEjiKZiJ.js";import{C as pe}from"./Col-CbVAoDNW.js";import{C as A}from"./Card-oM_CSodH.js";import{M as p}from"./Modal-D8IwrdJm.js";import{F as o}from"./Form-B3O-MepU.js";import"./index-B9h42nwt.js";import"./_baseClone-1g4bW0SP.js";import"./isObject-D7bzW4Uf.js";import"./hoist-non-react-statics.cjs-D-StQlzH.js";import"./index-C-hCRaCp.js";import"./react-select.esm-grrDZ4s-.js";import"./extends-C149miAE.js";import"./setPrototypeOf-DgZC2w_0.js";import"./useMergedRefs-GCentTCM.js";import"./extends-CF3RwP-h.js";import"./Dropdown-DxU-Y7w8.js";import"./ThemeProvider-TIbVUJ6I.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-T4LAgSOZ.js";import"./usePrevious-Btyv44Lm.js";import"./useForceUpdate-BlfwUsii.js";import"./useEventCallback-UvAaEcyh.js";import"./useCallbackRef-DLLZHH4k.js";import"./mergeOptionsWithPopperConfig-B_-RLxEJ.js";import"./useMounted-Cej8hYIm.js";import"./useWindow-DNutj8bq.js";import"./NavContext-pS6wZ13c.js";import"./Button-DiXNu-Xz.js";import"./DataKey-DjdvojM5.js";import"./hook-5wmmorCC.js";import"./Anchor-CBJHYeB7.js";import"./InputGroupContext-lfkYm6PP.js";import"./NavbarContext-zbuTv4ym.js";import"./Table-FAC6EFLR.js";import"./Spinner-Dqy5ZvRe.js";import"./logo-sm-DmJR8Lua.js";import"./logo-dark-Dh4DV6bR.js";import"./logo-light-l2wwNDet.js";import"./index-kDh0yZ-q.js";import"./avatar-2-B-1-S_lh.js";import"./avatar-3-CSm6kh8B.js";import"./avatar-5-D7m8bZ3v.js";import"./avatar-1-PHP4S1R6.js";import"./Collapse-CLnse129.js";import"./TransitionWrapper-D-qpilnv.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./ecommerce-NJRzL-65.js";import"./img-1-DS69PRDs.js";import"./img-2-9-eXUNQa.js";import"./img-3-BgFVQ164.js";import"./img-5-voBZKH-r.js";import"./img-6-BK084NdC.js";import"./img-8-BJHS-sPF.js";import"./img-10-DeVk1Tlu.js";import"./img-10-h_gqqnMv.js";import"./img-12-DPX2B3oR.js";import"./img-5-DJyXW5hw.js";import"./img-2-vFB13_q9.js";import"./img-3-BL14nKmC.js";import"./img-4-CtrsL6tB.js";import"./img-6-_pG5cMGi.js";import"./img-7-BS2xckWT.js";import"./img-8-RHtA4ZFb.js";import"./CardHeaderContext-1u13MfXj.js";import"./divWithClassName-ehbO6ZdE.js";import"./useWillUnmount-C4Nc5QRD.js";import"./AbstractModalHeader-DZ4vFqiK.js";import"./hasClass-C1kJTKdw.js";import"./NoopTransition-CHsi9rB4.js";import"./CloseButton-tNq7qgMc.js";import"./Fade-CAJ1Bm1W.js";import"./ElementChildren-CJCNM75t.js";const he=()=>{const n=$(),V=O(t=>t.Ecommerce,t=>({customers:t.customers,isCustomerSuccess:t.isCustomerSuccess,error:t.error})),{customers:i,isCustomerSuccess:w,error:L}=W(V),[h,x]=a.useState(!1),[r,c]=a.useState([]),[P,f]=a.useState(!1),[Y,b]=a.useState(!1),[C,j]=a.useState(!1),d=a.useCallback(()=>{C?(j(!1),c(null)):j(!0)},[C]),I=[{options:[{label:"Status",value:"Status"},{label:"Active",value:"Active"},{label:"Block",value:"Block"}]}],R=t=>{c(t),f(!0)},s=ee({enableReinitialize:!0,initialValues:{customer:r&&r.customer||"",email:r&&r.email||"",phone:r&&r.phone||"",date:r&&r.date||"",status:r&&r.status||""},validationSchema:te({customer:u().required("Please Enter Customer Name"),email:u().required("Please Enter Your Email"),phone:u().required("Please Enter Your Phone"),date:u().required("Please Enter date"),status:u().required("Please Enter Your Status")}),onSubmit:t=>{if(h){const l={id:r?r.id:0,customer:t.customer,email:t.email,phone:t.phone,date:t.date,status:t.status};n(me(l)),s.resetForm()}else{const l={id:(Math.floor(Math.random()*10)+20).toString(),customer:t.customer,email:t.email,phone:t.phone,date:t.date,status:t.status};n(ce(l)),s.resetForm()}d()}}),q=()=>{r&&(n(B(r.id)),f(!1))},k=a.useCallback(t=>{const l=t;c({id:l.id,customer:l.customer,email:l.email,phone:l.phone,date:l.date,status:l.status}),x(!0),d()},[d]);a.useEffect(()=>{i&&!i.length&&n(de())},[n,i]),a.useEffect(()=>{c(i)},[i]),a.useEffect(()=>{_.isEmpty(i)||(c(i),x(!1))},[i]);const K=t=>S(new Date(t)).format("DD MMM Y"),N=a.useCallback(()=>{const t=document.getElementById("checkBoxAll"),l=document.querySelectorAll(".customerCheckBox");t.checked?l.forEach(m=>{m.checked=!0}):l.forEach(m=>{m.checked=!1}),y()},[]),[T,z]=a.useState([]),[H,g]=a.useState(!1),G=()=>{const t=document.getElementById("checkBoxAll");T.forEach(l=>{n(B(l.value)),setTimeout(()=>{ae.clearWaitingQueue()},3e3)}),g(!1),t.checked=!1},y=()=>{const t=document.querySelectorAll(".customerCheckBox:checked");t.length>0?g(!0):g(!1),z(t)},J=a.useMemo(()=>[{header:e.jsx("input",{type:"checkbox",id:"checkBoxAll",className:"form-check-input",onClick:()=>N()}),cell:t=>e.jsx("input",{type:"checkbox",className:"customerCheckBox form-check-input",value:t.getValue(),onChange:()=>y()}),id:"#"},{header:"",accessorKey:"id",enableColumnFilter:!1,hiddenColumns:!0,cell:t=>e.jsx("input",{type:"hidden",value:t.getValue()})},{header:"Customer",accessorKey:"customer",enableColumnFilter:!1},{header:"Email",accessorKey:"email",enableColumnFilter:!1},{header:"Phone",accessorKey:"phone",enableColumnFilter:!1},{header:"Joining Date",accessorKey:"date",enableColumnFilter:!1,cell:t=>e.jsx(e.Fragment,{children:K(t.getValue())})},{header:"Status",accessorKey:"status",enableColumnFilter:!1,cell:t=>{switch(t.getValue()){case"Active":return e.jsxs("span",{className:"badge text-uppercase bg-success-subtle text-success",children:[" ",t.getValue()," "]});case"Block":return e.jsxs("span",{className:"badge text-uppercase bg-danger-subtle text-danger",children:[" ",t.getValue()," "]});default:return e.jsxs("span",{className:"badge text-uppercase bg-info-subtle text-info",children:[" ",t.getValue()," "]})}}},{header:"Action",cell:t=>e.jsxs("ul",{className:"list-inline hstack gap-2 mb-0",children:[e.jsx("li",{className:"list-inline-item edit",title:"Edit",children:e.jsx(D,{variant:"link",href:"#",className:"text-primary d-inline-block edit-item-btn p-0",onClick:()=>{const l=t.row.original;k(l)},children:e.jsx("i",{className:"ri-pencil-fill fs-16"})})}),e.jsx("li",{className:"list-inline-item",title:"Remove",children:e.jsx(D,{variant:"link",href:"#",className:"text-danger d-inline-block remove-item-btn p-0",onClick:()=>{const l=t.row.original;R(l)},children:e.jsx("i",{className:"ri-delete-bin-5-fill fs-16"})})})]})}],[k,N]),[Q,v]=a.useState(!1);return e.jsxs(E.Fragment,{children:[e.jsx(X,{title:"Customers | Velzon - React Admin & Dashboard Template"}),e.jsxs("div",{className:"page-content",children:[e.jsx(ie,{show:Q,onCloseClick:()=>v(!1),data:i}),e.jsx(F,{show:P,onDeleteClick:q,onCloseClick:()=>f(!1)}),e.jsx(F,{show:Y,onDeleteClick:()=>{G(),b(!1)},onCloseClick:()=>b(!1)}),e.jsxs(ue,{fluid:!0,children:[e.jsx(se,{title:"Customers",pageTitle:"Ecommerce"}),e.jsx(M,{children:e.jsx(pe,{lg:12,children:e.jsxs(A,{id:"customerList",children:[e.jsx(A.Header,{className:"border-0",children:e.jsxs(M,{className:"g-4 align-items-center",children:[e.jsx("div",{className:"col-sm",children:e.jsx("div",{children:e.jsx("h5",{className:"card-title mb-0",children:"Customer List"})})}),e.jsx("div",{className:"col-sm-auto",children:e.jsxs("div",{children:[H&&e.jsx("button",{className:"btn btn-soft-danger me-1",onClick:()=>b(!0),children:e.jsx("i",{className:"ri-delete-bin-2-line"})}),e.jsxs("button",{type:"button",className:"btn btn-secondary add-btn",id:"create-btn",onClick:()=>{x(!1),d()},children:[e.jsx("i",{className:"ri-add-line align-bottom me-1"})," Add Customer"]})," ",e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>v(!0),children:[e.jsx("i",{className:"ri-file-download-line align-bottom me-1"})," ","Export"]})]})})]})}),e.jsxs("div",{className:"card-body pt-0",children:[e.jsx("div",{children:w&&i.length?e.jsx(le,{columns:J,data:i||[],isGlobalFilter:!0,customPageSize:10,isCustomerFilter:!0,theadClass:"table-light text-muted",SearchPlaceholder:"Search for customer, email, phone, status or something..."}):e.jsx(re,{error:L})}),e.jsxs(p,{id:"showModal",show:C,onHide:d,centered:!0,children:[e.jsx(p.Header,{className:"bg-light p-3",closeButton:!0,children:e.jsx("h5",{className:"modal-title",children:h?"Edit Customer":"Add Customer"})}),e.jsxs(o,{className:"tablelist-form",onSubmit:t=>(t.preventDefault(),s.handleSubmit(),!1),children:[e.jsxs(p.Body,{children:[e.jsx("input",{type:"hidden",id:"id-field"}),e.jsxs("div",{className:"mb-3",id:"modal-id",style:{display:"none"},children:[e.jsx(o.Label,{htmlFor:"id-field1",className:"form-label",children:"ID"}),e.jsx(o.Control,{type:"text",id:"id-field1",className:"form-control",placeholder:"ID",readOnly:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o.Label,{htmlFor:"customername-field",className:"form-label",children:"Customer Name"}),e.jsx(o.Control,{name:"customer",id:"customername-field",className:"form-control",placeholder:"Enter Name",type:"text",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.customer||""}),s.touched.customer&&s.errors.customer?e.jsx(o.Control.Feedback,{type:"invalid",children:s.errors.customer}):null]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o.Label,{htmlFor:"email-field",className:"form-label",children:"Email"}),e.jsx(o.Control,{name:"email",type:"email",id:"email-field",placeholder:"Enter Email",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.email||""}),s.touched.email&&s.errors.email?e.jsx(o.Control.Feedback,{type:"invalid",children:s.errors.email}):null]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o.Label,{htmlFor:"phone-field",className:"form-label",children:"Phone"}),e.jsx(o.Control,{name:"phone",type:"text",id:"phone-field",placeholder:"Enter Phone no.",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.phone||""}),s.touched.phone&&s.errors.phone?e.jsx(o.Control.Feedback,{type:"invalid",children:s.errors.phone}):null]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o.Label,{htmlFor:"date-field",className:"form-label",children:"Joining Date"}),e.jsx(Z,{name:"date",id:"date-field",className:"form-control",placeholder:"Select a date",options:{altInput:!0,altFormat:"d M, Y",dateFormat:"d M, Y"},onChange:t=>s.setFieldValue("date",S(t[0]).format("DD MMMM ,YYYY")),value:s.values.date||""}),s.errors.date&&s.touched.date?e.jsx(o.Control.Feedback,{type:"invalid",className:"d-block",children:s.errors.date}):null]}),e.jsxs("div",{children:[e.jsx(o.Label,{htmlFor:"status-field",className:"form-label",children:"Status"}),e.jsx("select",{name:"status",className:"form-select",id:"status-field",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.status||"",children:I.map((t,l)=>e.jsx(E.Fragment,{children:t.options.map((m,U)=>e.jsx("option",{value:m.value,children:m.label},U))},l))}),s.touched.status&&s.errors.status?e.jsx(o.Control.Feedback,{type:"invalid",children:s.errors.status}):null]})]}),e.jsx(p.Footer,{children:e.jsxs("div",{className:"hstack gap-2 justify-content-end",children:[e.jsx("button",{type:"button",className:"btn btn-light",onClick:()=>{j(!1)},children:" Close "}),e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",h?"Update":"Add Customer"," "]})]})})]})]}),e.jsx(oe,{closeButton:!1,limit:1})]})]})})})]})]})]})};he.layout=n=>e.jsx(ne,{children:n});export{he as default};
