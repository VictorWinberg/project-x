import{u as d,a as n,j as t,G as e,T as u,P as c,B as h,C as p,L as x,O as m}from"./index-BB9zhFVX.js";import{F as b}from"./FlexGrow-Kse3woAO.js";const l={id:"dashboard",title:"Dashboard",url:"/dashboard"},o=[{id:"assignments",title:"Uppdrag",url:"/dashboard/assignments"},{id:"contacts",title:"Kontakter",url:"/dashboard/contacts"},{id:"companies",title:"Bolag",url:"/dashboard/companies"},{id:"seeking",title:"Söker",url:"/dashboard/seeking"},{id:"reports",title:"Rapport",url:"/dashboard/reports"},{id:"leads",title:"Leads",url:"/dashboard/leads"}],f=()=>{const{pathname:r}=d(),i=n(),s=o.find(a=>r.startsWith(a.url))||l;return t.jsxs(b,{children:[t.jsxs(e,{container:!0,alignItems:"flex-start",justifyContent:"space-between",children:[t.jsx(e,{item:!0,sm:"auto",children:t.jsx(u,{variant:"h3",lineHeight:1.5,gutterBottom:!0,children:s.title})}),t.jsx(e,{item:!0,sm:"auto",children:t.jsx(c,{style:{width:"100%",maxWidth:"calc(100vw - 52px)",overflowX:"hidden"},children:t.jsx(h,{sx:{display:"flex",gap:2},children:o.map(a=>t.jsx(p,{component:x,label:a.title,to:a.url===s.url?l.url:a.url,color:"primary",variant:r.startsWith(a.url)?"filled":"outlined",sx:{borderColor:i.palette.grey[200],px:1,mb:1},clickable:!0},a.id))})})})]}),t.jsx(m,{})]})};export{f as default};
