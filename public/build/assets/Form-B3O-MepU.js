import{c as d,u as i}from"./ThemeProvider-TIbVUJ6I.js";import{P as h}from"./index-B9h42nwt.js";import{r,j as l}from"./app-D3qFl5QJ.js";import{h as J}from"./ElementChildren-CJCNM75t.js";import{C as K}from"./Col-CbVAoDNW.js";const Q={type:h.string,tooltip:h.bool,as:h.elementType},N=r.forwardRef(({as:e="div",className:a,type:o="valid",tooltip:s=!1,...t},n)=>l.jsx(e,{...t,ref:n,className:d(a,`${o}-${s?"tooltip":"feedback"}`)}));N.displayName="Feedback";N.propTypes=Q;const u=r.createContext({}),$=r.forwardRef(({id:e,bsPrefix:a,className:o,type:s="checkbox",isValid:t=!1,isInvalid:n=!1,as:m="input",...p},f)=>{const{controlId:c}=r.useContext(u);return a=i(a,"form-check-input"),l.jsx(m,{...p,ref:f,type:s,id:e||c,className:d(o,a,t&&"is-valid",n&&"is-invalid")})});$.displayName="FormCheckInput";const y=r.forwardRef(({bsPrefix:e,className:a,htmlFor:o,...s},t)=>{const{controlId:n}=r.useContext(u);return e=i(e,"form-check-label"),l.jsx("label",{...s,ref:t,htmlFor:o||n,className:d(a,e)})});y.displayName="FormCheckLabel";const O=r.forwardRef(({id:e,bsPrefix:a,bsSwitchPrefix:o,inline:s=!1,reverse:t=!1,disabled:n=!1,isValid:m=!1,isInvalid:p=!1,feedbackTooltip:f=!1,feedback:c,feedbackType:F,className:C,style:w,title:v="",type:g="checkbox",label:x,children:R,as:q="input",...z},A)=>{a=i(a,"form-check"),o=i(o,"form-switch");const{controlId:L}=r.useContext(u),D=r.useMemo(()=>({controlId:e||L}),[L,e]),T=!R&&x!=null&&x!==!1||J(R,y),H=l.jsx($,{...z,type:g==="switch"?"checkbox":g,ref:A,isValid:m,isInvalid:p,disabled:n,as:q});return l.jsx(u.Provider,{value:D,children:l.jsx("div",{style:w,className:d(C,T&&a,s&&`${a}-inline`,t&&`${a}-reverse`,g==="switch"&&o),children:R||l.jsxs(l.Fragment,{children:[H,T&&l.jsx(y,{title:v,children:x}),c&&l.jsx(N,{type:F,tooltip:f,children:c})]})})})});O.displayName="FormCheck";const j=Object.assign(O,{Input:$,Label:y}),S=r.forwardRef(({bsPrefix:e,type:a,size:o,htmlSize:s,id:t,className:n,isValid:m=!1,isInvalid:p=!1,plaintext:f,readOnly:c,as:F="input",...C},w)=>{const{controlId:v}=r.useContext(u);return e=i(e,"form-control"),l.jsx(F,{...C,type:a,size:s,ref:w,readOnly:c,id:t||v,className:d(n,f?`${e}-plaintext`:e,o&&`${e}-${o}`,a==="color"&&`${e}-color`,m&&"is-valid",p&&"is-invalid")})});S.displayName="FormControl";const U=Object.assign(S,{Feedback:N}),G=r.forwardRef(({className:e,bsPrefix:a,as:o="div",...s},t)=>(a=i(a,"form-floating"),l.jsx(o,{ref:t,className:d(e,a),...s})));G.displayName="FormFloating";const k=r.forwardRef(({controlId:e,as:a="div",...o},s)=>{const t=r.useMemo(()=>({controlId:e}),[e]);return l.jsx(u.Provider,{value:t,children:l.jsx(a,{...o,ref:s})})});k.displayName="FormGroup";const E=r.forwardRef(({as:e="label",bsPrefix:a,column:o=!1,visuallyHidden:s=!1,className:t,htmlFor:n,...m},p)=>{const{controlId:f}=r.useContext(u);a=i(a,"form-label");let c="col-form-label";typeof o=="string"&&(c=`${c} ${c}-${o}`);const F=d(t,a,s&&"visually-hidden",o&&c);return n=n||f,o?l.jsx(K,{ref:p,as:"label",className:F,htmlFor:n,...m}):l.jsx(e,{ref:p,className:F,htmlFor:n,...m})});E.displayName="FormLabel";const M=r.forwardRef(({bsPrefix:e,className:a,id:o,...s},t)=>{const{controlId:n}=r.useContext(u);return e=i(e,"form-range"),l.jsx("input",{...s,type:"range",ref:t,className:d(a,e),id:o||n})});M.displayName="FormRange";const b=r.forwardRef(({bsPrefix:e,size:a,htmlSize:o,className:s,isValid:t=!1,isInvalid:n=!1,id:m,...p},f)=>{const{controlId:c}=r.useContext(u);return e=i(e,"form-select"),l.jsx("select",{...p,size:o,ref:f,className:d(s,e,a&&`${e}-${a}`,t&&"is-valid",n&&"is-invalid"),id:m||c})});b.displayName="FormSelect";const B=r.forwardRef(({bsPrefix:e,className:a,as:o="small",muted:s,...t},n)=>(e=i(e,"form-text"),l.jsx(o,{...t,ref:n,className:d(a,e,s&&"text-muted")})));B.displayName="FormText";const V=r.forwardRef((e,a)=>l.jsx(j,{...e,ref:a,type:"switch"}));V.displayName="Switch";const W=Object.assign(V,{Input:j.Input,Label:j.Label}),_=r.forwardRef(({bsPrefix:e,className:a,children:o,controlId:s,label:t,...n},m)=>(e=i(e,"form-floating"),l.jsxs(k,{ref:m,className:d(a,e),controlId:s,...n,children:[o,l.jsx("label",{htmlFor:s,children:t})]})));_.displayName="FloatingLabel";const X={_ref:h.any,validated:h.bool,as:h.elementType},I=r.forwardRef(({className:e,validated:a,as:o="form",...s},t)=>l.jsx(o,{...s,ref:t,className:d(e,a&&"was-validated")}));I.displayName="Form";I.propTypes=X;const oe=Object.assign(I,{Group:k,Control:U,Floating:G,Check:j,Switch:W,Label:E,Text:B,Range:M,Select:b,FloatingLabel:_});export{oe as F,_ as a,$ as b,k as c};
