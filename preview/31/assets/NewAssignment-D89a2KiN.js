import{g,j as e,T as h,B as j,G as s,h as r,S as b,f as l,L as y}from"./index-CR1gxfLo.js";import{u as f,C as S}from"./index.esm-1GueOsaJ.js";import{u as v}from"./useContactsQueries-B55gdzWI.js";import{u as A}from"./useAssignmentsMutations-D2VIooXQ.js";import{A as o}from"./Autocomplete-Cy324F4d.js";import"./contactsApi-DPPS91Wa.js";import"./object-TfJ8iY93.js";import"./IconButton-BaA5DemH.js";const O=()=>{const{data:m=[]}=v(),{mutate:u}=A(),c=g(),{register:a,control:d,handleSubmit:p}=f(),x=n=>{u(n,{onSuccess:()=>{c("..")}})};return e.jsxs(e.Fragment,{children:[e.jsx(h,{variant:"h4",color:"primary",children:"Lägg till uppdrag"}),e.jsx(j,{sx:{my:1}}),e.jsxs("form",{onSubmit:p(x),children:[e.jsxs(s,{container:!0,spacing:3,children:[e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Uppdragsnamn",type:"text",margin:"none",...a("assignmentName")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(S,{name:"responsiblePersonId",control:d,render:({field:n})=>e.jsx(o,{options:m,getOptionKey:t=>t.contactId,getOptionLabel:t=>`${t.firstName} ${t.lastName}`,onChange:(t,i)=>n.onChange(i?i.contactId:void 0),renderInput:t=>e.jsx(r,{...t,label:"Uppdragsgivare",variant:"outlined",fullWidth:!0})})})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(o,{multiple:!0,options:B,renderInput:n=>e.jsx(r,{...n,label:"Fastigheter",type:"text",...a("relevantFiles")}),limitTags:2,disableCloseOnSelect:!0})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Status",margin:"none",type:"text",...a("status")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Typ",margin:"none",type:"text",...a("type")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Arvode",margin:"none",type:"number",...a("fee")})})]}),e.jsxs(b,{spacing:2,direction:"row",sx:{mt:3},children:[e.jsx(l,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"}),e.jsx(l,{component:y,size:"large",variant:"outlined",color:"primary",to:"..",children:"Avbryt"})]})]})]})},B=[{label:"Företaget"},{label:"BRF Sjöstadshöjden"},{label:"Bil & Bostad AB"},{label:"Hemfosa Fastigheter AB"},{label:"Svenska Bostäder"},{label:"Wallenstam AB"},{label:"Skanska"},{label:"JM AB"}];export{O as default};
