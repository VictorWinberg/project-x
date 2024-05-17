import{g as go,a as bo,s as K,U as Ne,_ as n,V as De,b as We,e as i,u as xo,f as wo,w as Ue,W as To,X as V,Y as vo,Z as yo,$ as Ie,a0 as Po,i as Co,k as E,a1 as Ae,a2 as I,j as r,m as Ro,a3 as Lo,R as Mo,C as jo,a4 as ko,T as $o,F as _o,q as Oo,A as So,S as Vo,B as Eo}from"./index-CpoL6C2y.js";function Io(e){return bo("MuiTooltip",e)}const g=go("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Ao=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Bo(e){return Math.round(e*1e5)/1e5}const Fo=e=>{const{classes:o,disableInteractive:s,arrow:a,touch:u,placement:h}=e,m={popper:["popper",!s&&"popperInteractive",a&&"popperArrow"],tooltip:["tooltip",a&&"tooltipArrow",u&&"touch",`tooltipPlacement${De(h.split("-")[0])}`],arrow:["arrow"]};return Ro(m,Io,o)},No=K(Ne,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.popper,!s.disableInteractive&&o.popperInteractive,s.arrow&&o.popperArrow,!s.open&&o.popperClose]}})(({theme:e,ownerState:o,open:s})=>n({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!s&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${g.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${g.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${g.arrow}`]:n({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${g.arrow}`]:n({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Do=K("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.tooltip,s.touch&&o.touch,s.arrow&&o.tooltipArrow,o[`tooltipPlacement${De(s.placement.split("-")[0])}`]]}})(({theme:e,ownerState:o})=>n({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:We(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Bo(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${g.popper}[data-popper-placement*="left"] &`]:n({transformOrigin:"right center"},o.isRtl?n({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):n({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${g.popper}[data-popper-placement*="right"] &`]:n({transformOrigin:"left center"},o.isRtl?n({marginRight:"14px"},o.touch&&{marginRight:"24px"}):n({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${g.popper}[data-popper-placement*="top"] &`]:n({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${g.popper}[data-popper-placement*="bottom"] &`]:n({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})),Wo=K("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,o)=>o.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:We(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let A=!1;const Be=new Lo;let L={x:0,y:0};function B(e,o){return(s,...a)=>{o&&o(s,...a),e(s,...a)}}const Uo=i.forwardRef(function(o,s){var a,u,h,m,p,J,Q,ee,oe,te,re,se,ne,ae,ie,le,pe,ce,ue;const F=xo({props:o,name:"MuiTooltip"}),{arrow:de=!1,children:N,components:M={},componentsProps:b={},describeChild:ze=!1,disableFocusListener:Ze=!1,disableHoverListener:he=!1,disableInteractive:Xe=!1,disableTouchListener:He=!1,enterDelay:me=100,enterNextDelay:fe=0,enterTouchDelay:Ye=700,followCursor:D=!1,id:qe,leaveDelay:ge=0,leaveTouchDelay:Ge=1500,onClose:be,onOpen:xe,open:Ke,placement:we="bottom",PopperComponent:W,PopperProps:x={},slotProps:w={},slots:j={},title:T,TransitionComponent:Je=Ae,TransitionProps:Qe}=F,Te=wo(F,Ao),f=i.isValidElement(N)?N:r.jsx("span",{children:N}),ve=Ue(),eo=To(),[v,ye]=i.useState(),[U,oo]=i.useState(null),k=i.useRef(!1),z=Xe||D,Pe=V(),Z=V(),$=V(),Ce=V(),[to,Re]=vo({controlled:Ke,default:!1,name:"Tooltip",state:"open"});let d=to;const X=yo(qe),y=i.useRef(),_=Ie(()=>{y.current!==void 0&&(document.body.style.WebkitUserSelect=y.current,y.current=void 0),Ce.clear()});i.useEffect(()=>_,[_]);const Le=t=>{Be.clear(),A=!0,Re(!0),xe&&!d&&xe(t)},O=Ie(t=>{Be.start(800+ge,()=>{A=!1}),Re(!1),be&&d&&be(t),Pe.start(ve.transitions.duration.shortest,()=>{k.current=!1})}),S=t=>{k.current&&t.type!=="touchstart"||(v&&v.removeAttribute("title"),Z.clear(),$.clear(),me||A&&fe?Z.start(A?fe:me,()=>{Le(t)}):Le(t))},H=t=>{Z.clear(),$.start(ge,()=>{O(t)})},{isFocusVisibleRef:Me,onBlur:ro,onFocus:so,ref:no}=Po(),[,je]=i.useState(!1),ke=t=>{ro(t),Me.current===!1&&(je(!1),H(t))},$e=t=>{v||ye(t.currentTarget),so(t),Me.current===!0&&(je(!0),S(t))},_e=t=>{k.current=!0;const l=f.props;l.onTouchStart&&l.onTouchStart(t)},ao=t=>{_e(t),$.clear(),Pe.clear(),_(),y.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ce.start(Ye,()=>{document.body.style.WebkitUserSelect=y.current,S(t)})},io=t=>{f.props.onTouchEnd&&f.props.onTouchEnd(t),_(),$.start(Ge,()=>{O(t)})};i.useEffect(()=>{if(!d)return;function t(l){(l.key==="Escape"||l.key==="Esc")&&O(l)}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[O,d]);const lo=Co(f.ref,no,ye,s);!T&&T!==0&&(d=!1);const Y=i.useRef(),po=t=>{const l=f.props;l.onMouseMove&&l.onMouseMove(t),L={x:t.clientX,y:t.clientY},Y.current&&Y.current.update()},P={},q=typeof T=="string";ze?(P.title=!d&&q&&!he?T:null,P["aria-describedby"]=d?X:null):(P["aria-label"]=q?T:null,P["aria-labelledby"]=d&&!q?X:null);const c=n({},P,Te,f.props,{className:E(Te.className,f.props.className),onTouchStart:_e,ref:lo},D?{onMouseMove:po}:{}),C={};He||(c.onTouchStart=ao,c.onTouchEnd=io),he||(c.onMouseOver=B(S,c.onMouseOver),c.onMouseLeave=B(H,c.onMouseLeave),z||(C.onMouseOver=S,C.onMouseLeave=H)),Ze||(c.onFocus=B($e,c.onFocus),c.onBlur=B(ke,c.onBlur),z||(C.onFocus=$e,C.onBlur=ke));const co=i.useMemo(()=>{var t;let l=[{name:"arrow",enabled:!!U,options:{element:U,padding:4}}];return(t=x.popperOptions)!=null&&t.modifiers&&(l=l.concat(x.popperOptions.modifiers)),n({},x.popperOptions,{modifiers:l})},[U,x]),R=n({},F,{isRtl:eo,arrow:de,disableInteractive:z,placement:we,PopperComponentProp:W,touch:k.current}),G=Fo(R),Oe=(a=(u=j.popper)!=null?u:M.Popper)!=null?a:No,Se=(h=(m=(p=j.transition)!=null?p:M.Transition)!=null?m:Je)!=null?h:Ae,Ve=(J=(Q=j.tooltip)!=null?Q:M.Tooltip)!=null?J:Do,Ee=(ee=(oe=j.arrow)!=null?oe:M.Arrow)!=null?ee:Wo,uo=I(Oe,n({},x,(te=w.popper)!=null?te:b.popper,{className:E(G.popper,x==null?void 0:x.className,(re=(se=w.popper)!=null?se:b.popper)==null?void 0:re.className)}),R),ho=I(Se,n({},Qe,(ne=w.transition)!=null?ne:b.transition),R),mo=I(Ve,n({},(ae=w.tooltip)!=null?ae:b.tooltip,{className:E(G.tooltip,(ie=(le=w.tooltip)!=null?le:b.tooltip)==null?void 0:ie.className)}),R),fo=I(Ee,n({},(pe=w.arrow)!=null?pe:b.arrow,{className:E(G.arrow,(ce=(ue=w.arrow)!=null?ue:b.arrow)==null?void 0:ce.className)}),R);return r.jsxs(i.Fragment,{children:[i.cloneElement(f,c),r.jsx(Oe,n({as:W??Ne,placement:we,anchorEl:D?{getBoundingClientRect:()=>({top:L.y,left:L.x,right:L.x,bottom:L.y,width:0,height:0})}:v,popperRef:Y,open:v?d:!1,id:X,transition:!0},C,uo,{popperOptions:co,children:({TransitionProps:t})=>r.jsx(Se,n({timeout:ve.transitions.duration.shorter},t,ho,{children:r.jsxs(Ve,n({},mo,{children:[T,de?r.jsx(Ee,n({},fo,{ref:oo})):null]}))}))}))]})}),Zo=Mo.forwardRef(({title:e,children:o,...s},a)=>r.jsxs(jo,{ref:a,sx:{border:"1px solid",borderColor:"divider",":hover":{boxShadow:"0 2px 14px 0 rgb(32 40 45 / 8%)"}},...s,children:[e&&r.jsx(ko,{sx:{p:2.5},title:r.jsx($o,{variant:"h5",children:e})}),e&&r.jsx(_o,{}),r.jsx(Oo,{sx:{p:2.5},children:o})]})),Fe=({color:e,outline:o,size:s,sx:a,...u})=>{const h=e&&!o&&{color:"background.paper",bgcolor:`${e}.main`},m=o&&{color:e?`${e}.main`:"primary.main",bgcolor:"background.paper",border:"2px solid",borderColor:e?`${e}.main`:"primary.main"};let p={};switch(s){case"badge":p={width:28,height:28};break;case"xs":p={width:34,height:34};break;case"sm":p={width:40,height:40};break;case"lg":p={width:72,height:72};break;case"xl":p={width:82,height:82};break;case"md":p={width:60,height:60};break;default:p={}}return r.jsx(So,{sx:{...h,...m,...p,...a},...u})},Xo=({link:e,title:o,icon:s})=>{const a=Ue(),u=i.forwardRef((h,m)=>r.jsx(Vo,{ref:m,...h,href:e,target:"_blank"}));return r.jsx(Uo,{title:o||"Reference",placement:"left",children:r.jsxs(Eo,{disableRipple:!0,children:[!s&&r.jsx(Fe,{component:u,"aria-label":"redirect pages",alt:"MUI Logo",size:"badge",outline:!0,children:r.jsxs("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsxs("g",{clipPath:"url(#clip0)",children:[r.jsx("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:a.palette.primary.dark}),r.jsx("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:a.palette.primary.main}),r.jsx("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:a.palette.primary.dark}),r.jsx("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:a.palette.primary.main})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0",children:r.jsx("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),s&&r.jsx(Fe,{component:u,size:"badge",color:"primary",outline:!0,"aria-label":"material-ui",children:s})]})})};export{Xo as C,Zo as S};
