import{r as e,j as a,B as t,f as m,L as d}from"./index-BuNFZI2p.js";import{A as l,D as c}from"./Add-DNPdFn21.js";import"./FormControlLabel-DabQ6Pt_.js";import"./Skeleton-B7lrNWJx.js";import"./Tooltip-b206bV3f.js";const u=[{field:"name",headerName:"Bolagsnamn"},{field:"company",headerName:"Bolag"},{field:"organizationNumber",headerName:"Org. Nummer"},{field:"status",headerName:"Status"},{field:"updatedAt",headerName:"Senast uppdaterad",headerAlign:"right",align:"right"}],p=[{id:1,name:"Victor Winberg",company:"Netcompany",organizationNumber:"556677-8899",status:"Prospektarbete",updatedAt:"2024-01-01"},{id:2,name:"Sebastian Eriksson",company:"Newsec",organizationNumber:"556677-8899",status:"Prospektarbete",updatedAt:"2024-04-01"}],j=()=>{const[s,o]=e.useState([]),[n,r]=e.useState(!0);return e.useEffect(()=>{(async()=>{await new Promise(i=>setTimeout(i,100)),r(!1),o(p)})()},[]),a.jsxs(t,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[a.jsx(t,{children:a.jsx(m,{component:d,to:"/companies/new",variant:"outlined",size:"small",startIcon:a.jsx(l,{}),sx:{textTransform:"none"},children:"Lägg till bolag"})}),a.jsx(c,{rows:s,columns:u,loading:n,onRowClick:console.log})]})};export{j as default};