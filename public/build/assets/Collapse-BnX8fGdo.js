import{c as D}from"./ThemeProvider-CSTTv7nq.js";import{T as j,a as v,s as m,c as G,d as L,E as A,b as B,t as F}from"./TransitionWrapper-RT2fFqbB.js";import{R as h,r as l,j as O}from"./app-CcmPIReT.js";function i(...s){return s.filter(n=>n!=null).reduce((n,o)=>{if(typeof o!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return n===null?o:function(...a){n.apply(this,a),o.apply(this,a)}},null)}const S={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function U(s,n){const o=`offset${s[0].toUpperCase()}${s.slice(1)}`,r=n[o],a=S[s];return r+parseInt(m(n,a[0]),10)+parseInt(m(n,a[1]),10)}const X={[G]:"collapse",[L]:"collapsing",[A]:"collapsing",[B]:"collapse show"},k=h.forwardRef(({onEnter:s,onEntering:n,onEntered:o,onExit:r,onExiting:a,className:g,children:c,dimension:u="height",in:f=!1,timeout:y=300,mountOnEnter:x=!1,unmountOnExit:R=!1,appear:w=!1,getDimensionValue:E=U,...d},I)=>{const t=typeof u=="function"?u():u,T=l.useMemo(()=>i(e=>{e.style[t]="0"},s),[t,s]),N=l.useMemo(()=>i(e=>{const p=`scroll${t[0].toUpperCase()}${t.slice(1)}`;e.style[t]=`${e[p]}px`},n),[t,n]),M=l.useMemo(()=>i(e=>{e.style[t]=null},o),[t,o]),$=l.useMemo(()=>i(e=>{e.style[t]=`${E(t,e)}px`,F(e)},r),[r,E,t]),C=l.useMemo(()=>i(e=>{e.style[t]=null},a),[t,a]);return O.jsx(j,{ref:I,addEndListener:v,...d,"aria-expanded":d.role?f:null,onEnter:T,onEntering:N,onEntered:M,onExit:$,onExiting:C,childRef:c.ref,in:f,timeout:y,mountOnEnter:x,unmountOnExit:R,appear:w,children:(e,p)=>h.cloneElement(c,{...p,className:D(g,c.props.className,X[e],t==="width"&&"collapse-horizontal")})})});export{k as C};