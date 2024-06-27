import{z as fe,y as he,A as Y,au as So,x as r,W as jo,a6 as Uo,r as p,$ as ge,v as be,a as Te,a7 as ve,bt as F,I as Pe,a3 as ye,Q as Wo,K as we,M as xe,E as N,av as Bo,bu as k,j as g,H as Re,bv as Ce}from"./index-CKGEwxoU.js";function Me(t){return he("MuiTooltip",t)}const u=fe("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Oe=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function _e(t){return Math.round(t*1e5)/1e5}const $e=t=>{const{classes:e,disableInteractive:n,arrow:a,touch:x,placement:R}=t,C={popper:["popper",!n&&"popperInteractive",a&&"popperArrow"],tooltip:["tooltip",a&&"tooltipArrow",x&&"touch",`tooltipPlacement${jo(R.split("-")[0])}`],arrow:["arrow"]};return Re(C,Me,e)},Le=Y(So,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:t,ownerState:e,open:n})=>r({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${u.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${u.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${u.arrow}`]:r({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${u.arrow}`]:r({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ee=Y("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${jo(n.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>r({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:Uo(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${_e(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${u.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},e.isRtl?r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${u.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},e.isRtl?r({marginRight:"14px"},e.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${u.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${u.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Ie=Y("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:Uo(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let A=!1;const Do=new Ce;let w={x:0,y:0};function W(t,e){return(n,...a)=>{e&&e(n,...a),t(n,...a)}}const Ne=p.forwardRef(function(e,n){var a,x,R,C,q,J,Z,oo,eo,to,ro,no,so,po,io,lo,ao,co,uo;const B=ge({props:e,name:"MuiTooltip"}),{arrow:mo=!1,children:D,components:M={},componentsProps:d={},describeChild:zo=!1,disableFocusListener:Vo=!1,disableHoverListener:fo=!1,disableInteractive:Ho=!1,disableTouchListener:Ko=!1,enterDelay:ho=100,enterNextDelay:go=0,enterTouchDelay:Go=700,followCursor:S=!1,id:Qo,leaveDelay:bo=0,leaveTouchDelay:Xo=1500,onClose:To,onOpen:vo,open:Yo,placement:Po="bottom",PopperComponent:j,PopperProps:m={},slotProps:f={},slots:O={},title:h,TransitionComponent:qo=Bo,TransitionProps:Jo}=B,yo=be(B,Oe),c=p.isValidElement(D)?D:g.jsx("span",{children:D}),wo=Te(),Zo=ve(),[b,xo]=p.useState(),[U,oe]=p.useState(null),_=p.useRef(!1),z=Ho||S,Ro=F(),V=F(),$=F(),Co=F(),[ee,Mo]=Pe({controlled:Yo,default:!1,name:"Tooltip",state:"open"});let l=ee;const H=ye(Qo),T=p.useRef(),L=Wo(()=>{T.current!==void 0&&(document.body.style.WebkitUserSelect=T.current,T.current=void 0),Co.clear()});p.useEffect(()=>L,[L]);const Oo=o=>{Do.clear(),A=!0,Mo(!0),vo&&!l&&vo(o)},E=Wo(o=>{Do.start(800+bo,()=>{A=!1}),Mo(!1),To&&l&&To(o),Ro.start(wo.transitions.duration.shortest,()=>{_.current=!1})}),I=o=>{_.current&&o.type!=="touchstart"||(b&&b.removeAttribute("title"),V.clear(),$.clear(),ho||A&&go?V.start(A?go:ho,()=>{Oo(o)}):Oo(o))},K=o=>{V.clear(),$.start(bo,()=>{E(o)})},{isFocusVisibleRef:_o,onBlur:te,onFocus:re,ref:ne}=we(),[,$o]=p.useState(!1),Lo=o=>{te(o),_o.current===!1&&($o(!1),K(o))},Eo=o=>{b||xo(o.currentTarget),re(o),_o.current===!0&&($o(!0),I(o))},Io=o=>{_.current=!0;const s=c.props;s.onTouchStart&&s.onTouchStart(o)},se=o=>{Io(o),$.clear(),Ro.clear(),L(),T.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Co.start(Go,()=>{document.body.style.WebkitUserSelect=T.current,I(o)})},pe=o=>{c.props.onTouchEnd&&c.props.onTouchEnd(o),L(),$.start(Xo,()=>{E(o)})};p.useEffect(()=>{if(!l)return;function o(s){(s.key==="Escape"||s.key==="Esc")&&E(s)}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[E,l]);const ie=xe(c.ref,ne,xo,n);!h&&h!==0&&(l=!1);const G=p.useRef(),le=o=>{const s=c.props;s.onMouseMove&&s.onMouseMove(o),w={x:o.clientX,y:o.clientY},G.current&&G.current.update()},v={},Q=typeof h=="string";zo?(v.title=!l&&Q&&!fo?h:null,v["aria-describedby"]=l?H:null):(v["aria-label"]=Q?h:null,v["aria-labelledby"]=l&&!Q?H:null);const i=r({},v,yo,c.props,{className:N(yo.className,c.props.className),onTouchStart:Io,ref:ie},S?{onMouseMove:le}:{}),P={};Ko||(i.onTouchStart=se,i.onTouchEnd=pe),fo||(i.onMouseOver=W(I,i.onMouseOver),i.onMouseLeave=W(K,i.onMouseLeave),z||(P.onMouseOver=I,P.onMouseLeave=K)),Vo||(i.onFocus=W(Eo,i.onFocus),i.onBlur=W(Lo,i.onBlur),z||(P.onFocus=Eo,P.onBlur=Lo));const ae=p.useMemo(()=>{var o;let s=[{name:"arrow",enabled:!!U,options:{element:U,padding:4}}];return(o=m.popperOptions)!=null&&o.modifiers&&(s=s.concat(m.popperOptions.modifiers)),r({},m.popperOptions,{modifiers:s})},[U,m]),y=r({},B,{isRtl:Zo,arrow:mo,disableInteractive:z,placement:Po,PopperComponentProp:j,touch:_.current}),X=$e(y),Fo=(a=(x=O.popper)!=null?x:M.Popper)!=null?a:Le,No=(R=(C=(q=O.transition)!=null?q:M.Transition)!=null?C:qo)!=null?R:Bo,ko=(J=(Z=O.tooltip)!=null?Z:M.Tooltip)!=null?J:Ee,Ao=(oo=(eo=O.arrow)!=null?eo:M.Arrow)!=null?oo:Ie,ce=k(Fo,r({},m,(to=f.popper)!=null?to:d.popper,{className:N(X.popper,m==null?void 0:m.className,(ro=(no=f.popper)!=null?no:d.popper)==null?void 0:ro.className)}),y),ue=k(No,r({},Jo,(so=f.transition)!=null?so:d.transition),y),de=k(ko,r({},(po=f.tooltip)!=null?po:d.tooltip,{className:N(X.tooltip,(io=(lo=f.tooltip)!=null?lo:d.tooltip)==null?void 0:io.className)}),y),me=k(Ao,r({},(ao=f.arrow)!=null?ao:d.arrow,{className:N(X.arrow,(co=(uo=f.arrow)!=null?uo:d.arrow)==null?void 0:co.className)}),y);return g.jsxs(p.Fragment,{children:[p.cloneElement(c,i),g.jsx(Fo,r({as:j??So,placement:Po,anchorEl:S?{getBoundingClientRect:()=>({top:w.y,left:w.x,right:w.x,bottom:w.y,width:0,height:0})}:b,popperRef:G,open:b?l:!1,id:H,transition:!0},P,ce,{popperOptions:ae,children:({TransitionProps:o})=>g.jsx(No,r({timeout:wo.transitions.duration.shorter},o,ue,{children:g.jsxs(ko,r({},de,{children:[h,mo?g.jsx(Ao,r({},me,{ref:oe})):null]}))}))}))]})});export{Ne as T};
