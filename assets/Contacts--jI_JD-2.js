import{r as a,j as e,B as t,f as m,L as d}from"./index-lFflTxYX.js";import{A as l,D as c}from"./DataTable-WRk5fz2T.js";import"./Autocomplete-M4sr3q1C.js";import"./IconButton-83zkqOb8.js";import"./Skeleton-BH76eprq.js";import"./FormControlLabel-BYlxtHQ4.js";import"./Tooltip-Da2BFJ0V.js";const p=[{field:"name",headerName:"Uppdragsnamn"},{field:"company",headerName:"Bolag"},{field:"email",headerName:"Email"},{field:"phone",headerName:"Telefonnummer"},{field:"updatedAt",headerName:"Senast uppdaterad",headerAlign:"right",align:"right"}],f=[{id:1,name:"Victor Winberg",company:"Netcompany",email:"victor.winberg@netcompany.com",phone:"+46702483978",updatedAt:"2024-01-01"},{id:2,name:"Sebastian Eriksson",company:"Newsec",email:"sebastian.eriksson@newsec.se",phone:"+46704278490",updatedAt:"2024-04-01"}],D=()=>{const[n,o]=a.useState([]),[s,i]=a.useState(!0);return a.useEffect(()=>{(async()=>{await new Promise(r=>setTimeout(r,100)),i(!1),o(f)})()},[]),e.jsxs(t,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[e.jsx(t,{children:e.jsx(m,{component:d,to:"new",variant:"outlined",size:"small",startIcon:e.jsx(l,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"})}),e.jsx(c,{rows:n,columns:p,loading:s,onRowClick:console.log})]})};export{D as default};
