import{r as f,j as e,G as s,k as r}from"./index-BB9zhFVX.js";import{u as y,C as k}from"./index.esm-Cs5AlVwT.js";import{u as g}from"./useCompaniesQueries-BO_Q9w_i.js";import{F,s as I}from"./FlexGrow-Kse3woAO.js";import{A as c}from"./object-CP29IFHa.js";const v=({onSubmit:u=()=>{},onChange:l,formProps:x,children:d,...p})=>{const{data:a=[]}=g(),{register:i,control:j,handleSubmit:h,watch:b}=y(x),o=b();return f.useEffect(()=>{l==null||l(o)},[l,o]),e.jsx(F,{...p,children:e.jsxs("form",{onSubmit:h(u),style:{...I},children:[e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Namn",type:"text",margin:"none",...i("contactName")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Email",type:"text",margin:"none",...i("email")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Telefonnummer",type:"text",margin:"none",...i("phone")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(k,{name:"companyId",control:j,render:({field:n})=>e.jsx(c,{options:a,getOptionKey:t=>t.companyId,getOptionLabel:t=>t.companyName,value:a.find(t=>t.companyId===n.value)||null,onChange:(t,m)=>n.onChange(m?m.companyId:void 0),renderInput:t=>e.jsx(r,{...t,label:"Bolag",variant:"outlined",fullWidth:!0})})})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Befattning",type:"text",margin:"none",...i("jobTitle")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(c,{multiple:!0,options:U,renderInput:n=>e.jsx(r,{...n,label:"Utskick",name:"dispatch",type:"text"}),limitTags:2,disableCloseOnSelect:!0})})]}),d]})})},U=[{label:"Utskick Syd"},{label:"Utskick Väst"},{label:"Utskick Norr"},{label:"Utskick Öst"}];export{v as C};
