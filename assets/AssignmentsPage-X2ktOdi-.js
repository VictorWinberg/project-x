import{j as a,f as g,L as n,g as r,h as o,i as p}from"./index-DS-qEVS4.js";import{D as u,a as h,b as x,M as f}from"./useSnackbar-CGs-Eow6.js";import{D as A}from"./DataTable-siAEHLVb.js";import{F as j}from"./FlexGrow-D70K8CKv.js";import{f as b,t as C}from"./date-BhCkwW9R.js";import{u as D,a as y,b as E,A as F}from"./useAssignmentsMutations-BrGYzpJO.js";import{u as V}from"./useAssignmentsQueries-O9vcwMiU.js";import{A as v}from"./Add-K87l0Rev.js";import"./MoreHoriz-CJb5Zhs0.js";import"./index.esm-BkUStBhG.js";import"./Tooltip-C0tLWTP9.js";import"./useContactsQueries-BlvUERMv.js";const T=[{accessorKey:"assignmentName",header:"Uppdragsnamn",Cell:({cell:e,row:t})=>a.jsx(r,{component:n,to:`/dashboard/assignments/${t.original.assignmentId}`,children:e.getValue()})},{accessorFn:e=>{var t;return(t=e.responsiblePerson)==null?void 0:t.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:e,row:t})=>a.jsx(r,{component:n,to:{pathname:`/dashboard/contacts/${t.original.responsiblePersonId}`,search:`${o({tab:"assignments"})}`},children:e.getValue()})},{accessorFn:e=>{var t;return(t=e.externalContactPerson)==null?void 0:t.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:t})=>a.jsx(r,{component:n,to:{pathname:`/dashboard/contacts/${t.original.externalContactPersonId}`,search:`${o({tab:"assignments"})}`},children:e.getValue()})},{accessorKey:"type",header:"Typ",filterVariant:"multi-select"},{accessorKey:"status",header:"Status",filterVariant:"multi-select"},{accessorKey:"fee",header:"Arvode",filterVariant:"range-slider",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})},{accessorFn:e=>p.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>b(C(e.getValue()))}],M=()=>{const{data:e=[],isLoading:t}=V(),{mutate:i}=D(),{mutate:l}=y(),{mutate:m}=E();return a.jsx(j,{children:a.jsx(A,{data:e,columns:T,getRowId:s=>`${s.assignmentId}`,state:{isLoading:t},onCreate:s=>i(s),onUpdate:s=>l(s),onDelete:s=>m(s),renderTopToolbarCustomActions:()=>a.jsx(g,{component:n,to:"new",variant:"outlined",size:"small",startIcon:a.jsx(v,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"}),renderEditRowDialogContent:({row:s,table:c})=>a.jsxs(a.Fragment,{children:[a.jsx(u,{variant:"h4",color:"primary",children:"Redigera uppdrag"}),a.jsx(h,{children:a.jsx(F,{sx:{mt:1},formProps:{values:s.original},onChange:d=>{s._valuesCache=d}})}),a.jsx(x,{children:a.jsx(f,{row:s,table:c,variant:"text"})})]})})})};export{M as default};