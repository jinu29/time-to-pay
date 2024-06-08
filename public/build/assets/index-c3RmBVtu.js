import{q as x,W as _,j as e,R as u,Y as y}from"./app-CcmPIReT.js";import{B as j}from"./BreadCrumb-CVy8OvG9.js";import{L as k}from"./index-DyNFT7ts.js";import{C as v}from"./Container-CbzZz-pG.js";import{R as a}from"./Row-BpZuzSWn.js";import{C as i}from"./Col-BT99caCr.js";import{C as m}from"./Card-yrIYSTOn.js";import{F as t}from"./Form-D5C7AGxv.js";import{B as C}from"./Button-CjmBuVFy.js";import"./index-E0pRXvh2.js";import"./logo-sm-DmJR8Lua.js";import"./logo-dark-Dh4DV6bR.js";import"./logo-light-l2wwNDet.js";import"./ReactToastify-hOsVGs7O.js";import"./calender-6pYCF-Qi.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./index-B9sCdwnn.js";import"./isObject-U9U2HXiq.js";import"./avatar-2-B-1-S_lh.js";import"./avatar-3-CSm6kh8B.js";import"./avatar-5-D7m8bZ3v.js";import"./avatar-1-PHP4S1R6.js";import"./Dropdown-CZ6gxq-L.js";import"./ThemeProvider-CSTTv7nq.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-DsKskV_g.js";import"./usePrevious-DNpMYT0V.js";import"./useForceUpdate-szFTueT1.js";import"./useEventCallback-BJse7mIf.js";import"./useCallbackRef-DOaTl7z1.js";import"./mergeOptionsWithPopperConfig-CF0vfbBt.js";import"./useMounted-Bja3_6ae.js";import"./useWindow-CvUQe0g5.js";import"./NavContext-DwPeOdq-.js";import"./Button-CAE2U-yP.js";import"./DataKey-DjdvojM5.js";import"./hook-D61oMDbP.js";import"./extends-BFqQA52f.js";import"./useMergedRefs-C3j-VvFq.js";import"./Anchor-x2SFhHNR.js";import"./InputGroupContext-BY31koS2.js";import"./NavbarContext-CDqv-Zet.js";import"./Collapse-BnX8fGdo.js";import"./TransitionWrapper-RT2fFqbB.js";import"./setPrototypeOf-DgZC2w_0.js";import"./CardHeaderContext-C52wv7vf.js";import"./divWithClassName-CM1F4fkU.js";import"./ElementChildren-BwLiqz1a.js";const b=()=>{const{settings:o}=x().props,{data:s,setData:c,post:p,processing:n,errors:r}=_({prod_url:o.prod_url||"",dev_key:o.dev_key||"",secret_key:o.secret_key||"",secret_key_timestamp:o.secret_key_timestamp||"",initiator_id:o.initiator_id||"",customer_id:o.customer_id||"",authenticator_key:o.authenticator_key||"",user_code:o.user_code||""}),l=d=>{console.log("jhi",d.target.id,d.target.value),c(d.target.id,d.target.value)},h=d=>{d.preventDefault(),p(route("settings.update"),s)};return e.jsxs(u.Fragment,{children:[e.jsx(y,{title:"EKO |Time to Pay"}),e.jsx("div",{className:"page-content",children:e.jsxs(v,{fluid:!0,children:[e.jsx(j,{title:"EKO",pageTitle:"Dashboard"}),e.jsx(a,{className:"gy-4",children:e.jsx(i,{children:e.jsx(a,{className:"gy-4",children:e.jsx(i,{children:e.jsx(m,{children:e.jsx(m.Body,{children:e.jsx(t,{onSubmit:h,children:e.jsxs(a,{className:"gy-4",children:[e.jsx(i,{xxl:3,md:6,children:e.jsxs(t.Group,{children:[e.jsx(t.Label,{htmlFor:"prod_url",children:"Prod URL"}),e.jsx(t.Control,{type:"text",id:"prod_url",value:s.prod_url,onChange:l,placeholder:"Prod URL",isInvalid:!!r.prod_url}),r.prod_url&&e.jsx(t.Control.Feedback,{type:"invalid",children:r.prod_url})]})}),e.jsx(i,{xxl:3,md:6,children:e.jsxs(t.Group,{children:[e.jsx(t.Label,{htmlFor:"dev_key",children:"Developer Key"}),e.jsx(t.Control,{type:"text",id:"dev_key",value:s.dev_key,onChange:l,placeholder:"Developer Key",isInvalid:!!r.dev_key}),r.dev_key&&e.jsx(t.Control.Feedback,{type:"invalid",children:r.dev_key})]})}),e.jsx(i,{xxl:3,md:6,children:e.jsxs(t.Group,{children:[e.jsx(t.Label,{htmlFor:"secret_key",children:"Secret Key"}),e.jsx(t.Control,{type:"text",id:"secret_key",value:s.secret_key,onChange:l,placeholder:"Secret Key",isInvalid:!!r.secret_key}),r.secret_key&&e.jsx(t.Control.Feedback,{type:"invalid",children:r.secret_key})]})}),e.jsx(i,{xxl:3,md:6,children:e.jsxs(t.Group,{children:[e.jsx(t.Label,{htmlFor:"secret_key_timestamp",children:"Secret Key Timestamp"}),e.jsx(t.Control,{type:"text",id:"secret_key_timestamp",value:s.secret_key_timestamp,onChange:l,placeholder:"Secret Key Timestamp",isInvalid:!!r.secret_key_timestamp}),r.secret_key_timestamp&&e.jsx(t.Control.Feedback,{type:"invalid",children:r.secret_key_timestamp})]})}),e.jsx(i,{xxl:3,md:6,children:e.jsxs(t.Group,{children:[e.jsx(t.Label,{htmlFor:"initiator_id",children:"Initiator ID"}),e.jsx(t.Control,{type:"text",id:"initiator_id",value:s.initiator_id,onChange:l,placeholder:"Initiator ID",isInvalid:!!r.initiator_id}),r.initiator_id&&e.jsx(t.Control.Feedback,{type:"invalid",children:r.initiator_id})]})}),e.jsx(i,{xxl:3,md:6,children:e.jsxs(t.Group,{children:[e.jsx(t.Label,{htmlFor:"customer_id",children:"Customer ID"}),e.jsx(t.Control,{type:"text",id:"customer_id",value:s.customer_id,onChange:l,placeholder:"Customer ID",isInvalid:!!r.customer_id}),r.customer_id&&e.jsx(t.Control.Feedback,{type:"invalid",children:r.customer_id})]})}),e.jsx(i,{xxl:3,md:6,children:e.jsxs(t.Group,{children:[e.jsx(t.Label,{htmlFor:"authenticator_key",children:"Authenticator Key"}),e.jsx(t.Control,{type:"text",id:"authenticator_key",value:s.authenticator_key,onChange:l,placeholder:"Authenticator Key",isInvalid:!!r.authenticator_key}),r.authenticator_key&&e.jsx(t.Control.Feedback,{type:"invalid",children:r.authenticator_key})]})}),e.jsx(i,{xxl:3,md:6,children:e.jsxs(t.Group,{children:[e.jsx(t.Label,{htmlFor:"user_code",children:"User Code"}),e.jsx(t.Control,{type:"text",id:"user_code",value:s.user_code,onChange:l,placeholder:"User Code",isInvalid:!!r.user_code}),r.user_code&&e.jsx(t.Control.Feedback,{type:"invalid",children:r.user_code})]})}),e.jsx(i,{xs:12,children:e.jsx(C,{className:"btn btn-primary",type:"submit",disabled:n,children:n?"Updating...":"Update"})})]})})})})})})})})]})})]})};b.layout=o=>e.jsx(k,{children:o});export{b as default};