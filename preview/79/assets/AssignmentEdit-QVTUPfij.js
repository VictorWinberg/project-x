import{k as F,l as R,r as T,j as e,T as L,B as l,g as S,L as E,i as M,S as $,f as r,m as V}from"./index-cV54zZxd.js";import{t as B,D as u,a as g,b as p,M as x}from"./useSnackbar-BDyIueCB.js";import{u as N,a as P,b as z,c as _,d as U,D as h}from"./useDocumentsMutations-BmMJ3N5c.js";import{C as G}from"./ContentTabs-CJhbJp-s.js";import{D as K,a as q}from"./DataTable-BjxEuvXC.js";import{F as w}from"./FlexGrow-DyFK3FYl.js";import{f as H,t as J}from"./date-CiaKuOGG.js";import{u as O,a as Q,b as W,A as X}from"./useAssignmentsMutations-CfToeGij.js";import{a as Y}from"./useAssignmentsQueries-Dx1WTaTP.js";import"./MoreHoriz-N7l2bDHP.js";import"./index.esm-DU03F9E7.js";import"./Tooltip-CiG2SRO3.js";import"./useContactsQueries-Qv3FIYGW.js";const ue=()=>{const i=F(),a=R(),{data:s,isLoading:f}=Y(i.id==="new"?void 0:Number(i.id)),{mutate:j}=O(),{mutate:D}=Q(),{mutate:y}=W(),{data:m=[],isLoading:b}=N(),{data:c=[],isLoading:C}=P({entityType:"assignment",entityId:s==null?void 0:s.assignmentId}),v=T.useMemo(()=>{const t=B(m,"documentId");return c.map(n=>({...n,...t.get(n.documentId)}))},[m,c]),{mutate:d}=z(),{mutate:I}=_(),{mutate:k}=U(),A=t=>{s?D(t):j(t,{onSuccess:n=>a(`/dashboard/assignments/${n.assignmentId}`)})};if(!f)return e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"h4",color:"primary",children:s?"Redigera uppdrag":"Lägg till uppdrag"}),e.jsx(l,{sx:{my:1}}),e.jsxs(X,{formProps:{values:s},onSubmit:A,children:[e.jsx(l,{sx:{my:1}}),s&&e.jsx(w,{children:e.jsx(G,{tabs:[{id:"interactions",label:"Interaktioner",content:e.jsx(e.Fragment,{children:"Interaktioner..."})},{id:"documents",label:"Dokument",content:e.jsx(K,{data:v,getRowId:t=>`${t.documentId}-${t.entityType}-${t.entityId}`,state:{isLoading:b||C},columns:[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:t,row:n})=>e.jsx(S,{component:E,to:`/documents/${n.original.documentId}`,children:t.getValue()})},{accessorFn:t=>{var n;return(n=t.content)==null?void 0:n.type},header:"Filtyp",enableEditing:!1},{accessorFn:t=>{var n;return M((n=t.content)==null?void 0:n.lastModified)},header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:t})=>H(J(t.getValue()))}],renderCreateRowDialogContent:({row:t,table:n})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"h4",color:"primary",children:"Nytt dokument"}),e.jsx(g,{children:e.jsx(h,{sx:{mt:1},enableExistingDocuments:!0,formProps:{defaultValues:{entityType:"assignment",entityId:s.assignmentId}},onChange:o=>{t._valuesCache=o}})}),e.jsx(p,{children:e.jsx(x,{row:t,table:n,variant:"text"})})]}),renderEditRowDialogContent:({row:t,table:n})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"h4",color:"primary",children:"Redigera dokument"}),e.jsx(g,{children:e.jsx(h,{sx:{mt:1},formProps:{defaultValues:t.original},onChange:o=>{t._valuesCache=o}})}),e.jsx(p,{children:e.jsx(x,{row:t,table:n,variant:"text"})})]}),onCreate:t=>d(t,{onSuccess:n=>I({...t,documentId:n})}),onUpdate:t=>d(t),onDelete:t=>k(t)})},{id:"stakeholders",label:"Intressenter",content:e.jsx(e.Fragment,{children:"Intressenter..."})},{id:"modules",label:"Moduler",content:e.jsx(e.Fragment,{children:"Moduler..."})}]})}),e.jsxs($,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[s&&e.jsx(q,{onClick:()=>y(s,{onSuccess:()=>a("..")}),children:t=>e.jsx(r,{size:"large",variant:"outlined",color:"error",...V(t),children:"Ta bort"})}),e.jsx(r,{size:"large",variant:"outlined",color:"primary",onClick:()=>a(-1),children:"Avbryt"}),e.jsx(r,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{ue as default};
