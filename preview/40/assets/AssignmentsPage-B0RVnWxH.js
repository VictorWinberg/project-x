import{j as e,f as g,L as a,g as o}from"./index-Dua0jlEq.js";import{D as d,a as p,b as u,c as x,M as h}from"./DataTable-DgHhs9wZ.js";import{F as A}from"./FlexGrow-DB8vXPM1.js";import{u as j,a as C,b as f,c as D,A as y}from"./useAssignmentsQueries-BC32DWRv.js";import{A as b}from"./Add-CEjP0a63.js";import"./MoreHoriz-DyCmeRfr.js";import"./VisibilityOff-BZYPhaCv.js";import"./Tooltip-CNsGmGZV.js";import"./Autocomplete-C5b1loym.js";import"./useSnackbar-Dgh5CRNH.js";import"./index.esm-Cr91V_rr.js";import"./useContactsQueries-BFCO_6Z7.js";const v=[{accessorKey:"assignmentName",header:"Uppdragsnamn",Cell:({cell:s,row:n})=>e.jsx(o,{component:a,to:`./${n.original.assignmentId}`,children:s.getValue()})},{accessorKey:"responsiblePerson.contactName",header:"Ansvarig",enableEditing:!1,Cell:({cell:s,row:n})=>e.jsx(o,{component:a,to:`../contacts/${n.original.responsiblePersonId}`,children:s.getValue()})},{accessorKey:"externalContactPerson.contactName",header:"Extern",enableEditing:!1,Cell:({cell:s,row:n})=>e.jsx(o,{component:a,to:`../contacts/${n.original.externalContactPersonId}`,children:s.getValue()})},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:s})=>s.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}],U=()=>{const{data:s=[],isLoading:n}=j(),{mutate:r}=C(),{mutate:i}=f(),{mutate:c}=D();return e.jsx(A,{children:e.jsx(d,{data:s,columns:v,getRowId:t=>`${t.assignmentId}`,state:{isLoading:n},onCreate:t=>r(t),onUpdate:t=>i(t),onDelete:t=>c(t),renderTopToolbarCustomActions:()=>e.jsx(g,{component:a,to:"new",variant:"outlined",size:"small",startIcon:e.jsx(b,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"}),renderEditRowDialogContent:({row:t,table:l})=>e.jsxs(e.Fragment,{children:[e.jsx(p,{variant:"h4",color:"primary",children:"Redigera uppdrag"}),e.jsx(u,{children:e.jsx(y,{sx:{mt:1},formProps:{values:t.original},onChange:m=>{t._valuesCache=m}})}),e.jsx(x,{children:e.jsx(h,{row:t,table:l,variant:"text"})})]})})})};export{U as default};
