import{j as t,f as l,L as n,g as d,h as p,t as u}from"./index-B2iWnE6k.js";import{D as g,a as h,b as x,c as C,M as f}from"./DataTable-CaOh3LIe.js";import{F as j}from"./FlexGrow-I-Gu2bHc.js";import{C as b}from"./ContactForm-CEWFw02e.js";import{u as D,a as T,b as y}from"./useContactsMutations-IUbELutX.js";import{u as F}from"./useContactsQueries-ChExPlYs.js";import{A as k}from"./Add-DlohEYBb.js";import"./MoreHoriz-CH0WQyjA.js";import"./VisibilityOff-BWfBxfZe.js";import"./Tooltip-0Xcg65PC.js";import"./Autocomplete-DNYuEE8V.js";import"./useSnackbar-BwbyVNzv.js";import"./index.esm-DLDzUCpG.js";import"./useCompaniesQueries-DRnc6UkN.js";import"./object-CoqZKnvh.js";const A=[{accessorKey:"contactName",header:"Namn",Cell:({cell:e,row:o})=>t.jsx(d,{component:n,to:`/dashboard/contacts/${o.original.contactId}`,children:e.getValue()})},{accessorKey:"email",header:"Email"},{accessorKey:"jobTitle",header:"Jobbtitel"},{accessorFn:e=>{var o;return(o=e.company)==null?void 0:o.companyName},header:"Företagsnamn",filterVariant:"multi-select",enableEditing:!1},{accessorKey:"phone",header:"Telefonnummer"},{accessorFn:e=>p.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>u(e.getValue()).format("YYYY-MM-DD HH:mm")}],U=()=>{const{data:e=[],isLoading:o}=F(),{mutate:s}=D(),{mutate:r}=T(),{mutate:i}=y();return t.jsx(j,{children:t.jsx(g,{data:e,columns:A,getRowId:a=>`${a.contactId}`,state:{isLoading:o},onCreate:a=>s(a),onUpdate:a=>r(a),onDelete:a=>i(a),renderTopToolbarCustomActions:()=>t.jsx(l,{component:n,to:"new",variant:"outlined",size:"small",startIcon:t.jsx(k,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"}),renderEditRowDialogContent:({row:a,table:c})=>t.jsxs(t.Fragment,{children:[t.jsx(h,{variant:"h4",color:"primary",children:"Redigera kontakt"}),t.jsx(x,{children:t.jsx(b,{sx:{mt:1},formProps:{values:a.original},onChange:m=>{a._valuesCache=m}})}),t.jsx(C,{children:t.jsx(f,{row:a,table:c,variant:"text"})})]})})})};export{U as default};
