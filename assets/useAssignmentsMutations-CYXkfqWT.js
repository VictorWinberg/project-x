import{r as A,j as e,B as S,G as a,h as r,i as F,k as I,l as N,q as O,m}from"./index-BSAVlEUM.js";import{u as v,C as w}from"./index.esm-C_vJEc0t.js";import{u as C}from"./useContactsQueries-DwCXUNoV.js";import{s as E}from"./FlexGrow-CkEwPUZn.js";import{A as y}from"./Autocomplete-DglQMvLD.js";import{p as c,u as l,a as p}from"./useSnackbar-B-I2WYU9.js";const K=({onSubmit:t=()=>{},onChange:s,formProps:g,children:_,...b})=>{const{data:u=[]}=C(),{register:i,control:h,handleSubmit:j,watch:f}=v(g),d=f();return A.useEffect(()=>{s==null||s(d)},[s,d]),e.jsx(S,{...b,children:e.jsxs("form",{onSubmit:j(t),style:{...E},children:[e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Uppdragsnamn",type:"text",margin:"none",...i("assignmentName")})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(w,{name:"responsiblePersonId",control:h,render:({field:o})=>e.jsx(y,{options:u,getOptionKey:n=>n.contactId,getOptionLabel:n=>n.contactName,value:u.find(n=>n.contactId===o.value)||null,onChange:(n,x)=>o.onChange(x?x.contactId:void 0),renderInput:n=>e.jsx(r,{...n,label:"Uppdragsgivare",variant:"outlined",fullWidth:!0})})})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(y,{multiple:!0,options:[],renderInput:o=>e.jsx(r,{...o,label:"Fastigheter",type:"text",...i("relevantFiles")}),limitTags:2,disableCloseOnSelect:!0})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Status",margin:"none",type:"text",...i("status")})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Typ",margin:"none",type:"text",...i("type")})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Arvode",margin:"none",type:"number",...i("fee")})})]}),_]})})},z=async()=>await O(`
    SELECT
      assignments.*,
      (rp.contact_name) AS responsible_person_name,
      rp.email AS responsible_person_email,
      rc.company_name AS responsible_company_name,
      (ecp.contact_name) AS external_contact_person_name,
      ecp.email AS external_contact_person_email,
      ec.company_name AS external_company_name
    FROM assignments
    LEFT JOIN contacts rp ON responsible_person_id = rp.contact_id
    LEFT JOIN contacts ecp ON external_contact_person_id = ecp.contact_id
    LEFT JOIN companies rc ON rp.company_id = rc.company_id
    LEFT JOIN companies ec ON ecp.company_id = ec.company_id
  `),q=async t=>{await F("assignments",c(t,["assignmentName","responsiblePersonId","externalContactPersonId","relevantFiles","fee","type","status"]))},P=async t=>{await I("assignments",c(t,["assignmentName","responsiblePersonId","externalContactPersonId","relevantFiles","fee","type","status"]),c(t,["assignmentId"]))},T=async({assignmentId:t})=>{await N("assignments",{assignmentId:t})},B=()=>{const t=m(),{showSnackbar:s}=l();return p({mutationFn:q,onSuccess:()=>{t.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag skapat!")}})},G=()=>{const t=m(),{showSnackbar:s}=l();return p({mutationFn:P,onSuccess:()=>{t.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag uppdaterat!")}})},M=()=>{const t=m(),{showSnackbar:s}=l();return p({mutationFn:T,onSuccess:()=>{t.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag borttaget!")}})};export{K as A,G as a,M as b,z as f,B as u};
