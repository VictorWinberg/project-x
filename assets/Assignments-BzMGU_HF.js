import{r as t,j as e,B as n,f as m,L as l}from"./index-BDLZfIoX.js";import{A as c,D as d}from"./Add-BuWJYHPI.js";import"./Autocomplete-BGeefMd7.js";import"./IconButton-BrRQ2E6N.js";import"./Skeleton-BQPKJAtF.js";import"./FormControlLabel-BZ4eNWxH.js";import"./Tooltip-B-tnDBlb.js";const u=[{field:"name",headerName:"Uppdragsnamn"},{field:"company",headerName:"Bolag"},{field:"email",headerName:"Email"},{field:"responsible",headerName:"Ansvarig",sortable:!1,valueGetter:(a,s)=>`${s.name||""}`},{field:"status",headerName:"Status",sortable:!1},{field:"fee",headerName:"Arvode",type:"number",renderCell:({value:a})=>Number(a).toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}],f=[{id:1,name:"Victor Winberg",company:"Netcompany",email:"victor.winberg@netcompany.com",status:"Prospektarbete",fee:5e5},{id:2,name:"Sebastian Eriksson",company:"Newsec",email:"sebastian.eriksson@newsec.se",status:"Prospektarbete",fee:15e5},{id:3,name:"Jan Zubac",company:"Jayway",email:"jan.zubac@jayway.se",status:"Marknadsföring",fee:25e5}],D=()=>{const[a,s]=t.useState([]),[r,i]=t.useState(!0);return t.useEffect(()=>{(async()=>{await new Promise(o=>setTimeout(o,100)),i(!1),s(f)})()},[]),e.jsxs(n,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[e.jsx(n,{children:e.jsx(m,{component:l,to:"/assignments/new",variant:"outlined",size:"small",startIcon:e.jsx(c,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"})}),e.jsx(d,{rows:a,columns:u,loading:r,onRowClick:console.log})]})};export{D as default};
