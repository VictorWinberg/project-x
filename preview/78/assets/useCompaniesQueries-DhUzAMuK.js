import{p as a,e as s}from"./useSnackbar-DwOOvmOR.js";import{p as n,s as t,t as r,q as o,V as c}from"./index-W-oHtgo0.js";const y=async()=>await o("SELECT * FROM companies ORDER BY company_name"),p=async e=>await c("companies",{companyId:e}),i=async e=>await n("companies",a(e,["companyName","address","industry","phone","email","website"])),d=async e=>await t("companies",a(e,["companyName","address","industry","phone","email","website"]),a(e,["companyId"])),C=async({companyId:e})=>await r("companies",{companyId:e}),w=()=>s({queryKey:["companies"],queryFn:y}),l=e=>s({queryKey:["company",e],queryFn:()=>p(e),enabled:!!e});export{l as a,d as b,i as c,C as d,w as u};
