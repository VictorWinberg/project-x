import{p as a}from"./index-tPaa5cec.js";import{u as n,e as o}from"./useSnackbar-8um9XDsl.js";import{c as r,b as s,d as u}from"./useContactsQueries-BxcioWwq.js";const k=()=>{const e=a(),{showSnackbar:t}=n();return o({mutationFn:r,onSuccess:()=>{e.invalidateQueries({queryKey:["contacts"]}),t("Kontakt skapat!")},onError:()=>{t("Ett fel uppstod när kontakten skulle skapas.","error")}})},l=()=>{const e=a(),{showSnackbar:t}=n();return o({mutationFn:s,onSuccess:()=>{e.invalidateQueries({queryKey:["contacts"]}),t("Kontakt uppdaterat!")},onError:()=>{t("Ett fel uppstod när kontakten skulle uppdateras.","error")}})},d=()=>{const e=a(),{showSnackbar:t}=n();return o({mutationFn:u,onSuccess:()=>{e.invalidateQueries({queryKey:["contacts"]}),t("Kontakt borttaget!")},onError:()=>{t("Ett fel uppstod när kontakten skulle tas bort.","error")}})};export{l as a,d as b,k as u};