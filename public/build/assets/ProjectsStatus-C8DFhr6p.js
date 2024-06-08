import{b as h,r as c,c as j,u,j as e,R as b}from"./app-CcmPIReT.js";import{PrjectsStatusCharts as f}from"./DashboardProjectCharts-DoEvaWzE.js";import{a as d}from"./thunk-BkD7spkI.js";import{C as N}from"./Col-BT99caCr.js";import{C as l}from"./Card-yrIYSTOn.js";import{D as t}from"./Dropdown-CZ6gxq-L.js";import"./react-apexcharts.min-Cq7ebE1e.js";import"./index-E0pRXvh2.js";import"./ChartsDynamicColor-B5Ek34yS.js";import"./calender-6pYCF-Qi.js";import"./ltc-BjMPbQSH.js";import"./dash-TnNMg90k.js";import"./img-1-Jhxup-Mz.js";import"./img-2-BKxLD3CN.js";import"./img-3-B4j7qXDU.js";import"./img-6-B4dmEj4y.js";import"./dashboardProjects-DjgRH1Aq.js";import"./avatar-1-PHP4S1R6.js";import"./avatar-2-B-1-S_lh.js";import"./avatar-3-CSm6kh8B.js";import"./avatar-4-BkrIkC6X.js";import"./avatar-5-D7m8bZ3v.js";import"./avatar-6-DJX3lkeY.js";import"./avatar-7-ChzoTmzs.js";import"./avatar-8-BaCFiEfo.js";import"./ThemeProvider-CSTTv7nq.js";import"./CardHeaderContext-C52wv7vf.js";import"./divWithClassName-CM1F4fkU.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-DsKskV_g.js";import"./usePrevious-DNpMYT0V.js";import"./useForceUpdate-szFTueT1.js";import"./useEventCallback-BJse7mIf.js";import"./useCallbackRef-DOaTl7z1.js";import"./mergeOptionsWithPopperConfig-CF0vfbBt.js";import"./useMounted-Bja3_6ae.js";import"./useWindow-CvUQe0g5.js";import"./NavContext-DwPeOdq-.js";import"./Button-CAE2U-yP.js";import"./DataKey-DjdvojM5.js";import"./hook-D61oMDbP.js";import"./extends-BFqQA52f.js";import"./useMergedRefs-C3j-VvFq.js";import"./Anchor-x2SFhHNR.js";import"./InputGroupContext-BY31koS2.js";import"./NavbarContext-CDqv-Zet.js";import"./Button-CjmBuVFy.js";const he=()=>{const m=h(),[s,n]=c.useState([]),p=j(a=>a.DashboardProject,a=>a.projectStatusData),o=u(p);c.useEffect(()=>{n(o)},[o]);const[r,x]=c.useState("All Time"),i=a=>{x(a),m(d(a))};return c.useEffect(()=>{m(d("all"))},[m]),e.jsx(b.Fragment,{children:e.jsx(N,{xxl:4,lg:6,children:e.jsxs(l,{className:"card-height-100",children:[e.jsxs(l.Header,{className:"align-items-center d-flex",children:[e.jsx("h4",{className:"card-title mb-0 flex-grow-1",children:"Projects Status"}),e.jsx("div",{className:"flex-shrink-0",children:e.jsxs(t,{className:"card-header-dropdown",children:[e.jsxs(t.Toggle,{as:"a",className:"dropdown-btn text-muted arrow-none",role:"button",children:[r.charAt(0).toUpperCase()+r.slice(1),e.jsx("i",{className:"mdi mdi-chevron-down ms-1"})]}),e.jsxs(t.Menu,{className:"dropdown-menu-end",children:[e.jsx(t.Item,{onClick:()=>{i("all")},className:r==="all"?"active":"",children:"All Time"}),e.jsx(t.Item,{onClick:()=>{i("week")},className:r==="week"?"active":"",children:"Last 7 Days"}),e.jsx(t.Item,{onClick:()=>{i("month")},className:r==="month"?"active":"",children:"Last 30 Days"}),e.jsx(t.Item,{onClick:()=>{i("quarter")},className:r==="quarter"?"active":"",children:"Last 90 Days"})]})]})})]}),e.jsxs(l.Body,{children:[e.jsx(f,{series:s,dataColors:'["--vz-primary", "--vz-primary-rgb, 0.85", "--vz-primary-rgb, 0.70", "--vz-primary-rgb, 0.50"]'}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:"d-flex justify-content-center align-items-center mb-4",children:[e.jsx("h2",{className:"me-3 ff-secondary mb-0",children:s[0]+s[1]+s[2]+s[3]||784}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted mb-0",children:"Total Projects"}),e.jsxs("p",{className:"text-success fw-medium mb-0",children:[e.jsx("span",{className:"badge bg-success-subtle text-success p-1 rounded-circle",children:e.jsx("i",{className:"ri-arrow-right-up-line"})})," +3 New"]})]})]}),e.jsxs("div",{className:"d-flex justify-content-between border-bottom border-bottom-dashed py-2",children:[e.jsxs("p",{className:"fw-medium mb-0",children:[e.jsx("i",{className:"ri-checkbox-blank-circle-fill text-success align-middle me-2"})," Completed"]}),e.jsxs("div",{children:[e.jsxs("span",{className:"text-muted pe-5",children:[s[0]," Projects"]}),e.jsx("span",{className:"text-success fw-medium fs-12",children:"15870hrs"})]})]}),e.jsxs("div",{className:"d-flex justify-content-between border-bottom border-bottom-dashed py-2",children:[e.jsxs("p",{className:"fw-medium mb-0",children:[e.jsx("i",{className:"ri-checkbox-blank-circle-fill text-primary align-middle me-2"})," In Progress"]}),e.jsxs("div",{children:[e.jsxs("span",{className:"text-muted pe-5",children:[s[1]," Projects"]}),e.jsx("span",{className:"text-success fw-medium fs-12",children:"243hrs"})]})]}),e.jsxs("div",{className:"d-flex justify-content-between border-bottom border-bottom-dashed py-2",children:[e.jsxs("p",{className:"fw-medium mb-0",children:[e.jsx("i",{className:"ri-checkbox-blank-circle-fill text-warning align-middle me-2"})," Yet to Start"]}),e.jsxs("div",{children:[e.jsxs("span",{className:"text-muted pe-5",children:[s[2]," Projects"]}),e.jsx("span",{className:"text-success fw-medium fs-12",children:"~2050hrs"})]})]}),e.jsxs("div",{className:"d-flex justify-content-between py-2",children:[e.jsxs("p",{className:"fw-medium mb-0",children:[e.jsx("i",{className:"ri-checkbox-blank-circle-fill text-danger align-middle me-2"})," Cancelled"]}),e.jsxs("div",{children:[e.jsxs("span",{className:"text-muted pe-5",children:[s[3]," Projects"]}),e.jsx("span",{className:"text-success fw-medium fs-12",children:"~900hrs"})]})]})]})]})]})})})};export{he as default};