import{k as F,l as R,r as T,j as e,T as L,B as l,g as M,L as S,i as E,t as $,S as V,f as r,m as B}from"./index-B-JwtCrw.js";import{t as N,D as P,a as u,b as g,c as p,M as x,d as Y}from"./useSnackbar-C6CA59Ff.js";import{u as z,a as _,b as H,c as U,d as G,D as h}from"./useDocumentsMutations-CSHI7Y6G.js";import{C as K}from"./ContentTabs-BMxMPgO4.js";import{F as q}from"./FlexGrow-jLRts2E5.js";import{u as w,a as J,b as O,A as Q}from"./useAssignmentsMutations-BTsysuY_.js";import{a as W}from"./useAssignmentsQueries-DtLOt_xz.js";import"./MoreHoriz-B7k788XU.js";import"./index.esm-Bm2XGNBK.js";import"./Tooltip-B6OfHBWS.js";import"./useContactsQueries-Bfi9PR_j.js";const me=()=>{const i=F(),a=R(),{data:s,isLoading:j}=W(i.id==="new"?void 0:Number(i.id)),{mutate:f}=w(),{mutate:D}=J(),{mutate:y}=O(),{data:c=[],isLoading:b}=z(),{data:m=[],isLoading:C}=_({entityType:"assignment",entityId:s==null?void 0:s.assignmentId}),v=T.useMemo(()=>{const t=N(c,"documentId");return m.map(n=>({...n,...t.get(n.documentId)}))},[c,m]),{mutate:d}=H(),{mutate:I}=U(),{mutate:k}=G(),A=t=>{s?D(t):f(t,{onSuccess:n=>a(`/dashboard/assignments/${n.assignmentId}`)})};if(!j)return e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"h4",color:"primary",children:s?"Redigera uppdrag":"Lägg till uppdrag"}),e.jsx(l,{sx:{my:1}}),e.jsxs(Q,{formProps:{values:s},onSubmit:A,children:[e.jsx(l,{sx:{my:1}}),s&&e.jsx(q,{children:e.jsx(K,{tabs:[{id:"interactions",label:"Interaktioner",content:e.jsx(e.Fragment,{children:"Interaktioner..."})},{id:"documents",label:"Dokument",content:e.jsx(P,{data:v,getRowId:t=>`${t.documentId}-${t.entityType}-${t.entityId}`,state:{isLoading:b||C},columns:[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:t,row:n})=>e.jsx(M,{component:S,to:`/documents/${n.original.documentId}`,children:t.getValue()})},{accessorFn:t=>{var n;return(n=t.content)==null?void 0:n.type},header:"Filtyp",enableEditing:!1},{accessorFn:t=>{var n;return E((n=t.content)==null?void 0:n.lastModified)},header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:t})=>$(t.getValue()).format("YYYY-MM-DD HH:mm")}],renderCreateRowDialogContent:({row:t,table:n})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"h4",color:"primary",children:"Nytt dokument"}),e.jsx(g,{children:e.jsx(h,{sx:{mt:1},enableExistingDocuments:!0,formProps:{defaultValues:{entityType:"assignment",entityId:s.assignmentId}},onChange:o=>{t._valuesCache=o}})}),e.jsx(p,{children:e.jsx(x,{row:t,table:n,variant:"text"})})]}),renderEditRowDialogContent:({row:t,table:n})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"h4",color:"primary",children:"Redigera dokument"}),e.jsx(g,{children:e.jsx(h,{sx:{mt:1},formProps:{defaultValues:t.original},onChange:o=>{t._valuesCache=o}})}),e.jsx(p,{children:e.jsx(x,{row:t,table:n,variant:"text"})})]}),onCreate:t=>d(t,{onSuccess:n=>I({...t,documentId:n})}),onUpdate:t=>d(t),onDelete:t=>k(t)})},{id:"stakeholders",label:"Intressenter",content:e.jsx(e.Fragment,{children:"Intressenter..."})},{id:"modules",label:"Moduler",content:e.jsx(e.Fragment,{children:"Moduler..."})}]})}),e.jsxs(V,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[s&&e.jsx(Y,{onClick:()=>y(s,{onSuccess:()=>a("..")}),children:t=>e.jsx(r,{size:"large",variant:"outlined",color:"error",...B(t),children:"Ta bort"})}),e.jsx(r,{size:"large",variant:"outlined",color:"primary",onClick:()=>a(-1),children:"Avbryt"}),e.jsx(r,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{me as default};
