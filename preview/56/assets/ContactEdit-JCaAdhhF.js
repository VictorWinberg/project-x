import{i as h,k as b,j as a,T as C,B as i,g as n,L as o,S as j,f as c}from"./index-D_Hw0TWc.js";import{C as f}from"./ContentTabs-DlsCYHQh.js";import{F as k}from"./FlexGrow-XCmFbLwy.js";import{u as y,a as I}from"./useContactsMutations-Sj--Tctz.js";import{a as S}from"./useContactsQueries-DcVqT0cv.js";import{C as F}from"./ContactForm-1hqCITGD.js";import{D as v}from"./DataTable-DpP1juxX.js";import{u as L}from"./useAssignmentsQueries-luIR53uY.js";import"./object-BaR1jdoG.js";import"./useSnackbar-Cap1duEj.js";import"./index.esm-A9JwaDwY.js";import"./useCompaniesQueries-By13H2v6.js";import"./MoreHoriz-COCnpaVw.js";import"./VisibilityOff-hlyVVGa8.js";import"./Tooltip-DqlNE_cq.js";const q=()=>{const l=h(),r=b(),{data:s,isLoading:m}=S(Number(l.id)),{mutate:d}=y(),{mutate:g}=I(),{data:p=[],isLoading:u}=L(),x=t=>{s?g(t):d(t,{onSuccess:e=>r(`/dashboard/contact/${e.contactId}`)})};if(!m)return a.jsxs(a.Fragment,{children:[a.jsx(C,{variant:"h4",color:"primary",children:s?"Redigera kontakt":"Lägg till kontakt"}),a.jsx(i,{sx:{my:1}}),a.jsxs(F,{formProps:{values:s},onSubmit:x,children:[a.jsx(i,{sx:{my:1}}),s&&a.jsx(k,{children:a.jsx(f,{tabs:[{label:"Interaktioner",content:a.jsx(a.Fragment,{children:"Interaktioner..."})},{label:"Söker",content:a.jsx(a.Fragment,{children:"Söker..."})},{label:"Uppdrag",content:a.jsx(v,{data:p.filter(t=>t.externalContactPersonId===s.contactId||t.responsiblePersonId===s.contactId),getRowId:t=>`${t.assignmentId}`,state:{isLoading:u},columns:[{accessorKey:"assignmentName",header:"Uppdrag",Cell:({cell:t,row:e})=>a.jsx(n,{component:o,to:`/dashboard/assignments/${e.original.assignmentId}`,children:t.getValue()})},{accessorFn:t=>{var e;return(e=t.responsiblePerson)==null?void 0:e.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:t,row:e})=>a.jsx(n,{component:o,to:`/dashboard/contacts/${e.original.responsiblePersonId}`,children:t.getValue()})},{accessorFn:t=>{var e;return(e=t.externalContactPerson)==null?void 0:e.contactName},header:"Extern",enableEditing:!1,Cell:({cell:t,row:e})=>a.jsx(n,{component:o,to:`/dashboard/contacts/${e.original.externalContactPersonId}`,children:t.getValue()})},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:t})=>t.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}]})}],selected:2})}),a.jsxs(j,{spacing:2,direction:"row",sx:{mt:3},children:[a.jsx(c,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"}),a.jsx(c,{size:"large",variant:"outlined",color:"primary",onClick:()=>r(-1),children:"Tillbaka"})]})]})]})};export{q as default};
