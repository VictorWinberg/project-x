import{r as j,K as J,j as o,_ as K,$ as G,a0 as X,F as Y,I as Z,T as v,a1 as rr,f as O,a2 as N,a3 as T,B as er,J as y,m as tr}from"./index-cV54zZxd.js";import{f as nr,i as ar,j as ir}from"./useSnackbar-BDyIueCB.js";import{s as p}from"./FlexGrow-DyFK3FYl.js";import{T as A}from"./Tooltip-CiG2SRO3.js";const U="%[a-f0-9]{2}",D=new RegExp("("+U+")|([^%]+?)","gi"),I=new RegExp("("+U+")+","gi");function x(r,e){try{return[decodeURIComponent(r.join(""))]}catch{}if(r.length===1)return r;e=e||1;const t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],x(t),x(n))}function sr(r){try{return decodeURIComponent(r)}catch{let e=r.match(D)||[];for(let t=1;t<e.length;t++)r=x(e,t).join(""),e=r.match(D)||[];return r}}function cr(r){const e={"%FE%FF":"��","%FF%FE":"��"};let t=I.exec(r);for(;t;){try{e[t[0]]=decodeURIComponent(t[0])}catch{const a=sr(t[0]);a!==t[0]&&(e[t[0]]=a)}t=I.exec(r)}e["%C2"]="�";const n=Object.keys(e);for(const a of n)r=r.replace(new RegExp(a,"g"),e[a]);return r}function or(r){if(typeof r!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return decodeURIComponent(r)}catch{return cr(r)}}function fr(r,e){const t={};if(Array.isArray(e))for(const n of e){const a=Object.getOwnPropertyDescriptor(r,n);a!=null&&a.enumerable&&Object.defineProperty(t,n,a)}else for(const n of Reflect.ownKeys(r)){const a=Object.getOwnPropertyDescriptor(r,n);if(a.enumerable){const s=r[n];e(n,s,r)&&Object.defineProperty(t,n,a)}}return t}function _(r,e){if(!(typeof r=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(r===""||e==="")return[];const t=r.indexOf(e);return t===-1?[]:[r.slice(0,t),r.slice(t+e.length)]}const lr=r=>r==null,dr=r=>encodeURIComponent(r).replaceAll(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),F=Symbol("encodeFragmentIdentifier");function ur(r){switch(r.arrayFormat){case"index":return e=>(t,n)=>{const a=t.length;return n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[f(e,r),"[",a,"]"].join("")]:[...t,[f(e,r),"[",f(a,r),"]=",f(n,r)].join("")]};case"bracket":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[f(e,r),"[]"].join("")]:[...t,[f(e,r),"[]=",f(n,r)].join("")];case"colon-list-separator":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[f(e,r),":list="].join("")]:[...t,[f(e,r),":list=",f(n,r)].join("")];case"comma":case"separator":case"bracket-separator":{const e=r.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,a)=>a===void 0||r.skipNull&&a===null||r.skipEmptyString&&a===""?n:(a=a===null?"":a,n.length===0?[[f(t,r),e,f(a,r)].join("")]:[[n,f(a,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,f(e,r)]:[...t,[f(e,r),"=",f(n,r)].join("")]}}function mr(r){let e;switch(r.arrayFormat){case"index":return(t,n,a)=>{if(e=/\[(\d*)]$/.exec(t),t=t.replace(/\[\d*]$/,""),!e){a[t]=n;return}a[t]===void 0&&(a[t]={}),a[t][e[1]]=n};case"bracket":return(t,n,a)=>{if(e=/(\[])$/.exec(t),t=t.replace(/\[]$/,""),!e){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[...a[t],n]};case"colon-list-separator":return(t,n,a)=>{if(e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!e){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[...a[t],n]};case"comma":case"separator":return(t,n,a)=>{const s=typeof n=="string"&&n.includes(r.arrayFormatSeparator),i=typeof n=="string"&&!s&&m(n,r).includes(r.arrayFormatSeparator);n=i?m(n,r):n;const c=s||i?n.split(r.arrayFormatSeparator).map(g=>m(g,r)):n===null?n:m(n,r);a[t]=c};case"bracket-separator":return(t,n,a)=>{const s=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!s){a[t]=n&&m(n,r);return}const i=n===null?[]:n.split(r.arrayFormatSeparator).map(c=>m(c,r));if(a[t]===void 0){a[t]=i;return}a[t]=[...a[t],...i]};default:return(t,n,a)=>{if(a[t]===void 0){a[t]=n;return}a[t]=[...[a[t]].flat(),n]}}}function M(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function f(r,e){return e.encode?e.strict?dr(r):encodeURIComponent(r):r}function m(r,e){return e.decode?or(r):r}function z(r){return Array.isArray(r)?r.sort():typeof r=="object"?z(Object.keys(r)).sort((e,t)=>Number(e)-Number(t)).map(e=>r[e]):r}function B(r){const e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function gr(r){let e="";const t=r.indexOf("#");return t!==-1&&(e=r.slice(t)),e}function P(r,e,t){return t==="string"&&typeof r=="string"?r:typeof t=="function"&&typeof r=="string"?t(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")?r.toLowerCase()==="true":t==="number"&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""||e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?Number(r):r}function b(r){r=B(r);const e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function S(r,e){e={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,types:Object.create(null),...e},M(e.arrayFormatSeparator);const t=mr(e),n=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return n;for(const a of r.split("&")){if(a==="")continue;const s=e.decode?a.replaceAll("+"," "):a;let[i,c]=_(s,"=");i===void 0&&(i=s),c=c===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?c:m(c,e),t(m(i,e),c,n)}for(const[a,s]of Object.entries(n))if(typeof s=="object"&&s!==null&&e.types[a]!=="string")for(const[i,c]of Object.entries(s)){const g=e.types[a]?e.types[a].replace("[]",""):void 0;s[i]=P(c,e,g)}else typeof s=="object"&&s!==null&&e.types[a]==="string"?n[a]=Object.values(s).join(e.arrayFormatSeparator):n[a]=P(s,e,e.types[a]);return e.sort===!1?n:(e.sort===!0?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((a,s)=>{const i=n[s];return a[s]=i&&typeof i=="object"&&!Array.isArray(i)?z(i):i,a},Object.create(null))}function k(r,e){if(!r)return"";e={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...e},M(e.arrayFormatSeparator);const t=i=>e.skipNull&&lr(r[i])||e.skipEmptyString&&r[i]==="",n=ur(e),a={};for(const[i,c]of Object.entries(r))t(i)||(a[i]=c);const s=Object.keys(a);return e.sort!==!1&&s.sort(e.sort),s.map(i=>{const c=r[i];return c===void 0?"":c===null?f(i,e):Array.isArray(c)?c.length===0&&e.arrayFormat==="bracket-separator"?f(i,e)+"[]":c.reduce(n(i),[]).join("&"):f(i,e)+"="+f(c,e)}).filter(i=>i.length>0).join("&")}function H(r,e){var a;e={decode:!0,...e};let[t,n]=_(r,"#");return t===void 0&&(t=r),{url:((a=t==null?void 0:t.split("?"))==null?void 0:a[0])??"",query:S(b(r),e),...e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:m(n,e)}:{}}}function L(r,e){e={encode:!0,strict:!0,[F]:!0,...e};const t=B(r.url).split("?")[0]||"",n=b(r.url),a={...S(n,{sort:!1}),...r.query};let s=k(a,e);s&&(s=`?${s}`);let i=gr(r.url);if(typeof r.fragmentIdentifier=="string"){const c=new URL(t);c.hash=r.fragmentIdentifier,i=e[F]?c.hash:`#${r.fragmentIdentifier}`}return`${t}${s}${i}`}function V(r,e,t){t={parseFragmentIdentifier:!0,[F]:!1,...t};const{url:n,query:a,fragmentIdentifier:s}=H(r,t);return L({url:n,query:fr(a,e),fragmentIdentifier:s},t)}function hr(r,e,t){const n=Array.isArray(e)?a=>!e.includes(a):(a,s)=>!e(a,s);return V(r,n,t)}const $=Object.freeze(Object.defineProperty({__proto__:null,exclude:hr,extract:b,parse:S,parseUrl:H,pick:V,stringify:k,stringifyUrl:L},Symbol.toStringTag,{value:"Module"})),yr={parse:r=>{const e=$.parse(r,{arrayFormat:"separator"});return Object.entries(e).map(([t,n])=>({id:t,value:n}))},serialize:r=>{const e=r.reduce((t,{id:n,value:a})=>({...t,[n]:a}),{});return $.stringify(e,{arrayFormat:"separator"})}},Nr={parse:r=>r,serialize:r=>r},xr=(r,e)=>{j.useEffect(()=>{const t=new URLSearchParams(window.location.search),n=t.get(r)??"";if(e===n)return;e?t.set(r,e):t.delete(r);const a=[window.location.pathname,t.toString()].filter(Boolean).join("?");window.history.replaceState(null,"",a)},[r,e])},Fr=(r,e,t)=>{const[n,a]=j.useState(()=>{const i=new URLSearchParams(window.location.search).get(r);return i!==null?e.parse(i):t});return xr(r,e.serialize(n)),[n,a]},jr=J(o.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),br=({children:r,...e})=>o.jsx(K,{variant:"popover",popupId:`delete-popup-${e.id}`,children:t=>o.jsxs(o.Fragment,{children:[r(t),o.jsx(G,{...X(t),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:o.jsxs(Y,{children:[o.jsx(Z,{children:o.jsx(v,{variant:"body1",children:"Är du säker på att du vill ta bort?"})}),o.jsxs(rr,{children:[o.jsx(O,{fullWidth:!0,onClick:t.close,color:"inherit",variant:"outlined",children:"Avbryt"}),o.jsx(O,{startIcon:o.jsx(jr,{}),fullWidth:!0,onClick:n=>{var a;return[(a=e.onClick)==null?void 0:a.call(e,n),t.close()]},color:"error",variant:"contained",children:"Ta bort"})]})]})})]})});var w={},Sr=T;Object.defineProperty(w,"__esModule",{value:!0});var q=w.default=void 0,wr=Sr(N()),Cr=o;q=w.default=(0,wr.default)((0,Cr.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var C={},Er=T;Object.defineProperty(C,"__esModule",{value:!0});var Q=C.default=void 0,Rr=Er(N()),Or=o;Q=C.default=(0,Rr.default)((0,Or.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");const Tr=({editDisplayMode:r="row",state:e,...t})=>{const[n,a]=j.useState(r),s={editDisplayMode:n,setEditDisplayMode:a},[i,c]=Fr("filters",yr,[]),g=nr({state:{columnFilters:i,...e},onColumnFiltersChange:c,onCreatingRowSave:async({row:d,values:h,table:u})=>{var l;await((l=t.onCreate)==null?void 0:l.call(t,{...d.original,...h})),u.setCreatingRow(null),a(r)},onEditingRowSave:async({row:d,values:h,table:u})=>{var l;await((l=t.onUpdate)==null?void 0:l.call(t,{...d.original,...h},d.original)),u.setEditingRow(null),a(r)},displayColumnDefOptions:{"mrt-row-actions":{minSize:120,size:120,maxSize:120,grow:!1}},muiTablePaperProps:{sx:{...p,mx:-1,boxShadow:0}},muiTableContainerProps:{sx:{...p,height:"300px"}},positionActionsColumn:"last",renderRowActions:pr(t,s),renderTopToolbarCustomActions:Ar(),muiTableBodyCellProps:({row:d,column:h,table:u})=>({onDoubleClick:()=>{a("row"),u.setEditingRow(u.getState().editingRow===d?null:d),queueMicrotask(()=>{const l=u.refs.editInputRefs.current[h.id];l==null||l.focus()})},onKeyDown:l=>{var E,R;l.key==="Escape"&&u.setEditingRow(null),l.key==="Enter"&&((R=(E=u.options).onEditingRowSave)==null||R.call(E,{exitEditingMode:()=>u.setEditingRow(null),row:d,table:u,values:d==null?void 0:d._valuesCache}))}}),...t}),{isLoading:W}=g.getState();return W?null:o.jsx(ar,{table:g})},pr=(r,e)=>({row:t,table:n})=>o.jsxs(er,{sx:{display:"flex",gap:"1rem"},children:[o.jsx(A,{title:"Edit",children:o.jsx(y,{onClick:()=>[n.setEditingRow(t),e.setEditDisplayMode("modal")],children:o.jsx(ir,{})})}),o.jsx(br,{id:t.id,onClick:()=>{var a;(a=r.onDelete)==null||a.call(r,t.original),n.setEditingRow(null)},children:a=>o.jsx(A,{title:"Delete",children:o.jsx(y,{color:"error",...tr(a),children:o.jsx(Q,{})})})})]}),Ar=()=>({table:r})=>o.jsx(y,{onClick:()=>{r.setCreatingRow(!0)},children:o.jsx(q,{})});export{Tr as D,Nr as S,br as a,Fr as u};
