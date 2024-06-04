import{r as l,j as e,b as i,R as o}from"./app-D3qFl5QJ.js";import{T as m}from"./TableContainer-Cpzu2g2G.js";import{Type as c,Quantity as n,OrderValue as d,AvgPrice as p,Price as x,Status as u}from"./OrderCol-Dra5vLAd.js";import{C as h}from"./Col-CbVAoDNW.js";import{C as t}from"./Card-oM_CSodH.js";import"./index-C-hCRaCp.js";import"./index-C4YkAIOd.js";import"./index-B9h42nwt.js";import"./react-select.esm-grrDZ4s-.js";import"./extends-C149miAE.js";import"./setPrototypeOf-DgZC2w_0.js";import"./useMergedRefs-GCentTCM.js";import"./extends-CF3RwP-h.js";import"./hoist-non-react-statics.cjs-D-StQlzH.js";import"./Row-tEjiKZiJ.js";import"./ThemeProvider-TIbVUJ6I.js";import"./Button-8BG1yInr.js";import"./Button-DiXNu-Xz.js";import"./Dropdown-DxU-Y7w8.js";import"./querySelectorAll-Cwpyv69p.js";import"./listen-DOhMskc_.js";import"./SSRProvider-T4LAgSOZ.js";import"./usePrevious-Btyv44Lm.js";import"./useForceUpdate-BlfwUsii.js";import"./useEventCallback-UvAaEcyh.js";import"./useCallbackRef-DLLZHH4k.js";import"./mergeOptionsWithPopperConfig-B_-RLxEJ.js";import"./useMounted-Cej8hYIm.js";import"./useWindow-DNutj8bq.js";import"./NavContext-pS6wZ13c.js";import"./DataKey-DjdvojM5.js";import"./hook-5wmmorCC.js";import"./Anchor-CBJHYeB7.js";import"./InputGroupContext-lfkYm6PP.js";import"./NavbarContext-zbuTv4ym.js";import"./Table-FAC6EFLR.js";import"./CardHeaderContext-1u13MfXj.js";import"./divWithClassName-ehbO6ZdE.js";const ee=({orderList:s})=>{const a=l.useMemo(()=>[{header:"Date",cell:r=>e.jsxs(e.Fragment,{children:[r.getValue()," ",e.jsx("small",{className:"text-muted",children:r.row.original.time})]})},{header:"Name",cell:r=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("img",{src:r.row.original.img,alt:"",className:"avatar-xxs"})}),e.jsx(i,{href:"#",className:"currency_name flex-grow-1 ms-2",children:r.getValue()})]})})},{header:"Type",accessorKey:"type",enableColumnFilter:!1,cell:r=>e.jsx(c,{...r})},{header:"Quantity",accessorKey:"quantity",enableColumnFilter:!1,cell:r=>e.jsx(n,{...r})},{header:"Order Value",accessorKey:"orderValue",enableColumnFilter:!1,cell:r=>e.jsx(d,{...r})},{header:"Avg Price",accessorKey:"avgPrice",enableColumnFilter:!1,cell:r=>e.jsx(p,{...r})},{header:"Price",accessorKey:"price",enableColumnFilter:!1,cell:r=>e.jsx(x,{...r})},{header:"Status",accessorKey:"status",enableColumnFilter:!1,cell:r=>e.jsx(u,{...r})}],[]);return e.jsx(o.Fragment,{children:e.jsx(h,{lg:12,children:e.jsxs(t,{children:[e.jsxs(t.Header,{className:"d-flex align-items-center border-0",children:[e.jsx("h5",{className:"card-title mb-0 flex-grow-1",children:"All Orders"}),e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("div",{className:"flax-shrink-0 hstack gap-2",children:[e.jsx("button",{className:"btn btn-primary",children:"Today's Orders"}),e.jsx("button",{className:"btn btn-soft-secondary",children:"Past Orders"})]})})]}),e.jsx(t.Body,{children:e.jsx(m,{columns:a,data:s||[],isGlobalFilter:!0,customPageSize:10,divClass:"table-responsive table-card mb-1",tableClass:"align-middle table-nowrap",theadClass:"table-light text-muted",isCryptoOrdersFilter:!0,SearchPlaceholder:"Search for orders"})})]})})})};export{ee as default};