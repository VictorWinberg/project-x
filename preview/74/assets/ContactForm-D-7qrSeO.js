import{r as y,j as e,G as s,o as r}from"./index-BGgb9Zdm.js";import{u as k,C as g}from"./index.esm-DA5g3P7w.js";import{u as F}from"./useCompaniesQueries-lztlPe27.js";import{F as I,s as N}from"./FlexGrow-DdQzUFFU.js";import{A as c}from"./useSnackbar-DRQEkc0n.js";const C=({onSubmit:u=()=>{},onChange:l,formProps:x,children:d,...p})=>{const{data:o=[]}=F(),{register:i,control:j,handleSubmit:f,watch:h,formState:{errors:b}}=k(x),a=h();return y.useEffect(()=>{l==null||l(a)},[l,a]),e.jsx(I,{...p,children:e.jsxs("form",{onSubmit:f(u),style:{...N},children:[e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Namn",type:"text",margin:"none",...i("contactName",{required:!0}),error:!!b.contactName})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Email",type:"text",margin:"none",...i("email")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Telefonnummer",type:"text",margin:"none",...i("phone")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(g,{name:"companyId",control:j,render:({field:n})=>e.jsx(c,{options:o,getOptionKey:t=>t.companyId,getOptionLabel:t=>t.companyName,value:o.find(t=>t.companyId===n.value)||null,onChange:(t,m)=>n.onChange(m?m.companyId:void 0),renderInput:t=>e.jsx(r,{...t,label:"Bolag",variant:"outlined",fullWidth:!0})})})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Befattning",type:"text",margin:"none",...i("jobTitle")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(c,{multiple:!0,options:S,renderInput:n=>e.jsx(r,{...n,label:"Utskick",name:"dispatch",type:"text"}),limitTags:2,disableCloseOnSelect:!0})})]}),d]})})},S=[{label:"Utskick Syd"},{label:"Utskick Väst"},{label:"Utskick Norr"},{label:"Utskick Öst"}];export{C};
