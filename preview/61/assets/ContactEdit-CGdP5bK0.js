import{i as b,k as C,j as t,T as j,B as l,g as o,L as r,S as f,f as i,l as y}from"./index-CUrplrJD.js";import{u as k}from"./useAssignmentsQueries-D0adj4hF.js";import{C as I}from"./ContentTabs-BLImYpFP.js";import{D as S,d as v}from"./useSnackbar-BrK6SEP8.js";import{F}from"./FlexGrow-CkqNsMvI.js";import{u as L,a as P,b as E}from"./useContactsMutations-abQONAe-.js";import{a as D}from"./useContactsQueries-Bts9mieC.js";import{C as T}from"./ContactForm-Dc9_0SXq.js";import"./MoreHoriz-Drtf5Hkk.js";import"./index.esm-BgzcVnA_.js";import"./Tooltip-B6bcZdCi.js";import"./useCompaniesQueries-QOimGbgj.js";const H=()=>{const c=b(),n=C(),{data:s,isLoading:d}=D(c.id==="new"?void 0:Number(c.id)),{mutate:m}=L(),{mutate:g}=P(),{mutate:u}=E(),{data:p=[],isLoading:x}=k(),h=e=>{s?g(e):m(e,{onSuccess:a=>n(`/dashboard/contact/${a.contactId}`)})};if(!d)return t.jsxs(t.Fragment,{children:[t.jsx(j,{variant:"h4",color:"primary",children:s?"Redigera kontakt":"Lägg till kontakt"}),t.jsx(l,{sx:{my:1}}),t.jsxs(T,{formProps:{values:s},onSubmit:h,children:[t.jsx(l,{sx:{my:1}}),s&&t.jsx(F,{children:t.jsx(I,{tabs:[{label:"Interaktioner",content:t.jsx(t.Fragment,{children:"Interaktioner..."})},{label:"Söker",content:t.jsx(t.Fragment,{children:"Söker..."})},{label:"Uppdrag",content:t.jsx(S,{data:p.filter(e=>e.externalContactPersonId===s.contactId||e.responsiblePersonId===s.contactId),getRowId:e=>`${e.assignmentId}`,state:{isLoading:x},columns:[{accessorKey:"assignmentName",header:"Uppdrag",Cell:({cell:e,row:a})=>t.jsx(o,{component:r,to:`/dashboard/assignments/${a.original.assignmentId}`,children:e.getValue()})},{accessorFn:e=>{var a;return(a=e.responsiblePerson)==null?void 0:a.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(o,{component:r,to:`/dashboard/contacts/${a.original.responsiblePersonId}`,children:e.getValue()})},{accessorFn:e=>{var a;return(a=e.externalContactPerson)==null?void 0:a.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(o,{component:r,to:`/dashboard/contacts/${a.original.externalContactPersonId}`,children:e.getValue()})},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}]})}],selected:2})}),t.jsxs(f,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[s&&t.jsx(v,{onClick:()=>u(s,{onSuccess:()=>n("..")}),children:e=>t.jsx(i,{size:"large",variant:"outlined",color:"error",...y(e),children:"Ta bort"})}),t.jsx(i,{size:"large",variant:"outlined",color:"primary",onClick:()=>n(-1),children:"Avbryt"}),t.jsx(i,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{H as default};
