import{j as s,B as a,f as o,L as m}from"./index-CJzcC6h9.js";import{A as l,D as u}from"./DataTable-CJOg5tMR.js";import{u as d}from"./useQuery-Bo0kIofM.js";import{f as p,u as c,a as g}from"./useAssignmentsMutations-CjLohxJb.js";import"./Autocomplete-CaJrqwMH.js";import"./IconButton-Bd1B694c.js";import"./Skeleton-CxRzGBKv.js";import"./FormControlLabel-Bi802sYt.js";import"./Tooltip-BZUSwhyu.js";import"./object-CScHriVy.js";const f=()=>d({queryKey:["assignments"],queryFn:p}),x=[{field:"assignmentName",headerName:"Uppdragsnamn",editable:!0},{field:"responsibleCompanyName",headerName:"Bolag",editable:!0},{field:"responsiblePersonEmail",headerName:"Email",editable:!0},{field:"responsiblePersonName",headerName:"Ansvarig",sortable:!1},{field:"status",headerName:"Status",sortable:!1,editable:!0},{field:"fee",headerName:"Arvode",type:"number",editable:!0,renderCell:({value:t})=>Number(t).toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}],v=()=>{const{data:t=[],isLoading:r}=f(),{mutate:n}=c(),{mutate:i}=g();return s.jsxs(a,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[s.jsx(a,{children:s.jsx(o,{component:m,to:"new",variant:"outlined",size:"small",startIcon:s.jsx(l,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"})}),s.jsx(u,{rows:t,columns:x,getRowId:e=>e.assignmentId,loading:r,autosizeOnMount:!0,autosizeOptions:{expand:!0},processRowUpdate:e=>(n(e),e),processRowDelete:e=>{i(Number(e))},showActions:!0})]})};export{v as default};
