import{S as T,Q as G,R as Z,T as E,U as H,a as P,V as h,b as y,W as L,X as K,Y as V,w as W,Z as z,F as M,v as x,G as Q,_ as X,$ as J,a0 as p,N as ee,a1 as B,a2 as U,H as C,a3 as Y,I as te,a4 as re,a5 as ne,D as $,o as ae,a6 as ie,a7 as se,e as k,a8 as fe,a9 as ue,l as le,aa as de,ab as oe,m as ce,ac as ve}from"./jFKnCpb7.js";import{c as _e}from"./BX0-OWv9.js";function w(f,_=null,m){if(typeof f!="object"||f===null||T in f)return f;const c=W(f);if(c!==G&&c!==Z)return f;var a=new Map,o=z(f),l=E(0);o&&a.set("length",E(f.length));var u;return new Proxy(f,{defineProperty(i,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&V();var n=a.get(e);return n===void 0?(n=E(t.value),a.set(e,n)):y(n,w(t.value,u)),!0},deleteProperty(i,e){var t=a.get(e);if(t===void 0)e in i&&a.set(e,E(h));else{if(o&&typeof e=="string"){var n=a.get("length"),r=Number(e);Number.isInteger(r)&&r<n.v&&y(n,r)}y(t,h),j(l)}return!0},get(i,e,t){var d;if(e===T)return f;var n=a.get(e),r=e in i;if(n===void 0&&(!r||(d=L(i,e))!=null&&d.writable)&&(n=E(w(r?i[e]:h,u)),a.set(e,n)),n!==void 0){var s=P(n);return s===h?void 0:s}return Reflect.get(i,e,t)},getOwnPropertyDescriptor(i,e){var t=Reflect.getOwnPropertyDescriptor(i,e);if(t&&"value"in t){var n=a.get(e);n&&(t.value=P(n))}else if(t===void 0){var r=a.get(e),s=r==null?void 0:r.v;if(r!==void 0&&s!==h)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return t},has(i,e){var s;if(e===T)return!0;var t=a.get(e),n=t!==void 0&&t.v!==h||Reflect.has(i,e);if(t!==void 0||K!==null&&(!n||(s=L(i,e))!=null&&s.writable)){t===void 0&&(t=E(n?w(i[e],u):h),a.set(e,t));var r=P(t);if(r===h)return!1}return n},set(i,e,t,n){var R;var r=a.get(e),s=e in i;if(o&&e==="length")for(var d=t;d<r.v;d+=1){var b=a.get(d+"");b!==void 0?y(b,h):d in i&&(b=E(h),a.set(d+"",b))}r===void 0?(!s||(R=L(i,e))!=null&&R.writable)&&(r=E(void 0),y(r,w(t,u)),a.set(e,r)):(s=r.v!==h,y(r,w(t,u)));var g=Reflect.getOwnPropertyDescriptor(i,e);if(g!=null&&g.set&&g.set.call(n,t),!s){if(o&&typeof e=="string"){var I=a.get("length"),A=Number(e);Number.isInteger(A)&&A>=I.v&&y(I,A+1)}j(l)}return!0},ownKeys(i){P(l);var e=Reflect.ownKeys(i).filter(r=>{var s=a.get(r);return s===void 0||s.v!==h});for(var[t,n]of a)n.v!==h&&!(t in i)&&e.push(t);return e},setPrototypeOf(){H()}})}function j(f,_=1){y(f,f.v+_)}function ye(f,_,m=!1){x&&Q();var c=f,a=null,o=null,l=h,u=m?X:0,i=!1;const e=(n,r=!0)=>{i=!0,t(r,n)},t=(n,r)=>{if(l===(l=n))return;let s=!1;if(x){const d=c.data===J;!!l===d&&(c=p(),ee(c),B(!1),s=!0)}l?(a?U(a):r&&(a=C(()=>r(c))),o&&Y(o,()=>{o=null})):(o?U(o):r&&(o=C(()=>r(c))),a&&Y(a,()=>{a=null})),s&&B(!0)};M(()=>{i=!1,_(e),i||t(null,null)},u),x&&(c=te)}function Pe(f,_,m,c){var q;var a=(m&oe)!==0,o=!le||(m&de)!==0,l=(m&fe)!==0,u=(m&ve)!==0,i=!1,e;l?[e,i]=_e(()=>f[_]):e=f[_];var t=T in f||ue in f,n=l&&(((q=L(f,_))==null?void 0:q.set)??(t&&_ in f&&(v=>f[_]=v)))||void 0,r=c,s=!0,d=!1,b=()=>(d=!0,s&&(s=!1,u?r=k(c):r=c),r);e===void 0&&c!==void 0&&(n&&o&&re(),e=b(),n&&n(e));var g;if(o)g=()=>{var v=f[_];return v===void 0?b():(s=!0,d=!1,v)};else{var I=(a?$:ae)(()=>f[_]);I.f|=ne,g=()=>{var v=P(I);return v!==void 0&&(r=void 0),v===void 0?r:v}}if(!(m&ie))return g;if(n){var A=f.$$legacy;return function(v,S){return arguments.length>0?((!o||!S||A||i)&&n(S?g():v),v):g()}}var R=!1,N=ce(e),O=$(()=>{var v=g(),S=P(N);return R?(R=!1,S):N.v=v});return a||(O.equals=se),function(v,S){if(arguments.length>0){const D=S?P(O):o&&l?w(v):v;return O.equals(D)||(R=!0,y(N,D),d&&r!==void 0&&(r=D),k(()=>P(O))),v}return P(O)}}const he="modulepreload",me=function(f,_){return new URL(f,_).href},F={},Ee=function(_,m,c){let a=Promise.resolve();if(m&&m.length>0){const l=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),i=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));a=Promise.allSettled(m.map(e=>{if(e=me(e,c),e in F)return;F[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(!!c)for(let d=l.length-1;d>=0;d--){const b=l[d];if(b.href===e&&(!t||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");if(s.rel=t?"stylesheet":he,t||(s.as="script"),s.crossOrigin="",s.href=e,i&&s.setAttribute("nonce",i),document.head.appendChild(s),t)return new Promise((d,b)=>{s.addEventListener("load",d),s.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${e}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return a.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return _().catch(o)})};export{Ee as _,w as a,ye as i,Pe as p};
