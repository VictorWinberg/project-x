import{J as P,j as e,Z as k,_ as F,$ as z,E as A,H as I,T as $,a0 as H,f as C,a1 as E,a2 as y,r as q,B,I as u,l as O}from"./index-K1Q76tUH.js";import{f as G,i as V,j as p}from"./useSnackbar-QAsfT7_z.js";import{u as R,F as W,S as J}from"./useQueryParam-Dq1ji5gs.js";import{s as b}from"./FlexGrow-h5A7ieCd.js";import{T as D}from"./Tooltip-Gk82Gi6O.js";const K=P(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),L=({children:a,...r})=>e.jsx(k,{variant:"popover",popupId:`delete-popup-${r.id}`,children:t=>e.jsxs(e.Fragment,{children:[a(t),e.jsx(F,{...z(t),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:e.jsxs(A,{children:[e.jsx(I,{children:e.jsx($,{variant:"body1",children:"Är du säker på att du vill ta bort?"})}),e.jsxs(H,{children:[e.jsx(C,{fullWidth:!0,onClick:t.close,color:"inherit",variant:"outlined",children:"Avbryt"}),e.jsx(C,{startIcon:e.jsx(K,{}),fullWidth:!0,onClick:s=>{var o;return[(o=r.onClick)==null?void 0:o.call(r,s),t.close()]},color:"error",variant:"contained",children:"Ta bort"})]})]})})]})});var h={},Q=y;Object.defineProperty(h,"__esModule",{value:!0});var S=h.default=void 0,U=Q(E()),Z=e;S=h.default=(0,U.default)((0,Z.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var x={},N=y;Object.defineProperty(x,"__esModule",{value:!0});var T=x.default=void 0,X=N(E()),Y=e;T=x.default=(0,X.default)((0,Y.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");const re=({editDisplayMode:a="row",state:r,...t})=>{const[s,o]=R("filters",W,[]),[v,w]=R("search",J,""),[g,c]=q.useState(a),_={editDisplayMode:g,setEditDisplayMode:c},m=G({editDisplayMode:g,initialState:{showGlobalFilter:!!v},state:{columnFilters:s,globalFilter:v,...r},onColumnFiltersChange:o,onGlobalFilterChange:w,onCreatingRowSave:async({row:n,values:d,table:l})=>{var i;await((i=t.onCreate)==null?void 0:i.call(t,{...n.original,...d})),l.setCreatingRow(null),c(a)},onEditingRowSave:async({row:n,values:d,table:l})=>{var i;await((i=t.onUpdate)==null?void 0:i.call(t,{...n.original,...d},n.original)),l.setEditingRow(null),c(a)},displayColumnDefOptions:{"mrt-row-actions":{minSize:120,size:120,maxSize:120,grow:!1}},muiTablePaperProps:{sx:{...b,mx:-1,boxShadow:0}},muiTableContainerProps:{sx:{...b,height:"300px"}},positionActionsColumn:"last",renderRowActions:ee(t,_),renderTopToolbarCustomActions:te(),muiTableBodyCellProps:({row:n,column:d,table:l})=>({onDoubleClick:()=>{c("row"),l.setEditingRow(l.getState().editingRow===n?null:n),queueMicrotask(()=>{const i=l.refs.editInputRefs.current[d.id];i==null||i.focus()})},onKeyDown:i=>{var f,j;i.key==="Escape"&&l.setEditingRow(null),i.key==="Enter"&&((j=(f=l.options).onEditingRowSave)==null||j.call(f,{exitEditingMode:()=>l.setEditingRow(null),row:n,table:l,values:n==null?void 0:n._valuesCache}))}}),...t}),{isLoading:M}=m.getState();return M?null:e.jsx(V,{table:m})},ee=(a,r)=>({row:t,table:s})=>e.jsxs(B,{sx:{display:"flex",gap:"1rem"},children:[e.jsx(D,{title:"Edit",children:e.jsx(u,{onClick:()=>[s.setEditingRow(t),r.setEditDisplayMode("modal")],children:e.jsx(p,{})})}),e.jsx(L,{id:t.id,onClick:()=>{var o;(o=a.onDelete)==null||o.call(a,t.original),s.setEditingRow(null)},children:o=>e.jsx(D,{title:"Delete",children:e.jsx(u,{color:"error",...O(o),children:e.jsx(T,{})})})})]}),te=()=>({table:a})=>e.jsx(u,{onClick:()=>{a.setCreatingRow(!0)},children:e.jsx(S,{})});export{re as D,L as a,S as d};
