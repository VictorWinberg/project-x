import{r as a,q as r,j as t,B as n,f as o,L as l}from"./index-pR6Mwn9u.js";import{A as m,D as d}from"./DataTable-0W1PSSE4.js";import"./Autocomplete-DwpVIoGW.js";import"./IconButton-CUjGbKuI.js";import"./Skeleton-D9kavIzh.js";import"./FormControlLabel-C6u6Yr1g.js";import"./Tooltip-lMjLyLEX.js";const c=`
  SELECT * FROM assignments
  LEFT JOIN contacts USING (contact_id)
  LEFT JOIN companies USING (company_id)
`,u=()=>{const[e,s]=a.useState([]);return a.useEffect(()=>{s(r(c))},[]),{data:e,isLoading:!1}},g=[{field:"assignmentName",headerName:"Uppdragsnamn",editable:!0},{field:"companyName",headerName:"Bolag",editable:!0},{field:"email",headerName:"Email",editable:!0},{field:"responsible",headerName:"Ansvarig",sortable:!1,valueGetter:(e,s)=>`${s.assignmentName||""}`},{field:"status",headerName:"Status",sortable:!1,editable:!0},{field:"fee",headerName:"Arvode",type:"number",editable:!0,renderCell:({value:e})=>Number(e).toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}],L=()=>{const{data:e,isLoading:s}=u();return t.jsxs(n,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[t.jsx(n,{children:t.jsx(o,{component:l,to:"new",variant:"outlined",size:"small",startIcon:t.jsx(m,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"})}),t.jsx(d,{rows:e,columns:g,getRowId:i=>i.assignmentId,loading:s,onRowClick:console.log,showActions:!0})]})};export{L as default};