import{r as a,j as s,D as x}from"./index-BB9zhFVX.js";import{T as b,a as f}from"./object-CP29IFHa.js";const h=t=>{var r;const[c,l]=a.useState(0),[o,i]=a.useState([]);a.useEffect(()=>{i((t.tabs??[]).map((e,n)=>({...e,index:n})))},[t.tabs]),a.useEffect(()=>{l(t.selected??0)},[t.selected]);const d=(e,n)=>{l(n)};return s.jsxs(s.Fragment,{children:[s.jsx(b,{value:c,onChange:d,variant:"scrollable",children:o.map(e=>s.jsx(f,{value:e.index,label:s.jsxs("span",{children:[e.label,!1]}),...m(e.index)},e.index))}),s.jsx(x,{}),(r=o.find(e=>e.index===c))==null?void 0:r.content]})},m=t=>({id:`content-tab-${t}`,"aria-controls":`content-tabpanel-${t}`,tabIndex:0});export{h as C};
