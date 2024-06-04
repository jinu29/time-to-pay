import{r as f,R as sr}from"./app-D3qFl5QJ.js";import{P as p}from"./index-B9h42nwt.js";function P(e,r,n,t){function i(o){return o instanceof n?o:new n(function(c){c(o)})}return new(n||(n=Promise))(function(o,c){function s(m){try{l(t.next(m))}catch(b){c(b)}}function g(m){try{l(t.throw(m))}catch(b){c(b)}}function l(m){m.done?o(m.value):i(m.value).then(s,g)}l((t=t.apply(e,r||[])).next())})}function T(e,r){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},t,i,o,c;return c={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function s(l){return function(m){return g([l,m])}}function g(l){if(t)throw new TypeError("Generator is already executing.");for(;c&&(c=0,l[0]&&(n=0)),n;)try{if(t=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){n.label=l[1];break}if(l[0]===6&&n.label<o[1]){n.label=o[1],o=l;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(l);break}o[2]&&n.ops.pop(),n.trys.pop();continue}l=r.call(e,n)}catch(m){l=[6,m],i=0}finally{t=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function ze(e,r){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var t=n.call(e),i,o=[],c;try{for(;(r===void 0||r-- >0)&&!(i=t.next()).done;)o.push(i.value)}catch(s){c={error:s}}finally{try{i&&!i.done&&(n=t.return)&&n.call(t)}finally{if(c)throw c.error}}return o}function Me(e,r,n){if(n||arguments.length===2)for(var t=0,i=r.length,o;t<i;t++)(o||!(t in r))&&(o||(o=Array.prototype.slice.call(r,0,t)),o[t]=r[t]);return e.concat(o||Array.prototype.slice.call(r))}var fr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function H(e,r){var n=pr(e);if(typeof n.path!="string"){var t=e.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof r=="string"?r:typeof t=="string"&&t.length>0?t:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function pr(e){var r=e.name,n=r&&r.lastIndexOf(".")!==-1;if(n&&!e.type){var t=r.split(".").pop().toLowerCase(),i=fr.get(t);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var dr=[".DS_Store","Thumbs.db"];function gr(e){return P(this,void 0,void 0,function(){return T(this,function(r){return V(e)&&mr(e.dataTransfer)?[2,hr(e.dataTransfer,e.type)]:vr(e)?[2,yr(e)]:Array.isArray(e)&&e.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,br(e)]:[2,[]]})})}function mr(e){return V(e)}function vr(e){return V(e)&&V(e.target)}function V(e){return typeof e=="object"&&e!==null}function yr(e){return ge(e.target.files).map(function(r){return H(r)})}function br(e){return P(this,void 0,void 0,function(){var r;return T(this,function(n){switch(n.label){case 0:return[4,Promise.all(e.map(function(t){return t.getFile()}))];case 1:return r=n.sent(),[2,r.map(function(t){return H(t)})]}})})}function hr(e,r){return P(this,void 0,void 0,function(){var n,t;return T(this,function(i){switch(i.label){case 0:return e.items?(n=ge(e.items).filter(function(o){return o.kind==="file"}),r!=="drop"?[2,n]:[4,Promise.all(n.map(Dr))]):[3,2];case 1:return t=i.sent(),[2,Le(qe(t))];case 2:return[2,Le(ge(e.files).map(function(o){return H(o)}))]}})})}function Le(e){return e.filter(function(r){return dr.indexOf(r.name)===-1})}function ge(e){if(e===null)return[];for(var r=[],n=0;n<e.length;n++){var t=e[n];r.push(t)}return r}function Dr(e){if(typeof e.webkitGetAsEntry!="function")return Ke(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Je(r):Ke(e)}function qe(e){return e.reduce(function(r,n){return Me(Me([],ze(r),!1),ze(Array.isArray(n)?qe(n):[n]),!1)},[])}function Ke(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var n=H(r);return Promise.resolve(n)}function wr(e){return P(this,void 0,void 0,function(){return T(this,function(r){return[2,e.isDirectory?Je(e):Ar(e)]})})}function Je(e){var r=e.createReader();return new Promise(function(n,t){var i=[];function o(){var c=this;r.readEntries(function(s){return P(c,void 0,void 0,function(){var g,l,m;return T(this,function(b){switch(b.label){case 0:if(s.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return g=b.sent(),n(g),[3,4];case 3:return l=b.sent(),t(l),[3,4];case 4:return[3,6];case 5:m=Promise.all(s.map(wr)),i.push(m),o(),b.label=6;case 6:return[2]}})})},function(s){t(s)})}o()})}function Ar(e){return P(this,void 0,void 0,function(){return T(this,function(r){return[2,new Promise(function(n,t){e.file(function(i){var o=H(i,e.fullPath);n(o)},function(i){t(i)})})]})})}var Er=function(e,r){if(e&&r){var n=Array.isArray(r)?r:r.split(","),t=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return n.some(function(c){var s=c.trim().toLowerCase();return s.charAt(0)==="."?t.toLowerCase().endsWith(s):s.endsWith("/*")?o===s.replace(/\/.*$/,""):i===s})}return!0};function $e(e){return xr(e)||Fr(e)||Qe(e)||Or()}function Or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xr(e){if(Array.isArray(e))return me(e)}function He(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function We(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?He(Object(n),!0).forEach(function(t){Ve(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ve(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function $(e,r){return Cr(e)||jr(e,r)||Qe(e,r)||_r()}function _r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qe(e,r){if(e){if(typeof e=="string")return me(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return me(e,r)}}function me(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function jr(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t=[],i=!0,o=!1,c,s;try{for(n=n.call(e);!(i=(c=n.next()).done)&&(t.push(c.value),!(r&&t.length===r));i=!0);}catch(g){o=!0,s=g}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return t}}function Cr(e){if(Array.isArray(e))return e}var Sr="file-invalid-type",Pr="file-too-large",Tr="file-too-small",Ir="too-many-files",kr=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var n=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Sr,message:"File type must be ".concat(n)}},Be=function(r){return{code:Pr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Ne=function(r){return{code:Tr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Rr={code:Ir,message:"Too many files"};function Xe(e,r){var n=e.type==="application/x-moz-file"||Er(e,r);return[n,n?null:kr(r)]}function Ze(e,r,n){if(x(e.size))if(x(r)&&x(n)){if(e.size>n)return[!1,Be(n)];if(e.size<r)return[!1,Ne(r)]}else{if(x(r)&&e.size<r)return[!1,Ne(r)];if(x(n)&&e.size>n)return[!1,Be(n)]}return[!0,null]}function x(e){return e!=null}function zr(e){var r=e.files,n=e.accept,t=e.minSize,i=e.maxSize,o=e.multiple,c=e.maxFiles,s=e.validator;return!o&&r.length>1||o&&c>=1&&r.length>c?!1:r.every(function(g){var l=Xe(g,n),m=$(l,1),b=m[0],I=Ze(g,t,i),k=$(I,1),R=k[0],z=s?s(g):null;return b&&R&&!z})}function Q(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function J(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Ue(e){e.preventDefault()}function Mr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Lr(e){return e.indexOf("Edge/")!==-1}function Kr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Mr(e)||Lr(e)}function E(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),c=1;c<i;c++)o[c-1]=arguments[c];return r.some(function(s){return!Q(t)&&s&&s.apply(void 0,[t].concat(o)),Q(t)})}}function $r(){return"showOpenFilePicker"in window}function Hr(e){if(x(e)){var r=Object.entries(e).filter(function(n){var t=$(n,2),i=t[0],o=t[1],c=!0;return er(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(o)||!o.every(rr))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(n,t){var i=$(t,2),o=i[0],c=i[1];return We(We({},n),{},Ve({},o,c))},{});return[{description:"Files",accept:r}]}return e}function Wr(e){if(x(e))return Object.entries(e).reduce(function(r,n){var t=$(n,2),i=t[0],o=t[1];return[].concat($e(r),[i],$e(o))},[]).filter(function(r){return er(r)||rr(r)}).join(",")}function Br(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Nr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function er(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function rr(e){return/^.*\.[\w]+$/.test(e)}var Ur=["children"],Gr=["open"],Yr=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],qr=["refKey","onChange","onClick"];function Jr(e){return Xr(e)||Qr(e)||nr(e)||Vr()}function Vr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xr(e){if(Array.isArray(e))return ve(e)}function de(e,r){return rn(e)||en(e,r)||nr(e,r)||Zr()}function Zr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nr(e,r){if(e){if(typeof e=="string")return ve(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ve(e,r)}}function ve(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function en(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t=[],i=!0,o=!1,c,s;try{for(n=n.call(e);!(i=(c=n.next()).done)&&(t.push(c.value),!(r&&t.length===r));i=!0);}catch(g){o=!0,s=g}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return t}}function rn(e){if(Array.isArray(e))return e}function Ge(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Ge(Object(n),!0).forEach(function(t){ye(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ge(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ye(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function X(e,r){if(e==null)return{};var n=nn(e,r),t,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function nn(e,r){if(e==null)return{};var n={},t=Object.keys(e),i,o;for(o=0;o<t.length;o++)i=t[o],!(r.indexOf(i)>=0)&&(n[i]=e[i]);return n}var he=f.forwardRef(function(e,r){var n=e.children,t=X(e,Ur),i=tn(t),o=i.open,c=X(i,Gr);return f.useImperativeHandle(r,function(){return{open:o}},[o]),sr.createElement(f.Fragment,null,n(d(d({},c),{},{open:o})))});he.displayName="Dropzone";var tr={disabled:!1,getFilesFromEvent:gr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};he.defaultProps=tr;he.propTypes={children:p.func,accept:p.objectOf(p.arrayOf(p.string)),multiple:p.bool,preventDropOnDocument:p.bool,noClick:p.bool,noKeyboard:p.bool,noDrag:p.bool,noDragEventsBubbling:p.bool,minSize:p.number,maxSize:p.number,maxFiles:p.number,disabled:p.bool,getFilesFromEvent:p.func,onFileDialogCancel:p.func,onFileDialogOpen:p.func,useFsAccessApi:p.bool,autoFocus:p.bool,onDragEnter:p.func,onDragLeave:p.func,onDragOver:p.func,onDrop:p.func,onDropAccepted:p.func,onDropRejected:p.func,onError:p.func,validator:p.func};var be={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function tn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=d(d({},tr),e),n=r.accept,t=r.disabled,i=r.getFilesFromEvent,o=r.maxSize,c=r.minSize,s=r.multiple,g=r.maxFiles,l=r.onDragEnter,m=r.onDragLeave,b=r.onDragOver,I=r.onDrop,k=r.onDropAccepted,R=r.onDropRejected,z=r.onFileDialogCancel,Z=r.onFileDialogOpen,De=r.useFsAccessApi,we=r.autoFocus,ee=r.preventDropOnDocument,Ae=r.noClick,re=r.noKeyboard,Ee=r.noDrag,O=r.noDragEventsBubbling,ne=r.onError,M=r.validator,L=f.useMemo(function(){return Wr(n)},[n]),Oe=f.useMemo(function(){return Hr(n)},[n]),te=f.useMemo(function(){return typeof Z=="function"?Z:Ye},[Z]),W=f.useMemo(function(){return typeof z=="function"?z:Ye},[z]),h=f.useRef(null),A=f.useRef(null),or=f.useReducer(on,be),Fe=de(or,2),oe=Fe[0],D=Fe[1],ir=oe.isFocused,xe=oe.isFileDialogActive,B=f.useRef(typeof window<"u"&&window.isSecureContext&&De&&$r()),_e=function(){!B.current&&xe&&setTimeout(function(){if(A.current){var u=A.current.files;u.length||(D({type:"closeDialog"}),W())}},300)};f.useEffect(function(){return window.addEventListener("focus",_e,!1),function(){window.removeEventListener("focus",_e,!1)}},[A,xe,W,B]);var _=f.useRef([]),je=function(u){h.current&&h.current.contains(u.target)||(u.preventDefault(),_.current=[])};f.useEffect(function(){return ee&&(document.addEventListener("dragover",Ue,!1),document.addEventListener("drop",je,!1)),function(){ee&&(document.removeEventListener("dragover",Ue),document.removeEventListener("drop",je))}},[h,ee]),f.useEffect(function(){return!t&&we&&h.current&&h.current.focus(),function(){}},[h,we,t]);var F=f.useCallback(function(a){ne?ne(a):console.error(a)},[ne]),Ce=f.useCallback(function(a){a.preventDefault(),a.persist(),Y(a),_.current=[].concat(Jr(_.current),[a.target]),J(a)&&Promise.resolve(i(a)).then(function(u){if(!(Q(a)&&!O)){var v=u.length,y=v>0&&zr({files:u,accept:L,minSize:c,maxSize:o,multiple:s,maxFiles:g,validator:M}),w=v>0&&!y;D({isDragAccept:y,isDragReject:w,isDragActive:!0,type:"setDraggedFiles"}),l&&l(a)}}).catch(function(u){return F(u)})},[i,l,F,O,L,c,o,s,g,M]),Se=f.useCallback(function(a){a.preventDefault(),a.persist(),Y(a);var u=J(a);if(u&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return u&&b&&b(a),!1},[b,O]),Pe=f.useCallback(function(a){a.preventDefault(),a.persist(),Y(a);var u=_.current.filter(function(y){return h.current&&h.current.contains(y)}),v=u.indexOf(a.target);v!==-1&&u.splice(v,1),_.current=u,!(u.length>0)&&(D({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),J(a)&&m&&m(a))},[h,m,O]),N=f.useCallback(function(a,u){var v=[],y=[];a.forEach(function(w){var K=Xe(w,L),S=de(K,2),ae=S[0],ue=S[1],ce=Ze(w,c,o),q=de(ce,2),le=q[0],se=q[1],fe=M?M(w):null;if(ae&&le&&!fe)v.push(w);else{var pe=[ue,se];fe&&(pe=pe.concat(fe)),y.push({file:w,errors:pe.filter(function(lr){return lr})})}}),(!s&&v.length>1||s&&g>=1&&v.length>g)&&(v.forEach(function(w){y.push({file:w,errors:[Rr]})}),v.splice(0)),D({acceptedFiles:v,fileRejections:y,type:"setFiles"}),I&&I(v,y,u),y.length>0&&R&&R(y,u),v.length>0&&k&&k(v,u)},[D,s,L,c,o,g,I,k,R,M]),U=f.useCallback(function(a){a.preventDefault(),a.persist(),Y(a),_.current=[],J(a)&&Promise.resolve(i(a)).then(function(u){Q(a)&&!O||N(u,a)}).catch(function(u){return F(u)}),D({type:"reset"})},[i,N,F,O]),j=f.useCallback(function(){if(B.current){D({type:"openDialog"}),te();var a={multiple:s,types:Oe};window.showOpenFilePicker(a).then(function(u){return i(u)}).then(function(u){N(u,null),D({type:"closeDialog"})}).catch(function(u){Br(u)?(W(u),D({type:"closeDialog"})):Nr(u)?(B.current=!1,A.current?(A.current.value=null,A.current.click()):F(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):F(u)});return}A.current&&(D({type:"openDialog"}),te(),A.current.value=null,A.current.click())},[D,te,W,De,N,F,Oe,s]),Te=f.useCallback(function(a){!h.current||!h.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),j())},[h,j]),Ie=f.useCallback(function(){D({type:"focus"})},[]),ke=f.useCallback(function(){D({type:"blur"})},[]),Re=f.useCallback(function(){Ae||(Kr()?setTimeout(j,0):j())},[Ae,j]),C=function(u){return t?null:u},ie=function(u){return re?null:C(u)},G=function(u){return Ee?null:C(u)},Y=function(u){O&&u.stopPropagation()},ar=f.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=a.refKey,v=u===void 0?"ref":u,y=a.role,w=a.onKeyDown,K=a.onFocus,S=a.onBlur,ae=a.onClick,ue=a.onDragEnter,ce=a.onDragOver,q=a.onDragLeave,le=a.onDrop,se=X(a,Yr);return d(d(ye({onKeyDown:ie(E(w,Te)),onFocus:ie(E(K,Ie)),onBlur:ie(E(S,ke)),onClick:C(E(ae,Re)),onDragEnter:G(E(ue,Ce)),onDragOver:G(E(ce,Se)),onDragLeave:G(E(q,Pe)),onDrop:G(E(le,U)),role:typeof y=="string"&&y!==""?y:"presentation"},v,h),!t&&!re?{tabIndex:0}:{}),se)}},[h,Te,Ie,ke,Re,Ce,Se,Pe,U,re,Ee,t]),ur=f.useCallback(function(a){a.stopPropagation()},[]),cr=f.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=a.refKey,v=u===void 0?"ref":u,y=a.onChange,w=a.onClick,K=X(a,qr),S=ye({accept:L,multiple:s,type:"file",style:{display:"none"},onChange:C(E(y,U)),onClick:C(E(w,ur)),tabIndex:-1},v,A);return d(d({},S),K)}},[A,n,s,U,t]);return d(d({},oe),{},{isFocused:ir&&!t,getRootProps:ar,getInputProps:cr,rootRef:h,inputRef:A,open:C(j)})}function on(e,r){switch(r.type){case"focus":return d(d({},e),{},{isFocused:!0});case"blur":return d(d({},e),{},{isFocused:!1});case"openDialog":return d(d({},be),{},{isFileDialogActive:!0});case"closeDialog":return d(d({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return d(d({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return d(d({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return d({},be);default:return e}}function Ye(){}export{he as D};
