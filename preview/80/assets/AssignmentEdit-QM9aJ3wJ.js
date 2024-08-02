import{r as C,j as e,g as v,L,h as A,i as T,k,T as F,B as x,S as R,f as p,l as S}from"./index-K1Q76tUH.js";import{t as E,D as h,a as f,b as j,M as D}from"./useSnackbar-QAsfT7_z.js";import{D as M,a as P}from"./DataTable-B1SWowBr.js";import{f as y,t as $}from"./date-BdBhOC82.js";import{u as V,a as B,b as N,c as z,D as b,d as _}from"./DocumentForm-Bizjcr9S.js";import{u as U,I as G}from"./useInteractionsQueries-mzmWJs6J.js";import{C as K}from"./ContentTabs-DolnQx8E.js";import{F as q}from"./FlexGrow-h5A7ieCd.js";import{u as w,a as H,b as J,A as O}from"./useAssignmentsMutations-Bnf2gjHw.js";import{a as Q}from"./useAssignmentsQueries-CUYU_OSW.js";import"./MoreHoriz-CmbiUL9F.js";import"./index.esm-DsMG3cqA.js";import"./Tooltip-Gk82Gi6O.js";import"./useQueryParam-Dq1ji5gs.js";import"./useContactsQueries-Aj1CB5Hw.js";const W=({documentReferences:o,isLoading:r,defaultValues:s})=>{const{data:c=[],isLoading:m}=V(),l=C.useMemo(()=>{const t=E(c,"documentId");return o.map(n=>({...n,...t.get(n.documentId)}))},[c,o]),{mutate:d}=B(),{mutate:u}=N(),{mutate:g}=z();return e.jsx(M,{data:l,getRowId:t=>`${t.documentId}-${t.entityType}-${t.entityId}`,state:{isLoading:m||r},columns:[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:t,row:n})=>e.jsx(v,{component:L,to:`/documents/${n.original.documentId}`,children:t.getValue()})},{accessorFn:t=>{var n;return(n=t.content)==null?void 0:n.type},header:"Filtyp",enableEditing:!1},{accessorFn:t=>{var n;return A((n=t.content)==null?void 0:n.lastModified)},header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:t})=>y($(t.getValue()))}],renderCreateRowDialogContent:({row:t,table:n})=>e.jsxs(e.Fragment,{children:[e.jsx(h,{variant:"h4",color:"primary",children:"Nytt dokument"}),e.jsx(f,{children:e.jsx(b,{sx:{mt:1},enableExistingDocuments:!0,formProps:{defaultValues:s},onChange:i=>{t._valuesCache=i}})}),e.jsx(j,{children:e.jsx(D,{row:t,table:n,variant:"text"})})]}),renderEditRowDialogContent:({row:t,table:n})=>e.jsxs(e.Fragment,{children:[e.jsx(h,{variant:"h4",color:"primary",children:"Redigera dokument"}),e.jsx(f,{children:e.jsx(b,{sx:{mt:1},formProps:{defaultValues:t.original},onChange:i=>{t._valuesCache=i}})}),e.jsx(j,{children:e.jsx(D,{row:t,table:n,variant:"text"})})]}),onCreate:t=>d(t,{onSuccess:n=>u({...t,documentId:n})}),onUpdate:t=>d(t),onDelete:t=>g(t)})},ue=()=>{const o=T(),r=k(),{data:s,isLoading:c}=Q(o.id==="new"?void 0:Number(o.id)),{mutate:m}=w(),{mutate:l}=H(),{mutate:d}=J(),{data:u=[],isLoading:g}=_({entityType:"assignment",entityId:s==null?void 0:s.assignmentId}),{data:t=[],isLoading:n}=U(s?{contactId:s.responsiblePersonId}:void 0),i=a=>{s?l(a):m(a,{onSuccess:I=>r(`/dashboard/assignments/${I.assignmentId}`)})};if(!c)return e.jsxs(e.Fragment,{children:[e.jsx(F,{variant:"h4",color:"primary",children:s?"Redigera uppdrag":"Lägg till uppdrag"}),e.jsx(x,{sx:{my:1}}),e.jsxs(O,{formProps:{values:s},onSubmit:i,children:[e.jsx(x,{sx:{my:1}}),s&&e.jsx(q,{children:e.jsx(K,{tabs:[{id:"interactions",label:"Interaktioner",content:e.jsx(G,{interactions:t,isLoading:n,defaultValues:{contacts:[s.responsiblePerson,s.externalContactPerson].filter(a=>!!a),interactionDate:y()}})},{id:"documents",label:"Dokument",content:e.jsx(W,{documentReferences:u,isLoading:g})},{id:"stakeholders",label:"Intressenter",content:e.jsx(e.Fragment,{children:"Intressenter..."})},{id:"modules",label:"Moduler",content:e.jsx(e.Fragment,{children:"Moduler..."})}]})}),e.jsxs(R,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[s&&e.jsx(P,{onClick:()=>d(s,{onSuccess:()=>r("..")}),children:a=>e.jsx(p,{size:"large",variant:"outlined",color:"error",...S(a),children:"Ta bort"})}),e.jsx(p,{size:"large",variant:"outlined",color:"primary",onClick:()=>r(-1),children:"Avbryt"}),e.jsx(p,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{ue as default};
