var G=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var s=(i,t,e)=>(G(i,t,"read from private field"),e?e.call(i):t.get(i)),n=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},o=(i,t,e,r)=>(G(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var l=(i,t,e)=>(G(i,t,"access private method"),e);import{n as Ct,s as J,o as Ot,p as lt,r as dt,t as St,v as Et,w as Qt,x as ft,y as yt,z as m,m as wt}from"./index-DjobiSuu.js";import{s as It}from"./object-DoOpiTl4.js";var v,a,M,p,E,U,R,L,x,D,Q,w,O,T,I,P,B,X,A,Y,j,Z,_,$,k,tt,z,et,V,st,W,Rt,bt,Ft=(bt=class extends Ct{constructor(t,e){super();n(this,I);n(this,B);n(this,A);n(this,j);n(this,_);n(this,k);n(this,z);n(this,V);n(this,W);n(this,v,void 0);n(this,a,void 0);n(this,M,void 0);n(this,p,void 0);n(this,E,void 0);n(this,U,void 0);n(this,R,void 0);n(this,L,void 0);n(this,x,void 0);n(this,D,void 0);n(this,Q,void 0);n(this,w,void 0);n(this,O,void 0);n(this,T,new Set);this.options=e,o(this,v,t),o(this,R,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,a).addObserver(this),pt(s(this,a),this.options)?l(this,I,P).call(this):this.updateResult(),l(this,_,$).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return it(s(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return it(s(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,k,tt).call(this),l(this,z,et).call(this),s(this,a).removeObserver(this)}setOptions(t,e){const r=this.options,f=s(this,a);if(this.options=s(this,v).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");l(this,V,st).call(this),s(this,a).setOptions(this.options),r._defaulted&&!J(this.options,r)&&s(this,v).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,a),observer:this});const u=this.hasListeners();u&&vt(s(this,a),f,this.options,r)&&l(this,I,P).call(this),this.updateResult(e),u&&(s(this,a)!==f||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&l(this,B,X).call(this);const h=l(this,A,Y).call(this);u&&(s(this,a)!==f||this.options.enabled!==r.enabled||h!==s(this,O))&&l(this,j,Z).call(this,h)}getOptimisticResult(t){const e=s(this,v).getQueryCache().build(s(this,v),t),r=this.createResult(e,t);return xt(this,r)&&(o(this,p,r),o(this,U,this.options),o(this,E,s(this,a).state)),r}getCurrentResult(){return s(this,p)}trackResult(t,e){const r={};return Object.keys(t).forEach(f=>{Object.defineProperty(r,f,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(f),e==null||e(f),t[f])})}),r}trackProp(t){s(this,T).add(t)}getCurrentQuery(){return s(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=s(this,v).defaultQueryOptions(t),r=s(this,v).getQueryCache().build(s(this,v),e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){return l(this,I,P).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,p)))}createResult(t,e){var ct;const r=s(this,a),f=this.options,u=s(this,p),h=s(this,E),d=s(this,U),F=t!==r?t.state:s(this,M),{state:C}=t;let c={...C},at=!1,y;if(e._optimisticResults){const b=this.hasListeners(),q=!b&&pt(t,e),mt=b&&vt(t,r,e,f);(q||mt)&&(c={...c,...Qt(C.data,t.options)}),e._optimisticResults==="isRestoring"&&(c.fetchStatus="idle")}let{error:nt,errorUpdatedAt:ht,status:S}=c;if(e.select&&c.data!==void 0)if(u&&c.data===(h==null?void 0:h.data)&&e.select===s(this,L))y=s(this,x);else try{o(this,L,e.select),y=e.select(c.data),y=ft(u==null?void 0:u.data,y,e),o(this,x,y),o(this,R,null)}catch(b){o(this,R,b)}else y=c.data;if(e.placeholderData!==void 0&&y===void 0&&S==="pending"){let b;if(u!=null&&u.isPlaceholderData&&e.placeholderData===(d==null?void 0:d.placeholderData))b=u.data;else if(b=typeof e.placeholderData=="function"?e.placeholderData((ct=s(this,D))==null?void 0:ct.state.data,s(this,D)):e.placeholderData,e.select&&b!==void 0)try{b=e.select(b),o(this,R,null)}catch(q){o(this,R,q)}b!==void 0&&(S="success",y=ft(u==null?void 0:u.data,b,e),at=!0)}s(this,R)&&(nt=s(this,R),y=s(this,x),ht=Date.now(),S="error");const H=c.fetchStatus==="fetching",N=S==="pending",K=S==="error",ot=N&&H,ut=y!==void 0;return{status:S,fetchStatus:c.fetchStatus,isPending:N,isSuccess:S==="success",isError:K,isInitialLoading:ot,isLoading:ot,data:y,dataUpdatedAt:c.dataUpdatedAt,error:nt,errorUpdatedAt:ht,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>F.dataUpdateCount||c.errorUpdateCount>F.errorUpdateCount,isFetching:H,isRefetching:H&&!N,isLoadingError:K&&!ut,isPaused:c.fetchStatus==="paused",isPlaceholderData:at,isRefetchError:K&&ut,isStale:rt(t,e),refetch:this.refetch}}updateResult(t){const e=s(this,p),r=this.createResult(s(this,a),this.options);if(o(this,E,s(this,a).state),o(this,U,this.options),s(this,E).data!==void 0&&o(this,D,s(this,a)),J(r,e))return;o(this,p,r);const f={},u=()=>{if(!e)return!0;const{notifyOnChangeProps:h}=this.options,d=typeof h=="function"?h():h;if(d==="all"||!d&&!s(this,T).size)return!0;const g=new Set(d??s(this,T));return this.options.throwOnError&&g.add("error"),Object.keys(s(this,p)).some(F=>{const C=F;return s(this,p)[C]!==e[C]&&g.has(C)})};(t==null?void 0:t.listeners)!==!1&&u()&&(f.listeners=!0),l(this,W,Rt).call(this,{...f,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,_,$).call(this)}},v=new WeakMap,a=new WeakMap,M=new WeakMap,p=new WeakMap,E=new WeakMap,U=new WeakMap,R=new WeakMap,L=new WeakMap,x=new WeakMap,D=new WeakMap,Q=new WeakMap,w=new WeakMap,O=new WeakMap,T=new WeakMap,I=new WeakSet,P=function(t){l(this,V,st).call(this);let e=s(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Ot)),e},B=new WeakSet,X=function(){if(l(this,k,tt).call(this),lt||s(this,p).isStale||!dt(this.options.staleTime))return;const e=St(s(this,p).dataUpdatedAt,this.options.staleTime)+1;o(this,Q,setTimeout(()=>{s(this,p).isStale||this.updateResult()},e))},A=new WeakSet,Y=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,a)):this.options.refetchInterval)??!1},j=new WeakSet,Z=function(t){l(this,z,et).call(this),o(this,O,t),!(lt||this.options.enabled===!1||!dt(s(this,O))||s(this,O)===0)&&o(this,w,setInterval(()=>{(this.options.refetchIntervalInBackground||Et.isFocused())&&l(this,I,P).call(this)},s(this,O)))},_=new WeakSet,$=function(){l(this,B,X).call(this),l(this,j,Z).call(this,l(this,A,Y).call(this))},k=new WeakSet,tt=function(){s(this,Q)&&(clearTimeout(s(this,Q)),o(this,Q,void 0))},z=new WeakSet,et=function(){s(this,w)&&(clearInterval(s(this,w)),o(this,w,void 0))},V=new WeakSet,st=function(){const t=s(this,v).getQueryCache().build(s(this,v),this.options);if(t===s(this,a))return;const e=s(this,a);o(this,a,t),o(this,M,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},W=new WeakSet,Rt=function(t){yt.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(s(this,p))}),s(this,v).getQueryCache().notify({query:s(this,a),type:"observerResultsUpdated"})})},bt);function Ut(i,t){return t.enabled!==!1&&i.state.data===void 0&&!(i.state.status==="error"&&t.retryOnMount===!1)}function pt(i,t){return Ut(i,t)||i.state.data!==void 0&&it(i,t,t.refetchOnMount)}function it(i,t,e){if(t.enabled!==!1){const r=typeof e=="function"?e(i):e;return r==="always"||r!==!1&&rt(i,t)}return!1}function vt(i,t,e,r){return(i!==t||r.enabled===!1)&&(!e.suspense||i.state.status!=="error")&&rt(i,e)}function rt(i,t){return t.enabled!==!1&&i.isStaleByTime(t.staleTime)}function xt(i,t){return!J(i.getCurrentResult(),t)}var gt=m.createContext(!1),Dt=()=>m.useContext(gt);gt.Provider;function Tt(){let i=!1;return{clearReset:()=>{i=!1},reset:()=>{i=!0},isReset:()=>i}}var Pt=m.createContext(Tt()),Mt=()=>m.useContext(Pt),Lt=(i,t)=>{(i.suspense||i.throwOnError)&&(t.isReset()||(i.retryOnMount=!1))},Bt=i=>{m.useEffect(()=>{i.clearReset()},[i])},At=({result:i,errorResetBoundary:t,throwOnError:e,query:r})=>i.isError&&!t.isReset()&&!i.isFetching&&r&&It(e,[i.error,r]),jt=i=>{i.suspense&&typeof i.staleTime!="number"&&(i.staleTime=1e3)},_t=(i,t)=>(i==null?void 0:i.suspense)&&t.isPending,kt=(i,t,e)=>t.fetchOptimistic(i).catch(()=>{e.clearReset()});function zt(i,t,e){const r=wt(),f=Dt(),u=Mt(),h=r.defaultQueryOptions(i);h._optimisticResults=f?"isRestoring":"optimistic",jt(h),Lt(h,u),Bt(u);const[d]=m.useState(()=>new t(r,h)),g=d.getOptimisticResult(h);if(m.useSyncExternalStore(m.useCallback(F=>{const C=f?()=>{}:d.subscribe(yt.batchCalls(F));return d.updateResult(),C},[d,f]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),m.useEffect(()=>{d.setOptions(h,{listeners:!1})},[h,d]),_t(h,g))throw kt(h,d,u);if(At({result:g,errorResetBoundary:u,throwOnError:h.throwOnError,query:r.getQueryCache().get(h.queryHash)}))throw g.error;return h.notifyOnChangeProps?g:d.trackResult(g)}function Kt(i,t){return zt(i,Ft)}export{Kt as u};
