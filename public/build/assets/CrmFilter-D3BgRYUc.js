import{r as d,j as e}from"./app-CcmPIReT.js";import{F as x}from"./index-CumyjNMn.js";import{S as k}from"./react-select.esm-DHf-srvq.js";import{O as r}from"./Offcanvas-zsi7iDzT.js";import{F as l}from"./Form-D5C7AGxv.js";import{R as i}from"./Row-BpZuzSWn.js";import{C as a}from"./Col-BT99caCr.js";import"./index-E0pRXvh2.js";import"./toConsumableArray-D6TJiZ36.js";import"./setPrototypeOf-DgZC2w_0.js";import"./useMergedRefs-C3j-VvFq.js";import"./extends-BFqQA52f.js";import"./hoist-non-react-statics.cjs-DZsWGJ4k.js";import"./ThemeProvider-CSTTv7nq.js";import"./useWindow-CvUQe0g5.js";import"./listen-DOhMskc_.js";import"./useEventCallback-BJse7mIf.js";import"./AbstractModalHeader-CyAL14sU.js";import"./useMounted-Bja3_6ae.js";import"./useWillUnmount-K4WbxWkU.js";import"./usePrevious-DNpMYT0V.js";import"./hasClass-B_-N1DDL.js";import"./NoopTransition-NIwa5DHe.js";import"./TransitionWrapper-RT2fFqbB.js";import"./querySelectorAll-Cwpyv69p.js";import"./DataKey-DjdvojM5.js";import"./CloseButton-Bq4WJIiA.js";import"./Fade-BDvw6Q76.js";import"./NavbarContext-CDqv-Zet.js";import"./divWithClassName-CM1F4fkU.js";import"./ElementChildren-BwLiqz1a.js";const $=({show:t,onCloseClick:c})=>{const[n,m]=d.useState(null),o=s=>{m(s)},h=[{options:[{label:"Select country",value:"Select country"},{label:"Argentina",value:"Argentina"},{label:"Belgium",value:"Belgium"},{label:"Brazil",value:"Brazil"},{label:"Colombia",value:"Colombia"},{label:"Denmark",value:"Denmark"},{label:"France",value:"France"},{label:"Germany",value:"Germany"},{label:"Mexico",value:"Mexico"},{label:"Russia",value:"Russia"},{label:"Spain",value:"Spain"},{label:"Syria",value:"Syria"},{label:"United Kingdom",value:"United Kingdom"},{label:"United States of America",value:"United States of America"}]}];return e.jsxs(r,{direction:"end",show:t,id:"offcanvasExample",onHide:c,children:[e.jsx(r.Header,{className:"bg-light",onClick:c,children:"Leads Fliters"}),e.jsxs("form",{action:"",className:"d-flex flex-column justify-content-end h-100",children:[e.jsxs(r.Body,{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(l.Label,{htmlFor:"datepicker-range",className:"form-label text-muted text-uppercase fw-semibold mb-3",children:"Date"}),e.jsx(x,{className:"form-control",id:"datepicker-publish-input",placeholder:"Select a date",options:{altInput:!0,altFormat:"F j, Y",mode:"multiple",dateFormat:"d.m.y"}})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(l.Label,{htmlFor:"country-select",className:"form-label text-muted text-uppercase fw-semibold mb-3",children:"Country"}),e.jsx(k,{className:"mb-0",value:n,onChange:s=>{o(s)},options:h,id:"country-select"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(l.Label,{htmlFor:"status-select",className:"form-label text-muted text-uppercase fw-semibold mb-3",children:"Status"}),e.jsxs(i,{className:"g-2",children:[e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox1",defaultValue:"option1"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"inlineCheckbox1",children:"New Leads"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",defaultValue:"option2"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"inlineCheckbox2",children:"Old Leads"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",defaultValue:"option3"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"inlineCheckbox3",children:"Loss Leads"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox4",defaultValue:"option4"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"inlineCheckbox4",children:"Follow Up"})]})})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(l.Label,{htmlFor:"leadscore",className:"form-label text-muted text-uppercase fw-semibold mb-3",children:"Lead Score"}),e.jsxs(i,{className:"g-2 align-items-center",children:[e.jsx("div",{className:"col-lg",children:e.jsx(l.Control,{type:"number",className:"form-control",id:"leadscore",placeholder:"0"})}),e.jsx("div",{className:"col-lg-auto",children:"To"}),e.jsx("div",{className:"col-lg",children:e.jsx(l.Control,{type:"number",className:"form-control",id:"leadscore",placeholder:"0"})})]})]}),e.jsxs("div",{children:[e.jsx(l.Label,{htmlFor:"leads-tags",className:"form-label text-muted text-uppercase fw-semibold mb-3",children:"Tags"}),e.jsxs(i,{className:"g-3",children:[e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"marketing",defaultValue:"marketing"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"marketing",children:"Marketing"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"management",defaultValue:"management"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"management",children:"Management"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"business",defaultValue:"business"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"business",children:"Business"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"investing",defaultValue:"investing"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"investing",children:"Investing"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"partner",defaultValue:"partner"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"partner",children:"Partner"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"lead",defaultValue:"lead"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"lead",children:"Leads"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"sale",defaultValue:"sale"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"sale",children:"Sale"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"owner",defaultValue:"owner"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"owner",children:"Owner"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"banking",defaultValue:"banking"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"banking",children:"Banking"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"banking",defaultValue:"banking"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"banking",children:"Exiting"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"banking",defaultValue:"banking"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"banking",children:"Finance"})]})}),e.jsx(a,{lg:6,children:e.jsxs("div",{className:"form-check",children:[e.jsx(l.Check.Input,{className:"form-check-input",type:"checkbox",id:"banking",defaultValue:"banking"}),e.jsx(l.Check.Label,{className:"form-check-label",htmlFor:"banking",children:"Fashion"})]})})]})]})]}),e.jsxs("div",{className:"offcanvas-footer border-top p-3 text-center hstack gap-2",children:[e.jsx("button",{className:"btn btn-light w-100",onClick:c,children:"Clear Filter"}),e.jsx("button",{type:"submit",className:"btn btn-success w-100",onClick:c,children:"Filters"})]})]})]})};export{$ as default};
