var Fn=Array.isArray,zt=Array.prototype.indexOf,qn=Array.from,Ln=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Yn=Array.prototype,Xt=Object.getPrototypeOf;const Hn=()=>{};function jn(t){return t()}function Jt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,wt=4,J=8,ot=16,R=32,j=64,G=128,w=256,K=512,v=1024,I=2048,q=4096,F=8192,Q=16384,Qt=32768,Tt=65536,Bn=1<<17,tn=1<<19,mt=1<<20,pt=Symbol("$state"),Un=Symbol("legacy props"),Vn=Symbol("");function gt(t){return t===this.v}function nn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!nn(t,this.v)}function rn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function en(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(t){throw new Error("https://svelte.dev/e/effect_orphan")}function sn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Gn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Kn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function $n(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function zn(){tt=!0}const Wn=1,Xn=2,Jn=4,Qn=8,tr=16,nr=1,rr=2,er=4,lr=8,sr=16,ar=1,ur=2,on="[",fn="[!",_n="]",xt={},or=Symbol();function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function ht(t){f=t}function fr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(f.l={s:null,u:null,r1:[],r2:ft(!1)})}function ir(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];z(s.effect),Z(s.reaction),Pt(s.fn)}}finally{z(r),Z(e)}}f=n.p,n.m=!0}return{}}function nt(){return!tt||f!==null&&f.l===null}function ft(t,n){var r={f:0,v:t,reactions:null,equals:gt,rv:0,wv:0};return r}function _r(t){return Rt(ft(t))}function cn(t,n=!1){var e;const r=ft(t);return n||(r.equals=At),tt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function cr(t,n=!1){return Rt(cn(t,n))}function Rt(t){return u!==null&&!g&&u.f&T&&(A===null?Dn([t]):A.push(t)),t}function vr(t,n){return u!==null&&!g&&nt()&&u.f&(T|ot)&&(A===null||!A.includes(t))&&un(),vn(t,n)}function vn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ut(),St(t,I),nt()&&o!==null&&o.f&v&&!(o.f&(R|j))&&(D===null?Rn([t]):D.push(t))),n}function St(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&I||!e&&a===o||(x(a,n),i&(v|w)&&(i&T?St(a,q):et(a)))}}let k=!1;function pr(t){k=t}let m;function M(t){if(t===null)throw Dt(),xt;return m=t}function hr(){return M(N(m))}function dr(t){if(k){if(N(m)!==null)throw Dt(),xt;m=t}}function Er(t=1){if(k){for(var n=t,r=m;n--;)r=N(r);m=r}}function yr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===_n){if(t===0)return n;t-=1}else(r===on||r===fn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var dt,pn,It,Ot;function wr(){if(dt===void 0){dt=window,pn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;It=vt(n,"firstChild").get,Ot=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function st(t){return It.call(t)}function N(t){return Ot.call(t)}function Tr(t,n){if(!k)return st(t);var r=st(m);if(r===null)r=m.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),M(e),e}return M(r),r}function mr(t,n){if(!k){var r=st(t);return r instanceof Comment&&r.data===""?N(r):r}return m}function gr(t,n=1,r=!1){let e=k?m:t;for(var l;n--;)l=e,e=N(e);if(!k)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=lt();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function Ar(t){t.textContent=""}function kt(t){var n=T|I,r=u!==null&&u.f&T?u:null;return o===null||r!==null&&r.f&w?n|=w:o.f|=mt,{ctx:f,deps:null,effects:null,equals:gt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function xr(t){const n=kt(t);return n.equals=At,n}function Ct(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)C(n[r])}}function hn(t){for(var n=t.parent;n!==null;){if(!(n.f&T))return n;n=n.parent}return null}function dn(t){var n,r=o;z(hn(t));try{Ct(t),n=Gt(t)}finally{z(r)}return n}function Nt(t){var n=dn(t),r=(S||t.f&w)&&t.deps!==null?q:v;x(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function bt(t){o===null&&u===null&&ln(),u!==null&&u.f&w&&o===null&&en(),it&&rn()}function En(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var l=(t&j)!==0,s=o,a={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=b;try{Et(!0),_t(a),a.f|=Qt}catch(p){throw C(a),p}finally{Et(i)}}else n!==null&&et(a);var y=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(mt|G))===0;if(!y&&!l&&e&&(s!==null&&En(a,s),u!==null&&u.f&T)){var _=u;(_.effects??(_.effects=[])).push(a)}return a}function Dr(t){const n=L(J,null,!1);return x(n,v),n.teardown=t,n}function Rr(t){bt();var n=o!==null&&(o.f&R)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Pt(t);return e}}function Sr(t){return bt(),yn(t)}function Ir(t){const n=L(j,t,!0);return(r={})=>new Promise(e=>{r.outro?mn(n,()=>{C(n),e(void 0)}):(C(n),e(void 0))})}function Pt(t){return L(wt,t,!1)}function yn(t){return L(J,t,!0)}function Or(t,n=[],r=kt){const e=n.map(r);return wn(()=>t(...e.map(bn)))}function wn(t,n=0){return L(J|ot|n,t,!0)}function kr(t,n=!0){return L(J|R,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=it,e=u;yt(!0),Z(null);try{n.call(null)}finally{yt(r),Z(e)}}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function Tn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&R||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&tn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}r=!0}qt(t,n&&!r),X(t,0),x(t,Q);var a=t.transitions;if(a!==null)for(const y of a)y.stop();Ft(t);var i=t.parent;i!==null&&i.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function mn(t,n){var r=[];Mt(t,r,!0),gn(r,()=>{C(t),n&&n()})}function gn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Mt(t,n,r){if(!(t.f&F)){if(t.f^=F,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&Tt)!==0||(e.f&R)!==0;Mt(e,n,s?r:!1),e=l}}}function Cr(t){Yt(t,!0)}function Yt(t,n){if(t.f&F){t.f^=F,t.f&v||(t.f^=v),B(t)&&(x(t,I),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&Tt)!==0||(r.f&R)!==0;Yt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let $=!1,at=[];function Ht(){$=!1;const t=at.slice();at=[],Jt(t)}function Nr(t){$||($=!0,queueMicrotask(Ht)),at.push(t)}function An(){$&&Ht()}const jt=0,xn=1;let U=!1,V=jt,Y=!1,H=null,b=!1,it=!1;function Et(t){b=t}function yt(t){it=t}let O=[],P=0;let u=null,g=!1;function Z(t){u=t}let o=null;function z(t){o=t}let A=null;function Dn(t){A=t}let c=null,E=0,D=null;function Rn(t){D=t}let Bt=1,W=0,S=!1;function Ut(){return++Bt}function B(t){var h;var n=t.f;if(n&I)return!0;if(n&q){var r=t.deps,e=(n&w)!==0;if(r!==null){var l,s,a=(n&K)!==0,i=e&&o!==null&&!S,y=r.length;if(a||i){var _=t,p=_.parent;for(l=0;l<y;l++)s=r[l],(a||!((h=s==null?void 0:s.reactions)!=null&&h.includes(_)))&&(s.reactions??(s.reactions=[])).push(_);a&&(_.f^=K),i&&p!==null&&!(p.f&w)&&(_.f^=w)}for(l=0;l<y;l++)if(s=r[l],B(s)&&Nt(s),s.wv>t.wv)return!0}(!e||o!==null&&!S)&&x(t,v)}return!1}function Sn(t,n){for(var r=n;r!==null;){if(r.f&G)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw U=!1,t}function In(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&G)===0)}function rt(t,n,r,e){if(U){if(r===null&&(U=!1),In(n))throw t;return}r!==null&&(U=!0);{Sn(t,n);return}}function Vt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&T?Vt(s,n,!1):n===s&&(r?x(s,I):s.f&v&&x(s,q),et(s))}}function Gt(t){var ct;var n=c,r=E,e=D,l=u,s=S,a=A,i=f,y=g,_=t.f;c=null,E=0,D=null,u=_&(R|j)?null:t,S=(_&w)!==0&&(!b||l===null||y),A=null,ht(t.ctx),g=!1,W++;try{var p=(0,t.fn)(),h=t.deps;if(c!==null){var d;if(X(t,E),h!==null&&E>0)for(h.length=E+c.length,d=0;d<c.length;d++)h[E+d]=c[d];else t.deps=h=c;if(!S)for(d=E;d<h.length;d++)((ct=h[d]).reactions??(ct.reactions=[])).push(t)}else h!==null&&E<h.length&&(X(t,E),h.length=E);if(nt()&&D!==null&&!g&&h!==null&&!(t.f&(T|q|I)))for(d=0;d<D.length;d++)Vt(D[d],t);return l!==null&&W++,p}finally{c=n,E=r,D=e,u=l,S=s,A=a,ht(i),g=y}}function On(t,n){let r=n.reactions;if(r!==null){var e=zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&T&&(c===null||!c.includes(n))&&(x(n,q),n.f&(w|K)||(n.f^=K),Ct(n),X(n,0))}function X(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)On(t,r[e])}function _t(t){var n=t.f;if(!(n&Q)){x(t,v);var r=o,e=f;o=t;try{n&ot?Tn(t):qt(t),Ft(t);var l=Gt(t);t.teardown=typeof l=="function"?l:null,t.wv=Bt;var s=t.deps,a}catch(i){rt(i,t,r,e||t.ctx)}finally{o=r}}}function Kt(){if(P>1e3){P=0;try{sn()}catch(t){if(H!==null)rt(t,H,null);else throw t}}P++}function $t(t){var n=t.length;if(n!==0){Kt();var r=b;b=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&v||(l.f^=v);var s=Nn(l);kn(s)}}finally{b=r}}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(Q|F)))try{B(e)&&(_t(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function Cn(){if(Y=!1,P>1001)return;const t=O;O=[],$t(t),Y||(P=0,H=null)}function et(t){V===jt&&(Y||(Y=!0,queueMicrotask(Cn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(j|R)){if(!(r&v))return;n.f^=v}}O.push(n)}function Nn(t){var n=[],r=t.first;t:for(;r!==null;){var e=r.f,l=(e&R)!==0,s=l&&(e&v)!==0,a=r.next;if(!s&&!(e&F)){if(e&wt)n.push(r);else if(l)r.f^=v;else{var i=u;try{u=r,B(r)&&_t(r)}catch(p){rt(p,r,null,r.ctx)}finally{u=i}}var y=r.first;if(y!==null){r=y;continue}}if(a===null){let p=r.parent;for(;p!==null;){if(t===p)break t;var _=p.next;if(_!==null){r=_;continue t}p=p.parent}}r=a}return n}function Zt(t){var n=V,r=O;try{Kt();const l=[];V=xn,O=l,Y=!1,$t(r);var e=t==null?void 0:t();return An(),(O.length>0||l.length>0)&&Zt(),P=0,H=null,e}finally{V=n,O=r}}async function br(){await Promise.resolve(),Zt()}function bn(t){var n=t.f,r=(n&T)!==0;if(u!==null&&!g){A!==null&&A.includes(t)&&an();var e=u.deps;t.rv<W&&(t.rv=W,c===null&&e!==null&&e[E]===t?E++:c===null?c=[t]:(!S||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,s=l.parent;s!==null&&!(s.f&w)&&(l.f^=w)}return r&&(l=t,B(l)&&Nt(l)),t.v}function Pr(t){var n=g;try{return g=!0,t()}finally{g=n}}const Pn=-7169;function x(t,n){t.f=t.f&Pn|n}function Fr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{mn as $,k as A,hr as B,kr as C,m as D,N as E,Dt as F,M as G,xt as H,st as I,C as J,xr as K,Mn as L,Yn as M,ft as N,Zn as O,vt as P,o as Q,$n as R,pt as S,Xt as T,or as U,Fn as V,Tt as W,fn as X,yr as Y,pr as Z,Cr as _,Rr as a,Kn as a0,Bn as a1,er as a2,At as a3,lr as a4,Un as a5,rr as a6,nr as a7,sr as a8,Z as a9,gn as aA,tr as aB,Wt as aC,Vn as aD,cr as aE,z as aa,u as ab,Nr as ac,wr as ad,on as ae,_n as af,Gn as ag,Ar as ah,qn as ai,Ir as aj,lt as ak,pn as al,ar as am,ur as an,Pt as ao,yn as ap,Zt as aq,_r as ar,br as as,Jn as at,F as au,Xn as av,Qn as aw,Wn as ax,vn as ay,Mt as az,Pr as b,f as c,Ln as d,jn as e,Fr as f,bn as g,kt as h,zn as i,Er as j,nn as k,tt as l,cn as m,Hn as n,mr as o,fr as p,Or as q,Jt as r,vr as s,Dr as t,Sr as u,ir as v,Tr as w,dr as x,gr as y,wn as z};
