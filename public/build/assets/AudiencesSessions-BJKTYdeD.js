import{u as x,r as o,c as u,a as j,j as s,R as f}from"./app-DAA4umSp.js";import"./ReactToastify-jGGXfTHy.js";import"./calender-yWVPQvD3.js";import{a as m}from"./thunk-d-REqlgO.js";import{AudiencesSessionsCharts as C}from"./DashboardAnalyticsCharts-CW44prMu.js";import{C as N}from"./Col-Dd-7fFYa.js";import{C as c}from"./Card-DPRNNE61.js";import{D as e}from"./Dropdown-BMeNbemE.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./react-apexcharts.min-CAgbAWc_.js";import"./index-B8itEOvo.js";import"./ChartsDynamicColor-B5Ek34yS.js";import"./ThemeProvider-Cohb_4IJ.js";import"./CardHeaderContext-DP7KM0Ib.js";import"./divWithClassName-C3FyiOjc.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-D5jaPZlz.js";import"./usePrevious-U83WOE4G.js";import"./useForceUpdate-CMi1GG9F.js";import"./useEventCallback-DazKxGTp.js";import"./useCallbackRef-BHXXgk_h.js";import"./mergeOptionsWithPopperConfig-BfRC57Rj.js";import"./useMounted-CtcQznzv.js";import"./useWindow-C1j0nj5K.js";import"./NavContext-BMmZtpsL.js";import"./Button-Cm1f8AqA.js";import"./DataKey-DjdvojM5.js";import"./hook-CZF_VRVT.js";import"./extends-CF3RwP-h.js";import"./useMergedRefs-CgdBK-bJ.js";import"./Anchor-DRo_1xWF.js";import"./InputGroupContext-CZ5D-Tve.js";import"./NavbarContext-CNhhZldJ.js";import"./Button-0uHp86Qk.js";const is=()=>{const i=x(),[d,l]=o.useState([]),p=u(r=>r.DashboardAnalytics,r=>r.audiencesSessionsData),n=j(p);o.useEffect(()=>{l(n)},[n]);const[t,h]=o.useState("today"),a=r=>{h(r),i(m(r))};return o.useEffect(()=>{i(m("today"))},[i]),s.jsx(f.Fragment,{children:s.jsx(N,{xl:6,children:s.jsxs(c,{className:"card-height-100",children:[s.jsxs(c.Header,{className:"align-items-center d-flex",children:[s.jsx("h4",{className:"card-title mb-0 flex-grow-1",children:"Audiences Sessions by Country"}),s.jsx("div",{className:"flex-shrink-0",children:s.jsxs(e,{className:"card-header-dropdown",children:[s.jsxs(e.Toggle,{as:"a",className:"text-reset dropdown-btn arrow-none",role:"button",children:[s.jsx("span",{className:"fw-semibold text-uppercase fs-12",children:"Sort by: "}),s.jsxs("span",{className:"text-muted",children:[t.charAt(0).toUpperCase()+t.slice(1),s.jsx("i",{className:"mdi mdi-chevron-down ms-1"})]})]}),s.jsxs(e.Menu,{className:"dropdown-menu-end",children:[s.jsx(e.Item,{onClick:()=>{a("today")},className:t==="today"?"active":"",children:"Today"}),s.jsx(e.Item,{onClick:()=>{a("lastWeek")},className:t==="lastWeek"?"active":"",children:"Last Week"}),s.jsx(e.Item,{onClick:()=>{a("lastMonth")},className:t==="lastMonth"?"active":"",children:"Last Month"}),s.jsx(e.Item,{onClick:()=>{a("currentYear")},className:t==="currentYear"?"active":"",children:"Current Year"})]})]})})]}),s.jsx(c.Body,{className:"p-0",children:s.jsx("div",{children:s.jsx(C,{series:d,dataColors:'["--vz-primary", "--vz-secondary",  "--vz-secondary-bg"]'})})})]})})})};export{is as default};