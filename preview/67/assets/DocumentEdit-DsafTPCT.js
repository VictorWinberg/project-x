import{r as p,j as e,G as D,F as z,I as G,q as O,n as W,k as Y,l as H,T as J,B as k,S as Q,f as T,m as X,g as C,L as I,h as Z}from"./index-B-JwtCrw.js";import{A as ee,t as R,D as te,a as L,b as M,c as E,M as N,d as ae}from"./useSnackbar-C6CA59Ff.js";import{u as P}from"./useAssignmentsQueries-DtLOt_xz.js";import{u as K}from"./useCompaniesQueries-7AzYBtoI.js";import{u as V}from"./useContactsQueries-Bfi9PR_j.js";import{C as ne}from"./ContentTabs-BMxMPgO4.js";import{F as _,s as se}from"./FlexGrow-jLRts2E5.js";import{f as re,b as oe,e as ce,a as ie,c as le,g as me,d as de,D as ue}from"./useDocumentsMutations-CSHI7Y6G.js";import{u as pe,C as $}from"./index.esm-Bm2XGNBK.js";import{M as w}from"./MoreHoriz-B7k788XU.js";import"./Tooltip-B6OfHBWS.js";const xe=[{label:"Företag",value:"company"},{label:"Kontakt",value:"contact"},{label:"Uppdrag",value:"assignment"}],A=({onSubmit:c=()=>{},onChange:r,formProps:o,children:f,...j})=>{const{data:x=[]}=V(),{data:m=[]}=P(),{data:d=[]}=K(),{control:u,handleSubmit:y,watch:b,formState:{errors:v}}=pe(o),i=b();p.useEffect(()=>{r==null||r(i)},[r,i]);const g=p.useMemo(()=>{switch(i.entityType){case"company":return d.map(a=>({id:a.companyId,label:a.companyName}));case"contact":return x.map(a=>({id:a.contactId,label:a.contactName}));case"assignment":return m.map(a=>({id:a.assignmentId,label:a.assignmentName}));default:return[]}},[i.entityType,d,x,m]);return e.jsx(_,{...j,children:e.jsxs("form",{onSubmit:y(c),style:{...se},children:[e.jsxs(D,{container:!0,spacing:2,children:[e.jsx(D,{item:!0,xs:12,sm:6,children:e.jsxs(z,{fullWidth:!0,variant:"outlined",error:!!v.entityType,children:[e.jsx(G,{children:"Typ"}),e.jsx($,{control:u,name:"entityType",defaultValue:"",rules:{required:!0},render:({field:a})=>e.jsxs(O,{label:"Typ",...a,children:[e.jsx(w,{value:"",disabled:!0,children:"Välj typ"}),xe.map(n=>e.jsx(w,{value:n.value,children:n.label},n.value))]})})]})}),e.jsx(D,{item:!0,xs:12,sm:6,children:e.jsx($,{name:"entityId",control:u,rules:{required:!0},render:({field:a})=>e.jsx(ee,{options:g,getOptionKey:n=>n.id,getOptionLabel:n=>n.label,value:g.find(n=>n.id===a.value)||null,onChange:(n,h)=>a.onChange(h?h.id:void 0),renderInput:n=>e.jsx(W,{...n,label:"Länk",variant:"outlined",fullWidth:!0})})})})]}),f]})})},Re=()=>{const c=Y(),r=H(),{data:o,isLoading:f}=re(c.id==="new"?void 0:c.id),{mutate:j}=oe(),{mutate:x}=ce(),{data:m=[]}=K(),{data:d=[]}=V(),{data:u=[]}=P(),{data:y=[],isLoading:b}=ie(c.id==="new"?void 0:{documentId:c.id}),{mutate:v}=le(),{mutate:i}=me(),{mutate:g}=de(),a=p.useMemo(()=>R(m,"companyId"),[m]),n=p.useMemo(()=>R(d,"contactId"),[d]),h=p.useMemo(()=>R(u,"assignmentId"),[u]),B=t=>{j(t,{onSuccess:s=>r(`/documents/${s}`)})};if(f)return;const U=t=>{switch(t){case"company":return"Företag";case"contact":return"Kontakt";case"assignment":return"Uppdrag";default:return null}},q=(t,s)=>{var l,F,S;switch(t){case"company":return e.jsx(C,{component:I,to:`/dashboard/companies/${s}`,children:(l=a.get(s))==null?void 0:l.companyName});case"contact":return e.jsx(C,{component:I,to:`/dashboard/contacts/${s}`,children:(F=n.get(s))==null?void 0:F.contactName});case"assignment":return e.jsx(C,{component:I,to:{pathname:`/dashboard/assignments/${s}`,search:`${Z({tab:"documents"})}`},children:(S=h.get(s))==null?void 0:S.assignmentName});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(J,{variant:"h4",color:"primary",children:o?"Redigera dokument":"Lägg till dokument"}),e.jsx(k,{sx:{my:1}}),e.jsxs(ue,{formProps:{defaultValues:o},onSubmit:B,children:[e.jsx(k,{sx:{my:1}}),o&&e.jsx(_,{children:e.jsx(ne,{tabs:[{id:"references",label:"Referenser",content:e.jsx(te,{data:y,getRowId:t=>`${t.documentId}-${t.entityType}-${t.entityId}`,state:{isLoading:b},columns:[{accessorKey:"entityType",header:"Typ",enableEditing:!1,Cell:({row:t})=>U(t.original.entityType)},{accessorKey:"entityId",header:"Länk",enableEditing:!1,Cell:({row:t})=>q(t.original.entityType,t.original.entityId)}],renderCreateRowDialogContent:({row:t,table:s})=>e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"h4",color:"primary",children:"Ny referens"}),e.jsx(M,{children:e.jsx(A,{sx:{mt:1},formProps:{defaultValues:{documentId:o.documentId}},onChange:l=>{t._valuesCache=l}})}),e.jsx(E,{children:e.jsx(N,{row:t,table:s,variant:"text"})})]}),renderEditRowDialogContent:({row:t,table:s})=>e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"h4",color:"primary",children:"Redigera referens"}),e.jsx(M,{children:e.jsx(A,{sx:{mt:1},formProps:{defaultValues:t.original},onChange:l=>{t._valuesCache=l}})}),e.jsx(E,{children:e.jsx(N,{row:t,table:s,variant:"text"})})]}),onCreate:t=>v(t),onUpdate:(t,s)=>i({row:t,where:s}),onDelete:t=>g(t)})}]})}),e.jsxs(Q,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[o&&e.jsx(ae,{onClick:()=>x(o,{onSuccess:()=>r("..")}),children:t=>e.jsx(T,{size:"large",variant:"outlined",color:"error",...X(t),children:"Ta bort"})}),e.jsx(T,{size:"large",variant:"outlined",color:"primary",onClick:()=>r(-1),children:"Avbryt"}),e.jsx(T,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{Re as default};
