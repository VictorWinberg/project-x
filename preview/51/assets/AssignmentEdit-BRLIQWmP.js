import{h as g,i as p,j as s,T as u,B as r,S as x,f as a}from"./index-CKGEwxoU.js";import{C as h}from"./ContentTabs-CuF21Grm.js";import{F as j}from"./FlexGrow-D28_Ntw4.js";import{u as b,a as f,A as y}from"./useAssignmentsMutations-BqTztE9W.js";import{a as A}from"./useAssignmentsQueries-BcAGDRQH.js";import"./object-J3PGAFr1.js";import"./index.esm-CMaE1Frh.js";import"./useContactsQueries-CnEpxtE9.js";import"./useSnackbar-DkqLVLZS.js";const z=()=>{const i=g(),t=p(),{data:e,isLoading:o}=A(Number(i.id)),{mutate:m}=b(),{mutate:l}=f(),c=n=>{e?l(n):m(n,{onSuccess:d=>t(`/dashboard/assignments/${d.assignmentId}`)})};if(!o)return s.jsxs(s.Fragment,{children:[s.jsx(u,{variant:"h4",color:"primary",children:e?"Redigera uppdrag":"Lägg till uppdrag"}),s.jsx(r,{sx:{my:1}}),s.jsxs(y,{formProps:{values:e},onSubmit:c,children:[s.jsx(r,{sx:{my:1}}),e&&s.jsx(j,{children:s.jsx(h,{tabs:[{label:"Interaktioner",content:s.jsx(s.Fragment,{children:"Interaktioner..."})},{label:"Dokument",content:s.jsx(s.Fragment,{children:"Dokument..."})},{label:"Intressenter",content:s.jsx(s.Fragment,{children:"Intressenter..."})},{label:"Moduler",content:s.jsx(s.Fragment,{children:"Moduler..."})}]})}),s.jsxs(x,{spacing:2,direction:"row",sx:{mt:3},children:[s.jsx(a,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"}),s.jsx(a,{size:"large",variant:"outlined",color:"primary",onClick:()=>t(-1),children:"Tillbaka"})]})]})]})};export{z as default};
