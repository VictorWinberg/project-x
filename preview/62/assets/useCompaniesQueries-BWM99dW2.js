import{p as a,g as s}from"./useSnackbar-Cy_aK-Ek.js";import{p as n,q as r,s as t,v as o,w as c}from"./index-YiW1SVvL.js";const y=async()=>await o("SELECT * FROM companies ORDER BY company_name"),p=async e=>await c("companies",{companyId:e}),i=async e=>await n("companies",a(e,["companyName","address","industry","phone","email","website"])),d=async e=>await r("companies",a(e,["companyName","address","industry","phone","email","website"]),a(e,["companyId"])),w=async({companyId:e})=>await t("companies",{companyId:e}),C=()=>s({queryKey:["companies"],queryFn:y}),l=e=>s({queryKey:["company",e],queryFn:()=>p(e),enabled:!!e});export{l as a,d as b,i as c,w as d,C as u};
