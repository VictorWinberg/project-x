import{g as h,j as t,T as j,B as g,G as e,h as s,S as y,f as o,L as b}from"./index-CJzcC6h9.js";import{u as f,C as k}from"./index.esm-0YvKOGi7.js";import{u as C}from"./useCompaniesQueries-BhNbAkVY.js";import{b as S}from"./useContactsMutations-B3nTMbkJ.js";import{A as l}from"./Autocomplete-CaJrqwMH.js";import"./useQuery-Bo0kIofM.js";import"./object-CScHriVy.js";import"./companiesApi-DZsRpU56.js";import"./contactsApi-1PN2KvZD.js";import"./IconButton-Bd1B694c.js";const O=()=>{const{data:m=[]}=C(),{mutate:c}=S(),p=h(),{register:a,control:u,handleSubmit:x}=f(),d=n=>{c(n,{onSuccess:()=>{p("..")}})};return t.jsxs(t.Fragment,{children:[t.jsx(j,{variant:"h4",color:"primary",children:"Lägg till kontakt"}),t.jsx(g,{sx:{my:1}}),t.jsxs("form",{onSubmit:x(d),children:[t.jsxs(e,{container:!0,spacing:3,children:[t.jsx(e,{item:!0,xs:12,sm:6,children:t.jsx(s,{fullWidth:!0,label:"Förnamn",type:"text",margin:"none",...a("firstName")})}),t.jsx(e,{item:!0,xs:12,sm:6,children:t.jsx(s,{fullWidth:!0,label:"Efternamn",type:"text",margin:"none",...a("lastName")})}),t.jsx(e,{item:!0,xs:12,sm:6,children:t.jsx(s,{fullWidth:!0,label:"Email",type:"text",margin:"none",...a("email")})}),t.jsx(e,{item:!0,xs:12,sm:6,children:t.jsx(s,{fullWidth:!0,label:"Telefonnummer",type:"text",margin:"none",...a("phone")})}),t.jsx(e,{item:!0,xs:12,children:t.jsx(k,{name:"companyId",control:u,render:({field:n})=>t.jsx(l,{options:m,getOptionKey:r=>r.companyId,getOptionLabel:r=>r.companyName,onChange:(r,i)=>n.onChange(i?i.companyId:void 0),renderInput:r=>t.jsx(s,{...r,label:"Bolag",variant:"outlined",fullWidth:!0})})})}),t.jsx(e,{item:!0,xs:12,children:t.jsx(l,{multiple:!0,options:v,renderInput:n=>t.jsx(s,{...n,label:"Utskick",name:"dispatch",type:"text"}),limitTags:2,disableCloseOnSelect:!0})})]}),t.jsxs(y,{spacing:2,direction:"row",sx:{mt:3},children:[t.jsx(o,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"}),t.jsx(o,{component:b,size:"large",variant:"outlined",color:"primary",to:"..",children:"Avbryt"})]})]})]})},v=[{label:"Utskick Syd"},{label:"Utskick Väst"},{label:"Utskick Norr"},{label:"Utskick Öst"}];export{O as default};