import{o as Et,c as vt,l as K}from"./listen-DOhMskc_.js";import{u as X,c as H}from"./useWindow-DNutj8bq.js";import{r as l,j as d,v as Tt}from"./app-D3qFl5QJ.js";import{u as bt}from"./useMounted-Cej8hYIm.js";import{u as xt}from"./useWillUnmount-C4Nc5QRD.js";import{u as yt}from"./usePrevious-Btyv44Lm.js";import{u as h}from"./useEventCallback-UvAaEcyh.js";import{u as Ct,i as Rt,r as G,h as Mt}from"./hasClass-C1kJTKdw.js";import{s as g}from"./TransitionWrapper-D-qpilnv.js";import{q as u}from"./querySelectorAll-Cwpyv69p.js";import{d as kt}from"./DataKey-DjdvojM5.js";import{C as wt}from"./CloseButton-tNq7qgMc.js";function w(o){o===void 0&&(o=Et());try{var t=o.activeElement;return!t||!t.nodeName?null:t}catch{return o.body}}function Ot(o=document){const t=o.defaultView;return Math.abs(t.innerWidth-o.documentElement.clientWidth)}const V=kt("modal-open");class N{constructor({ownerDocument:t,handleContainerOverflow:e=!0,isRTL:r=!1}={}){this.handleContainerOverflow=e,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return Ot(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const e={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",n=this.getElement();t.style={overflow:n.style.overflow,[r]:n.style[r]},t.scrollBarWidth&&(e[r]=`${parseInt(g(n,r)||"0",10)+t.scrollBarWidth}px`),n.setAttribute(V,""),g(n,e)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const e=this.getElement();e.removeAttribute(V),Object.assign(e.style,t.style)}add(t){let e=this.modals.indexOf(t);return e!==-1||(e=this.modals.length,this.modals.push(t),this.setModalAttributes(t),e!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),e}remove(t){const e=this.modals.indexOf(t);e!==-1&&(this.modals.splice(e,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const At=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Nt(o,t){if(o==null)return{};var e={},r=Object.keys(o),n,a;for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&(e[n]=o[n]);return e}let O;function Bt(o){return O||(O=new N({ownerDocument:o==null?void 0:o.document})),O}function Lt(o){const t=X(),e=o||Bt(t),r=l.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>e.add(r.current),remove:()=>e.remove(r.current),isTopModal:()=>e.isTopModal(r.current),setDialogRef:l.useCallback(n=>{r.current.dialog=n},[]),setBackdropRef:l.useCallback(n=>{r.current.backdrop=n},[])})}const Y=l.forwardRef((o,t)=>{let{show:e=!1,role:r="dialog",className:n,style:a,children:T,backdrop:m=!0,keyboard:b=!0,onBackdropClick:B,onEscapeKeyDown:L,transition:q,runTransition:$,backdropTransition:z,runBackdropTransition:J,autoFocus:Q=!0,enforceFocus:Z=!0,restoreFocus:tt=!0,restoreFocusOptions:et,renderDialog:j,renderBackdrop:ot=s=>d.jsx("div",Object.assign({},s)),manager:rt,container:nt,onShow:D,onHide:S=()=>{},onExit:st,onExited:W,onExiting:at,onEnter:it,onEntering:lt,onEntered:dt}=o,ct=Nt(o,At);const c=X(),p=Ct(nt),i=Lt(rt),ut=bt(),ft=yt(e),[x,F]=l.useState(!e),E=l.useRef(null);l.useImperativeHandle(t,()=>i,[i]),vt&&!ft&&e&&(E.current=w(c==null?void 0:c.document)),e&&x&&F(!1);const I=h(()=>{if(i.add(),R.current=K(document,"keydown",gt),C.current=K(document,"focus",()=>setTimeout(ht),!0),D&&D(),Q){var s,_;const k=w((s=(_=i.dialog)==null?void 0:_.ownerDocument)!=null?s:c==null?void 0:c.document);i.dialog&&k&&!H(i.dialog,k)&&(E.current=k,i.dialog.focus())}}),y=h(()=>{if(i.remove(),R.current==null||R.current(),C.current==null||C.current(),tt){var s;(s=E.current)==null||s.focus==null||s.focus(et),E.current=null}});l.useEffect(()=>{!e||!p||I()},[e,p,I]),l.useEffect(()=>{x&&y()},[x,y]),xt(()=>{y()});const ht=h(()=>{if(!Z||!ut()||!i.isTopModal())return;const s=w(c==null?void 0:c.document);i.dialog&&s&&!H(i.dialog,s)&&i.dialog.focus()}),mt=h(s=>{s.target===s.currentTarget&&(B==null||B(s),m===!0&&S())}),gt=h(s=>{b&&Rt(s)&&i.isTopModal()&&(L==null||L(s),s.defaultPrevented||S())}),C=l.useRef(),R=l.useRef(),pt=(...s)=>{F(!0),W==null||W(...s)};if(!p)return null;const P=Object.assign({role:r,ref:i.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ct,{style:a,className:n,tabIndex:-1});let M=j?j(P):d.jsx("div",Object.assign({},P,{children:l.cloneElement(T,{role:"document"})}));M=G(q,$,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!e,onExit:st,onExiting:at,onExited:pt,onEnter:it,onEntering:lt,onEntered:dt,children:M});let v=null;return m&&(v=ot({ref:i.setBackdropRef,onClick:mt}),v=G(z,J,{in:!!e,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:v})),d.jsx(d.Fragment,{children:Tt.createPortal(d.jsxs(d.Fragment,{children:[v,M]}),p)})});Y.displayName="Modal";const $t=Object.assign(Y,{Manager:N});function jt(o,t){o.classList?o.classList.add(t):Mt(o,t)||(typeof o.className=="string"?o.className=o.className+" "+t:o.setAttribute("class",(o.className&&o.className.baseVal||"")+" "+t))}function U(o,t){return o.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Dt(o,t){o.classList?o.classList.remove(t):typeof o.className=="string"?o.className=U(o.className,t):o.setAttribute("class",U(o.className&&o.className.baseVal||"",t))}const f={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class St extends N{adjustAndStore(t,e,r){const n=e.style[t];e.dataset[t]=n,g(e,{[t]:`${parseFloat(g(e,t))+r}px`})}restore(t,e){const r=e.dataset[t];r!==void 0&&(delete e.dataset[t],g(e,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const e=this.getElement();if(jt(e,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",n=this.isRTL?"marginLeft":"marginRight";u(e,f.FIXED_CONTENT).forEach(a=>this.adjustAndStore(r,a,t.scrollBarWidth)),u(e,f.STICKY_CONTENT).forEach(a=>this.adjustAndStore(n,a,-t.scrollBarWidth)),u(e,f.NAVBAR_TOGGLER).forEach(a=>this.adjustAndStore(n,a,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const e=this.getElement();Dt(e,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",n=this.isRTL?"marginLeft":"marginRight";u(e,f.FIXED_CONTENT).forEach(a=>this.restore(r,a)),u(e,f.STICKY_CONTENT).forEach(a=>this.restore(n,a)),u(e,f.NAVBAR_TOGGLER).forEach(a=>this.restore(n,a))}}let A;function zt(o){return A||(A=new St(o)),A}const Wt=l.createContext({onHide(){}}),Jt=l.forwardRef(({closeLabel:o="Close",closeVariant:t,closeButton:e=!1,onHide:r,children:n,...a},T)=>{const m=l.useContext(Wt),b=h(()=>{m==null||m.onHide(),r==null||r()});return d.jsxs("div",{ref:T,...a,children:[n,e&&d.jsx(wt,{"aria-label":o,variant:t,onClick:b})]})});export{Jt as A,$t as B,Wt as M,St as a,zt as g};
