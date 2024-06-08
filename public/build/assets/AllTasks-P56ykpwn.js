import{b as O,c as $,u as Q,r as i,j as e,R as I,a as W}from"./app-CcmPIReT.js";import{T as _}from"./TableContainer-CzzYi1HO.js";import{D as B}from"./DeleteModal-CjVnAbfR.js";import{S as G}from"./index-B9sCdwnn.js";import{F as J}from"./index-CumyjNMn.js";import{h as X}from"./moment-C5S46NFB.js";import{OrdersId as Z,Project as ee,CreateBy as ae,DueDate as se,Status as te,Priority as re}from"./TaskListCol-Bp6l7Q2A.js";import{u as le,c as ie,a as d,e as oe}from"./index.esm-g19M0MPk.js";import{l as S}from"./lodash-dA7Rf5_8.js";import{Q as ne,B as ce}from"./ReactToastify-hOsVGs7O.js";import{L as de}from"./Loader-Cb7bweCS.js";import{a as me}from"./avatar-1-PHP4S1R6.js";import{a as ue}from"./avatar-2-B-1-S_lh.js";import{a as he}from"./avatar-3-CSm6kh8B.js";import{a as pe}from"./avatar-5-D7m8bZ3v.js";import{a as ke}from"./avatar-6-DJX3lkeY.js";import{a as xe}from"./avatar-7-ChzoTmzs.js";import{a as fe}from"./avatar-8-BaCFiEfo.js";import{a as je}from"./avatar-10-BcqtGVJW.js";import{o as be,a as ge,b as Ce,c as E}from"./thunk-ClrMT8pO.js";import{F as r}from"./Form-D5C7AGxv.js";import{B as x}from"./Button-CjmBuVFy.js";import{C as c}from"./Col-BT99caCr.js";import{M as v}from"./Modal-DnQM4R4H.js";import{R as Ne}from"./Row-BpZuzSWn.js";import"./index-1Utufib6.js";import"./react-select.esm-DHf-srvq.js";import"./toConsumableArray-D6TJiZ36.js";import"./setPrototypeOf-DgZC2w_0.js";import"./useMergedRefs-C3j-VvFq.js";import"./extends-BFqQA52f.js";import"./hoist-non-react-statics.cjs-DZsWGJ4k.js";import"./Dropdown-CZ6gxq-L.js";import"./ThemeProvider-CSTTv7nq.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-DsKskV_g.js";import"./usePrevious-DNpMYT0V.js";import"./useForceUpdate-szFTueT1.js";import"./useEventCallback-BJse7mIf.js";import"./useCallbackRef-DOaTl7z1.js";import"./mergeOptionsWithPopperConfig-CF0vfbBt.js";import"./useMounted-Bja3_6ae.js";import"./useWindow-CvUQe0g5.js";import"./NavContext-DwPeOdq-.js";import"./Button-CAE2U-yP.js";import"./DataKey-DjdvojM5.js";import"./hook-D61oMDbP.js";import"./Anchor-x2SFhHNR.js";import"./InputGroupContext-BY31koS2.js";import"./NavbarContext-CDqv-Zet.js";import"./Card-yrIYSTOn.js";import"./CardHeaderContext-C52wv7vf.js";import"./divWithClassName-CM1F4fkU.js";import"./Table-C4aUjA5f.js";import"./isObject-U9U2HXiq.js";import"./index-E0pRXvh2.js";import"./_baseClone-Dlzh4ArA.js";import"./Spinner-D4P8BtQg.js";import"./calender-6pYCF-Qi.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./taskList-bZVxMAUd.js";import"./avatar-4-BkrIkC6X.js";import"./avatar-9-iQiecx18.js";import"./img-7-CJgpB7jU.js";import"./img-4-BjZu39fc.js";import"./ElementChildren-BwLiqz1a.js";import"./useWillUnmount-K4WbxWkU.js";import"./TransitionWrapper-RT2fFqbB.js";import"./AbstractModalHeader-CyAL14sU.js";import"./hasClass-B_-N1DDL.js";import"./NoopTransition-NIwa5DHe.js";import"./CloseButton-Bq4WJIiA.js";import"./Fade-BDvw6Q76.js";const ye=[{id:1,imgId:"anna-adame",img:me,name:"Anna Adame"},{id:2,imgId:"frank-hook",img:he,name:"Frank Hook"},{id:3,imgId:"alexis-clarke",img:ke,name:"Alexis Clarke"},{id:4,imgId:"herbert-stokes",img:ue,name:"Herbert Stokes"},{id:5,imgId:"michael-morris",img:xe,name:"Michael Morris"},{id:6,imgId:"nancy-martino",img:pe,name:"Nancy Martino"},{id:7,imgId:"thomas-taylor",img:fe,name:"Thomas Taylor"},{id:8,imgId:"tonya-noble",img:je,name:"Tonya Noble"}],Ja=()=>{const m=O(),M=$(a=>a.Tasks,a=>({taskList:a.taskList,isTaskSuccess:a.isTaskSuccess,error:a.error,isTaskAdd:a.isTaskAdd,isTaskAddFail:a.isTaskAddFail,isTaskDelete:a.isTaskDelete,isTaskDeleteFail:a.isTaskDeleteFail,isTaskUpdate:a.isTaskUpdate,isTaskUpdateFail:a.isTaskUpdateFail})),{taskList:o,isTaskSuccess:ve,error:P}=Q(M),[f,h]=i.useState(!1),[l,p]=i.useState([]),[j,k]=i.useState([]),[L,b]=i.useState(!1),[A,g]=i.useState(!1),[C,N]=i.useState(!1),u=i.useCallback(()=>{C?(N(!1),p(null)):N(!0)},[C]),w=a=>{p(a),b(!0)};i.useEffect(()=>{k(o)},[o]);const q=()=>{l&&(m(E(l.id)),b(!1))},s=le({enableReinitialize:!0,initialValues:{taskId:l&&l.taskId||"",project:l&&l.project||"",task:l&&l.task||"",creater:l&&l.creater||"",dueDate:l&&l.dueDate||"",status:l&&l.status||"",priority:l&&l.priority||"",subItem:l&&l.subItem||[]},validationSchema:ie({taskId:d().required("Please Enter Task Id"),project:d().required("Please Enter Project Name"),task:d().required("Please Enter Your Task"),creater:d().required("Please Enter Creater Name"),dueDate:d().required("Please Enter Due Date"),status:d().required("Please Enter Status"),priority:d().required("Please Enter Priority"),subItem:oe().required("Please Enter an Image")}),onSubmit:a=>{if(f){const t={id:l?l.id:0,taskId:a.taskId,project:a.project,task:a.task,creater:a.creater,dueDate:a.dueDate,status:a.status,priority:a.priority,subItem:a.subItem};m(be(t)),s.resetForm()}else{const t={id:(Math.floor(Math.random()*10)+20).toString(),taskId:a.taskId,project:a.project,task:a.task,creater:a.creater,dueDate:a.dueDate,status:a.status,priority:a.priority,subItem:a.subItem};m(ge(t)),s.resetForm()}u()}}),T=i.useCallback(a=>{const t=a;p({id:t.id,taskId:t.taskId,project:t.project,task:t.task,creater:t.creater,dueDate:t.dueDate,status:t.status,priority:t.priority,subItem:t.subItem}),h(!0),u()},[u]),K=()=>{p(""),h(!1),u()};i.useEffect(()=>{S.isEmpty(o)||k(o)},[o]),i.useEffect(()=>{o&&!o.length&&m(Ce())},[m,o]),i.useEffect(()=>{k(o)},[o]),i.useEffect(()=>{S.isEmpty(o)||(k(o),h(!1))},[o]);const D=i.useCallback(()=>{const a=document.getElementById("checkBoxAll"),t=document.querySelectorAll(".taskCheckBox");a.checked?t.forEach(n=>{n.checked=!0}):t.forEach(n=>{n.checked=!1}),F()},[]),[H,Y]=i.useState([]),[R,y]=i.useState(!1),U=()=>{const a=document.getElementById("checkBoxAll");H.forEach(t=>{m(E(t.value)),setTimeout(()=>{ce.clearWaitingQueue()},3e3)}),y(!1),a.checked=!1},F=()=>{const a=document.querySelectorAll(".taskCheckBox:checked");a.length>0?y(!0):y(!1),Y(a)},V=i.useMemo(()=>[{header:e.jsx(r.Check.Input,{type:"checkbox",id:"checkBoxAll",className:"form-check-input",onClick:()=>D()}),cell:a=>e.jsx(r.Check.Input,{type:"checkbox",className:"taskCheckBox form-check-input",value:a.getValue(),onChange:()=>F()}),id:"#"},{header:"Order ID",accessorKey:"taskId",enableColumnFilter:!1,cell:a=>e.jsx(Z,{...a})},{header:"Project",accessorKey:"project",enableColumnFilter:!1,cell:a=>e.jsx(ee,{...a})},{header:"Tasks",accessorKey:"task",enableColumnFilter:!1,cell:a=>e.jsx(I.Fragment,{children:e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{className:"flex-grow-1 tasks_name",children:a.getValue()}),e.jsx("div",{className:"flex-shrink-0 ms-4",children:e.jsxs("ul",{className:"list-inline tasks-list-menu mb-0",children:[e.jsx("li",{className:"list-inline-item",children:e.jsx(x,{variant:"link",href:"/apps-tasks-details",className:"p-0",children:e.jsx("i",{className:"ri-eye-fill align-bottom me-2 text-muted"})})}),e.jsx("li",{className:"list-inline-item",children:e.jsx(x,{variant:"link",href:"#",onClick:()=>{const t=a.row.original;T(t)},className:"p-0",children:e.jsx("i",{className:"ri-pencil-fill align-bottom me-2 text-muted"})})}),e.jsx("li",{className:"list-inline-item",children:e.jsx(x,{variant:"link",href:"#",className:"remove-item-btn p-0",onClick:()=>{const t=a.row.original;w(t)},children:e.jsx("i",{className:"ri-delete-bin-fill align-bottom me-2 text-muted"})})})]})})]})})},{header:"Created By",accessorKey:"creater",enableColumnFilter:!1,cell:a=>e.jsx(ae,{...a})},{header:"Assigned To",accessorKey:"subItem",enableColumnFilter:!1,cell:a=>{const t=a.getValue().map(n=>n.img?n.img:n);return e.jsx(I.Fragment,{children:e.jsx("div",{className:"avatar-group",children:t.map((n,z)=>e.jsx(W,{href:"#",className:"avatar-group-item",children:e.jsx("img",{src:n,alt:"",className:"rounded-circle avatar-xxs"})},z))})})}},{header:"Due Date",accessorKey:"dueDate",enableColumnFilter:!1,cell:a=>e.jsx(se,{...a})},{header:"Status",accessorKey:"status",enableColumnFilter:!1,cell:a=>e.jsx(te,{...a})},{header:"Priority",accessorKey:"priority",enableColumnFilter:!1,cell:a=>e.jsx(re,{...a})}],[T,D]);return e.jsxs(I.Fragment,{children:[e.jsx(B,{show:L,onDeleteClick:q,onCloseClick:()=>b(!1)}),e.jsx(B,{show:A,onDeleteClick:()=>{U(),g(!1)},onCloseClick:()=>g(!1)}),e.jsx("div",{className:"row",children:e.jsx(c,{lg:12,children:e.jsxs("div",{className:"card",id:"tasksList",children:[e.jsx("div",{className:"card-header border-0",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("h5",{className:"card-title mb-0 flex-grow-1",children:"All Tasks"}),e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsxs("button",{className:"btn btn-primary add-btn me-1",onClick:()=>{h(!1),u()},children:[e.jsx("i",{className:"ri-add-line align-bottom me-1"})," Create Task"]}),R&&e.jsx("button",{className:"btn btn-soft-danger",onClick:()=>g(!0),children:e.jsx("i",{className:"ri-delete-bin-2-line"})})]})})]})}),e.jsxs("div",{className:"card-body pt-0",children:[j&&j.length?e.jsx(_,{columns:V,data:j||[],customPageSize:8,divClass:"table-responsive table-card mb-3",tableClass:"align-middle table-nowrap mb-0",theadClass:"table-light text-muted",thClass:"table-light text-muted",handleTaskClick:K,isTaskListFilter:!0,SearchPlaceholder:"Search for tasks or something..."}):e.jsx(de,{error:P}),e.jsx(ne,{closeButton:!1,limit:1})]})]})})}),e.jsxs(v,{show:C,onHide:u,centered:!0,size:"lg",className:"border-0",modalClassName:"modal fade zoomIn",children:[e.jsx(v.Header,{className:"p-3 bg-info-subtle",closeButton:!0,children:e.jsx("h5",{className:"modal-title",children:f?"Edit Task":"Create Task"})}),e.jsxs(r,{className:"tablelist-form",onSubmit:a=>(a.preventDefault(),s.handleSubmit(),!1),children:[e.jsx(v.Body,{className:"modal-body",children:e.jsxs(Ne,{className:"g-3",children:[e.jsxs(c,{lg:12,children:[e.jsx(r.Label,{htmlFor:"taskId-field",className:"form-label",children:"Order Id"}),e.jsx(r.Control,{name:"taskId",id:"taskId-field",className:"form-control",placeholder:"Enter Task Id ",type:"text",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.taskId||""}),s.touched.taskId&&s.errors.taskId?e.jsx(r.Control.Feedback,{type:"invalid",children:s.errors.taskId}):null]}),e.jsxs(c,{lg:12,children:[e.jsx(r.Label,{htmlFor:"projectName-field",className:"form-label",children:"Project Name"}),e.jsx(r.Control,{name:"project",id:"projectName-field",className:"form-control",placeholder:"Project name",type:"text",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.project||""}),s.touched.project&&s.errors.project?e.jsx(r.Control.Feedback,{type:"invalid",children:s.errors.project}):null]}),e.jsx(c,{lg:12,children:e.jsxs("div",{children:[e.jsx(r.Label,{htmlFor:"tasksTitle-field",className:"form-label",children:"Title"}),e.jsx(r.Control,{name:"task",id:"tasksTitle-field",className:"form-control",placeholder:"Title",type:"text",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.task||""}),s.touched.task&&s.errors.task?e.jsx(r.Control.Feedback,{type:"invalid",children:s.errors.task}):null]})}),e.jsxs(c,{lg:12,children:[e.jsx(r.Label,{htmlFor:"clientName-field",className:"form-label",children:"Client Name"}),e.jsx(r.Control,{name:"creater",id:"clientName-field",className:"form-control",placeholder:"Client name",type:"text",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.creater||""}),s.touched.creater&&s.errors.creater?e.jsx(r.Control.Feedback,{type:"invalid",children:s.errors.creater}):null]}),e.jsxs(c,{lg:12,children:[e.jsx(r.Label,{className:"form-label",children:"Assigned To"}),e.jsx(G,{style:{maxHeight:"95px"},children:e.jsx("ul",{className:"list-unstyled vstack gap-2 mb-0",children:ye.map((a,t)=>e.jsx("li",{children:e.jsxs("div",{className:"form-check d-flex align-items-center",children:[e.jsx(r.Check.Input,{name:"subItem",className:"form-check-input me-3",type:"checkbox",onChange:s.handleChange,onBlur:s.handleBlur,value:a.img,id:a.imgId}),e.jsxs(r.Check.Label,{className:"form-check-label d-flex align-items-center",htmlFor:a.imgId,children:[e.jsx("span",{className:"flex-shrink-0",children:e.jsx("img",{src:a.img,alt:"",className:"avatar-xxs rounded-circle"})}),e.jsx("span",{className:"flex-grow-1 ms-2",children:a.name})]}),s.touched.subItem&&s.errors.subItem?e.jsx(r.Control.Feedback,{type:"invalid",children:s.errors.subItem}):null]})},t))})})]}),e.jsxs(c,{lg:6,children:[e.jsx(r.Label,{htmlFor:"duedate-field",className:"form-label",children:"Due Date"}),e.jsx(J,{name:"dueDate",id:"duedate-field",className:"form-control",placeholder:"Select a date",options:{altInput:!0,altFormat:"d M, Y",dateFormat:"d M, Y"},onChange:a=>s.setFieldValue("dueDate",X(a[0]).format("DD MMMM ,YYYY")),value:s.values.dueDate||""}),s.errors.dueDate&&s.touched.dueDate?e.jsx(r.Control.Feedback,{type:"invalid",className:"d-block",children:s.errors.dueDate}):null]}),e.jsxs(c,{lg:6,children:[e.jsx(r.Label,{htmlFor:"ticket-status",className:"form-label",children:"Status"}),e.jsxs("select",{name:"status",className:"form-select",id:"ticket-field",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.status||"",children:[e.jsx("option",{value:"",children:"Status"}),e.jsx("option",{value:"New",children:"New"}),e.jsx("option",{value:"Inprogress",children:"Inprogress"}),e.jsx("option",{value:"Pending",children:"Pending"}),e.jsx("option",{value:"Completed",children:"Completed"})]}),s.touched.status&&s.errors.status?e.jsx(r.Control.Feedback,{type:"invalid",children:s.errors.status}):null]}),e.jsxs(c,{lg:12,children:[e.jsx(r.Label,{htmlFor:"priority-field",className:"form-label",children:"Priority"}),e.jsxs("select",{name:"priority",className:"form-select",id:"priority-field",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.priority||"",children:[e.jsx("option",{value:"",children:"Priority"}),e.jsx("option",{value:"High",children:"High"}),e.jsx("option",{value:"Medium",children:"Medium"}),e.jsx("option",{value:"Low",children:"Low"})]}),s.touched.priority&&s.errors.priority?e.jsx(r.Control.Feedback,{type:"invalid",children:s.errors.priority}):null]})]})}),e.jsx("div",{className:"modal-footer",children:e.jsxs("div",{className:"hstack gap-2 justify-content-end",children:[e.jsx(x,{type:"button",onClick:()=>{N(!1)},className:"btn-light",children:"Close"}),e.jsx("button",{type:"submit",className:"btn btn-success",id:"add-btn",children:f?"Update Task":"Add Task"})]})})]})]})]})};export{Ja as default};