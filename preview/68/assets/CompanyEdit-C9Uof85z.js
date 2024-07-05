import{k,l as S,j as a,T as v,B as m,g as s,L as o,S as L,f as i,m as F}from"./index-DFBxvwmv.js";import{u as K}from"./useAssignmentsQueries-D5x1MjYE.js";import{u as D,a as E,b as T}from"./useContactsMutations-BKBLSyDE.js";import{u as $}from"./useContactsQueries-Cm9G2ylE.js";import{C as N}from"./ContentTabs-dPyIblJU.js";import{D as l,d as P}from"./useSnackbar-C7Qg4ZWC.js";import{F as w}from"./FlexGrow-DWoqr7-7.js";import{u as U,a as V,b as A,C as R}from"./useCompaniesMutations-Ck-iCEO0.js";import{a as z}from"./useCompaniesQueries-Dcj6WaUc.js";import"./MoreHoriz-C8nJSnkP.js";import"./index.esm-C-fsg0jb.js";import"./Tooltip-NuERehrk.js";const _=()=>{const c=k(),r=S(),{data:n,isLoading:d}=z(c.id==="new"?void 0:Number(c.id)),{mutate:p}=U(),{mutate:g}=V(),{mutate:u}=A(),{data:y=[],isLoading:C}=$(),{data:h=[],isLoading:x}=K(),{mutate:b}=D(),{mutate:j}=E(),{mutate:f}=T(),I=e=>{n?g(e):p(e,{onSuccess:t=>r(`/dashboard/companies/${t.companyId}`)})};if(!d)return a.jsxs(a.Fragment,{children:[a.jsx(v,{variant:"h4",color:"primary",children:n?"Redigera företag":"Lägg till företag"}),a.jsx(m,{sx:{my:1}}),a.jsxs(R,{formProps:{values:n},onSubmit:I,children:[a.jsx(m,{sx:{my:1}}),n&&a.jsx(w,{children:a.jsx(N,{tabs:[{id:"interactions",label:"Interaktioner",content:a.jsx(a.Fragment,{children:"Interaktioner..."})},{id:"contacts",label:"Kontakter",content:a.jsx(l,{data:y.filter(e=>e.companyId===n.companyId),getRowId:e=>`${e.contactId}`,state:{isLoading:C},columns:[{accessorKey:"contactName",header:"Namn",Cell:({cell:e,row:t})=>a.jsx(s,{component:o,to:`/dashboard/contacts/${t.original.contactId}`,children:e.getValue()})},{accessorKey:"email",header:"Email"},{accessorKey:"jobTitle",header:"Jobbtitel"},{accessorKey:"phone",header:"Telefonnummer"}],onCreate:e=>b({...e,companyId:n.companyId}),onUpdate:e=>j(e),onDelete:e=>f(e)})},{id:"seeking",label:"Söker",content:a.jsx(a.Fragment,{children:"Söker..."})},{id:"assignments",label:"Uppdrag",content:a.jsx(l,{data:h.filter(e=>{var t;return((t=e.externalContactPerson)==null?void 0:t.companyId)===n.companyId}),getRowId:e=>`${e.assignmentId}`,state:{isLoading:x},columns:[{accessorKey:"assignmentName",header:"Uppdrag",Cell:({cell:e,row:t})=>a.jsx(s,{component:o,to:`/dashboard/assignments/${t.original.assignmentId}`,children:e.getValue()})},{accessorFn:e=>{var t;return(t=e.responsiblePerson)==null?void 0:t.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:e,row:t})=>a.jsx(s,{component:o,to:`/dashboard/contacts/${t.original.responsiblePersonId}`,children:e.getValue()})},{accessorFn:e=>{var t;return(t=e.externalContactPerson)==null?void 0:t.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:t})=>a.jsx(s,{component:o,to:`/dashboard/contacts/${t.original.externalContactPersonId}`,children:e.getValue()})},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}]})},{id:"kyc",label:"KYC",content:a.jsx(a.Fragment,{children:"KYC..."})}]})}),a.jsxs(L,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[n&&a.jsx(P,{onClick:()=>u(n,{onSuccess:()=>r("..")}),children:e=>a.jsx(i,{size:"large",variant:"outlined",color:"error",...F(e),children:"Ta bort"})}),a.jsx(i,{size:"large",variant:"outlined",color:"primary",onClick:()=>r(-1),children:"Avbryt"}),a.jsx(i,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{_ as default};
