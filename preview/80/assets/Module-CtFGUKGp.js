import{j as o,B as u,f,r as m,T as y}from"./index-K1Q76tUH.js";import{u as i,F,S as p}from"./useQueryParam-Dq1ji5gs.js";import{f as g,i as C}from"./useSnackbar-QAsfT7_z.js";import{A as d,u as T}from"./useAssignmentsMutations-Bnf2gjHw.js";import{a as x}from"./AssignmentConfig-x_6odiVD.js";import{u as M}from"./useAssignmentsQueries-CUYU_OSW.js";import{C as j,u as k}from"./useCompaniesMutations-Ba7vPc4R.js";import{c as h}from"./CompanyConfig-DzQKOnes.js";import{u as P}from"./useCompaniesQueries-ClHNCyO3.js";import{C as S,u as D}from"./useContactsMutations-BT5YfBKT.js";import{c as v}from"./ContactConfig-L1ZZSmrW.js";import{u as A}from"./useContactsQueries-Aj1CB5Hw.js";const E=({selectedModule:t})=>{const{FormComponent:n,createMutation:a,props:r}=t,{mutate:s}=a();return o.jsxs(n,{onSubmit:s,...r,children:[o.jsx(u,{sx:{my:1}}),o.jsx(f,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})},R=({selectedModule:t})=>{const{useData:n,props:a}=t,[r,s]=i("filters",F,[]),[e,l]=i("search",p,""),{data:c=[]}=n(),b=g({data:c,initialState:{showGlobalFilter:!!e},state:{columnFilters:r,globalFilter:e},enableColumnFilters:!1,enableColumnResizing:!1,enableDensityToggle:!1,enableEditing:!1,enableRowActions:!1,enableTopToolbar:!1,onColumnFiltersChange:s,onGlobalFilterChange:l,...a});return o.jsx(C,{table:b})},_=[{key:"companyForm",label:"Formulär - Företag",title:"Nytt företag",type:"form",FormComponent:j,createMutation:k,props:{}},{key:"assignmentForm",label:"Formulär - Uppdrag",title:"Nytt uppdrag",type:"form",FormComponent:d,createMutation:T,props:{}},{key:"contactForm",label:"Formulär - Kontaktperson",title:"Ny kontaktperson",type:"form",FormComponent:S,createMutation:D,props:{}},{key:"companiesTable",label:"Tabell - Företag",title:"Företag",type:"table",useData:P,props:{columns:h},configProps:{enableTopToolbar:!0,enableColumnFilters:!0}},{key:"assignmentsTable",label:"Tabell - Uppdrag",title:"Uppdrag",type:"table",useData:M,props:{columns:x},configProps:{enableTopToolbar:!0,enableColumnFilters:!0}},{key:"contactsTable",label:"Tabell - Kontaktperson",title:"Kontakter",type:"table",useData:A,props:{columns:v},configProps:{enableTopToolbar:!0,enableColumnFilters:!0}}],z=t=>{const[n,a]=i("title",p,""),[r,s]=i("module",p,""),e=m.useMemo(()=>_.find(l=>l.key===r),[r]);return m.useEffect(()=>{var l;t.selectedModule!==void 0&&s(((l=t.selectedModule)==null?void 0:l.key)??"")},[t.selectedModule,s]),m.useEffect(()=>{t.title!==void 0&&a(t.title??"")},[t.title,a]),o.jsxs(u,{sx:{my:1},children:[o.jsx(y,{variant:"h4",color:"primary",children:n}),o.jsx(u,{sx:{my:1}}),(e==null?void 0:e.type)==="table"&&o.jsx(R,{selectedModule:e}),(e==null?void 0:e.type)==="form"&&o.jsx(E,{selectedModule:e})]})},J=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{z as M,J as a,_ as m};
