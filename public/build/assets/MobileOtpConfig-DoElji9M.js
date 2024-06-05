import{t as c,W as h,j as s,R as u,Y as j}from"./app-CXzX9V26.js";import{B as y}from"./BreadCrumb-e1E3OoQD.js";import{L as g}from"./index-NamOIY2m.js";import{C}from"./Container-BU1N2uwB.js";import{R as l}from"./Row-DhHIRFCn.js";import{C as t}from"./Col-Dt6QjEHh.js";import{C as d}from"./Card-T74en1UL.js";import{F as r}from"./Form-DVWYbqHn.js";import{B as w}from"./Button-DXn6adDE.js";import"./index-D7tuWwSQ.js";import"./logo-sm-DmJR8Lua.js";import"./logo-dark-Dh4DV6bR.js";import"./logo-light-l2wwNDet.js";import"./ReactToastify-YlgDtxs0.js";import"./calender-yWVPQvD3.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./index-j5Rupiz8.js";import"./isObject-D7bzW4Uf.js";import"./avatar-2-B-1-S_lh.js";import"./avatar-3-CSm6kh8B.js";import"./avatar-5-D7m8bZ3v.js";import"./avatar-1-PHP4S1R6.js";import"./Dropdown-DKYuDuvZ.js";import"./ThemeProvider-Cv4XkNP1.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-DIiAeLAb.js";import"./usePrevious-Dj1w-qoo.js";import"./useForceUpdate-CYx9gphn.js";import"./useEventCallback-BAVHBbmE.js";import"./useCallbackRef-DLH5EmIJ.js";import"./mergeOptionsWithPopperConfig-C8x5tM--.js";import"./useMounted-D03lgtLh.js";import"./useWindow-BaeaCz4O.js";import"./NavContext-DVJUvZaS.js";import"./Button-FKKDUcGS.js";import"./DataKey-DjdvojM5.js";import"./hook-8n69ojBV.js";import"./extends-CF3RwP-h.js";import"./useMergedRefs-B94dM63O.js";import"./Anchor-DRhp1oey.js";import"./InputGroupContext-DEABkj-S.js";import"./NavbarContext-C0ag5-IR.js";import"./Collapse-DVGbcFmR.js";import"./TransitionWrapper-Dz67Upm7.js";import"./setPrototypeOf-DgZC2w_0.js";import"./CardHeaderContext-DPoaQ21b.js";import"./divWithClassName-B39ypLiO.js";import"./ElementChildren-BfgQ-YuR.js";const b=()=>{const{settings:i}=c().props,{data:o,setData:p,post:_,processing:n,errors:e}=h({sms_gateway_url:i.sms_gateway_url||"",sms_api_key:i.sms_api_key||"",sms_sender_id:i.sms_sender_id||"",sms_username:i.sms_username||"",sms_password:i.sms_password||""}),m=a=>{p(a.target.id,a.target.value)},x=a=>{a.preventDefault(),_(route("settings.update"),o)};return s.jsxs(u.Fragment,{children:[s.jsx(j,{title:"Mobile OTP Conf | Time to Pay"}),s.jsx("div",{className:"page-content",children:s.jsxs(C,{fluid:!0,children:[s.jsx(y,{title:"Mobile OTP Configuration",pageTitle:"Dashboard"}),s.jsx(l,{className:"gy-4",children:s.jsx(t,{children:s.jsx(d,{children:s.jsx(d.Body,{children:s.jsx(r,{onSubmit:x,children:s.jsxs(l,{className:"gy-4",children:[s.jsx(t,{xxl:3,md:6,children:s.jsxs(r.Group,{children:[s.jsx(r.Label,{htmlFor:"sms_gateway_url",children:"SMS Gateway URL"}),s.jsx(r.Control,{type:"text",id:"sms_gateway_url",value:o.sms_gateway_url,onChange:m,placeholder:"SMS Gateway URL",isInvalid:!!e.sms_gateway_url}),e.sms_gateway_url&&s.jsx(r.Control.Feedback,{type:"invalid",children:e.sms_gateway_url})]})}),s.jsx(t,{xxl:3,md:6,children:s.jsxs(r.Group,{children:[s.jsx(r.Label,{htmlFor:"sms_api_key",children:"API Key"}),s.jsx(r.Control,{type:"text",id:"sms_api_key",value:o.sms_api_key,onChange:m,placeholder:"API Key",isInvalid:!!e.sms_api_key}),e.sms_api_key&&s.jsx(r.Control.Feedback,{type:"invalid",children:e.sms_api_key})]})}),s.jsx(t,{xxl:3,md:6,children:s.jsxs(r.Group,{children:[s.jsx(r.Label,{htmlFor:"sms_sender_id",children:"Sender ID"}),s.jsx(r.Control,{type:"text",id:"sms_sender_id",value:o.sms_sender_id,onChange:m,placeholder:"Sender ID",isInvalid:!!e.sms_sender_id}),e.sms_sender_id&&s.jsx(r.Control.Feedback,{type:"invalid",children:e.sms_sender_id})]})}),s.jsx(t,{xxl:3,md:6,children:s.jsxs(r.Group,{children:[s.jsx(r.Label,{htmlFor:"sms_username",children:"Username"}),s.jsx(r.Control,{type:"text",id:"sms_username",value:o.sms_username,onChange:m,placeholder:"Username",isInvalid:!!e.sms_username}),e.sms_username&&s.jsx(r.Control.Feedback,{type:"invalid",children:e.sms_username})]})}),s.jsx(t,{xxl:3,md:6,children:s.jsxs(r.Group,{children:[s.jsx(r.Label,{htmlFor:"sms_password",children:"Password"}),s.jsx(r.Control,{type:"password",id:"sms_password",value:o.sms_password,onChange:m,placeholder:"Password",isInvalid:!!e.sms_password}),e.sms_password&&s.jsx(r.Control.Feedback,{type:"invalid",children:e.sms_password})]})}),s.jsx(t,{xs:12,children:s.jsx(w,{className:"btn btn-primary",type:"submit",disabled:n,children:n?"Updating...":"Update"})})]})})})})})})]})})]})};b.layout=i=>s.jsx(g,{children:i});export{b as default};
