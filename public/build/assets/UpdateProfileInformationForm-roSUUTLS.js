import{j as e,R as x,t as g,W as v,b}from"./app-DAEZisrD.js";import{C as n}from"./Col-B8aG_WSb.js";import{C as d}from"./Card-BqoKCbez.js";import{F as t}from"./Form-CUYJsc4D.js";import{R as y}from"./Row-DP2h-Y3A.js";import{B as N}from"./Button-BSuMOxsW.js";import{q as k}from"./transition-CtV07GKf.js";import"./ThemeProvider-DpO2Fe9x.js";import"./CardHeaderContext-BqF8ZhAg.js";import"./divWithClassName-DBqZ_0ZL.js";import"./index-7MB6meGS.js";import"./ElementChildren-C5X_W_ol.js";import"./Button-a_Mq9XKy.js";function u({message:r,className:s="",...o}){return r?e.jsx(x.Fragment,{children:e.jsx("p",{...o,className:"invalid-feedback "+s,children:r})}):null}function _({mustVerifyEmail:r,status:s,className:o=""}){const i=g().props.auth.user,{data:l,setData:m,patch:f,errors:c,processing:p,recentlySuccessful:h}=v({name:i.name,email:i.email}),j=a=>{a.preventDefault(),f(route("profile.update"))};return e.jsx(x.Fragment,{children:e.jsxs(n,{children:[e.jsx("h2",{children:"Profile Information"}),e.jsxs(d,{children:[e.jsx("p",{className:"text-muted p-2",children:"Update your account's profile information and email address."}),e.jsx(d.Body,{children:e.jsxs(t,{onSubmit:j,className:"mt-6 space-y-6",children:[e.jsxs(y,{children:[e.jsxs(n,{lg:6,children:[e.jsx(t.Label,{htmlFor:"name",value:"Name",children:"Name"}),e.jsx(t.Control,{id:"name",className:"mt-1 block w-full border",value:l.name,onChange:a=>m("name",a.target.value),required:!0,autoFocus:!0,autoComplete:"name"}),e.jsx(u,{className:"mt-2",message:c.name})]}),e.jsxs(n,{lg:6,children:[e.jsx(t.Label,{htmlFor:"email",value:"Email",children:"Email "}),e.jsx(t.Control,{id:"email",type:"email",className:"mt-1 block w-full border",value:l.email,onChange:a=>m("email",a.target.value),required:!0,autoComplete:"username"}),e.jsx(u,{className:"mt-2",message:c.email})]})]}),r&&i.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800 dark:text-gray-200",children:["Your email address is unverified.",e.jsx(b,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Click here to re-send the verification email."})]}),s==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600 dark:text-green-400",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4 mt-4",children:[e.jsx(N,{variant:"success",disabled:p,type:"submit",className:"btn btn-success",children:"Save"}),e.jsx(k,{show:h,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0"})]})]})})]})]})})}export{_ as default};