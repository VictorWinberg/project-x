import{j as t,f as m,L as n,g as d,i as p,t as u}from"./index-B-JwtCrw.js";import{D as g,a as x,b as C,c as h,M as f}from"./useSnackbar-C6CA59Ff.js";import{F as j}from"./FlexGrow-jLRts2E5.js";import{C as b}from"./ContactForm-BCrx5M9u.js";import{u as D,a as T,b as y}from"./useContactsMutations-DrOJK78h.js";import{u as F}from"./useContactsQueries-Bfi9PR_j.js";import{A as k}from"./Add-B9NVsuzb.js";import"./MoreHoriz-B7k788XU.js";import"./index.esm-Bm2XGNBK.js";import"./Tooltip-B6OfHBWS.js";import"./useCompaniesQueries-7AzYBtoI.js";const A=[{accessorKey:"contactName",header:"Namn",Cell:({cell:e,row:o})=>t.jsx(d,{component:n,to:`/dashboard/contacts/${o.original.contactId}`,children:e.getValue()})},{accessorKey:"email",header:"Email"},{accessorKey:"jobTitle",header:"Jobbtitel"},{accessorFn:e=>{var o;return(o=e.company)==null?void 0:o.companyName},header:"Företagsnamn",filterVariant:"multi-select",enableEditing:!1},{accessorKey:"phone",header:"Telefonnummer"},{accessorFn:e=>p.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>u(e.getValue()).format("YYYY-MM-DD HH:mm")}],w=()=>{const{data:e=[],isLoading:o}=F(),{mutate:s}=D(),{mutate:r}=T(),{mutate:i}=y();return t.jsx(j,{children:t.jsx(g,{data:e,columns:A,getRowId:a=>`${a.contactId}`,state:{isLoading:o},onCreate:a=>s(a),onUpdate:a=>r(a),onDelete:a=>i(a),renderTopToolbarCustomActions:()=>t.jsx(m,{component:n,to:"new",variant:"outlined",size:"small",startIcon:t.jsx(k,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"}),renderEditRowDialogContent:({row:a,table:c})=>t.jsxs(t.Fragment,{children:[t.jsx(x,{variant:"h4",color:"primary",children:"Redigera kontakt"}),t.jsx(C,{children:t.jsx(b,{sx:{mt:1},formProps:{values:a.original},onChange:l=>{a._valuesCache=l}})}),t.jsx(h,{children:t.jsx(f,{row:a,table:c,variant:"text"})})]})})})};export{w as default};
