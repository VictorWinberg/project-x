import{r as o,q as r,j as t,B as s,f as i,L as l}from"./index-BRvqmS3T.js";import{A as d,D as m}from"./DataTable-DER9EJL6.js";import"./Autocomplete-cEI22Jko.js";import"./IconButton-Bhi675eV.js";import"./Skeleton-Bt2ZkI8d.js";import"./FormControlLabel-Baw9Uonf.js";import"./Tooltip-Dxb6kggW.js";const c=`
  SELECT * FROM contacts
  LEFT JOIN companies USING (company_id)
`,u=()=>{const[a,e]=o.useState([]);return o.useEffect(()=>{e(r(c))},[]),{data:a,isLoading:!1}},p=[{field:"name",headerName:"Namn",valueGetter:(a,e)=>`${e.firstName||""} ${e.lastName||""}`.trim()},{field:"companyName",headerName:"Bolag",editable:!0},{field:"email",headerName:"Email",editable:!0},{field:"phone",headerName:"Telefonnummer",editable:!0},{field:"updatedAt",headerName:"Senast uppdaterad",headerAlign:"right",align:"right"}],L=()=>{const{data:a,isLoading:e}=u();return t.jsxs(s,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[t.jsx(s,{children:t.jsx(i,{component:l,to:"new",variant:"outlined",size:"small",startIcon:t.jsx(d,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"})}),t.jsx(m,{rows:a,columns:p,getRowId:n=>n.contactId,loading:e,onRowClick:console.log,showActions:!0})]})};export{L as default};
