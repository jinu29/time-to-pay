import{t as h,W as j,j as r,R as u,Y as _}from"./app-DAA4umSp.js";import{B as C}from"./BreadCrumb-Bbps-xeQ.js";import{L as g}from"./index-ChknMJM7.js";import{C as v}from"./Container-Cje7132t.js";import{R as p}from"./Row-C8gNVKjv.js";import{C as o}from"./Col-Dd-7fFYa.js";import{C as n}from"./Card-DPRNNE61.js";import{F as e}from"./Form-DxpFrAJe.js";import{B as b}from"./Button-0uHp86Qk.js";import"./index-B8itEOvo.js";import"./logo-sm-DmJR8Lua.js";import"./logo-dark-Dh4DV6bR.js";import"./logo-light-l2wwNDet.js";import"./ReactToastify-jGGXfTHy.js";import"./calender-yWVPQvD3.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./index-XSywm6kh.js";import"./isObject-D7bzW4Uf.js";import"./avatar-2-B-1-S_lh.js";import"./avatar-3-CSm6kh8B.js";import"./avatar-5-D7m8bZ3v.js";import"./avatar-1-PHP4S1R6.js";import"./Dropdown-BMeNbemE.js";import"./ThemeProvider-Cohb_4IJ.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-D5jaPZlz.js";import"./usePrevious-U83WOE4G.js";import"./useForceUpdate-CMi1GG9F.js";import"./useEventCallback-DazKxGTp.js";import"./useCallbackRef-BHXXgk_h.js";import"./mergeOptionsWithPopperConfig-BfRC57Rj.js";import"./useMounted-CtcQznzv.js";import"./useWindow-C1j0nj5K.js";import"./NavContext-BMmZtpsL.js";import"./Button-Cm1f8AqA.js";import"./DataKey-DjdvojM5.js";import"./hook-CZF_VRVT.js";import"./extends-CF3RwP-h.js";import"./useMergedRefs-CgdBK-bJ.js";import"./Anchor-DRo_1xWF.js";import"./InputGroupContext-CZ5D-Tve.js";import"./NavbarContext-CNhhZldJ.js";import"./Collapse-CLExACe_.js";import"./TransitionWrapper-Z6ZdfMDi.js";import"./setPrototypeOf-DgZC2w_0.js";import"./CardHeaderContext-DP7KM0Ib.js";import"./divWithClassName-C3FyiOjc.js";import"./ElementChildren-CSrO72FP.js";const y=()=>{const{settings:t}=h().props,{data:m,setData:d,post:x,processing:l,errors:i}=j({email_smtp:t.email_smtp||"",email_port:t.email_port||"",email_username:t.email_username||"",email_password:t.email_password||""}),a=s=>{d(s.target.id,s.target.value)},c=s=>{s.preventDefault(),x(route("settings.update"),m)};return r.jsxs(u.Fragment,{children:[r.jsx(_,{title:"Email OTP Conf | Time to Pay"}),r.jsx("div",{className:"page-content",children:r.jsxs(v,{fluid:!0,children:[r.jsx(C,{title:"Email OTP Configuration",pageTitle:"Dashboard"}),r.jsx(p,{className:"gy-4",children:r.jsx(o,{children:r.jsx(n,{children:r.jsx(n.Body,{children:r.jsx(e,{onSubmit:c,children:r.jsxs(p,{className:"gy-4",children:[r.jsx(o,{xxl:3,md:6,children:r.jsxs(e.Group,{children:[r.jsx(e.Label,{htmlFor:"email_smtp",children:"SMTP Server"}),r.jsx(e.Control,{type:"text",id:"email_smtp",value:m.email_smtp,onChange:a,placeholder:"SMTP Server",isInvalid:!!i.email_smtp}),i.email_smtp&&r.jsx(e.Control.Feedback,{type:"invalid",children:i.email_smtp})]})}),r.jsx(o,{xxl:3,md:6,children:r.jsxs(e.Group,{children:[r.jsx(e.Label,{htmlFor:"email_port",children:"SMTP Port"}),r.jsx(e.Control,{type:"text",id:"email_port",value:m.email_port,onChange:a,placeholder:"SMTP Port",isInvalid:!!i.email_port}),i.email_port&&r.jsx(e.Control.Feedback,{type:"invalid",children:i.email_port})]})}),r.jsx(o,{xxl:3,md:6,children:r.jsxs(e.Group,{children:[r.jsx(e.Label,{htmlFor:"email_username",children:"SMTP Username"}),r.jsx(e.Control,{type:"text",id:"email_username",value:m.email_username,onChange:a,placeholder:"SMTP Username",isInvalid:!!i.email_username}),i.email_username&&r.jsx(e.Control.Feedback,{type:"invalid",children:i.email_username})]})}),r.jsx(o,{xxl:3,md:6,children:r.jsxs(e.Group,{children:[r.jsx(e.Label,{htmlFor:"email_password",children:"SMTP Password"}),r.jsx(e.Control,{type:"password",id:"email_password",value:m.email_password,onChange:a,placeholder:"SMTP Password",isInvalid:!!i.email_password}),i.email_password&&r.jsx(e.Control.Feedback,{type:"invalid",children:i.email_password})]})}),r.jsx(o,{xs:12,children:r.jsx(b,{className:"btn btn-primary",type:"submit",disabled:l,children:l?"Updating...":"Update"})})]})})})})})})]})})]})};y.layout=t=>r.jsx(g,{children:t});export{y as default};