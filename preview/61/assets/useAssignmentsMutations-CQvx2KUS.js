import{r as v,j as e,G as n,m as o,n as c}from"./index-CUrplrJD.js";import{u as I,C as f}from"./index.esm-BgzcVnA_.js";import{u as E}from"./useContactsQueries-Bts9mieC.js";import{F,s as k}from"./FlexGrow-CkqNsMvI.js";import{A as m,u as p,e as d}from"./useSnackbar-BrK6SEP8.js";import{c as C,b as q,d as K}from"./useAssignmentsQueries-D0adj4hF.js";const G=({onSubmit:r=()=>{},onChange:s,formProps:j,children:b,...h})=>{const{data:l=[]}=E(),{register:i,control:x,handleSubmit:y,watch:A,formState:{errors:S}}=I(j),g=A();return v.useEffect(()=>{s==null||s(g)},[s,g]),e.jsx(F,{...h,children:e.jsxs("form",{onSubmit:y(r),style:{...k},children:[e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(o,{fullWidth:!0,label:"Uppdragsnamn",type:"text",margin:"none",...i("assignmentName",{required:!0}),error:!!S.assignmentName})}),e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(f,{name:"responsiblePersonId",control:x,render:({field:a})=>e.jsx(m,{options:l,getOptionKey:t=>t.contactId,getOptionLabel:t=>t.contactName,value:l.find(t=>t.contactId===a.value)||null,onChange:(t,u)=>a.onChange(u?u.contactId:void 0),renderInput:t=>e.jsx(o,{...t,label:"Ansvarig",variant:"outlined",fullWidth:!0})})})}),e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(f,{name:"externalContactPersonId",control:x,render:({field:a})=>e.jsx(m,{options:l,getOptionKey:t=>t.contactId,getOptionLabel:t=>t.contactName,value:l.find(t=>t.contactId===a.value)||null,onChange:(t,u)=>a.onChange(u?u.contactId:void 0),renderInput:t=>e.jsx(o,{...t,label:"Extern",variant:"outlined",fullWidth:!0})})})}),e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(m,{multiple:!0,options:[],renderInput:a=>e.jsx(o,{...a,label:"Fastigheter",type:"text",...i("relevantFiles")}),limitTags:2,disableCloseOnSelect:!0})}),e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(o,{fullWidth:!0,label:"Status",margin:"none",type:"text",...i("status")})}),e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(o,{fullWidth:!0,label:"Typ",margin:"none",type:"text",...i("type")})}),e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(o,{fullWidth:!0,label:"Arvode",margin:"none",type:"number",...i("fee"),InputProps:{endAdornment:"SEK"}})})]}),b]})})},P=()=>{const r=c(),{showSnackbar:s}=p();return d({mutationFn:C,onSuccess:()=>{r.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag skapat!")},onError:()=>{s("Ett fel uppstod när uppgiften skulle skapas.","error")}})},T=()=>{const r=c(),{showSnackbar:s}=p();return d({mutationFn:q,onSuccess:()=>{r.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag uppdaterat!")},onError:()=>{s("Ett fel uppstod när uppgiften skulle uppdateras.","error")}})},L=()=>{const r=c(),{showSnackbar:s}=p();return d({mutationFn:K,onSuccess:()=>{r.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag borttaget!")},onError:()=>{s("Ett fel uppstod när uppgiften skulle tas bort.","error")}})};export{G as A,T as a,L as b,P as u};
