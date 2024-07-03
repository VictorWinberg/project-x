import{W as fe,V as he,X as q,ah as So,U as r,aa as jo,aj as Uo,r as p,ab as ge,N as be,a as Te,at as ve,bx as N,a0 as Pe,a8 as ye,a5 as Wo,a2 as we,a3 as xe,Y as F,a$ as Bo,by as k,j as g,$ as Re,bz as Ce}from"./index-B-JwtCrw.js";function Me(t){return he("MuiTooltip",t)}const u=fe("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),$e=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Oe(t){return Math.round(t*1e5)/1e5}const _e=t=>{const{classes:e,disableInteractive:n,arrow:l,touch:x,placement:R}=t,C={popper:["popper",!n&&"popperInteractive",l&&"popperArrow"],tooltip:["tooltip",l&&"tooltipArrow",x&&"touch",`tooltipPlacement${jo(R.split("-")[0])}`],arrow:["arrow"]};return Re(C,Me,e)},Le=q(So,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:t,ownerState:e,open:n})=>r({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${u.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${u.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${u.arrow}`]:r({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${u.arrow}`]:r({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ee=q("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${jo(n.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>r({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:Uo(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${Oe(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${u.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},e.isRtl?r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${u.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},e.isRtl?r({marginRight:"14px"},e.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${u.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${u.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Ie=q("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:Uo(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let A=!1;const Do=new Ce;let w={x:0,y:0};function W(t,e){return(n,...l)=>{e&&e(n,...l),t(n,...l)}}const Fe=p.forwardRef(function(e,n){var l,x,R,C,J,Q,Z,oo,eo,to,ro,no,so,po,io,ao,lo,co,uo;const B=ge({props:e,name:"MuiTooltip"}),{arrow:mo=!1,children:D,components:M={},componentsProps:d={},describeChild:Vo=!1,disableFocusListener:zo=!1,disableHoverListener:fo=!1,disableInteractive:Ho=!1,disableTouchListener:Xo=!1,enterDelay:ho=100,enterNextDelay:go=0,enterTouchDelay:Yo=700,followCursor:S=!1,id:Go,leaveDelay:bo=0,leaveTouchDelay:Ko=1500,onClose:To,onOpen:vo,open:qo,placement:Po="bottom",PopperComponent:j,PopperProps:m={},slotProps:f={},slots:$={},title:h,TransitionComponent:Jo=Bo,TransitionProps:Qo}=B,yo=be(B,$e),c=p.isValidElement(D)?D:g.jsx("span",{children:D}),wo=Te(),Zo=ve(),[b,xo]=p.useState(),[U,oe]=p.useState(null),O=p.useRef(!1),V=Ho||S,Ro=N(),z=N(),_=N(),Co=N(),[ee,Mo]=Pe({controlled:qo,default:!1,name:"Tooltip",state:"open"});let a=ee;const H=ye(Go),T=p.useRef(),L=Wo(()=>{T.current!==void 0&&(document.body.style.WebkitUserSelect=T.current,T.current=void 0),Co.clear()});p.useEffect(()=>L,[L]);const $o=o=>{Do.clear(),A=!0,Mo(!0),vo&&!a&&vo(o)},E=Wo(o=>{Do.start(800+bo,()=>{A=!1}),Mo(!1),To&&a&&To(o),Ro.start(wo.transitions.duration.shortest,()=>{O.current=!1})}),I=o=>{O.current&&o.type!=="touchstart"||(b&&b.removeAttribute("title"),z.clear(),_.clear(),ho||A&&go?z.start(A?go:ho,()=>{$o(o)}):$o(o))},X=o=>{z.clear(),_.start(bo,()=>{E(o)})},{isFocusVisibleRef:Oo,onBlur:te,onFocus:re,ref:ne}=we(),[,_o]=p.useState(!1),Lo=o=>{te(o),Oo.current===!1&&(_o(!1),X(o))},Eo=o=>{b||xo(o.currentTarget),re(o),Oo.current===!0&&(_o(!0),I(o))},Io=o=>{O.current=!0;const s=c.props;s.onTouchStart&&s.onTouchStart(o)},se=o=>{Io(o),_.clear(),Ro.clear(),L(),T.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Co.start(Yo,()=>{document.body.style.WebkitUserSelect=T.current,I(o)})},pe=o=>{c.props.onTouchEnd&&c.props.onTouchEnd(o),L(),_.start(Ko,()=>{E(o)})};p.useEffect(()=>{if(!a)return;function o(s){(s.key==="Escape"||s.key==="Esc")&&E(s)}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[E,a]);const ie=xe(c.ref,ne,xo,n);!h&&h!==0&&(a=!1);const Y=p.useRef(),ae=o=>{const s=c.props;s.onMouseMove&&s.onMouseMove(o),w={x:o.clientX,y:o.clientY},Y.current&&Y.current.update()},v={},G=typeof h=="string";Vo?(v.title=!a&&G&&!fo?h:null,v["aria-describedby"]=a?H:null):(v["aria-label"]=G?h:null,v["aria-labelledby"]=a&&!G?H:null);const i=r({},v,yo,c.props,{className:F(yo.className,c.props.className),onTouchStart:Io,ref:ie},S?{onMouseMove:ae}:{}),P={};Xo||(i.onTouchStart=se,i.onTouchEnd=pe),fo||(i.onMouseOver=W(I,i.onMouseOver),i.onMouseLeave=W(X,i.onMouseLeave),V||(P.onMouseOver=I,P.onMouseLeave=X)),zo||(i.onFocus=W(Eo,i.onFocus),i.onBlur=W(Lo,i.onBlur),V||(P.onFocus=Eo,P.onBlur=Lo));const le=p.useMemo(()=>{var o;let s=[{name:"arrow",enabled:!!U,options:{element:U,padding:4}}];return(o=m.popperOptions)!=null&&o.modifiers&&(s=s.concat(m.popperOptions.modifiers)),r({},m.popperOptions,{modifiers:s})},[U,m]),y=r({},B,{isRtl:Zo,arrow:mo,disableInteractive:V,placement:Po,PopperComponentProp:j,touch:O.current}),K=_e(y),No=(l=(x=$.popper)!=null?x:M.Popper)!=null?l:Le,Fo=(R=(C=(J=$.transition)!=null?J:M.Transition)!=null?C:Jo)!=null?R:Bo,ko=(Q=(Z=$.tooltip)!=null?Z:M.Tooltip)!=null?Q:Ee,Ao=(oo=(eo=$.arrow)!=null?eo:M.Arrow)!=null?oo:Ie,ce=k(No,r({},m,(to=f.popper)!=null?to:d.popper,{className:F(K.popper,m==null?void 0:m.className,(ro=(no=f.popper)!=null?no:d.popper)==null?void 0:ro.className)}),y),ue=k(Fo,r({},Qo,(so=f.transition)!=null?so:d.transition),y),de=k(ko,r({},(po=f.tooltip)!=null?po:d.tooltip,{className:F(K.tooltip,(io=(ao=f.tooltip)!=null?ao:d.tooltip)==null?void 0:io.className)}),y),me=k(Ao,r({},(lo=f.arrow)!=null?lo:d.arrow,{className:F(K.arrow,(co=(uo=f.arrow)!=null?uo:d.arrow)==null?void 0:co.className)}),y);return g.jsxs(p.Fragment,{children:[p.cloneElement(c,i),g.jsx(No,r({as:j??So,placement:Po,anchorEl:S?{getBoundingClientRect:()=>({top:w.y,left:w.x,right:w.x,bottom:w.y,width:0,height:0})}:b,popperRef:Y,open:b?a:!1,id:H,transition:!0},P,ce,{popperOptions:le,children:({TransitionProps:o})=>g.jsx(Fo,r({timeout:wo.transitions.duration.shorter},o,ue,{children:g.jsxs(ko,r({},de,{children:[h,mo?g.jsx(Ao,r({},me,{ref:oe})):null]}))}))}))]})});export{Fe as T};
