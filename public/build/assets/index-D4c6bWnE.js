import{u as F,c as S,a as B,r as c,j as e,R as D,Y as M,b as I}from"./app-DAA4umSp.js";import{B as A}from"./BreadCrumb-Bbps-xeQ.js";import{u as E,c as R,a as u}from"./index.esm-osZF-PkQ.js";import{h as P,i as J}from"./thunk-BW-RBveC.js";import{L as T}from"./index-ChknMJM7.js";import{C as z}from"./Container-Cje7132t.js";import{R as h}from"./Row-C8gNVKjv.js";import{C as d}from"./Col-Dd-7fFYa.js";import{C as x}from"./Card-DPRNNE61.js";import{F as r}from"./Form-DxpFrAJe.js";import{D as s}from"./Dropdown-BMeNbemE.js";import{M as b}from"./Modal-D-7Nseb4.js";import"./_baseClone-1g4bW0SP.js";import"./isObject-D7bzW4Uf.js";import"./hoist-non-react-statics.cjs-Bvzhpf--.js";import"./appsJobs-BeTZ9ums.js";import"./img-2-BKxLD3CN.js";import"./img-4-BjZu39fc.js";import"./img-7-CJgpB7jU.js";import"./img-3-B4j7qXDU.js";import"./img-8-CymXe_lN.js";import"./img-5-DJyXW5hw.js";import"./img-2-vFB13_q9.js";import"./img-3-BL14nKmC.js";import"./img-4-CtrsL6tB.js";import"./img-6-_pG5cMGi.js";import"./img-7-BS2xckWT.js";import"./img-8-RHtA4ZFb.js";import"./img-9-DWBFTEwm.js";import"./avatar-1-PHP4S1R6.js";import"./avatar-2-B-1-S_lh.js";import"./avatar-4-BkrIkC6X.js";import"./avatar-5-D7m8bZ3v.js";import"./avatar-6-DJX3lkeY.js";import"./avatar-7-ChzoTmzs.js";import"./avatar-8-BaCFiEfo.js";import"./avatar-9-iQiecx18.js";import"./avatar-10-BcqtGVJW.js";import"./slack-CK7S0DPT.js";import"./dropbox-kAuTPoR1.js";import"./bitbucket-C11sTxQc.js";import"./ReactToastify-jGGXfTHy.js";import"./index-B8itEOvo.js";import"./logo-sm-DmJR8Lua.js";import"./logo-dark-Dh4DV6bR.js";import"./logo-light-l2wwNDet.js";import"./calender-yWVPQvD3.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-6-B4dmEj4y.js";import"./index-XSywm6kh.js";import"./avatar-3-CSm6kh8B.js";import"./Collapse-CLExACe_.js";import"./ThemeProvider-Cohb_4IJ.js";import"./TransitionWrapper-Z6ZdfMDi.js";import"./listen-DOhMskc_.js";import"./useMergedRefs-CgdBK-bJ.js";import"./setPrototypeOf-DgZC2w_0.js";import"./CardHeaderContext-DP7KM0Ib.js";import"./divWithClassName-C3FyiOjc.js";import"./ElementChildren-CSrO72FP.js";import"./querySelectorAll-Cwpyv69p.js";import"./SSRProvider-D5jaPZlz.js";import"./usePrevious-U83WOE4G.js";import"./useForceUpdate-CMi1GG9F.js";import"./useEventCallback-DazKxGTp.js";import"./useCallbackRef-BHXXgk_h.js";import"./mergeOptionsWithPopperConfig-BfRC57Rj.js";import"./useMounted-CtcQznzv.js";import"./useWindow-C1j0nj5K.js";import"./NavContext-BMmZtpsL.js";import"./Button-Cm1f8AqA.js";import"./DataKey-DjdvojM5.js";import"./hook-CZF_VRVT.js";import"./extends-CF3RwP-h.js";import"./Anchor-DRo_1xWF.js";import"./InputGroupContext-CZ5D-Tve.js";import"./NavbarContext-CNhhZldJ.js";import"./Button-0uHp86Qk.js";import"./useWillUnmount-B9ugUPSu.js";import"./AbstractModalHeader-C0Fh221I.js";import"./hasClass-DKP8tRzf.js";import"./NoopTransition-C2sbNLoM.js";import"./CloseButton-N93lUkEw.js";import"./Fade-D4CW-71Y.js";const V=()=>{const l=F(),C=S(t=>t.Jobs,t=>({categoryList:t.categoryList})),{categoryList:p}=B(C);c.useEffect(()=>{l(P())},[l]);const[i,j]=c.useState(null),[n,m]=c.useState(!1),N=c.useCallback(()=>{n?(m(!1),j(null)):m(!0)},[n]),y=()=>{o.resetForm(),j(""),m(!n),N()},o=E({enableReinitialize:!0,initialValues:{lable:i&&i.lable||"",position:i&&i.position||"",iconName:i&&i.iconName||""},validationSchema:R({lable:u().required("Please Enter Category Label."),position:u().required("Please Enter Positions"),iconName:u().required("Please Enter Icon")}),onSubmit:t=>{const a={id:(Math.floor(Math.random()*10)+20).toString(),lable:t.lable,position:t.position,iconName:t.iconName};l(J(a)),o.resetForm(),N()}}),[q,f]=c.useState([]),v=t=>{let a=t.value;a==="All Tasks"?f([...p]):w({data:p,item:a,setState:f})},w=({data:t,item:a,setState:L})=>{L(t.filter(k=>Object.values(k).some(g=>typeof g=="string"&&g.toLowerCase().includes(a==null?void 0:a.toLowerCase()))))};return e.jsxs(D.Fragment,{children:[e.jsx(M,{title:"Job Categories | Velzon -  Admin & Dashboard Template"}),e.jsx("div",{className:"page-content",children:e.jsxs(z,{fluid:!0,className:"container-fluid",children:[e.jsx(A,{title:"Job Categories",pageTitle:"Jobs"}),e.jsx(h,{children:e.jsx(d,{lg:12,children:e.jsx(x,{children:e.jsx(x.Header,{children:e.jsxs(h,{className:"justify-content-between gy-3",children:[e.jsx(d,{lg:3,children:e.jsxs("div",{className:"search-box",children:[e.jsx(r.Control,{type:"text",className:"form-control search",placeholder:"Search for job categories...",onChange:t=>v(t.target)}),e.jsx("i",{className:"ri-search-line search-icon"})]})}),e.jsx(d,{className:"col-lg-auto",children:e.jsxs("div",{className:"d-md-flex text-nowrap gap-2",children:[e.jsxs("button",{className:"btn btn-info add-btn",onClick:()=>y(),children:[e.jsx("i",{className:"ri-add-fill me-1 align-bottom"})," Add Categories"]}),e.jsxs("button",{className:"btn btn-danger",children:[e.jsx("i",{className:"ri-filter-2-line me-1 align-bottom"})," ","Filters"]}),e.jsxs(s,{children:[e.jsx(s.Toggle,{type:"button",role:"button",as:"button",id:"dropdownMenuLink1","data-bs-toggle":"dropdown","aria-expanded":"false",className:"btn btn-soft-info arrow-none",children:e.jsx("i",{className:"ri-more-2-fill"})}),e.jsxs(s.Menu,{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink1",children:[e.jsx("li",{children:e.jsx(s.Item,{className:"dropdown-item",href:"#",children:"All"})}),e.jsx("li",{children:e.jsx(s.Item,{className:"dropdown-item",href:"#",children:"Last Week"})}),e.jsx("li",{children:e.jsx(s.Item,{className:"dropdown-item",href:"#",children:"Last Month"})}),e.jsx("li",{children:e.jsx(s.Item,{className:"dropdown-item",href:"#",children:"Last Year"})})]})]})]})})]})})})})}),e.jsx(h,{className:"row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1",children:(p||[]).map((t,a)=>e.jsx(d,{children:e.jsx(x,{children:e.jsxs(x.Body,{className:"text-center py-4",children:[e.jsx("i",{className:t.iconName+" display-5 text-primary "}),e.jsx(I,{href:"#",className:"stretched-link",children:e.jsx("h5",{className:"mt-4",children:t.lable})}),e.jsxs("p",{className:"text-muted mb-0",children:[t.position," Position"]})]})})},a))}),p.length<0&&e.jsx(h,{children:e.jsx(d,{lg:12,children:e.jsx("div",{className:"text-center mb-3",children:e.jsxs("button",{className:"btn btn-link text-info mt-2",id:"loadmore",children:[e.jsx("i",{className:"mdi mdi-loading mdi-spin fs-20 align-middle me-2"})," ","Load More"," "]})})})}),e.jsxs(b,{className:"fade zoomIn",show:n,onHide:()=>m(!n),id:"createFolderModal",dialogClassName:"zoomIn",centered:!0,tabIndex:-1,children:[e.jsx(b.Header,{className:"p-3 bg-primary-subtle",id:"createFolderModalLabel",closeButton:!0,children:e.jsx("h5",{className:"modal-title",children:"Add Category"})}),e.jsx(b.Body,{children:e.jsxs("form",{autoComplete:"off",className:"needs-validation createfolder-form",id:"createfolder-form",noValidate:!0,onSubmit:t=>(t.preventDefault(),o.handleSubmit(),!1),children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{htmlFor:"icon-input",className:"form-label",children:["Icon ",e.jsx("span",{className:"text-danger",children:"* We have added Remix icon"})]}),e.jsx(r.Control,{type:"text",className:"form-control",id:"icon-input",placeholder:"ri-bar-chart-fill",name:"iconName",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.iconName||""}),o.touched.iconName&&o.errors.iconName?e.jsx(r.Control.Feedback,{type:"invalid",className:"d-block",children:o.errors.iconName}):null]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"lable-input",className:"form-lable",children:"Category"}),e.jsx(r.Control,{type:"text",className:"form-control",id:"label-input",placeholder:"Enter category Label",name:"lable",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.lable||""}),o.touched.lable&&o.errors.lable?e.jsx(r.Control.Feedback,{type:"invalid",className:"d-block",children:o.errors.lable}):null]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"position-input",className:"form-label",children:"Position"}),e.jsx(r.Control,{type:"text",className:"form-control",id:"position-input",placeholder:"Enter position",name:"position",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.position||""}),o.touched.position&&o.errors.position?e.jsx(r.Control.Feedback,{type:"invalid",className:"d-block",children:o.errors.position}):null]}),e.jsxs("div",{className:"hstack gap-2 justify-content-end",children:[e.jsxs("button",{type:"button",className:"btn btn-ghost-danger",onClick:()=>m(!1),children:[e.jsx("i",{className:"ri-close-line align-bottom"})," Close"]}),e.jsx("button",{type:"submit",className:"btn btn-primary",id:"addNewFolder",children:"Add"})]})]})})]})]})})]})};V.layout=l=>e.jsx(T,{children:l});export{V as default};