import{j as a,f as d,L as p}from"./index-BSAVlEUM.js";import{D as c,a as l,b as u,c as x,M as g}from"./DataTable-y_XRnMeM.js";import{F as C}from"./FlexGrow-CkEwPUZn.js";import{u as y,a as h,b as j,C as f}from"./useCompaniesMutations-CQJAypOi.js";import{u as b}from"./useCompaniesQueries-DkF-oPdi.js";import{A as D}from"./Add-BuQ00UCv.js";import"./MoreHoriz-CniWp4_F.js";import"./VisibilityOff-CDDUZQZf.js";import"./Tooltip-BGAnNzIp.js";import"./Autocomplete-DglQMvLD.js";import"./useSnackbar-B-I2WYU9.js";import"./index.esm-C_vJEc0t.js";import"./companiesApi-BxhW04Qe.js";const A=[{accessorKey:"companyName",header:"Bolagsnamn"},{accessorKey:"address",header:"Address"},{accessorKey:"industry",header:"Industri"},{accessorKey:"website",header:"Website"},{accessorKey:"updatedAt",header:"Senast uppdaterad",enableEditing:!1}],_=()=>{const{data:t=[],isLoading:o}=b(),{mutate:s}=y(),{mutate:r}=h(),{mutate:n}=j();return a.jsx(C,{children:a.jsx(c,{data:t,columns:A,getRowId:e=>`${e.companyId}`,state:{isLoading:o},onCreate:e=>s(e),onUpdate:e=>r(e),onDelete:e=>n(e),renderTopToolbarCustomActions:()=>a.jsx(d,{component:p,to:"new",variant:"outlined",size:"small",startIcon:a.jsx(D,{}),sx:{textTransform:"none"},children:"Lägg till bolag"}),renderEditRowDialogContent:({row:e,table:i})=>a.jsxs(a.Fragment,{children:[a.jsx(l,{variant:"h4",color:"primary",children:"Redigera bolag"}),a.jsx(u,{children:a.jsx(f,{sx:{mt:1},formProps:{values:e.original},onChange:m=>{e._valuesCache=m}})}),a.jsx(x,{children:a.jsx(g,{row:e,table:i,variant:"text"})})]})})})};export{_ as default};
