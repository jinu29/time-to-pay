import{r as i,j as e,R as t,b as c}from"./app-DAEZisrD.js";import{T as r}from"./TableContainerReactTable-CXN2FFRR.js";import{S as m}from"./Spinner-B9Xwksw2.js";import"./index-CMDdldH_.js";import"./Row-DP2h-Y3A.js";import"./ThemeProvider-DpO2Fe9x.js";import"./Card-BqoKCbez.js";import"./CardHeaderContext-BqF8ZhAg.js";import"./divWithClassName-DBqZ_0ZL.js";import"./Col-B8aG_WSb.js";import"./Table-UH3F74uS.js";import"./Button-BSuMOxsW.js";import"./Button-a_Mq9XKy.js";const D=()=>{const n=[{id:"10",name:"Tyrone",email:"tyrone@example.com",designation:"Senior Response Liaison",company:"Raynor, Rolfson and Daugherty",location:"Qatar"},{id:"09",name:"Cathy",email:"cathy@example.com",designation:"Customer Data Director",company:"Ebert, Schamberger and Johnston",location:"Mexico"},{id:"08",name:"Patsy",email:"patsy@example.com",designation:"Dynamic Assurance Director",company:"Streich Group",location:"Niue"},{id:"07",name:"Kerry",email:"kerry@example.com",designation:"Lead Applications Associate",company:"Feeney, Langworth and Tremblay",location:"Niger"},{id:"06",name:"Traci",email:"traci@example.com",designation:"Corporate Identity Director",company:"Koelpin - Goldner",location:"Vanuatu"},{id:"05",name:"Noel",email:"noel@example.com",designation:"Customer Data Director",company:"Howell - Rippin",location:"Germany"},{id:"04",name:"Robert",email:"robert@example.com",designation:"Product Accounts Technician",company:"Hoeger",location:"San Marino"},{id:"03",name:"Shannon",email:"shannon@example.com",designation:"Legacy Functionality Associate",company:"Zemlak Group",location:"South Georgia"},{id:"02",name:"Harold",email:"harold@example.com",designation:"Forward Creative Coordinator",company:"Metz Inc",location:"Iran"},{id:"01",name:"Jonathan",email:"jonathan@example.com",designation:"Senior Implementation Architect",company:"Hauck Inc",location:"Holy See"}],o=i.useMemo(()=>[{header:"ID",cell:a=>e.jsx("span",{className:"fw-semibold",children:a.getValue()}),accessorKey:"id",enableColumnFilter:!1},{header:"Name",accessorKey:"name",enableColumnFilter:!1},{header:"Email",accessorKey:"email",enableColumnFilter:!1},{header:"Designation",accessorKey:"designation",enableColumnFilter:!1},{header:"Company",accessorKey:"company",enableColumnFilter:!1},{header:"Location",accessorKey:"location",enableColumnFilter:!1}],[]);return e.jsx(t.Fragment,{children:e.jsx(r,{columns:o||[],data:n||[],customPageSize:5,SearchPlaceholder:"Search..."})})},K=()=>{const n=[{id:"#VL2111",name:"Jonathan",date:"07 Oct, 2021",total:"$24.05",status:"Paid"},{id:"#VL2110",name:"Harold",date:"07 Oct, 2021",total:"$26.15",status:"Paid"},{id:"#VL2109",name:"Shannon",date:"06 Oct, 2021",total:"$21.25",status:"Refund"},{id:"#VL2108",name:"Robert",date:"05 Oct, 2021",total:"$25.03",status:"Paid"},{id:"#VL2107",name:"Noel",date:"05 Oct, 2021",total:"$22.61",status:"Paid"},{id:"#VL2106",name:"Traci",date:"04 Oct, 2021",total:"$24.05",status:"Paid"},{id:"#VL2105",name:"Kerry",date:"04 Oct, 2021",total:"$26.15",status:"Paid"},{id:"#VL2104",name:"Patsy",date:"04 Oct, 2021",total:"$21.25",status:"Refund"},{id:"#VL2103",name:"Cathy",date:"03 Oct, 2021",total:"$22.61",status:"Paid"},{id:"#VL2102",name:"Tyrone",date:"03 Oct, 2021",total:"$25.03",status:"Paid"}],o=i.useMemo(()=>[{header:"ID",cell:a=>e.jsx(c,{href:"#",className:"fw-medium",children:a.getValue()}),accessorKey:"id",enableColumnFilter:!1},{header:"Name",accessorKey:"name",enableColumnFilter:!1},{header:"Date",accessorKey:"date",enableColumnFilter:!1},{header:"Total",accessorKey:"total",enableColumnFilter:!1},{header:"Status",enableColumnFilter:!1,accessorKey:"status",cell:a=>{switch(a.getValue()){case"Paid":return e.jsxs("span",{className:"badge bg-success-subtle text-success text-uppercase",children:[" ",a.getValue()]});case"Refund":return e.jsxs("span",{className:"badge bg-warning-subtle  text-warning text-uppercase",children:[" ",a.getValue()]});default:return e.jsxs("span",{className:"badge bg-danger-subtle  text-danger text-uppercase",children:[" ",a.getValue()]})}}},{header:"Actions",enableColumnFilter:!1,cell:a=>e.jsx(t.Fragment,{children:"Details"})}],[]);return e.jsx(t.Fragment,{children:e.jsx(r,{columns:o||[],data:n||[],customPageSize:5,tableClass:"table-centered align-middle table-nowrap mb-0",theadClass:"text-muted table-light",SearchPlaceholder:"Search Products..."})})},P=()=>{const n=[{id:"10",name:"Tyrone",email:"tyrone@example.com",designation:"Senior Response Liaison",company:"Raynor, Rolfson and Daugherty",location:"Qatar"},{id:"09",name:"Cathy",email:"cathy@example.com",designation:"Customer Data Director",company:"Ebert, Schamberger and Johnston",location:"Mexico"},{id:"08",name:"Patsy",email:"patsy@example.com",designation:"Dynamic Assurance Director",company:"Streich Group",location:"Niue"},{id:"07",name:"Kerry",email:"kerry@example.com",designation:"Lead Applications Associate",company:"Feeney, Langworth and Tremblay",location:"Niger"},{id:"06",name:"Traci",email:"traci@example.com",designation:"Corporate Identity Director",company:"Koelpin - Goldner",location:"Vanuatu"},{id:"05",name:"Noel",email:"noel@example.com",designation:"Customer Data Director",company:"Howell - Rippin",location:"Germany"},{id:"04",name:"Robert",email:"robert@example.com",designation:"Product Accounts Technician",company:"Hoeger",location:"San Marino"},{id:"03",name:"Shannon",email:"shannon@example.com",designation:"Legacy Functionality Associate",company:"Zemlak Group",location:"South Georgia"},{id:"02",name:"Harold",email:"harold@example.com",designation:"Forward Creative Coordinator",company:"Metz Inc",location:"Iran"},{id:"01",name:"Jonathan",email:"jonathan@example.com",designation:"Senior Implementation Architect",company:"Hauck Inc",location:"Holy See"}],o=i.useMemo(()=>[{header:"ID",cell:a=>e.jsx("span",{className:"fw-semibold",children:a.getValue()}),accessorKey:"id",enableColumnFilter:!1},{header:"Name",accessorKey:"name",enableColumnFilter:!1},{header:"Email",accessorKey:"email",enableColumnFilter:!1},{header:"Designation",accessorKey:"designation",enableColumnFilter:!1},{header:"Company",accessorKey:"company",enableColumnFilter:!1},{header:"Location",accessorKey:"location",enableColumnFilter:!1}],[]);return e.jsx(t.Fragment,{children:e.jsx(r,{columns:o||[],data:n||[],isGlobalFilter:!0,customPageSize:5,SearchPlaceholder:"Search..."})})},T=()=>{const n=[{id:"10",name:"Tyrone",email:"tyrone@example.com",designation:"Senior Response Liaison",company:"Raynor, Rolfson and Daugherty",location:"Qatar"},{id:"09",name:"Cathy",email:"cathy@example.com",designation:"Customer Data Director",company:"Ebert, Schamberger and Johnston",location:"Mexico"},{id:"08",name:"Patsy",email:"patsy@example.com",designation:"Dynamic Assurance Director",company:"Streich Group",location:"Niue"},{id:"07",name:"Kerry",email:"kerry@example.com",designation:"Lead Applications Associate",company:"Feeney, Langworth and Tremblay",location:"Niger"},{id:"06",name:"Traci",email:"traci@example.com",designation:"Corporate Identity Director",company:"Koelpin - Goldner",location:"Vanuatu"},{id:"05",name:"Noel",email:"noel@example.com",designation:"Customer Data Director",company:"Howell - Rippin",location:"Germany"},{id:"04",name:"Robert",email:"robert@example.com",designation:"Product Accounts Technician",company:"Hoeger",location:"San Marino"},{id:"03",name:"Shannon",email:"shannon@example.com",designation:"Legacy Functionality Associate",company:"Zemlak Group",location:"South Georgia"},{id:"02",name:"Harold",email:"harold@example.com",designation:"Forward Creative Coordinator",company:"Metz Inc",location:"Iran"},{id:"01",name:"Jonathan",email:"jonathan@example.com",designation:"Senior Implementation Architect",company:"Hauck Inc",location:"Holy See"}],o=i.useMemo(()=>[{header:"Name",accessorKey:"name",enableColumnFilter:!1},{header:"Email",accessorKey:"email",enableColumnFilter:!1},{header:"Designation",accessorKey:"designation",enableColumnFilter:!1},{header:"Company",accessorKey:"company",enableColumnFilter:!1},{header:"Location",accessorKey:"location",enableColumnFilter:!1}],[]);return e.jsx(t.Fragment,{children:e.jsx(r,{columns:o||[],data:n||[],customPageSize:5,SearchPlaceholder:"Search Products..."})})},L=()=>{const[n,o]=i.useState(!1);i.useEffect(()=>{setTimeout(()=>{o(!0)},3e3)},[]);const a=[{id:"10",name:"Tyrone",email:"tyrone@example.com",designation:"Senior Response Liaison",company:"Raynor, Rolfson and Daugherty",location:"Qatar"},{id:"09",name:"Cathy",email:"cathy@example.com",designation:"Customer Data Director",company:"Ebert, Schamberger and Johnston",location:"Mexico"},{id:"08",name:"Patsy",email:"patsy@example.com",designation:"Dynamic Assurance Director",company:"Streich Group",location:"Niue"},{id:"07",name:"Kerry",email:"kerry@example.com",designation:"Lead Applications Associate",company:"Feeney, Langworth and Tremblay",location:"Niger"},{id:"06",name:"Traci",email:"traci@example.com",designation:"Corporate Identity Director",company:"Koelpin - Goldner",location:"Vanuatu"},{id:"05",name:"Noel",email:"noel@example.com",designation:"Customer Data Director",company:"Howell - Rippin",location:"Germany"},{id:"04",name:"Robert",email:"robert@example.com",designation:"Product Accounts Technician",company:"Hoeger",location:"San Marino"},{id:"03",name:"Shannon",email:"shannon@example.com",designation:"Legacy Functionality Associate",company:"Zemlak Group",location:"South Georgia"},{id:"02",name:"Harold",email:"harold@example.com",designation:"Forward Creative Coordinator",company:"Metz Inc",location:"Iran"},{id:"01",name:"Jonathan",email:"jonathan@example.com",designation:"Senior Implementation Architect",company:"Hauck Inc",location:"Holy See"}],l=i.useMemo(()=>[{header:"Name",accessorKey:"name",enableColumnFilter:!1},{header:"Email",accessorKey:"email",enableColumnFilter:!1},{header:"Designation",accessorKey:"designation",enableColumnFilter:!1},{header:"Company",accessorKey:"company",enableColumnFilter:!1},{header:"Location",accessorKey:"location",enableColumnFilter:!1}],[]);return e.jsx(t.Fragment,{children:n?e.jsx(r,{columns:l||[],data:a||[],customPageSize:5,SearchPlaceholder:"Search Products..."}):e.jsx("div",{className:"text-center",children:e.jsx(m,{animation:"border",variant:"primary"})})})},R=()=>{const n=[{id:"10",name:"Tyrone",email:"tyrone@example.com",designation:"Senior Response Liaison",company:"Raynor, Rolfson and Daugherty",location:"Qatar"},{id:"09",name:"Cathy",email:"cathy@example.com",designation:"Customer Data Director",company:"Ebert, Schamberger and Johnston",location:"Mexico"},{id:"08",name:"Patsy",email:"patsy@example.com",designation:"Dynamic Assurance Director",company:"Streich Group",location:"Niue"},{id:"07",name:"Kerry",email:"kerry@example.com",designation:"Lead Applications Associate",company:"Feeney, Langworth and Tremblay",location:"Niger"},{id:"06",name:"Traci",email:"traci@example.com",designation:"Corporate Identity Director",company:"Koelpin - Goldner",location:"Vanuatu"},{id:"05",name:"Noel",email:"noel@example.com",designation:"Customer Data Director",company:"Howell - Rippin",location:"Germany"},{id:"04",name:"Robert",email:"robert@example.com",designation:"Product Accounts Technician",company:"Hoeger",location:"San Marino"},{id:"03",name:"Shannon",email:"shannon@example.com",designation:"Legacy Functionality Associate",company:"Zemlak Group",location:"South Georgia"},{id:"02",name:"Harold",email:"harold@example.com",designation:"Forward Creative Coordinator",company:"Metz Inc",location:"Iran"},{id:"01",name:"Jonathan",email:"jonathan@example.com",designation:"Senior Implementation Architect",company:"Hauck Inc",location:"Holy See"}],o=i.useMemo(()=>[{header:"Name",accessorKey:"name",enableColumnFilter:!1},{header:"Email",accessorKey:"email",enableColumnFilter:!1},{header:"Designation",accessorKey:"designation",enableColumnFilter:!1},{header:"Company",accessorKey:"company",enableColumnFilter:!1}],[]);return e.jsx(t.Fragment,{children:e.jsx(r,{columns:o||[],data:n||[],customPageSize:5,SearchPlaceholder:"Search Products..."})})};export{D as DefaultTable,R as HiddenColumns,L as LoadingStateTable,K as PaginationTable,P as SearchTable,T as SortingTable};