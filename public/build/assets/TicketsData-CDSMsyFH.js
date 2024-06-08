import{a3 as _,a4 as $,a5 as J,a6 as W,b as Z,c as X,u as ee,r as o,j as e,R as te}from"./app-CcmPIReT.js";import{T as se}from"./TableContainer-CzzYi1HO.js";import{TicketsId as le,Title as ae,Client as re,AssignedTo as ie,CreateDate as oe,DueDate as ce,Status as ne,Priority as de}from"./TicketCol-CAB2zzs1.js";import{F as B}from"./index-CumyjNMn.js";import{h as E}from"./moment-C5S46NFB.js";import{l as me}from"./lodash-dA7Rf5_8.js";import{u as ue,c as he,a as m}from"./index.esm-g19M0MPk.js";import{D as I}from"./DeleteModal-CjVnAbfR.js";import{B as u,Q as pe}from"./ReactToastify-hOsVGs7O.js";import{L as xe}from"./Loader-Cb7bweCS.js";import"./calender-6pYCF-Qi.js";import{a as ke}from"./supportTickets-Dn0Tfd7d.js";import{F as r}from"./Form-D5C7AGxv.js";import{D as p}from"./Dropdown-CZ6gxq-L.js";import{R as w}from"./Row-BpZuzSWn.js";import{C as n}from"./Col-BT99caCr.js";import{C as F}from"./Card-yrIYSTOn.js";import{M as S}from"./Modal-DnQM4R4H.js";import"./index-1Utufib6.js";import"./react-select.esm-DHf-srvq.js";import"./toConsumableArray-D6TJiZ36.js";import"./setPrototypeOf-DgZC2w_0.js";import"./useMergedRefs-C3j-VvFq.js";import"./extends-BFqQA52f.js";import"./hoist-non-react-statics.cjs-DZsWGJ4k.js";import"./Button-CjmBuVFy.js";import"./ThemeProvider-CSTTv7nq.js";import"./Button-CAE2U-yP.js";import"./Table-C4aUjA5f.js";import"./index-E0pRXvh2.js";import"./_baseClone-Dlzh4ArA.js";import"./isObject-U9U2HXiq.js";import"./Spinner-D4P8BtQg.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./ElementChildren-BwLiqz1a.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-DsKskV_g.js";import"./usePrevious-DNpMYT0V.js";import"./useForceUpdate-szFTueT1.js";import"./useEventCallback-BJse7mIf.js";import"./useCallbackRef-DOaTl7z1.js";import"./mergeOptionsWithPopperConfig-CF0vfbBt.js";import"./useMounted-Bja3_6ae.js";import"./useWindow-CvUQe0g5.js";import"./NavContext-DwPeOdq-.js";import"./DataKey-DjdvojM5.js";import"./hook-D61oMDbP.js";import"./Anchor-x2SFhHNR.js";import"./InputGroupContext-BY31koS2.js";import"./NavbarContext-CDqv-Zet.js";import"./CardHeaderContext-C52wv7vf.js";import"./divWithClassName-CM1F4fkU.js";import"./useWillUnmount-K4WbxWkU.js";import"./TransitionWrapper-RT2fFqbB.js";import"./AbstractModalHeader-CyAL14sU.js";import"./hasClass-B_-N1DDL.js";import"./NoopTransition-NIwa5DHe.js";import"./CloseButton-Bq4WJIiA.js";import"./Fade-BDvw6Q76.js";const fe=()=>async i=>{try{i(_(ke))}catch(c){return c}},je=i=>async c=>{try{c($(i)),u.success("Ticket Added Successfully",{autoClose:3e3})}catch(d){return u.error("Ticket Added Failed",{autoClose:3e3}),d}},L=i=>async c=>{try{c(W(i)),u.success("Ticket Delete Successfully",{autoClose:3e3})}catch(d){return u.error("Ticket Delete Failed",{autoClose:3e3}),d}},ge=i=>async c=>{try{c(J(i)),u.success("Ticket Updated Successfully",{autoClose:3e3})}catch(d){return u.error("Ticket Updated Failed",{autoClose:3e3}),d}},It=()=>{const i=Z(),d=X(t=>t.Tickets,t=>({ticketsList:t.ticketsList,isTicketSuccess:t.isTicketSuccess,error:t.error})),{ticketsList:x,isTicketSuccess:be,error:A}=ee(d),[j,f]=o.useState(!1),[l,h]=o.useState([]),[g,P]=o.useState([]),[Y,b]=o.useState(!1),[q,C]=o.useState(!1),[D,y]=o.useState(!1),k=o.useCallback(()=>{D?(y(!1),h("")):(y(!0),h(""))},[D]),s=ue({enableReinitialize:!0,initialValues:{id:l&&l.id||"",ticketId:l&&l.ticketId||"",title:l&&l.title||"",client:l&&l.client||"",assigned:l&&l.assigned||"",createDate:l&&l.createDate||"",dueDate:l&&l.dueDate||"",status:l&&l.status||"",priority:l&&l.priority||""},validationSchema:he({title:m().required("Please Enter Title"),client:m().required("Please Enter Client Name"),assigned:m().required("Please Enter Assigned Name"),createDate:m().required("Please Enter Date"),dueDate:m().required("Please Enter Date"),status:m().required("Please Enter Your Joining status"),priority:m().required("Please Enter Your Priority")}),onSubmit:t=>{if(j){const a={id:l?l.id:0,ticketId:t.ticketId,title:t.title,client:t.client,assigned:t.assigned,createDate:t.createDate,dueDate:t.dueDate,status:t.status,priority:t.priority};i(ge(a)),s.resetForm()}else{const a={id:(Math.floor(Math.random()*10)+20).toString(),ticketId:"#VLZ4"+(Math.floor(Math.random()*10)+20).toString(),title:t.title,client:t.client,assigned:t.assigned,createDate:t.createDate,dueDate:t.dueDate,status:t.status,priority:t.priority};i(je(a)),s.resetForm()}k()}}),K=t=>{h(t),b(!0)},R=()=>{l&&(i(L(l.id)),b(!1))},V=t=>{const a=t;h({id:a.id,ticketId:a.ticketId,title:a.title,client:a.client,assigned:a.assigned,createDate:a.createDate,dueDate:a.dueDate,status:a.status,priority:a.priority}),f(!0),y(!0)};o.useEffect(()=>{i(fe())},[i]),o.useEffect(()=>{P(x)},[x]),o.useEffect(()=>{me.isEmpty(x)||(h(x),f(!1))},[x]);const H=()=>{h(""),f(!1),k()},M=o.useCallback(()=>{const t=document.getElementById("checkBoxAll"),a=document.querySelectorAll(".ticketCheckBox");t.checked?a.forEach(T=>{T.checked=!0}):a.forEach(T=>{T.checked=!1}),v()},[]),[z,O]=o.useState([]),[U,N]=o.useState(!1),G=()=>{const t=document.getElementById("checkBoxAll");z.forEach(a=>{i(L(a.value)),setTimeout(()=>{u.clearWaitingQueue()},3e3)}),N(!1),t.checked=!1},v=()=>{const t=document.querySelectorAll(".ticketCheckBox:checked");t.length>0?N(!0):N(!1),O(t)},Q=o.useMemo(()=>[{header:e.jsx(r.Check.Input,{type:"checkbox",id:"checkBoxAll",className:"form-check-input",onClick:()=>M()}),cell:t=>e.jsx(r.Check.Input,{type:"checkbox",className:"ticketCheckBox form-check-input",value:t.getValue(),onChange:()=>v()}),id:"#"},{header:"ID",accessorKey:"ticketId",enableColumnFilter:!1,cell:t=>e.jsx(le,{...t})},{header:"Title",accessorKey:"title",enableColumnFilter:!1,cell:t=>e.jsx(ae,{...t})},{header:"Client",accessorKey:"client",enableColumnFilter:!1,cell:t=>e.jsx(re,{...t})},{header:"Assigned To",accessorKey:"assigned",enableColumnFilter:!1,cell:t=>e.jsx(ie,{...t})},{header:"Create Date",accessorKey:"createDate",enableColumnFilter:!1,cell:t=>e.jsx(oe,{...t})},{header:"Due Date",accessorKey:"dueDate",enableColumnFilter:!1,cell:t=>e.jsx(ce,{...t})},{header:"Status",accessorKey:"status",enableColumnFilter:!1,cell:t=>e.jsx(ne,{...t})},{header:"Priority",accessorKey:"priority",enableColumnFilter:!1,cell:t=>e.jsx(de,{...t})},{header:"Actions",cell:t=>e.jsxs(p,{children:[e.jsx(p.Toggle,{as:"a",className:"btn btn-soft-secondary btn-sm arrow-none",children:e.jsx("i",{className:"ri-more-fill align-middle"})}),e.jsxs(p.Menu,{className:"dropdown-menu-end",children:[e.jsx("li",{children:e.jsxs(p.Item,{href:"/apps-tickets-details",children:[e.jsx("i",{className:"ri-eye-fill align-bottom me-2 text-muted"})," View"]})}),e.jsx("li",{children:e.jsxs(p.Item,{className:"edit-item-btn",href:"#showModal","data-bs-toggle":"modal",onClick:()=>{const a=t.row.original;V(a)},children:[e.jsx("i",{className:"ri-pencil-fill align-bottom me-2 text-muted"})," Edit"]})}),e.jsx("li",{children:e.jsxs(p.Item,{className:"remove-item-btn","data-bs-toggle":"modal",href:"#deleteOrder",onClick:()=>{const a=t.row.original;K(a)},children:[e.jsx("i",{className:"ri-delete-bin-fill align-bottom me-2 text-muted"})," Delete"]})})]})]})}],[M]);return e.jsxs(te.Fragment,{children:[e.jsxs(w,{children:[e.jsx(I,{show:Y,onDeleteClick:R,onCloseClick:()=>b(!1)}),e.jsx(I,{show:q,onDeleteClick:()=>{G(),C(!1)},onCloseClick:()=>C(!1)}),e.jsx(n,{lg:12,children:e.jsxs(F,{children:[e.jsx(F.Header,{className:"border-0",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("h5",{className:"card-title mb-0 flex-grow-1",children:"Tickets"}),e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsxs("button",{className:"btn btn-primary add-btn",onClick:()=>{f(!1),k()},children:[e.jsx("i",{className:"ri-add-line align-bottom"})," Create Tickets"]})," ",U&&e.jsx("button",{className:"btn btn-soft-danger",onClick:()=>C(!0),children:e.jsx("i",{className:"ri-delete-bin-2-line"})})]})})]})}),e.jsxs(F.Body,{className:"pt-0",children:[g&&g.length>0?e.jsx(se,{columns:Q,data:g||[],isGlobalFilter:!0,customPageSize:8,divClass:"table-responsive table-card mb-3",tableClass:"align-middle table-nowrap mb-0",theadClass:"",thClass:"",handleTicketClick:H,isTicketsListFilter:!0,SearchPlaceholder:"Search for ticket details or something..."}):e.jsx(xe,{className:"flex-grow-1 ms-2",error:A}),e.jsx(pe,{closeButton:!1,limit:1})]})]})})]}),e.jsxs(S,{show:D,onHide:k,centered:!0,size:"lg",className:"border-0",dialogClassName:"zoomIn",children:[e.jsx(S.Header,{className:"p-3 bg-info-subtle",closeButton:!0,children:e.jsx("h5",{className:"modal-title",children:j?"Edit Ticket":"Add Ticket"})}),e.jsxs(r,{className:"tablelist-form",onSubmit:t=>(t.preventDefault(),s.handleSubmit(),!1),children:[e.jsx(S.Body,{children:e.jsxs(w,{className:"g-3",children:[e.jsx(n,{lg:12,children:e.jsxs("div",{children:[e.jsx(r.Label,{htmlFor:"tasksTitle-field",className:"form-label",children:"Title"}),e.jsx(r.Control,{name:"title",id:"tasksTitle-field",className:"form-control",placeholder:"Enter Title",type:"text",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.title||""}),s.touched.title&&s.errors.title?e.jsx(r.Control.Feedback,{type:"invalid",children:s.errors.title}):null]})}),e.jsx(n,{lg:6,children:e.jsxs("div",{children:[e.jsx(r.Label,{htmlFor:"client_nameName-field",className:"form-label",children:"Client"}),e.jsx(r.Control,{name:"client",type:"text",id:"client_nameName-field",placeholder:"Enter Client Name",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.client||""}),s.touched.client&&s.errors.client?e.jsx(r.Control.Feedback,{type:"invalid",children:s.errors.client}):null]})}),e.jsx(n,{lg:6,children:e.jsxs("div",{children:[e.jsx(r.Label,{htmlFor:"assignedtoName-field",className:"form-label",children:"Assigned To"}),e.jsx(r.Control,{name:"assigned",type:"text",id:"assignedtoName-field",placeholder:"Enter Assigned Name",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.assigned||""}),s.touched.assigned&&s.errors.assigned?e.jsx(r.Control.Feedback,{type:"invalid",children:s.errors.assigned}):null]})}),e.jsxs(n,{lg:6,children:[e.jsx(r.Label,{htmlFor:"date-field",className:"form-label",children:"Create Date"}),e.jsx(B,{name:"createDate",id:"date-field",className:"form-control",placeholder:"Select a date",options:{altInput:!0,altFormat:"d M, Y",dateFormat:"d M, Y"},onChange:t=>s.setFieldValue("createDate",E(t[0]).format("DD MMMM ,YYYY")),value:s.values.createDate||""}),s.errors.createDate&&s.touched.createDate?e.jsx(r.Control.Feedback,{type:"invalid",className:"d-block",children:s.errors.createDate}):null]}),e.jsxs(n,{lg:6,children:[e.jsx(r.Label,{htmlFor:"duedate-field",className:"form-label",children:"Due Date"}),e.jsx(B,{name:"dueDate",id:"date-field",className:"form-control",placeholder:"Select a date",options:{altInput:!0,altFormat:"d M, Y",dateFormat:"d M, Y"},onChange:t=>s.setFieldValue("dueDate",E(t[0]).format("DD MMMM ,YYYY")),value:s.values.dueDate||""}),s.errors.dueDate&&s.touched.dueDate?e.jsx(r.Control.Feedback,{type:"invalid",className:"d-block",children:s.errors.dueDate}):null]}),e.jsxs(n,{lg:6,children:[e.jsx(r.Label,{htmlFor:"ticket-status",className:"form-label",children:"Status"}),e.jsxs("select",{name:"status",className:"form-select",id:"status-field",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.status||"",children:[e.jsx("option",{value:"",children:"Status"}),e.jsx("option",{value:"New",children:"New"}),e.jsx("option",{value:"Inprogress",children:"Inprogress"}),e.jsx("option",{value:"Closed",children:"Closed"}),e.jsx("option",{value:"Open",children:"Open"})]}),s.touched.status&&s.errors.status?e.jsx(r.Control.Feedback,{type:"invalid",children:s.errors.status}):null]}),e.jsxs(n,{lg:6,children:[e.jsx(r.Label,{htmlFor:"priority-field",className:"form-label",children:"Priority"}),e.jsxs("select",{name:"priority",className:"form-select",id:"priority-field",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.priority||"",children:[e.jsx("option",{value:"",children:"Priority"}),e.jsx("option",{value:"High",children:"High"}),e.jsx("option",{value:"Medium",children:"Medium"}),e.jsx("option",{value:"Low",children:"Low"})]}),s.touched.priority&&s.errors.priority?e.jsx(r.Control.Feedback,{type:"invalid",children:s.errors.priority}):null]})]})}),e.jsx("div",{className:"modal-footer",children:e.jsxs("div",{className:"hstack gap-2 justify-content-end",children:[e.jsx("button",{onClick:k,type:"button",className:"btn btn-light",children:"Close"}),e.jsx("button",{type:"submit",className:"btn btn-success",id:"add-btn",children:j?"Update":"Add Ticket"})]})})]})]})]})};export{It as default};