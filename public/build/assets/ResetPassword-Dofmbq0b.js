import{W as u,r as f,j as e,R as b,Y as N,b as a}from"./app-D3qFl5QJ.js";import{G as g}from"./GuestLayout-nigK419R.js";import{l as w}from"./logo-light-l2wwNDet.js";import{C as v}from"./Container-CWCo5PJe.js";import{R as i}from"./Row-tEjiKZiJ.js";import{C as m}from"./Col-CbVAoDNW.js";import{C as l}from"./Card-oM_CSodH.js";import{A as y}from"./Alert-DbOrgY9r.js";import{F as r}from"./Form-B3O-MepU.js";import{B as C}from"./Button-8BG1yInr.js";import"./ThemeProvider-TIbVUJ6I.js";import"./CardHeaderContext-1u13MfXj.js";import"./divWithClassName-ehbO6ZdE.js";import"./hook-5wmmorCC.js";import"./extends-CF3RwP-h.js";import"./useMergedRefs-GCentTCM.js";import"./useEventCallback-UvAaEcyh.js";import"./Anchor-CBJHYeB7.js";import"./Button-DiXNu-Xz.js";import"./Fade-CAJ1Bm1W.js";import"./TransitionWrapper-D-qpilnv.js";import"./listen-DOhMskc_.js";import"./setPrototypeOf-DgZC2w_0.js";import"./CloseButton-tNq7qgMc.js";import"./index-B9h42nwt.js";import"./ElementChildren-CJCNM75t.js";function X({token:o,email:n}){const{data:c,setData:d,post:p,processing:x,errors:t,reset:h}=u({token:o,email:n,password:"",password_confirmation:""});f.useEffect(()=>()=>{h("password","password_confirmation")},[]);const j=s=>{s.preventDefault(),p(route("password.store"))};return e.jsx(b.Fragment,{children:e.jsxs(g,{children:[e.jsx(N,{title:"Reset Password | Velzon - React Admin & Dashboard Template"}),e.jsx("div",{className:"auth-page-content mt-lg-5",children:e.jsxs(v,{children:[e.jsx(i,{children:e.jsx(m,{lg:12,children:e.jsxs("div",{className:"text-center mt-sm-5 mb-4 text-white-50",children:[e.jsx("div",{children:e.jsx(a,{href:"/#",className:"d-inline-block auth-logo",children:e.jsx("img",{src:w,alt:"",height:"20"})})}),e.jsx("p",{className:"mt-3 fs-15 fw-semibold",children:"Premium Admin & Dashboard Template"})]})})}),e.jsx(i,{className:"justify-content-center",children:e.jsxs(m,{md:8,lg:6,xl:5,children:[e.jsx(l,{className:"mt-4 card-bg-fill",children:e.jsxs(l.Body,{className:"p-4",children:[e.jsxs("div",{className:"text-center mt-2",children:[e.jsx("h5",{className:"text-primary",children:"Forgot Password?"}),e.jsx("p",{className:"text-muted",children:"Reset password with velzon"}),e.jsx("i",{className:"ri-mail-send-line display-5 text-success"})]}),e.jsx(y,{className:"border-0 alert-warning text-center mb-2 mx-2",role:"alert",children:"Enter your email and instructions will be sent to you!"}),e.jsx("div",{className:"p-2",children:e.jsxs("form",{onSubmit:j,children:[e.jsxs("div",{children:[e.jsx(r.Label,{htmlFor:"email",value:"Email",className:"form-label",children:" Email "}),e.jsx("span",{className:"text-danger ms-1",children:"*"}),e.jsx(r.Control,{id:"email",type:"email",name:"email",placeholder:"Enter Email",value:c.email,className:"mt-1 form-control"+t.email?"is-invalid":"",autoComplete:"username",onChange:s=>d("email",s.target.value),required:!0}),e.jsx(r.Control.Feedback,{type:"invalid",className:"mt-2 d-block",children:t.email})]}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(C,{type:"submit",className:"btn btn-primary w-100",disabled:x,children:"Send Reset Link"})})]})})]})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsxs("p",{className:"mb-0",children:["Wait, I remember my password... ",e.jsx(a,{href:route("login"),className:"fw-bold text-primary text-decoration-underline",children:" Click here "})," "]})})]})})]})})]})})}export{X as default};
