import{r as j,K as J,j as o,_ as K,$ as G,a0 as X,F as Y,I as Z,T as v,a1 as ee,f as O,a2 as N,a3 as T,B as re,J as y,m as te}from"./index-4PX0GDns.js";import{f as ne,i as ae,j as ie}from"./useSnackbar-FSlAWeyv.js";import{s as A}from"./FlexGrow-DAzKFTpd.js";import{T as p}from"./Tooltip-DombpkJ0.js";const U="%[a-f0-9]{2}",D=new RegExp("("+U+")|([^%]+?)","gi"),I=new RegExp("("+U+")+","gi");function x(e,r){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;r=r||1;const t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],x(t),x(n))}function se(e){try{return decodeURIComponent(e)}catch{let r=e.match(D)||[];for(let t=1;t<r.length;t++)e=x(r,t).join(""),r=e.match(D)||[];return e}}function ce(e){const r={"%FE%FF":"��","%FF%FE":"��"};let t=I.exec(e);for(;t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{const a=se(t[0]);a!==t[0]&&(r[t[0]]=a)}t=I.exec(e)}r["%C2"]="�";const n=Object.keys(r);for(const a of n)e=e.replace(new RegExp(a,"g"),r[a]);return e}function oe(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return ce(e)}}function fe(e,r){const t={};if(Array.isArray(r))for(const n of r){const a=Object.getOwnPropertyDescriptor(e,n);a!=null&&a.enumerable&&Object.defineProperty(t,n,a)}else for(const n of Reflect.ownKeys(e)){const a=Object.getOwnPropertyDescriptor(e,n);if(a.enumerable){const s=e[n];r(n,s,e)&&Object.defineProperty(t,n,a)}}return t}function _(e,r){if(!(typeof e=="string"&&typeof r=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e===""||r==="")return[];const t=e.indexOf(r);return t===-1?[]:[e.slice(0,t),e.slice(t+r.length)]}const le=e=>e==null,de=e=>encodeURIComponent(e).replaceAll(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`),F=Symbol("encodeFragmentIdentifier");function ue(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{const a=t.length;return n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[f(r,e),"[",a,"]"].join("")]:[...t,[f(r,e),"[",f(a,e),"]=",f(n,e)].join("")]};case"bracket":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[f(r,e),"[]"].join("")]:[...t,[f(r,e),"[]=",f(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[f(r,e),":list="].join("")]:[...t,[f(r,e),":list=",f(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r=e.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,a)=>a===void 0||e.skipNull&&a===null||e.skipEmptyString&&a===""?n:(a=a===null?"":a,n.length===0?[[f(t,e),r,f(a,e)].join("")]:[[n,f(a,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,f(r,e)]:[...t,[f(r,e),"=",f(n,e)].join("")]}}function me(e){let r;switch(e.arrayFormat){case"index":return(t,n,a)=>{if(r=/\[(\d*)]$/.exec(t),t=t.replace(/\[\d*]$/,""),!r){a[t]=n;return}a[t]===void 0&&(a[t]={}),a[t][r[1]]=n};case"bracket":return(t,n,a)=>{if(r=/(\[])$/.exec(t),t=t.replace(/\[]$/,""),!r){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[...a[t],n]};case"colon-list-separator":return(t,n,a)=>{if(r=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!r){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[...a[t],n]};case"comma":case"separator":return(t,n,a)=>{const s=typeof n=="string"&&n.includes(e.arrayFormatSeparator),i=typeof n=="string"&&!s&&m(n,e).includes(e.arrayFormatSeparator);n=i?m(n,e):n;const c=s||i?n.split(e.arrayFormatSeparator).map(g=>m(g,e)):n===null?n:m(n,e);a[t]=c};case"bracket-separator":return(t,n,a)=>{const s=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!s){a[t]=n&&m(n,e);return}const i=n===null?[]:n.split(e.arrayFormatSeparator).map(c=>m(c,e));if(a[t]===void 0){a[t]=i;return}a[t]=[...a[t],...i]};default:return(t,n,a)=>{if(a[t]===void 0){a[t]=n;return}a[t]=[...[a[t]].flat(),n]}}}function M(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function f(e,r){return r.encode?r.strict?de(e):encodeURIComponent(e):e}function m(e,r){return r.decode?oe(e):e}function z(e){return Array.isArray(e)?e.sort():typeof e=="object"?z(Object.keys(e)).sort((r,t)=>Number(r)-Number(t)).map(r=>e[r]):e}function k(e){const r=e.indexOf("#");return r!==-1&&(e=e.slice(0,r)),e}function ge(e){let r="";const t=e.indexOf("#");return t!==-1&&(r=e.slice(t)),r}function P(e,r,t){return t==="string"&&typeof e=="string"?e:typeof t=="function"&&typeof e=="string"?t(e):r.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")?e.toLowerCase()==="true":t==="number"&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""||r.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?Number(e):e}function b(e){e=k(e);const r=e.indexOf("?");return r===-1?"":e.slice(r+1)}function S(e,r){r={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,types:Object.create(null),...r},M(r.arrayFormatSeparator);const t=me(r),n=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return n;for(const a of e.split("&")){if(a==="")continue;const s=r.decode?a.replaceAll("+"," "):a;let[i,c]=_(s,"=");i===void 0&&(i=s),c=c===void 0?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?c:m(c,r),t(m(i,r),c,n)}for(const[a,s]of Object.entries(n))if(typeof s=="object"&&s!==null&&r.types[a]!=="string")for(const[i,c]of Object.entries(s)){const g=r.types[a]?r.types[a].replace("[]",""):void 0;s[i]=P(c,r,g)}else typeof s=="object"&&s!==null&&r.types[a]==="string"?n[a]=Object.values(s).join(r.arrayFormatSeparator):n[a]=P(s,r,r.types[a]);return r.sort===!1?n:(r.sort===!0?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((a,s)=>{const i=n[s];return a[s]=i&&typeof i=="object"&&!Array.isArray(i)?z(i):i,a},Object.create(null))}function B(e,r){if(!e)return"";r={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...r},M(r.arrayFormatSeparator);const t=i=>r.skipNull&&le(e[i])||r.skipEmptyString&&e[i]==="",n=ue(r),a={};for(const[i,c]of Object.entries(e))t(i)||(a[i]=c);const s=Object.keys(a);return r.sort!==!1&&s.sort(r.sort),s.map(i=>{const c=e[i];return c===void 0?"":c===null?f(i,r):Array.isArray(c)?c.length===0&&r.arrayFormat==="bracket-separator"?f(i,r)+"[]":c.reduce(n(i),[]).join("&"):f(i,r)+"="+f(c,r)}).filter(i=>i.length>0).join("&")}function H(e,r){var a;r={decode:!0,...r};let[t,n]=_(e,"#");return t===void 0&&(t=e),{url:((a=t==null?void 0:t.split("?"))==null?void 0:a[0])??"",query:S(b(e),r),...r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:m(n,r)}:{}}}function L(e,r){r={encode:!0,strict:!0,[F]:!0,...r};const t=k(e.url).split("?")[0]||"",n=b(e.url),a={...S(n,{sort:!1}),...e.query};let s=B(a,r);s&&(s=`?${s}`);let i=ge(e.url);if(typeof e.fragmentIdentifier=="string"){const c=new URL(t);c.hash=e.fragmentIdentifier,i=r[F]?c.hash:`#${e.fragmentIdentifier}`}return`${t}${s}${i}`}function V(e,r,t){t={parseFragmentIdentifier:!0,[F]:!1,...t};const{url:n,query:a,fragmentIdentifier:s}=H(e,t);return L({url:n,query:fe(a,r),fragmentIdentifier:s},t)}function he(e,r,t){const n=Array.isArray(r)?a=>!r.includes(a):(a,s)=>!r(a,s);return V(e,n,t)}const $=Object.freeze(Object.defineProperty({__proto__:null,exclude:he,extract:b,parse:S,parseUrl:H,pick:V,stringify:B,stringifyUrl:L},Symbol.toStringTag,{value:"Module"})),ye={parse:e=>{const r=$.parse(e,{arrayFormat:"bracket"});return Object.entries(r).map(([t,n])=>({id:t,value:n}))},serialize:e=>{const r=e.reduce((t,{id:n,value:a})=>({...t,[n]:a}),{});return $.stringify(r,{arrayFormat:"bracket"})}},Ne={parse:e=>e,serialize:e=>e},xe=(e,r)=>{j.useEffect(()=>{const t=new URLSearchParams(window.location.search),n=t.get(e)??"";if(r===n)return;r?t.set(e,r):t.delete(e);const a=[window.location.pathname,t.toString()].filter(Boolean).join("?");window.history.replaceState(null,"",a)},[e,r])},Fe=(e,r,t)=>{const[n,a]=j.useState(()=>{const i=new URLSearchParams(window.location.search).get(e);return i!==null?r.parse(i):t});return xe(e,r.serialize(n)),[n,a]},je=J(o.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),be=({children:e,...r})=>o.jsx(K,{variant:"popover",popupId:`delete-popup-${r.id}`,children:t=>o.jsxs(o.Fragment,{children:[e(t),o.jsx(G,{...X(t),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:o.jsxs(Y,{children:[o.jsx(Z,{children:o.jsx(v,{variant:"body1",children:"Är du säker på att du vill ta bort?"})}),o.jsxs(ee,{children:[o.jsx(O,{fullWidth:!0,onClick:t.close,color:"inherit",variant:"outlined",children:"Avbryt"}),o.jsx(O,{startIcon:o.jsx(je,{}),fullWidth:!0,onClick:n=>{var a;return[(a=r.onClick)==null?void 0:a.call(r,n),t.close()]},color:"error",variant:"contained",children:"Ta bort"})]})]})})]})});var w={},Se=T;Object.defineProperty(w,"__esModule",{value:!0});var q=w.default=void 0,we=Se(N()),Ce=o;q=w.default=(0,we.default)((0,Ce.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var C={},Ee=T;Object.defineProperty(C,"__esModule",{value:!0});var Q=C.default=void 0,Re=Ee(N()),Oe=o;Q=C.default=(0,Re.default)((0,Oe.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");const Te=({editDisplayMode:e="row",state:r,...t})=>{const[n,a]=Fe("filters",ye,[]),[s,i]=j.useState(e),c={editDisplayMode:s,setEditDisplayMode:i},g=ne({editDisplayMode:s,state:{columnFilters:n,...r},onColumnFiltersChange:a,onCreatingRowSave:async({row:d,values:h,table:u})=>{var l;await((l=t.onCreate)==null?void 0:l.call(t,{...d.original,...h})),u.setCreatingRow(null),i(e)},onEditingRowSave:async({row:d,values:h,table:u})=>{var l;await((l=t.onUpdate)==null?void 0:l.call(t,{...d.original,...h},d.original)),u.setEditingRow(null),i(e)},displayColumnDefOptions:{"mrt-row-actions":{minSize:120,size:120,maxSize:120,grow:!1}},muiTablePaperProps:{sx:{...A,mx:-1,boxShadow:0}},muiTableContainerProps:{sx:{...A,height:"300px"}},positionActionsColumn:"last",renderRowActions:Ae(t,c),renderTopToolbarCustomActions:pe(),muiTableBodyCellProps:({row:d,column:h,table:u})=>({onDoubleClick:()=>{i("row"),u.setEditingRow(u.getState().editingRow===d?null:d),queueMicrotask(()=>{const l=u.refs.editInputRefs.current[h.id];l==null||l.focus()})},onKeyDown:l=>{var E,R;l.key==="Escape"&&u.setEditingRow(null),l.key==="Enter"&&((R=(E=u.options).onEditingRowSave)==null||R.call(E,{exitEditingMode:()=>u.setEditingRow(null),row:d,table:u,values:d==null?void 0:d._valuesCache}))}}),...t}),{isLoading:W}=g.getState();return W?null:o.jsx(ae,{table:g})},Ae=(e,r)=>({row:t,table:n})=>o.jsxs(re,{sx:{display:"flex",gap:"1rem"},children:[o.jsx(p,{title:"Edit",children:o.jsx(y,{onClick:()=>[n.setEditingRow(t),r.setEditDisplayMode("modal")],children:o.jsx(ie,{})})}),o.jsx(be,{id:t.id,onClick:()=>{var a;(a=e.onDelete)==null||a.call(e,t.original),n.setEditingRow(null)},children:a=>o.jsx(p,{title:"Delete",children:o.jsx(y,{color:"error",...te(a),children:o.jsx(Q,{})})})})]}),pe=()=>({table:e})=>o.jsx(y,{onClick:()=>{e.setCreatingRow(!0)},children:o.jsx(q,{})});export{Te as D,Ne as S,be as a,Fe as u};