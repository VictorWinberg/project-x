import{p as a,t as o,g as s}from"./useSnackbar-C6CA59Ff.js";import{v as r,w as u,x as y,y as n,z as i}from"./index-B-JwtCrw.js";const p=async()=>{const t=await n("SELECT * FROM contacts ORDER BY contact_name"),c=o(await n("SELECT * FROM companies"),"companyId");return t.map(e=>({...e,company:c.get(e.companyId)}))},m=async t=>await i("contacts",{contactId:t}),C=async t=>await r("contacts",a(t,["contactName","email","phone","jobTitle","companyId","position","address","notes","lastInteractionDate"])),w=async t=>await u("contacts",a(t,["contactName","email","phone","jobTitle","companyId","position","address","notes","lastInteractionDate"]),a(t,["contactId"])),q=async({contactId:t})=>await y("contacts",{contactId:t}),E=()=>s({queryKey:["contacts"],queryFn:p}),I=t=>s({queryKey:["contact",t],queryFn:()=>m(t),enabled:!!t});export{I as a,w as b,C as c,q as d,E as u};
