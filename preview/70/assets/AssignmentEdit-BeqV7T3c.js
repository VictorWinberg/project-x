import{l as F,m as R,r as T,j as e,T as L,B as l,g as S,L as E,i as M,k as $,t as V,S as B,f as r,n as N}from"./index-BQfxxUsN.js";import{t as P,D as z,a as u,b as g,c as p,M as x,d as _}from"./useSnackbar-BistsYWY.js";import{u as U,a as G,b as K,c as q,d as w,D as h}from"./useDocumentsMutations--FfZA7vU.js";import{C as H}from"./ContentTabs-Fk1sJfD5.js";import{F as J}from"./FlexGrow-BHUawppE.js";import{u as O,a as Q,b as W,A as X}from"./useAssignmentsMutations-CAeBdq3Z.js";import{a as Y}from"./useAssignmentsQueries-CmLuOtZk.js";import"./MoreHoriz-Ck7ZXOkZ.js";import"./index.esm-BYmH26gF.js";import"./Tooltip-BcDffcRw.js";import"./useContactsQueries-DbnY6SMJ.js";const me=()=>{const i=F(),a=R(),{data:s,isLoading:j}=Y(i.id==="new"?void 0:Number(i.id)),{mutate:f}=O(),{mutate:y}=Q(),{mutate:D}=W(),{data:c=[],isLoading:b}=U(),{data:d=[],isLoading:C}=G({entityType:"assignment",entityId:s==null?void 0:s.assignmentId}),v=T.useMemo(()=>{const t=P(c,"documentId");return d.map(n=>({...n,...t.get(n.documentId)}))},[c,d]),{mutate:m}=K(),{mutate:I}=q(),{mutate:k}=w(),A=t=>{s?y(t):f(t,{onSuccess:n=>a(`/dashboard/assignments/${n.assignmentId}`)})};if(!j)return e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"h4",color:"primary",children:s?"Redigera uppdrag":"Lägg till uppdrag"}),e.jsx(l,{sx:{my:1}}),e.jsxs(X,{formProps:{values:s},onSubmit:A,children:[e.jsx(l,{sx:{my:1}}),s&&e.jsx(J,{children:e.jsx(H,{tabs:[{id:"interactions",label:"Interaktioner",content:e.jsx(e.Fragment,{children:"Interaktioner..."})},{id:"documents",label:"Dokument",content:e.jsx(z,{data:v,getRowId:t=>`${t.documentId}-${t.entityType}-${t.entityId}`,state:{isLoading:b||C},columns:[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:t,row:n})=>e.jsx(S,{component:E,to:`/documents/${n.original.documentId}`,children:t.getValue()})},{accessorFn:t=>{var n;return(n=t.content)==null?void 0:n.type},header:"Filtyp",enableEditing:!1},{accessorFn:t=>{var n;return M((n=t.content)==null?void 0:n.lastModified)},header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:t})=>$(V(t.getValue()))}],renderCreateRowDialogContent:({row:t,table:n})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"h4",color:"primary",children:"Nytt dokument"}),e.jsx(g,{children:e.jsx(h,{sx:{mt:1},enableExistingDocuments:!0,formProps:{defaultValues:{entityType:"assignment",entityId:s.assignmentId}},onChange:o=>{t._valuesCache=o}})}),e.jsx(p,{children:e.jsx(x,{row:t,table:n,variant:"text"})})]}),renderEditRowDialogContent:({row:t,table:n})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"h4",color:"primary",children:"Redigera dokument"}),e.jsx(g,{children:e.jsx(h,{sx:{mt:1},formProps:{defaultValues:t.original},onChange:o=>{t._valuesCache=o}})}),e.jsx(p,{children:e.jsx(x,{row:t,table:n,variant:"text"})})]}),onCreate:t=>m(t,{onSuccess:n=>I({...t,documentId:n})}),onUpdate:t=>m(t),onDelete:t=>k(t)})},{id:"stakeholders",label:"Intressenter",content:e.jsx(e.Fragment,{children:"Intressenter..."})},{id:"modules",label:"Moduler",content:e.jsx(e.Fragment,{children:"Moduler..."})}]})}),e.jsxs(B,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[s&&e.jsx(_,{onClick:()=>D(s,{onSuccess:()=>a("..")}),children:t=>e.jsx(r,{size:"large",variant:"outlined",color:"error",...N(t),children:"Ta bort"})}),e.jsx(r,{size:"large",variant:"outlined",color:"primary",onClick:()=>a(-1),children:"Avbryt"}),e.jsx(r,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{me as default};
