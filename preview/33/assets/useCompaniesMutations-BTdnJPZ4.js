import{m as t}from"./index-DKPB9hdP.js";import{u as n,a as s}from"./useSnackbar-BTjqhMXh.js";import{c as o,u as r,d as u}from"./companiesApi-D7Pumlk6.js";const p=()=>{const e=t(),{showSnackbar:a}=n();return s({mutationFn:o,onSuccess:()=>{e.invalidateQueries({queryKey:["companies"]}),a("Företag skapat!")}})},y=()=>{const e=t(),{showSnackbar:a}=n();return s({mutationFn:r,onSuccess:()=>{e.invalidateQueries({queryKey:["companies"]}),a("Företag uppdaterat!")}})},C=()=>{const e=t(),{showSnackbar:a}=n();return s({mutationFn:u,onSuccess:()=>{e.invalidateQueries({queryKey:["companies"]}),a("Företag borttaget!")}})};export{C as a,p as b,y as u};
