import{b as x,r as o,c as u,u as j,j as s,R as f}from"./app-CcmPIReT.js";import"./ReactToastify-hOsVGs7O.js";import"./calender-6pYCF-Qi.js";import{a as m}from"./thunk-DdWnsEFV.js";import{AudiencesSessionsCharts as C}from"./DashboardAnalyticsCharts-BiiF7sD6.js";import{C as N}from"./Col-BT99caCr.js";import{C as c}from"./Card-yrIYSTOn.js";import{D as e}from"./Dropdown-CZ6gxq-L.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./react-apexcharts.min-Cq7ebE1e.js";import"./index-E0pRXvh2.js";import"./ChartsDynamicColor-B5Ek34yS.js";import"./ThemeProvider-CSTTv7nq.js";import"./CardHeaderContext-C52wv7vf.js";import"./divWithClassName-CM1F4fkU.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-DsKskV_g.js";import"./usePrevious-DNpMYT0V.js";import"./useForceUpdate-szFTueT1.js";import"./useEventCallback-BJse7mIf.js";import"./useCallbackRef-DOaTl7z1.js";import"./mergeOptionsWithPopperConfig-CF0vfbBt.js";import"./useMounted-Bja3_6ae.js";import"./useWindow-CvUQe0g5.js";import"./NavContext-DwPeOdq-.js";import"./Button-CAE2U-yP.js";import"./DataKey-DjdvojM5.js";import"./hook-D61oMDbP.js";import"./extends-BFqQA52f.js";import"./useMergedRefs-C3j-VvFq.js";import"./Anchor-x2SFhHNR.js";import"./InputGroupContext-BY31koS2.js";import"./NavbarContext-CDqv-Zet.js";import"./Button-CjmBuVFy.js";const is=()=>{const i=x(),[d,l]=o.useState([]),p=u(r=>r.DashboardAnalytics,r=>r.audiencesSessionsData),n=j(p);o.useEffect(()=>{l(n)},[n]);const[t,h]=o.useState("today"),a=r=>{h(r),i(m(r))};return o.useEffect(()=>{i(m("today"))},[i]),s.jsx(f.Fragment,{children:s.jsx(N,{xl:6,children:s.jsxs(c,{className:"card-height-100",children:[s.jsxs(c.Header,{className:"align-items-center d-flex",children:[s.jsx("h4",{className:"card-title mb-0 flex-grow-1",children:"Audiences Sessions by Country"}),s.jsx("div",{className:"flex-shrink-0",children:s.jsxs(e,{className:"card-header-dropdown",children:[s.jsxs(e.Toggle,{as:"a",className:"text-reset dropdown-btn arrow-none",role:"button",children:[s.jsx("span",{className:"fw-semibold text-uppercase fs-12",children:"Sort by: "}),s.jsxs("span",{className:"text-muted",children:[t.charAt(0).toUpperCase()+t.slice(1),s.jsx("i",{className:"mdi mdi-chevron-down ms-1"})]})]}),s.jsxs(e.Menu,{className:"dropdown-menu-end",children:[s.jsx(e.Item,{onClick:()=>{a("today")},className:t==="today"?"active":"",children:"Today"}),s.jsx(e.Item,{onClick:()=>{a("lastWeek")},className:t==="lastWeek"?"active":"",children:"Last Week"}),s.jsx(e.Item,{onClick:()=>{a("lastMonth")},className:t==="lastMonth"?"active":"",children:"Last Month"}),s.jsx(e.Item,{onClick:()=>{a("currentYear")},className:t==="currentYear"?"active":"",children:"Current Year"})]})]})})]}),s.jsx(c.Body,{className:"p-0",children:s.jsx("div",{children:s.jsx(C,{series:d,dataColors:'["--vz-primary", "--vz-secondary",  "--vz-secondary-bg"]'})})})]})})})};export{is as default};