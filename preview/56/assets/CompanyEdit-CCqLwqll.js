import{i as I,k as L,j as a,T as S,B as c,g as o,L as s,S as k,f as i}from"./index-D_Hw0TWc.js";import{u as F,a as K,b as v}from"./useContactsMutations-Sj--Tctz.js";import{u as E}from"./useContactsQueries-DcVqT0cv.js";import{C as $}from"./ContentTabs-DlsCYHQh.js";import{D as m}from"./DataTable-DpP1juxX.js";import{F as N}from"./FlexGrow-XCmFbLwy.js";import{u as P,a as T,C as D}from"./useCompaniesMutations-BM_qVngD.js";import{a as U}from"./useCompaniesQueries-By13H2v6.js";import{u as V}from"./useAssignmentsQueries-luIR53uY.js";import"./useSnackbar-Cap1duEj.js";import"./object-BaR1jdoG.js";import"./MoreHoriz-COCnpaVw.js";import"./VisibilityOff-hlyVVGa8.js";import"./Tooltip-DqlNE_cq.js";import"./index.esm-A9JwaDwY.js";const Z=()=>{const l=I(),r=L(),{data:n,isLoading:d}=U(Number(l.id)),{mutate:p}=P(),{mutate:g}=T(),{data:u=[],isLoading:y}=E(),{data:h=[],isLoading:x}=V(),{mutate:C}=F(),{mutate:b}=K(),{mutate:f}=v(),j=e=>{n?g(e):p(e,{onSuccess:t=>r(`/dashboard/companies/${t.companyId}`)})};if(!d)return a.jsxs(a.Fragment,{children:[a.jsx(S,{variant:"h4",color:"primary",children:n?"Redigera företag":"Lägg till företag"}),a.jsx(c,{sx:{my:1}}),a.jsxs(D,{formProps:{values:n},onSubmit:j,children:[a.jsx(c,{sx:{my:1}}),n&&a.jsx(N,{children:a.jsx($,{tabs:[{label:"Interaktioner",content:a.jsx(a.Fragment,{children:"Interaktioner..."})},{label:"Kontakter",content:a.jsx(m,{data:u.filter(e=>e.companyId===n.companyId),getRowId:e=>`${e.contactId}`,state:{isLoading:y},columns:[{accessorKey:"contactName",header:"Namn",Cell:({cell:e,row:t})=>a.jsx(o,{component:s,to:`/dashboard/contacts/${t.original.contactId}`,children:e.getValue()})},{accessorKey:"email",header:"Email"},{accessorKey:"jobTitle",header:"Jobbtitel"},{accessorKey:"phone",header:"Telefonnummer"}],onCreate:e=>C({...e,companyId:n.companyId}),onUpdate:e=>b(e),onDelete:e=>f(e)})},{label:"Söker",content:a.jsx(a.Fragment,{children:"Söker..."})},{label:"Uppdrag",content:a.jsx(m,{data:h.filter(e=>{var t;return((t=e.externalContactPerson)==null?void 0:t.companyId)===n.companyId}),getRowId:e=>`${e.assignmentId}`,state:{isLoading:x},columns:[{accessorKey:"assignmentName",header:"Uppdrag",Cell:({cell:e,row:t})=>a.jsx(o,{component:s,to:`/dashboard/assignments/${t.original.assignmentId}`,children:e.getValue()})},{accessorFn:e=>{var t;return(t=e.responsiblePerson)==null?void 0:t.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:e,row:t})=>a.jsx(o,{component:s,to:`/dashboard/contacts/${t.original.responsiblePersonId}`,children:e.getValue()})},{accessorFn:e=>{var t;return(t=e.externalContactPerson)==null?void 0:t.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:t})=>a.jsx(o,{component:s,to:`/dashboard/contacts/${t.original.externalContactPersonId}`,children:e.getValue()})},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}]})},{label:"KYC",content:a.jsx(a.Fragment,{children:"KYC..."})}],selected:1})}),a.jsxs(k,{spacing:2,direction:"row",sx:{mt:3},children:[a.jsx(i,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"}),a.jsx(i,{size:"large",variant:"outlined",color:"primary",onClick:()=>r(-1),children:"Tillbaka"})]})]})]})};export{Z as default};
