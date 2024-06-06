import{r,u as N,c as b,a as g,j as s,R as w}from"./app-DAEZisrD.js";import{F as c}from"./index-CiIEPrCJ.js";import{UsersByDeviceCharts as D}from"./DashboardAnalyticsCharts-t1Taa63w.js";import"./ReactToastify-Dfu59Ofk.js";import"./calender-yWVPQvD3.js";import{c as x}from"./thunk-B2_I81OW.js";import{C as v}from"./Col-B8aG_WSb.js";import{C as o}from"./Card-BqoKCbez.js";import{D as e}from"./Dropdown-tOcdJjvK.js";import"./index-7MB6meGS.js";import"./react-apexcharts.min-DiylzUKy.js";import"./ChartsDynamicColor-B5Ek34yS.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./ThemeProvider-DpO2Fe9x.js";import"./CardHeaderContext-BqF8ZhAg.js";import"./divWithClassName-DBqZ_0ZL.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-E5dZEr-W.js";import"./usePrevious-CP___m-f.js";import"./useForceUpdate-BGliwYZ3.js";import"./useEventCallback-Dcr8lMky.js";import"./useCallbackRef-B6c-Je3E.js";import"./mergeOptionsWithPopperConfig-Cih7uyRc.js";import"./useMounted-BJIR85-y.js";import"./useWindow-C_R7bMWe.js";import"./NavContext-DMVl8V9Z.js";import"./Button-a_Mq9XKy.js";import"./DataKey-DjdvojM5.js";import"./hook-BF0Uv_rT.js";import"./extends-CF3RwP-h.js";import"./useMergedRefs-DWL3_gRO.js";import"./Anchor-DRcRLFUD.js";import"./InputGroupContext-Dyo0o_3A.js";import"./NavbarContext-BLsiMOqp.js";import"./Button-BSuMOxsW.js";const ns=()=>{const[d,p]=r.useState(!1),h=()=>p(!d),l=N(),[a,j]=r.useState([]),f=b(t=>t.DashboardAnalytics,t=>t.userDeviceData),n=g(f);r.useEffect(()=>{j(n)},[n]);const[i,u]=r.useState("today"),m=t=>{u(t),l(x(t))};return r.useEffect(()=>{l(x("today"))},[l]),s.jsx(w.Fragment,{children:s.jsx(v,{xl:4,children:s.jsxs(o,{className:"card-height-100",children:[s.jsxs(o.Header,{className:"align-items-center d-flex",children:[s.jsx("h4",{className:"card-title mb-0 flex-grow-1",children:"Users by Device"}),s.jsx("div",{className:"flex-shrink-0",children:s.jsxs(e,{className:"card-header-dropdown",show:d,onClick:h,dir:"start",children:[s.jsx(e.Toggle,{as:"a",className:"text-reset dropdown-btn arrow-none",role:"button",children:s.jsx("span",{className:"text-muted fs-16",children:s.jsx("i",{className:"mdi mdi-dots-vertical align-middle"})})}),s.jsxs(e.Menu,{className:"dropdown-menu-end",children:[s.jsx(e.Item,{onClick:()=>{m("today")},className:i==="today"?"active":"",children:"Today"}),s.jsx(e.Item,{onClick:()=>{m("lastWeek")},className:i==="lastWeek"?"active":"",children:"Last Week"}),s.jsx(e.Item,{onClick:()=>{m("lastMonth")},className:i==="lastMonth"?"active":"",children:"Last Month"}),s.jsx(e.Item,{onClick:()=>{m("currentYear")},className:i==="currentYear"?"active":"",children:"Current Year"})]})]})})]}),s.jsxs(o.Body,{children:[s.jsx("div",{dir:"ltr",children:s.jsx(D,{series:a,dataColors:'["--vz-primary", "--vz-primary-rgb, .75", "--vz-primary-rgb, 0.60"]'})}),s.jsx("div",{className:"table-responsive mt-3",children:s.jsx("table",{className:"table table-borderless table-sm table-centered align-middle table-nowrap mb-0",children:s.jsxs("tbody",{className:"border-0",children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("h4",{className:"text-truncate fs-14 fs-medium mb-0",children:[s.jsx("i",{className:"ri-stop-fill align-middle fs-18 text-primary me-2"}),"Desktop Users"]})}),s.jsx("td",{children:s.jsxs("p",{className:"text-muted mb-0",children:[s.jsx(c,{icon:"users",className:"me-2 icon-sm"}),a[0],"k"]})}),s.jsx("td",{className:"text-end",children:s.jsxs("p",{className:"text-success fw-medium fs-12 mb-0",children:[s.jsx("i",{className:"ri-arrow-up-s-fill fs-5 align-middle"}),"2.08%"]})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("h4",{className:"text-truncate fs-14 fs-medium mb-0",children:[s.jsx("i",{className:"ri-stop-fill align-middle fs-18 text-warning me-2"}),"Mobile Users"]})}),s.jsx("td",{children:s.jsxs("p",{className:"text-muted mb-0",children:[s.jsx(c,{icon:"users",className:"me-2 icon-sm"}),a[1],"k"]})}),s.jsx("td",{className:"text-end",children:s.jsxs("p",{className:"text-danger fw-medium fs-12 mb-0",children:[s.jsx("i",{className:"ri-arrow-down-s-fill fs-5 align-middle"}),"10.52%"]})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("h4",{className:"text-truncate fs-14 fs-medium mb-0",children:[s.jsx("i",{className:"ri-stop-fill align-middle fs-18 text-info me-2"}),"Tablet Users"]})}),s.jsx("td",{children:s.jsxs("p",{className:"text-muted mb-0",children:[s.jsx(c,{icon:"users",className:"me-2 icon-sm"}),a[2],"k"]})}),s.jsx("td",{className:"text-end",children:s.jsxs("p",{className:"text-danger fw-medium fs-12 mb-0",children:[s.jsx("i",{className:"ri-arrow-down-s-fill fs-5 align-middle"}),"7.36%"]})})]})]})})})]})]})})})};export{ns as default};