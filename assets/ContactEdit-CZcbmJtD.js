import{k as b,l as C,j as t,T as j,B as l,g as o,L as r,S as f,f as i,m as k}from"./index-Bcr7qJ2J.js";import{u as y}from"./useAssignmentsQueries-CkOtuU81.js";import{C as I}from"./ContentTabs-CfCRogC2.js";import{D as S,d as v}from"./useSnackbar-BvN78t7_.js";import{F}from"./FlexGrow-D4Kfe8wn.js";import{u as L,a as P,b as E}from"./useContactsMutations-CNQG8Ptd.js";import{a as D}from"./useContactsQueries-cK81mVnE.js";import{C as T}from"./ContactForm-DVV5RYgR.js";import"./MoreHoriz-D4KrG8dy.js";import"./index.esm-DpFcbwE-.js";import"./Tooltip-DcDp3ZzJ.js";import"./useCompaniesQueries-CamvParf.js";const H=()=>{const c=b(),s=C(),{data:n,isLoading:d}=D(c.id==="new"?void 0:Number(c.id)),{mutate:m}=L(),{mutate:g}=P(),{mutate:u}=E(),{data:p=[],isLoading:x}=y(),h=e=>{n?g(e):m(e,{onSuccess:a=>s(`/dashboard/contact/${a.contactId}`)})};if(!d)return t.jsxs(t.Fragment,{children:[t.jsx(j,{variant:"h4",color:"primary",children:n?"Redigera kontakt":"Lägg till kontakt"}),t.jsx(l,{sx:{my:1}}),t.jsxs(T,{formProps:{values:n},onSubmit:h,children:[t.jsx(l,{sx:{my:1}}),n&&t.jsx(F,{children:t.jsx(I,{tabs:[{id:"interactions",label:"Interaktioner",content:t.jsx(t.Fragment,{children:"Interaktioner..."})},{id:"seeking",label:"Söker",content:t.jsx(t.Fragment,{children:"Söker..."})},{id:"assignments",label:"Uppdrag",content:t.jsx(S,{data:p.filter(e=>e.externalContactPersonId===n.contactId||e.responsiblePersonId===n.contactId),getRowId:e=>`${e.assignmentId}`,state:{isLoading:x},columns:[{accessorKey:"assignmentName",header:"Uppdrag",Cell:({cell:e,row:a})=>t.jsx(o,{component:r,to:`/dashboard/assignments/${a.original.assignmentId}`,children:e.getValue()})},{accessorFn:e=>{var a;return(a=e.responsiblePerson)==null?void 0:a.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(o,{component:r,to:`/dashboard/contacts/${a.original.responsiblePersonId}`,children:e.getValue()})},{accessorFn:e=>{var a;return(a=e.externalContactPerson)==null?void 0:a.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(o,{component:r,to:`/dashboard/contacts/${a.original.externalContactPersonId}`,children:e.getValue()})},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}]})}]})}),t.jsxs(f,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[n&&t.jsx(v,{onClick:()=>u(n,{onSuccess:()=>s("..")}),children:e=>t.jsx(i,{size:"large",variant:"outlined",color:"error",...k(e),children:"Ta bort"})}),t.jsx(i,{size:"large",variant:"outlined",color:"primary",onClick:()=>s(-1),children:"Avbryt"}),t.jsx(i,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{H as default};