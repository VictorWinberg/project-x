import{j as e,f as l,L as s,g as c,i as d,k as u,t as p}from"./index-BGgb9Zdm.js";import{D as g,a as x,b as D,c as f,M as j}from"./useSnackbar-DRQEkc0n.js";import{F as h}from"./FlexGrow-DdQzUFFU.js";import{u as C,b as T,e as k,D as v}from"./useDocumentsMutations-COgNpAbq.js";import{A as y}from"./Add-DdwDEoZx.js";import"./MoreHoriz-C0tCwknc.js";import"./index.esm-DA5g3P7w.js";import"./Tooltip-CMV6IB43.js";const F=[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:a,row:o})=>e.jsx(c,{component:s,to:`/documents/${o.original.documentId}`,children:a.getValue()})},{accessorKey:"content.type",header:"Filtyp"},{accessorFn:a=>d(a.content.lastModified),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:a})=>u(p(a.getValue()))}],$=()=>{const{data:a=[],isLoading:o}=C(),{mutate:n}=T(),{mutate:r}=k();if(!o)return e.jsx(h,{children:e.jsx(g,{data:a,columns:F,getRowId:t=>`${t.documentId}`,state:{isLoading:o},onCreate:t=>n(t),onUpdate:t=>n(t),onDelete:t=>r(t),renderTopToolbarCustomActions:()=>e.jsx(l,{component:s,to:"new",variant:"outlined",size:"small",startIcon:e.jsx(y,{}),sx:{textTransform:"none"},children:"Lägg till dokument"}),renderEditRowDialogContent:({row:t,table:i})=>e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"h4",color:"primary",children:"Redigera dokument"}),e.jsx(D,{children:e.jsx(v,{sx:{mt:1},formProps:{defaultValues:t.original},onChange:m=>{t._valuesCache=m}})}),e.jsx(f,{children:e.jsx(j,{row:t,table:i,variant:"text"})})]})})})};export{$ as default};
