import{p as a,t as o,c as s}from"./useSnackbar-BbkumwX-.js";import{n as r,o as i,p as u,q as n,s as y}from"./index-33pNkKs4.js";const m=async()=>{const t=await n("SELECT * FROM contacts ORDER BY contact_name"),c=o(await n("SELECT * FROM companies"),"companyId");return t.map(e=>({...e,company:c.get(e.companyId)}))},p=async t=>await y("contacts",{contactId:t}),C=async t=>await r("contacts",a(t,["contactName","email","phone","jobTitle","companyId","position","address","notes","lastInteractionDate"])),q=async t=>await i("contacts",a(t,["contactName","email","phone","jobTitle","companyId","position","address","notes","lastInteractionDate"]),a(t,["contactId"])),w=async({contactId:t})=>await u("contacts",{contactId:t}),E=()=>s({queryKey:["contacts"],queryFn:m}),I=t=>s({queryKey:["contact",t],queryFn:()=>p(t),enabled:!!t});export{I as a,q as b,C as c,w as d,E as u};
