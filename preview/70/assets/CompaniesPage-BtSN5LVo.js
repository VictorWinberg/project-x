import{j as e,f as l,L as o,g as c,i as p,k as u,t as g}from"./index-Hgn6hl3D.js";import{D as x,a as C,b as y,c as h,M as f}from"./useSnackbar-ldQoR6Tp.js";import{F as j}from"./FlexGrow-CThsJdnt.js";import{u as b,a as D,b as A,C as T}from"./useCompaniesMutations-BJ3shJ72.js";import{u as F}from"./useCompaniesQueries-BdbySx25.js";import{A as L}from"./Add-xwIbTUaQ.js";import"./MoreHoriz-DAm31GN_.js";import"./index.esm-CrhLlnLg.js";import"./Tooltip-DA02MIBG.js";const v=[{accessorKey:"companyName",header:"Företagsnamn",Cell:({cell:t,row:s})=>e.jsx(c,{component:o,to:`/dashboard/companies/${s.original.companyId}`,children:t.getValue()})},{accessorKey:"address",header:"Address"},{accessorKey:"industry",header:"Industri",filterVariant:"multi-select"},{accessorKey:"website",header:"Website"},{accessorFn:t=>p.utc(t.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:t})=>u(g(t.getValue()))}],M=()=>{const{data:t=[],isLoading:s}=F(),{mutate:n}=b(),{mutate:r}=D(),{mutate:i}=A();return e.jsx(j,{children:e.jsx(x,{data:t,columns:v,getRowId:a=>`${a.companyId}`,state:{isLoading:s},onCreate:a=>n(a),onUpdate:a=>r(a),onDelete:a=>i(a),renderTopToolbarCustomActions:()=>e.jsx(l,{component:o,to:"new",variant:"outlined",size:"small",startIcon:e.jsx(L,{}),sx:{textTransform:"none"},children:"Lägg till bolag"}),renderEditRowDialogContent:({row:a,table:m})=>e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"h4",color:"primary",children:"Redigera bolag"}),e.jsx(y,{children:e.jsx(T,{sx:{mt:1},formProps:{values:a.original},onChange:d=>{a._valuesCache=d}})}),e.jsx(h,{children:e.jsx(f,{row:a,table:m,variant:"text"})})]})})})};export{M as default};