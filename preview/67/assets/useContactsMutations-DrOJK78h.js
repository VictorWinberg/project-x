import{o as n}from"./index-B-JwtCrw.js";import{u as a,e as o}from"./useSnackbar-C6CA59Ff.js";import{c as r,b as s,d as u}from"./useContactsQueries-Bfi9PR_j.js";const l=()=>{const e=n(),{showSnackbar:t}=a();return o({mutationFn:r,onSuccess:()=>{e.invalidateQueries({queryKey:["contacts"]}),t("Kontakt skapad!")},onError:()=>{t("Ett fel uppstod när kontakten skulle skapas.","error")}})},p=()=>{const e=n(),{showSnackbar:t}=a();return o({mutationFn:s,onSuccess:()=>{e.invalidateQueries({queryKey:["contacts"]}),t("Kontakt uppdaterad!")},onError:()=>{t("Ett fel uppstod när kontakten skulle uppdateras.","error")}})},d=()=>{const e=n(),{showSnackbar:t}=a();return o({mutationFn:u,onSuccess:()=>{e.invalidateQueries({queryKey:["contacts"]}),t("Kontakt borttagen!")},onError:()=>{t("Ett fel uppstod när kontakten skulle tas bort.","error")}})};export{p as a,d as b,l as u};
