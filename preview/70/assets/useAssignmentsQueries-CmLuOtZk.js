import{p as o,t as c,g as i}from"./useSnackbar-BistsYWY.js";import{s as y,w as p,x as g,q as r,K as l}from"./index-BQfxxUsN.js";const d=async()=>{const e=await r("SELECT * FROM assignments ORDER BY assignment_name"),n=c(await r("SELECT * FROM contacts"),"contactId"),s=c(await r("SELECT * FROM companies"),"companyId");return e.map(C(n,s))},P=async e=>await l("assignments",{assignmentId:e}),f=async e=>await y("assignments",o(e,["assignmentName","responsiblePersonId","externalContactPersonId","relevantFiles","fee","type","status"])),w=async e=>await p("assignments",o(e,["assignmentName","responsiblePersonId","externalContactPersonId","relevantFiles","fee","type","status"]),o(e,["assignmentId"])),x=async({assignmentId:e})=>await g("assignments",{assignmentId:e});function C(e,n){return s=>{const t=e.get(s.responsiblePersonId),m=t&&n.get(t.companyId),a=e.get(s.externalContactPersonId),u=a&&n.get(a.companyId);return{...s,responsiblePerson:t&&{...t,company:m},externalContactPerson:a&&{...a,company:u}}}}const A=()=>i({queryKey:["assignments"],queryFn:d}),E=e=>i({queryKey:["assignment",e],queryFn:()=>P(e),enabled:!!e});export{E as a,w as b,f as c,x as d,A as u};
