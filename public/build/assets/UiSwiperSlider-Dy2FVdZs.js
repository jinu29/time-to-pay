import{j as e,R as de,Y as me,b as q}from"./app-D3qFl5QJ.js";import{g as pe,m as fe,c as F,a as ne,n as xe,e as he,b as ae,S as E,d as l}from"./swiper-react-4IsHYcBh.js";/* empty css               *//* empty css                   *//* empty css                   *//* empty css                    */import{M as ge}from"./mousewheel-CoGFYcVb.js";import{N as J}from"./navigation-COO7AQ3e.js";import{c as ue,P as D}from"./pagination-MZiP7mTe.js";import{c as je}from"./create-element-if-not-defined-C9Q6QQEb.js";import{A as P}from"./autoplay-iZLmWalK.js";import{e as ie,a as oe,b as ce,E as we}from"./effect-fade-uhlG1Hay.js";import{B as be}from"./BreadCrumb-DKmAk2Ix.js";import{s as K}from"./img-1-Jhxup-Mz.js";import{i as G}from"./img-2-BKxLD3CN.js";import{i as te}from"./img-3-B4j7qXDU.js";import{i as X}from"./img-4-BjZu39fc.js";import{i as Q}from"./img-5-BRe7VnHE.js";import{s as Y}from"./img-6-B4dmEj4y.js";import{s as _}from"./img-7-CJgpB7jU.js";import{i as ee}from"./img-8-CymXe_lN.js";import{s as se}from"./img-9-BgjX5-lC.js";import{s as W}from"./img-10-h_gqqnMv.js";import{S as re,a as le}from"./img-12-DPX2B3oR.js";import{L as ye}from"./index-B9pxTiZq.js";import{C as Ne}from"./Container-CWCo5PJe.js";import{R as ve}from"./Row-tEjiKZiJ.js";import{C as M}from"./Col-CbVAoDNW.js";import{C as i}from"./Card-oM_CSodH.js";import"./index-B9h42nwt.js";import"./logo-sm-DmJR8Lua.js";import"./logo-dark-Dh4DV6bR.js";import"./logo-light-l2wwNDet.js";import"./ReactToastify-C9Du-IRn.js";import"./calender-yWVPQvD3.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./index-kDh0yZ-q.js";import"./isObject-D7bzW4Uf.js";import"./avatar-2-B-1-S_lh.js";import"./avatar-3-CSm6kh8B.js";import"./avatar-5-D7m8bZ3v.js";import"./Form-B3O-MepU.js";import"./ThemeProvider-TIbVUJ6I.js";import"./ElementChildren-CJCNM75t.js";import"./avatar-1-PHP4S1R6.js";import"./Dropdown-DxU-Y7w8.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-T4LAgSOZ.js";import"./usePrevious-Btyv44Lm.js";import"./useForceUpdate-BlfwUsii.js";import"./useEventCallback-UvAaEcyh.js";import"./useCallbackRef-DLLZHH4k.js";import"./mergeOptionsWithPopperConfig-B_-RLxEJ.js";import"./useMounted-Cej8hYIm.js";import"./useWindow-DNutj8bq.js";import"./NavContext-pS6wZ13c.js";import"./Button-DiXNu-Xz.js";import"./DataKey-DjdvojM5.js";import"./hook-5wmmorCC.js";import"./extends-CF3RwP-h.js";import"./useMergedRefs-GCentTCM.js";import"./Anchor-CBJHYeB7.js";import"./InputGroupContext-lfkYm6PP.js";import"./NavbarContext-zbuTv4ym.js";import"./Button-8BG1yInr.js";import"./Collapse-CLnse129.js";import"./TransitionWrapper-D-qpilnv.js";import"./setPrototypeOf-DgZC2w_0.js";import"./CardHeaderContext-1u13MfXj.js";import"./divWithClassName-ehbO6ZdE.js";function Se(k){let{swiper:s,extendParams:O,on:b,emit:C}=k;const $=pe();let z=!1,h=null,d=null,f,t,c,y;O({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),s.scrollbar={el:null,dragEl:null};function j(){if(!s.params.scrollbar.el||!s.scrollbar.el)return;const{scrollbar:a,rtlTranslate:o}=s,{dragEl:r,el:n}=a,m=s.params.scrollbar,S=s.params.loop?s.progressLoop:s.progress;let V=t,u=(c-t)*S;o?(u=-u,u>0?(V=t-u,u=0):-u+t>c&&(V=c+u)):u<0?(V=t+u,u=0):u+t>c&&(V=c-u),s.isHorizontal()?(r.style.transform=`translate3d(${u}px, 0, 0)`,r.style.width=`${V}px`):(r.style.transform=`translate3d(0px, ${u}px, 0)`,r.style.height=`${V}px`),m.hide&&(clearTimeout(h),n.style.opacity=1,h=setTimeout(()=>{n.style.opacity=0,n.style.transitionDuration="400ms"},1e3))}function N(a){!s.params.scrollbar.el||!s.scrollbar.el||(s.scrollbar.dragEl.style.transitionDuration=`${a}ms`)}function I(){if(!s.params.scrollbar.el||!s.scrollbar.el)return;const{scrollbar:a}=s,{dragEl:o,el:r}=a;o.style.width="",o.style.height="",c=s.isHorizontal()?r.offsetWidth:r.offsetHeight,y=s.size/(s.virtualSize+s.params.slidesOffsetBefore-(s.params.centeredSlides?s.snapGrid[0]:0)),s.params.scrollbar.dragSize==="auto"?t=c*y:t=parseInt(s.params.scrollbar.dragSize,10),s.isHorizontal()?o.style.width=`${t}px`:o.style.height=`${t}px`,y>=1?r.style.display="none":r.style.display="",s.params.scrollbar.hide&&(r.style.opacity=0),s.params.watchOverflow&&s.enabled&&a.el.classList[s.isLocked?"add":"remove"](s.params.scrollbar.lockClass)}function x(a){return s.isHorizontal()?a.clientX:a.clientY}function w(a){const{scrollbar:o,rtlTranslate:r}=s,{el:n}=o;let m;m=(x(a)-he(n)[s.isHorizontal()?"left":"top"]-(f!==null?f:t/2))/(c-t),m=Math.max(Math.min(m,1),0),r&&(m=1-m);const S=s.minTranslate()+(s.maxTranslate()-s.minTranslate())*m;s.updateProgress(S),s.setTranslate(S),s.updateActiveIndex(),s.updateSlidesClasses()}function g(a){const o=s.params.scrollbar,{scrollbar:r,wrapperEl:n}=s,{el:m,dragEl:S}=r;z=!0,f=a.target===S?x(a)-a.target.getBoundingClientRect()[s.isHorizontal()?"left":"top"]:null,a.preventDefault(),a.stopPropagation(),n.style.transitionDuration="100ms",S.style.transitionDuration="100ms",w(a),clearTimeout(d),m.style.transitionDuration="0ms",o.hide&&(m.style.opacity=1),s.params.cssMode&&(s.wrapperEl.style["scroll-snap-type"]="none"),C("scrollbarDragStart",a)}function v(a){const{scrollbar:o,wrapperEl:r}=s,{el:n,dragEl:m}=o;z&&(a.preventDefault&&a.cancelable?a.preventDefault():a.returnValue=!1,w(a),r.style.transitionDuration="0ms",n.style.transitionDuration="0ms",m.style.transitionDuration="0ms",C("scrollbarDragMove",a))}function H(a){const o=s.params.scrollbar,{scrollbar:r,wrapperEl:n}=s,{el:m}=r;z&&(z=!1,s.params.cssMode&&(s.wrapperEl.style["scroll-snap-type"]="",n.style.transitionDuration=""),o.hide&&(clearTimeout(d),d=xe(()=>{m.style.opacity=0,m.style.transitionDuration="400ms"},1e3)),C("scrollbarDragEnd",a),o.snapOnRelease&&s.slideToClosest())}function T(a){const{scrollbar:o,params:r}=s,n=o.el;if(!n)return;const m=n,S=r.passiveListeners?{passive:!1,capture:!1}:!1,V=r.passiveListeners?{passive:!0,capture:!1}:!1;if(!m)return;const u=a==="on"?"addEventListener":"removeEventListener";m[u]("pointerdown",g,S),$[u]("pointermove",v,S),$[u]("pointerup",H,V)}function p(){!s.params.scrollbar.el||!s.scrollbar.el||T("on")}function L(){!s.params.scrollbar.el||!s.scrollbar.el||T("off")}function B(){const{scrollbar:a,el:o}=s;s.params.scrollbar=je(s,s.originalParams.scrollbar,s.params.scrollbar,{el:"swiper-scrollbar"});const r=s.params.scrollbar;if(!r.el)return;let n;if(typeof r.el=="string"&&s.isElement&&(n=s.el.querySelector(r.el)),!n&&typeof r.el=="string"){if(n=$.querySelectorAll(r.el),!n.length)return}else n||(n=r.el);s.params.uniqueNavElements&&typeof r.el=="string"&&n.length>1&&o.querySelectorAll(r.el).length===1&&(n=o.querySelector(r.el)),n.length>0&&(n=n[0]),n.classList.add(s.isHorizontal()?r.horizontalClass:r.verticalClass);let m;n&&(m=n.querySelector(ue(s.params.scrollbar.dragClass)),m||(m=ne("div",s.params.scrollbar.dragClass),n.append(m))),Object.assign(a,{el:n,dragEl:m}),r.draggable&&p(),n&&n.classList[s.enabled?"remove":"add"](...F(s.params.scrollbar.lockClass))}function U(){const a=s.params.scrollbar,o=s.scrollbar.el;o&&o.classList.remove(...F(s.isHorizontal()?a.horizontalClass:a.verticalClass)),L()}b("changeDirection",()=>{if(!s.scrollbar||!s.scrollbar.el)return;const a=s.params.scrollbar;let{el:o}=s.scrollbar;o=fe(o),o.forEach(r=>{r.classList.remove(a.horizontalClass,a.verticalClass),r.classList.add(s.isHorizontal()?a.horizontalClass:a.verticalClass)})}),b("init",()=>{s.params.scrollbar.enabled===!1?A():(B(),I(),j())}),b("update resize observerUpdate lock unlock changeDirection",()=>{I()}),b("setTranslate",()=>{j()}),b("setTransition",(a,o)=>{N(o)}),b("enable disable",()=>{const{el:a}=s.scrollbar;a&&a.classList[s.enabled?"remove":"add"](...F(s.params.scrollbar.lockClass))}),b("destroy",()=>{U()});const R=()=>{s.el.classList.remove(...F(s.params.scrollbar.scrollbarDisabledClass)),s.scrollbar.el&&s.scrollbar.el.classList.remove(...F(s.params.scrollbar.scrollbarDisabledClass)),B(),I(),j()},A=()=>{s.el.classList.add(...F(s.params.scrollbar.scrollbarDisabledClass)),s.scrollbar.el&&s.scrollbar.el.classList.add(...F(s.params.scrollbar.scrollbarDisabledClass)),U()};Object.assign(s.scrollbar,{enable:R,disable:A,updateSize:I,setTranslate:j,init:B,destroy:U})}function Z(k,s,O){const b=`swiper-slide-shadow${O?`-${O}`:""}${k?` swiper-slide-shadow-${k}`:""}`,C=ae(s);let $=C.querySelector(`.${b.split(" ").join(".")}`);return $||($=ne("div",b.split(" ")),C.append($)),$}function Ee(k){let{swiper:s,extendParams:O,on:b}=k;O({flipEffect:{slideShadows:!0,limitRotation:!0}});const C=(d,f)=>{let t=s.isHorizontal()?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),c=s.isHorizontal()?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");t||(t=Z("flip",d,s.isHorizontal()?"left":"top")),c||(c=Z("flip",d,s.isHorizontal()?"right":"bottom")),t&&(t.style.opacity=Math.max(-f,0)),c&&(c.style.opacity=Math.max(f,0))};ie({effect:"flip",swiper:s,on:b,setTranslate:()=>{const{slides:d,rtlTranslate:f}=s,t=s.params.flipEffect;for(let c=0;c<d.length;c+=1){const y=d[c];let j=y.progress;s.params.flipEffect.limitRotation&&(j=Math.max(Math.min(y.progress,1),-1));const N=y.swiperSlideOffset;let x=-180*j,w=0,g=s.params.cssMode?-N-s.translate:-N,v=0;s.isHorizontal()?f&&(x=-x):(v=g,g=0,w=-x,x=0),s.browser&&s.browser.need3dFix&&(Math.abs(x)/90%2===1&&(x+=.001),Math.abs(w)/90%2===1&&(w+=.001)),y.style.zIndex=-Math.abs(Math.round(j))+d.length,t.slideShadows&&C(y,j);const H=`translate3d(${g}px, ${v}px, 0px) rotateX(${w}deg) rotateY(${x}deg)`,T=oe(t,y);T.style.transform=H}},setTransition:d=>{const f=s.slides.map(t=>ae(t));f.forEach(t=>{t.style.transitionDuration=`${d}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${d}ms`})}),ce({swiper:s,duration:d,transformElements:f})},recreateShadows:()=>{s.params.flipEffect,s.slides.forEach(d=>{let f=d.progress;s.params.flipEffect.limitRotation&&(f=Math.max(Math.min(d.progress,1),-1)),C(d,f)})},getEffectParams:()=>s.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!s.params.cssMode})})}function Me(k){let{swiper:s,extendParams:O,on:b}=k;O({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ie({effect:"coverflow",swiper:s,on:b,setTranslate:()=>{const{width:z,height:h,slides:d,slidesSizesGrid:f}=s,t=s.params.coverflowEffect,c=s.isHorizontal(),y=s.translate,j=c?-y+z/2:-y+h/2,N=c?t.rotate:-t.rotate,I=t.depth;for(let x=0,w=d.length;x<w;x+=1){const g=d[x],v=f[x],H=g.swiperSlideOffset,T=(j-H-v/2)/v,p=typeof t.modifier=="function"?t.modifier(T):T*t.modifier;let L=c?N*p:0,B=c?0:N*p,U=-I*Math.abs(p),R=t.stretch;typeof R=="string"&&R.indexOf("%")!==-1&&(R=parseFloat(t.stretch)/100*v);let A=c?0:R*p,a=c?R*p:0,o=1-(1-t.scale)*Math.abs(p);Math.abs(a)<.001&&(a=0),Math.abs(A)<.001&&(A=0),Math.abs(U)<.001&&(U=0),Math.abs(L)<.001&&(L=0),Math.abs(B)<.001&&(B=0),Math.abs(o)<.001&&(o=0),s.browser&&s.browser.need3dFix&&(Math.abs(L)/90%2===1&&(L+=.001),Math.abs(B)/90%2===1&&(B+=.001));const r=`translate3d(${a}px,${A}px,${U}px)  rotateX(${B}deg) rotateY(${L}deg) scale(${o})`,n=oe(t,g);if(n.style.transform=r,g.style.zIndex=-Math.abs(Math.round(p))+1,t.slideShadows){let m=c?g.querySelector(".swiper-slide-shadow-left"):g.querySelector(".swiper-slide-shadow-top"),S=c?g.querySelector(".swiper-slide-shadow-right"):g.querySelector(".swiper-slide-shadow-bottom");m||(m=Z("coverflow",g,c?"left":"top")),S||(S=Z("coverflow",g,c?"right":"bottom")),m&&(m.style.opacity=p>0?p:0),S&&(S.style.opacity=-p>0?-p:0)}}},setTransition:z=>{s.slides.map(d=>ae(d)).forEach(d=>{d.style.transitionDuration=`${z}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>{f.style.transitionDuration=`${z}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Pe(k){let{swiper:s,extendParams:O,on:b}=k;O({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const C=h=>typeof h=="string"?h:`${h}px`;ie({effect:"creative",swiper:s,on:b,setTranslate:()=>{const{slides:h,wrapperEl:d,slidesSizesGrid:f}=s,t=s.params.creativeEffect,{progressMultiplier:c}=t,y=s.params.centeredSlides;if(y){const j=f[0]/2-s.params.slidesOffsetBefore||0;d.style.transform=`translateX(calc(50% - ${j}px))`}for(let j=0;j<h.length;j+=1){const N=h[j],I=N.progress,x=Math.min(Math.max(N.progress,-t.limitProgress),t.limitProgress);let w=x;y||(w=Math.min(Math.max(N.originalProgress,-t.limitProgress),t.limitProgress));const g=N.swiperSlideOffset,v=[s.params.cssMode?-g-s.translate:-g,0,0],H=[0,0,0];let T=!1;s.isHorizontal()||(v[1]=v[0],v[0]=0);let p={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};x<0?(p=t.next,T=!0):x>0&&(p=t.prev,T=!0),v.forEach((o,r)=>{v[r]=`calc(${o}px + (${C(p.translate[r])} * ${Math.abs(x*c)}))`}),H.forEach((o,r)=>{let n=p.rotate[r]*Math.abs(x*c);s.browser&&s.browser.need3dFix&&Math.abs(n)/90%2===1&&(n+=.001),H[r]=n}),N.style.zIndex=-Math.abs(Math.round(I))+h.length;const L=v.join(", "),B=`rotateX(${H[0]}deg) rotateY(${H[1]}deg) rotateZ(${H[2]}deg)`,U=w<0?`scale(${1+(1-p.scale)*w*c})`:`scale(${1-(1-p.scale)*w*c})`,R=w<0?1+(1-p.opacity)*w*c:1-(1-p.opacity)*w*c,A=`translate3d(${L}) ${B} ${U}`;if(T&&p.shadow||!T){let o=N.querySelector(".swiper-slide-shadow");if(!o&&p.shadow&&(o=Z("creative",N)),o){const r=t.shadowPerProgress?x*(1/t.limitProgress):x;o.style.opacity=Math.min(Math.max(Math.abs(r),0),1)}}const a=oe(t,N);a.style.transform=A,a.style.opacity=R,p.origin&&(a.style.transformOrigin=p.origin)}},setTransition:h=>{const d=s.slides.map(f=>ae(f));d.forEach(f=>{f.style.transitionDuration=`${h}ms`,f.querySelectorAll(".swiper-slide-shadow").forEach(t=>{t.style.transitionDuration=`${h}ms`})}),ce({swiper:s,duration:h,transformElements:d,allSlides:!0})},perspective:()=>s.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!s.params.cssMode})})}const ke=()=>e.jsxs(de.Fragment,{children:[e.jsx(me,{title:"Swiper Slider | Velzon - React Admin & Dashboard Template"}),e.jsx("div",{className:"page-content",children:e.jsxs(Ne,{fluid:!0,children:[e.jsx(be,{title:"Swiper Slider",pageTitle:"Advance UI"}),e.jsxs(ve,{children:[e.jsx(M,{xl:4,lg:6,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Default Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"default-swiper"})," class to set a default swiper."]}),e.jsx(E,{className:"mySwiper swiper default-swiper rounded",modules:[P],loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},children:e.jsxs("div",{className:"swiper-wrapper",children:[e.jsx(l,{children:e.jsx("img",{src:K,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:G,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:te,alt:"",className:"img-fluid"})})]})})]})]})}),e.jsx(M,{xl:4,lg:6,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Navigation & Pagination Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"navigation-swiper"})," class to set a swiper with navigation and pagination."]}),e.jsx(E,{modules:[J,D,P],pagination:{clickable:!0},navigation:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},className:"mySwiper swiper navigation-swiper rounded",children:e.jsxs("div",{className:"swiper-wrapper",children:[e.jsx(l,{children:e.jsx("img",{src:X,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:Q,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:Y,alt:"",className:"img-fluid"})})]})})]})]})}),e.jsx(M,{xl:4,lg:6,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Pagination Dynamic Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"pagination-dynamic-swiper"})," class to set a dynamic swiper with pagination."]}),e.jsx(E,{pagination:{clickable:!0,dynamicBullets:!0},modules:[D,P],loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},className:"mySwiper swiper pagination-dynamic-swiper rounded",children:e.jsxs("div",{className:"swiper-wrapper",children:[e.jsx(l,{children:e.jsx("img",{src:_,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:ee,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:se,alt:"",className:"img-fluid"})})]})})]})]})}),e.jsx(M,{xl:4,lg:6,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Pagination Fraction Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"pagination-fraction-swiper"})," class to set a fraction swiper with pagination."]}),e.jsx(E,{pagination:{type:"fraction",clickable:!0},navigation:!0,modules:[D,J,P],loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},className:"mySwiper swiper pagination-fraction-swiper rounded",children:e.jsxs("div",{className:"swiper-wrapper",children:[e.jsx(l,{children:e.jsx("img",{src:W,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:re,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:le,alt:"",className:"img-fluid"})})]})})]})]})}),e.jsx(M,{xl:4,lg:6,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Pagination Custom Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"pagination-custom-swiper"})," class to set a swiper with custom pagination."]}),e.jsxs(E,{pagination:{el:".swiper-pagination"},modules:[D,P],loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},className:"mySwiper swiper pagination-custom-swiper rounded",children:[e.jsxs("div",{className:"swiper-wrapper",children:[e.jsx(l,{children:e.jsx("img",{src:G,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:te,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:X,alt:"",className:"img-fluid"})})]}),e.jsx("div",{className:"swiper-pagination pagination-custom"})]})]})]})}),e.jsx(M,{xl:4,lg:6,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Pagination Progress Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"pagination-progress-swiper"})," class to set a swiper with progress pagination."]}),e.jsx(E,{pagination:{type:"progressbar"},navigation:!0,modules:[D,J,P],loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},className:"mySwiper swiper pagination-progress-swiper rounded",children:e.jsxs("div",{className:"swiper-wrapper",children:[e.jsx(l,{children:e.jsx("img",{src:Q,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:Y,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:_,alt:"",className:"img-fluid"})})]})})]})]})}),e.jsx(M,{xl:4,lg:6,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Scrollbar Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"pagination-scrollbar-swiper"})," class to set a swiper with scrollbar pagination."]}),e.jsx(E,{scrollbar:{hide:!0},modules:[Se,P],loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},className:"mySwiper swiper pagination-scrollbar-swiper rounded",children:e.jsxs("div",{className:"swiper-wrapper",children:[e.jsx(l,{children:e.jsx("img",{src:ee,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:se,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:W,alt:"",className:"img-fluid"})})]})})]})]})}),e.jsx(M,{xl:4,lg:6,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Vertical Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"vertical-swiper"})," class to set a vertical swiper."]}),e.jsx(E,{direction:"vertical",pagination:{clickable:!0},modules:[D,P],loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},className:"mySwiper swiper vertical-swiper rounded",style:{height:"324px"},children:e.jsxs("div",{className:"swiper-wrapper",children:[e.jsx(l,{children:e.jsx("img",{src:re,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:le,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:K,alt:"",className:"img-fluid"})})]})})]})]})}),e.jsx(M,{xl:4,lg:6,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Mousewheel Control Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"mousewheel-control-swiper"})," class to set a swiper with mousewheel scroll."]}),e.jsx(E,{direction:"vertical",slidesPerView:1,spaceBetween:30,mousewheel:!0,pagination:{clickable:!0},modules:[ge,D,P],loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},className:"mySwiper mousewheel-control-swiper rounded",style:{height:"324px"},children:e.jsxs("div",{className:"swiper-wrapper",children:[e.jsx(l,{children:e.jsx("img",{src:te,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:X,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:Q,alt:"",className:"img-fluid"})})]})})]})]})}),e.jsx(M,{xl:4,lg:6,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Effect Fade Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"effect-fade-swiper"})," class to set a swiper with fade effect."]}),e.jsxs(E,{spaceBetween:30,effect:"fade",pagination:{clickable:!0},modules:[we,D,P],loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},className:"mySwiper swiper effect-fade-swiper rounded",children:[e.jsxs(l,{children:[" ",e.jsx("img",{src:Y,alt:"",className:"img-fluid"})," "]}),e.jsxs(l,{children:[" ",e.jsx("img",{src:_,alt:"",className:"img-fluid"})," "]}),e.jsxs(l,{children:[" ",e.jsx("img",{src:ee,alt:"",className:"img-fluid"})," "]})]})]})]})}),e.jsx(M,{xl:4,lg:6,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Effect Creative Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"effect-creative-swiper"})," class to set a swiper with creative custom effect."]}),e.jsx(E,{grabCursor:!0,effect:"creative",pagination:{clickable:!0},creativeEffect:{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},modules:[Pe,D,P],loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},className:"mySwiper swiper effect-creative-swiper rounded",children:e.jsxs("div",{className:"swiper-wrapper",children:[e.jsx(l,{children:e.jsx("img",{src:se,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:W,alt:"",className:"img-fluid"})}),e.jsx(l,{children:e.jsx("img",{src:re,alt:"",className:"img-fluid"})})]})})]})]})}),e.jsx(M,{xl:4,lg:6,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Effect Flip Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"effect-flip-swiper"})," class to set a swiper with flip effect."]}),e.jsx(E,{effect:"flip",grabCursor:!0,pagination:{clickable:!0},navigation:!0,modules:[Ee,D,J,P],loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},className:"mySwiper effect-flip-swiper rounded",children:e.jsxs("div",{className:"swiper-wrapper",children:[e.jsxs(l,{children:[" ",e.jsx("img",{src:le,alt:"",className:"img-fluid"})," "]}),e.jsxs(l,{children:[" ",e.jsx("img",{src:K,alt:"",className:"img-fluid"})," "]}),e.jsxs(l,{children:[" ",e.jsx("img",{src:G,alt:"",className:"img-fluid"})," "]})]})})]})]})}),e.jsx(M,{lg:12,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Effect Coverflow Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"effect-coverflow-swiper"})," class to set a swiper with coverflow effect."]}),e.jsxs(E,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:4,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},modules:[Me,D,P],className:"mySwiper swiper effect-coverflow-swiper rounded pb-5",children:[e.jsxs("div",{className:"swiper-wrapper",children:[e.jsxs(l,{children:[" ",e.jsx("img",{src:X,alt:"",className:"img-fluid"})," "]}),e.jsxs(l,{children:[" ",e.jsx("img",{src:Q,alt:"",className:"img-fluid"})," "]}),e.jsxs(l,{children:[" ",e.jsx("img",{src:Y,alt:"",className:"img-fluid"})," "]}),e.jsxs(l,{children:[" ",e.jsx("img",{src:_,alt:"",className:"img-fluid"})," "]}),e.jsxs(l,{children:[" ",e.jsx("img",{src:ee,alt:"",className:"img-fluid"})," "]}),e.jsxs(l,{children:[" ",e.jsx("img",{src:se,alt:"",className:"img-fluid"})," "]})]}),e.jsx("div",{className:"swiper-pagination swiper-pagination-dark"})]})]})]})}),e.jsx(M,{lg:12,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h4",{className:"card-title mb-0",children:"Responsive Breakpoints Swiper"})}),e.jsxs(i.Body,{children:[e.jsxs("p",{className:"text-muted",children:["Use ",e.jsx("code",{children:"responsive-swiper"})," class to set a responsive swiper."]}),e.jsxs(E,{slidesPerView:1,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:40},1024:{slidesPerView:4,spaceBetween:50}},loop:!0,modules:[D],className:"mySwiper swiper responsive-swiper rounded gallery-light pb-4",children:[e.jsxs("div",{className:"swiper-wrapper",children:[e.jsx(l,{children:e.jsxs("div",{className:"gallery-box card",children:[e.jsx("div",{className:"gallery-container",children:e.jsxs(q,{className:"image-popup",href:K,title:"",children:[e.jsx("img",{className:"gallery-img img-fluid mx-auto",src:K,alt:""}),e.jsx("div",{className:"gallery-overlay",children:e.jsx("h5",{className:"overlay-caption",children:"Glasses and laptop from above"})})]})}),e.jsx("div",{className:"box-content",children:e.jsxs("div",{className:"d-flex align-items-center mt-1",children:[e.jsxs("div",{className:"flex-grow-1 text-muted",children:["by ",e.jsx(q,{href:"",className:"text-body text-truncate",children:"Ron Mackie"})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("div",{className:"d-flex gap-3",children:[e.jsxs("button",{type:"button",className:"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0",children:[e.jsx("i",{className:"ri-thumb-up-fill text-muted align-bottom me-1"})," 2.2K"]}),e.jsxs("button",{type:"button",className:"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0",children:[e.jsx("i",{className:"ri-question-answer-fill text-muted align-bottom me-1"})," 1.3K"]})]})})]})})]})}),e.jsx(l,{children:e.jsxs("div",{className:"gallery-box card",children:[e.jsx("div",{className:"gallery-container",children:e.jsxs(q,{className:"image-popup",href:G,title:"",children:[e.jsx("img",{className:"gallery-img img-fluid mx-auto",src:G,alt:""}),e.jsx("div",{className:"gallery-overlay",children:e.jsx("h5",{className:"overlay-caption",children:"Working at a coffee shop"})})]})}),e.jsx("div",{className:"box-content",children:e.jsxs("div",{className:"d-flex align-items-center mt-1",children:[e.jsxs("div",{className:"flex-grow-1 text-muted",children:["by ",e.jsx(q,{href:"",className:"text-body text-truncate",children:"Nancy Martino"})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("div",{className:"d-flex gap-3",children:[e.jsxs("button",{type:"button",className:"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0",children:[e.jsx("i",{className:"ri-thumb-up-fill text-muted align-bottom me-1"})," 3.2K"]}),e.jsxs("button",{type:"button",className:"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0",children:[e.jsx("i",{className:"ri-question-answer-fill text-muted align-bottom me-1"})," 1.1K"]})]})})]})})]})}),e.jsx(l,{children:e.jsxs("div",{className:"gallery-box card mb-0",children:[e.jsx("div",{className:"gallery-container",children:e.jsxs(q,{className:"image-popup",href:W,title:"",children:[e.jsx("img",{className:"gallery-img img-fluid mx-auto",src:W,alt:""}),e.jsx("div",{className:"gallery-overlay",children:e.jsx("h5",{className:"overlay-caption",children:"Fun day at the Hill Station"})})]})}),e.jsx("div",{className:"box-content",children:e.jsxs("div",{className:"d-flex align-items-center mt-1",children:[e.jsxs("div",{className:"flex-grow-1 text-muted",children:["by ",e.jsx(q,{href:"",className:"text-body text-truncate",children:"Henry Baird"})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("div",{className:"d-flex gap-3",children:[e.jsxs("button",{type:"button",className:"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0",children:[e.jsx("i",{className:"ri-thumb-up-fill text-muted align-bottom me-1"})," 632"]}),e.jsxs("button",{type:"button",className:"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0",children:[e.jsx("i",{className:"ri-question-answer-fill text-muted align-bottom me-1"})," 95"]})]})})]})})]})}),e.jsx(l,{children:e.jsxs("div",{className:"gallery-box card",children:[e.jsx("div",{className:"gallery-container",children:e.jsxs(q,{className:"image-popup",href:X,title:"",children:[e.jsx("img",{className:"gallery-img img-fluid mx-auto",src:X,alt:""}),e.jsx("div",{className:"gallery-overlay",children:e.jsx("h5",{className:"overlay-caption",children:"Drawing a sketch"})})]})}),e.jsx("div",{className:"box-content",children:e.jsxs("div",{className:"d-flex align-items-center mt-1",children:[e.jsxs("div",{className:"flex-grow-1 text-muted",children:["by ",e.jsx(q,{href:"",className:"text-body text-truncate",children:"Jason McQuaid"})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("div",{className:"d-flex gap-3",children:[e.jsxs("button",{type:"button",className:"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0",children:[e.jsx("i",{className:"ri-thumb-up-fill text-muted align-bottom me-1"})," 825"]}),e.jsxs("button",{type:"button",className:"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0",children:[e.jsx("i",{className:"ri-question-answer-fill text-muted align-bottom me-1"})," 101"]})]})})]})})]})}),e.jsx(l,{children:e.jsxs("div",{className:"gallery-box card",children:[e.jsx("div",{className:"gallery-container",children:e.jsxs(q,{className:"image-popup",href:Y,title:"",children:[e.jsx("img",{className:"gallery-img img-fluid mx-auto",src:Y,alt:""}),e.jsx("div",{className:"gallery-overlay",children:e.jsx("h5",{className:"overlay-caption",children:"Project discussion with team"})})]})}),e.jsx("div",{className:"box-content",children:e.jsxs("div",{className:"d-flex align-items-center mt-1",children:[e.jsxs("div",{className:"flex-grow-1 text-muted",children:["by ",e.jsx(q,{href:"",className:"text-body text-truncate",children:"Erica Kernan"})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("div",{className:"d-flex gap-3",children:[e.jsxs("button",{type:"button",className:"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0",children:[e.jsx("i",{className:"ri-thumb-up-fill text-muted align-bottom me-1"})," 3.4K"]}),e.jsxs("button",{type:"button",className:"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0",children:[e.jsx("i",{className:"ri-question-answer-fill text-muted align-bottom me-1"})," 1.3k"]})]})})]})})]})})]}),e.jsx("div",{className:"swiper-pagination swiper-pagination-dark"})]})]})]})})]})]})})]});ke.layout=k=>e.jsx(ye,{children:k});export{ke as default};
