import{i as s,k as t,l as n,q as i}from"./index-DKPB9hdP.js";import{p as e}from"./useSnackbar-BTjqhMXh.js";const o=async()=>await i(`
    SELECT * FROM companies
  `),p=async a=>{await s("companies",e(a,["companyName","address","industry","phone","email","website"]))},c=async a=>{await t("companies",e(a,["companyName","address","industry","phone","email","website"]),e(a,["companyId"]))},d=async a=>{await n("companies",{companyId:a})};export{p as c,d,o as f,c as u};
