import{u as d,a as n,j as t,G as a,T as u,P as c,B as h,C as p,L as x,D as b,O as m}from"./index-Bd-1JDTF.js";const l={id:"dashboard",title:"Dashboard",url:"/dashboard"},i=[{id:"assignments",title:"Uppdrag",url:"/dashboard/assignments"},{id:"contacts",title:"Kontakter",url:"/dashboard/contacts"},{id:"companies",title:"Bolag",url:"/dashboard/companies"},{id:"seeking",title:"Söker",url:"/dashboard/seeking"},{id:"reports",title:"Rapport",url:"/dashboard/reports"},{id:"leads",title:"Leads",url:"/dashboard/leads"}],j=()=>{const{pathname:r}=d(),o=n(),s=i.find(e=>e.url===r)||l;return t.jsxs(t.Fragment,{children:[t.jsxs(a,{container:!0,alignItems:"flex-start",justifyContent:"space-between",children:[t.jsx(a,{item:!0,sm:"auto",children:t.jsx(u,{variant:"h3",lineHeight:1.5,gutterBottom:!0,children:s.title})}),t.jsx(a,{item:!0,sm:"auto",children:t.jsx(c,{style:{width:"100%",maxWidth:"calc(100vw - 52px - 32px)",overflowX:"hidden"},children:t.jsx(h,{sx:{display:"flex",gap:2},children:i.map(e=>t.jsx(p,{component:x,label:e.title,to:e.url===s.url?l.url:e.url,color:"primary",variant:e.url===r?"filled":"outlined",sx:{borderColor:o.palette.grey[200],px:1,mb:1},clickable:!0},e.id))})})})]}),t.jsx(b,{sx:{mb:2}}),t.jsx(m,{})]})};export{j as default};
