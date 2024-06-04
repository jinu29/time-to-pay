import{d as hr,R as Wt,r as ft}from"./app-D3qFl5QJ.js";var ge={exports:{}};/*! nouislider - 14.7.0 - 4/6/2021 */(function(d,f){(function(o){d.exports=o()})(function(){var o="14.7.0";function y(e){return typeof e=="object"&&typeof e.to=="function"&&typeof e.from=="function"}function A(e){e.parentElement.removeChild(e)}function I(e){return e!=null}function O(e){e.preventDefault()}function B(e){return e.filter(function(t){return this[t]?!1:this[t]=!0},{})}function J(e,t){return Math.round(e/t)*t}function W(e,t){var l=e.getBoundingClientRect(),a=e.ownerDocument,v=a.documentElement,S=vt(a);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(S.x=0),t?l.top+S.y-v.clientTop:l.left+S.x-v.clientLeft}function H(e){return typeof e=="number"&&!isNaN(e)&&isFinite(e)}function tt(e,t,l){l>0&&(k(e,t),setTimeout(function(){rt(e,t)},l))}function et(e){return Math.max(Math.min(e,100),0)}function $(e){return Array.isArray(e)?e:[e]}function ut(e){e=String(e);var t=e.split(".");return t.length>1?t[1].length:0}function k(e,t){e.classList&&!/\s/.test(t)?e.classList.add(t):e.className+=" "+t}function rt(e,t){e.classList&&!/\s/.test(t)?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function dt(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function vt(e){var t=window.pageXOffset!==void 0,l=(e.compatMode||"")==="CSS1Compat",a=t?window.pageXOffset:l?e.documentElement.scrollLeft:e.body.scrollLeft,v=t?window.pageYOffset:l?e.documentElement.scrollTop:e.body.scrollTop;return{x:a,y:v}}function mt(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function ht(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch{}return e}function gt(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function it(e,t){return 100/(t-e)}function nt(e,t,l){return t*100/(e[l+1]-e[l])}function St(e,t){return nt(e,e[0]<0?t+Math.abs(e[0]):t-e[0],0)}function bt(e,t){return t*(e[1]-e[0])/100+e[0]}function X(e,t){for(var l=1;e>=t[l];)l+=1;return l}function yt(e,t,l){if(l>=e.slice(-1)[0])return 100;var a=X(l,e),v=e[a-1],S=e[a],m=t[a-1],_=t[a];return m+St([v,S],l)/it(m,_)}function wt(e,t,l){if(l>=100)return e.slice(-1)[0];var a=X(l,t),v=e[a-1],S=e[a],m=t[a-1],_=t[a];return bt([v,S],(l-m)*it(m,_))}function xt(e,t,l,a){if(a===100)return a;var v=X(a,e),S=e[v-1],m=e[v];return l?a-S>(m-S)/2?m:S:t[v-1]?e[v-1]+J(a-e[v-1],t[v-1]):a}function Et(e,t,l){var a;if(typeof t=="number"&&(t=[t]),!Array.isArray(t))throw new Error("noUiSlider ("+o+"): 'range' contains invalid value.");if(e==="min"?a=0:e==="max"?a=100:a=parseFloat(e),!H(a)||!H(t[0]))throw new Error("noUiSlider ("+o+"): 'range' value isn't numeric.");l.xPct.push(a),l.xVal.push(t[0]),a?l.xSteps.push(isNaN(t[1])?!1:t[1]):isNaN(t[1])||(l.xSteps[0]=t[1]),l.xHighestCompleteStep.push(0)}function Ut(e,t,l){if(t){if(l.xVal[e]===l.xVal[e+1]){l.xSteps[e]=l.xHighestCompleteStep[e]=l.xVal[e];return}l.xSteps[e]=nt([l.xVal[e],l.xVal[e+1]],t,0)/it(l.xPct[e],l.xPct[e+1]);var a=(l.xVal[e+1]-l.xVal[e])/l.xNumSteps[e],v=Math.ceil(Number(a.toFixed(3))-1),S=l.xVal[e]+l.xNumSteps[e]*v;l.xHighestCompleteStep[e]=S}}function z(e,t,l){this.xPct=[],this.xVal=[],this.xSteps=[l||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=t;var a,v=[];for(a in e)e.hasOwnProperty(a)&&v.push([e[a],a]);for(v.length&&typeof v[0][0]=="object"?v.sort(function(S,m){return S[0][0]-m[0][0]}):v.sort(function(S,m){return S[0]-m[0]}),a=0;a<v.length;a++)Et(v[a][1],v[a][0],this);for(this.xNumSteps=this.xSteps.slice(0),a=0;a<this.xNumSteps.length;a++)Ut(a,this.xNumSteps[a],this)}z.prototype.getDistance=function(e){var t,l=[];for(t=0;t<this.xNumSteps.length-1;t++){var a=this.xNumSteps[t];if(a&&e/a%1!==0)throw new Error("noUiSlider ("+o+"): 'limit', 'margin' and 'padding' of "+this.xPct[t]+"% range must be divisible by step.");l[t]=nt(this.xVal,e,t)}return l},z.prototype.getAbsoluteDistance=function(e,t,l){var a=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[a+1];)a++;else e===this.xPct[this.xPct.length-1]&&(a=this.xPct.length-2);!l&&e===this.xPct[a+1]&&a++;var v,S=1,m=t[a],_=0,h=0,F=0,R=0;for(l?v=(e-this.xPct[a])/(this.xPct[a+1]-this.xPct[a]):v=(this.xPct[a+1]-e)/(this.xPct[a+1]-this.xPct[a]);m>0;)_=this.xPct[a+1+R]-this.xPct[a+R],t[a+R]*S+100-v*100>100?(h=_*v,S=(m-100*v)/t[a+R],v=1):(h=t[a+R]*_/100*S,S=0),l?(F=F-h,this.xPct.length+R>=1&&R--):(F=F+h,this.xPct.length-R>=1&&R++),m=t[a+R]*S;return e+F},z.prototype.toStepping=function(e){return e=yt(this.xVal,this.xPct,e),e},z.prototype.fromStepping=function(e){return wt(this.xVal,this.xPct,e)},z.prototype.getStep=function(e){return e=xt(this.xPct,this.xSteps,this.snap,e),e},z.prototype.getDefaultStep=function(e,t,l){var a=X(e,this.xPct);return(e===100||t&&e===this.xPct[a-1])&&(a=Math.max(a-1,1)),(this.xVal[a]-this.xVal[a-1])/l},z.prototype.getNearbySteps=function(e){var t=X(e,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},z.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(ut);return Math.max.apply(null,e)},z.prototype.convert=function(e){return this.getStep(this.toStepping(e))};var L={to:function(e){return e!==void 0&&e.toFixed(2)},from:Number},g={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},D={tooltips:".__tooltips",aria:".__aria"};function Gt(e){if(y(e))return!0;throw new Error("noUiSlider ("+o+"): 'format' requires 'to' and 'from' methods.")}function we(e,t){if(!H(t))throw new Error("noUiSlider ("+o+"): 'step' is not numeric.");e.singleStep=t}function xe(e,t){if(!H(t))throw new Error("noUiSlider ("+o+"): 'keyboardPageMultiplier' is not numeric.");e.keyboardPageMultiplier=t}function Ee(e,t){if(!H(t))throw new Error("noUiSlider ("+o+"): 'keyboardDefaultStep' is not numeric.");e.keyboardDefaultStep=t}function Pe(e,t){if(typeof t!="object"||Array.isArray(t))throw new Error("noUiSlider ("+o+"): 'range' is not an object.");if(t.min===void 0||t.max===void 0)throw new Error("noUiSlider ("+o+"): Missing 'min' or 'max' in 'range'.");if(t.min===t.max)throw new Error("noUiSlider ("+o+"): 'range' 'min' and 'max' cannot be equal.");e.spectrum=new z(t,e.snap,e.singleStep)}function Ce(e,t){if(t=$(t),!Array.isArray(t)||!t.length)throw new Error("noUiSlider ("+o+"): 'start' option is incorrect.");e.handles=t.length,e.start=t}function Ae(e,t){if(e.snap=t,typeof t!="boolean")throw new Error("noUiSlider ("+o+"): 'snap' option must be a boolean.")}function Oe(e,t){if(e.animate=t,typeof t!="boolean")throw new Error("noUiSlider ("+o+"): 'animate' option must be a boolean.")}function De(e,t){if(e.animationDuration=t,typeof t!="number")throw new Error("noUiSlider ("+o+"): 'animationDuration' option must be a number.")}function _e(e,t){var l=[!1],a;if(t==="lower"?t=[!0,!1]:t==="upper"&&(t=[!1,!0]),t===!0||t===!1){for(a=1;a<e.handles;a++)l.push(t);l.push(!1)}else{if(!Array.isArray(t)||!t.length||t.length!==e.handles+1)throw new Error("noUiSlider ("+o+"): 'connect' option doesn't match handle count.");l=t}e.connect=l}function Ue(e,t){switch(t){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider ("+o+"): 'orientation' option is invalid.")}}function $t(e,t){if(!H(t))throw new Error("noUiSlider ("+o+"): 'margin' option must be numeric.");t!==0&&(e.margin=e.spectrum.getDistance(t))}function je(e,t){if(!H(t))throw new Error("noUiSlider ("+o+"): 'limit' option must be numeric.");if(e.limit=e.spectrum.getDistance(t),!e.limit||e.handles<2)throw new Error("noUiSlider ("+o+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function ke(e,t){var l;if(!H(t)&&!Array.isArray(t))throw new Error("noUiSlider ("+o+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(t)&&!(t.length===2||H(t[0])||H(t[1])))throw new Error("noUiSlider ("+o+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(t!==0){for(Array.isArray(t)||(t=[t,t]),e.padding=[e.spectrum.getDistance(t[0]),e.spectrum.getDistance(t[1])],l=0;l<e.spectrum.xNumSteps.length-1;l++)if(e.padding[0][l]<0||e.padding[1][l]<0)throw new Error("noUiSlider ("+o+"): 'padding' option must be a positive number(s).");var a=t[0]+t[1],v=e.spectrum.xVal[0],S=e.spectrum.xVal[e.spectrum.xVal.length-1];if(a/(S-v)>1)throw new Error("noUiSlider ("+o+"): 'padding' option must not exceed 100% of the range.")}}function Ve(e,t){switch(t){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider ("+o+"): 'direction' option was not recognized.")}}function Le(e,t){if(typeof t!="string")throw new Error("noUiSlider ("+o+"): 'behaviour' must be a string containing options.");var l=t.indexOf("tap")>=0,a=t.indexOf("drag")>=0,v=t.indexOf("fixed")>=0,S=t.indexOf("snap")>=0,m=t.indexOf("hover")>=0,_=t.indexOf("unconstrained")>=0;if(v){if(e.handles!==2)throw new Error("noUiSlider ("+o+"): 'fixed' behaviour must be used with 2 handles");$t(e,e.start[1]-e.start[0])}if(_&&(e.margin||e.limit))throw new Error("noUiSlider ("+o+"): 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:l||S,drag:a,fixed:v,snap:S,hover:m,unconstrained:_}}function Me(e,t){if(t!==!1)if(t===!0){e.tooltips=[];for(var l=0;l<e.handles;l++)e.tooltips.push(!0)}else{if(e.tooltips=$(t),e.tooltips.length!==e.handles)throw new Error("noUiSlider ("+o+"): must pass a formatter for all handles.");e.tooltips.forEach(function(a){if(typeof a!="boolean"&&(typeof a!="object"||typeof a.to!="function"))throw new Error("noUiSlider ("+o+"): 'tooltips' must be passed a formatter or 'false'.")})}}function He(e,t){e.ariaFormat=t,Gt(t)}function Re(e,t){e.format=t,Gt(t)}function ze(e,t){if(e.keyboardSupport=t,typeof t!="boolean")throw new Error("noUiSlider ("+o+"): 'keyboardSupport' option must be a boolean.")}function Fe(e,t){e.documentElement=t}function Ne(e,t){if(typeof t!="string"&&t!==!1)throw new Error("noUiSlider ("+o+"): 'cssPrefix' must be a string or `false`.");e.cssPrefix=t}function Ie(e,t){if(typeof t!="object")throw new Error("noUiSlider ("+o+"): 'cssClasses' must be an object.");if(typeof e.cssPrefix=="string"){e.cssClasses={};for(var l in t)t.hasOwnProperty(l)&&(e.cssClasses[l]=e.cssPrefix+t[l])}else e.cssClasses=t}function Zt(e){var t={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:L,format:L},l={step:{r:!1,t:we},keyboardPageMultiplier:{r:!1,t:xe},keyboardDefaultStep:{r:!1,t:Ee},start:{r:!0,t:Ce},connect:{r:!0,t:_e},direction:{r:!0,t:Ve},snap:{r:!1,t:Ae},animate:{r:!1,t:Oe},animationDuration:{r:!1,t:De},range:{r:!0,t:Pe},orientation:{r:!1,t:Ue},margin:{r:!1,t:$t},limit:{r:!1,t:je},padding:{r:!1,t:ke},behaviour:{r:!0,t:Le},ariaFormat:{r:!1,t:He},format:{r:!1,t:Re},tooltips:{r:!1,t:Me},keyboardSupport:{r:!0,t:ze},documentElement:{r:!1,t:Fe},cssPrefix:{r:!0,t:Ne},cssClasses:{r:!0,t:Ie}},a={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:g,keyboardPageMultiplier:5,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(l).forEach(function(h){if(!I(e[h])&&a[h]===void 0){if(l[h].r)throw new Error("noUiSlider ("+o+"): '"+h+"' is required.");return!0}l[h].t(t,I(e[h])?e[h]:a[h])}),t.pips=e.pips;var v=document.createElement("div"),S=v.style.msTransform!==void 0,m=v.style.transform!==void 0;t.transformRule=m?"transform":S?"msTransform":"webkitTransform";var _=[["left","top"],["right","bottom"]];return t.style=_[t.dir][t.ort],t}function Te(e,t,l){var a=mt(),v=gt(),S=v&&ht(),m=e,_,h,F,R,Z,w=t.spectrum,at=[],M=[],T=[],jt=0,q={},ct,st=e.ownerDocument,Pt=t.documentElement||st.documentElement,Ct=st.body,Ke=-1,At=0,kt=1,Vt=2,Be=st.dir==="rtl"||t.ort===1?0:100;function K(r,i){var n=st.createElement("div");return i&&k(n,i),r.appendChild(n),n}function Je(r,i){var n=K(r,t.cssClasses.origin),s=K(n,t.cssClasses.handle);return K(s,t.cssClasses.touchArea),s.setAttribute("data-handle",i),t.keyboardSupport&&(s.setAttribute("tabindex","0"),s.addEventListener("keydown",function(c){return sr(c,i)})),s.setAttribute("role","slider"),s.setAttribute("aria-orientation",t.ort?"vertical":"horizontal"),i===0?k(s,t.cssClasses.handleLower):i===t.handles-1&&k(s,t.cssClasses.handleUpper),n}function Qt(r,i){return i?K(r,t.cssClasses.connect):!1}function We(r,i){var n=K(i,t.cssClasses.connects);h=[],F=[],F.push(Qt(n,r[0]));for(var s=0;s<t.handles;s++)h.push(Je(i,s)),T[s]=s,F.push(Qt(n,r[s+1]))}function Xe(r){k(r,t.cssClasses.target),t.dir===0?k(r,t.cssClasses.ltr):k(r,t.cssClasses.rtl),t.ort===0?k(r,t.cssClasses.horizontal):k(r,t.cssClasses.vertical);var i=getComputedStyle(r).direction;return i==="rtl"?k(r,t.cssClasses.textDirectionRtl):k(r,t.cssClasses.textDirectionLtr),K(r,t.cssClasses.base)}function Ye(r,i){return t.tooltips[i]?K(r.firstChild,t.cssClasses.tooltip):!1}function te(){return m.hasAttribute("disabled")}function Lt(r){var i=h[r];return i.hasAttribute("disabled")}function Mt(){Z&&(pt("update"+D.tooltips),Z.forEach(function(r){r&&A(r)}),Z=null)}function ee(){Mt(),Z=h.map(Ye),Nt("update"+D.tooltips,function(r,i,n){if(Z[i]){var s=r[i];t.tooltips[i]!==!0&&(s=t.tooltips[i].to(n[i])),Z[i].innerHTML=s}})}function Ge(){pt("update"+D.aria),Nt("update"+D.aria,function(r,i,n,s,c){T.forEach(function(p){var u=h[p],P=Ot(M,p,0,!0,!0,!0),b=Ot(M,p,100,!0,!0,!0),x=c[p],E=t.ariaFormat.to(n[p]);P=w.fromStepping(P).toFixed(1),b=w.fromStepping(b).toFixed(1),x=w.fromStepping(x).toFixed(1),u.children[0].setAttribute("aria-valuemin",P),u.children[0].setAttribute("aria-valuemax",b),u.children[0].setAttribute("aria-valuenow",x),u.children[0].setAttribute("aria-valuetext",E)})})}function $e(r,i,n){if(r==="range"||r==="steps")return w.xVal;if(r==="count"){if(i<2)throw new Error("noUiSlider ("+o+"): 'values' (>= 2) required for mode 'count'.");var s=i-1,c=100/s;for(i=[];s--;)i[s]=s*c;i.push(100),r="positions"}if(r==="positions")return i.map(function(p){return w.fromStepping(n?w.getStep(p):p)});if(r==="values")return n?i.map(function(p){return w.fromStepping(w.getStep(w.toStepping(p)))}):i}function Ze(r,i,n){function s(E,U){return(E+U).toFixed(7)/1}var c={},p=w.xVal[0],u=w.xVal[w.xVal.length-1],P=!1,b=!1,x=0;return n=B(n.slice().sort(function(E,U){return E-U})),n[0]!==p&&(n.unshift(p),P=!0),n[n.length-1]!==u&&(n.push(u),b=!0),n.forEach(function(E,U){var j,C,Y,lt=E,G=n[U+1],N,qt,Kt,Bt,ue,Jt,ce,pe=i==="steps";if(pe&&(j=w.xNumSteps[U]),j||(j=G-lt),lt!==!1)for(G===void 0&&(G=lt),j=Math.max(j,1e-7),C=lt;C<=G;C=s(C,j)){for(N=w.toStepping(C),qt=N-x,ue=qt/r,Jt=Math.round(ue),ce=qt/Jt,Y=1;Y<=Jt;Y+=1)Kt=x+Y*ce,c[Kt.toFixed(5)]=[w.fromStepping(Kt),0];Bt=n.indexOf(C)>-1?kt:pe?Vt:At,!U&&P&&C!==G&&(Bt=0),C===G&&b||(c[N.toFixed(5)]=[C,Bt]),x=N}}),c}function Qe(r,i,n){var s=st.createElement("div"),c=[];c[At]=t.cssClasses.valueNormal,c[kt]=t.cssClasses.valueLarge,c[Vt]=t.cssClasses.valueSub;var p=[];p[At]=t.cssClasses.markerNormal,p[kt]=t.cssClasses.markerLarge,p[Vt]=t.cssClasses.markerSub;var u=[t.cssClasses.valueHorizontal,t.cssClasses.valueVertical],P=[t.cssClasses.markerHorizontal,t.cssClasses.markerVertical];k(s,t.cssClasses.pips),k(s,t.ort===0?t.cssClasses.pipsHorizontal:t.cssClasses.pipsVertical);function b(E,U){var j=U===t.cssClasses.value,C=j?u:P,Y=j?c:p;return U+" "+C[t.ort]+" "+Y[E]}function x(E,U,j){if(j=i?i(U,j):j,j!==Ke){var C=K(s,!1);C.className=b(j,t.cssClasses.marker),C.style[t.style]=E+"%",j>At&&(C=K(s,!1),C.className=b(j,t.cssClasses.value),C.setAttribute("data-value",U),C.style[t.style]=E+"%",C.innerHTML=n.to(U))}}return Object.keys(r).forEach(function(E){x(E,r[E][0],r[E][1])}),s}function Ht(){R&&(A(R),R=null)}function Rt(r){Ht();var i=r.mode,n=r.density||1,s=r.filter||!1,c=r.values||!1,p=r.stepped||!1,u=$e(i,c,p),P=Ze(n,i,u),b=r.format||{to:Math.round};return R=m.appendChild(Qe(P,s,b)),R}function re(){var r=_.getBoundingClientRect(),i="offset"+["Width","Height"][t.ort];return t.ort===0?r.width||_[i]:r.height||_[i]}function Q(r,i,n,s){var c=function(u){if(u=tr(u,s.pageOffset,s.target||i),!u||te()&&!s.doNotReject||dt(m,t.cssClasses.tap)&&!s.doNotReject||r===a.start&&u.buttons!==void 0&&u.buttons>1||s.hover&&u.buttons)return!1;S||u.preventDefault(),u.calcPoint=u.points[t.ort],n(u,s)},p=[];return r.split(" ").forEach(function(u){i.addEventListener(u,c,S?{passive:!0}:!1),p.push([u,c])}),p}function tr(r,i,n){var s=r.type.indexOf("touch")===0,c=r.type.indexOf("mouse")===0,p=r.type.indexOf("pointer")===0,u,P;if(r.type.indexOf("MSPointer")===0&&(p=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(s){var b=function(U){return U.target===n||n.contains(U.target)||U.target.shadowRoot&&U.target.shadowRoot.contains(n)};if(r.type==="touchstart"){var x=Array.prototype.filter.call(r.touches,b);if(x.length>1)return!1;u=x[0].pageX,P=x[0].pageY}else{var E=Array.prototype.find.call(r.changedTouches,b);if(!E)return!1;u=E.pageX,P=E.pageY}}return i=i||vt(st),(c||p)&&(u=r.clientX+i.x,P=r.clientY+i.y),r.pageOffset=i,r.points=[u,P],r.cursor=c||p,r}function ie(r){var i=r-W(_,t.ort),n=i*100/re();return n=et(n),t.dir?100-n:n}function er(r){var i=100,n=!1;return h.forEach(function(s,c){if(!Lt(c)){var p=M[c],u=Math.abs(p-r),P=u===100&&i===100,b=u<i,x=u<=i&&r>p;(b||x||P)&&(n=c,i=u)}}),n}function rr(r,i){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&zt(r,i)}function ir(r,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&i.buttonsProperty!==0)return zt(r,i);var n=(t.dir?-1:1)*(r.calcPoint-i.startCalcPoint),s=n*100/i.baseSize;ne(n>0,s,i.locations,i.handleNumbers)}function zt(r,i){i.handle&&(rt(i.handle,t.cssClasses.active),jt-=1),i.listeners.forEach(function(n){Pt.removeEventListener(n[0],n[1])}),jt===0&&(rt(m,t.cssClasses.drag),Tt(),r.cursor&&(Ct.style.cursor="",Ct.removeEventListener("selectstart",O))),i.handleNumbers.forEach(function(n){V("change",n),V("set",n),V("end",n)})}function Ft(r,i){if(i.handleNumbers.some(Lt))return!1;var n;if(i.handleNumbers.length===1){var s=h[i.handleNumbers[0]];n=s.children[0],jt+=1,k(n,t.cssClasses.active)}r.stopPropagation();var c=[],p=Q(a.move,Pt,ir,{target:r.target,handle:n,listeners:c,startCalcPoint:r.calcPoint,baseSize:re(),pageOffset:r.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:r.buttons,locations:M.slice()}),u=Q(a.end,Pt,zt,{target:r.target,handle:n,listeners:c,doNotReject:!0,handleNumbers:i.handleNumbers}),P=Q("mouseout",Pt,rr,{target:r.target,handle:n,listeners:c,doNotReject:!0,handleNumbers:i.handleNumbers});c.push.apply(c,p.concat(u,P)),r.cursor&&(Ct.style.cursor=getComputedStyle(r.target).cursor,h.length>1&&k(m,t.cssClasses.drag),Ct.addEventListener("selectstart",O,!1)),i.handleNumbers.forEach(function(b){V("start",b)})}function nr(r){r.stopPropagation();var i=ie(r.calcPoint),n=er(i);if(n===!1)return!1;t.events.snap||tt(m,t.cssClasses.tap,t.animationDuration),ot(n,i,!0,!0),Tt(),V("slide",n,!0),V("update",n,!0),V("change",n,!0),V("set",n,!0),t.events.snap&&Ft(r,{handleNumbers:[n]})}function ar(r){var i=ie(r.calcPoint),n=w.getStep(i),s=w.fromStepping(n);Object.keys(q).forEach(function(c){c.split(".")[0]==="hover"&&q[c].forEach(function(p){p.call(ct,s)})})}function sr(r,i){if(te()||Lt(i))return!1;var n=["Left","Right"],s=["Down","Up"],c=["PageDown","PageUp"],p=["Home","End"];t.dir&&!t.ort?n.reverse():t.ort&&!t.dir&&(s.reverse(),c.reverse());var u=r.key.replace("Arrow",""),P=u===c[0],b=u===c[1],x=u===s[0]||u===n[0]||P,E=u===s[1]||u===n[1]||b,U=u===p[0],j=u===p[1];if(!x&&!E&&!U&&!j)return!0;r.preventDefault();var C;if(E||x){var Y=t.keyboardPageMultiplier,lt=x?0:1,G=fe(i),N=G[lt];if(N===null)return!1;N===!1&&(N=w.getDefaultStep(M[i],x,t.keyboardDefaultStep)),(b||P)&&(N*=Y),N=Math.max(N,1e-7),N=(x?-1:1)*N,C=at[i]+N}else j?C=t.spectrum.xVal[t.spectrum.xVal.length-1]:C=t.spectrum.xVal[0];return ot(i,w.toStepping(C),!0,!0),V("slide",i),V("update",i),V("change",i),V("set",i),!1}function or(r){r.fixed||h.forEach(function(i,n){Q(a.start,i.children[0],Ft,{handleNumbers:[n]})}),r.tap&&Q(a.start,_,nr,{}),r.hover&&Q(a.move,_,ar,{hover:!0}),r.drag&&F.forEach(function(i,n){if(!(i===!1||n===0||n===F.length-1)){var s=h[n-1],c=h[n],p=[i];k(i,t.cssClasses.draggable),r.fixed&&(p.push(s.children[0]),p.push(c.children[0])),p.forEach(function(u){Q(a.start,u,Ft,{handles:[s,c],handleNumbers:[n-1,n]})})}})}function Nt(r,i){q[r]=q[r]||[],q[r].push(i),r.split(".")[0]==="update"&&h.forEach(function(n,s){V("update",s)})}function lr(r){return r===D.aria||r===D.tooltips}function pt(r){var i=r&&r.split(".")[0],n=i?r.substring(i.length):r;Object.keys(q).forEach(function(s){var c=s.split(".")[0],p=s.substring(c.length);(!i||i===c)&&(!n||n===p)&&(!lr(p)||n===p)&&delete q[s]})}function V(r,i,n){Object.keys(q).forEach(function(s){var c=s.split(".")[0];r===c&&q[s].forEach(function(p){p.call(ct,at.map(t.format.to),i,at.slice(),n||!1,M.slice(),ct)})})}function Ot(r,i,n,s,c,p){var u;return h.length>1&&!t.events.unconstrained&&(s&&i>0&&(u=w.getAbsoluteDistance(r[i-1],t.margin,0),n=Math.max(n,u)),c&&i<h.length-1&&(u=w.getAbsoluteDistance(r[i+1],t.margin,1),n=Math.min(n,u))),h.length>1&&t.limit&&(s&&i>0&&(u=w.getAbsoluteDistance(r[i-1],t.limit,0),n=Math.min(n,u)),c&&i<h.length-1&&(u=w.getAbsoluteDistance(r[i+1],t.limit,1),n=Math.max(n,u))),t.padding&&(i===0&&(u=w.getAbsoluteDistance(0,t.padding[0],0),n=Math.max(n,u)),i===h.length-1&&(u=w.getAbsoluteDistance(100,t.padding[1],1),n=Math.min(n,u))),n=w.getStep(n),n=et(n),n===r[i]&&!p?!1:n}function It(r,i){var n=t.ort;return(n?i:r)+", "+(n?r:i)}function ne(r,i,n,s){var c=n.slice(),p=[!r,r],u=[r,!r];s=s.slice(),r&&s.reverse(),s.length>1?s.forEach(function(b,x){var E=Ot(c,b,c[b]+i,p[x],u[x],!1);E===!1?i=0:(i=E-c[b],c[b]=E)}):p=u=[!0];var P=!1;s.forEach(function(b,x){P=ot(b,n[b]+i,p[x],u[x])||P}),P&&s.forEach(function(b){V("update",b),V("slide",b)})}function ae(r,i){return t.dir?100-r-i:r}function fr(r,i){M[r]=i,at[r]=w.fromStepping(i);var n=10*(ae(i,0)-Be),s="translate("+It(n+"%","0")+")";h[r].style[t.transformRule]=s,se(r),se(r+1)}function Tt(){T.forEach(function(r){var i=M[r]>50?-1:1,n=3+(h.length+i*r);h[r].style.zIndex=n})}function ot(r,i,n,s,c){return c||(i=Ot(M,r,i,n,s,!1)),i===!1?!1:(fr(r,i),!0)}function se(r){if(F[r]){var i=0,n=100;r!==0&&(i=M[r-1]),r!==F.length-1&&(n=M[r]);var s=n-i,c="translate("+It(ae(i,s)+"%","0")+")",p="scale("+It(s/100,"1")+")";F[r].style[t.transformRule]=c+" "+p}}function oe(r,i){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=t.format.from(r),r=w.toStepping(r),r===!1||isNaN(r))?M[i]:r}function Dt(r,i,n){var s=$(r),c=M[0]===void 0;i=i===void 0?!0:!!i,t.animate&&!c&&tt(m,t.cssClasses.tap,t.animationDuration),T.forEach(function(u){ot(u,oe(s[u],u),!0,!1,n)});for(var p=T.length===1?0:1;p<T.length;++p)T.forEach(function(u){ot(u,M[u],!0,!0,n)});Tt(),T.forEach(function(u){V("update",u),s[u]!==null&&i&&V("set",u)})}function ur(r){Dt(t.start,r)}function cr(r,i,n,s){if(r=Number(r),!(r>=0&&r<T.length))throw new Error("noUiSlider ("+o+"): invalid handle number, got: "+r);ot(r,oe(i,r),!0,!0,s),V("update",r),n&&V("set",r)}function le(){var r=at.map(t.format.to);return r.length===1?r[0]:r}function pr(){pt(D.aria),pt(D.tooltips);for(var r in t.cssClasses)t.cssClasses.hasOwnProperty(r)&&rt(m,t.cssClasses[r]);for(;m.firstChild;)m.removeChild(m.firstChild);delete m.noUiSlider}function fe(r){var i=M[r],n=w.getNearbySteps(i),s=at[r],c=n.thisStep.step,p=null;if(t.snap)return[s-n.stepBefore.startValue||null,n.stepAfter.startValue-s||null];c!==!1&&s+c>n.stepAfter.startValue&&(c=n.stepAfter.startValue-s),s>n.thisStep.startValue?p=n.thisStep.step:n.stepBefore.step===!1?p=!1:p=s-n.stepBefore.highestStep,i===100?c=null:i===0&&(p=null);var u=w.countStepDecimals();return c!==null&&c!==!1&&(c=Number(c.toFixed(u))),p!==null&&p!==!1&&(p=Number(p.toFixed(u))),[p,c]}function dr(){return T.map(fe)}function vr(r,i){var n=le(),s=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];s.forEach(function(p){r[p]!==void 0&&(l[p]=r[p])});var c=Zt(l);s.forEach(function(p){r[p]!==void 0&&(t[p]=c[p])}),w=c.spectrum,t.margin=c.margin,t.limit=c.limit,t.padding=c.padding,t.pips?Rt(t.pips):Ht(),t.tooltips?ee():Mt(),M=[],Dt(I(r.start)?r.start:n,i)}function mr(){_=Xe(m),We(t.connect,_),or(t.events),Dt(t.start),t.pips&&Rt(t.pips),t.tooltips&&ee(),Ge()}return mr(),ct={destroy:pr,steps:dr,on:Nt,off:pt,get:le,set:Dt,setHandle:cr,reset:ur,__moveHandles:function(r,i,n){ne(r,i,M,n)},options:l,updateOptions:vr,target:m,removePips:Ht,removeTooltips:Mt,getTooltips:function(){return Z},getOrigins:function(){return h},pips:Rt},ct}function qe(e,t){if(!e||!e.nodeName)throw new Error("noUiSlider ("+o+"): create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider ("+o+"): Slider was already initialized.");var l=Zt(t),a=Te(e,l,t);return e.noUiSlider=a,a}return{__spectrum:z,version:o,cssClasses:g,create:qe}})})(ge);var gr=ge.exports;const Sr=hr(gr);function br(d,f){var o=d==null?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(o!=null){var y,A,I,O,B=[],J=!0,W=!1;try{if(I=(o=o.call(d)).next,f!==0)for(;!(J=(y=I.call(o)).done)&&(B.push(y.value),B.length!==f);J=!0);}catch(H){W=!0,A=H}finally{try{if(!J&&o.return!=null&&(O=o.return(),Object(O)!==O))return}finally{if(W)throw A}}return B}}function de(d,f){var o=Object.keys(d);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(d);f&&(y=y.filter(function(A){return Object.getOwnPropertyDescriptor(d,A).enumerable})),o.push.apply(o,y)}return o}function yr(d){for(var f=1;f<arguments.length;f++){var o=arguments[f]!=null?arguments[f]:{};f%2?de(Object(o),!0).forEach(function(y){Er(d,y,o[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(o)):de(Object(o)).forEach(function(y){Object.defineProperty(d,y,Object.getOwnPropertyDescriptor(o,y))})}return d}function wr(d,f){if(typeof d!="object"||!d)return d;var o=d[Symbol.toPrimitive];if(o!==void 0){var y=o.call(d,f||"default");if(typeof y!="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return(f==="string"?String:Number)(d)}function xr(d){var f=wr(d,"string");return typeof f=="symbol"?f:String(f)}function _t(d){"@babel/helpers - typeof";return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},_t(d)}function Er(d,f,o){return f=xr(f),f in d?Object.defineProperty(d,f,{value:o,enumerable:!0,configurable:!0,writable:!0}):d[f]=o,d}function Xt(){return Xt=Object.assign?Object.assign.bind():function(d){for(var f=1;f<arguments.length;f++){var o=arguments[f];for(var y in o)Object.prototype.hasOwnProperty.call(o,y)&&(d[y]=o[y])}return d},Xt.apply(this,arguments)}function Se(d,f){return Cr(d)||br(d,f)||be(d,f)||Dr()}function ve(d){return Pr(d)||Ar(d)||be(d)||Or()}function Pr(d){if(Array.isArray(d))return Yt(d)}function Cr(d){if(Array.isArray(d))return d}function Ar(d){if(typeof Symbol<"u"&&d[Symbol.iterator]!=null||d["@@iterator"]!=null)return Array.from(d)}function be(d,f){if(d){if(typeof d=="string")return Yt(d,f);var o=Object.prototype.toString.call(d).slice(8,-1);if(o==="Object"&&d.constructor&&(o=d.constructor.name),o==="Map"||o==="Set")return Array.from(d);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Yt(d,f)}}function Yt(d,f){(f==null||f>d.length)&&(f=d.length);for(var o=0,y=new Array(f);o<f;o++)y[o]=d[o];return y}function Or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var me=function(f){return Object.entries(f).sort().reduce(function(o,y){var A=Se(y,2),I=A[0],O=A[1];return o[I]=O,o},{})},he=function(f,o){return typeof f=="number"&&typeof o=="number"||typeof f=="string"&&typeof o=="string"?f===o:Array.isArray(f)&&Array.isArray(o)?JSON.stringify(f)===JSON.stringify(o):_t(f)==="object"&&_t(o)==="object"?JSON.stringify(me(f))===JSON.stringify(me(o)):!1},_r=function(f,o){var y=f.start,A=f.step,I=f.disabled,O=f.range;return o.step===A&&he(o.start,y)&&o.disabled===I&&he(o.range,O)},ye=function(f){var o=ft.useState(null),y=Se(o,2),A=y[0],I=y[1],O=Wt.createRef();ft.useEffect(function(){var L=f.instanceRef,g=L&&Object.prototype.hasOwnProperty.call(L,"current");return L&&L instanceof Function&&L(O.current),g&&(L.current=O.current),function(){g&&(L.current=null)}},[O]);var B=function(g){var D=Number(g.target.getAttribute("data-value"));A&&A.set(D)},J=function(g){var D=O.current;D&&(g?D.setAttribute("disabled",!0):D.removeAttribute("disabled"))},W=f.onUpdate,H=f.onChange,tt=f.onSlide,et=f.onStart,$=f.onEnd,ut=f.onSet,k=function(g){et&&(g.off("start"),g.on("start",et)),tt&&(g.off("slide"),g.on("slide",tt)),W&&(g.off("update"),g.on("update",W)),H&&(g.off("change"),g.on("change",H)),ut&&(g.off("set"),g.on("set",ut)),$&&(g.off("end"),g.on("end",$))},rt=function(g){var D=O.current;D.noUiSlider.updateOptions(g)},dt=function(){if(f.clickablePips){var g=O.current;ve(g.querySelectorAll(".noUi-value")).forEach(function(D){D.style.cursor="pointer",D.addEventListener("click",B)})}},vt=function(){if(!O.current.noUiSlider){var g=Sr.create(O.current,yr({},f));k(g),I(g)}};ft.useEffect(function(){var L=f.disabled,g=O.current;return g&&(J(L),vt()),function(){A&&A.destroy(),g&&ve(g.querySelectorAll(".noUi-value")).forEach(function(D){D.removeEventListener("click",B)})}},[]),ft.useEffect(function(){A&&dt()},[A]);var mt=f.start,ht=f.disabled,gt=f.range,it=f.step,nt=f.margin,St=f.padding,bt=f.limit,X=f.pips,yt=f.snap,wt=f.animate;ft.useEffect(function(){A&&(rt({range:gt,step:it,padding:St,margin:nt,limit:bt,pips:X,snap:yt,animate:wt}),A.set(mt),dt()),J(ht)},[mt,ht,gt,it,nt,St,bt,X,yt,wt]),ft.useEffect(function(){A&&k(A)},[W,H,tt,et,$,ut]);var xt=f.id,Et=f.className,Ut=f.style,z={};return xt&&(z.id=xt),Et&&(z.className=Et),Wt.createElement("div",Xt({},z,{ref:O,style:Ut}))};ye.defaultProps={animate:!0,behaviour:"tap",className:null,clickablePips:!1,connect:!1,direction:"ltr",disabled:!1,format:null,margin:null,limit:null,keyboardSupport:!0,id:null,instanceRef:null,padding:0,pips:null,snap:!1,step:null,style:null,orientation:"horizontal",tooltips:!1,onChange:function(){},onEnd:function(){},onSet:function(){},onSlide:function(){},onStart:function(){},onUpdate:function(){}};var jr=Wt.memo(ye,_r);export{jr as i};
