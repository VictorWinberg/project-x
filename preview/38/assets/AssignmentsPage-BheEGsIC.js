import{j as s,f as l,L as c}from"./index-uSPFklPD.js";import{D as g,a as d,b as u,c as p,M as x}from"./DataTable-CCV_9IBe.js";import{F as A}from"./FlexGrow-DMjJSIof.js";import{f,u as h,a as y,b as j,A as b}from"./useAssignmentsMutations-Ciczs-dr.js";import{u as D}from"./Autocomplete-FjB9CjPx.js";import{A as E}from"./Add-6Z4DLYmL.js";import"./MoreHoriz-CkO7I5lb.js";import"./VisibilityOff-CYKpl7J0.js";import"./Tooltip-_HGepEMG.js";import"./useSnackbar-Dr7LAzah.js";import"./index.esm-EOQaXV17.js";import"./useContactsQueries-C5zE_BMu.js";import"./contactsApi-DEllBw3q.js";const C=()=>D({queryKey:["assignments"],queryFn:f}),v=[{accessorKey:"assignmentName",header:"Uppdragsnamn"},{accessorKey:"responsibleCompanyName",header:"Bolag",enableEditing:!1},{accessorKey:"responsiblePersonEmail",header:"Email",enableEditing:!1},{accessorKey:"responsiblePersonName",header:"Ansvarig",enableEditing:!1},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:t})=>t.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}],M=()=>{const{data:t=[],isLoading:a}=C(),{mutate:n}=h(),{mutate:r}=y(),{mutate:o}=j();return s.jsx(A,{children:s.jsx(g,{data:t,columns:v,getRowId:e=>`${e.assignmentId}`,state:{isLoading:a},onCreate:e=>n(e),onUpdate:e=>r(e),onDelete:e=>o(e),renderTopToolbarCustomActions:()=>s.jsx(l,{component:c,to:"new",variant:"outlined",size:"small",startIcon:s.jsx(E,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"}),renderEditRowDialogContent:({row:e,table:i})=>s.jsxs(s.Fragment,{children:[s.jsx(d,{variant:"h4",color:"primary",children:"Redigera uppdrag"}),s.jsx(u,{children:s.jsx(b,{sx:{mt:1},formProps:{values:e.original},onChange:m=>{e._valuesCache=m}})}),s.jsx(p,{children:s.jsx(x,{row:e,table:i,variant:"text"})})]})})})};export{M as default};
