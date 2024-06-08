import{q as u,W as g,r as C,j as s,Y as S}from"./app-CcmPIReT.js";import{B as w}from"./BreadCrumb-CVy8OvG9.js";import{L as b}from"./index-DyNFT7ts.js";import{a as v,F as f}from"./index-Djn2Opdr.js";import{C as F}from"./Container-CbzZz-pG.js";import{R as p}from"./Row-BpZuzSWn.js";import{C as i}from"./Col-BT99caCr.js";import{C as d}from"./Card-yrIYSTOn.js";import{F as e}from"./Form-D5C7AGxv.js";import{B as c}from"./Button-CjmBuVFy.js";import"./index-E0pRXvh2.js";import"./logo-sm-DmJR8Lua.js";import"./logo-dark-Dh4DV6bR.js";import"./logo-light-l2wwNDet.js";import"./ReactToastify-hOsVGs7O.js";import"./calender-6pYCF-Qi.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./index-B9sCdwnn.js";import"./isObject-U9U2HXiq.js";import"./avatar-2-B-1-S_lh.js";import"./avatar-3-CSm6kh8B.js";import"./avatar-5-D7m8bZ3v.js";import"./avatar-1-PHP4S1R6.js";import"./Dropdown-CZ6gxq-L.js";import"./ThemeProvider-CSTTv7nq.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-DsKskV_g.js";import"./usePrevious-DNpMYT0V.js";import"./useForceUpdate-szFTueT1.js";import"./useEventCallback-BJse7mIf.js";import"./useCallbackRef-DOaTl7z1.js";import"./mergeOptionsWithPopperConfig-CF0vfbBt.js";import"./useMounted-Bja3_6ae.js";import"./useWindow-CvUQe0g5.js";import"./NavContext-DwPeOdq-.js";import"./Button-CAE2U-yP.js";import"./DataKey-DjdvojM5.js";import"./hook-D61oMDbP.js";import"./extends-BFqQA52f.js";import"./useMergedRefs-C3j-VvFq.js";import"./Anchor-x2SFhHNR.js";import"./InputGroupContext-BY31koS2.js";import"./NavbarContext-CDqv-Zet.js";import"./Collapse-BnX8fGdo.js";import"./TransitionWrapper-RT2fFqbB.js";import"./setPrototypeOf-DgZC2w_0.js";import"./CardHeaderContext-C52wv7vf.js";import"./divWithClassName-CM1F4fkU.js";import"./ElementChildren-BwLiqz1a.js";const k=()=>{const{settings:t}=u().props,{data:o,setData:_,post:h,processing:l,errors:r}=g({sms_gateway_url:t.sms_gateway_url||"",sms_api_key:t.sms_api_key||"",sms_sender_id:t.sms_sender_id||"",sms_username:t.sms_username||"",sms_password:t.sms_password||"",encryption_type:t.encryption_type||""}),[m,y]=C.useState(!1),a=n=>{_(n.target.id,n.target.value)},x=n=>{n.preventDefault(),h(route("settings.MobileConfUpdate"),o)},j=()=>{y(!m)};return s.jsxs(s.Fragment,{children:[s.jsx(S,{title:"Mobile Configuration | Time to Pay"}),s.jsx("div",{className:"page-content",children:s.jsxs(F,{fluid:!0,children:[s.jsx(w,{title:"Mobile Configuration",pageTitle:"Dashboard"}),s.jsx(p,{className:"gy-4",children:s.jsx(i,{children:s.jsx(d,{children:s.jsx(d.Body,{children:s.jsx(e,{onSubmit:x,children:s.jsxs(p,{className:"gy-4",children:[s.jsx(i,{md:6,children:s.jsxs(e.Group,{children:[s.jsx(e.Label,{htmlFor:"sms_gateway_url",children:"SMS Gateway URL"}),s.jsx(e.Control,{type:"text",id:"sms_gateway_url",value:o.sms_gateway_url,onChange:a,placeholder:"SMS Gateway URL",isInvalid:!!r.sms_gateway_url}),r.sms_gateway_url&&s.jsx(e.Control.Feedback,{type:"invalid",children:r.sms_gateway_url})]})}),s.jsx(i,{md:6,children:s.jsxs(e.Group,{children:[s.jsx(e.Label,{htmlFor:"sms_api_key",children:"SMS API Key"}),s.jsx(e.Control,{type:"text",id:"sms_api_key",value:o.sms_api_key,onChange:a,placeholder:"SMS API Key",isInvalid:!!r.sms_api_key}),r.sms_api_key&&s.jsx(e.Control.Feedback,{type:"invalid",children:r.sms_api_key})]})}),s.jsx(i,{md:6,children:s.jsxs(e.Group,{children:[s.jsx(e.Label,{htmlFor:"sms_sender_id",children:"SMS Sender ID"}),s.jsx(e.Control,{type:"text",id:"sms_sender_id",value:o.sms_sender_id,onChange:a,placeholder:"SMS Sender ID",isInvalid:!!r.sms_sender_id}),r.sms_sender_id&&s.jsx(e.Control.Feedback,{type:"invalid",children:r.sms_sender_id})]})}),s.jsx(i,{md:6,children:s.jsxs(e.Group,{children:[s.jsx(e.Label,{htmlFor:"sms_username",children:"SMS Username"}),s.jsx(e.Control,{type:"text",id:"sms_username",value:o.sms_username,onChange:a,placeholder:"SMS Username",isInvalid:!!r.sms_username}),r.sms_username&&s.jsx(e.Control.Feedback,{type:"invalid",children:r.sms_username})]})}),s.jsx(i,{md:6,children:s.jsxs(e.Group,{children:[s.jsx(e.Label,{htmlFor:"sms_password",children:"SMS Password"}),s.jsxs("div",{className:"input-group",children:[s.jsx(e.Control,{type:m?"text":"password",id:"sms_password",value:o.sms_password,onChange:a,placeholder:"SMS Password",isInvalid:!!r.sms_password}),s.jsx(c,{variant:"outline-secondary",onClick:j,tabIndex:"-1",children:m?s.jsx(v,{}):s.jsx(f,{})})]}),r.sms_password&&s.jsx(e.Control.Feedback,{type:"invalid",children:r.sms_password})]})}),s.jsx(i,{md:6,children:s.jsxs(e.Group,{children:[s.jsx(e.Label,{htmlFor:"encryption_type",children:"Encryption Type"}),s.jsxs(e.Control,{as:"select",id:"encryption_type",value:o.encryption_type,onChange:a,isInvalid:!!r.encryption_type,children:[s.jsx("option",{value:"",children:"Select Encryption Type"}),s.jsx("option",{value:"ssl",children:"SSL"}),s.jsx("option",{value:"tls",children:"TLS"})]}),r.encryption_type&&s.jsx(e.Control.Feedback,{type:"invalid",children:r.encryption_type})]})}),s.jsx(i,{xs:12,children:s.jsx(c,{className:"btn btn-primary",type:"submit",disabled:l,children:l?"Updating...":"Update"})})]})})})})})})]})})]})};k.layout=t=>s.jsx(b,{children:t});export{k as default};
