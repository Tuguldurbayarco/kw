import{a9 as b,aa as E,ab as k,Q as R,t as B,ac as C,d as M,V as P,ad as S,I as W,ae as Y,E as j,H as m,Z as w,G as D,B as q,D as p,af as $,F,ag as G,ah as Q,ai as Z,aj as z,ak as J,C as K,p as U,c as X,A as L,v as x}from"./CA-QuxXF.js";import{b as rr}from"./BW5gpjcp.js";const tr=["touchstart","touchmove"];function er(r){return tr.includes(r)}function ar(r){var t=k,a=R;b(null),E(null);try{return r()}finally{b(t),E(a)}}const ir=new Set,O=new Set;function nr(r,t,a,o={}){function n(e){if(o.capture||y.call(t,e),!e.cancelBubble)return ar(()=>a==null?void 0:a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?C(()=>{t.addEventListener(r,n,o)}):t.addEventListener(r,n,o),n}function fr(r,t,a,o,n){var e={capture:o,passive:n},u=nr(r,t,a,e);(t===document.body||t===window||t===document)&&B(()=>{t.removeEventListener(r,u,e)})}function y(r){var A;var t=this,a=t.ownerDocument,o=r.type,n=((A=r.composedPath)==null?void 0:A.call(r))||[],e=n[0]||r.target,u=0,_=r.__root;if(_){var l=n.indexOf(_);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var h=n.indexOf(t);if(h===-1)return;l<=h&&(u=l)}if(e=n[u]||r.target,e!==t){M(r,"currentTarget",{configurable:!0,get(){return e||a}});var T=k,f=R;b(null),E(null);try{for(var i,s=[];e!==null;){var c=e.assignedSlot||e.parentNode||e.host||null;try{var d=e["__"+o];if(d!==void 0&&!e.disabled)if(P(d)){var[V,...H]=d;V.apply(e,[r,...H])}else d.call(e,r)}catch(g){i?s.push(g):i=g}if(r.cancelBubble||c===t||c===null)break;e=c}if(i){for(let g of s)queueMicrotask(()=>{throw g});throw i}}finally{r.__root=t,delete r.currentTarget,b(T),E(f)}}}function cr(r,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a+"")}function sr(r,t){return I(r,t)}function lr(r,t){S(),t.intro=t.intro??!1;const a=t.target,o=L,n=p;try{for(var e=W(a);e&&(e.nodeType!==8||e.data!==Y);)e=j(e);if(!e)throw m;w(!0),D(e),q();const u=I(r,{...t,anchor:e});if(p===null||p.nodeType!==8||p.data!==$)throw F(),m;return w(!1),u}catch(u){if(u===m)return t.recover===!1&&G(),S(),Q(a),w(!1),sr(r,t);throw u}finally{w(o),D(n)}}const v=new Map;function I(r,{target:t,anchor:a,props:o={},events:n,context:e,intro:u=!0}){S();var _=new Set,l=f=>{for(var i=0;i<f.length;i++){var s=f[i];if(!_.has(s)){_.add(s);var c=er(s);t.addEventListener(s,y,{passive:c});var d=v.get(s);d===void 0?(document.addEventListener(s,y,{passive:c}),v.set(s,1)):v.set(s,d+1)}}};l(Z(ir)),O.add(l);var h=void 0,T=z(()=>{var f=a??t.appendChild(J());return K(()=>{if(e){U({});var i=X;i.c=e}n&&(o.$$events=n),L&&rr(f,null),h=r(f,o)||{},L&&(R.nodes_end=p),e&&x()}),()=>{var c;for(var i of _){t.removeEventListener(i,y);var s=v.get(i);--s===0?(document.removeEventListener(i,y),v.delete(i)):v.set(i,s)}O.delete(l),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return N.set(h,T),h}let N=new WeakMap;function dr(r,t){const a=N.get(r);return a?(N.delete(r),a(t)):Promise.resolve()}export{fr as e,lr as h,sr as m,cr as s,dr as u};
