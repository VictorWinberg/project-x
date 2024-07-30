import{K as S,j as n,f as q,r as f,B as I,W as C,p as _,t as K,X as L,Y as Q,G as h,n as k,S as P,o as y,Z as U,_ as H}from"./index-W-oHtgo0.js";import{u as T,C as b}from"./index.esm-CwwIOZu5.js";import{F as B,s as N}from"./FlexGrow-CH3D5opZ.js";import{v as O,p as R,e as F,A as M,u as x,c as w}from"./useSnackbar-DwOOvmOR.js";const z=S(n.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload"),A=S(n.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload"),V=({onChange:e,children:t,...r})=>{const i=a=>{var d;const p=(d=a.target.files)==null?void 0:d[0];p&&(e==null||e(p))};return n.jsxs(q,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:n.jsx(A,{}),...r,children:[t,n.jsx("input",{type:"file",style:{display:"none"},onChange:i})]})};function $(){const[e,t]=f.useState([window.innerWidth,window.innerHeight]);return f.useEffect(()=>{const r=G(()=>{t([window.innerWidth,window.innerHeight])},200);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e}const G=(e,t)=>{let r;return(...i)=>{let a;return clearTimeout(r),r=setTimeout(()=>{a=e(...i)},t),a}},Y=["application/pdf","application/json","image/*","text/*","video/*","audio/*"],X=({file:e})=>{const t=$(),r=f.useRef(null),[i,a]=f.useState();if(f.useEffect(()=>{e&&Y.some(u=>e.type.match(u))?a(URL.createObjectURL(e)):a(void 0)},[e]),!e||!i)return null;const p=()=>{if(r.current&&r.current.contentWindow){const u=r.current,v=r.current.contentWindow.document,l=u.clientHeight,D=u.clientWidth,s=v.documentElement.scrollHeight,j=v.documentElement.scrollWidth,c=D/j,o=l/s,m=Math.min(c,o);u.style.transform=`scale(${m})`,u.style.transformOrigin="top left",u.style.width=`${j}px`,u.style.height=`${s}px`}},d=()=>e.type.startsWith("image/")?n.jsx("img",{src:i,alt:"Preview",style:{width:"100%",height:"100%",maxHeight:"33vh",objectFit:"cover"}}):n.jsx("iframe",{ref:r,src:i,title:"Preview",onLoad:p,style:{width:"100%",height:"33vh",border:"none"}},`${t}`);return n.jsx(I,{sx:{mx:-1,overflow:"hidden"},children:n.jsx(I,{sx:{width:"100%",height:"33vh",px:1},children:d()},i)})},Z=async e=>await C("document_references",e),W=async e=>{O(e,["documentId","entityType","entityId"]),await _("document_references",R(e,["documentId","entityType","entityId"]))},J=async({row:e,where:t})=>{await g(t),await W(e)},g=async e=>{await K("document_references",R(e,["documentId","entityType","entityId"]))},ee=()=>F({queryKey:["documents"],queryFn:L}),se=e=>F({queryKey:["documents",e],queryFn:()=>Q(e),enabled:!!e}),ce=e=>F({queryKey:["document_references",e],queryFn:()=>Z(e),enabled:e&&Object.keys(e).length>0}),ue=({onSubmit:e=()=>{},onChange:t,formProps:r,enableExistingDocuments:i,children:a,...p})=>{const{data:d=[]}=ee(),{control:u,handleSubmit:E,watch:v,setValue:l,formState:{errors:D}}=T(r),s=v();f.useEffect(()=>{t==null||t(s)},[t,s]);const j=c=>{l("documentName",c.name),l("content",c)};return f.useEffect(()=>{if(s.documentId){const c=d.find(o=>o.documentId===s.documentId);c&&(l("documentName",c.documentName),l("content",c.content))}else l("documentName",""),l("content",void 0)},[s.documentId,l,d]),n.jsx(B,{...p,children:n.jsxs("form",{onSubmit:E(e),style:{...N},children:[n.jsxs(h,{container:!0,spacing:2,children:[n.jsx(h,{item:!0,xs:12,sm:6,children:n.jsx(b,{control:u,name:"documentName",rules:{required:!0},defaultValue:"",render:({field:c,fieldState:o})=>n.jsx(k,{fullWidth:!0,label:"Dokumentnamn",type:"text",margin:"none",...c,error:!!o.error})})}),n.jsx(h,{item:!0,xs:12,sm:6,children:n.jsx(b,{control:u,name:"content",rules:{required:!0},render:({field:c})=>{var o,m;return n.jsx(k,{fullWidth:!0,label:"Dokument",type:"text",margin:"none",value:((o=c.value)==null?void 0:o.name)||"",disabled:!0,error:!!D.content,InputProps:{endAdornment:(m=s.content)==null?void 0:m.type}})}})}),i&&n.jsx(h,{item:!0,xs:12,children:n.jsx(b,{name:"documentId",control:u,render:({field:c})=>n.jsx(M,{options:d,getOptionKey:o=>o.documentId,getOptionLabel:o=>o.documentName,value:d.find(o=>o.documentId===c.value)||null,onChange:(o,m)=>c.onChange(m?m.documentId:void 0),renderInput:o=>n.jsx(k,{...o,label:"Existerande dokument",variant:"outlined",fullWidth:!0})})})}),n.jsx(h,{item:!0,xs:12,children:n.jsx(X,{file:s.content})}),n.jsx(h,{item:!0,xs:12,children:n.jsxs(P,{spacing:2,direction:"row",children:[n.jsx(V,{onChange:j,children:s.content?"Ersätt dokument":"Välj dokument"}),n.jsx(q,{startIcon:n.jsx(z,{}),variant:"contained",href:s.content?URL.createObjectURL(s.content):"#",download:s.documentName,disabled:!s.content,children:"Ladda ner"})]})})]}),a]})})},ie=()=>{const e=y(),{showSnackbar:t}=x();return w({mutationFn:U,onSuccess:()=>{e.invalidateQueries({queryKey:["documents"]}),t("Dokumentet sparat!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle sparas.","error")}})},ae=()=>{const e=y(),{showSnackbar:t}=x();return w({mutationFn:r=>Promise.all([H(r),g(r)]),onSuccess:()=>{e.invalidateQueries({queryKey:["documents"]}),e.invalidateQueries({queryKey:["document_references"]}),t("Dokumentet borttaget!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},de=()=>{const e=y(),{showSnackbar:t}=x();return w({mutationFn:W,onSuccess:()=>{e.invalidateQueries({queryKey:["document_references"]}),t("Dokument skapat!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle skapas.","error")}})},le=()=>{const e=y(),{showSnackbar:t}=x();return w({mutationFn:J,onSuccess:()=>{e.invalidateQueries({queryKey:["document_references"]}),t("Dokument uppdaterat!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},me=()=>{const e=y(),{showSnackbar:t}=x();return w({mutationFn:g,onSuccess:()=>{e.invalidateQueries({queryKey:["document_references"]}),t("Dokument borttaget!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle tas bort.","error")}})};export{ue as D,ce as a,ie as b,de as c,me as d,ae as e,se as f,le as g,ee as u};
