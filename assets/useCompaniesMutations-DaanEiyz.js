import{r as f,j as e,G as s,o as n,p as o}from"./index-DEfp3COM.js";import{u as b}from"./index.esm-DX9b0aBs.js";import{F as j,s as h}from"./FlexGrow-DC6cQ74T.js";import{u as i,e as u}from"./useSnackbar-DGy0PD39.js";import{c as F,b as g,d as E}from"./useCompaniesQueries-Cxq5GK7J.js";const w=({onSubmit:r=()=>{},onChange:t,formProps:m,children:c,...p})=>{const{register:a,handleSubmit:d,watch:x,formState:{errors:y}}=b(m),l=x();return f.useEffect(()=>{t==null||t(l)},[t,l]),e.jsx(j,{...p,children:e.jsxs("form",{onSubmit:d(r),style:{...h},children:[e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(n,{fullWidth:!0,label:"Bolagsnamn",type:"text",margin:"none",...a("companyName",{required:!0}),error:!!y.companyName})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(n,{fullWidth:!0,label:"Address",type:"text",margin:"none",...a("address")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(n,{fullWidth:!0,label:"Industri",type:"text",margin:"none",...a("industry")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(n,{fullWidth:!0,label:"Website",type:"text",margin:"none",...a("website")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(n,{fullWidth:!0,label:"Telefon",type:"text",margin:"none",...a("phone")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(n,{fullWidth:!0,label:"Email",type:"text",margin:"none",...a("email")})})]}),c]})})},Q=()=>{const r=o(),{showSnackbar:t}=i();return u({mutationFn:F,onSuccess:()=>{r.invalidateQueries({queryKey:["companies"]}),t("Företag skapat!")},onError:()=>{t("Ett fel uppstod när företaget skulle skapas.","error")}})},v=()=>{const r=o(),{showSnackbar:t}=i();return u({mutationFn:g,onSuccess:()=>{r.invalidateQueries({queryKey:["companies"]}),t("Företag uppdaterat!")},onError:()=>{t("Ett fel uppstod när företaget skulle uppdateras.","error")}})},G=()=>{const r=o(),{showSnackbar:t}=i();return u({mutationFn:E,onSuccess:()=>{r.invalidateQueries({queryKey:["companies"]}),t("Företag borttaget!")},onError:()=>{t("Ett fel uppstod när företaget skulle tas bort.","error")}})};export{w as C,v as a,G as b,Q as u};
