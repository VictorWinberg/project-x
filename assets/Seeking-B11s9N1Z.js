import{r as t,j as e,B as a,f as m,L as l}from"./index-BDLZfIoX.js";import{A as c,D as d}from"./Add-BuWJYHPI.js";import"./Autocomplete-BGeefMd7.js";import"./IconButton-BrRQ2E6N.js";import"./Skeleton-BQPKJAtF.js";import"./FormControlLabel-BZ4eNWxH.js";import"./Tooltip-B-tnDBlb.js";const p=[{field:"contact",headerName:"Kontakt"},{field:"company",headerName:"Bolag"},{field:"segment",headerName:"Segment"},{field:"geography",headerName:"Geografi"},{field:"volume",headerName:"Volym, SEK"},{field:"investmentType",headerName:"Typ av investering"}],g=[{id:1,contact:"Victor Winberg",company:"Netcompany",segment:"IT",geography:"Stockholm",volume:"10 000 - 100 000",investmentType:"Core"},{id:2,contact:"Sebastian Eriksson",company:"Newsec",segment:"Real Estate",geography:"Stockholm",volume:"100 000 - 1 000 000",investmentType:"Value-Add"}],S=()=>{const[o,n]=t.useState([]),[s,i]=t.useState(!0);return t.useEffect(()=>{(async()=>{await new Promise(r=>setTimeout(r,100)),n(g),i(!1)})()},[]),e.jsxs(a,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[e.jsx(a,{children:e.jsx(m,{component:l,to:"/seeking/new",variant:"outlined",size:"small",startIcon:e.jsx(c,{}),sx:{textTransform:"none"},children:"Lägg till sökande"})}),e.jsx(d,{rows:o,columns:p,loading:s,onRowClick:console.log})]})};export{S as default};
