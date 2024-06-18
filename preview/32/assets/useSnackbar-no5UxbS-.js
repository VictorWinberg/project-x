var Ct=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var f=(t,e,o)=>(Ct(t,e,"read from private field"),o?o.call(t):e.get(t)),U=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},Q=(t,e,o,r)=>(Ct(t,e,"write to private field"),r?r.call(t,o):e.set(t,o),o);var J=(t,e,o)=>(Ct(t,e,"access private method"),o);import{aM as pe,aN as ve,b1 as Dt,b2 as Se,aV as Yt,m as me,y as i,w as Et,v as It,x as _,a3 as Vt,U as qt,t as p,Y as Tt,r as pt,z as k,j as g,E as Rt,n as Gt,K as xe,aC as Qt,b3 as Jt,a5 as Zt,V as ht,a as ge,M as wt,N as ye,b4 as Ce}from"./index-CaUue0cL.js";var A,F,C,O,tt,ft,nt,Mt,_t,we=(_t=class extends pe{constructor(o,r){super();U(this,tt);U(this,nt);U(this,A,void 0);U(this,F,void 0);U(this,C,void 0);U(this,O,void 0);Q(this,A,o),this.setOptions(r),this.bindMethods(),J(this,tt,ft).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(o){var n;const r=this.options;this.options=f(this,A).defaultMutationOptions(o),ve(this.options,r)||f(this,A).getMutationCache().notify({type:"observerOptionsUpdated",mutation:f(this,C),observer:this}),r!=null&&r.mutationKey&&this.options.mutationKey&&Dt(r.mutationKey)!==Dt(this.options.mutationKey)?this.reset():((n=f(this,C))==null?void 0:n.state.status)==="pending"&&f(this,C).setOptions(this.options)}onUnsubscribe(){var o;this.hasListeners()||(o=f(this,C))==null||o.removeObserver(this)}onMutationUpdate(o){J(this,tt,ft).call(this),J(this,nt,Mt).call(this,o)}getCurrentResult(){return f(this,F)}reset(){var o;(o=f(this,C))==null||o.removeObserver(this),Q(this,C,void 0),J(this,tt,ft).call(this),J(this,nt,Mt).call(this)}mutate(o,r){var n;return Q(this,O,r),(n=f(this,C))==null||n.removeObserver(this),Q(this,C,f(this,A).getMutationCache().build(f(this,A),this.options)),f(this,C).addObserver(this),f(this,C).execute(o)}},A=new WeakMap,F=new WeakMap,C=new WeakMap,O=new WeakMap,tt=new WeakSet,ft=function(){var r;const o=((r=f(this,C))==null?void 0:r.state)??Se();Q(this,F,{...o,isPending:o.status==="pending",isSuccess:o.status==="success",isError:o.status==="error",isIdle:o.status==="idle",mutate:this.mutate,reset:this.reset})},nt=new WeakSet,Mt=function(o){Yt.batch(()=>{var r,n,a,b,h,u,x,w;if(f(this,O)&&this.hasListeners()){const m=f(this,F).variables,v=f(this,F).context;(o==null?void 0:o.type)==="success"?((n=(r=f(this,O)).onSuccess)==null||n.call(r,o.data,m,v),(b=(a=f(this,O)).onSettled)==null||b.call(a,o.data,null,m,v)):(o==null?void 0:o.type)==="error"&&((u=(h=f(this,O)).onError)==null||u.call(h,o.error,m,v),(w=(x=f(this,O)).onSettled)==null||w.call(x,void 0,o.error,m,v))}this.listeners.forEach(m=>{m(f(this,F))})})},_t);function Be(t,e){return typeof t=="function"?t(...e):!!t}function Me(){}function eo(t,e){const o=me(),[r]=i.useState(()=>new we(o,t));i.useEffect(()=>{r.setOptions(t)},[r,t]);const n=i.useSyncExternalStore(i.useCallback(b=>r.subscribe(Yt.batchCalls(b)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),a=i.useCallback((b,h)=>{r.mutate(b,h).catch(Me)},[r]);if(n.error&&Be(r.options.throwOnError,[n.error]))throw n.error;return{...n,mutate:a,mutateAsync:n.mutate}}let Z;function te(){if(Z)return Z;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),Z="reverse",t.scrollLeft>0?Z="default":(t.scrollLeft=1,t.scrollLeft===0&&(Z="negative")),document.body.removeChild(t),Z}function Ee(t,e){const o=t.scrollLeft;if(e!=="rtl")return o;switch(te()){case"negative":return t.scrollWidth-t.clientWidth+o;case"reverse":return t.scrollWidth-t.clientWidth-o;default:return o}}function Ie(t){return It("MuiTab",t)}const X=Et("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),Te=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],Re=t=>{const{classes:e,textColor:o,fullWidth:r,wrapped:n,icon:a,label:b,selected:h,disabled:u}=t,x={root:["root",a&&b&&"labelIcon",`textColor${qt(o)}`,r&&"fullWidth",n&&"wrapped",h&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return Rt(x,Ie,e)},ze=_(Vt,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.label&&o.icon&&e.labelIcon,e[`textColor${qt(o.textColor)}`],o.fullWidth&&e.fullWidth,o.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>p({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${X.iconWrapper}`]:p({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${X.selected}`]:{opacity:1},[`&.${X.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${X.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${X.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${X.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${X.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),oo=i.forwardRef(function(e,o){const r=Tt({props:e,name:"MuiTab"}),{className:n,disabled:a=!1,disableFocusRipple:b=!1,fullWidth:h,icon:u,iconPosition:x="top",indicator:w,label:m,onChange:v,onClick:E,onFocus:$,selected:I,selectionFollowsFocus:B,textColor:Y="inherit",value:z,wrapped:vt=!1}=r,V=pt(r,Te),et=p({},r,{disabled:a,disableFocusRipple:b,selected:I,icon:!!u,iconPosition:x,label:!!m,fullWidth:h,textColor:Y,wrapped:vt}),q=Re(et),j=u&&m&&i.isValidElement(u)?i.cloneElement(u,{className:k(q.iconWrapper,u.props.className)}):u,it=P=>{!I&&v&&v(P,z),E&&E(P)},G=P=>{B&&!I&&v&&v(P,z),$&&$(P)};return g.jsxs(ze,p({focusRipple:!b,className:k(q.root,n),ref:o,role:"tab","aria-selected":I,disabled:a,onClick:it,onFocus:G,ownerState:et,tabIndex:I?0:-1},V,{children:[x==="top"||x==="start"?g.jsxs(i.Fragment,{children:[j,m]}):g.jsxs(i.Fragment,{children:[m,j]}),w]}))}),Pe=Gt(g.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),We=Gt(g.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Oe(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function Le(t,e,o,r={},n=()=>{}){const{ease:a=Oe,duration:b=300}=r;let h=null;const u=e[t];let x=!1;const w=()=>{x=!0},m=v=>{if(x){n(new Error("Animation cancelled"));return}h===null&&(h=v);const E=Math.min(1,(v-h)/b);if(e[t]=a(E)*(o-u)+u,E>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(m)};return u===o?(n(new Error("Element already at target position")),w):(requestAnimationFrame(m),w)}const Ne=["onChange"],ke={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Ae(t){const{onChange:e}=t,o=pt(t,Ne),r=i.useRef(),n=i.useRef(null),a=()=>{r.current=n.current.offsetHeight-n.current.clientHeight};return xe(()=>{const b=Qt(()=>{const u=r.current;a(),u!==r.current&&e(r.current)}),h=Jt(n.current);return h.addEventListener("resize",b),()=>{b.clear(),h.removeEventListener("resize",b)}},[e]),i.useEffect(()=>{a(),e(r.current)},[e]),g.jsx("div",p({style:ke,ref:n},o))}function Fe(t){return It("MuiTabScrollButton",t)}const $e=Et("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),je=["className","slots","slotProps","direction","orientation","disabled"],He=t=>{const{classes:e,orientation:o,disabled:r}=t;return Rt({root:["root",o,r&&"disabled"]},Fe,e)},De=_(Vt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.orientation&&e[o.orientation]]}})(({ownerState:t})=>p({width:40,flexShrink:0,opacity:.8,[`&.${$e.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),Ke=i.forwardRef(function(e,o){var r,n;const a=Tt({props:e,name:"MuiTabScrollButton"}),{className:b,slots:h={},slotProps:u={},direction:x}=a,w=pt(a,je),m=Zt(),v=p({isRtl:m},a),E=He(v),$=(r=h.StartScrollButtonIcon)!=null?r:Pe,I=(n=h.EndScrollButtonIcon)!=null?n:We,B=ht({elementType:$,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v}),Y=ht({elementType:I,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v});return g.jsx(De,p({component:"div",className:k(E.root,b),ref:o,role:null,ownerState:v,tabIndex:null},w,{children:x==="left"?g.jsx($,p({},B)):g.jsx(I,p({},Y))}))});function Ue(t){return It("MuiTabs",t)}const Bt=Et("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Xe=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Kt=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,Ut=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,bt=(t,e,o)=>{let r=!1,n=o(t,e);for(;n;){if(n===t.firstChild){if(r)return;r=!0}const a=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||a)n=o(t,n);else{n.focus();return}}},_e=t=>{const{vertical:e,fixed:o,hideScrollbar:r,scrollableX:n,scrollableY:a,centered:b,scrollButtonsHideMobile:h,classes:u}=t;return Rt({root:["root",e&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",n&&"scrollableX",a&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",b&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",h&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]},Ue,u)},Ye=_("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{[`& .${Bt.scrollButtons}`]:e.scrollButtons},{[`& .${Bt.scrollButtons}`]:o.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,o.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>p({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${Bt.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),Ve=_("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.scroller,o.fixed&&e.fixed,o.hideScrollbar&&e.hideScrollbar,o.scrollableX&&e.scrollableX,o.scrollableY&&e.scrollableY]}})(({ownerState:t})=>p({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),qe=_("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.flexContainer,o.vertical&&e.flexContainerVertical,o.centered&&e.centered]}})(({ownerState:t})=>p({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Ge=_("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>p({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Qe=_(Ae)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Xt={},ro=i.forwardRef(function(e,o){const r=Tt({props:e,name:"MuiTabs"}),n=ge(),a=Zt(),{"aria-label":b,"aria-labelledby":h,action:u,centered:x=!1,children:w,className:m,component:v="div",allowScrollButtonsMobile:E=!1,indicatorColor:$="primary",onChange:I,orientation:B="horizontal",ScrollButtonComponent:Y=Ke,scrollButtons:z="auto",selectionFollowsFocus:vt,slots:V={},slotProps:et={},TabIndicatorProps:q={},TabScrollButtonProps:j={},textColor:it="primary",value:G,variant:P="standard",visibleScrollbar:St=!1}=r,ee=pt(r,Xe),T=P==="scrollable",M=B==="vertical",ot=M?"scrollTop":"scrollLeft",at=M?"top":"left",ct=M?"bottom":"right",mt=M?"clientHeight":"clientWidth",rt=M?"height":"width",H=p({},r,{component:v,allowScrollButtonsMobile:E,indicatorColor:$,orientation:B,vertical:M,scrollButtons:z,textColor:it,variant:P,visibleScrollbar:St,fixed:!T,hideScrollbar:T&&!St,scrollableX:T&&!M,scrollableY:T&&M,centered:x&&!T,scrollButtonsHideMobile:!E}),L=_e(H),oe=ht({elementType:V.StartScrollButtonIcon,externalSlotProps:et.startScrollButtonIcon,ownerState:H}),re=ht({elementType:V.EndScrollButtonIcon,externalSlotProps:et.endScrollButtonIcon,ownerState:H}),[zt,se]=i.useState(!1),[D,Pt]=i.useState(Xt),[Wt,le]=i.useState(!1),[Ot,ne]=i.useState(!1),[Lt,ie]=i.useState(!1),[Nt,ae]=i.useState({overflow:"hidden",scrollbarWidth:0}),kt=new Map,W=i.useRef(null),K=i.useRef(null),At=()=>{const s=W.current;let l;if(s){const c=s.getBoundingClientRect();l={clientWidth:s.clientWidth,scrollLeft:s.scrollLeft,scrollTop:s.scrollTop,scrollLeftNormalized:Ee(s,a?"rtl":"ltr"),scrollWidth:s.scrollWidth,top:c.top,bottom:c.bottom,left:c.left,right:c.right}}let d;if(s&&G!==!1){const c=K.current.children;if(c.length>0){const S=c[kt.get(G)];d=S?S.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:d}},st=wt(()=>{const{tabsMeta:s,tabMeta:l}=At();let d=0,c;if(M)c="top",l&&s&&(d=l.top-s.top+s.scrollTop);else if(c=a?"right":"left",l&&s){const y=a?s.scrollLeftNormalized+s.clientWidth-s.scrollWidth:s.scrollLeft;d=(a?-1:1)*(l[c]-s[c]+y)}const S={[c]:d,[rt]:l?l[rt]:0};if(isNaN(D[c])||isNaN(D[rt]))Pt(S);else{const y=Math.abs(D[c]-S[c]),R=Math.abs(D[rt]-S[rt]);(y>=1||R>=1)&&Pt(S)}}),xt=(s,{animation:l=!0}={})=>{l?Le(ot,W.current,s,{duration:n.transitions.duration.standard}):W.current[ot]=s},Ft=s=>{let l=W.current[ot];M?l+=s:(l+=s*(a?-1:1),l*=a&&te()==="reverse"?-1:1),xt(l)},$t=()=>{const s=W.current[mt];let l=0;const d=Array.from(K.current.children);for(let c=0;c<d.length;c+=1){const S=d[c];if(l+S[mt]>s){c===0&&(l=s);break}l+=S[mt]}return l},ce=()=>{Ft(-1*$t())},de=()=>{Ft($t())},ue=i.useCallback(s=>{ae({overflow:null,scrollbarWidth:s})},[]),be=()=>{const s={};s.scrollbarSizeListener=T?g.jsx(Qe,{onChange:ue,className:k(L.scrollableX,L.hideScrollbar)}):null;const d=T&&(z==="auto"&&(Wt||Ot)||z===!0);return s.scrollButtonStart=d?g.jsx(Y,p({slots:{StartScrollButtonIcon:V.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:oe},orientation:B,direction:a?"right":"left",onClick:ce,disabled:!Wt},j,{className:k(L.scrollButtons,j.className)})):null,s.scrollButtonEnd=d?g.jsx(Y,p({slots:{EndScrollButtonIcon:V.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:re},orientation:B,direction:a?"left":"right",onClick:de,disabled:!Ot},j,{className:k(L.scrollButtons,j.className)})):null,s},jt=wt(s=>{const{tabsMeta:l,tabMeta:d}=At();if(!(!d||!l)){if(d[at]<l[at]){const c=l[ot]+(d[at]-l[at]);xt(c,{animation:s})}else if(d[ct]>l[ct]){const c=l[ot]+(d[ct]-l[ct]);xt(c,{animation:s})}}}),dt=wt(()=>{T&&z!==!1&&ie(!Lt)});i.useEffect(()=>{const s=Qt(()=>{W.current&&st()});let l;const d=y=>{y.forEach(R=>{R.removedNodes.forEach(lt=>{var N;(N=l)==null||N.unobserve(lt)}),R.addedNodes.forEach(lt=>{var N;(N=l)==null||N.observe(lt)})}),s(),dt()},c=Jt(W.current);c.addEventListener("resize",s);let S;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(s),Array.from(K.current.children).forEach(y=>{l.observe(y)})),typeof MutationObserver<"u"&&(S=new MutationObserver(d),S.observe(K.current,{childList:!0})),()=>{var y,R;s.clear(),c.removeEventListener("resize",s),(y=S)==null||y.disconnect(),(R=l)==null||R.disconnect()}},[st,dt]),i.useEffect(()=>{const s=Array.from(K.current.children),l=s.length;if(typeof IntersectionObserver<"u"&&l>0&&T&&z!==!1){const d=s[0],c=s[l-1],S={root:W.current,threshold:.99},y=yt=>{le(!yt[0].isIntersecting)},R=new IntersectionObserver(y,S);R.observe(d);const lt=yt=>{ne(!yt[0].isIntersecting)},N=new IntersectionObserver(lt,S);return N.observe(c),()=>{R.disconnect(),N.disconnect()}}},[T,z,Lt,w==null?void 0:w.length]),i.useEffect(()=>{se(!0)},[]),i.useEffect(()=>{st()}),i.useEffect(()=>{jt(Xt!==D)},[jt,D]),i.useImperativeHandle(u,()=>({updateIndicator:st,updateScrollButtons:dt}),[st,dt]);const Ht=g.jsx(Ge,p({},q,{className:k(L.indicator,q.className),ownerState:H,style:p({},D,q.style)}));let ut=0;const fe=i.Children.map(w,s=>{if(!i.isValidElement(s))return null;const l=s.props.value===void 0?ut:s.props.value;kt.set(l,ut);const d=l===G;return ut+=1,i.cloneElement(s,p({fullWidth:P==="fullWidth",indicator:d&&!zt&&Ht,selected:d,selectionFollowsFocus:vt,onChange:I,textColor:it,value:l},ut===1&&G===!1&&!s.props.tabIndex?{tabIndex:0}:{}))}),he=s=>{const l=K.current,d=ye(l).activeElement;if(d.getAttribute("role")!=="tab")return;let S=B==="horizontal"?"ArrowLeft":"ArrowUp",y=B==="horizontal"?"ArrowRight":"ArrowDown";switch(B==="horizontal"&&a&&(S="ArrowRight",y="ArrowLeft"),s.key){case S:s.preventDefault(),bt(l,d,Ut);break;case y:s.preventDefault(),bt(l,d,Kt);break;case"Home":s.preventDefault(),bt(l,null,Kt);break;case"End":s.preventDefault(),bt(l,null,Ut);break}},gt=be();return g.jsxs(Ye,p({className:k(L.root,m),ownerState:H,ref:o,as:v},ee,{children:[gt.scrollButtonStart,gt.scrollbarSizeListener,g.jsxs(Ve,{className:L.scroller,ownerState:H,style:{overflow:Nt.overflow,[M?`margin${a?"Left":"Right"}`:"marginBottom"]:St?void 0:-Nt.scrollbarWidth},ref:W,children:[g.jsx(qe,{"aria-label":b,"aria-labelledby":h,"aria-orientation":B==="vertical"?"vertical":null,className:L.flexContainer,ownerState:H,onKeyDown:he,ref:K,role:"tablist",children:fe}),zt&&Ht]}),gt.scrollButtonEnd]}))}),so=(t,e)=>e.reduce((o,r)=>(r in t&&(o[r]=t[r]),o),{}),lo=()=>{const t=i.useContext(Ce);if(!t)throw new Error("useSnackbar must be used within a SnackbarProvider");return t};export{ro as T,eo as a,oo as b,so as p,Be as s,Bt as t,lo as u};
