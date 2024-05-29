import{x as M,j as t,h as N,i as q,s as S,aR as O,aA as A,k as b,l as n,z as V,r as x,w as T,_ as E,n as F,p as H,aS as w,aT as D,T as _,aO as W}from"./index-BRvqmS3T.js";const G=M(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),J=M(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),K=M(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Q(e){return q("MuiCheckbox",e)}const j=N("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),X=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Y=e=>{const{classes:o,indeterminate:r,color:s,size:l}=e,a={root:["root",r&&"indeterminate",`color${b(s)}`,`size${b(l)}`]},c=H(a,Q,o);return n({},o,c)},Z=S(O,{shouldForwardProp:e=>A(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.indeterminate&&o.indeterminate,o[`size${b(r.size)}`],r.color!=="default"&&o[`color${b(r.color)}`]]}})(({theme:e,ownerState:o})=>n({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:V(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${j.checked}, &.${j.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${j.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ee=t.jsx(J,{}),oe=t.jsx(G,{}),re=t.jsx(K,{}),ie=x.forwardRef(function(o,r){var s,l;const a=T({props:o,name:"MuiCheckbox"}),{checkedIcon:c=ee,color:y="primary",icon:d=oe,indeterminate:i=!1,indeterminateIcon:v=re,inputProps:$,size:h="medium",className:k}=a,z=E(a,X),P=i?v:d,p=i?v:c,C=n({},a,{color:y,indeterminate:i,size:h}),m=Y(C);return t.jsx(Z,n({type:"checkbox",inputProps:n({"data-indeterminate":i},$),icon:x.cloneElement(P,{fontSize:(s=P.props.fontSize)!=null?s:h}),checkedIcon:x.cloneElement(p,{fontSize:(l=p.props.fontSize)!=null?l:h}),ownerState:C,ref:r,className:F(m.root,k)},z,{classes:m}))});function ae(e){return q("MuiFormControlLabel",e)}const f=N("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),te=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],le=e=>{const{classes:o,disabled:r,labelPlacement:s,error:l,required:a}=e,c={root:["root",r&&"disabled",`labelPlacement${b(s)}`,l&&"error",a&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",l&&"error"]};return H(c,ae,o)},se=S("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[{[`& .${f.label}`]:o.label},o.root,o[`labelPlacement${b(r.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>n({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${f.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${f.label}`]:{[`&.${f.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),ne=S("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${f.error}`]:{color:(e.vars||e).palette.error.main}})),de=x.forwardRef(function(o,r){var s,l;const a=T({props:o,name:"MuiFormControlLabel"}),{className:c,componentsProps:y={},control:d,disabled:i,disableTypography:v,label:$,labelPlacement:h="end",required:k,slotProps:z={}}=a,P=E(a,te),p=w(),C=(s=i??d.props.disabled)!=null?s:p==null?void 0:p.disabled,m=k??d.props.required,B={disabled:C,required:m};["checked","name","onChange","value","inputRef"].forEach(g=>{typeof d.props[g]>"u"&&typeof a[g]<"u"&&(B[g]=a[g])});const U=D({props:a,muiFormControl:p,states:["error"]}),I=n({},a,{disabled:C,labelPlacement:h,required:m,error:U.error}),L=le(I),R=(l=z.typography)!=null?l:y.typography;let u=$;return u!=null&&u.type!==_&&!v&&(u=t.jsx(_,n({component:"span"},R,{className:F(L.label,R==null?void 0:R.className),children:u}))),t.jsxs(se,n({className:F(L.root,c),ownerState:I,ref:r},P,{children:[x.cloneElement(d,B),m?t.jsxs(W,{display:"block",children:[u,t.jsxs(ne,{ownerState:I,"aria-hidden":!0,className:L.asterisk,children:[" ","*"]})]}):u]}))});export{ie as C,de as F};
