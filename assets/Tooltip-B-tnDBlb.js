import{h as fe,i as he,s as Y,Q as Wo,l as r,k as Uo,y as jo,r as p,v as ge,_ as Te,a as be,A as ve,N as F,ae as Pe,F as ye,Z as Bo,aG as we,X as xe,n as N,U as Do,aH as k,j as g,p as Re,aI as Ce}from"./index-BDLZfIoX.js";function Me(t){return he("MuiTooltip",t)}const u=fe("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),_e=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Oe(t){return Math.round(t*1e5)/1e5}const $e=t=>{const{classes:e,disableInteractive:n,arrow:a,touch:x,placement:R}=t,C={popper:["popper",!n&&"popperInteractive",a&&"popperArrow"],tooltip:["tooltip",a&&"tooltipArrow",x&&"touch",`tooltipPlacement${Uo(R.split("-")[0])}`],arrow:["arrow"]};return Re(C,Me,e)},Le=Y(Wo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:t,ownerState:e,open:n})=>r({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${u.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${u.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${u.arrow}`]:r({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${u.arrow}`]:r({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ee=Y("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${Uo(n.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>r({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:jo(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${Oe(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${u.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},e.isRtl?r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${u.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},e.isRtl?r({marginRight:"14px"},e.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${u.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${u.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Ie=Y("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:jo(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let A=!1;const So=new Ce;let w={x:0,y:0};function B(t,e){return(n,...a)=>{e&&e(n,...a),t(n,...a)}}const Ne=p.forwardRef(function(e,n){var a,x,R,C,Z,q,J,oo,eo,to,ro,no,so,po,io,lo,ao,co,uo;const D=ge({props:e,name:"MuiTooltip"}),{arrow:mo=!1,children:S,components:M={},componentsProps:d={},describeChild:Vo=!1,disableFocusListener:zo=!1,disableHoverListener:fo=!1,disableInteractive:Ho=!1,disableTouchListener:Go=!1,enterDelay:ho=100,enterNextDelay:go=0,enterTouchDelay:Xo=700,followCursor:W=!1,id:Ko,leaveDelay:To=0,leaveTouchDelay:Qo=1500,onClose:bo,onOpen:vo,open:Yo,placement:Po="bottom",PopperComponent:U,PopperProps:m={},slotProps:f={},slots:_={},title:h,TransitionComponent:Zo=Do,TransitionProps:qo}=D,yo=Te(D,_e),c=p.isValidElement(S)?S:g.jsx("span",{children:S}),wo=be(),Jo=ve(),[T,xo]=p.useState(),[j,oe]=p.useState(null),O=p.useRef(!1),V=Ho||W,Ro=F(),z=F(),$=F(),Co=F(),[ee,Mo]=Pe({controlled:Yo,default:!1,name:"Tooltip",state:"open"});let l=ee;const H=ye(Ko),b=p.useRef(),L=Bo(()=>{b.current!==void 0&&(document.body.style.WebkitUserSelect=b.current,b.current=void 0),Co.clear()});p.useEffect(()=>L,[L]);const _o=o=>{So.clear(),A=!0,Mo(!0),vo&&!l&&vo(o)},E=Bo(o=>{So.start(800+To,()=>{A=!1}),Mo(!1),bo&&l&&bo(o),Ro.start(wo.transitions.duration.shortest,()=>{O.current=!1})}),I=o=>{O.current&&o.type!=="touchstart"||(T&&T.removeAttribute("title"),z.clear(),$.clear(),ho||A&&go?z.start(A?go:ho,()=>{_o(o)}):_o(o))},G=o=>{z.clear(),$.start(To,()=>{E(o)})},{isFocusVisibleRef:Oo,onBlur:te,onFocus:re,ref:ne}=we(),[,$o]=p.useState(!1),Lo=o=>{te(o),Oo.current===!1&&($o(!1),G(o))},Eo=o=>{T||xo(o.currentTarget),re(o),Oo.current===!0&&($o(!0),I(o))},Io=o=>{O.current=!0;const s=c.props;s.onTouchStart&&s.onTouchStart(o)},se=o=>{Io(o),$.clear(),Ro.clear(),L(),b.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Co.start(Xo,()=>{document.body.style.WebkitUserSelect=b.current,I(o)})},pe=o=>{c.props.onTouchEnd&&c.props.onTouchEnd(o),L(),$.start(Qo,()=>{E(o)})};p.useEffect(()=>{if(!l)return;function o(s){(s.key==="Escape"||s.key==="Esc")&&E(s)}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[E,l]);const ie=xe(c.ref,ne,xo,n);!h&&h!==0&&(l=!1);const X=p.useRef(),le=o=>{const s=c.props;s.onMouseMove&&s.onMouseMove(o),w={x:o.clientX,y:o.clientY},X.current&&X.current.update()},v={},K=typeof h=="string";Vo?(v.title=!l&&K&&!fo?h:null,v["aria-describedby"]=l?H:null):(v["aria-label"]=K?h:null,v["aria-labelledby"]=l&&!K?H:null);const i=r({},v,yo,c.props,{className:N(yo.className,c.props.className),onTouchStart:Io,ref:ie},W?{onMouseMove:le}:{}),P={};Go||(i.onTouchStart=se,i.onTouchEnd=pe),fo||(i.onMouseOver=B(I,i.onMouseOver),i.onMouseLeave=B(G,i.onMouseLeave),V||(P.onMouseOver=I,P.onMouseLeave=G)),zo||(i.onFocus=B(Eo,i.onFocus),i.onBlur=B(Lo,i.onBlur),V||(P.onFocus=Eo,P.onBlur=Lo));const ae=p.useMemo(()=>{var o;let s=[{name:"arrow",enabled:!!j,options:{element:j,padding:4}}];return(o=m.popperOptions)!=null&&o.modifiers&&(s=s.concat(m.popperOptions.modifiers)),r({},m.popperOptions,{modifiers:s})},[j,m]),y=r({},D,{isRtl:Jo,arrow:mo,disableInteractive:V,placement:Po,PopperComponentProp:U,touch:O.current}),Q=$e(y),Fo=(a=(x=_.popper)!=null?x:M.Popper)!=null?a:Le,No=(R=(C=(Z=_.transition)!=null?Z:M.Transition)!=null?C:Zo)!=null?R:Do,ko=(q=(J=_.tooltip)!=null?J:M.Tooltip)!=null?q:Ee,Ao=(oo=(eo=_.arrow)!=null?eo:M.Arrow)!=null?oo:Ie,ce=k(Fo,r({},m,(to=f.popper)!=null?to:d.popper,{className:N(Q.popper,m==null?void 0:m.className,(ro=(no=f.popper)!=null?no:d.popper)==null?void 0:ro.className)}),y),ue=k(No,r({},qo,(so=f.transition)!=null?so:d.transition),y),de=k(ko,r({},(po=f.tooltip)!=null?po:d.tooltip,{className:N(Q.tooltip,(io=(lo=f.tooltip)!=null?lo:d.tooltip)==null?void 0:io.className)}),y),me=k(Ao,r({},(ao=f.arrow)!=null?ao:d.arrow,{className:N(Q.arrow,(co=(uo=f.arrow)!=null?uo:d.arrow)==null?void 0:co.className)}),y);return g.jsxs(p.Fragment,{children:[p.cloneElement(c,i),g.jsx(Fo,r({as:U??Wo,placement:Po,anchorEl:W?{getBoundingClientRect:()=>({top:w.y,left:w.x,right:w.x,bottom:w.y,width:0,height:0})}:T,popperRef:X,open:T?l:!1,id:H,transition:!0},P,ce,{popperOptions:ae,children:({TransitionProps:o})=>g.jsx(No,r({timeout:wo.transitions.duration.shorter},o,ue,{children:g.jsxs(ko,r({},de,{children:[h,mo?g.jsx(Ao,r({},me,{ref:oe})):null]}))}))}))]})});export{Ne as T};
