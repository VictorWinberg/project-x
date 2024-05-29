import{at as At,r as d}from"./index-Jf9Z7E0y.js";var jt=function(e){return Ot(e)&&!$t(e)};function Ot(r){return!!r&&typeof r=="object"}function $t(r){var e=Object.prototype.toString.call(r);return e==="[object RegExp]"||e==="[object Date]"||Ct(r)}var It=typeof Symbol=="function"&&Symbol.for,wt=It?Symbol.for("react.element"):60103;function Ct(r){return r.$$typeof===wt}function Ft(r){return Array.isArray(r)?[]:{}}function pr(r,e){return e.clone!==!1&&e.isMergeableObject(r)?ar(Ft(r),r,e):r}function Mt(r,e,t){return r.concat(e).map(function(n){return pr(n,t)})}function Rt(r,e,t){var n={};return t.isMergeableObject(r)&&Object.keys(r).forEach(function(i){n[i]=pr(r[i],t)}),Object.keys(e).forEach(function(i){!t.isMergeableObject(e[i])||!r[i]?n[i]=pr(e[i],t):n[i]=ar(r[i],e[i],t)}),n}function ar(r,e,t){t=t||{},t.arrayMerge=t.arrayMerge||Mt,t.isMergeableObject=t.isMergeableObject||jt;var n=Array.isArray(e),i=Array.isArray(r),o=n===i;return o?n?t.arrayMerge(r,e,t):Rt(r,e,t):pr(e,t)}ar.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,i){return ar(n,i,t)},{})};var Cr=ar,Pe=typeof global=="object"&&global&&global.Object===Object&&global,Pt=typeof self=="object"&&self&&self.Object===Object&&self,R=Pe||Pt||Function("return this")(),V=R.Symbol,Le=Object.prototype,Lt=Le.hasOwnProperty,Dt=Le.toString,er=V?V.toStringTag:void 0;function xt(r){var e=Lt.call(r,er),t=r[er];try{r[er]=void 0;var n=!0}catch{}var i=Dt.call(r);return n&&(e?r[er]=t:delete r[er]),i}var Nt=Object.prototype,Ut=Nt.toString;function Vt(r){return Ut.call(r)}var Bt="[object Null]",Gt="[object Undefined]",oe=V?V.toStringTag:void 0;function k(r){return r==null?r===void 0?Gt:Bt:oe&&oe in Object(r)?xt(r):Vt(r)}function De(r,e){return function(t){return r(e(t))}}var xr=De(Object.getPrototypeOf,Object);function W(r){return r!=null&&typeof r=="object"}var zt="[object Object]",Ht=Function.prototype,Kt=Object.prototype,xe=Ht.toString,kt=Kt.hasOwnProperty,Wt=xe.call(Object);function ue(r){if(!W(r)||k(r)!=zt)return!1;var e=xr(r);if(e===null)return!0;var t=kt.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&xe.call(t)==Wt}function Yt(){this.__data__=[],this.size=0}function Ne(r,e){return r===e||r!==r&&e!==e}function vr(r,e){for(var t=r.length;t--;)if(Ne(r[t][0],e))return t;return-1}var qt=Array.prototype,Xt=qt.splice;function Zt(r){var e=this.__data__,t=vr(e,r);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():Xt.call(e,t,1),--this.size,!0}function Jt(r){var e=this.__data__,t=vr(e,r);return t<0?void 0:e[t][1]}function Qt(r){return vr(this.__data__,r)>-1}function rn(r,e){var t=this.__data__,n=vr(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this}function x(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}x.prototype.clear=Yt;x.prototype.delete=Zt;x.prototype.get=Jt;x.prototype.has=Qt;x.prototype.set=rn;function en(){this.__data__=new x,this.size=0}function tn(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t}function nn(r){return this.__data__.get(r)}function an(r){return this.__data__.has(r)}function ur(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}var on="[object AsyncFunction]",un="[object Function]",cn="[object GeneratorFunction]",sn="[object Proxy]";function Ue(r){if(!ur(r))return!1;var e=k(r);return e==un||e==cn||e==on||e==sn}var Or=R["__core-js_shared__"],ce=function(){var r=/[^.]+$/.exec(Or&&Or.keys&&Or.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function ln(r){return!!ce&&ce in r}var fn=Function.prototype,dn=fn.toString;function Y(r){if(r!=null){try{return dn.call(r)}catch{}try{return r+""}catch{}}return""}var pn=/[\\^$.*+?()[\]{}|]/g,vn=/^\[object .+?Constructor\]$/,hn=Function.prototype,yn=Object.prototype,gn=hn.toString,bn=yn.hasOwnProperty,Tn=RegExp("^"+gn.call(bn).replace(pn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function mn(r){if(!ur(r)||ln(r))return!1;var e=Ue(r)?Tn:vn;return e.test(Y(r))}function En(r,e){return r==null?void 0:r[e]}function q(r,e){var t=En(r,e);return mn(t)?t:void 0}var ir=q(R,"Map"),or=q(Object,"create");function Sn(){this.__data__=or?or(null):{},this.size=0}function _n(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e}var An="__lodash_hash_undefined__",jn=Object.prototype,On=jn.hasOwnProperty;function $n(r){var e=this.__data__;if(or){var t=e[r];return t===An?void 0:t}return On.call(e,r)?e[r]:void 0}var In=Object.prototype,wn=In.hasOwnProperty;function Cn(r){var e=this.__data__;return or?e[r]!==void 0:wn.call(e,r)}var Fn="__lodash_hash_undefined__";function Mn(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=or&&e===void 0?Fn:e,this}function K(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}K.prototype.clear=Sn;K.prototype.delete=_n;K.prototype.get=$n;K.prototype.has=Cn;K.prototype.set=Mn;function Rn(){this.size=0,this.__data__={hash:new K,map:new(ir||x),string:new K}}function Pn(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null}function hr(r,e){var t=r.__data__;return Pn(e)?t[typeof e=="string"?"string":"hash"]:t.map}function Ln(r){var e=hr(this,r).delete(r);return this.size-=e?1:0,e}function Dn(r){return hr(this,r).get(r)}function xn(r){return hr(this,r).has(r)}function Nn(r,e){var t=hr(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this}function B(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}B.prototype.clear=Rn;B.prototype.delete=Ln;B.prototype.get=Dn;B.prototype.has=xn;B.prototype.set=Nn;var Un=200;function Vn(r,e){var t=this.__data__;if(t instanceof x){var n=t.__data__;if(!ir||n.length<Un-1)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new B(n)}return t.set(r,e),this.size=t.size,this}function Q(r){var e=this.__data__=new x(r);this.size=e.size}Q.prototype.clear=en;Q.prototype.delete=tn;Q.prototype.get=nn;Q.prototype.has=an;Q.prototype.set=Vn;function Bn(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}var se=function(){try{var r=q(Object,"defineProperty");return r({},"",{}),r}catch{}}();function Ve(r,e,t){e=="__proto__"&&se?se(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t}var Gn=Object.prototype,zn=Gn.hasOwnProperty;function Be(r,e,t){var n=r[e];(!(zn.call(r,e)&&Ne(n,t))||t===void 0&&!(e in r))&&Ve(r,e,t)}function yr(r,e,t,n){var i=!t;t||(t={});for(var o=-1,c=e.length;++o<c;){var v=e[o],E=void 0;E===void 0&&(E=r[v]),i?Ve(t,v,E):Be(t,v,E)}return t}function Hn(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}var Kn="[object Arguments]";function le(r){return W(r)&&k(r)==Kn}var Ge=Object.prototype,kn=Ge.hasOwnProperty,Wn=Ge.propertyIsEnumerable,Yn=le(function(){return arguments}())?le:function(r){return W(r)&&kn.call(r,"callee")&&!Wn.call(r,"callee")},cr=Array.isArray;function qn(){return!1}var ze=typeof exports=="object"&&exports&&!exports.nodeType&&exports,fe=ze&&typeof module=="object"&&module&&!module.nodeType&&module,Xn=fe&&fe.exports===ze,de=Xn?R.Buffer:void 0,Zn=de?de.isBuffer:void 0,He=Zn||qn,Jn=9007199254740991,Qn=/^(?:0|[1-9]\d*)$/;function ra(r,e){var t=typeof r;return e=e??Jn,!!e&&(t=="number"||t!="symbol"&&Qn.test(r))&&r>-1&&r%1==0&&r<e}var ea=9007199254740991;function Ke(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ea}var ta="[object Arguments]",na="[object Array]",aa="[object Boolean]",ia="[object Date]",oa="[object Error]",ua="[object Function]",ca="[object Map]",sa="[object Number]",la="[object Object]",fa="[object RegExp]",da="[object Set]",pa="[object String]",va="[object WeakMap]",ha="[object ArrayBuffer]",ya="[object DataView]",ga="[object Float32Array]",ba="[object Float64Array]",Ta="[object Int8Array]",ma="[object Int16Array]",Ea="[object Int32Array]",Sa="[object Uint8Array]",_a="[object Uint8ClampedArray]",Aa="[object Uint16Array]",ja="[object Uint32Array]",m={};m[ga]=m[ba]=m[Ta]=m[ma]=m[Ea]=m[Sa]=m[_a]=m[Aa]=m[ja]=!0;m[ta]=m[na]=m[ha]=m[aa]=m[ya]=m[ia]=m[oa]=m[ua]=m[ca]=m[sa]=m[la]=m[fa]=m[da]=m[pa]=m[va]=!1;function Oa(r){return W(r)&&Ke(r.length)&&!!m[k(r)]}function Nr(r){return function(e){return r(e)}}var ke=typeof exports=="object"&&exports&&!exports.nodeType&&exports,tr=ke&&typeof module=="object"&&module&&!module.nodeType&&module,$a=tr&&tr.exports===ke,$r=$a&&Pe.process,J=function(){try{var r=tr&&tr.require&&tr.require("util").types;return r||$r&&$r.binding&&$r.binding("util")}catch{}}(),pe=J&&J.isTypedArray,Ia=pe?Nr(pe):Oa,wa=Object.prototype,Ca=wa.hasOwnProperty;function We(r,e){var t=cr(r),n=!t&&Yn(r),i=!t&&!n&&He(r),o=!t&&!n&&!i&&Ia(r),c=t||n||i||o,v=c?Hn(r.length,String):[],E=v.length;for(var b in r)(e||Ca.call(r,b))&&!(c&&(b=="length"||i&&(b=="offset"||b=="parent")||o&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||ra(b,E)))&&v.push(b);return v}var Fa=Object.prototype;function Ur(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||Fa;return r===t}var Ma=De(Object.keys,Object),Ra=Object.prototype,Pa=Ra.hasOwnProperty;function La(r){if(!Ur(r))return Ma(r);var e=[];for(var t in Object(r))Pa.call(r,t)&&t!="constructor"&&e.push(t);return e}function Ye(r){return r!=null&&Ke(r.length)&&!Ue(r)}function Vr(r){return Ye(r)?We(r):La(r)}function Da(r,e){return r&&yr(e,Vr(e),r)}function xa(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var Na=Object.prototype,Ua=Na.hasOwnProperty;function Va(r){if(!ur(r))return xa(r);var e=Ur(r),t=[];for(var n in r)n=="constructor"&&(e||!Ua.call(r,n))||t.push(n);return t}function Br(r){return Ye(r)?We(r,!0):Va(r)}function Ba(r,e){return r&&yr(e,Br(e),r)}var qe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ve=qe&&typeof module=="object"&&module&&!module.nodeType&&module,Ga=ve&&ve.exports===qe,he=Ga?R.Buffer:void 0,ye=he?he.allocUnsafe:void 0;function za(r,e){if(e)return r.slice();var t=r.length,n=ye?ye(t):new r.constructor(t);return r.copy(n),n}function Xe(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e}function Ha(r,e){for(var t=-1,n=r==null?0:r.length,i=0,o=[];++t<n;){var c=r[t];e(c,t,r)&&(o[i++]=c)}return o}function Ze(){return[]}var Ka=Object.prototype,ka=Ka.propertyIsEnumerable,ge=Object.getOwnPropertySymbols,Gr=ge?function(r){return r==null?[]:(r=Object(r),Ha(ge(r),function(e){return ka.call(r,e)}))}:Ze;function Wa(r,e){return yr(r,Gr(r),e)}function Je(r,e){for(var t=-1,n=e.length,i=r.length;++t<n;)r[i+t]=e[t];return r}var Ya=Object.getOwnPropertySymbols,Qe=Ya?function(r){for(var e=[];r;)Je(e,Gr(r)),r=xr(r);return e}:Ze;function qa(r,e){return yr(r,Qe(r),e)}function rt(r,e,t){var n=e(r);return cr(r)?n:Je(n,t(r))}function Xa(r){return rt(r,Vr,Gr)}function Za(r){return rt(r,Br,Qe)}var Fr=q(R,"DataView"),Mr=q(R,"Promise"),Rr=q(R,"Set"),Pr=q(R,"WeakMap"),be="[object Map]",Ja="[object Object]",Te="[object Promise]",me="[object Set]",Ee="[object WeakMap]",Se="[object DataView]",Qa=Y(Fr),ri=Y(ir),ei=Y(Mr),ti=Y(Rr),ni=Y(Pr),D=k;(Fr&&D(new Fr(new ArrayBuffer(1)))!=Se||ir&&D(new ir)!=be||Mr&&D(Mr.resolve())!=Te||Rr&&D(new Rr)!=me||Pr&&D(new Pr)!=Ee)&&(D=function(r){var e=k(r),t=e==Ja?r.constructor:void 0,n=t?Y(t):"";if(n)switch(n){case Qa:return Se;case ri:return be;case ei:return Te;case ti:return me;case ni:return Ee}return e});var ai=Object.prototype,ii=ai.hasOwnProperty;function oi(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&ii.call(r,"index")&&(t.index=r.index,t.input=r.input),t}var _e=R.Uint8Array;function zr(r){var e=new r.constructor(r.byteLength);return new _e(e).set(new _e(r)),e}function ui(r,e){var t=e?zr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var ci=/\w*$/;function si(r){var e=new r.constructor(r.source,ci.exec(r));return e.lastIndex=r.lastIndex,e}var Ae=V?V.prototype:void 0,je=Ae?Ae.valueOf:void 0;function li(r){return je?Object(je.call(r)):{}}function fi(r,e){var t=e?zr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var di="[object Boolean]",pi="[object Date]",vi="[object Map]",hi="[object Number]",yi="[object RegExp]",gi="[object Set]",bi="[object String]",Ti="[object Symbol]",mi="[object ArrayBuffer]",Ei="[object DataView]",Si="[object Float32Array]",_i="[object Float64Array]",Ai="[object Int8Array]",ji="[object Int16Array]",Oi="[object Int32Array]",$i="[object Uint8Array]",Ii="[object Uint8ClampedArray]",wi="[object Uint16Array]",Ci="[object Uint32Array]";function Fi(r,e,t){var n=r.constructor;switch(e){case mi:return zr(r);case di:case pi:return new n(+r);case Ei:return ui(r,t);case Si:case _i:case Ai:case ji:case Oi:case $i:case Ii:case wi:case Ci:return fi(r,t);case vi:return new n;case hi:case bi:return new n(r);case yi:return si(r);case gi:return new n;case Ti:return li(r)}}var Oe=Object.create,Mi=function(){function r(){}return function(e){if(!ur(e))return{};if(Oe)return Oe(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}();function Ri(r){return typeof r.constructor=="function"&&!Ur(r)?Mi(xr(r)):{}}var Pi="[object Map]";function Li(r){return W(r)&&D(r)==Pi}var $e=J&&J.isMap,Di=$e?Nr($e):Li,xi="[object Set]";function Ni(r){return W(r)&&D(r)==xi}var Ie=J&&J.isSet,Ui=Ie?Nr(Ie):Ni,Vi=1,Bi=2,Gi=4,et="[object Arguments]",zi="[object Array]",Hi="[object Boolean]",Ki="[object Date]",ki="[object Error]",tt="[object Function]",Wi="[object GeneratorFunction]",Yi="[object Map]",qi="[object Number]",nt="[object Object]",Xi="[object RegExp]",Zi="[object Set]",Ji="[object String]",Qi="[object Symbol]",ro="[object WeakMap]",eo="[object ArrayBuffer]",to="[object DataView]",no="[object Float32Array]",ao="[object Float64Array]",io="[object Int8Array]",oo="[object Int16Array]",uo="[object Int32Array]",co="[object Uint8Array]",so="[object Uint8ClampedArray]",lo="[object Uint16Array]",fo="[object Uint32Array]",T={};T[et]=T[zi]=T[eo]=T[to]=T[Hi]=T[Ki]=T[no]=T[ao]=T[io]=T[oo]=T[uo]=T[Yi]=T[qi]=T[nt]=T[Xi]=T[Zi]=T[Ji]=T[Qi]=T[co]=T[so]=T[lo]=T[fo]=!0;T[ki]=T[tt]=T[ro]=!1;function nr(r,e,t,n,i,o){var c,v=e&Vi,E=e&Bi,b=e&Gi;if(c!==void 0)return c;if(!ur(r))return r;var N=cr(r);if(N){if(c=oi(r),!v)return Xe(r,c)}else{var I=D(r),f=I==tt||I==Wi;if(He(r))return za(r,v);if(I==nt||I==et||f&&!i){if(c=E||f?{}:Ri(r),!v)return E?qa(r,Ba(c,r)):Wa(r,Da(c,r))}else{if(!T[I])return i?r:{};c=Fi(r,I,v)}}o||(o=new Q);var O=o.get(r);if(O)return O;o.set(r,c),Ui(r)?r.forEach(function(j){c.add(nr(j,e,t,j,r,o))}):Di(r)&&r.forEach(function(j,S){c.set(S,nr(j,e,t,S,r,o))});var P=b?E?Za:Xa:E?Br:Vr,M=N?void 0:P(r);return Bn(M||r,function(j,S){M&&(S=j,j=r[S]),Be(c,S,nr(j,e,t,S,r,o))}),c}var po=1,vo=4;function fr(r){return nr(r,po|vo)}var we=Array.isArray,Ce=Object.keys,ho=Object.prototype.hasOwnProperty,yo=typeof Element<"u";function Lr(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){var t=we(r),n=we(e),i,o,c;if(t&&n){if(o=r.length,o!=e.length)return!1;for(i=o;i--!==0;)if(!Lr(r[i],e[i]))return!1;return!0}if(t!=n)return!1;var v=r instanceof Date,E=e instanceof Date;if(v!=E)return!1;if(v&&E)return r.getTime()==e.getTime();var b=r instanceof RegExp,N=e instanceof RegExp;if(b!=N)return!1;if(b&&N)return r.toString()==e.toString();var I=Ce(r);if(o=I.length,o!==Ce(e).length)return!1;for(i=o;i--!==0;)if(!ho.call(e,I[i]))return!1;if(yo&&r instanceof Element&&e instanceof Element)return r===e;for(i=o;i--!==0;)if(c=I[i],!(c==="_owner"&&r.$$typeof)&&!Lr(r[c],e[c]))return!1;return!0}return r!==r&&e!==e}var go=function(e,t){try{return Lr(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const z=At(go);var bo=4;function Fe(r){return nr(r,bo)}function at(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}var To="[object Symbol]";function Hr(r){return typeof r=="symbol"||W(r)&&k(r)==To}var mo="Expected a function";function Kr(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError(mo);var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var c=r.apply(this,n);return t.cache=o.set(i,c)||o,c};return t.cache=new(Kr.Cache||B),t}Kr.Cache=B;var Eo=500;function So(r){var e=Kr(r,function(n){return t.size===Eo&&t.clear(),n}),t=e.cache;return e}var _o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ao=/\\(\\)?/g,jo=So(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(_o,function(t,n,i,o){e.push(i?o.replace(Ao,"$1"):n||t)}),e}),Oo=1/0;function $o(r){if(typeof r=="string"||Hr(r))return r;var e=r+"";return e=="0"&&1/r==-Oo?"-0":e}var Io=1/0,Me=V?V.prototype:void 0,Re=Me?Me.toString:void 0;function it(r){if(typeof r=="string")return r;if(cr(r))return at(r,it)+"";if(Hr(r))return Re?Re.call(r):"";var e=r+"";return e=="0"&&1/r==-Io?"-0":e}function wo(r){return r==null?"":it(r)}function ot(r){return cr(r)?at(r,$o):Hr(r)?[r]:Xe(jo(wo(r)))}function A(){return A=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},A.apply(this,arguments)}function ut(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}var gr=d.createContext(void 0);gr.displayName="FormikContext";var Co=gr.Provider;gr.Consumer;function Fo(){var r=d.useContext(gr);return r}var C=function(e){return typeof e=="function"},br=function(e){return e!==null&&typeof e=="object"},Mo=function(e){return String(Math.floor(Number(e)))===e},Ir=function(e){return Object.prototype.toString.call(e)==="[object String]"},Ro=function(e){return d.Children.count(e)===0},wr=function(e){return br(e)&&C(e.then)};function $(r,e,t,n){n===void 0&&(n=0);for(var i=ot(e);r&&n<i.length;)r=r[i[n++]];return n!==i.length&&!r||r===void 0?t:r}function H(r,e,t){for(var n=Fe(r),i=n,o=0,c=ot(e);o<c.length-1;o++){var v=c[o],E=$(r,c.slice(0,o+1));if(E&&(br(E)||Array.isArray(E)))i=i[v]=Fe(E);else{var b=c[o+1];i=i[v]=Mo(b)&&Number(b)>=0?[]:{}}}return(o===0?r:i)[c[o]]===t?r:(t===void 0?delete i[c[o]]:i[c[o]]=t,o===0&&t===void 0&&delete n[c[o]],n)}function ct(r,e,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(r);i<o.length;i++){var c=o[i],v=r[c];br(v)?t.get(v)||(t.set(v,!0),n[c]=Array.isArray(v)?[]:{},ct(v,e,t,n[c])):n[c]=e}return n}function Po(r,e){switch(e.type){case"SET_VALUES":return A({},r,{values:e.payload});case"SET_TOUCHED":return A({},r,{touched:e.payload});case"SET_ERRORS":return z(r.errors,e.payload)?r:A({},r,{errors:e.payload});case"SET_STATUS":return A({},r,{status:e.payload});case"SET_ISSUBMITTING":return A({},r,{isSubmitting:e.payload});case"SET_ISVALIDATING":return A({},r,{isValidating:e.payload});case"SET_FIELD_VALUE":return A({},r,{values:H(r.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return A({},r,{touched:H(r.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return A({},r,{errors:H(r.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return A({},r,e.payload);case"SET_FORMIK_STATE":return e.payload(r);case"SUBMIT_ATTEMPT":return A({},r,{touched:ct(r.values,!0),isSubmitting:!0,submitCount:r.submitCount+1});case"SUBMIT_FAILURE":return A({},r,{isSubmitting:!1});case"SUBMIT_SUCCESS":return A({},r,{isSubmitting:!1});default:return r}}var G={},dr={};function Lo(r){var e=r.validateOnChange,t=e===void 0?!0:e,n=r.validateOnBlur,i=n===void 0?!0:n,o=r.validateOnMount,c=o===void 0?!1:o,v=r.isInitialValid,E=r.enableReinitialize,b=E===void 0?!1:E,N=r.onSubmit,I=ut(r,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=A({validateOnChange:t,validateOnBlur:i,validateOnMount:c,onSubmit:N},I),O=d.useRef(f.initialValues),P=d.useRef(f.initialErrors||G),M=d.useRef(f.initialTouched||dr),j=d.useRef(f.initialStatus),S=d.useRef(!1),U=d.useRef({});d.useEffect(function(){return S.current=!0,function(){S.current=!1}},[]);var st=d.useState(0),lt=st[1],sr=d.useRef({values:fr(f.initialValues),errors:fr(f.initialErrors)||G,touched:fr(f.initialTouched)||dr,status:fr(f.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),g=sr.current,y=d.useCallback(function(a){var u=sr.current;sr.current=Po(u,a),u!==sr.current&&lt(function(s){return s+1})},[]),kr=d.useCallback(function(a,u){return new Promise(function(s,l){var p=f.validate(a,u);p==null?s(G):wr(p)?p.then(function(h){s(h||G)},function(h){l(h)}):s(p)})},[f.validate]),Tr=d.useCallback(function(a,u){var s=f.validationSchema,l=C(s)?s(u):s,p=u&&l.validateAt?l.validateAt(u,a):xo(a,l);return new Promise(function(h,_){p.then(function(){h(G)},function(L){L.name==="ValidationError"?h(Do(L)):_(L)})})},[f.validationSchema]),Wr=d.useCallback(function(a,u){return new Promise(function(s){return s(U.current[a].validate(u))})},[]),Yr=d.useCallback(function(a){var u=Object.keys(U.current).filter(function(l){return C(U.current[l].validate)}),s=u.length>0?u.map(function(l){return Wr(l,$(a,l))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(s).then(function(l){return l.reduce(function(p,h,_){return h==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||h&&(p=H(p,u[_],h)),p},{})})},[Wr]),ft=d.useCallback(function(a){return Promise.all([Yr(a),f.validationSchema?Tr(a):{},f.validate?kr(a):{}]).then(function(u){var s=u[0],l=u[1],p=u[2],h=Cr.all([s,l,p],{arrayMerge:No});return h})},[f.validate,f.validationSchema,Yr,kr,Tr]),F=w(function(a){return a===void 0&&(a=g.values),y({type:"SET_ISVALIDATING",payload:!0}),ft(a).then(function(u){return S.current&&(y({type:"SET_ISVALIDATING",payload:!1}),y({type:"SET_ERRORS",payload:u})),u})});d.useEffect(function(){c&&S.current===!0&&z(O.current,f.initialValues)&&F(O.current)},[c,F]);var rr=d.useCallback(function(a){var u=a&&a.values?a.values:O.current,s=a&&a.errors?a.errors:P.current?P.current:f.initialErrors||{},l=a&&a.touched?a.touched:M.current?M.current:f.initialTouched||{},p=a&&a.status?a.status:j.current?j.current:f.initialStatus;O.current=u,P.current=s,M.current=l,j.current=p;var h=function(){y({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:s,touched:l,status:p,values:u,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var _=f.onReset(g.values,ae);wr(_)?_.then(h):h()}else h()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);d.useEffect(function(){S.current===!0&&!z(O.current,f.initialValues)&&b&&(O.current=f.initialValues,rr(),c&&F(O.current))},[b,f.initialValues,rr,c,F]),d.useEffect(function(){b&&S.current===!0&&!z(P.current,f.initialErrors)&&(P.current=f.initialErrors||G,y({type:"SET_ERRORS",payload:f.initialErrors||G}))},[b,f.initialErrors]),d.useEffect(function(){b&&S.current===!0&&!z(M.current,f.initialTouched)&&(M.current=f.initialTouched||dr,y({type:"SET_TOUCHED",payload:f.initialTouched||dr}))},[b,f.initialTouched]),d.useEffect(function(){b&&S.current===!0&&!z(j.current,f.initialStatus)&&(j.current=f.initialStatus,y({type:"SET_STATUS",payload:f.initialStatus}))},[b,f.initialStatus,f.initialTouched]);var qr=w(function(a){if(U.current[a]&&C(U.current[a].validate)){var u=$(g.values,a),s=U.current[a].validate(u);return wr(s)?(y({type:"SET_ISVALIDATING",payload:!0}),s.then(function(l){return l}).then(function(l){y({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),y({type:"SET_ISVALIDATING",payload:!1})})):(y({type:"SET_FIELD_ERROR",payload:{field:a,value:s}}),Promise.resolve(s))}else if(f.validationSchema)return y({type:"SET_ISVALIDATING",payload:!0}),Tr(g.values,a).then(function(l){return l}).then(function(l){y({type:"SET_FIELD_ERROR",payload:{field:a,value:$(l,a)}}),y({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),dt=d.useCallback(function(a,u){var s=u.validate;U.current[a]={validate:s}},[]),pt=d.useCallback(function(a){delete U.current[a]},[]),Xr=w(function(a,u){y({type:"SET_TOUCHED",payload:a});var s=u===void 0?i:u;return s?F(g.values):Promise.resolve()}),Zr=d.useCallback(function(a){y({type:"SET_ERRORS",payload:a})},[]),Jr=w(function(a,u){var s=C(a)?a(g.values):a;y({type:"SET_VALUES",payload:s});var l=u===void 0?t:u;return l?F(s):Promise.resolve()}),lr=d.useCallback(function(a,u){y({type:"SET_FIELD_ERROR",payload:{field:a,value:u}})},[]),X=w(function(a,u,s){y({type:"SET_FIELD_VALUE",payload:{field:a,value:u}});var l=s===void 0?t:s;return l?F(H(g.values,a,u)):Promise.resolve()}),Qr=d.useCallback(function(a,u){var s=u,l=a,p;if(!Ir(a)){a.persist&&a.persist();var h=a.target?a.target:a.currentTarget,_=h.type,L=h.name,Ar=h.id,jr=h.value,St=h.checked,zo=h.outerHTML,ie=h.options,_t=h.multiple;s=u||L||Ar,l=/number|range/.test(_)?(p=parseFloat(jr),isNaN(p)?"":p):/checkbox/.test(_)?Vo($(g.values,s),St,jr):ie&&_t?Uo(ie):jr}s&&X(s,l)},[X,g.values]),mr=w(function(a){if(Ir(a))return function(u){return Qr(u,a)};Qr(a)}),Z=w(function(a,u,s){u===void 0&&(u=!0),y({type:"SET_FIELD_TOUCHED",payload:{field:a,value:u}});var l=s===void 0?i:s;return l?F(g.values):Promise.resolve()}),re=d.useCallback(function(a,u){a.persist&&a.persist();var s=a.target,l=s.name,p=s.id,h=s.outerHTML,_=u||l||p;Z(_,!0)},[Z]),Er=w(function(a){if(Ir(a))return function(u){return re(u,a)};re(a)}),ee=d.useCallback(function(a){C(a)?y({type:"SET_FORMIK_STATE",payload:a}):y({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),te=d.useCallback(function(a){y({type:"SET_STATUS",payload:a})},[]),ne=d.useCallback(function(a){y({type:"SET_ISSUBMITTING",payload:a})},[]),Sr=w(function(){return y({type:"SUBMIT_ATTEMPT"}),F().then(function(a){var u=a instanceof Error,s=!u&&Object.keys(a).length===0;if(s){var l;try{if(l=ht(),l===void 0)return}catch(p){throw p}return Promise.resolve(l).then(function(p){return S.current&&y({type:"SUBMIT_SUCCESS"}),p}).catch(function(p){if(S.current)throw y({type:"SUBMIT_FAILURE"}),p})}else if(S.current&&(y({type:"SUBMIT_FAILURE"}),u))throw a})}),vt=w(function(a){a&&a.preventDefault&&C(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&C(a.stopPropagation)&&a.stopPropagation(),Sr().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),ae={resetForm:rr,validateForm:F,validateField:qr,setErrors:Zr,setFieldError:lr,setFieldTouched:Z,setFieldValue:X,setStatus:te,setSubmitting:ne,setTouched:Xr,setValues:Jr,setFormikState:ee,submitForm:Sr},ht=w(function(){return N(g.values,ae)}),yt=w(function(a){a&&a.preventDefault&&C(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&C(a.stopPropagation)&&a.stopPropagation(),rr()}),gt=d.useCallback(function(a){return{value:$(g.values,a),error:$(g.errors,a),touched:!!$(g.touched,a),initialValue:$(O.current,a),initialTouched:!!$(M.current,a),initialError:$(P.current,a)}},[g.errors,g.touched,g.values]),bt=d.useCallback(function(a){return{setValue:function(s,l){return X(a,s,l)},setTouched:function(s,l){return Z(a,s,l)},setError:function(s){return lr(a,s)}}},[X,Z,lr]),Tt=d.useCallback(function(a){var u=br(a),s=u?a.name:a,l=$(g.values,s),p={name:s,value:l,onChange:mr,onBlur:Er};if(u){var h=a.type,_=a.value,L=a.as,Ar=a.multiple;h==="checkbox"?_===void 0?p.checked=!!l:(p.checked=!!(Array.isArray(l)&&~l.indexOf(_)),p.value=_):h==="radio"?(p.checked=l===_,p.value=_):L==="select"&&Ar&&(p.value=p.value||[],p.multiple=!0)}return p},[Er,mr,g.values]),_r=d.useMemo(function(){return!z(O.current,g.values)},[O.current,g.values]),mt=d.useMemo(function(){return typeof v<"u"?_r?g.errors&&Object.keys(g.errors).length===0:v!==!1&&C(v)?v(f):v:g.errors&&Object.keys(g.errors).length===0},[v,_r,g.errors,f]),Et=A({},g,{initialValues:O.current,initialErrors:P.current,initialTouched:M.current,initialStatus:j.current,handleBlur:Er,handleChange:mr,handleReset:yt,handleSubmit:vt,resetForm:rr,setErrors:Zr,setFormikState:ee,setFieldTouched:Z,setFieldValue:X,setFieldError:lr,setStatus:te,setSubmitting:ne,setTouched:Xr,setValues:Jr,submitForm:Sr,validateForm:F,validateField:qr,isValid:mt,dirty:_r,unregisterField:pt,registerField:dt,getFieldProps:Tt,getFieldMeta:gt,getFieldHelpers:bt,validateOnBlur:i,validateOnChange:t,validateOnMount:c});return Et}function Ko(r){var e=Lo(r),t=r.component,n=r.children,i=r.render,o=r.innerRef;return d.useImperativeHandle(o,function(){return e}),d.createElement(Co,{value:e},t?d.createElement(t,e):i?i(e):n?C(n)?n(e):Ro(n)?null:d.Children.only(n):null)}function Do(r){var e={};if(r.inner){if(r.inner.length===0)return H(e,r.path,r.message);for(var i=r.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var c=o;$(e,c.path)||(e=H(e,c.path,c.message))}}return e}function xo(r,e,t,n){t===void 0&&(t=!1);var i=Dr(r);return e[t?"validateSync":"validate"](i,{abortEarly:!1,context:i})}function Dr(r){var e=Array.isArray(r)?[]:{};for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t)){var n=String(t);Array.isArray(r[n])===!0?e[n]=r[n].map(function(i){return Array.isArray(i)===!0||ue(i)?Dr(i):i!==""?i:void 0}):ue(r[n])?e[n]=Dr(r[n]):e[n]=r[n]!==""?r[n]:void 0}return e}function No(r,e,t){var n=r.slice();return e.forEach(function(o,c){if(typeof n[c]>"u"){var v=t.clone!==!1,E=v&&t.isMergeableObject(o);n[c]=E?Cr(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[c]=Cr(r[c],o,t):r.indexOf(o)===-1&&n.push(o)}),n}function Uo(r){return Array.from(r).filter(function(e){return e.selected}).map(function(e){return e.value})}function Vo(r,e,t){if(typeof r=="boolean")return!!e;var n=[],i=!1,o=-1;if(Array.isArray(r))n=r,o=r.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!e;return e&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Bo=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function w(r){var e=d.useRef(r);return Bo(function(){e.current=r}),d.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.current.apply(void 0,n)},[])}var Go=d.forwardRef(function(r,e){var t=r.action,n=ut(r,["action"]),i=t??"#",o=Fo(),c=o.handleReset,v=o.handleSubmit;return d.createElement("form",A({onSubmit:v,ref:e,onReset:c,action:i},n))});Go.displayName="Form";export{Ko as F};
